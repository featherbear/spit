import type { Conversion } from "../types/Conversion";

const conversion: Conversion = {
  name: "Lines to JSON",
  aToB: function (input) {
    return JSON.stringify(input.split("\n"), null, 4)
  },
  bToA: function (input) {
    return JSON.parse(input).join("\n")
  },
};

export default conversion;
