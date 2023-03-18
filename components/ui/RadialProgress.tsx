import React, {useState, useEffect} from 'react';
import { useSpring, animated } from "react-spring";

type propsType = {
    nextValue: number;
};

const RadialProgress = ({nextValue}: propsType) => {
    const styles = useSpring({
        from: {
            "--value": 0,
            "--size": "5em",
        },
        to: {
            "--value": nextValue,
        },
    });


    return (
        // @ts-ignore
        <animated.div className="radial-progress bg-sky-200" style={styles}>
            {styles["--value"].to((v) => v.toFixed(1) + "%")}
        </animated.div>
    );
};

export default RadialProgress;
