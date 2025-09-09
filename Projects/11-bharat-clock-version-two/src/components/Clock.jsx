import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => { 
            clearInterval(intervalId);
            console.log('Interval aborted.');
            
        }
    }, []);
    return (
        <p className="lead">This is the current time: {time.toLocaleDateString()}  {" - "} {time.toLocaleTimeString()}</p>
    );
}
export default Clock;