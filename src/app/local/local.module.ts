import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LocalPage} from './local.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {LocalPageRoutingModule} from './local-routing.module';
import {StandardListComponent} from "../@core/components/standard-list/standard-list.component";
import {StandardSearchbarComponent} from "../@core/components/standard-searchbar/standard-searchbar.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LocalPageRoutingModule,
    StandardListComponent,
    StandardSearchbarComponent
  ],
  declarations: [LocalPage]
})
export class LocalPageModule {
}
