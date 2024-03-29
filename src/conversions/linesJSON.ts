import type { Conversion } from "../types/Conversion";

const conversion: Conversion = {
  aName: "Lines",
  bName: "JSON",
  aToB: function (input) {
    input = input.trim()
    return input ? JSON.stringify(input.split("\n").map(s => s.trim()), null, 4) : "[]"
  },
  bToA: function (input) {
    return JSON.parse(input).join("\n")
  },

  bFormat(input) {
    return JSON.stringify(JSON.parse(input), null, 4)
  },
};

export default conversion;
