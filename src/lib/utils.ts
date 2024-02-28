import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * converting angles to radians
 * to work with rotation in the 3d models
 * @param angle
 * @returns number randian
 */
export const angleToRadians = (angle: number): number =>
  (Math.PI / 180) * angle;

// currency formatter converting any currency or value to MAD
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "MAD",
});
