import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComparacaoPage } from './comparacao';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ComparacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComparacaoPage),
    ComponentsModule
  ],
})
export class ComparacaoPageModule {}
