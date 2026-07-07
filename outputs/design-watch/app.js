const scanDate = "2026-07-02";
const latestCheckDate = "2026-07-07";
const assetVersion = "dailyreport1";
const versionAsset = (path) => (path ? `${path}?v=${assetVersion}` : path);

const sites = [
  {
    id: "vivasam",
    name: "초등 비바샘",
    company: "비상교육",
    url: "https://e.vivasam.com/main",
    image: "./assets/vivasam-thumb.png",
    fullImage: "./assets/vivasam-full-clean.png",
    schoolLevel: "elementary",
    category: "교수학습",
    priority: "High",
    tags: [
      { label: "Mega GNB", labelKo: "메가 GNB" },
      { label: "Quick Panel", labelKo: "퀵패널" },
      { label: "Subject Tabs", labelKo: "교과 탭" }
    ],
    scope: ["홈 구조", "교과 탭", "수업도구", "우측 Quick Panel"],
    lastScan: latestCheckDate,
    shortSignal: "교과 탭과 수업도구 진입을 상단에 고정한 포털형 구조",
    renewalSignal: "교과 탭과 수업도구 진입을 첫 화면 상단에 강하게 고정한 포털형 구조",
    summary:
      "대형 검색, 학년/과목 탭, 우측 퀵메뉴가 동시에 노출된다. 교사가 수업 자료와 도구를 빠르게 호출하는 운영형 대시보드에 가깝다.",
    watchPoints: [
      "상단 메가 내비와 학년별 교과 탭의 위계 변화",
      "우측 퀵메뉴의 도구 배열, 아이콘 스타일, 로그인 영역 분리 방식",
      "수업도구 카드와 배너 영역 사이의 정보 밀도 조절",
      "검색창의 추천어/날짜성 키워드가 탐색 중심으로 바뀌는지"
    ],
    system: {
      layout: "상단 2단 내비 + 과목 탭 + 우측 고정 퀵패널",
      components: "교과 버튼, 수업도구 카드, 퀵메뉴 타일, 검색 입력",
      tone: "오렌지 포인트와 화이트 기반의 업무형 포털"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Home IA / Quick Tools",
        asis: "이전 비교 버전 없음",
        tobe:
          "교과 자료, 평가 자료, 문제은행을 최상위에 배치하고 학년별 과목 탭을 바로 아래에 고정",
        comment:
          "초기 baseline은 콘텐츠 변경보다 IA와 도구 진입 구조를 중심으로 저장. 이후 GNB depth 축소, 퀵패널 재배치, 카드 컴포넌트 변경이 생기면 리뉴얼 신호로 볼 수 있다."
      }
    ]
  },
  {
    id: "tsherpa",
    name: "T셀파 초등",
    company: "천재교육",
    url: "https://ele.tsherpa.co.kr/",
    image: "./assets/tsherpa-thumb.png",
    fullImage: "./assets/tsherpa-full-clean.png",
    schoolLevel: "elementary",
    category: "교수학습",
    priority: "High",
    tags: [
      { label: "Textbook Shelf", labelKo: "교과서 선반" },
      { label: "Right Login", labelKo: "우측 로그인" },
      { label: "Blue Accent", labelKo: "블루 포인트" }
    ],
    scope: ["홈 구조", "교과서 선반", "우측 로그인", "검색/탭"],
    lastScan: latestCheckDate,
    shortSignal: "교과서 선반형 탐색과 우측 로그인 패널 중심 구조",
    renewalSignal: "교과서 표지를 가로 스크롤형 선반처럼 노출해 자료 접근성을 전면화",
    summary:
      "교과서 표지, 일정 배너, 우측 로그인/개인화 패널이 화면 안에 함께 들어온다. 자료 탐색보다 내 교과서 진입을 우선하는 구조다.",
    watchPoints: [
      "내 교과서 영역이 카드형 대시보드로 바뀌는지",
      "로그인 패널과 날씨/개인화 정보의 통합 여부",
      "교과서 표지 리스트의 필터/정렬/학년 선택 UX",
      "보라색 일정 배너가 공지형 시스템 컴포넌트로 분리되는지"
    ],
    system: {
      layout: "상단 검색 + 교과서 가로 리스트 + 우측 로그인 패널",
      components: "교과서 썸네일, 탭형 공지, 로그인 박스, 바로가기 버튼",
      tone: "블루 라인과 보라 배너가 섞인 교육 포털 톤"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Textbook Access",
        asis: "이전 비교 버전 없음",
        tobe:
          "로그인 전에도 교과서 표지 리스트와 주요 학습 메뉴가 넓게 노출되는 구조",
        comment:
          "향후 관찰에서는 교과서 선반 UI가 카드/그리드/개인화 대시보드 중 어느 방향으로 재구성되는지를 우선 추적한다."
      }
    ]
  },
  {
    id: "mteacher",
    name: "엠티처 초등",
    company: "미래엔",
    url: "https://e.m-teacher.co.kr/pages/ele/Main.mrn",
    image: "./assets/mteacher-thumb.png",
    fullImage: "./assets/mteacher-full-clean.png",
    schoolLevel: "elementary",
    category: "교수활동",
    priority: "Medium",
    tags: [
      { label: "Event Hub", labelKo: "이벤트 허브" },
      { label: "Mint System", labelKo: "민트 시스템" },
      { label: "Utility Rail", labelKo: "유틸리티 레일" }
    ],
    scope: ["홈 구조", "즐겨찾기", "이벤트 허브", "우측 Quick Menu"],
    lastScan: latestCheckDate,
    shortSignal: "즐겨찾기·이벤트 허브 중심의 홈 + 우측 퀵메뉴 구조",
    renewalSignal: "즐겨찾기와 이벤트 중심 영역을 나란히 배치하고 우측 Quick Menu를 업무 도구로 고정",
    summary:
      "메인 중앙은 이벤트/알림, 좌측은 즐겨찾기, 우측은 로그인과 도구 패널이다. 민트 컬러가 브랜드 및 액션 포인트로 반복된다.",
    watchPoints: [
      "즐겨찾기 영역이 개인화 홈으로 확장되는지",
      "Quick Menu가 로그인 중심에서 도구 중심으로 재편되는지",
      "민트 포인트 컬러의 버튼/라인/배지 적용 일관성",
      "이벤트 배너 영역과 서비스 카드가 분리된 컴포넌트 체계로 바뀌는지"
    ],
    system: {
      layout: "3열형 홈: 즐겨찾기, 이벤트 허브, 우측 퀵패널",
      components: "로그인 폼, 즐겨찾기 빈 상태, 이벤트 배너, 툴박스 리스트",
      tone: "화이트 베이스에 민트 포인트를 얹은 차분한 업무형"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Dashboard Composition",
        asis: "이전 비교 버전 없음",
        tobe:
          "즐겨찾기 빈 상태, 이벤트 캐러셀, 우측 Quick Menu가 한 화면에서 병렬로 노출",
        comment:
          "메인 구조가 가장 대시보드형에 가깝다. 이후 개인화 영역 확장과 퀵도구의 컴포넌트 정리가 리뉴얼 여부 판단의 핵심이다."
      }
    ]
  },
  {
    id: "jihak",
    name: "티솔루션 초등",
    company: "지학사",
    url: "https://tsol.jihak.co.kr/main.ez?schoolTypeSeq=SUBJECT_SCHOOLTYPE_ELEMENTARY",
    image: "./assets/jihak-thumb.png",
    fullImage: "./assets/jihak-full-clean.png",
    schoolLevel: "elementary",
    category: "수업지원",
    priority: "Medium",
    tags: [
      { label: "Yellow Identity", labelKo: "옐로 아이덴티티" },
      { label: "Floating Tools", labelKo: "플로팅 도구" },
      { label: "Large Banner", labelKo: "대형 배너" }
    ],
    scope: ["홈 구조", "교과서 카드", "대형 공지", "플로팅 Quick Menu"],
    lastScan: latestCheckDate,
    shortSignal: "노란 교과서 카드와 대형 배너 중심의 수업지원 홈",
    renewalSignal: "밝은 하늘색 히어로 영역과 노란 교과서 카드로 브랜드 컬러를 전면화",
    summary:
      "상단 검색, 교과 활동 탭, 내 교과서 카드, 대형 알림 배너가 명확하게 구획된다. 우측 플로팅 도구가 화면 끝에 별도 레이어로 붙는다.",
    watchPoints: [
      "상단 카테고리 바의 NEW 배지와 탭 위계 변화",
      "내 교과서 카드의 과목 선택 버튼 스타일 변경",
      "우측 플로팅 퀵메뉴의 아이콘 체계와 접힘 상태",
      "대형 히어로 배너가 콘텐츠 카드형으로 축소되는지"
    ],
    system: {
      layout: "상단 검색/탭 + 좌측 교과서 카드 + 중앙 대형 공지",
      components: "교과서 카드, 과목 칩, 플로팅 도구 버튼, TOP 버튼",
      tone: "옐로 아이덴티티와 하늘색 배경의 밝은 학습 지원 톤"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Brand / Floating Utility",
        asis: "이전 비교 버전 없음",
        tobe:
          "브랜드 캐릭터와 노란 포인트를 상단 로고, 교과서 카드, 플로팅 메뉴에 반복 적용",
        comment:
          "티솔루션은 브랜드 컬러와 유틸리티 레이어가 강하다. 향후 컬러 시스템 축소 또는 퀵메뉴 재구성이 보이면 리뉴얼성 변화로 기록한다."
      }
    ]
  },
  {
    id: "vivasam-secondary",
    name: "중·고등 비바샘",
    company: "비상교육",
    url: "https://v.vivasam.com/main.do",
    image: "./assets/vivasam-secondary-thumb.png",
    fullImage: "./assets/vivasam-secondary-full-clean.png",
    schoolLevel: "secondary",
    category: "교수학습",
    priority: "High",
    tags: [
      { label: "Subject Portal", labelKo: "교과 포털" },
      { label: "Teacher Tools", labelKo: "교사용 도구" },
      { label: "Search Hub", labelKo: "검색 허브" }
    ],
    scope: ["홈 구조", "교과 자료", "수업도구", "검색 허브"],
    lastScan: latestCheckDate,
    shortSignal: "중·고등 교과 자료와 수업도구를 연결한 포털형 홈",
    renewalSignal: "중·고등 교과 자료와 수업 지원 도구를 포털형 홈에서 빠르게 연결하는 구조",
    summary:
      "과목별 자료 접근과 수업 준비 도구 진입이 같은 화면 안에서 구성된다. 초등 비바샘과 동일 계열의 운영형 교수지원 홈으로 관찰한다.",
    watchPoints: [
      "중·고등 과목 선택 구조와 GNB depth 변화",
      "교과 자료, 평가 자료, 수업도구의 우선순위 재배치 여부",
      "검색 허브와 추천 자료 노출 방식의 변화",
      "상단 공지/배너 영역이 탐색 구조에 영향을 주는지"
    ],
    system: {
      layout: "상단 내비 + 교과 자료 진입 + 수업 지원 도구",
      components: "교과 메뉴, 자료 바로가기, 검색 입력, 추천 콘텐츠 카드",
      tone: "비바샘 계열의 명확한 브랜드 포인트와 업무형 포털 톤"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Secondary Home IA",
        asis: "이전 비교 버전 없음",
        tobe: "중·고등 교수학습 자료와 도구 진입 구조를 최초 기준 화면으로 등록",
        comment:
          "초등과 동일한 기준으로 배너/썸네일 변화는 제외하고, 과목 탐색 구조와 수업도구 진입 변화만 추적한다."
      }
    ]
  },
  {
    id: "tsherpa-secondary",
    name: "T셀파 중·고등",
    company: "천재교육",
    url: "https://mh.tsherpa.co.kr/",
    image: "./assets/tsherpa-secondary-thumb.png",
    fullImage: "./assets/tsherpa-secondary-full-clean.png",
    schoolLevel: "secondary",
    category: "교수학습",
    priority: "High",
    tags: [
      { label: "Textbook Hub", labelKo: "교과서 허브" },
      { label: "Class Material", labelKo: "수업 자료" },
      { label: "Blue System", labelKo: "블루 시스템" }
    ],
    scope: ["홈 구조", "교과서 자료", "수업 자료", "검색/필터"],
    lastScan: latestCheckDate,
    shortSignal: "교과서 기반 자료 탐색과 수업 자료 접근 중심 구조",
    renewalSignal: "중·고등 교과서 기반 자료 탐색과 수업 자료 접근을 한 화면에서 연결하는 구조",
    summary:
      "교과서와 자료 탐색을 중심으로 교사의 수업 준비 동선을 구성한다. 교과서 기반 접근성이 핵심 관찰 대상이다.",
    watchPoints: [
      "교과서/과목 선택 UI가 선반형 또는 카드형으로 바뀌는지",
      "자료 검색과 필터가 상단 탐색 체계로 이동하는지",
      "로그인/개인화 영역이 자료 탐색보다 강하게 노출되는지",
      "중·고등 과목군별 콘텐츠 위계 변화"
    ],
    system: {
      layout: "상단 탐색 + 교과서/자료 허브 + 검색 중심 구조",
      components: "교과서 카드, 자료 필터, 검색 입력, 바로가기 버튼",
      tone: "블루 기반의 안정적인 교육 자료 플랫폼 톤"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Textbook / Material Hub",
        asis: "이전 비교 버전 없음",
        tobe: "중·고등 교과서 기반 자료 탐색 구조를 최초 기준 화면으로 등록",
        comment:
          "교과서 탐색, 자료 필터, 개인화 패널 변화가 발생하면 디자인 구조 변화로 우선 검토한다."
      }
    ]
  },
  {
    id: "mteacher-middle",
    name: "엠티처 중등",
    company: "미래엔",
    url: "https://m.m-teacher.co.kr/pages/mid/Main.mrn",
    image: "./assets/mteacher-middle-thumb.png",
    fullImage: "./assets/mteacher-middle-full-clean.png",
    schoolLevel: "secondary",
    category: "교수활동",
    priority: "Medium",
    tags: [
      { label: "Middle Main", labelKo: "중등 메인" },
      { label: "Utility Menu", labelKo: "유틸리티 메뉴" },
      { label: "Event Hub", labelKo: "이벤트 허브" }
    ],
    scope: ["홈 구조", "중등 자료", "이벤트 허브", "Quick Menu"],
    lastScan: latestCheckDate,
    shortSignal: "중등 자료 접근과 이벤트·도구 영역을 병렬 배치한 홈",
    renewalSignal: "중등 수업 자료와 이벤트/도구 영역을 병렬로 배치하는 교수활동형 홈 구조",
    summary:
      "중등 교사의 수업 준비 흐름을 기준으로 자료 접근과 유틸리티 메뉴를 함께 관찰한다.",
    watchPoints: [
      "중등 과목/자료 진입 방식이 개인화 홈으로 확장되는지",
      "이벤트 영역과 실제 수업 도구 영역의 비중 변화",
      "Quick Menu의 고정 위치와 아이콘 체계 변화",
      "민트 계열 브랜드 포인트 적용 방식"
    ],
    system: {
      layout: "중등 홈 + 자료 진입 + 우측 유틸리티 메뉴",
      components: "자료 카드, 이벤트 배너, 로그인/개인화 패널, 퀵메뉴",
      tone: "화이트 기반에 민트 포인트를 적용한 교수활동 톤"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Middle Dashboard Composition",
        asis: "이전 비교 버전 없음",
        tobe: "엠티처 중등 메인 구조를 최초 기준 화면으로 등록",
        comment:
          "중등 홈은 자료 탐색과 이벤트성 콘텐츠의 경계를 중심으로 리뉴얼 여부를 판단한다."
      }
    ]
  },
  {
    id: "mteacher-high",
    name: "엠티처 고등",
    company: "미래엔",
    url: "https://h.m-teacher.co.kr/pages/high/Main.mrn",
    image: "./assets/mteacher-high-thumb.png",
    fullImage: "./assets/mteacher-high-full-clean.png",
    schoolLevel: "secondary",
    category: "교수활동",
    priority: "Medium",
    tags: [
      { label: "High Main", labelKo: "고등 메인" },
      { label: "Material Access", labelKo: "자료 접근" },
      { label: "Utility Rail", labelKo: "유틸리티 레일" }
    ],
    scope: ["홈 구조", "고등 자료", "교과 진입", "Quick Menu"],
    lastScan: latestCheckDate,
    shortSignal: "고등 교과 자료와 수업지원 진입을 분리한 홈 구조",
    renewalSignal: "고등 교과 자료와 수업 지원 진입을 분리해 탐색하는 교수활동형 홈 구조",
    summary:
      "고등 과목 자료 접근과 퀵 도구의 위계를 중심으로 구조 변화를 관찰한다.",
    watchPoints: [
      "고등 교과/자료 선택 방식의 필터 또는 카드화 여부",
      "대입/평가 관련 콘텐츠가 홈 구조에 미치는 영향",
      "Quick Menu와 개인화 영역의 기능 분리",
      "이벤트 배너가 자료 탐색 흐름을 침범하는지"
    ],
    system: {
      layout: "고등 홈 + 교과 자료 진입 + 유틸리티 레일",
      components: "교과 자료 카드, 검색/필터, 이벤트 영역, 퀵메뉴",
      tone: "미래엔 계열의 차분한 민트 포인트와 업무형 UI"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "High Dashboard Composition",
        asis: "이전 비교 버전 없음",
        tobe: "엠티처 고등 메인 구조를 최초 기준 화면으로 등록",
        comment:
          "고등 홈은 교과 자료, 평가/대입성 콘텐츠, 유틸리티 진입의 위계 변화를 중심으로 기록한다."
      }
    ]
  },
  {
    id: "jihak-middle",
    name: "티솔루션 중등",
    company: "지학사",
    url: "https://tsol.jihak.co.kr/main.ez?schoolTypeSeq=SUBJECT_SCHOOLTYPE_MIDDLE",
    image: "./assets/jihak-middle-thumb.png",
    fullImage: "./assets/jihak-middle-full-clean.png",
    schoolLevel: "secondary",
    category: "수업지원",
    priority: "Medium",
    tags: [
      { label: "Middle Textbook", labelKo: "중등 교과서" },
      { label: "Floating Tools", labelKo: "플로팅 도구" },
      { label: "Yellow Identity", labelKo: "옐로 아이덴티티" }
    ],
    scope: ["홈 구조", "중등 교과서", "수업 자료", "플로팅 Quick Menu"],
    lastScan: latestCheckDate,
    shortSignal: "중등 교과서 카드와 플로팅 도구 중심의 수업지원 홈",
    renewalSignal: "중등 교과서와 수업 자료를 밝은 브랜드 톤 안에서 연결하는 수업지원형 구조",
    summary:
      "교과서 기반 수업 자료와 플로팅 도구의 접근성을 중심으로 중등 홈 구조를 관찰한다.",
    watchPoints: [
      "중등 교과서 카드와 과목 선택 버튼의 스타일 변화",
      "플로팅 퀵메뉴의 접힘/고정 상태 변화",
      "대형 공지 영역이 카드형 콘텐츠로 축소되는지",
      "노란 브랜드 포인트의 적용 범위 변화"
    ],
    system: {
      layout: "상단 검색/탭 + 중등 교과서 자료 + 플로팅 도구",
      components: "교과서 카드, 과목 칩, 공지 영역, TOP/Quick 버튼",
      tone: "옐로 아이덴티티와 밝은 학습 지원 톤"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "Middle Textbook / Floating Utility",
        asis: "이전 비교 버전 없음",
        tobe: "티솔루션 중등 메인 구조를 최초 기준 화면으로 등록",
        comment:
          "교과서 카드, 과목 칩, 플로팅 도구의 구조 변화가 생기면 리뉴얼 신호로 검토한다."
      }
    ]
  },
  {
    id: "jihak-high",
    name: "티솔루션 고등",
    company: "지학사",
    url: "https://tsol.jihak.co.kr/main.ez?schoolTypeSeq=SUBJECT_SCHOOLTYPE_HIGH",
    image: "./assets/jihak-high-thumb.png",
    fullImage: "./assets/jihak-high-full-clean.png",
    schoolLevel: "secondary",
    category: "수업지원",
    priority: "Medium",
    tags: [
      { label: "High Textbook", labelKo: "고등 교과서" },
      { label: "Floating Tools", labelKo: "플로팅 도구" },
      { label: "Large Banner", labelKo: "대형 배너" }
    ],
    scope: ["홈 구조", "고등 교과서", "평가/수업 자료", "플로팅 Quick Menu"],
    lastScan: latestCheckDate,
    shortSignal: "고등 교과서·평가 자료 진입과 플로팅 도구 중심 구조",
    renewalSignal: "고등 교과서와 평가/수업 자료 진입을 브랜드 홈 안에 배치한 수업지원형 구조",
    summary:
      "고등 교과 자료와 수업지원 메뉴의 위계, 플로팅 유틸리티의 접근성을 중심으로 관찰한다.",
    watchPoints: [
      "고등 교과서/평가 자료의 진입 우선순위 변화",
      "상단 검색과 과목 탭의 관계 변화",
      "플로팅 도구 버튼의 아이콘 체계와 접힘 상태",
      "공지/히어로 영역이 탐색 흐름에 주는 영향"
    ],
    system: {
      layout: "상단 검색/탭 + 고등 교과서 자료 + 플로팅 도구",
      components: "교과서 카드, 평가 자료 진입, 플로팅 메뉴, 공지 배너",
      tone: "밝은 학습 지원 톤과 옐로 브랜드 포인트"
    },
    history: [
      {
        date: scanDate,
        type: "Baseline",
        area: "High Textbook / Floating Utility",
        asis: "이전 비교 버전 없음",
        tobe: "티솔루션 고등 메인 구조를 최초 기준 화면으로 등록",
        comment:
          "고등 자료 탐색 구조와 플로팅 유틸리티 변화가 생기면 초등/중등과 비교해 기록한다."
      }
    ]
  }
];

const statusDescriptions = {
  Baseline: "최초 기준 화면 등록 상태. 이후 비교의 기준점입니다.",
  "변경 감지": "리뉴얼 가능성이 있는 구조 변화가 확인된 상태입니다.",
  "검토 필요": "디자인 변경인지 콘텐츠 변경인지 판단이 필요한 상태입니다.",
  "업데이트 완료": "변경 내용이 히스토리에 확정 반영된 상태입니다.",
  "제외 처리": "배너, 썸네일, 문구 교체로 판단해 기록에서 제외한 상태입니다."
};

const insightsBySite = {
  vivasam: {
    reference: "반복 사용 도구를 상단 과목 탭 아래에 묶어 두는 방식은 수업 준비 흐름을 빠르게 만든다.",
    caution: "퀵패널, 과목 탭, 배너가 동시에 강하면 첫 화면의 정보 밀도가 높아질 수 있다.",
    applicability: "검토 필요",
    followUp: "두클래스 수업도구와 자료실 진입을 같은 화면에서 연결할 수 있는지 검토"
  },
  tsherpa: {
    reference: "교과서 표지를 전면에 두는 선반형 구조는 교사가 현재 학년/교과 맥락을 빠르게 인식하게 한다.",
    caution: "로그인 패널과 교과서 리스트가 함께 강하게 보이면 핵심 행동이 분산될 수 있다.",
    applicability: "높음",
    followUp: "교과서 기반 자료 탐색 화면에서 표지, 단원, 평가 진입의 우선순위 검토"
  },
  mteacher: {
    reference: "즐겨찾기, 이벤트, 퀵메뉴를 병렬 배치해 개인화 홈으로 확장할 여지가 있다.",
    caution: "이벤트성 영역이 커지면 디자인 리뉴얼과 콘텐츠 교체를 구분하기 어려워질 수 있다.",
    applicability: "참고만",
    followUp: "두클래스 개인화 홈에서 즐겨찾기 빈 상태와 최근 사용 기능 노출 방식 검토"
  },
  jihak: {
    reference: "브랜드 컬러와 플로팅 도구를 일관되게 반복해 서비스 정체성을 빠르게 각인한다.",
    caution: "우측 플로팅 메뉴가 많아지면 콘텐츠 가독성과 모바일 대응에 부담이 생길 수 있다.",
    applicability: "검토 필요",
    followUp: "두클래스 고정 도구 버튼의 개수, 위치, 접힘 상태 기준 정리"
  },
  "vivasam-secondary": {
    reference: "중·고등 자료 구조는 과목 선택과 자료 검색의 위계가 명확할수록 수업 준비 동선이 짧아진다.",
    caution: "과목군이 많아질수록 GNB와 검색 허브가 동시에 복잡해질 수 있다.",
    applicability: "검토 필요",
    followUp: "두클래스 중·고등 확장 시 과목 선택, 자료 검색, 수업도구 진입의 순서 검토"
  },
  "tsherpa-secondary": {
    reference: "교과서 기반 자료 허브는 중·고등에서도 현재 과목 맥락을 빠르게 고정하는 장점이 있다.",
    caution: "교과서, 평가, 수업 자료가 한 화면에서 경쟁하면 핵심 행동이 흐려질 수 있다.",
    applicability: "높음",
    followUp: "두클래스 자료 탐색에서 교과서 중심 접근과 검색 중심 접근의 병행 기준 검토"
  },
  "mteacher-middle": {
    reference: "중등 홈은 자료 접근과 개인화 도구를 병렬 배치할 때 반복 사용성이 좋아질 수 있다.",
    caution: "이벤트 허브가 커지면 실제 수업 준비 기능이 뒤로 밀릴 수 있다.",
    applicability: "참고만",
    followUp: "두클래스 중등 홈에서 최근 사용 자료와 즐겨찾기 빈 상태 노출 방식 검토"
  },
  "mteacher-high": {
    reference: "고등 홈은 교과 자료와 평가/대입성 콘텐츠의 위계를 분리해 보여주는 방식이 중요하다.",
    caution: "고등 특화 콘텐츠가 많아질수록 홈 IA가 깊어질 가능성이 있다.",
    applicability: "검토 필요",
    followUp: "두클래스 고등 자료 탐색에서 평가/대입성 콘텐츠를 별도 축으로 분리할지 검토"
  },
  "jihak-middle": {
    reference: "중등 교과서 카드와 플로팅 도구를 함께 쓰는 구조는 수업 자료 접근을 빠르게 만든다.",
    caution: "플로팅 도구가 많아지면 본문 카드와 시각적 경쟁이 생길 수 있다.",
    applicability: "검토 필요",
    followUp: "두클래스 중등 자료 카드와 고정 도구 버튼의 우선순위 기준 정리"
  },
  "jihak-high": {
    reference: "고등 교과서/평가 자료를 홈에서 바로 연결하면 교사의 반복 탐색 비용을 줄일 수 있다.",
    caution: "대형 공지와 평가 자료 진입이 함께 강하면 첫 화면 목적이 분산될 수 있다.",
    applicability: "참고만",
    followUp: "두클래스 고등 홈에서 교과 자료와 평가 자료의 별도 진입 구조 검토"
  }
};

const recordPolicy = [
  "배너 이미지만 바뀐 경우는 기록하지 않는다.",
  "썸네일, 문구, 공지 내용만 바뀐 경우는 기록하지 않는다.",
  "배너 영역의 크기, 위치, 노출 방식이 바뀌면 레이아웃 변화로 기록한다.",
  "팝업 광고는 기본적으로 제외하되, 서비스 플로우에 영향을 주면 예외적으로 기록한다."
];

const siteDisplayOrder = {
  tsherpa: 10,
  "tsherpa-secondary": 10,
  vivasam: 20,
  "vivasam-secondary": 20,
  jihak: 30,
  "jihak-middle": 31,
  "jihak-high": 32,
  mteacher: 40,
  "mteacher-middle": 41,
  "mteacher-high": 42
};

const storageKey = "designRenewalWatchRecords";

let selectedSiteId = "tsherpa";
let activeDetailTab = "overview";
let listFilters = {
  school: "elementary",
  status: "all",
  sort: "latest"
};

const siteGrid = document.querySelector("#siteGrid");
const listView = document.querySelector("#listView");
const detailView = document.querySelector("#detailView");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const updateAlerts = document.querySelector("#updateAlerts");
const platformEyebrow = document.querySelector("#platformEyebrow");
const schoolTabs = document.querySelectorAll("[data-school-tab]");
const newSurveyButton = document.querySelector("#newSurveyButton");
const surveyModal = document.querySelector("#surveyModal");
const surveyForm = document.querySelector("#surveyForm");
const surveySite = document.querySelector("#surveySite");
const surveyDate = document.querySelector("#surveyDate");
const surveyStatus = document.querySelector("#surveyStatus");
const surveyChangeType = document.querySelector("#surveyChangeType");
const surveyArea = document.querySelector("#surveyArea");
const surveyAsis = document.querySelector("#surveyAsis");
const surveyTobe = document.querySelector("#surveyTobe");
const surveyMemo = document.querySelector("#surveyMemo");
const closeSurveyButton = document.querySelector("#closeSurveyButton");
const cancelSurveyButton = document.querySelector("#cancelSurveyButton");
const captureModal = document.querySelector("#captureModal");
const captureModalImage = document.querySelector("#captureModalImage");
const captureModalTitle = document.querySelector("#captureModalTitle");
const captureModalMeta = document.querySelector("#captureModalMeta");
const closeCaptureModalButton = document.querySelector("#closeCaptureModalButton");
const dailyReportModal = document.querySelector("#dailyReportModal");
const dailyReportBody = document.querySelector("#dailyReportBody");
const dailyReportMeta = document.querySelector("#dailyReportMeta");
const closeDailyReportButton = document.querySelector("#closeDailyReportButton");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function getTagLabel(tag) {
  return typeof tag === "string" ? tag : tag.label;
}

function getTagSearchText(tag) {
  if (typeof tag === "string") return tag;
  return [tag.label, tag.labelKo].filter(Boolean).join(" ");
}

function getPlatformEyebrow() {
  const labels = {
    all: "TEACHING SUPPORT PLATFORMS",
    elementary: "ELEMENTARY EDUCATION PLATFORMS",
    secondary: "SECONDARY EDUCATION PLATFORMS"
  };

  return labels.all;
}

function getSiteStatus(site) {
  const latest = site.history[0];

  if (latest.type === "업데이트 완료") return "done";
  if (latest.type === "제외 처리") return "excluded";
  if (latest.type === "변경 감지" || latest.type === "검토 필요") return "pending";
  return "no-change";
}

function hasBaseline(site) {
  return site.history.some(record => record.type === "Baseline");
}

function getSiteStatusBadges(site) {
  const status = getSiteStatus(site);
  const badges = [];

  if (hasBaseline(site)) badges.push({ label: "Baseline", tone: "blue" });
  if (status === "no-change") badges.push({ label: "변경 없음", tone: "teal" });
  if (status === "pending") badges.push({ label: "확인 필요", tone: "coral" });
  if (status === "done") badges.push({ label: "업데이트 완료", tone: "green" });
  if (status === "excluded") badges.push({ label: "제외 처리", tone: "gray" });

  return badges;
}

function matchesStatusFilter(site) {
  if (listFilters.status === "all") return true;
  if (listFilters.status === "baseline") return hasBaseline(site);
  return getSiteStatus(site) === listFilters.status;
}

function loadSavedRecords() {
  try {
    const recordsBySite = JSON.parse(localStorage.getItem(storageKey) || "{}");
    sites.forEach(site => {
      const records = Array.isArray(recordsBySite[site.id]) ? recordsBySite[site.id] : [];
      if (!records.length) return;
      site.history = [...records, ...site.history];
      site.lastScan = latestCheckDate;
    });
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveRecord(siteId, record) {
  const recordsBySite = JSON.parse(localStorage.getItem(storageKey) || "{}");
  recordsBySite[siteId] = [record, ...(recordsBySite[siteId] || [])];
  localStorage.setItem(storageKey, JSON.stringify(recordsBySite));
}

function renderSurveyOptions() {
  surveySite.innerHTML = getSitesByDisplayOrder(sites)
    .map(site => `<option value="${site.id}">${escapeHtml(site.name)}</option>`)
    .join("");
}

function compareSiteDisplayOrder(a, b) {
  const orderDiff = (siteDisplayOrder[a.id] ?? 999) - (siteDisplayOrder[b.id] ?? 999);
  return orderDiff || a.name.localeCompare(b.name, "ko");
}

function getSitesByDisplayOrder(list) {
  return [...list].sort(compareSiteDisplayOrder);
}

function getFilteredSites() {
  const term = searchInput.value.trim().toLowerCase();
  const sorted = [...sites].sort((a, b) => {
    if (listFilters.sort === "name") return a.name.localeCompare(b.name, "ko");
    if (listFilters.sort === "pending") {
      const pendingDiff = Number(getSiteStatus(b) === "pending") - Number(getSiteStatus(a) === "pending");
      if (pendingDiff) return pendingDiff;
    }
    return b.lastScan.localeCompare(a.lastScan) || compareSiteDisplayOrder(a, b);
  });

  return sorted.filter(site => {
    const haystack = [
      site.name,
      site.company,
      site.url,
      site.category,
      site.summary,
      site.renewalSignal,
      site.tags.map(getTagSearchText).join(" "),
      site.watchPoints.join(" ")
    ]
      .join(" ")
      .toLowerCase();
    const schoolMatches = listFilters.school === "all" || site.schoolLevel === listFilters.school;
    return schoolMatches && matchesStatusFilter(site) && (!term || haystack.includes(term));
  });
}

function renderListHeading(list) {
  const total = sites.length;
  const visible = list.length;
  platformEyebrow.textContent = getPlatformEyebrow();
  schoolTabs.forEach(tab => {
    const isActive = tab.dataset.schoolTab === listFilters.school;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  if (resultCount) {
    resultCount.textContent =
      visible === total ? `${total}개 사이트가 등록되어 있습니다.` : `${total}개 중 ${visible}개 사이트가 표시됩니다.`;
  }
}

function getAllHistoryRecords() {
  return sites
    .flatMap(site =>
      site.history.map(record => ({
        ...record,
        siteId: site.id,
        siteName: site.name,
        company: site.company,
        category: site.category
      }))
    )
    .sort((a, b) => b.date.localeCompare(a.date));
}

function getAlertRecords() {
  return getAllHistoryRecords().filter(record => record.type !== "Baseline" && record.type !== "제외 처리");
}

function getDailyReportRecords() {
  return getAlertRecords().filter(record => record.date === latestCheckDate);
}

function getReportAction() {
  return `<button class="report-link-button" type="button" data-open-daily-report>상세 리포트 보기 <span aria-hidden="true">›</span></button>`;
}

function renderUpdateAlerts() {
  const alerts = getAlertRecords();
  const dailyReports = getDailyReportRecords();
  const allRecords = getAllHistoryRecords();
  const latestDate = latestCheckDate;
  const pendingCount = alerts.filter(record => record.type === "변경 감지" || record.type === "검토 필요").length;
  const baselineCount = allRecords.filter(record => record.type === "Baseline").length;
  const metricItems = [
    { label: "모니터링", value: `${sites.length}개`, filter: "all", enabled: true },
    { label: "기준 화면", value: `${baselineCount}건`, filter: "baseline", enabled: baselineCount > 0 },
    { label: "확인 필요", value: `${pendingCount}건`, filter: "pending", enabled: pendingCount > 0 }
  ];
  const metricsMarkup = metricItems
    .map(item => {
      const content = `<span>${escapeHtml(item.label)}</span> <strong>${escapeHtml(item.value)}</strong>`;
      if (!item.enabled) return `<span class="metric-card is-disabled" aria-disabled="true">${content}</span>`;
      return `<button class="metric-card" type="button" data-main-status-filter="${escapeHtml(item.filter)}">${content}</button>`;
    })
    .join("");

  if (!dailyReports.length) {
    updateAlerts.innerHTML = `
      <article class="alert-panel quiet">
        <div class="alert-lead">
          <span class="alert-icon calm"></span>
          <strong>오늘 기록할 UI 구조 변경 없음</strong>
          <span>최근 점검 ${escapeHtml(latestDate)}</span>
        </div>
        <div class="alert-metrics">
          ${metricsMarkup}
        </div>
        <div class="alert-actions">
          ${getReportAction()}
        </div>
        <p class="watch-policy">기록 기준: 배너·썸네일·이벤트 이미지는 제외하고, UI 구조와 탐색 흐름의 변화만 기록합니다.</p>
      </article>
    `;
    return;
  }

  updateAlerts.innerHTML = `
    <article class="alert-panel active">
      <div class="alert-lead">
        <span class="alert-icon active"></span>
        <strong>확인할 디자인 구조 변화 ${dailyReports.length}건</strong>
        <span>최근 점검 ${escapeHtml(latestDate)}</span>
      </div>
      <div class="alert-feed">
        ${dailyReports
          .slice(0, 3)
          .map(
            record => `
              <button class="alert-item" type="button" data-alert-site-id="${escapeHtml(record.siteId)}">
                <span class="alert-status">${escapeHtml(record.type)}</span>
                <strong>${escapeHtml(record.siteName)}</strong>
                <span>${escapeHtml(record.area)}</span>
                <small>${escapeHtml(record.date)}</small>
              </button>
            `
          )
          .join("")}
      </div>
      <div class="alert-metrics">
        ${metricsMarkup}
      </div>
      <div class="alert-actions">
        ${getReportAction()}
      </div>
      <p class="watch-policy">기록 기준: 배너·썸네일·이벤트 이미지는 제외하고, UI 구조와 탐색 흐름의 변화만 기록합니다.</p>
    </article>
  `;
}

function renderCards() {
  const list = getFilteredSites();
  renderUpdateAlerts();
  renderListHeading(list);

  siteGrid.innerHTML = list
    .map(
      site => `
        <article class="site-card ${site.id === selectedSiteId ? "is-selected" : ""}" data-site-id="${site.id}" tabindex="0">
          <div class="thumb">
            <img src="${versionAsset(site.image)}" alt="${site.name} 현재 홈 화면 캡처" />
            <div class="thumb-overlay">상세 리포트 보기 <span aria-hidden="true">→</span></div>
          </div>
          <div class="site-card-body">
            <div class="card-title-row">
              <div>
                <h2>${site.name}</h2>
                <p class="site-url">${site.company} · ${site.url.replace("https://", "")}</p>
              </div>
              <div class="card-status-row">
                ${getSiteStatusBadges(site)
                  .map(badge => `<span class="status-badge ${badge.tone}">${escapeHtml(badge.label)}</span>`)
                  .join("")}
              </div>
            </div>
            <div class="badge-row">
              ${site.tags
                .slice(0, 3)
                .map(tag => `<span class="badge">${escapeHtml(getTagLabel(tag))}</span>`)
                .join("")}
            </div>
            <div class="card-feature">
              <span>현재 UI 특징</span>
              <p class="card-summary">${escapeHtml(site.shortSignal || site.renewalSignal)}</p>
            </div>
            <div class="card-meta">
              <span>관찰 영역: ${escapeHtml(site.category)}</span>
              <span>최근 조사일: ${escapeHtml(site.lastScan)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  if (!list.length) {
    siteGrid.innerHTML = `<div class="empty-state">검색 결과가 없습니다.</div>`;
  }
}

function renderDetail() {
  const site = sites.find(item => item.id === selectedSiteId) || sites[0];
  const history = site.history[0];
  const statusDescription = statusDescriptions[history.type] || "기록 상태 설명이 필요합니다.";
  const insight = insightsBySite[site.id];
  const statusCounts = getStatusCounts(site.history);
  const siteHost = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  detailView.innerHTML = `
    <div class="detail-nav">
      <a class="back-link" href="#/">
        <span class="icon icon-back"></span>
        <span>사이트 리스트</span>
      </a>
      <a class="visit-link" href="${site.url}" target="_blank" rel="noreferrer" aria-label="${site.name} 열기">
        <span class="icon icon-arrow"></span>
      </a>
    </div>

    <article class="detail-shell">
      <div class="breadcrumb">메인 <span>/</span> 사이트 리스트 <span>/</span> ${escapeHtml(site.name)}</div>

      <section class="detail-summary-grid">
        <div class="overview-card site-profile">
          <div class="site-profile-main">
            <h2>
              <a class="detail-title-link" href="${site.url}" target="_blank" rel="noreferrer">
                ${escapeHtml(site.name)}
              </a>
            </h2>
            <a class="site-url detail-url" href="${site.url}" target="_blank" rel="noreferrer">${escapeHtml(siteHost)}</a>
            <dl class="meta-table">
              <div><dt>운영사</dt><dd>${escapeHtml(site.company)}</dd></div>
              <div><dt>분류</dt><dd>${escapeHtml(site.category)}</dd></div>
              <div><dt>모니터링 상태</dt><dd><span class="live-dot"></span>수집 중</dd></div>
              <div><dt>최근 조사일</dt><dd>${escapeHtml(site.lastScan)}</dd></div>
              <div><dt>누적 히스토리</dt><dd>${site.history.length}건</dd></div>
              <div><dt>기준 분석 영역</dt><dd>${escapeHtml(history.area)}</dd></div>
            </dl>
            <div class="profile-status-strip">
              <span>기준 화면 요약</span>
              <strong>${escapeHtml(history.type)}</strong>
              <p>${escapeHtml(site.renewalSignal)}</p>
            </div>
          </div>
        </div>

        <div class="overview-card status-overview">
          <p class="section-title compact">기록 상태 요약</p>
          <div class="status-count-list">
            ${["Baseline", "변경 감지", "검토 필요", "업데이트 완료", "제외 처리"]
              .map(status => renderStatusCountItem(status, statusCounts[status] || 0))
              .join("")}
          </div>
          <div class="status-note slim">
            <strong>${escapeHtml(history.type)}</strong>
            <span>${escapeHtml(statusDescription)}</span>
          </div>
        </div>
      </section>

      <nav class="detail-tabs" aria-label="상세 탭">
        ${renderDetailTabButton("overview", "개요")}
        ${renderDetailTabButton("history", "업데이트 히스토리")}
        ${renderDetailTabButton("compare", "비교 보기")}
        ${renderDetailTabButton("insight", "인사이트")}
      </nav>

      <section class="tab-content">
        ${renderActiveDetailTab(site, history, insight)}
      </section>
    </article>
  `;
}

function getStatusCounts(historyList) {
  return historyList.reduce((counts, item) => {
    counts[item.type] = (counts[item.type] || 0) + 1;
    return counts;
  }, {});
}

function renderStatusCountItem(status, count) {
  const inner = `<span>${escapeHtml(status)}</span><strong>${count}건</strong>`;

  if (!count) {
    return `<div class="is-disabled" aria-disabled="true">${inner}</div>`;
  }

  return `<button type="button" data-status-jump="${escapeHtml(status)}" aria-label="${escapeHtml(status)} 기록 보기">${inner}</button>`;
}

function renderDetailTabButton(id, label) {
  const activeClass = activeDetailTab === id ? "is-active" : "";
  const selected = activeDetailTab === id ? "true" : "false";

  return `<button class="${activeClass}" type="button" data-detail-tab="${id}" aria-selected="${selected}">${label}</button>`;
}

function renderActiveDetailTab(site, history, insight) {
  if (activeDetailTab === "history") return renderHistoryTab(site);
  if (activeDetailTab === "compare") return renderCompareTab(site);
  if (activeDetailTab === "insight") return renderInsightTab(insight);
  return renderOverviewTab(site, insight);
}

function renderOverviewTab(site, insight) {
  const baseline = site.history.find(item => item.type === "Baseline") || site.history[site.history.length - 1];

  return `
    <div class="overview-layout">
      <section class="baseline-guide">
        <strong>Baseline 기준 화면</strong>
        <p>이 화면은 최초 기준 화면입니다. 이후 디자인 변경이 감지되면 이 화면을 기준으로 AS-IS / TO-BE 비교가 생성됩니다.</p>
      </section>

      <section class="overview-card capture-card">
        <button class="capture-frame capture-trigger" type="button" data-capture-site-id="${escapeHtml(site.id)}" aria-label="${escapeHtml(site.name)} 기준 화면 크게 보기">
          <img src="${versionAsset(site.image)}" alt="${site.name} 현재 홈 화면 캡처" />
          <span class="capture-zoom-label">전체 캡처 보기</span>
        </button>
        <div class="capture-caption">
          <div><span>기준 화면</span><strong>${escapeHtml(site.name)} 메인</strong></div>
          <div><span>관찰 범위</span><strong>${escapeHtml(site.scope.join(" / "))}</strong></div>
        </div>
      </section>

      <section class="overview-card">
        <p class="section-title compact">현재 UI 구조</p>
        <div class="definition-list">
          <div><span>레이아웃</span><p>${escapeHtml(site.system.layout)}</p></div>
          <div><span>컴포넌트</span><p>${escapeHtml(site.system.components)}</p></div>
          <div><span>톤앤매너</span><p>${escapeHtml(site.system.tone)}</p></div>
        </div>
      </section>

      <section class="overview-card">
        <p class="section-title compact">최근 히스토리</p>
        <article class="history-summary-card">
          <p>${escapeHtml(baseline.date)} · ${escapeHtml(baseline.type)} · ${escapeHtml(baseline.area)}</p>
          <strong>최초 기준 화면 등록</strong>
          <span>${escapeHtml(baseline.comment || "이후 비교를 위한 기준점으로 저장되었습니다.")}</span>
        </article>
        <button class="text-button" type="button" data-full-history>전체 히스토리 보기</button>
      </section>

      <section class="overview-card">
        <p class="section-title compact">관찰 포인트 & 내부 참고</p>
        <div class="watch-list compact">
          ${site.watchPoints
            .slice(0, 4)
            .map(point => `<div class="watch-item"><span class="watch-dot"></span><span>${escapeHtml(point)}</span></div>`)
            .join("")}
        </div>
        <div class="reference-note">
          <span>두클래스 참고</span>
          <p>${escapeHtml(insight.followUp)}</p>
        </div>
      </section>
    </div>
  `;
}

function renderHistoryTab(site) {
  const selected = site.history[0];

  return `
    <div class="history-workspace">
      <aside class="timeline-list">
        ${site.history
          .map(
            (item, index) => `
              <article class="timeline-item ${index === 0 ? "is-current" : ""}">
                <span class="timeline-dot"></span>
                <p>${escapeHtml(item.date)}</p>
                <h3>${escapeHtml(item.area)}</h3>
                <span class="status-pill">${escapeHtml(item.type)}</span>
                <small>${escapeHtml(item.changeType || "기준 화면")}</small>
              </article>
            `
          )
          .join("")}
      </aside>

      <section class="overview-card history-focus">
        <p class="section-title compact">최근 변경 상세</p>
        ${renderHistoryEntry(selected)}
      </section>
    </div>
  `;
}

function renderCompareTab(site) {
  const comparable = site.history.find(record => record.type !== "Baseline" && record.type !== "제외 처리");

  if (!comparable) {
    return `
      <section class="overview-card compare-empty-state">
        <strong>비교 가능한 업데이트가 아직 없습니다.</strong>
        <p>아직 비교 가능한 업데이트가 없습니다. 변경 감지 또는 업데이트 완료 상태가 등록되면 AS-IS / TO-BE 비교를 확인할 수 있습니다.</p>
      </section>
    `;
  }

  return `
    <div class="compare-workspace">
      <section class="compare-screens">
        <div class="overview-card">
          <div class="compare-head">
            <p class="section-title compact">As-is</p>
            <span>${escapeHtml(comparable.date)}</span>
          </div>
          <div class="empty-capture">
            <strong>${escapeHtml(comparable.asis)}</strong>
            <p>이전 화면 캡처가 등록되면 이 영역에 표시됩니다.</p>
          </div>
        </div>

        <div class="overview-card">
          <div class="compare-head">
            <p class="section-title compact">To-be</p>
            <span>현재 기준 화면</span>
          </div>
          <div class="capture-frame compact-capture">
            <img src="${versionAsset(site.image)}" alt="${site.name} To-be 화면 캡처" />
          </div>
        </div>
      </section>

      <aside class="overview-card change-points">
        <p class="section-title compact">변경 포인트</p>
        ${site.watchPoints
          .slice(0, 3)
          .map((point, index) => `<div class="numbered-point"><strong>${index + 1}</strong><p>${escapeHtml(point)}</p></div>`)
          .join("")}
      </aside>

      <section class="compare-notes">
        <div class="overview-card">
          <p class="section-title compact">변경 요약</p>
          <ul class="compact-list">
            <li>${escapeHtml(comparable.tobe)}</li>
            <li>${escapeHtml(comparable.comment || "메모 없음")}</li>
          </ul>
        </div>
        <div class="overview-card">
          <p class="section-title compact">UX 관찰 분석</p>
          <ul class="compact-list">
            <li>${escapeHtml(site.summary)}</li>
            <li>이후 비교 시 구조 변화와 콘텐츠 교체를 분리해 판단합니다.</li>
          </ul>
        </div>
      </section>
    </div>
  `;
}

function renderInsightTab(insight) {
  return `
    <div class="insight-layout">
      <section class="overview-card">
        <p class="section-title compact">내부 참고 우선순위</p>
        <div class="insight-grid">
          <div class="insight-row"><span>두클래스 참고 포인트</span><p>${escapeHtml(insight.reference)}</p></div>
          <div class="insight-row"><span>주의할 점</span><p>${escapeHtml(insight.caution)}</p></div>
          <div class="insight-row"><span>적용 가능성</span><p>${escapeHtml(insight.applicability)}</p></div>
          <div class="insight-row"><span>후속 검토</span><p>${escapeHtml(insight.followUp)}</p></div>
        </div>
      </section>

      <section class="overview-card">
        <p class="section-title compact">기록 제외 기준</p>
        <ul class="policy-list">
          ${recordPolicy.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
}

function renderHistoryEntry(history) {
  const changeType = history.changeType || "기준 화면";

  return `
    <article class="history-entry">
      <p class="history-date">${escapeHtml(history.date)}</p>
      <h3>${escapeHtml(history.area)}</h3>
      <div class="history-meta">
        <span>상태: ${escapeHtml(history.type)}</span>
        <span>변경 유형: ${escapeHtml(changeType)}</span>
        <span>변경 영역: ${escapeHtml(history.area)}</span>
      </div>
      <p class="section-title compact">As-is / To-be 비교</p>
      <div class="compare">
        <div class="compare-row"><span class="compare-label">As-is</span><span>${escapeHtml(history.asis)}</span></div>
        <div class="compare-row"><span class="compare-label">To-be</span><span>${escapeHtml(history.tobe)}</span></div>
        <div class="compare-row"><span class="compare-label">Memo</span><span>${escapeHtml(history.comment || "메모 없음")}</span></div>
      </div>
    </article>
  `;
}

function openSurveyModal() {
  surveyForm.reset();
  surveySite.value = selectedSiteId;
  surveyDate.value = getToday();
  surveyStatus.value = "변경 감지";
  surveyModal.classList.remove("is-hidden");
  surveyArea.focus();
}

function closeSurveyModal() {
  surveyModal.classList.add("is-hidden");
  newSurveyButton.focus();
}

function openCaptureModal(site) {
  captureModalImage.src = versionAsset(site.fullImage || site.image);
  captureModalImage.alt = `${site.name} 기준 화면 전체 캡처`;
  captureModalTitle.textContent = `${site.name} 기준 화면`;
  captureModalMeta.textContent = `관찰 범위: ${site.scope.join(" / ")}`;
  captureModal.classList.remove("is-hidden");
  closeCaptureModalButton.focus();
}

function closeCaptureModal() {
  captureModal.classList.add("is-hidden");
  captureModalImage.removeAttribute("src");
}

function openDailyReportModal() {
  const dailyReports = getDailyReportRecords();
  const baselineCount = getAllHistoryRecords().filter(record => record.type === "Baseline").length;

  dailyReportMeta.textContent = dailyReports.length
    ? `${latestCheckDate} 기준 확인할 UI 구조 변경 ${dailyReports.length}건`
    : `${latestCheckDate} 기준 변경 리포트 없음`;

  dailyReportBody.innerHTML = dailyReports.length
    ? `
        <div class="report-summary-strip">
          <span>최근 점검 ${escapeHtml(latestCheckDate)}</span>
          <strong>${dailyReports.length}건</strong>
          <span>사이트 상세에서 AS-IS / TO-BE 히스토리를 확인할 수 있습니다.</span>
        </div>
        <div class="report-list">
          ${dailyReports
            .map(
              record => `
                <button class="report-record" type="button" data-report-site-id="${escapeHtml(record.siteId)}">
                  <span class="alert-status">${escapeHtml(record.type)}</span>
                  <strong>${escapeHtml(record.siteName)}</strong>
                  <span>${escapeHtml(record.area)}</span>
                  <small>${escapeHtml(record.date)} · 상세보기로 이동</small>
                </button>
              `
            )
            .join("")}
        </div>
      `
    : `
        <div class="report-empty">
          <span class="alert-icon calm"></span>
          <strong>아직 기록할 변경사항이 없습니다.</strong>
          <p>최근 점검일 ${escapeHtml(latestCheckDate)} 기준, 배너·썸네일·이벤트 이미지를 제외한 UI 구조와 탐색 흐름 변화는 감지되지 않았습니다.</p>
        </div>
        <div class="report-summary-strip">
          <span>모니터링 ${sites.length}개</span>
          <span>기준 화면 ${baselineCount}건</span>
          <span>확인 필요 0건</span>
        </div>
      `;

  dailyReportModal.classList.remove("is-hidden");
  closeDailyReportButton.focus();
}

function closeDailyReportModal() {
  dailyReportModal.classList.add("is-hidden");
}

function handleSurveySubmit(event) {
  event.preventDefault();

  const siteId = surveySite.value;
  const site = sites.find(item => item.id === siteId);
  if (!site) return;

  const record = {
    date: surveyDate.value,
    type: surveyStatus.value,
    changeType: surveyChangeType.value,
    area: surveyArea.value.trim(),
    asis: surveyAsis.value.trim(),
    tobe: surveyTobe.value.trim(),
    comment: surveyMemo.value.trim()
  };

  site.history.unshift(record);
  site.lastScan = record.date;
  selectedSiteId = siteId;
  activeDetailTab = "history";
  saveRecord(siteId, record);
  closeSurveyModal();
  window.location.hash = `#/site/${encodeURIComponent(siteId)}`;
  renderRoute();
}

function renderRoute() {
  const match = window.location.hash.match(/^#\/site\/(.+)$/);
  if (match) {
    const nextSiteId = decodeURIComponent(match[1]);
    if (selectedSiteId !== nextSiteId) activeDetailTab = "overview";
    selectedSiteId = nextSiteId;
    listView.classList.add("is-hidden");
    detailView.classList.remove("is-hidden");
    renderDetail();
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }

  detailView.classList.add("is-hidden");
  listView.classList.remove("is-hidden");
  renderCards();
}

siteGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-site-id]");
  if (!card) return;
  window.location.hash = `#/site/${encodeURIComponent(card.dataset.siteId)}`;
});

updateAlerts.addEventListener("click", event => {
  const reportButton = event.target.closest("[data-open-daily-report]");
  if (reportButton) {
    openDailyReportModal();
    return;
  }

  const metric = event.target.closest("[data-main-status-filter]");
  if (metric) {
    listFilters.status = metric.dataset.mainStatusFilter;
    renderCards();
    return;
  }

  const item = event.target.closest("[data-alert-site-id]");
  if (!item) return;
  window.location.hash = `#/site/${encodeURIComponent(item.dataset.alertSiteId)}`;
});

siteGrid.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-site-id]");
  if (!card) return;
  event.preventDefault();
  window.location.hash = `#/site/${encodeURIComponent(card.dataset.siteId)}`;
});

searchInput.addEventListener("input", renderCards);
schoolTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    listFilters.school = tab.dataset.schoolTab;
    renderCards();
  });
});
window.addEventListener("hashchange", renderRoute);
detailView.addEventListener("click", event => {
  const captureButton = event.target.closest("[data-capture-site-id]");
  if (captureButton) {
    const site = sites.find(item => item.id === captureButton.dataset.captureSiteId);
    if (site) openCaptureModal(site);
    return;
  }

  const historyButton = event.target.closest("[data-full-history], [data-status-jump]");
  if (historyButton) {
    activeDetailTab = "history";
    renderDetail();
    return;
  }

  const tabButton = event.target.closest("[data-detail-tab]");
  if (!tabButton) return;
  activeDetailTab = tabButton.dataset.detailTab;
  renderDetail();
});
newSurveyButton.addEventListener("click", openSurveyModal);
closeSurveyButton.addEventListener("click", closeSurveyModal);
cancelSurveyButton.addEventListener("click", closeSurveyModal);
surveyForm.addEventListener("submit", handleSurveySubmit);
closeCaptureModalButton.addEventListener("click", closeCaptureModal);
surveyModal.addEventListener("click", event => {
  if (event.target === surveyModal) closeSurveyModal();
});
captureModal.addEventListener("click", event => {
  if (event.target === captureModal) closeCaptureModal();
});
closeDailyReportButton.addEventListener("click", closeDailyReportModal);
dailyReportModal.addEventListener("click", event => {
  if (event.target === dailyReportModal) {
    closeDailyReportModal();
    return;
  }

  const reportRecord = event.target.closest("[data-report-site-id]");
  if (!reportRecord) return;
  closeDailyReportModal();
  selectedSiteId = reportRecord.dataset.reportSiteId;
  activeDetailTab = "history";
  window.location.hash = `#/site/${encodeURIComponent(reportRecord.dataset.reportSiteId)}`;
});
window.addEventListener("keydown", event => {
  if (event.key === "Escape" && !surveyModal.classList.contains("is-hidden")) {
    closeSurveyModal();
  }
  if (event.key === "Escape" && !captureModal.classList.contains("is-hidden")) {
    closeCaptureModal();
  }
  if (event.key === "Escape" && !dailyReportModal.classList.contains("is-hidden")) {
    closeDailyReportModal();
  }
});

loadSavedRecords();
renderSurveyOptions();
renderRoute();
