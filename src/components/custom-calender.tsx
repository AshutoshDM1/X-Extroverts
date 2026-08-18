'use client';

import React, { useState, useEffect } from 'react';
import { format, eachYearOfInterval, startOfYear, endOfYear, eachMonthOfInterval } from 'date-fns';
import { Calendar as BaseCalendar } from '@/components/ui/calendar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CalendarLumeProps {
  value?: Date;
  onSelectDate?: (date: Date) => void;
  onClose?: () => void;
  className?: string;
  minYear?: number;
  maxYear?: number;
}

export function CalendarLume({
  value,
  onSelectDate,
  onClose,
  className,
  minYear = 1940,
  maxYear = new Date().getFullYear(),
}: CalendarLumeProps) {
  const today = new Date();
  const initialDate = value || new Date(2002, 0, 1);

  const [step, setStep] = useState<'year' | 'month' | 'day'>(value ? 'day' : 'year');
  const [selectedYear, setSelectedYear] = useState<number>(initialDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(initialDate.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

  useEffect(() => {
    if (value) {
      setSelectedYear(value.getFullYear());
      setSelectedMonth(value.getMonth());
      setSelectedDate(value);
    }
  }, [value]);

  const yearInterval = eachYearOfInterval({
    start: startOfYear(new Date(minYear, 0, 1)),
    end: endOfYear(new Date(maxYear, 11, 31)),
  });
  const yearRange = [...yearInterval].reverse();

  const handleDaySelect = (day: Date | undefined) => {
    if (!day) return;
    setSelectedDate(day);
    if (onSelectDate) {
      onSelectDate(day);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        'relative w-full max-w-[420px] sm:max-w-[440px] rounded-3xl bg-zinc-950 p-6 text-white shadow-2xl border border-white/15 select-none overflow-hidden',
        className,
      )}
    >
      {/* Header with Step Breadcrumbs */}
      <div className="relative z-10 mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <CalendarIcon className="size-3.5 text-zinc-300" />
            {step === 'year' && 'Step 1: Select Year'}
            {step === 'month' && 'Step 2: Select Month'}
            {step === 'day' && 'Step 3: Select Day'}
          </span>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
            {step === 'year' && `${selectedYear || 'Choose Year'}`}
            {step === 'month' && `${selectedYear} • Choose Month`}
            {step === 'day' && format(new Date(selectedYear, selectedMonth, 1), 'MMMM yyyy')}
          </h3>
        </div>

        {/* Step Navigation Breadcrumb Buttons */}
        <div className="flex items-center gap-1.5 rounded-full bg-zinc-900 p-1 border border-white/10">
          <button
            type="button"
            onClick={() => setStep('year')}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-medium transition-all duration-150 cursor-pointer',
              step === 'year'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white',
            )}
          >
            {selectedYear}
          </button>
          <button
            type="button"
            onClick={() => setStep('month')}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-medium transition-all duration-150 cursor-pointer',
              step === 'month'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white',
            )}
          >
            {format(new Date(selectedYear, selectedMonth, 1), 'MMM')}
          </button>
        </div>
      </div>

      {/* Animated Steps View */}
      <div className="relative z-10 min-h-[330px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 1: YEAR SELECTION */}
          {step === 'year' && (
            <motion.div
              key="year"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="h-[330px]"
            >
              <ScrollArea className="h-full pr-2">
                <div className="grid grid-cols-3 gap-2.5 py-1">
                  {yearRange.map((year) => {
                    const y = year.getFullYear();
                    const isSelected = y === selectedYear;
                    return (
                      <button
                        key={y}
                        type="button"
                        onClick={() => {
                          setSelectedYear(y);
                          setStep('month');
                        }}
                        className={cn(
                          'h-12 rounded-2xl text-sm font-medium transition-all duration-150 border cursor-pointer flex items-center justify-center',
                          isSelected
                            ? 'bg-white text-black border-white font-semibold shadow-lg'
                            : 'border-white/10 bg-zinc-900/90 text-zinc-300 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95',
                        )}
                      >
                        {y}
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </motion.div>
          )}

          {/* STEP 2: MONTH SELECTION */}
          {step === 'month' && (
            <motion.div
              key="month"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-3 gap-3 py-2 h-[330px] content-center"
            >
              {eachMonthOfInterval({
                start: startOfYear(new Date(selectedYear, 0, 1)),
                end: endOfYear(new Date(selectedYear, 11, 31)),
              }).map((month) => {
                const mIndex = month.getMonth();
                const isSelected = mIndex === selectedMonth;
                return (
                  <button
                    key={month.toISOString()}
                    type="button"
                    onClick={() => {
                      setSelectedMonth(mIndex);
                      setStep('day');
                    }}
                    className={cn(
                      'h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-150 border cursor-pointer',
                      isSelected
                        ? 'bg-white text-black border-white font-semibold shadow-lg'
                        : 'border-white/10 bg-zinc-900/90 text-zinc-300 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95',
                    )}
                  >
                    <span className="text-sm font-medium">{format(month, 'MMMM')}</span>
                    <span
                      className={cn(
                        'text-xs mt-0.5',
                        isSelected ? 'text-zinc-700' : 'text-zinc-500',
                      )}
                    >
                      {selectedYear}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}

          {/* STEP 3: DAY SELECTION (BIG & SPACIOUS) */}
          {step === 'day' && (
            <motion.div
              key="day"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="w-full flex justify-center py-1"
            >
              <BaseCalendar
                mode="single"
                month={new Date(selectedYear, selectedMonth, 1)}
                selected={selectedDate}
                onSelect={handleDaySelect}
                onMonthChange={(date) => {
                  setSelectedYear(date.getFullYear());
                  setSelectedMonth(date.getMonth());
                }}
                disabled={(date) => date > today || date < new Date(minYear, 0, 1)}
                className="w-full bg-transparent p-0 text-white"
                classNames={{
                  root: 'w-full flex justify-center',
                  months: 'w-full flex justify-center',
                  month: 'w-full flex flex-col items-center gap-3',
                  month_caption: 'hidden', // Clean single header from our top bar
                  nav: 'hidden', // Navigation done via top breadcrumbs
                  month_grid: 'w-full border-collapse',
                  weekdays: 'flex justify-between w-full mb-2',
                  weekday:
                    'size-10 sm:size-11 flex items-center justify-center text-xs font-medium text-zinc-400',
                  week: 'flex justify-between w-full mt-1.5',
                  day: 'size-10 sm:size-11 p-0 flex items-center justify-center',
                  day_button: cn(
                    'size-10 sm:size-11 rounded-2xl text-sm font-normal transition-all duration-150 flex items-center justify-center cursor-pointer',
                    'hover:bg-white/15 hover:text-white active:scale-95',
                  ),
                  selected:
                    'bg-white text-black font-bold rounded-2xl hover:bg-white hover:text-black shadow-lg',
                  today: 'border border-white/40 font-semibold',
                  outside: 'text-zinc-600 opacity-40 hover:opacity-80',
                  disabled: 'text-zinc-700 opacity-30 cursor-not-allowed hover:bg-transparent',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected Preview Footer */}
      {selectedDate && (
        <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <span>Selected Birth Date:</span>
          <span className="text-white font-medium">{format(selectedDate, 'PPP')}</span>
        </div>
      )}
    </div>
  );
}

export default CalendarLume;
