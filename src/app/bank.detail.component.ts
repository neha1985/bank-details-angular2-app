import { BankDetail } from './models/bankDetails';
import { BankDetailService } from './services/bank.detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class BankDetailsComponent implements OnInit {
  bankDetail: BankDetail;
  code: string;
  constructor(private bankDetailService: BankDetailService) {

  }

  ngOnInit() {    
  }

  getDetails(){
      this.bankDetailService.get(this.code).subscribe((res) => {
      this.bankDetail = res.responseObject;  
      console.log(this.bankDetail)     ;
    });
  }  

}
