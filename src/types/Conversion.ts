type ConversionFunction = (arg: string) => string

export type Conversion = {
    name: string
    aToB: ConversionFunction
    bToA: ConversionFunction
}