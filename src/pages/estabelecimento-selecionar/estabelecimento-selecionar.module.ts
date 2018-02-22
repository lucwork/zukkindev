import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoSelecionarPage } from './estabelecimento-selecionar';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    EstabelecimentoSelecionarPage,
    FilterPipe
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoSelecionarPage),
  ],
})
export class EstabelecimentoSelecionarPageModule {}
