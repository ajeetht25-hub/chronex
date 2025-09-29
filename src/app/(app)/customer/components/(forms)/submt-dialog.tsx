import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface SubmitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function SubmitDialog({ open, onOpenChange }: SubmitDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submission</DialogTitle>
        </DialogHeader>
        <p>
          Your details have been submitted and our sales person will contact you
          soon.
        </p>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button asChild type="button">
              <Link href="/">Continue</Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
