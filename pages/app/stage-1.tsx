import Link from "next/link";

export default function Stage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export { getServerSideProps } from "@/lib/redirect";
