import React, { useState, useEffect } from 'react';

function LoadingBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress => progress + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div
                style={{
                    width: `${progress}%`,
                    height: "20px",
                    backgroundColor: "blue",
                }}
            ></div>
        </div>
    );
}

export default LoadingBar;