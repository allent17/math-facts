import React from 'react';

const Problem = ({number1, number2, sign}) => {
    return (
        <div className="problem">
            <span className="num1">{number1}</span> 
            <span className="sign">{sign}</span> 
            <span className="num2">{number2}</span> 
            <span className="equals">=</span> 
            <input type="text" value="" disabled/> 
        </div>
    );
};

export default Problem;
