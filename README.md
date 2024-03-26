# 카카오 브레인 블로그 React/Next 클론 프로젝트

## 1. 웹퍼블리싱/vanilajs

- html, css, js, swiper, filezilla
- 반응형 작업물 보기 (본인.dothome.co.kr)
- 기타 (유지보수 학습-jquery 별도 파일 생성)
- 실제 반영은 vanilajs 적용

## 2. 프론트엔드/Reacts(JS 버전)

- 리액트 마이그레이션 (https://kkobrain-fawn.vercel.app/)

## 3. 프론트엔드/Reacts(TS 버전)

- 리액트 마이그레이션 (https://kkobrain-fawn.vercel.app/)

## 4. 프론트엔드/Next.js

- Next.js 마이그레이션 (https://kkobrain-fawn.vercel.app/)

### 4.1. next 설치하기

- `yarn add next@latest`

### 4.2. typeScript 버전을 최신으로

- `yarn add typescript@latest`

### 4.3. /next.config.js 파일생성

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./build",
};
module.exports = nextConfig;
```

### 4.4. tsconfig.json 수정

```json
{
  "compilerOptions": {
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "noEmit": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true
  },
  "include": ["src", "./build/types/**/*.ts", "./next-env.d.ts"],
  "exclude": ["node_modules"]
}
```

### 4.5. app 폴더 만들기 (App Router 적용을 위해서 )

- /src/app 폴더 생성

### 4.6. layout.tsx 만들기(index.html 을 처리함)

- /src/app/layout.tsx
- step 1.

```tsx
// index.html 역할
export default function Layout({ children }: { children: React.ReactNode }) {
    return (

    )
  }
```

- step 2. 리액트 public/index.html 내용을 추가

```tsx
// index.html 역할
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/images/icon/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>카카오 브레인 블로그 - 클론코드</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </html>
  );
}
```

- step 3. 리액트에서 활용하는 favicon, robots.txt, manifest.json 등등 파일을 app 폴더로 복사

- step 4. layout.tsx 정리 적용

```tsx
// index.html 역할
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#000000" />
        <title>카카오 브레인 블로그 - 클론코드</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
```

- step 5. Meta 태그 정의하기

```tsx
// index.html 역할

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카카오 브레인 블로그 - 클론코드",
  description: "클론 코드를 통한 프로젝트",
  themeColor: "#000000",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
```

- step 6. 첫 화면 page.tsx 만들기
  : /src/app/page.tsx 생성

```tsx
export default function Page(){
    return ()
}
```

```tsx
"use client";
import "../index.css";
import App from "../App";

export default function Page() {
  return <App />;
}
```

- step 7. CSR 형태로 배포 셋팅

```tsx
"use client";
import "../index.css";
import dynamic from "next/dynamic";
// import App from "../App";
const App = dynamic(() => import("../App"), { ssr: false });

export default function Page() {
  return <App />;
}
```

- step 8. package.json 수정

```json

  "scripts": {
    "start": "next start",
    "build": "next build",
    "dev": "next dev"
  },

```

- step 9. 테스트
  : `yarn dev`
  : /next-env.d.ts 생성 확인