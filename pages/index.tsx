import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      (will always go to stage 2)
      <Link href="/app/stage-1">
        <a>stage 1</a>
      </Link>
      <Link href="/app/stage-2">
        <a>stage 2</a>
      </Link>
      <Link href="/app/stage-3">
        <a>stage 3</a>
      </Link>
    </main>
  );
}
