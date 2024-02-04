/**
 * this is a global state
 */

import { proxy } from "valtio";

const state = proxy({
  colors: ["white", "black", "pink", "purple", "yellow", "red", "green"],
  color: "#000",
  logo: "/logo.svg",
  qrCode: "",
  texture: "",
});

export { state };
