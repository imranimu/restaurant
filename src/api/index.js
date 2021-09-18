import axios from 'axios';
//mock API
let API_URL = 'http://smartrestaurantsolutions.com/mobileapi-test';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}