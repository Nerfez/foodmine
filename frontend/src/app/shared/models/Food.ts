export class Food{
  id!:string; //! veut dire obligatoire
  name!:string;
  price!:number;
  tags?: string[]; //? veut dire optionnel
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
