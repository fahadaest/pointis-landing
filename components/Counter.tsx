import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    running?: boolean;
}

export const Counter: React.FC<CounterProps> = ({ running = false }) => {
    const [time, setTime] = useState(0);
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }
        intervalIdRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 100);
        }, 100);
    };

    const stopTimer = () => {
        intervalIdRef.current && clearInterval(intervalIdRef.current);
    };

    useEffect(() => {
        if (running) startTimer();
        else stopTimer();

        return stopTimer; // This will clear the interval when the component unmounts
    }, [running]);

    useEffect(() => {
        // Reset time when running prop changes to true
        if (running) setTime(0);
    }, [running]);

    return <div>Took: {time / 1000}s</div>;
};
