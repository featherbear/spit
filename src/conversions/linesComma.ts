import { element } from "svelte/internal";
import type { Conversion } from "../types/Conversion";

const conversion: Conversion = {
  name: "Lines to comma separated",
  aToB: function (input) {
    return input.replace(/,/g, '\\,').split("\n").map(s => s.trim()).join(",")
  },
  bToA: function (input) {
    let elements = []
    let partial = input.replace(/^,*/g, '').replace(/([^\\]),*$/g, '$1')
    while (true) {
      // Find the position of the comma, add one to account for the regex usage
      let idx = 0

      // Handle double comma A,,B -> ["A", "", "B"]
      if (partial[0] !== ',') {
        idx = partial.search(/[^\\],/g) + 1
        
        // No commas found, add the rest of the string
        if (idx === 0) {
          elements.push(partial)
          break
        }
      }

      elements.push(partial.substr(0, idx))
      partial = partial.substr(idx + 1)
    }

    // Now replace \, -> ,
    return elements.map(v => v.replace(/\\,/g, ',')).map(s => s.trim()).join("\n")
  }
};

export default conversion;
