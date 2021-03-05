// @flow
import {constList} from '../Constants/constantsAct'
type Props={
    name:string
}
type Action={
    type:"Add_Data_Request",
    user:Props
}
type Dispatch=(action:Action)=>any
export const storeAction=(name:Props):Dispatch=>{
    return dispatch => {
        dispatch(success(name));

    };
    function success(user:Props) { return { type: constList.ADD_DATA, user } }
}