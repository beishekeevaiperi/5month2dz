import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add, divide, multiply, subtract} from "../actions/actions.js";

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    console.log(num1, num2)

    const dispatch = useDispatch();
    const result = useSelector((state) => state.result);

    const handleAddition = () => {
        dispatch(add(parseFloat(num1), parseFloat(num2)));
    };

    const handleSubtraction = () => {
        dispatch(subtract(parseFloat(num1), parseFloat(num2)));
    };

    const handleMultiplication = () => {
        dispatch(multiply(parseFloat(num1), parseFloat(num2)));
    };

    const handleDivision = () => {
        if (num2 !== 0) {
            dispatch(divide(parseFloat(num1), parseFloat(num2)));
        } else {
            alert('Деление на ноль!');
        }
    };

    return (
        <div>
            <h1>Калькулятор</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <div>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <h2>Результат: {result}</h2>
        </div>
    );
};

export default Calculator;
