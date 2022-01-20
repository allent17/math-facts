import React, { useState } from 'react';
import Problem from './problem';

const Generator = () => {
    const [tnumber, setTnumber] = useState(1);
    const count = 20;
    const [sign, setSign] = useState('+');
    const [problems, setProblems] = useState([]);
    const [createMode, setCreateMode] = useState(true);
    
    const handleNumberChange = e => {
        setTnumber(e.target.value)
    }

    const handleSignChange = (e) => {
        setSign(e.target.value);
    };

    const shuffle = (array) => {

        // loop all elements
        for (let i = array.length - 1; i > 0; i--) {
    
            // pickup a random element
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
    
            // swap it with the current element
            array[i] = array[j];
            array[j] = temp;
        }
    };

    const create = () => {
        let numberSet = [0,1,2,3,4,5,6,7,8,9];
        let problemSet = [];
        let sign1 = '';
        let sign2 = '';
        if( sign === '+' || sign === '-') {
            sign1 = sign;
            sign2 = sign;
        } else if( sign === '+ and -') {
            sign1 = '+';
            sign2 = '-';
        }
        numberSet.forEach( (number) => {
            let problem = {
                num1: sign1 === '-' ? parseInt(number) + parseInt(tnumber) : number,
                num2: tnumber,
                sign: sign1 
            }
            problemSet.push(problem);
            let problem2 = {
                num1: sign2 === '-' ? parseInt(number) + parseInt(tnumber) : number,
                num2: tnumber,
                sign: sign2 
            }
            problemSet.push(problem2);
        });
        shuffle(problemSet);
        setProblems(problemSet);
        setCreateMode(false);
    }

    const reset = () => {
        setProblems([]);
        setCreateMode(true);
    }

    return (
        <div>
            {createMode &&
            <form>
                <p>
                    <label>Number: <input type="number" min="1" max="9" value={tnumber} onChange={handleNumberChange}/></label>
                </p>
                <p>
                    <label>Sign: <select value={sign} onChange={handleSignChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="+ and -">+ and -</option>
                    </select>
                    </label>
                </p>
                <p>
                   Number of Problems: {count}
                </p>
                <button onClick={create}>Create</button>
            </form>
            }   
            {!createMode &&
            <div>
                {problems.map((item, key) =>
                    <Problem key={key} number1={item.num1} sign={item.sign} number2={item.num2}/>
                )}
                <div className="control noprint">
                    <button onClick={reset}>Clear</button>
                    <button onClick={ () => window.print() }>Print</button>
                </div>
            </div>
            }
        </div>
    );
};

export default Generator;
