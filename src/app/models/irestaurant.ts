import {TestingEvent} from './TestingEvent';
export interface IRestaurant{
    addressLine:string;
    addressLine2:string;
    city:string;
    state:string;
    zipCode:string;
    country:string;
    testingEvent?:TestingEvent;
}