export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "bumbu dan rempah dapur",
    backgroundColor: "bg-[#FF5443]",
    textColor: "text-[#FF5443]",
    borderColor: "border-[#9d3930]",
    tiles: [
      {
        type: "star",
        description: "bumbu dan rempah dapur",
      },
      {
        type: "star",
        description: "bumbu dan rempah dapur",
      },
      {
        type: "star",
        description: "bumbu dan rempah dapur",
      },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "alat - alat masak",
    backgroundColor: "bg-[#FF5443]",
    textColor: "text-[#FF5443]",
    borderColor: "border-[#9d3930]",
    tiles: [
      { type: "fast-forward", description: "alat - alat masak" },
      {
        type: "star",
        description: "alat - alat masak",
      },{
        type: "star",
        description: "alat - alat masak",
      },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "teknik-teknik memasak",
    backgroundColor: "bg-[#FF5443]",
    textColor: "text-[#FF5443]",
    borderColor: "border-[#9d3930]",
    tiles: [
      { type: "fast-forward", description: "teknik-teknik memasak" },
      {
        type: "star",
        description: "teknik-teknik memasak",
      },{
        type: "star",
        description: "teknik-teknik memasak",
      },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
];
