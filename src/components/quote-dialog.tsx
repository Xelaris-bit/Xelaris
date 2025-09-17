'use client';

import { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "Your limitation—it's only your imagination.", author: "Xelaris" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Xelaris" },
  { quote: "Great things never come from comfort zones.", author: "Xelaris" },
  { quote: "Dream it. Wish it. Do it.", author: "Xelaris" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Xelaris" },
];

export function QuoteDialog({ trigger, onOpen }: { trigger: React.ReactNode; onOpen?: () => void }) {
  const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });
  const [isOpen, setIsOpen] = useState(false);

  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };
  
  // Set initial quote
  useEffect(() => {
    selectRandomQuote();
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
        if (onOpen) {
            onOpen();
        }
    }
  };


  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent side="left" className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">A Quote for You</h4>
             <blockquote className="text-sm italic text-muted-foreground">
              &ldquo;{currentQuote.quote}&rdquo;
            </blockquote>
            <cite className="block text-right text-xs not-italic text-muted-foreground">&mdash; {currentQuote.author}</cite>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
