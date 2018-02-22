import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
      ComponentsModule
  ],
    exports: [
        ProdutosPage
    ]
})
export class ProdutosPageModule {}
