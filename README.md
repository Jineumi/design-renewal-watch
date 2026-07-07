# Design Renewal Watch

교수학습지원 사이트의 UI 구조 변화를 추적하기 위한 리서치 아카이브 프로토타입입니다.

## 배포

- Netlify publish directory: `outputs/design-watch`
- Netlify production URL: https://stellar-basbousa-3c74d9.netlify.app

## 현재 운영 방식

현재 버전은 정적 사이트입니다.

1. `outputs/design-watch` 안의 HTML/CSS/JS/assets를 수정합니다.
2. GitHub에 커밋/푸시합니다.
3. Netlify가 GitHub 변경 사항을 받아 자동 배포합니다.

## 자동 조사로 확장할 때

다음 단계에서는 GitHub Actions로 매일 9시에 캡쳐 스크립트를 실행하고, 변경 감지 결과를 JSON 데이터와 이미지로 저장하는 구조로 확장합니다.

- 1920px 기준 전체 페이지 캡쳐
- 팝업 닫기 후 캡쳐
- 이전 기준 화면과 비교
- 변경이 있으면 `확인 필요` 리포트 생성
- Netlify 자동 재배포
