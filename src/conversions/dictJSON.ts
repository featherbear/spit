import type { Conversion } from "../types/Conversion";
import JSON5 from 'json5'

const conversion: Conversion = {
  aName: "Dictionary Object",
  bName: "JSON",
  aToB: function (input) {
    return JSON.stringify(JSON5.parse(input), null, 4)
  },
  bToA: function (input) {
    return JSON5.stringify(JSON.parse(input), null, 4)
  },
};

export default conversion;
