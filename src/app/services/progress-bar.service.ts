import { Injectable } from '@angular/core';

@Injectable()
export class ProgressBarService {

  status = false;

  constructor() { }


  hideProgressBar() {
    this.status = false;
  }

  showProgressBar() {
    this.status = true;
  }

}
