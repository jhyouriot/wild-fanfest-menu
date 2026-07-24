
    const DESIGN_STORAGE_KEY = "wildFanfestDesignDataV1";
    const DEFAULT_DESIGN = {
      background: "./images/background.jpg",
      logo: "./images/logo.png"
    };

    function loadDesignData() {
      try {
        return { ...DEFAULT_DESIGN, ...(JSON.parse(localStorage.getItem(DESIGN_STORAGE_KEY) || "{}")) };
      } catch {
        return { ...DEFAULT_DESIGN };
      }
    }

    function applyDesign(design) {
      document.documentElement.style.setProperty("--custom-background", `url("${design.background}")`);
      const logoArea = document.getElementById("logoArea");
      logoArea.innerHTML = `<img src="${design.logo}" alt="WILD FANFEST 로고" onerror="this.style.display='none';this.parentElement.classList.add('logo-fallback')">`;
    }

    let designData = loadDesignData();
    applyDesign(designData);


/*
      상품 수정 방법
      1) 아래 products 배열의 내용을 변경하세요.
      2) image에는 이미지 파일 경로 또는 웹 이미지 주소를 입력하세요.
      3) 업로드된 상품 리스트 기준 총 89개의 상품이 표시됩니다.
    */

    const makePlaceholder = (index, text) => {
      const safeText = encodeURIComponent(text);
      return `data:image/svg+xml;charset=UTF-8,
      <svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'>
        <defs>
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stop-color='%23e8f4d1'/>
            <stop offset='100%' stop-color='%23bad9c5'/>
          </linearGradient>
        </defs>
        <rect width='1000' height='1000' fill='url(%23g)'/>
        <circle cx='500' cy='430' r='180' fill='%23ffffff' opacity='.55'/>
        <text x='500' y='450' text-anchor='middle' font-family='Arial' font-size='62' font-weight='700' fill='%23284f56'>PRODUCT ${index}</text>
        <text x='500' y='555' text-anchor='middle' font-family='Arial' font-size='32' fill='%235c746d'>${safeText}</text>
      </svg>`;
    };

    const products = [
      {
        id: 1,
        nameKo: "아케인 징크스 피규어",
        nameEn: "Arcane Jinx Figure",
        price: "45,000원",
        image: "./images/products/0001.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 2,
        nameKo: "웰시 코르키 피규어 (시리즈 4, 한정판)",
        nameEn: "Corgi Corki Figure Limited Edition (Series 4)",
        price: "42,000원",
        image: "./images/products/0002.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 3,
        nameKo: "포로 뭉치 피규어",
        nameEn: "Fluft Poros Stack Figures",
        price: "42,000원",
        image: "./images/products/0003.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 4,
        nameKo: "요네 피규어 (시리즈 4)",
        nameEn: "Yone Figure",
        price: "38,000원",
        image: "./images/products/0004.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 5,
        nameKo: "자야와 라칸 듀오 피규어",
        nameEn: "Xayah and Rakan Duo Figure",
        price: "59,000원",
        image: "./images/products/0005.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 6,
        nameKo: "사랑의 추적자 유미 피규어(크로마 루비 에디션)",
        nameEn: "Heartseeker Yuumi Figure (Chroma Edition - Ruby)",
        price: "42,000원",
        image: "./images/products/0006.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 7,
        nameKo: "귀염둥이 카페 그웬 피규어 크로마 (한정판)",
        nameEn: "Cafe Cutie Gwen Figure (Chroma Edition)",
        price: "42,000원",
        image: "./images/products/0007.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 8,
        nameKo: "TFT 미니 전설이 피규어",
        nameEn: "TFT Little Legends Blind Box Series 1 (Single Box)",
        price: "18,000원",
        image: "./images/products/0008.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 9,
        nameKo: "리그 오브 레전드 큐티 아이콘 시리즈 (팝마트)",
        nameEn: "League of Legends Cutie Icons Series Figures",
        price: "16,000원",
        image: "./images/products/0009.jpg",
        badge: "신상품",
        description: "신상품"
      },
      {
        id: 10,
        nameKo: "리그 오브 레전드 미드라인 대결 시리즈 (팝마트)",
        nameEn: "League of Legends Midlane Icons Series Figures",
        price: "17,000원",
        image: "./images/products/0010.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 11,
        nameKo: "수영장 파티 케이틀린 1/8 스태츄",
        nameEn: "Pool Party Caitlyn 1/8th Scale Figure",
        price: "82,000원",
        image: "./images/products/0011.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 12,
        nameKo: "영혼의 꽃 요네 1/8 스태츄",
        nameEn: "Spirit Blossom Yone 1/8 Scale Statue",
        price: "70,000원",
        image: "./images/products/0012.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 13,
        nameKo: "영혼의 꽃 신드라 1/8 스태츄",
        nameEn: "Spirit Blossom Syndra 1/8 Scale Statue",
        price: "70,000원",
        image: "./images/products/0013.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 14,
        nameKo: "징크스 UNLOCKED 스태츄",
        nameEn: "Jinx UNLOCKED Statue",
        price: "99,000원",
        image: "./images/products/0014.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 15,
        nameKo: "아리 Unlocked 스태츄",
        nameEn: "Ahri Unlocked Statue",
        price: "99,000원",
        image: "./images/products/0015.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 16,
        nameKo: "이즈리얼 Unlocked 스태츄",
        nameEn: "Ezreal Unlocked Statue",
        price: "99,000원",
        image: "./images/products/0016.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 17,
        nameKo: "세라핀 Unlocked 스태츄",
        nameEn: "Seraphine Unlocked Statue",
        price: "99,000원",
        image: "./images/products/0017.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 18,
        nameKo: "날쌘 정찰병, 티모 1/4 스태츄 (Pure Arts)",
        nameEn: "Pure Arts Teemo 1/4 Scale Statue",
        price: "650,000원",
        image: "./images/products/0018.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 19,
        nameKo: "원소술사 럭스 1/7 스태츄 (Good Smile Company)",
        nameEn: "Good Smile Elementalist Lux 1/7 Scale Figure",
        price: "320,000원",
        image: "./images/products/0019.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 20,
        nameKo: "가시 덩굴의 복수, 자이라 1/4 스태츄 (Infinity Studio)",
        nameEn: "Rise of the Thorns, Zyra 1/4 Statue (Infinity Studio)",
        price: "1,100,000원",
        image: "./images/products/0020.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 21,
        nameKo: "도자기 럭스 1/4 스태츄 (Beast Kingdom)",
        nameEn: "Porcelain Lux (Beast Kingdom)",
        price: "490,000원",
        image: "./images/products/0021.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 22,
        nameKo: "서리 궁수 애쉬 1/6 스태츄  (Jimei Palace)",
        nameEn: "Ashe 1/6 Scale Statue (Jimei Palace)",
        price: "480,000원",
        image: "./images/products/0022.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 23,
        nameKo: "별 수호자 아리 1/7 스태츄 (Good Smile Company)",
        nameEn: "Star Guardian Ahri (Good Smile Company)",
        price: "290,000원",
        image: "./images/products/0023.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 24,
        nameKo: "카이사 이케시아 폭우 1/6 스태츄 (APEX)",
        nameEn: "APEX KaiSa 1/6 Scale Statue",
        price: "260,000원",
        image: "./images/products/0024.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 25,
        nameKo: "사막의 도살자 레넥톤 1/4 스태츄 (Infinity Studios)",
        nameEn: "Infinity Studio: Renekton 1:4 Resin Statue",
        price: "1,790,000원",
        image: "./images/products/0025.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 26,
        nameKo: "시간을 달리는 소년, 에코 1/4 스태츄 (Pure Arts)",
        nameEn: "Pure Arts Ekko 1/4 Statue",
        price: "1,100,000원",
        image: "./images/products/0026.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 27,
        nameKo: "캡틴 미스 포츈 1/4 스태츄",
        nameEn: "Infinity Studio Captain Fortune 1/4 Scale Statue",
        price: "1,580,000원",
        image: "./images/products/0027.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 28,
        nameKo: "징크스 라이트업 1/6 스태츄 (Pure Arts)",
        nameEn: "Pure Arts: Jinx 1/6 Diorama",
        price: "399,000원",
        image: "./images/products/0028.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 29,
        nameKo: "바이 라이트업 1/6 스태츄 (Pure Arts)",
        nameEn: "Pure Arts: Vi 1/6 Diorama",
        price: "399,000원",
        image: "./images/products/0029.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 30,
        nameKo: "노래하는 별, 세라핀 1/4 스태츄 (Infinity Studios)",
        nameEn: "Infinity Studio: 1/4 Starry-Eyed Songstress - Seraphine Statue",
        price: "1,170,000원",
        image: "./images/products/0030.jpg",
        badge: "프리미엄",
        description: "프리미엄 표기 필요"
      },
      {
        id: 31,
        nameKo: "TFT 꽥꽥이 인형",
        nameEn: "TFT Duckbill Collectible Plush",
        price: "39,000원",
        image: "./images/products/0031.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 32,
        nameKo: "TFT 배불뚝이 인형",
        nameEn: "Choncc Plush",
        price: "38,000원",
        image: "./images/products/0032.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 33,
        nameKo: "티모 인형",
        nameEn: "Teemo Collectible Plush",
        price: "38,000원",
        image: "./images/products/0033.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 34,
        nameKo: "직스 인형",
        nameEn: "Ziggs Collectible Plush",
        price: "38,000원",
        image: "./images/products/0034.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 35,
        nameKo: "베이가 인형",
        nameEn: "Veigar Collectible Plush",
        price: "38,000원",
        image: "./images/products/0035.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 36,
        nameKo: "TFT 깡충이 인형",
        nameEn: "TFT Bunbun Plush",
        price: "38,000원",
        image: "./images/products/0036.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 37,
        nameKo: "TFT 수염냥 인형",
        nameEn: "TFT Whisker Plush",
        price: "38,000원",
        image: "./images/products/0037.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 38,
        nameKo: "TFT 뽀글이 인형",
        nameEn: "TFT Poggles Plush",
        price: "38,000원",
        image: "./images/products/0038.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 39,
        nameKo: "TFT 파워 코드 아오 신 인형",
        nameEn: "Ao Shin Plush",
        price: "42,000원",
        image: "./images/products/0039.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 40,
        nameKo: "TFT 뒤집개 인형",
        nameEn: "Golden Spatula Plush",
        price: "32,000원",
        image: "./images/products/0040.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 41,
        nameKo: "영혼의 꽃 펭구 깃털기사 인형",
        nameEn: "Spirit Blossom Featherknight Plush",
        price: "38,000원",
        image: "./images/products/0041.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 42,
        nameKo: "TFT 펭구 깃털기사 뒤집개 인형",
        nameEn: "Featherknight with Golden Spatula Plush",
        price: "38,000원",
        image: "./images/products/0042.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 43,
        nameKo: "TFT 트리스타나 코스프레 펭구 깃털기사 인형",
        nameEn: "Tristana Featherknight Plush",
        price: "38,000원",
        image: "./images/products/0043.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 44,
        nameKo: "TFT 몰락한 펭구 깃털기사 인형",
        nameEn: "Ruined King Featherknight Plush",
        price: "38,000원",
        image: "./images/products/0044.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 45,
        nameKo: "TFT URF 퐁당이 인형",
        nameEn: "TFT URF Dowsie",
        price: "38,000원",
        image: "./images/products/0045.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 46,
        nameKo: "뽀삐 인형",
        nameEn: "Poppy Plush",
        price: "38,000원",
        image: "./images/products/0046.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 47,
        nameKo: "웰시 코르키 인형",
        nameEn: "Corgi Corki Plush",
        price: "45,000원",
        image: "./images/products/0047.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 48,
        nameKo: "TFT 뒤집개 마사지 인형 (TBD)",
        nameEn: "Golden Spatula Massage Stick Plush",
        price: "35,000원",
        image: "./images/products/0048.jpg",
        badge: "신상품",
        description: "신상품"
      },
      {
        id: 49,
        nameKo: "티모 모자",
        nameEn: "Teemo Hat",
        price: "29,000원",
        image: "./images/products/0049.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 50,
        nameKo: "포로 모자",
        nameEn: "Poro Plush Hat",
        price: "32,000원",
        image: "./images/products/0050.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 51,
        nameKo: "나르 모자",
        nameEn: "Gnar Plush Hat",
        price: "45,000원",
        image: "./images/products/0051.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 52,
        nameKo: "블리츠크랭크 모자와 팔 액션",
        nameEn: "Blitzcrank Plush Hat",
        price: "59,000원",
        image: "./images/products/0052.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 53,
        nameKo: "멍멍양 킨드레드 모자",
        nameEn: "Woof & Lamb Kindred Plush Hat",
        price: "59,000원",
        image: "./images/products/0053.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 54,
        nameKo: "펭구 깃털기사 털방울 모자",
        nameEn: "Featherknight Plush Hat with Poms Poms",
        price: "29,000원",
        image: "./images/products/0054.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 55,
        nameKo: "배불뚝이 모자",
        nameEn: "Choncc Plush Hat",
        price: "29,000원",
        image: "./images/products/0055.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 56,
        nameKo: "TFT 펭구 깃털기사 모자",
        nameEn: "Featherknight Plush Hat",
        price: "29,000원",
        image: "./images/products/0056.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 57,
        nameKo: "냐옹카이 야옹이 모자",
        nameEn: "Meowkai Catling Hat",
        price: "32,000원",
        image: "./images/products/0057.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 58,
        nameKo: "TFT 신비의 숲 XL 마우스패드",
        nameEn: "TFT Enchanted Wilds XL Mousepad",
        price: "29,000원",
        image: "./images/products/0058.jpg",
        badge: "팝업 선출시",
        description: "팝업 선출시 표기 필요"
      },
      {
        id: 59,
        nameKo: "와일드리프트 수정장미 레오나 XL 마우스패드",
        nameEn: "Wild Rift Crystal Rose Leona XL Mousepad",
        price: "29,000원",
        image: "./images/products/0059.jpg",
        badge: "팝업 선출시",
        description: "팝업 선출시 표기 필요"
      },
      {
        id: 60,
        nameKo: "펭구 깃털기사 머리띠",
        nameEn: "TFT Featherknight Hairband",
        price: "29,000원",
        image: "./images/products/0060.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 61,
        nameKo: "배불뚝이 목 쿠션",
        nameEn: "Choncc Neck Pillow",
        price: "32,000원",
        image: "./images/products/0061.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 62,
        nameKo: "배불뚝이 인형 열쇠고리",
        nameEn: "Choncc Plush Key Chain",
        price: "15,000원",
        image: "./images/products/0062.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 63,
        nameKo: "배불뚝이 쿠션",
        nameEn: "Choncc Cushion",
        price: "35,000원",
        image: "./images/products/0063.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 64,
        nameKo: "티버 인형 슬링백",
        nameEn: "Tibbers Plush Bag",
        price: "23,000원",
        image: "./images/products/0064.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 65,
        nameKo: "TFT 펭구 깃털기사 에어백 머리띠",
        nameEn: "TFT Pengu Pop Plush Hairband",
        price: "29,000원",
        image: "./images/products/0065.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 66,
        nameKo: "TFT 어푸푸 배불뚝이 여름 반다나",
        nameEn: "Teamfight Tactics Choncc Summer Bandana",
        price: "45,000원",
        image: "./images/products/0066.jpg",
        badge: "팝업 선출시",
        description: "팝업 선출시 표기 필요"
      },
      {
        id: 67,
        nameKo: "TFT 어푸푸 배불뚝이 여름 타월",
        nameEn: "Teamfight Tactics Choncc Summer Towel",
        price: "25,000원",
        image: "./images/products/0067.jpg",
        badge: "팝업 선출시",
        description: "팝업 선출시 표기 필요"
      },
      {
        id: 68,
        nameKo: "요들: 나르 노트",
        nameEn: "Yordle Notebook : Gnar",
        price: "4,000원",
        image: "./images/products/0068.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 69,
        nameKo: "요들: 티모 노트",
        nameEn: "Yordle Notebook : Teemo",
        price: "4,000원",
        image: "./images/products/0069.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 70,
        nameKo: "요들: 아무무 노트",
        nameEn: "Yordle Notebook : Amumu",
        price: "4,000원",
        image: "./images/products/0070.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 71,
        nameKo: "요들: 피즈 노트",
        nameEn: "Yordle Notebook : Fizz",
        price: "4,000원",
        image: "./images/products/0071.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 72,
        nameKo: "모나미 리그 오브 레전드 펜피규어 세트_펭구",
        nameEn: "League of Legends 153 Neo Pen Figure Set_Pengu",
        price: "45,000원",
        image: "./images/products/0072.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 73,
        nameKo: "모나미 리그 오브 레전드 펜피규어 세트_티모",
        nameEn: "League of Legends 153 Neo Pen Figure Set_Teemo",
        price: "45,000원",
        image: "./images/products/0073.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 74,
        nameKo: "모나미 153 전략적 팀 전투_펭구",
        nameEn: "League of Legends BP153 5-pen Set_Pengu",
        price: "13,000원",
        image: "./images/products/0074.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 75,
        nameKo: "모나미 153 리그 오브 레전드_티모",
        nameEn: "League of Legends BP153 5-pen Set_Teemo",
        price: "13,000원",
        image: "./images/products/0075.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 76,
        nameKo: "모나미 전략적 팀 전투 플립 3_펭구",
        nameEn: "League of Legends Flip 3_Pengu",
        price: "8,000원",
        image: "./images/products/0076.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 77,
        nameKo: "모나미 리그 오브 레전드 플립 3_티모",
        nameEn: "League of Legends Flip 3_Teemo",
        price: "8,000원",
        image: "./images/products/0077.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 78,
        nameKo: "모나미 리그 오브 레전드 플립 3_포로",
        nameEn: "League of Legends Flip 3_Poro",
        price: "8,000원",
        image: "./images/products/0078.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 79,
        nameKo: "리그 오브 레전드 롤 키캡 랜덤 피규어",
        nameEn: "Soap Studio: LOL Keycap Fidgets Blindbox - single",
        price: "14,900원",
        image: "./images/products/0079.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 80,
        nameKo: "리그 오브 레전드 치비 챔피언 무작위 (더벤티)",
        nameEn: "The Venti x LoL Champions Metal Keyring Collection (blind box)",
        price: "4,900원",
        image: "./images/products/0080.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 81,
        nameKo: "마스터 셰프 탐 켄치 반팔티 - One Size",
        nameEn: "Master Chef Tahm Kench Tee",
        price: "39,000원",
        image: "./images/products/0081.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 82,
        nameKo: "TFT 꼬마 전설이 스쿼드 반팔티 - One Size",
        nameEn: "Teamfight Tactics Little Legends Squad Tee - One Size",
        price: "42,000원",
        image: "./images/products/0082.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 83,
        nameKo: "가렌 데마시아아아! 반팔티 - One Size",
        nameEn: "Garen For Demacia Tee - One Size",
        price: "42,000원",
        image: "./images/products/0083.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 84,
        nameKo: "TFT 배불뚝이 어푸푸 마을 해변 셔츠",
        nameEn: "Teamfight Tactics Choncc Summer Beach Shirt",
        price: "99,000원",
        image: "./images/products/0084.jpg",
        badge: "팝업 선출시",
        description: "팝업 선출시 표기 필요"
      },
      {
        id: 85,
        nameKo: "TFT 배불뚝이 어푸푸 마을 반팔티",
        nameEn: "Teamfight Tactics Splash Town Choncc Tie Dye Tee",
        price: "45,000원",
        image: "./images/products/0085.jpg",
        badge: "팝업 선출시",
        description: "팝업 선출시 표기 필요"
      },
      {
        id: 86,
        nameKo: "DIM MAK x TFT 전략적 팀 전투 - 스크래치 새틴 스타터 자켓",
        nameEn: "Dim Mak x Teamfight Tacticscratch Satin Starter Jacket",
        price: "167,300원",
        image: "./images/products/0086.jpg",
        badge: "30% 할인",
        description: "239,000원 → 167,300원 30% 할인 표기 필요"
      },
      {
        id: 87,
        nameKo: "사랑의 추적자 유미 화이트 후드티",
        nameEn: "Heartseeker Yuumi White Hoodie",
        price: "75,000원",
        image: "./images/products/0087.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 88,
        nameKo: "TFT 별빛 펭구 스웨터",
        nameEn: "Teamfight Tactics Pengu in the Stars Sweater",
        price: "89,000원",
        image: "./images/products/0088.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
      {
        id: 89,
        nameKo: "TFT 꼬마 전설이 홀리데이 스웨터",
        nameEn: "Teamfight Tactics Little Legends Holiday Sweater",
        price: "89,000원",
        image: "./images/products/0089.jpg",
        badge: "",
        description: "상품 이미지를 크게 확인할 수 있습니다."
      },
    ];


    const CATALOG_SECTIONS = [
      { title: "신상 컬렉션", ids: [66, 67, 85, 84, 58, 59, 8, 9, 49, 55, 56, 54, 60, 65, 57, 50, 51, 53, 52, 82, 81, 83, 86, 88, 89, 87, 10, 3, 6, 4, 5, 1, 2, 7, 12, 13, 11, 14, 15, 17, 16] },
      { title: "프리미엄 스태츄", ids: [25, 27, 30, 20, 26, 18, 19, 21, 22, 28, 29, 23, 24, 62, 61, 63, 64, 40, 48, 32, 45, 41, 44, 43, 42, 31, 38, 37, 36, 39, 33, 34, 35, 80, 79, 46, 47, 68, 69, 70, 71, 76, 77, 78, 74, 75, 72, 73] }
    ];

    const DISPLAY_ORDER = CATALOG_SECTIONS.flatMap(section => section.ids);
    const DISPLAY_ORDER_INDEX = new Map(DISPLAY_ORDER.map((id, index) => [id, index]));

    function sortByDisplayOrder(list) {
      return [...list].sort((a, b) =>
        (DISPLAY_ORDER_INDEX.get(a.id) ?? 9999) -
        (DISPLAY_ORDER_INDEX.get(b.id) ?? 9999)
      );
    }

    function productCardTemplate(item) {
      return `
        <article class="product-card ${item.soldOut ? 'sold-out' : ''}" tabindex="0" data-id="${item.id}" aria-label="${item.nameKo} 상세 보기">
          <div class="image-wrap">
            <img src="${item.image}" alt="${item.nameKo}" loading="lazy" draggable="false" onerror="this.src=makePlaceholder(${item.id}, 'NO IMAGE')">
            ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
          </div>
          <div class="info">
            <h2 class="name-ko">${item.nameKo}</h2>
            <p class="name-en">${item.nameEn}</p>
            <p class="price">${item.price}</p>
          </div>
        </article>
      `;
    }

    const catalog = document.getElementById("catalog");
    const searchInput = document.getElementById("searchInput");
    const visibleCount = document.getElementById("visibleCount");
    const totalCount = document.getElementById("totalCount");

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalKoName = document.getElementById("modalKoName");
    const modalEnName = document.getElementById("modalEnName");
    const modalPrice = document.getElementById("modalPrice");
    const modalDesc = document.getElementById("modalDesc");
    const closeModal = document.getElementById("closeModal");

    function render(list) {
      totalCount.textContent = products.length;
      visibleCount.textContent = list.length;

      if (!list.length) {
        catalog.innerHTML = '<div class="empty">검색 결과가 없습니다.</div>';
        return;
      }

      const visibleIds = new Set(list.map(item => item.id));
      const productMap = new Map(products.map(item => [item.id, item]));

      catalog.innerHTML = CATALOG_SECTIONS.map(section => {
        const sectionItems = section.ids
          .filter(id => visibleIds.has(id))
          .map(id => productMap.get(id))
          .filter(Boolean);

        if (!sectionItems.length) return "";

        return `
          <section class="catalog-section">
            <div class="section-title-wrap">
              <h2 class="section-title">${section.title}</h2>
              <span class="section-count">${sectionItems.length} ITEMS</span>
            </div>
            <div class="section-grid">
              ${sectionItems.map(productCardTemplate).join("")}
            </div>
          </section>
        `;
      }).join("");

      document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => openProduct(Number(card.dataset.id)));
        card.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProduct(Number(card.dataset.id));
          }
        });
      });
    }

    function openProduct(id) {
      const item = products.find(p => p.id === id);
      if (!item) return;

      modalImg.src = item.image;
      modalImg.alt = item.nameKo;
      modalKoName.textContent = item.nameKo;
      modalEnName.textContent = item.nameEn;
      modalPrice.textContent = item.price;
      modalDesc.textContent = item.description || "";
      modal.classList.add("open");
      document.body.classList.add("modal-open");
      closeModal.focus();
    }

    function hideModal() {
      modal.classList.remove("open");
      document.body.classList.remove("modal-open");
    }

    searchInput.addEventListener("input", e => {
      const keyword = e.target.value.trim().toLowerCase();
      const filtered = products.filter(item =>
        item.nameKo.toLowerCase().includes(keyword) ||
        item.nameEn.toLowerCase().includes(keyword)
      );
      render(filtered);
    });

    closeModal.addEventListener("click", hideModal);
    modal.addEventListener("click", e => {
      if (e.target === modal) hideModal();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") hideModal();
    });

    /*
      로고 사용 예시:
      document.getElementById("logoArea").innerHTML =
        '<img src="./images/logo.png" alt="WILD FANFEST 로고">';
    */



    const ADMIN_PASSWORD = "2026";
    const STORAGE_KEY = "wildFanfestCatalogAdminDataV1";
    const originalProducts = JSON.parse(JSON.stringify(products));

    function loadAdminData() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (!Array.isArray(saved)) return;

        saved.forEach(savedItem => {
          const target = products.find(item => item.id === savedItem.id);
          if (!target) return;
          if (typeof savedItem.nameKo === "string") target.nameKo = savedItem.nameKo;
          if (typeof savedItem.nameEn === "string") target.nameEn = savedItem.nameEn;
          if (typeof savedItem.price === "string") target.price = savedItem.price;
          if (typeof savedItem.image === "string") target.image = savedItem.image;
          target.soldOut = Boolean(savedItem.soldOut);
        });
      } catch (error) {
        console.warn("관리자 저장 데이터를 불러오지 못했습니다.", error);
      }
    }

    function persistAdminData() {
      const data = products.map(item => ({
        id: item.id,
        nameKo: item.nameKo,
        nameEn: item.nameEn,
        price: item.price,
        image: item.image,
        soldOut: Boolean(item.soldOut)
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    const adminEntryButton = document.getElementById("adminEntryButton");
    const adminLoginModal = document.getElementById("adminLoginModal");
    const adminPassword = document.getElementById("adminPassword");
    const adminLoginMessage = document.getElementById("adminLoginMessage");
    const confirmAdminLogin = document.getElementById("confirmAdminLogin");
    const cancelAdminLogin = document.getElementById("cancelAdminLogin");
    const adminList = document.getElementById("adminList");
    const saveAdminData = document.getElementById("saveAdminData");
    const exitAdminMode = document.getElementById("exitAdminMode");
    const resetAdminData = document.getElementById("resetAdminData");
    const backgroundPath = document.getElementById("backgroundPath");
    const logoPath = document.getElementById("logoPath");
    backgroundPath.value = designData.background;
    logoPath.value = designData.logo;

    function openAdminLogin() {
      adminPassword.value = "";
      adminLoginMessage.textContent = "";
      adminLoginModal.classList.add("open");
      setTimeout(() => adminPassword.focus(), 50);
    }

    function closeAdminLogin() {
      adminLoginModal.classList.remove("open");
    }

    function enterAdminMode() {
      closeAdminLogin();
      document.body.classList.add("admin-mode");
      renderAdminList();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function exitAdmin() {
      document.body.classList.remove("admin-mode");
      render(products);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function checkAdminPassword() {
      if (adminPassword.value === ADMIN_PASSWORD) {
        enterAdminMode();
      } else {
        adminLoginMessage.textContent = "비밀번호가 올바르지 않습니다.";
        adminPassword.select();
      }
    }

    function renderAdminList() {
      adminList.innerHTML = sortByDisplayOrder(products).map(item => `
        <div class="admin-item" data-admin-id="${item.id}">
          <img class="admin-thumb" src="${item.image}" alt="${item.nameKo}">
          <input class="admin-field admin-name-ko" value="${escapeHtml(item.nameKo)}" aria-label="${item.id}번 한글 상품명">
          <input class="admin-field admin-name-en" value="${escapeHtml(item.nameEn)}" aria-label="${item.id}번 영문 상품명">
          <input class="admin-field admin-price" value="${escapeHtml(item.price)}" aria-label="${item.id}번 가격">
          <input class="admin-field admin-image" value="${escapeHtml(item.image)}" aria-label="${item.id}번 이미지 경로" placeholder="./images/products/0001.jpg">
          <button type="button" class="soldout-toggle ${item.soldOut ? "active" : ""}" data-soldout-id="${item.id}">
            ${item.soldOut ? "품절 해제" : "품절"}
          </button>
        </div>
      `).join("");

      adminList.querySelectorAll(".soldout-toggle").forEach(button => {
        button.addEventListener("click", () => {
          syncAdminInputsToProducts();
          const id = Number(button.dataset.soldoutId);
          const item = products.find(product => product.id === id);
          if (!item) return;
          item.soldOut = !item.soldOut;
          button.classList.toggle("active", item.soldOut);
          button.textContent = item.soldOut ? "품절 해제" : "품절";
          persistAdminData();
        });
      });
    }

    function escapeHtml(value) {
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    }

    function syncAdminInputsToProducts() {
      adminList.querySelectorAll(".admin-item").forEach(row => {
        const id = Number(row.dataset.adminId);
        const item = products.find(product => product.id === id);
        if (!item) return;
        item.nameKo = row.querySelector(".admin-name-ko").value.trim();
        item.nameEn = row.querySelector(".admin-name-en").value.trim();
        item.price = row.querySelector(".admin-price").value.trim();
        item.image = row.querySelector(".admin-image").value.trim();
      });
    }

    adminEntryButton.addEventListener("click", openAdminLogin);
    cancelAdminLogin.addEventListener("click", closeAdminLogin);
    confirmAdminLogin.addEventListener("click", checkAdminPassword);
    adminPassword.addEventListener("keydown", event => {
      if (event.key === "Enter") checkAdminPassword();
      if (event.key === "Escape") closeAdminLogin();
    });
    adminLoginModal.addEventListener("click", event => {
      if (event.target === adminLoginModal) closeAdminLogin();
    });

    saveAdminData.addEventListener("click", () => {
      syncAdminInputsToProducts();
      persistAdminData();
      designData = { background: backgroundPath.value.trim() || DEFAULT_DESIGN.background, logo: logoPath.value.trim() || DEFAULT_DESIGN.logo };
      localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(designData));
      applyDesign(designData);
      render(products);
      alert("상품 정보와 디자인 이미지 경로가 저장되었습니다.");
    });

    exitAdminMode.addEventListener("click", () => {
      syncAdminInputsToProducts();
      persistAdminData();
      designData = { background: backgroundPath.value.trim() || DEFAULT_DESIGN.background, logo: logoPath.value.trim() || DEFAULT_DESIGN.logo };
      localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(designData));
      applyDesign(designData);
      exitAdmin();
    });

    resetAdminData.addEventListener("click", () => {
      if (!confirm("수정한 상품명, 가격, 품절 상태를 모두 초기 데이터로 복원할까요?")) return;
      products.splice(0, products.length, ...JSON.parse(JSON.stringify(originalProducts)));
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(DESIGN_STORAGE_KEY);
      designData = { ...DEFAULT_DESIGN };
      backgroundPath.value = designData.background;
      logoPath.value = designData.logo;
      applyDesign(designData);
      renderAdminList();
      render(products);
    });

    loadAdminData();


    // 현장 태블릿 비치용: 이미지 길게 누르기 및 드래그 방지
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("dragstart", e => e.preventDefault());

    // 화면 회전 또는 크기 변경 시 열린 팝업의 스크롤 위치 초기화
    window.addEventListener("resize", () => {
      if (modal.classList.contains("open")) {
        const box = modal.querySelector(".modal-box");
        if (box) box.scrollTop = 0;
      }
    });

    render(products);


// 오프라인 실행을 위한 Service Worker 등록
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("오프라인 모드가 준비되었습니다.");
    } catch (error) {
      console.warn("Service Worker 등록 실패:", error);
    }
  });
}



function updateOfflineStatus() {
  const banner = document.getElementById("offlineStatus");
  if (!banner) return;
  banner.classList.toggle("show", !navigator.onLine);
}
window.addEventListener("online", updateOfflineStatus);
window.addEventListener("offline", updateOfflineStatus);
updateOfflineStatus();
