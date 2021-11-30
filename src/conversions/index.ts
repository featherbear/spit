import linesJSON from './linesJSON'
import linesComma from './linesComma'
import dictJSON from './dictJSON'
import plainB64 from './plainB64'
import plainB58 from './plainB58'
import HjsontoJSON from './HjsontoJSON'

import type { Conversion } from '../types/Conversion'

const data: { [id: string]: Conversion } = {
  linesJSON,
  linesComma,
  dictJSON,
  plainB64,
  plainB58,
  HjsontoJSON
}

export default data
