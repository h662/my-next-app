// app/page.tsx
import Head from "next/head";

export const metadata = {
  title: "Social Share Example - My NextJS App",
  description:
    "This page demonstrates how to set up OpenGraph and Twitter Card meta tags using the Head component in NextJS.",
};

export default function SocialSharePage() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Social Share Example - My NextJS App</title>
        <meta
          name="description"
          content="Enhance your SEO with rich meta tags using NextJS's Head component."
        />
        <meta
          name="keywords"
          content="NextJS, SEO, OpenGraph, Twitter Card, Web Development"
        />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph Meta Tags */}
        <meta
          property="og:title"
          content="Social Share Example - My NextJS App"
        />
        <meta
          property="og:description"
          content="Learn how to enhance your website's SEO and social media previews with NextJS's OpenGraph meta tags."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/seo-share" />
        <meta property="og:image" content="/sample.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Social Share Example - My NextJS App"
        />
        <meta
          name="twitter:description"
          content="Experience enhanced social media sharing with rich previews using OpenGraph and Twitter Card meta tags."
        />
        <meta name="twitter:image" content="/sample.jpg" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">
          Social Share Example
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          이 페이지는 Head 컴포넌트를 사용해 OpenGraph 및 Twitter Card meta
          태그를 설정하는 방법을 보여줍니다.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          참고: 메타 태그는 페이지가 배포된 후에 적용됩니다. 페이지를 배포한 후,
          Facebook Sharing Debugger나 Twitter Card Validator와 같은 도구로
          미리보기를 확인하세요.
        </p>
        <div className="mt-8">
          <img
            src="/sample.jpg"
            alt="Sample Image for Social Sharing"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </main>
    </>
  );
}
