import { Component, OnInit } from '@angular/core';
import { chartData } from './data';
@Component({
  selector: 'capgemini-digital-advisor-glide-path',
  templateUrl: './glide-path.component.html',
  styleUrls: ['./glide-path.component.css'],
})
export class GlidePathComponent{
  //
  chartData = [ 
  ]
  view:any[]=[700,700];
  colorScheme: any = {
    domain: ['orange', 'blue','black'],
  };
  xAxisTicks: any[] = ['2023','2025','2027','2029','2031','2033','2035','2037','2039','2041','2043','2045','2047'];
  schemeType='ordinal';
  gradient= false;
  xAxisLabel = "Years";
    yAxisLabel = "Dollars";
    legend = true;
    showLegendTitle=false;
    XAxis=true;
    YAxis=true;
    legendTitle="Scenarios";
    legendPosition='right';
    showXAxisLabel= false;
    showYAxisLabel= false;
    XAxisLabel="year";
    YAxisLabel="Dollars";
    barPaddingNumber=5;
    Animations=true;
 
    constructor() {
      Object.assign(this, { chartData });
    }
   
 
}