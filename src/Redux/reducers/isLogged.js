const loggedReducer = (state=false, action) => {
  switch (action.type){
    case 'SIGN_IN':
      return state=true;
    default:
      return state; // sumpah harus banget pake default
  } 
}

export default loggedReducer;