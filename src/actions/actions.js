
export const add = (num1, num2) => {
    return {
        type: 'ADD',
        payload: { num1, num2 }
    };
};

export const subtract = (num1, num2) => {
    return {
        type: 'SUBTRACT',
        payload: { num1, num2 }
    };
};

export const multiply = (num1, num2) => {
    return {
        type: 'MULTIPLY',
        payload: { num1, num2 }
    };
};

export const divide = (num1, num2) => {
    return {
        type: 'DIVIDE',
        payload: { num1, num2 }
    };
};
