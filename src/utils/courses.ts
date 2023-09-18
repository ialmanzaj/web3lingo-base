export type Course = (typeof courses)[number];

export type Unit = {
  title: string;
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  subtiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];


const courses = [
  {
    name: "Intro a uniswap",
    description: "uniswap 101",
    viewBox: "0 66 82 66",
    code: "es",
    href: "/uniswap",
  },
  {
    name: "Blockchain 101",
    description:
      "Explora los fundamentos de la tecnología blockchain, criptomonedas, contratos inteligentes y aplicaciones del mundo real en este curso introductorio de 10 semanas de duración.",
    viewBox: "0 0 82 66",
    code: "en",
    href: "/wallets",
  },
] as const;


export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    title: "Blockchain 101",
    description: "",
    backgroundColor: "bg-[#3B0764]",
    textColor: "text-[#3B0764]",
    borderColor: "border-[#6B21A8]",
    subtiles: [
      {
        type: "star",
        description: "Qué es Blockchain?",
      },
      {
        type: "book",
        description: "Historia y evolución de Blockchain",
      },
      {
        type: "star",
        description: "Tipos de Blockchains (Pública, Privada)",
      },
      {
        type: "book",
        description: "Componentes del blockchain (nodos, carteras, contratos inteligentes)",
      },
      { type: "book", description: "How Blocks and Transactions Work" },
      { type: "trophy", description: "Cryptography in Blockchain" },
    ],
  },
  /* {
    unitNumber: 2,
    description: "Get around in a city",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Get around in a city" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "One thing" },
      { type: "treasure" },
      { type: "star", description: "Get around in a city" },
      { type: "book", description: "A very big family" },
      { type: "star", description: "Greet people" },
      { type: "book", description: "The red jacket" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  }, */
  /* {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Order food and drink" },
      { type: "book", description: "The passport" },
      { type: "star", description: "Order food and drinks" },
      { type: "treasure" },
      { type: "book", description: "The honeymoon" },
      { type: "star", description: "Get around in a city" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Doctor Eddy" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  }, */
];

export default courses;
