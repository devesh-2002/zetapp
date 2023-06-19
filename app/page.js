"use client";
import LandingPage1 from "./components/landing_page_1";
import LandingPage2 from "./components/landing_page_2";
import TopProducts from "./components/top_products";
import EarnSteps from "./components/earnsteps";
import ZetEffect from "./components/zeteffect";
import ChooseUs from "./components/choose_us";
export default function Home() {
  return (
    <div>
       <LandingPage1 />
        <LandingPage2 />
        <TopProducts />
        <ZetEffect />
        <ChooseUs />
        <EarnSteps />
        
    </div>
  );
}