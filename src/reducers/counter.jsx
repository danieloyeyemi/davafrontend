const initState = {
    count: 0,
    name: 'Daniel'
}

const counter =(state=initState,action)=>{
    if(action.type=='INCREMENT'){
            return{
                ...state,
                count:state.count+action.payload
            }
        }
                else{
                    return state
                }
}

export default counter;