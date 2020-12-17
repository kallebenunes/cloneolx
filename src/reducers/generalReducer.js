let initialState = {
    default: ''
}

const generalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DEFAULT': 
        return {...state, default: 'Default'}
        break
    }
    return state
}

export default generalReducer