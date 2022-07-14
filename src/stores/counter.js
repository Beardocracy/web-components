import { defineStore } from "pinia";

export const useBangStore = defineStore("explode", {
  state: () => {
    return { visible: false };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    bang() {
      this.visible++;
    },
  },
});
