import { type ClassValue, clsx } from "clsx";
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
