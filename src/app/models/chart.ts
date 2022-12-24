export interface IChartData {
    name: string,
    series: Array<ISeries> 
}

export interface ISeries {
    id: number,
    title: string,
    volume: number, 
    name: number,
    value: number,
    mesurment_st: string,
    mesurment_v: string,
    mesurment_t: string, 
}