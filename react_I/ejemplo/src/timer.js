import React, {useEffect, useState} from 'react';

function Timer() {
    const [segundos, setSegundos] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return (
      <div>
        <p>Segundos transcurridos: {segundos}</p>
      </div>
    );
  }

export default Timer;