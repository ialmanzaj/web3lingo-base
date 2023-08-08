export type Course = (typeof courses)[number];

const courses = [
  { name: "Intro a wallets", description: "Español", viewBox: "0 66 82 66", code: "es" , href:"/wallets"},
  { name: "Intro a Uniswap", description: "English", viewBox: "0 0 82 66", code: "en", href:"/uniswap"},
  
] as const;

export default courses;
