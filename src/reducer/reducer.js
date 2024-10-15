
const initialState = {
    result: 0
};

export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, result: action.payload.num1 + action.payload.num2 };
        case 'SUBTRACT':
            return { ...state, result: action.payload.num1 - action.payload.num2 };
        case 'MULTIPLY':
            return { ...state, result: action.payload.num1 * action.payload.num2 };
        case 'DIVIDE':
            return { ...state, result: action.payload.num1 / action.payload.num2 };
        default:
            return state;
    }
};
