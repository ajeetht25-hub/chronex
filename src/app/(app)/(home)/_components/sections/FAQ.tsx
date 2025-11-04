import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQCardContent = [
  {
    "title": "Can I customize every part of the watch?",
    "desc": "Yes. You can personalize nearly every element — including the dial, bezel, strap, and case. Our design tool lets you visualize your watch in real time before you place your order."
  },
  {
    "title": "How long does it take to receive a customized watch?",
    "desc": "Each timepiece is crafted with precision and care. Typically, customized orders take 2–4 weeks to complete, depending on design complexity and selected materials."
  },
  {
    "title": "Do you offer international shipping?",
    "desc": "Absolutely. We ship worldwide using trusted delivery partners. Shipping time and costs vary based on your location and will be calculated at checkout."
  },
  {
    "title": "What materials are used in your watches?",
    "desc": "We use premium-grade stainless steel, sapphire crystal glass, and Swiss movements for unmatched durability and precision. You can also choose from a range of leather, metal, or rubber straps to suit your style."
  },
  {
    "title": "Is there a warranty on the watches?",
    "desc": "Yes. Every watch comes with a 2-year international warranty covering manufacturing defects. Our support team is always ready to assist with repairs or replacements if needed."
  }
];

const FAQ = () => {
  return (
    <div className="xl:container xl:mx-auto px-5 py-10 lg:px-20">
      <div className="border-2 border-white rounded-2xl lg:px-16 py-8 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <div className="relative lg:h-[36rem] lg:w-[30rem] h-[28rem] w-[19rem]">
            <Image
              src={"/img/watch-img.png"}
              alt={"faq watch image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-5 lg:px-0 py-8 justify-start items-start w-full">
          <p className="text-white font-bold text-3xl">
            Frequently Asked Questions
          </p>
          <Accordion type="single" collapsible className="w-full">
            {FAQCardContent.map((content, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger
                  role="button"
                  aria-expanded={false}
                  className="flex font-bold text-lg text-white items-center justify-between py-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-45"
                >
                  {content.title}
                </AccordionTrigger>
                <AccordionContent
                  role="region"
                  className="text-white/50 text-[1rem]"
                >
                  {content.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
