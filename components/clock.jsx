import React from "react";
import { useState, useEffect } from "react";

export function Clock () {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect( () => {
        let interval;
        let previousTime;
        if (running) {
            interval = setInterval (() => {
                setTime((previousTime) => previousTime + 10)
            }, 10)
            
        } 
        else if (!running) {
            clearInterval(interval);
            // alert("Stop");
          }
          return () => clearInterval(interval);
          
    }, [running]);

    return (
        <>
        <div className="StopWatch">
        {/* Minutes */}
        <span>{("0" + Math.floor((time / 60000) % 25)).slice(-2)}:</span>
        {/* Seconds */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        {/* Milliseconds */}
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="Actions">
            <button onClick={() => {setRunning(true)}}>Start</button>
            <button onClick={() => {setRunning(false)}}>Stop</button>
            <button onClick={() => {setTime(0)}}>Reset</button>
        </div>
        </>
    );
};