"use client";

import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
}

// Wrapper to bridge shadcn-style API to native <select>
export function Select({ children, value, onValueChange, ...props }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:opacity-50"
      {...props}
    >
      {children}
    </select>
  );
}

// These are no-ops that just render their children so the existing JSX compiles
export function SelectTrigger({ children, className = "", ...props }: { children?: React.ReactNode; className?: string; [key: string]: unknown }) {
  return null; // rendered by Select directly
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return null;
}

export function SelectContent({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <>{children}</>;
}

export function SelectItem({ value, children, className = "" }: { value: string; children?: React.ReactNode; className?: string }) {
  return <option value={value}>{children}</option>;
}
