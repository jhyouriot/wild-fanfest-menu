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
