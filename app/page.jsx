import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="main">
        <Link
          className="main-link"
          href={{
            pathname: "/page/1",
          }}
        >
          Открыть страницу с постами
        </Link>
      </main>
    </>
  );
}
