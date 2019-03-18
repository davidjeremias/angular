import { ContatosService } from './../contatos-listagem/contatos.service';
import { Component, OnInit } from '@angular/core';
import { ContatoEntity } from '../entity/contato';

@Component({
  selector: 'app-contatos-insercao',
  templateUrl: './contatos-insercao.component.html',
  styleUrls: ['./contatos-insercao.component.css']
})
export class ContatosInsercaoComponent implements OnInit {

  pessoa = new ContatoEntity();
  p: ContatoEntity;
  
  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
  }

  salvar(){
    this.contatosService.salvar(this.pessoa).subscribe(dados => this.p = dados);
  }

}
