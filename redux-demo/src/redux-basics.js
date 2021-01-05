const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0,
}

// Reducer
// The reducer is the only thing can update the state
// 2 arguments: state: the old state wich may be updated and action
const rootReducer = function (state = {
    ...initialState
}, action) {

    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }

    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription
// subcription take function will be executed when ever the state is updated, 
// when ever action is dispatched and mutates the store
store.subscribe(() => {
    console.log('[Subcription]', store.getState())
})

// Dispatching Action
store.dispatch({
    type: 'INC_COUNTER'
});

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10,
});

console.log(store.getState());