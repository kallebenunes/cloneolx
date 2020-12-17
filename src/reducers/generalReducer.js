let initialState = {
    default: 'Default'
}

const generalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DEFAULT': 
        return {...state, default: action.payload.default}
        break
    }
    return state
}

export default generalReducer