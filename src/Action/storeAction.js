// @flow
import {ConstList} from '../Constants/ConstantsAct'
type Props={
    name:string
}
type Action={
    type:string,
    user:Props
}
type StoreAct=(dispatch:Dispatch)=>any
type Dispatch=(action:Action)=>any
export const StoreAction=(user:Props):StoreAct=>{
    return (dispatch) => {
        dispatch({ type: ConstList.ADD_DATA, user });

    };
    
}