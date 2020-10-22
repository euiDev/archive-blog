import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillboardService } from '../billboard.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-billboard-profile',
  templateUrl: './billboard-profile.component.html',
  styleUrls: ['./billboard-profile.component.css']
})
export class BillboardProfileComponent implements OnInit, OnDestroy {
  billboardId$: Observable<any>;
  billboard$: Observable<any>;
  constructor(private billboardService: BillboardService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.billboardId$ = params.id;
    });
    if(this.billboardId$) {
      this.getBillboard();
    }
  }

  ngOnDestroy(): void {

  }

  getBillboard() {
    this.billboard$ = this.billboardService.findBillboard(this.billboardId$);
  }
}
