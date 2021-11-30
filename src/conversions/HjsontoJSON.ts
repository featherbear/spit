import type { Conversion } from "../types/Conversion";
import JSON5 from 'json5'
import Hjson from 'hjson/bundle/hjson'

const conversion: Conversion = {
    aName: "JSON",
    bName: "Hjson",
    aToB: function (input) {
        return Hjson.stringify(JSON5.parse(input), {
            separator: false,
            bracesSameLine: true,
            quotes: "min",
            space: 2
        })
    },
    bToA: function (input) {
        return JSON5.stringify(Hjson.parse(input), null, 4)
    },
};

export default conversion;
