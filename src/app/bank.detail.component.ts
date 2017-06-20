import { BankDetail } from './models/bankDetails';
import { BankDetailService } from './services/bank.detail.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class BankDetailsComponent implements OnInit {
  bankDetail: BankDetail;
  code: string;
  error: string;
  constructor(private bankDetailService: BankDetailService, private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
  }

  getDetails() {
    this.bankDetailService.get(this.code).subscribe((res) => {
      if (res.responseType == 'ERROR') {
        this.error = res.responseObject;
        this.bankDetail = undefined;
      } else {
        if (res.responseObject != null) {
          this.bankDetail = res.responseObject;
          this.error = undefined;
        }
      }
      this.ref.markForCheck();
    });
  }

}
