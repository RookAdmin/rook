import React, { useState, useEffect } from "react";
import { ExternalLinkIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const AnnouncementDialog = () => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;
      // Get the viewport height
      const viewportHeight = window.innerHeight;

      // Show dialog when user has scrolled past 50% of the viewport height
      if (scrollPosition > viewportHeight * 0.5 && !hasShown) {
        console.log("Scrolled past threshold, showing dialog");
        setOpen(true);
        setHasShown(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    console.log("Dialog closed");
    setOpen(false);
    // Set flag in localStorage so it doesn't show again in this session
    localStorage.setItem("hasSeenRookAnnouncement", "true");
  };

  const handleVisitSite = () => {
    // Open the realm website in a new tab
    window.open("https://realmrook.com", "_blank");
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white border-none shadow-premium p-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold text-[#dc2e3e]">
            Rook Services Have Moved
          </DialogTitle>
          <DialogDescription className="text-gray-700 mt-2 leading-relaxed">
            Rook's Core Offerings Including Digital Marketing, Tech Solutions,
            And Strategic Consulting Are Now Delivered Through Realm By Rook.
            <p className="mt-3 font-medium text-gray-900">
              Same team. New platform. Expanded capabilities.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="py-5">
          <p className="text-gray-700 mb-3">
            To explore services or get started, visit:
          </p>
          <Button
            onClick={handleVisitSite}
            className="mt-1 bg-[#0096d4] hover:bg-[#0078a8] text-white w-full flex items-center justify-center gap-2 py-6 rounded-md"
          >
            <span className="text-lg font-medium">realmrook.com</span>
            <ExternalLinkIcon className="h-5 w-5" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start pt-2 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={handleClose}
            className="text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
          >
            Continue to Rook
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
