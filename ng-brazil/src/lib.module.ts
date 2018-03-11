import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

import { cpf } from './cpf/validator';
import { CPFValidator } from './cpf/directive';
import { CPFPipe } from './cpf/pipe';

import { cnpj } from './cnpj/validator';
import { CNPJValidator } from './cnpj/directive';
import { CNPJPipe } from './cnpj/pipe';

import { telefone } from './telefone/validator';
import { TelefoneValidator } from './telefone/directive';
import { TelefonePipe } from './telefone/pipe';

import { inscricaoestadual } from './inscricaoestadual/validator';
import { InscricaoEstadualValidator } from './inscricaoestadual/directive';
import { InscricaoEstadualPipe } from './inscricaoestadual/pipe';
import { CEPValidator } from './cep/directive';
import { CEPPipe } from './cep/pipe';
import { cep } from './cep/validator';
import { rg } from './rg/validator';
import { RGValidator } from './rg/directive';
import { RGPipe } from './rg/pipe';


export const NgBrazilValidators: any = {
  cpf,
  cnpj,
  rg,
  telefone,
  inscricaoestadual,
  cep
}

const CustomDirectives = [
  CPFValidator,
  CPFPipe,
  CNPJValidator,
  CNPJPipe,
  RGValidator,
  RGPipe,
  InscricaoEstadualValidator,
  InscricaoEstadualPipe,
  TelefoneValidator,
  TelefonePipe,
  CEPValidator,
  CEPPipe
];

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule
  ],
  declarations: [
    CustomDirectives
  ],
  exports: [
    CustomDirectives
  ]
})
export class NgBrasil {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgBrasil
    };
  }
}
