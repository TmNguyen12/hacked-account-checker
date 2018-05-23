import axios from 'axios';

const fetchBreachedAccounts = account =>
  axios
    .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${account}`)
    .then(response => response)
    .catch(error => console.log(error));

export default fetchBreachedAccounts;
