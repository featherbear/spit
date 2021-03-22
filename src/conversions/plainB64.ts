import type { Conversion } from "../types/Conversion";

const conversion: Conversion = {
  aName: "Plain text",
  bName: "Base-64",
  aToB: function (input) {
    return btoa(input)
  },
  bToA: function (input) {
    return atob(input)
  },
};

export default conversion;
