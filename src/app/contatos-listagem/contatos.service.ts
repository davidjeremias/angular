import { ContatoEntity } from './../entity/contato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  contatosURL = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<ContatoEntity[]>(this.contatosURL);
  }

  salvar(pessoa: ContatoEntity){
    console.log(pessoa);
    return this.http.post(this.contatosURL, pessoa);
  }

 
}
