'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import About from "./about";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Pricing from "./pricing";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const AboutnRef = useRef<HTMLDivElement>(null);
  // const websiteDesignRef = useRef<HTMLDivElement>(null);
  // const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  // const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    AboutnRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollToWebsiteDesign = () => {
  //   websiteDesignRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // };

  // const scrollToGraphicDesign = () => {
  //   graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollToBrands = () => {
  //   brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToAbout={scrollToAbout}
        // scrollToWebsiteDesign={scrollToWebsiteDesign}
        // scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToPricing={scrollToPricing}
        scrollToFaq={scrollToFaq}
        // scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Unlock the Secrets to a Profitable Dropshipping Business
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Discover how you can create a personalized dropshipping empire and become part of the new generation of young millionaires
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Get Course
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>

        <div ref={AboutnRef}>
          <About />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>

        <div id ='services'>
          <Services />
        </div>

        {/* <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div> */}

        <div ref={pricingRef}>
          <Pricing/>
        </div>
        
        {/* <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div> */}
        {/* <div ref={brandsRef}>
          <Brands />
        </div> */}
        
        <InfiniteMovingCardsDemo />
        <FAQS ref={faqRef}/>
      </div>
    </div>
  );
}
