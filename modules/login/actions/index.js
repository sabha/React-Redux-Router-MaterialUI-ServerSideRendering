import * as CONST from '../constants'

export const loginAction = (loginAs) => {
  return {
    type: CONST.LOGIN,
    loginAs,
  };
};

 