import Link from "next/link";

export default async function Home() {

  return (
    <main>
      <section className={"h-screen container mx-auto grid grid-cols-2 items-center"}>
        <div className={"leading-loose"} id={"hero-text"}>
          <h3 className={"font-mono text-2xl"}>Hello 👋</h3>
          <h1 className={"font-sans text-6xl font-bold"}>Soumajit Ghosh</h1>

          <div className={"flex gap-3 mt-10 font-mono"}>
            <Link className={"btn btn-accent"} href="/about">About</Link>
            <Link className={"btn btn-primary"} href="/contact">
              Contact <span className="material-symbols-outlined">call</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
