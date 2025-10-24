/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "../../_actions/fetch";
import { toast } from "@/components/ui/sonner";

const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // @ts-ignore
      const name = e.target.name.value;
      // @ts-ignore
      const email = e.target.email.value;
      // @ts-ignore
      const message = e.target.message.value;
      await submitForm(name, email, message);
      // @ts-ignore
      e.target.reset();
      toast.success("Thank you for your message!");
    } catch (error) {
      console.log(error);
      toast.error("Form submission failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="text-white space-y-10 xl:container xl:mx-auto px-10 lg:px-20 pb-10 sm:px-4 xs:px-2">
      {/* top */}
      <div className="relative md:h-80 h-24 flex items-center justify-start px-10 w-full md:px-4 sm:h-40 xs:h-24">
        <div className="absolute inset-0 bg-black/30 z-10 h-full w-full sm:bg-black/60" />
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/img/contactus-watch.png"
            alt="watch image for contactus"
            className="object-cover"
            fill
          />
        </div>
        <p className="font-bold text-[3rem] lg:text-[5.3rem] text-left text-white z-50 sm:text-2xl">
          Contact
        </p>
      </div>

      {/* Get in touch */}
      <div className="py-24 flex justify-center items-center flex-col gap-20 mt-15 sm:py-8 sm:gap-6">
        <p className="font-bold text-3xl lg:text-7xl text-center sm:text-xl font-[Allura]">
          Get In Touch
        </p>

        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full">
          {/* email */}
          <div className="overflow-hidden w-full max-h-[10rem] sm:max-h-[8rem] relative flex justify-between items-center border-2 border-white rounded-3xl py-6 pl-5 sm:rounded-xl sm:py-4 sm:px-6">
            <div className="w-3/4">
              <p className="font-bold text-sm lg:text-lg">Email Us</p>
              <p className="text-xs mt-4 lg:text-lg sm:mt-2">
                Telephone : +91 78346 36432
              </p>
              <p className="text-xs sm:text-xs">Email : vasuki@domain.com</p>
            </div>
            <div className="relative h-40 w-40 lg:max-h-[160px] -right-10 sm:h-20 sm:w-20 max-h-[70px]">
              <Image
                src={"/icons/mail.svg"}
                alt="email icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* working hours */}
          <div className="overflow-hidden w-full max-h-[10rem] sm:max-h-[8rem] relative flex justify-between items-center border-2 border-white rounded-3xl py-6 pl-5 sm:rounded-xl sm:py-4 sm:px-6">
            <div className="w-3/4">
              <p className="font-bold text-sm lg:text-lg">Working Hours</p>
              <p className="text-xs mt-4 lg:text-lg sm:mt-2">
                Mon-Sat : 6:00am-10:00pm
              </p>
              <p className="text-xs sm:text-xs">Sun : 8:00am-9:00pm</p>
            </div>
            <div className="relative h-40 w-40 lg:max-h-[160px] -right-10 sm:h-20 sm:w-20 max-h-[80px]">
              <Image
                src={"/icons/clock.svg"}
                alt="email icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* location */}
          <div className="overflow-hidden w-full max-h-[10rem] sm:max-h-[8rem] relative flex justify-between items-center border-2 border-white rounded-3xl py-6 pl-5 sm:rounded-xl sm:py-4 sm:px-6">
            <div className="w-3/4">
              <p className="font-bold text-sm lg:text-lg">Location</p>
              <p className="text-xs mt-4 lg:text-lg sm:mt-2">
                No 6, vivekanandha theru,
              </p>
              <p className="text-xs sm:text-xs">dubai kurukku sandhu, dubai.</p>
            </div>
            <div className="relative h-40 w-40 lg:max-h-[160px] -right-10 sm:h-20 sm:w-20 max-h-[80px]">
              <Image
                src="/icons/location.svg"
                alt="email icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* touch with us */}
      <div className="lg:py-10 flex justify-center items-center flex-col lg:gap-5 text-center sm:py-6 sm:gap-2 sm:px-4">
        <p id="font-p" className="text-2xl lg:text-5xl sm:text-lg sm:italic">
          Get In Touch with Us
        </p>
        <p className="font-extrabold text-2xl lg:text-6xl uppercase sm:text-xl">
          We&apos;re just <br /> a message <br /> away.
        </p>
        <p className="md:max-w-[40rem] text-lg lg:text-2xl sm:text-sm sm:mb-4">
          Contact us today to explore how we can support your employee
          wellbeing. Feel free to call or email us.
        </p>

        <div className="lg:max-w-[40rem] flex flex-col gap-6 text-start rounded-3xl text-black bg-white px-3 py-7 md:py-10 md:px-5 sm:w-full sm:gap-4 sm:rounded-xl sm:p-4">
          <p className="font-bold text-2xl lg:text-5xl sm:text-xl">
            Leave Us A Message
          </p>
          <p className="text-sm sm:text-xs">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 sm:gap-4"
          >
            <div>
              <Input
                required
                name="name"
                type="text"
                placeholder="User Name *"
                className="border-b-2 border-black py-2 ring-0 focus:ring-0 focus-visible:ring-0 border-t-0 border-x-0 rounded-none sm:border-b sm:text-sm"
              />
            </div>
            <div>
              <Input
                required
                name="email"
                type="email"
                placeholder="User Email *"
                className="border-b-2 border-black py-2 ring-0 focus:ring-0 focus-visible:ring-0 border-t-0 border-x-0 rounded-none sm:border-b sm:text-sm"
              />
            </div>
            <div>
              <Textarea
                required
                name="message"
                placeholder="Your Comment *"
                className="border-b-2 border-black py-2 ring-0 focus:ring-0 focus-visible:ring-0 border-t-0 border-x-0 rounded-none sm:border-b sm:text-sm"
                rows={4}
              />
            </div>
            {/* Checkbox for mobile only */}
            <div className="lg:hidden flex items-center gap-2 text-xs">
              <input type="checkbox" id="save-info" className="h-3 w-3" />
              <label htmlFor="save-info">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <div className="py-4 sm:pt-2">
              <Button
                disabled={loading}
                className="h-auto py-3 px-3 cursor-pointer lg:py-3 lg:px-8 hover:bg-black uppercase bg-black lg:rounded-full font-bold"
              >
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
