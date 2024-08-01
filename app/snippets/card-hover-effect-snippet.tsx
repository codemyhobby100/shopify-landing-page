import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-green-600" /></div>,
        title: "Shopify S​tore S​etup",
        description:
          "You will learn in detailed Videos ​how to setup your store from sc​ratch to finish.",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-green-600" /></div>,
        title: "Integration & ​Payment System",
        description:
          "You will Learn how to Integrate ​Payment Apps into your store and ​automate Products Fulfilment.",
       
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-green-600" /></div>,
        title: "Ads Setup & M​arketing",
        description:
          "You will Learn how to Promote your Store and Make sales ​through Ads & marketing ​channels such as Facebook & ​Tiktok",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-green-600" /></div>,
        title: "Business Administration",
        description:
          "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-green-600" /></div>,
        title: "App Development",
        description:
          "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-green-600" /></div>,
        title: "Support",
        description:
          "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
     
      },
];
