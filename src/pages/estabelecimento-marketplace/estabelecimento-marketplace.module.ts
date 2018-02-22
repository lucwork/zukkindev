import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoMarketplacePage } from './estabelecimento-marketplace';

@NgModule({
  declarations: [
    EstabelecimentoMarketplacePage,
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoMarketplacePage),
  ],
})
export class EstabelecimentoMarketplacePageModule {}
