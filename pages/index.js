import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Hero from "@components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}
