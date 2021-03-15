//@flow
import {ConstList} from '../Constants/ActionType';
type Props = {
  name: string,
};
type Action = {
  type: string,
  user: Props,
};
var InitialState = {
  name: '',
};
export const addition = (state: Props = InitialState, action: Action) => {
  switch (action.type) {
    case ConstList.Add_Data:
      return {
        addition: action.user,
      };
    default:
      return state;
  }
};
