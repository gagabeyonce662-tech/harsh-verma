import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
