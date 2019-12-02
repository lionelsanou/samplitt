import {ITestingEvent} from './iTestingEvent';
export class TestingEvent implements ITestingEvent{
    constructor(public startTime='',public endTime='',public eventPicture=''){}
}