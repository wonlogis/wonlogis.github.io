# WON LOGIS Landing Page

원로지스 회사 소개용 원페이지 랜딩 페이지입니다.

React + TypeScript + Tailwind CSS 기반으로 구성되어 있으며, GitHub Pages 또는 GitHub.io 정적 호스팅에 바로 올릴 수 있도록 `npm run build` 시 배포 파일이 저장소 루트에 생성되도록 설계했습니다.

## 기술 스택

- React 18
- TypeScript
- Tailwind CSS
- Vite

## 구현 범위

- PC / Mobile 반응형 원페이지 소개 사이트
- 시안 기반의 다크 톤 히어로 섹션
- 서비스 카드 섹션
- 회사 소개 및 지표 섹션
- 파트너 마키 섹션
- 모바일 메뉴
- 스크롤 리빌 인터랙션
- 히어로 비주얼 패럴랙스 느낌의 스크롤 인터랙션
- GitHub Pages용 루트 빌드 구조
- 커스텀 도메인용 `CNAME` 포함

## 프로젝트 구조

```txt
.
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── scripts
│   ├── prepare-build.mjs
│   └── postbuild.mjs
└── site-src
    ├── index.html
    ├── public
    │   └── CNAME
    └── src
        ├── App.tsx
        ├── index.css
        ├── assets
        │   └── photos
        │       ├── hero-global-network.webp
        │       ├── about-headquarters.webp
        │       ├── service-sea.webp
        │       ├── service-air.webp
        │       ├── service-land.webp
        │       ├── service-warehouse.webp
        │       └── service-trading.webp
        ├── components
        │   └── Sections.tsx
        └── content
            └── siteContent.tsx
```

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

기본적으로 Vite 개발 서버가 실행됩니다.

### 3. 타입 체크

```bash
npm run check
```

### 4. 프로덕션 빌드

```bash
npm run build
```

빌드가 완료되면 저장소 루트에 아래 파일이 생성됩니다.

```txt
index.html
404.html
assets/
CNAME
```

이 파일들이 실제 배포 대상입니다.

## 루트 빌드 방식 설명

이 프로젝트는 일반적인 `dist` 폴더 대신 저장소 루트에 빌드 결과를 생성합니다.

이유는 다음과 같습니다.

- GitHub Pages 루트 배포 대응
- 정적 파일을 그대로 업로드하거나 브랜치 루트에서 배포하기 쉬움
- 커스텀 도메인 `CNAME` 파일을 함께 배포 가능

이를 위해 다음 구조를 사용합니다.

- 실제 소스는 `site-src` 내부에 위치
- Vite `root`는 `site-src`
- Vite는 임시 폴더 `.stage-dist`에 먼저 빌드
- 후처리 스크립트가 루트에 `index.html`, `404.html`, `assets`, `CNAME`를 복사
- `scripts/prepare-build.mjs`가 이전 빌드 산출물만 정리
- `scripts/postbuild.mjs`가 `index.html`을 `404.html`로 복사

## 도메인 설정

현재 임시 커스텀 도메인은 아래 파일에 설정되어 있습니다.

- [site-src/public/CNAME](/Users/macpro/Desktop/jk/GitHub/won-logis/site-src/public/CNAME)

현재 값:

```txt
wonlogics.co.kr
```

현재 프로젝트는 `wonlogics.co.kr` 기준으로 설정되어 있습니다.

예시:

```txt
www.your-domain.com
```

## 콘텐츠 수정 방법

텍스트, 메뉴, 지표, 파트너사명 같은 대부분의 콘텐츠는 아래 파일에서 관리합니다.

- [site-src/src/content/siteContent.tsx](/Users/macpro/Desktop/jk/GitHub/won-logis/site-src/src/content/siteContent.tsx)

여기서 수정 가능한 항목:

- 상단 메뉴명
- CTA 문구
- 서비스 카드 텍스트
- 회사 소개 지표
- 파트너사 명칭
- 연락처 정보
- 푸터 링크 텍스트

GitHub 웹에서 직접 수정해도 반영되게 하려면 아래 파일을 수정하면 됩니다.

- [site-src/src/content/siteContent.tsx](/Users/macpro/Desktop/jk/GitHub/wonlogis.github.io/site-src/src/content/siteContent.tsx)

이 저장소에는 [deploy-pages.yml](/Users/macpro/Desktop/jk/GitHub/wonlogis.github.io/.github/workflows/deploy-pages.yml) 워크플로가 포함되어 있어, `main` 또는 `master` 브랜치에 커밋되면 자동으로 빌드 후 GitHub Pages에 배포됩니다.

주의:

- GitHub 저장소 설정의 `Pages` 항목에서 배포 소스를 `GitHub Actions`로 설정해야 합니다.
- 루트의 `index.html`, `404.html`, `assets`는 빌드 산출물이므로 직접 수정하지 말고 소스 파일을 수정하는 것을 권장합니다.

## 이미지 교체 방법

현재 화면에 사용되는 이미지는 아래 폴더에 정리되어 있습니다.

- [site-src/src/assets/photos](/Users/macpro/Desktop/jk/GitHub/won-logis/site-src/src/assets/photos)

현재 파일 목록:

- `hero-global-network.webp`
- `about-headquarters.webp`
- `service-sea.webp`
- `service-air.webp`
- `service-land.webp`
- `service-warehouse.webp`
- `service-trading.webp`

이미지 교체 원칙:

- 가능하면 같은 파일명 유지
- 현재는 `webp`로 정리되어 개발/빌드 환경 모두 안정적으로 노출됨
- 나중에 `webp`, `png`, `jpg`로 교체해도 import 경로만 유지하면 동일하게 동작
- 서비스 카드용 이미지는 비율이 달라도 `object-cover`로 자연스럽게 표시됨

즉, 나중에 이미지를 바꿀 때는 같은 이름의 파일로 교체하거나 [site-src/src/content/siteContent.tsx](/Users/macpro/Desktop/jk/GitHub/won-logis/site-src/src/content/siteContent.tsx) 의 import 대상만 바꾸면 대부분 코드 수정 없이 동작합니다.

현재 매핑:

- Hero: `hero-global-network.webp`
- 회사 소개 섹션: `about-headquarters.webp`
- 해상 운송: `service-sea.webp`
- 항공 운송: `service-air.webp`
- 육상 운송: `service-land.webp`
- 물류 보관: `service-warehouse.webp`
- 통관 / Trading: `service-trading.webp`

## 스타일 및 인터랙션 포인트

- 다크 네이비 + 골드 중심 컬러 시스템
- 반투명 헤더와 블러 효과
- 히어로 카드 패럴랙스 이동
- 섹션 진입 시 리빌 애니메이션
- 서비스 카드 hover 확대 및 lift 효과
- 파트너 로고 마키 스타일 흐름

## 주요 수정 포인트

### 레이아웃/섹션 수정

- [site-src/src/components/Sections.tsx](/Users/macpro/Desktop/jk/GitHub/won-logis/site-src/src/components/Sections.tsx)

### 글로벌 스타일 수정

- [site-src/src/index.css](/Users/macpro/Desktop/jk/GitHub/won-logis/site-src/src/index.css)

### 빌드 정책 수정

- [vite.config.ts](/Users/macpro/Desktop/jk/GitHub/won-logis/vite.config.ts)
- [scripts/prepare-build.mjs](/Users/macpro/Desktop/jk/GitHub/won-logis/scripts/prepare-build.mjs)
- [scripts/postbuild.mjs](/Users/macpro/Desktop/jk/GitHub/won-logis/scripts/postbuild.mjs)

## 운영 팁

- GitHub Pages에 올릴 때는 `npm run build` 후 루트에 생성된 파일 기준으로 배포하면 됩니다.
- 커스텀 도메인을 바꾸면 `site-src/public/CNAME`도 함께 수정해야 합니다.
- 루트의 `index.html`, `404.html`, `assets`, `CNAME`는 빌드 결과물이므로 직접 수정하지 않는 편이 좋습니다.
- 실제 수정은 `site-src` 내부 소스 기준으로 진행하는 것을 권장합니다.
