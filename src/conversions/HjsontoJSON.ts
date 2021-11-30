import type { Conversion } from "../types/Conversion";

import JSON5 from 'json5'
import Hjson from 'hjson/bundle/hjson'

let hjson_options = {
    separator: false,
    bracesSameLine: true,
    quotes: "min",
    space: 2
}

const conversion: Conversion = {
    aName: "JSON",
    bName: "Hjson",
    aToB(input) {
        return Hjson.stringify(JSON5.parse(input), hjson_options)
    },
    bToA(input) {
        return JSON5.stringify(Hjson.parse(input), null, 4)
    },

    aFormat(input) {
        return JSON5.stringify(JSON5.parse(input), null, 4)
    },

    bFormat(input) {
        return Hjson.stringify(Hjson.parse(input), hjson_options)
    }

}

export default conversion;
