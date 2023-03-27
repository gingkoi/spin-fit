import Head from "next/head";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import MidFirst from "@/components/hero/MidFirst";
import MidClasses from "@/components/hero/MidClasses";
import Review from "@/components/reviews/Review";
import JoinCommunity from "@/components/reviews/JoinCommunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spin Fitness</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-poppin">
        <header>
          <Banner />
          <Navbar />
        </header>
        <div>
          <Hero />
          <MidFirst />
          <MidClasses />
          <Review />
          <JoinCommunity />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}