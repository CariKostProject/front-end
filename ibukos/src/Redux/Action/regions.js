import axios from 'axios';

export const getRegions = () => {
  return {
    type: 'GET_REGIONS',
    payload: axios
      .get('https://ibukost.herokuapp.com/regions')
      .then()
      .catch(err => console.log(err)),
  };
};
