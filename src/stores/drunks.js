import { defineStore } from "pinia";

export const useDrunkStore = defineStore("drunks", {
  state: () => {
    return {
      drunks: [
        {
          name: "Travis",
          favorite: "A",
          cheapest: "D",
          expensive: "C",
          score: 0,
          variety_one: "Sauvignon Blanc",
          exp_one: "A",
          cheap_one: "B",
          variety_three: "Malbec",
          variety_two: "Merlot",
          exp_two: "C",
          cheap_two: "D",
          exp_three: "F",
          cheap_three: "E",
        },
        {
          name: "Cynthia",
          favorite: "F",
          cheapest: "C",
          expensive: "A",
          score: 0,
          variety_one: "Sauvignon Noir",
          exp_one: "A",
          cheap_one: "B",
          variety_three: "Malbec",
          variety_two: "Merlin",
          exp_two: "C",
          cheap_two: "D",
          exp_three: "F",
          cheap_three: "E",
        },
        {
          name: "Erik",
          favorite: "E",
          cheapest: "D",
          expensive: "B",
          score: 0,
          variety_one: "Sauvignon Blanc",
          exp_one: "A",
          cheap_one: "B",
          variety_three: "Cabernet Sauvignon",
          variety_two: "Merlot",
          exp_two: "C",
          cheap_two: "D",
          exp_three: "F",
          cheap_three: "E",
        },
      ],
    };
  },
});
