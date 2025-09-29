"use client";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCustomerStore } from "./customer-store";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

export default function CustomerForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, email, phone, setName, setEmail, setPhone } =
    useCustomerStore();
  const handleSubmit = () => {
    const phoneRegex = new RegExp(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );
    if (!name || !email || !phone) {
      toast.error("Please fill all the fields");
      return;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid Phone Number");
      return;
    }
    setIsOpen(false);
    toast.success("Customer Added Successfully");
  };
  useEffect(() => {
    // if no name and email and phone is available and the dialog is not opened , open the dialog

    if ((!name || !email || !phone) && !isOpen) {
      setIsOpen(true);
    }
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" />
      )}

      {/* Modal Content */}
      <DialogContent className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-lg w-full text-black max-w-md p-6 flex flex-col space-y-4 relative">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center">
            <Flag className="text-black text-xl" />
            {/* <DialogClose asChild>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </DialogClose> */}
          </div>

          {/* Title & Description */}
          <DialogTitle className="text-lg font-bold text-black">
            Details
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Enter your details
          </DialogDescription>

          <form className="space-y-3">
            {/* Form Fields */}
            <div className="space-y-3">
              <div>
                <Label className="text-xs font-semibold text-gray-700">
                  Name*
                </Label>
                <Input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full text-black"
                />
              </div>
              <div>
                <Label className="text-xs font-semibold text-gray-700">
                  Email*
                </Label>
                <Input
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full text-black"
                />
              </div>
              <div>
                <Label className="text-xs font-semibold text-gray-700">
                  Phone Number*
                </Label>
                <Input
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                  type="tel"
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full text-black"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Confirm
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
