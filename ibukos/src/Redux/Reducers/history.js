const init = {
  History: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};
const history = (state = init, action) => {
  switch (action.type) {
    case 'GET_A_HISTORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'GET_A_HISTORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_A_HISTORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        History: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default history;
