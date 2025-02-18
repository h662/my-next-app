// app/user-profile/page.tsx
export const metadata = {
  title: "User Profile",
  description:
    "This page demonstrates data fetching in a server component using App Router.",
};

export default async function UserProfilePage() {
  // Fetch user data directly in the server component.
  // 이 코드는 서버 측에서 실행되며, 별도의 getServerSideProps나 getStaticProps 없이 데이터를 가져옵니다.
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "force-cache",
  });
  const user = await res.json();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
      <p className="mt-4 text-lg">Name: {user.name}</p>
      <p className="mt-2 text-lg">Email: {user.email}</p>
      <p className="mt-2 text-lg">Phone: {user.phone}</p>
    </main>
  );
}
