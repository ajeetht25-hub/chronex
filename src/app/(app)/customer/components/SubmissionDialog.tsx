'use client';
import { Dialog,DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { useEffect } from 'react';

interface SubmissionDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SubmissionDialog({ isOpen, setIsOpen }: SubmissionDialogProps) {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white p-6 rounded-lg text-center">
        
          <DialogTitle className="text-xl font-bold text-black">Submission Successful</DialogTitle>

        <p className="text-black">Thank you for your submission! We will get back to you soon.</p>
        <button className='text-center text-white bg-black px-2 py-1 rounded-lg mt-2'>Continue</button>
      </DialogContent>
    </Dialog>
  );
}