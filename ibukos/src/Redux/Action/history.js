import axios from 'axios';

export const getAHistory = id => {
  return {
    type: 'GET_A_HISTORY',
    payload: axios
      .get(`https://ibukost.herokuapp.com/booking/history/${id}`)
      .then()
      .catch(err => console.log(err)),
  };
};
