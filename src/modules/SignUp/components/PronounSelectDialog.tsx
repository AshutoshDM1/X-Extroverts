'use client';

import React from 'react';
import { X, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ALL_PRONOUNS } from '../types';

interface PronounSelectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPronouns: string[];
  onTogglePronoun: (pronoun: string) => void;
}

export function PronounSelectDialog({
  open,
  onOpenChange,
  selectedPronouns,
  onTogglePronoun,
}: PronounSelectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-95 w-[92vw] p-0 bg-zinc-950/95 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden lg:left-[75%] lg:-translate-x-1/2 select-none"
      >
        <div className="flex flex-col p-5 sm:p-6">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm sm:text-base font-semibold text-white">Select Pronoun</h3>
            <DialogClose className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
              <X className="size-5" />
            </DialogClose>
          </div>

          <p className="text-xs text-zinc-400 mb-3">
            Select upto 3 ({selectedPronouns.length}/3 selected)
          </p>

          {/* Pronouns List with ScrollArea */}
          <ScrollArea className="h-72 w-full pr-2 my-1">
            <div className="space-y-1">
              {ALL_PRONOUNS.map((pronoun) => {
                const isSelected = selectedPronouns.includes(pronoun);
                const isDisabled = !isSelected && selectedPronouns.length >= 3;

                return (
                  <div
                    key={pronoun}
                    onClick={() => !isDisabled && onTogglePronoun(pronoun)}
                    className={cn(
                      'flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all select-none',
                      isDisabled
                        ? 'opacity-40 cursor-not-allowed'
                        : 'cursor-pointer hover:bg-white/5 active:scale-[0.99]',
                    )}
                  >
                    {/* Circular Checkbox */}
                    <div
                      className={cn(
                        'size-5 rounded-full border flex items-center justify-center transition-all',
                        isSelected
                          ? 'border-white bg-white text-black shadow-sm'
                          : 'border-zinc-700 bg-zinc-900/80',
                      )}
                    >
                      {isSelected && <Check className="size-3 stroke-3" />}
                    </div>

                    {/* Pronoun Text */}
                    <span
                      className={cn(
                        'text-sm font-normal transition-colors',
                        isSelected ? 'text-white font-medium' : 'text-zinc-300',
                      )}
                    >
                      {pronoun}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollArea>

          {/* Dialog Bottom Action */}
          <div className="pt-4 mt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="w-full h-11 rounded-2xl bg-white text-black font-medium text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer "
            >
              Proceed
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PronounSelectDialog;
