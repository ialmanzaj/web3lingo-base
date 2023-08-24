export type Course = (typeof courses)[number];

const courses = [
  { name: "Intro a uniswap", description: "Español", viewBox: "0 66 82 66", code: "es" , href:"/uniswap"},
  { name: "Introduccion a Wallets", description: "English", viewBox: "0 0 82 66", code: "en", href:"/wallets"},
  
] as const;

export default courses;
