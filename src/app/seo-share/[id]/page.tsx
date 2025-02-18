// app/seo-share/[id]/page.tsx

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // 유효한 id는 "1", "2", "3", "4"입니다. 유효하지 않은 경우 "1"을 기본으로 사용합니다.
  const validIds = ["1", "2", "3", "4"];
  const image = validIds.includes(id) ? `/${id}.jpg` : `/1.jpg`;

  return {
    title: `Social Share Example ${id} - My NextJS App`,
    description:
      "This page demonstrates dynamic meta tag assignment with fixed images for social sharing.",
    openGraph: {
      title: `Social Share Example ${id} - My NextJS App`,
      description:
        "Learn how to dynamically assign meta tags with fixed images for rich social media previews.",
      url: `https://www.example.com/seo-share/${id}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Social Share Image ${id}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Social Share Example ${id} - My NextJS App`,
      description:
        "Experience enhanced social media sharing with fixed images using OpenGraph and Twitter Card meta tags.",
      images: [image],
    },
  };
}

export default async function SocialSharePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const image = `/${id}.jpg`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">
        Social Share Example {id}
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        이 페이지는 동적 메타 태그 할당 예제를 보여줍니다.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        참고: 메타 태그는 페이지가 배포된 후에 적용됩니다. 페이지를 배포한 후,
        Facebook Sharing Debugger나 Twitter Card Validator를 통해 미리보기를
        확인하세요.
      </p>
      <div className="mt-8">
        <img
          src={image}
          alt={`Fixed Social Share Image ${id}`}
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}
