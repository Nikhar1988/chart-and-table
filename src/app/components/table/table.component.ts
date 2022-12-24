import { Component, Input } from "@angular/core";
import { chartData } from "src/app/data/chartData";
import { IChartData, ISeries } from "src/app/models/chart";
 

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    title = 'Таблица передачи данных'
    tableData: ISeries[] = chartData[0].series
}