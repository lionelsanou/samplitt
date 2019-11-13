import {IUser} from './iuser';
export class User implements IUser{
    constructor(public bio='',public id='',public firstname='',public lastname='',public email='',public profilepic=''){}
 
}