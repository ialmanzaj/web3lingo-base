export type Course = (typeof courses)[number];

const courses = [
  { name: "Intro a wallets", nativeName: "Español", viewBox: "0 66 82 66", code: "es" , href:"/wallets"},
  { name: "Intro a Uniswap", nativeName: "English", viewBox: "0 0 82 66", code: "en", href:"/uniswap"},
  
] as const;

export default courses;
