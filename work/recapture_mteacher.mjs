import { createRequire } from "node:module";
import fs from "node:fs/promises";

const require = createRequire("/Users/webdesign/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/");
const { chromium } = require("playwright");

const outDir = "/Users/webdesign/Documents/Codex/2026-07-02/new-chat/outputs/design-watch/assets";
const targets = [
  {
    id: "mteacher-middle",
    url: "https://m.m-teacher.co.kr/pages/mid/Main.mrn",
    file: "mteacher-middle-full-clean.png",
  },
  {
    id: "mteacher-high",
    url: "https://h.m-teacher.co.kr/pages/high/Main.mrn",
    file: "mteacher-high-full-clean.png",
  },
];

async function closeExplicitPopups(page) {
  const closed = [];

  for (let i = 0; i < 4; i += 1) {
    const candidate = await page.evaluate(() => {
      const candidates = Array.from(document.querySelectorAll("button,a,input,label,span,div"))
        .slice(0, 3000)
        .map((el) => {
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          const text = [el.innerText, el.value, el.getAttribute("aria-label"), el.getAttribute("title"), el.className, el.id]
            .filter(Boolean)
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
          const popupAncestor = el.closest(
            '[class*="popup" i], [id*="popup" i], [class*="pop" i], [id*="pop" i], [class*="modal" i], [id*="modal" i], [class*="layer" i], [id*="layer" i]',
          );
          const isVisible =
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            rect.x < innerWidth &&
            rect.y < innerHeight &&
            rect.x + rect.width > 0 &&
            rect.y + rect.height > 0;
          const isExplicitClose =
            !!popupAncestor &&
            (/closepop|btnpopclose|popup.?close|pop.?close|modal.?close|layer.?close|btn.?close|close.?btn/i.test(text) ||
              text.includes("오늘 하루 보지 않기") ||
              text.includes("7일간 보지 않기") ||
              text.includes("다시 보지 않기") ||
              text === "닫기" ||
              text === "×" ||
              text === "X" ||
              text === "x");

          return {
            text: text.slice(0, 140),
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            area: rect.width * rect.height,
            isVisible,
            isExplicitClose,
          };
        })
        .filter((item) => item.isVisible && item.isExplicitClose)
        .sort((a, b) => a.area - b.area);

      return candidates[0] || null;
    });

    if (!candidate) break;

    await page.mouse.click(candidate.x + candidate.width / 2, candidate.y + candidate.height / 2);
    await page.waitForTimeout(600);
    closed.push(candidate.text);
  }

  return closed;
}

async function captureTarget(browser, target) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(7000);
  const closed = await closeExplicitPopups(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  const state = await page.evaluate(() => {
    const menuLike = Array.from(document.querySelectorAll("*"))
      .slice(0, 2500)
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        const text = el.innerText || "";
        return (
          rect.width > 400 &&
          rect.height > 220 &&
          rect.y < 450 &&
          rect.x >= 0 &&
          rect.x < innerWidth &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          /\[2022\]|공통국어|공통영어|공통수학/.test(text)
        );
      }).length;

    return {
      title: document.title,
      href: location.href,
      viewportWidth: innerWidth,
      viewportHeight: innerHeight,
      scrollWidth: Math.max(document.documentElement.scrollWidth, document.body?.scrollWidth || 0),
      scrollHeight: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0),
      menuLike,
    };
  });

  await page.screenshot({
    path: `${outDir}/${target.file}`,
    fullPage: true,
    animations: "disabled",
  });
  await page.close();

  return { id: target.id, file: target.file, closed, state };
}

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const results = [];

try {
  for (const target of targets) {
    results.push(await captureTarget(browser, target));
  }
} finally {
  await browser.close();
}

await fs.writeFile(`${outDir}/mteacher-recapture-log.json`, `${JSON.stringify(results, null, 2)}\n`);
console.log(JSON.stringify(results, null, 2));
