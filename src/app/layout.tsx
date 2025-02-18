// app/layout.tsx
import "./globals.css";
import RandomSeoShareButton from "./components/RandomSeoShareButton";

export const metadata = {
  title: "My NextJS App - Minimal Design",
  description: "A minimal and clean NextJS application with SEO optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body className="bg-white">
        <header className="bg-gray-900 text-white py-6 shadow-lg">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">My NextJS App</h1>
            <p className="mt-2 text-lg">A minimal and clean design</p>
            {/* 랜덤 SEO 페이지로 이동하는 버튼 */}
            <RandomSeoShareButton />
          </div>
        </header>
        <main className="container mx-auto py-10 px-4">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            © 2025 My NextJS App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
