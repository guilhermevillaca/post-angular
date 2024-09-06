import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }


   //gerador de json aleatorio
   //https://json-generator.com/

   //site que pega o json e cria api com o json
   //https://dummyjson.com/c/0071-2f31-4533-b30e
  public buscaPosts(){
    return this.http.get("https://dummyjson.com/c/0071-2f31-4533-b30e").toPromise();
  }
}
