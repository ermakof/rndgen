import { arrayToObject, getRandomInt } from "./utils";

export const initialState = {
    number1: 0,
    number2: 0,
    number3: 0,
    info: {},
    range: {
        min: 0,
        max: 100
    },
    results: [],
    loadTime: '',
    roundCounter: 0,
    roundTimeout: 2000,
    roundInterval: 100,
};

export function reducer(state, action) {
    console.log('Reducer state:');
    console.log(state);
    console.log('Reducer action:');
    console.log(action);
    switch (action.type) {
        case 'UPDATE_RANGE':
            return {
                ...state,
                range: {
                    min: action.payload.range[0],
                    max: action.payload.range[1],
                }
            };
        case 'START_GENERATE': {
            let number1 = getRandomInt(state.range.min, state.range.max);
            let number2 = getRandomInt(state.range.min, state.range.max);
            let number3 = getRandomInt(state.range.min, state.range.max);
            return {
                ...state,
                number1,
                number2,
                number3,
            };
        }
        case 'STOP_GENERATE': {
            const roundCounter = state.roundCounter + 1;
            let number1 = getRandomInt(state.range.min, state.range.max);
            let number2 = getRandomInt(state.range.min, state.range.max);
            let number3 = getRandomInt(state.range.min, state.range.max);
            if (state.results.length > 0) {
                const results = arrayToObject(state.results, 'round');
                const round = results[roundCounter];
                if (round) {
                    if (round.number1) {
                        number1 = round.number1;
                    }
                    if (round.number2) {
                        number2 = round.number2;
                    }
                    if (round.number3) {
                        number3 = round.number3;
                    }
                }
            }
            return {
                ...state,
                number1,
                number2,
                number3,
                roundCounter,
            };
        }
        case 'UPDATE_CONFIG':
            return {
                ...state,
                ...action.payload.data,
            };
        case 'UPDATE_COUNTER':
            return {
                ...state,
                roundCounter: action.payload.roundCounter,
            };
        default:
            return state;
    }
}
