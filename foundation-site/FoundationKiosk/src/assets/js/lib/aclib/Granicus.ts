export interface Granicus {
    [events: number]: string;   
}

let eventArray: Granicus;
eventArray = ["event1", "event2", "event3", "event4"];

let eventStr: string = eventArray[0];
console.log(eventStr);
