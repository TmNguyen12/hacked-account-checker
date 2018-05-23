const fetchBreachedAccount = async account => {
  let results = await fetch(
    `https://haveibeenpwned.com/api/v2/breachedaccount/${account}`
  );
  let data = await results.json();

  if (data.hasOwnProperty("error")) {
    return ["error"];
  } else {
    return data.stores;
  }
};

fetchBreachedAccount("shadesofgray12@gmail.com");
