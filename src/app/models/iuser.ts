import { Restaurant } from './restaurant';

export class IUser{
    id:string;
    firstname:string;
    lastname:string;
    email:string;
    profilepic:string;
    bio:string;
    restaurant:Restaurant;
}