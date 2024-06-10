import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { createTwc } from "react-twc";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });