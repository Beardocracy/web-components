import { defineStore } from "pinia";

export const useWineStore = defineStore("wines", {
  state: () => {
    return {
      one: {
        variety: {
          type: "Sauvignon Blanc",
          isRevealed: false,
        },
        expensive: {
          letter: "a",
          wine: "Name of wine A",
          price: 18,
          isRevealed: false,
        },
        cheap: {
          letter: "b",
          type: "Name of wine B",
          price: 18,
          isRevealed: false,
        },
      },
      two: {
        variety: {
          type: "Cabernet Sauvignon",
          isRevealed: false,
        },
        expensive: {
          letter: "c",
          wine: "Name of wine C",
          price: 18,
          isRevealed: false,
        },
        cheap: {
          letter: "d",
          wine: "Name of wine D",
          price: 18,
          isRevealed: false,
        },
      },
      three: {
        variety: {
          type: "Pinot Noir",
          isRevealed: false,
        },
        expensive: {
          letter: "e",
          wine: "Name of wine E",
          price: 18,
          isRevealed: false,
        },
        cheap: {
          letter: "f",
          wine: "Name of wine F",
          price: 18,
          isRevealed: false,
        },
      },
    };
  },
});
