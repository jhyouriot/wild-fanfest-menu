WILD FANFEST 태블릿 상품 카탈로그 — GitHub Pages용

업로드할 파일 구조
wild-fanfest-menu/
├─ index.html
├─ style.css
├─ script.js
└─ images/
   ├─ background.jpg
   ├─ logo.png
   ├─ products/
   │  ├─ 0001.jpg
   │  ├─ 0002.jpg
   │  └─ ... 0089.jpg
   ├─ backgrounds/
   └─ stickers/

이미지 교체 방법
1. 전체 배경: images/background.jpg 파일을 같은 이름으로 교체
2. 로고: images/logo.png 파일을 같은 이름으로 교체
3. 상품 이미지: images/products/0001.jpg ~ 0089.jpg를 같은 이름으로 교체
4. 파일명과 경로가 같으면 코드를 수정하지 않아도 자동 반영됩니다.

다른 파일명을 사용할 때
- 페이지 맨 아래 관리자 → 비밀번호 2026
- 디자인 이미지 경로 또는 각 상품 이미지 경로를 수정
- 예: ./images/backgrounds/summer.jpg
- 예: ./images/products/arcane-jinx.jpg

권장 이미지
- 상품 이미지: 1000×1000px 정사각형 JPG/PNG/WebP
- 가로 태블릿 배경: 1920×1080px 이상
- 세로 태블릿 배경: 2160×3840px 권장
- 로고: 투명 배경 PNG

주의
- 관리자 수정 정보와 품절 상태는 해당 브라우저 localStorage에 저장됩니다.
- GitHub에 영구 반영되는 것은 실제 업로드한 이미지/코드 파일입니다.
- 다른 태블릿에도 같은 관리자 상태를 공유하려면 별도 서버 또는 Firebase 연동이 필요합니다.

GitHub 업로드
- ZIP을 압축 해제한 뒤 내부 파일과 images 폴더를 저장소 루트에 전부 업로드하세요.
- GitHub Pages는 Settings → Pages → Deploy from a branch → main / root 선택


## 오프라인 사용 방법

이 버전은 PWA(Service Worker) 방식으로 제작되어 인터넷이 끊겨도 동작합니다.

1. GitHub Pages 주소를 인터넷이 연결된 상태에서 한 번 엽니다.
2. 상품 이미지가 모두 표시될 때까지 잠시 기다립니다.
3. 태블릿 브라우저 메뉴에서 `홈 화면에 추가` 또는 `앱 설치`를 선택합니다.
4. 이후에는 인터넷이 없어도 홈 화면 아이콘으로 실행할 수 있습니다.

### 중요
- 최초 1회 접속과 설치에는 인터넷 연결이 필요합니다.
- background.jpg, logo.png, 0001.jpg~0089.jpg가 오프라인 저장 대상입니다.
- GitHub에서 이미지를 교체한 뒤에는 인터넷 연결 상태로 페이지를 다시 열어 새 파일을 받아야 합니다.
- 관리자에서 수정한 상품명, 가격, 품절 상태는 해당 태블릿 브라우저에 저장되므로 오프라인에서도 유지됩니다.
- 브라우저 데이터나 사이트 저장 공간을 삭제하면 관리자 수정 정보와 오프라인 파일이 초기화될 수 있습니다.


## 상품 배치 순서
- 제공된 배치도 순서 적용
- 신상 컬렉션 41개
- 프리미엄 스태츄 및 나머지 상품 48개
- 태블릿 가로 4열 / 세로 3열 / 모바일 2열
- 검색 및 관리자 페이지에서도 동일한 상품 순서 유지
