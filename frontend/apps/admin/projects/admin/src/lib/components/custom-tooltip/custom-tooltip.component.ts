import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit {

  @Input() characterSizeOnTableTd: number = 28;
  @Input() data: any[];
  @Input() headerElement: string;
  @Input() multiLineFieldName: string;

  constructor() { }

  ngOnInit() {
  }

  checkObject(data: any): boolean {
    if (typeof data === 'object') return true;
    return false;
  }

}
