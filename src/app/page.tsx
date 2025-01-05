import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center h-screen">
      <Link href="/post" className="underline">
        Post
      </Link>
    </div>
  );
}
