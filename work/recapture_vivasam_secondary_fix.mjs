import { createRequire } from "node:module";
import fs from "node:fs/promises";

const require = createRequire("/Users/webdesign/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/");
const { chromium } = require("playwright");

const outDir = "/Users/webdesign/Documents/Codex/2026-07-02/new-chat/outputs/design-watch/assets";
const target = {
  id: "vivasam-secondary",
  url: "https://v.vivasam.com/main.do",
  cleanFile: "vivasam-secondary-full-clean.png",
  legacyFile: "vivasam-secondary-full.png",
};

async function closeVisibleVivasamPopup(page) {
  const actions = [];

  // First try the real visible text controls. This popup often renders several
  // close nodes, so we prefer the center layer's bottom controls before generic
  // close classes.
  for (const point of [
    { x: 1320, y: 815, label: "center popup close" },
    { x: 1512, y: 26, label: "top no-more close" },
    { x: 1546, y: 790, label: "right carousel close" },
  ]) {
    await page.mouse.click(point.x, point.y);
    await page.waitForTimeout(700);
    actions.push(point.label);
  }

  const genericClosed = await page.evaluate(() => {
    const clicked = [];
    const candidates = Array.from(document.querySelectorAll("button,a,input,label,span,div"))
      .slice(0, 5000)
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        const text = [el.innerText, el.value, el.getAttribute("aria-label"), el.getAttribute("title"), el.className, el.id]
          .filter(Boolean)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
        const isVisible =
          rect.width > 0 &&
          rect.height > 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          rect.x < innerWidth &&
          rect.y < innerHeight &&
          rect.x + rect.width > 0 &&
          rect.y + rect.height > 0;
        const isClose =
          /btn_close|close|닫기|보지 않기/i.test(text) &&
          !/menu|quick/i.test(text) &&
          rect.width <= 260 &&
          rect.height <= 100;
        return { el, text, x: rect.x, y: rect.y, area: rect.width * rect.height, isVisible, isClose };
      })
      .filter((item) => item.isVisible && item.isClose)
      .sort((a, b) => b.y - a.y || a.area - b.area)
      .slice(0, 8);

    for (const item of candidates) {
      item.el.click();
      clicked.push(item.text.slice(0, 120));
    }
    return clicked;
  });

  actions.push(...genericClosed);
  await page.waitForTimeout(1200);
  return actions;
}

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  args: ["--lang=ko-KR"],
});

try {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    locale: "ko-KR",
  });
  const page = await context.newPage();
  await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(8000);
  const closed = await closeVisibleVivasamPopup(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);

  const state = await page.evaluate(() => ({
    title: document.title,
    href: location.href,
    viewportWidth: innerWidth,
    viewportHeight: innerHeight,
    scrollWidth: Math.max(document.documentElement.scrollWidth, document.body?.scrollWidth || 0),
    scrollHeight: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0),
    bodySample: (document.body.innerText || "").slice(0, 500),
  }));

  const tmpPath = `${outDir}/${target.cleanFile}.tmp.png`;
  await page.screenshot({
    path: tmpPath,
    fullPage: true,
    animations: "disabled",
  });
  await fs.rename(tmpPath, `${outDir}/${target.cleanFile}`);
  await fs.copyFile(`${outDir}/${target.cleanFile}`, `${outDir}/${target.legacyFile}`);
  await fs.writeFile(
    `${outDir}/vivasam-secondary-fix-log.json`,
    `${JSON.stringify({ id: target.id, cleanFile: target.cleanFile, legacyFile: target.legacyFile, closed, state }, null, 2)}\n`,
  );
  console.log(JSON.stringify({ id: target.id, closed, state }, null, 2));
  await context.close();
} finally {
  await browser.close();
}
