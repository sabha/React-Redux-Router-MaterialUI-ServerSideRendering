import * as CONST from 'constants';

export const loginAction = (loginAs) => {
  return {
    type: CONST.LOGIN,
    loginAs,
  };
};

export const loginAsyncAction = () =>{
	return dispatch => {
	    setTimeout(() => {
	      // Yay! Can invoke sync or async actions with `dispatch` 
	      dispatch(loginAction("Async Admin"));
	    }, 1000);
	 };	
}
