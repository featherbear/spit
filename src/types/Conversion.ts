type ConversionFunction = (arg: string) => string

export type Conversion = {
    aName: string
    bName: string
    
    aToB: ConversionFunction
    bToA: ConversionFunction

    aFormat?: ConversionFunction
    bFormat?: ConversionFunction

}