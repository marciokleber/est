import {Component} from '@angular/core';
import {LocalsService} from "../service/locals.service";
import {HttpParams} from "@angular/common/http";
import {Local} from "./local";
import {take} from "rxjs/operators";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

// interface Locals {
//   id: number;
//   idLocal: string;
//   nome: string;
// }

@Component({
  selector: 'app-local',
  templateUrl: 'local.page.html',
  styleUrls: ['local.page.scss']
})
export class LocalPage {
  rsqlParam = '';
  page = 0;
  size = 10;
  summaryOptions = '';

  locals: Local[] = [];

  constructor(private localsService: LocalsService) {
    this.localsService.findAll().pipe(
      take(1)
    ).subscribe(page => this.locals = page.content)
  }

  // async ngOnInit(): Promise<void> {
  //   const request = await this.localsService.findAll(this.rsqlParam, this.page, this.size, this.summaryOptions)
  //   request.subscribe((response) => {
  //     this.locals = response.content
  //     console.log(response)
  //   }, error => {
  //   })
  // }


  onIonInfinite(e: InfiniteScrollCustomEvent) {
    const httpParams = new HttpParams()
      .set('page', ++this.page);
    this.localsService.findAll(httpParams).pipe(
      take(1)
    ).subscribe(page => {
      this.locals = page.content;
    })
    // setTimeout(() => {
    //   e.target.complete();
    // }, 500);
  }


}
