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
      <head>
      <meta name="naver-site-verification" content="e9ea53cb06da6f0a208e8ecd5b5d98d386a2892d" />
      <link
          rel="canonical"
          href="https://kkobrain-soyeon.vercel.app"
        ></link>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}