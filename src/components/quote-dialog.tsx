'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { RefreshCw } from 'lucide-react';

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
];

export function QuoteDialog({ trigger, onOpen }: { trigger: React.ReactNode; onOpen?: () => void }) {
  const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });
  const [isOpen, setIsOpen] = useState(false);

  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  // Select a quote when the component mounts and when the dialog opens
  useEffect(() => {
    if (isOpen) {
        selectRandomQuote();
        if (onOpen) {
            onOpen();
        }
    }
  }, [isOpen]);
  
  // Set initial quote
  useEffect(() => {
    selectRandomQuote();
  }, []);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>A Quote for You</DialogTitle>
        </DialogHeader>
        <div className="py-4 text-center">
            <blockquote className="text-lg italic">
              &ldquo;{currentQuote.quote}&rdquo;
            </blockquote>
            <cite className="block text-right mt-2 not-italic text-muted-foreground">&mdash; {currentQuote.author}</cite>
        </div>
        <DialogFooter>
            <Button variant="outline" onClick={selectRandomQuote}>
                <RefreshCw className="mr-2 h-4 w-4" /> Another One
            </Button>
            <DialogClose asChild>
                <Button>Close</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
