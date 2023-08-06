export type Language = (typeof chapters)[number];

const chapters = [
  { name: "Intro a wallets", nativeName: "Español", viewBox: "0 66 82 66", code: "es" , href:"/wallets"},
  { name: "Intro a Uniswap", nativeName: "English", viewBox: "0 0 82 66", code: "en", href:"/uniswap"},
  
] as const;

export default chapters;
