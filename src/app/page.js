// import { useEffect } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
// import Load from "./components/Load";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  

  return (
    <main className="w-full min-h-[100vh]  flex flex-col justify-start items-center gap-2">
      <Navbar />
      <Hero />
      <Carousel />
      {/* <Chat/> */}
      <Footer />
    </main>
  );
}
