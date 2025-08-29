import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/accordion";
const FAQCardContent = [
  {
    title: "Lorem Ipsum?",
    desc: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
  },
  {
    title: "Lorem Ipsum?",
    desc: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
  },
  {
    title: "Lorem Ipsum?",
    desc: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
  },
  {
    title: "Lorem Ipsum?",
    desc: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
  },
  {
    title: "Lorem Ipsum?",
    desc: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
  },
  {
    title: "Lorem Ipsum?",
    desc: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
  },
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
