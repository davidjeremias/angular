import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatosService } from './contatos-listagem/contatos.service';
import { ContatosInsercaoComponent } from './contatos-insercao/contatos-insercao.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent,
    ContatosInsercaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule
    
  ],
  providers: [ContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
