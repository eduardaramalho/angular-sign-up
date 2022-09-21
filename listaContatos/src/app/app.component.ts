import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listaContatos';
  nome : string = '';
  contato : string = '';
  usuario : string = '';
  
  constructor (private httpClient: HttpClient){  }

  public cadastro(){
    this.httpClient.post('http://localhost:3003/cadastro', {nome : this.nome, telefone : this.contato}).toPromise().then((response : any)=> {
      console.log(response);
      console.log("Post foi")

      return this.httpClient.get('http://localhost:3003/Cadastro').toPromise().then(response => {
        console.log(response);
        console.log("Get foi")
       });
    })

  }  
}