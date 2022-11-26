export class Ingredient{
    name: string;
    price: number;
    description: string;
    photo?: string;
    constructor (name: string, price: number, description: string, photo?: string)
    { 
        this.name  = name; 
        this.price = price; 
        this.description = description;
        this.photo = photo;
    }
}