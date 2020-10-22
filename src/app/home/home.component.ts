import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../billboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  billboards$: Observable<any>;
  types = {
    digital: { value: false, label: 'digital' },
    traditional: { value: false, label: 'traditional' },
    threeXseven: { value: false, label: '3x7' },
    twoXfive: { value: false, label: '2x5' },
  };

  constructor(private billboardService: BillboardService) {}

  ngOnInit() {
    this.getBillboards();
  }

  getBillboards() {
    this.billboards$ = this.billboardService.getAllBillBoards();
  }

  addFilter(type: string) {
    this.types[type].value = !this.types[type].value;
  }

  clearFilter() {
    this.types.digital.value = false;
    this.types.traditional.value = false;
    this.types.threeXseven.value = false;
    this.types.twoXfive.value = false;
  }

  filterBillboards() {
    const filters = Object.values(this.types)
      .filter(i => i.value === true)
      .map(i => i.label);
    if(filters.length === 0) {
      this.getBillboards();
    } else {
      this.billboards$ = this.billboardService.filterBillboards(filters);
    }
  }
}
