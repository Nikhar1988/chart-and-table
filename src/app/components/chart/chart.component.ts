import { chartData } from '../../data/chartData';
import { Component } from "@angular/core";
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { IChartData } from 'src/app/models/chart';
 

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})

export class ChartComponent  {
  title ='Диаграмма передачи данных'
  chartData!: IChartData[];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Время, сек';
  yAxisLabel: string = 'Скорость, Мбит/с';
  timeline: boolean = false;

  colorScheme: Color = { 
    domain: ['#99CCE5', '#FF7F7F'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage',
 };

  constructor() {
    Object.assign(this, { chartData });
  }
}