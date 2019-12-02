import {IUser} from './iuser';
import { Restaurant } from './restaurant';
export class User implements IUser{
    constructor(public bio='',public id='',public firstname='',public lastname='',public email='',public profilepic='',public restaurant=null){}
 
}