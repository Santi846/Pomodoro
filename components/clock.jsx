import React from "react";
import { useState, useEffect } from "react";

export function Clock () {

const [date, setDate] = useState(new Date());
// const [clock, resetClock] = useState();

 
const refreshDate = () => {
    setDate(new Date());
}

// const restartClock = () => {
//     resetClock();
// }

useEffect ( () => {
    const timerId = setInterval (refreshDate, 1000);
    return function cleanUP () {
        clearInterval(timerId);
    }
}, []);


    return (
        <span>{date.toLocaleDateString()}</span>
    );

};