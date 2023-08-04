export type Language = (typeof languages)[number];

const languages = [
  { name: "Intro a Uniswap", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
  { name: "Intro a wallet", nativeName: "Español", viewBox: "0 66 82 66", code: "es" },
  
] as const;

export default languages;
