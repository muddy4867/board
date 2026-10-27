/* Deployed collection snapshot, 2026-10-27. */
(()=>{const seeds=[
  {
    "id": "appgprj_6ae09f518f5c819199e4b1889dc2a2d1",
    "name": "우리 반 방송국 · 뉴스 스튜디오",
    "url": "https://class-news-studio-1027.muddy4867.chatgpt.site",
    "description": "학생 기사 작성, 신문 미리보기, 자기 점검을 위한 뉴스룸",
    "category": "웹앱",
    "color": "#c7d7f6",
    "created": 1793105746614,
    "favorite": false,
    "cover": null
  },
  {
    "id": "appgprj_6ad8a412008c8191a8c3b712cc41b4d2",
    "name": "나만의 네 글자 · MBTI 키링 부스",
    "url": "https://maegok-mbti-keyring.muddy4867.chatgpt.site",
    "description": "1~6학년을 위한 학년별 쉬운 성향 체험과 키링 만들기 안내",
    "category": "웹앱",
    "color": "#e5d4ee",
    "created": 1792582675030,
    "favorite": false,
    "cover": null
  },
  {
    "id": "appgprj_6ad228f8029c8191b70774230d3821c4",
    "name": "독도수비대 · 사라진 기록을 복구하라",
    "url": "https://dokdo-record-rescue-jahyun.muddy4867.chatgpt.site",
    "description": "독돌이와 함께하는 5단계 협동 방탈출 게임",
    "category": "웹앱",
    "color": "#c8e3dd",
    "created": 1792157945039,
    "favorite": false,
    "cover": null
  },
  {
    "id": "appgprj_6ad224bb2ec08191817fc0b2ee11215b",
    "name": "독도 방탈출 · 사라진 등대 신호",
    "url": "https://dokdo-signal-escape.muddy4867.chatgpt.site",
    "description": "초등 고학년 모둠용 독도 단서 탐험 게임",
    "category": "웹앱",
    "color": "#cfdef1",
    "created": 1792156860207,
    "favorite": false,
    "cover": null
  },
  {
    "id": "appgprj_6abe489926ac8191a7c682383b17fe17",
    "name": "하늘초등학교 2학기 방과후학교",
    "url": "https://haneul-afterschool-2026.muddy4867.chatgpt.site",
    "description": "강좌·시간표·운영 일정 안내. 검토용 저장본, 미배포.",
    "category": "웹앱",
    "color": "#efe0c7",
    "created": 1790855329437,
    "favorite": false,
    "cover": null
  }
];const key='folio.collection.v1',marker='folio.seeded-sites.v1';let items=[],seen=[];try{const raw=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(raw))items=raw;const prior=JSON.parse(localStorage.getItem(marker)||'[]');if(Array.isArray(prior))seen=prior;}catch{ return; }for(const seed of seeds){if(!seen.includes(seed.id)&&!items.some(p=>p.id===seed.id||p.url.replace(/\/$/,'')===seed.url.replace(/\/$/,'')))items.push(seed);}try{localStorage.setItem(key,JSON.stringify(items));localStorage.setItem(marker,JSON.stringify([...new Set([...seen,...seeds.map(s=>s.id)])]));}catch{console.warn('기본 컬렉션을 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.');}})();

