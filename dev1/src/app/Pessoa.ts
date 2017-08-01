export class Pessoa{
   Nome:string;
   idade : number;
   telefone : string;

   constructor(N: string,id : number,f : string)
   {
       this.idade = id;
       this.Nome = N;
       this.telefone = f;
   }
     public valida(f : string): boolean{
        if(f == ""){
            return false;
        }else{
            return true;
        }

     }

}