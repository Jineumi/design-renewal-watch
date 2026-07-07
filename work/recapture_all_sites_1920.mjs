import { createRequire } from "node:module";
import fs from "node:fs/promises";

const require = createRequire("/Users/webdesign/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/");
const { chromium } = require("playwright");

const outDir = "/Users/webdesign/Documents/Codex/2026-07-02/new-chat/outputs/design-watch/assets";
const targets = [
  {
    id: "vivasam",
    url: "https://e.vivasam.com/main",
    cleanFile: "vivasam-full-clean.png",
    legacyFile: "vivasam-full.png",
  },
  {
    id: "tsherpa",
    url: "https://ele.tsherpa.co.kr/",
    cleanFile: "tsherpa-full-clean.png",
    legacyFile: "tsherpa-full.png",
  },
  {
    id: "mteacher",
    url: "https://e.m-teacher.co.kr/pages/ele/Main.mrn",
    cleanFile: "mteacher-full-clean.png",
    legacyFile: "mteacher-full.png",
  },
  {
    id: "jihak",
    url: "https://tsol.jihak.co.kr/main.ez?schoolTypeSeq=SUBJECT_SCHOOLTYPE_ELEMENTARY",
    cleanFile: "jihak-full-clean.png",
    legacyFile: "jihak-full.png",
  },
  {
    id: "vivasam-secondary",
    url: "https://v.vivasam.com/main.do",
    cleanFile: "vivasam-secondary-full-clean.png",
    legacyFile: "vivasam-secondary-full.png",
  },
  {
    id: "tsherpa-secondary",
    url: "https://mh.tsherpa.co.kr/",
    cleanFile: "tsherpa-secondary-full-clean.png",
    legacyFile: "tsherpa-secondary-full.png",
  },
  {
    id: "mteacher-middle",
    url: "https://m.m-teacher.co.kr/pages/mid/Main.mrn",
    cleanFile: "mteacher-middle-full-clean.png",
    legacyFile: "mteacher-middle-full.png",
  },
  {
    id: "mteacher-high",
    url: "https://h.m-teacher.co.kr/pages/high/Main.mrn",
    cleanFile: "mteacher-high-full-clean.png",
    legacyFile: "mteacher-high-full.png",
  },
  {
    id: "jihak-middle",
    url: "https://tsol.jihak.co.kr/main.ez?schoolTypeSeq=SUBJECT_SCHOOLTYPE_MIDDLE",
    cleanFile: "jihak-middle-full-clean.png",
    legacyFile: "jihak-middle-full.png",
  },
  {
    id: "jihak-high",
    url: "https://tsol.jihak.co.kr/main.ez?schoolTypeSeq=SUBJECT_SCHOOLTYPE_HIGH",
    cleanFile: "jihak-high-full-clean.png",
    legacyFile: "jihak-high-full.png",
  },
];

async function closeExplicitPopups(page) {
  const closed = [];

  for (let i = 0; i < 6; i += 1) {
    const candidate = await page.evaluate(() => {
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
          const popupAncestor = el.closest(
            '[class*="popup" i], [id*="popup" i], [class*="pop" i], [id*="pop" i], [class*="modal" i], [id*="modal" i], [class*="layer" i], [id*="layer" i], [role="dialog"]',
          );
          const isFixedLayer =
            ["fixed", "sticky"].includes(style.position) &&
            rect.width >= 180 &&
            rect.height >= 120 &&
            rect.x < innerWidth &&
            rect.y < innerHeight;
          const isVisible =
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            Number(style.opacity || 1) !== 0 &&
            rect.x < innerWidth &&
            rect.y < innerHeight &&
            rect.x + rect.width > 0 &&
            rect.y + rect.height > 0;
          const classClose = /closepop|btnpopclose|popup.?close|pop.?close|modal.?close|layer.?close|btn.?close|close.?btn|close_btn|btn_close/i.test(text);
          const textClose =
            text.includes("오늘 하루 보지 않기") ||
            text.includes("7일간 보지 않기") ||
            text.includes("다시 보지 않기") ||
            text === "닫기" ||
            text === "×" ||
            text === "X" ||
            text === "x" ||
            text === "close" ||
            text === "Close";
          const tinyClose = textClose && rect.width <= 120 && rect.height <= 80;
          const explicitClose = (popupAncestor || isFixedLayer) && (classClose || tinyClose || text.includes("오늘 하루 보지 않기") || text.includes("7일간 보지 않기"));

          return {
            text: text.slice(0, 160),
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            area: rect.width * rect.height,
            isVisible,
            explicitClose,
          };
        })
        .filter((item) => item.isVisible && item.explicitClose)
        .sort((a, b) => a.area - b.area);

      return candidates[0] || null;
    });

    if (!candidate) break;
    await page.mouse.click(candidate.x + candidate.width / 2, candidate.y + candidate.height / 2);
    await page.waitForTimeout(700);
    closed.push(candidate.text);
  }

  return closed;
}

async function captureTarget(browser, target) {
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  try {
    await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(7500);
    const closed = await closeExplicitPopups(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1200);

    const state = await page.evaluate(() => ({
      title: document.title,
      href: location.href,
      viewportWidth: innerWidth,
      viewportHeight: innerHeight,
      scrollWidth: Math.max(document.documentElement.scrollWidth, document.body?.scrollWidth || 0),
      scrollHeight: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0),
      visibleDialogs: Array.from(
        document.querySelectorAll('[class*="popup" i], [id*="popup" i], [class*="modal" i], [id*="modal" i], [class*="layer" i], [id*="layer" i], [role="dialog"]'),
      )
        .slice(0, 100)
        .filter((el) => {
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          return (
            rect.width > 120 &&
            rect.height > 80 &&
            rect.x < innerWidth &&
            rect.y < innerHeight &&
            rect.x + rect.width > 0 &&
            rect.y + rect.height > 0 &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            Number(style.opacity || 1) !== 0
          );
        }).length,
    }));

    const tmpPath = `${outDir}/${target.cleanFile}.tmp.png`;
    await page.screenshot({
      path: tmpPath,
      fullPage: true,
      animations: "disabled",
    });
    await fs.rename(tmpPath, `${outDir}/${target.cleanFile}`);
    await fs.copyFile(`${outDir}/${target.cleanFile}`, `${outDir}/${target.legacyFile}`);
    return { id: target.id, ok: true, cleanFile: target.cleanFile, legacyFile: target.legacyFile, closed, state };
  } catch (error) {
    return { id: target.id, ok: false, cleanFile: target.cleanFile, error: String(error?.message || error) };
  } finally {
    await page.close().catch(() => {});
  }
}

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const results = [];
try {
  for (const target of targets) {
    results.push(await captureTarget(browser, target));
    console.log(JSON.stringify(results.at(-1)));
  }
} finally {
  await browser.close();
}

await fs.writeFile(`${outDir}/recapture-all-1920-log.json`, `${JSON.stringify(results, null, 2)}\n`);

const failed = results.filter((result) => !result.ok);
if (failed.length) {
  process.exitCode = 1;
}
