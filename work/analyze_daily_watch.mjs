import fs from "node:fs/promises";
import path from "node:path";

const assetsDir = path.resolve(process.cwd(), "outputs/design-watch/assets");
const captureLogPath = path.join(assetsDir, "recapture-all-1920-log.json");
const reportPath = path.join(assetsDir, "daily-report.json");

const siteNames = {
  vivasam: "초등 비바샘",
  tsherpa: "T셀파 초등",
  mteacher: "엠티처 초등",
  jihak: "티솔루션 초등",
  "vivasam-secondary": "중·고등 비바샘",
  "tsherpa-secondary": "T셀파 중·고등",
  "mteacher-middle": "엠티처 중등",
  "mteacher-high": "엠티처 고등",
  "jihak-middle": "티솔루션 중등",
  "jihak-high": "티솔루션 고등",
};

const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const captureResults = JSON.parse(await fs.readFile(captureLogPath, "utf8"));
const records = captureResults
  .filter((result) => result.ok && result.structure?.changed)
  .map((result) => ({
    id: `${today}-${result.id}`,
    siteId: result.siteId || result.id,
    pageId: result.pageId || "main",
    pageName: result.pageName || "메인",
    siteName: siteNames[result.siteId || result.id] || result.siteId || result.id,
    date: today,
    type: "검토 필요",
    changeType: "자동 구조 감지",
    area: result.pageName && result.pageName !== "메인" ? `${result.pageName} / UI Structure Signal` : "UI Structure Signal",
    asis: "이전 기준 캡쳐의 구조 시그니처",
    tobe: "오늘 캡쳐의 구조 시그니처",
    comment: `자동 감지된 구조 신호: ${result.structure.reasons.slice(0, 4).join(" / ")}`,
    reasons: result.structure.reasons,
  }));

const failed = captureResults
  .filter((result) => !result.ok)
  .map((result) => ({
    siteId: result.siteId || result.id,
    pageId: result.pageId || "main",
    pageName: result.pageName || "메인",
    siteName: siteNames[result.siteId || result.id] || result.siteId || result.id,
    error: result.error,
  }));

const report = {
  date: today,
  generatedAt: new Date().toISOString(),
  status: records.length ? "needs-review" : "no-change",
  policy: "배너·썸네일·이벤트 이미지는 제외하고, UI 구조와 탐색 흐름 변화만 기록합니다.",
  summary: records.length
    ? `확인할 UI 구조 변화 ${records.length}건`
    : "오늘 기록할 UI 구조 변경 없음",
  records,
  failed,
};

await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ report: reportPath, records: records.length, failed: failed.length }));
