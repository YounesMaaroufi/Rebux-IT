/**
 * this is a global state
 */

import { proxy } from "valtio";

const state = proxy({
  logo: "/logo.png",
  qrCode: "/default-qrCode.png",
  texture: "/default-texture.jpg",
});

export { state };
