// @flow
import {constList} from "../Constants/constantsAct";
type Props={
    name:string
}
type Action={
    type:"Add_Data_Request",
    user:Props
}
var initialState={
    name:""
}
export const addition=(state:Props=initialState,action:Action)=>{
    switch (action.type)
    {
        case constList.ADD_DATA:
            return {
                addition:action.user
        };
        default:
            return state
    }
}