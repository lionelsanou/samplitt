import {IRestaurant} from './irestaurant';
export class Restaurant implements IRestaurant{
    constructor(public addressLine='',public addressLine2='',public state='',public city='',public zipCode='',public country='',public testingEvent=null){}
}