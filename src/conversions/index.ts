import linesJSON from "./linesJSON"
import linesComma from "./linesComma"
import dictJSON from './dictJSON'

import type { Conversion } from "../types/Conversion"

const data: { [id: string]: Conversion } = {
    linesJSON,
    linesComma,
    dictJSON
}

export default data