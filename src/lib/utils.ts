import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { //cn() is a helper function to combine Tailwind class names safely and conditionally.
  return twMerge(clsx(inputs));
}
