export class Etudiant {
    public id:number ;
    public name:string;
    public prenom:string;
    public cne:string;
    public cin:string;
    public classe :string;
constructor(id : number ,name : string,prenom :string ,cne:string,cin:string, classe :string){
    this.id= id ;
    this.name=name;
    this.prenom= prenom;
    this.cne=cne;
    this.cin=cin;
    this.classe=classe;
}
}