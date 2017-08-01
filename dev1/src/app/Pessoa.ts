export class Pessoa{
   Nome:string;
   Idade : number;
   Telefone : string;

   constructor(N: string,id : number,f : string)
   {
       this.Idade = id;
       this.Nome = N;
       this.Telefone = f;
   }
     public valida(f : string): boolean{
        if(f == ""){
            return false;
        }else{
            return true;
        }

     }

}