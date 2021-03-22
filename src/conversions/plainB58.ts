import type { Conversion } from "../types/Conversion";
import b58 from 'base-58'
import { Buffer } from 'buffer/'

const conversion: Conversion = {
  aName: "Plain text",
  bName: "Base-58",
  aToB: function (input) {
    return b58.encode(Buffer.from(input))
  },
  bToA: function (input) {
    return Buffer.from(b58.decode(input)).toString()
  },
};

export default conversion;
