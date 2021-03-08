// @flow
import {ConstList} from "../Constants/ConstantsAct";
type Props={
    name:string
}
type Action={
    type:ConstList.Add_Data,
    user:Props
}
var initialState={
    name:""
}
export const addition=(state:Props=initialState,action:Action)=>{
    switch (action.type)
    {
        case ConstList.Add_Data:
            return {
                addition:action.user
        };
        default:
            return state
    }
}