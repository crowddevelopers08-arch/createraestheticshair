"use client";

import { useState, useRef, useEffect, HTMLAttributes, ButtonHTMLAttributes } from "react";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Pass open/setOpen to children via context substitute */}
      <DropdownMenuContext.Provider value={{ open, setOpen }}>
        {children}
      </DropdownMenuContext.Provider>
    </div>
  );
}

import { createContext, useContext } from "react";
const DropdownMenuContext = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({
  open: false,
  setOpen: () => {},
});

export function DropdownMenuTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const { setOpen, open } = useContext(DropdownMenuContext);
  return (
    <div onClick={(e) => { e.stopPropagation(); setOpen(!open); }} className="cursor-pointer">
      {children}
    </div>
  );
}

export function DropdownMenuContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { open } = useContext(DropdownMenuContext);
  if (!open) return null;
  return (
    <div className={`absolute z-50 mt-1 min-w-[8rem] rounded-md border border-gray-200 bg-white shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void }) {
  const { setOpen } = useContext(DropdownMenuContext);
  return (
    <div
      className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${className}`}
      onClick={(e) => { onClick?.(e); setOpen(false); }}
    >
      {children}
    </div>
  );
}
