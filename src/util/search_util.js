import axios from "axios";

export const fetchBreachedAccount = account => {
  axios
    .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${account}`)
    .then(response => console.log(response));
};
