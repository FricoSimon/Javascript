fetch('https://api.github.com/users/octocat')
  .then((response) => {
    if (response.ok) {
      return response.json(); // Parse the response body as JSON
    } else {
      throw new Error('Request failed');
    }
  })
  .then((data) => {
    console.log(data); // Process the retrieved data
  })
  .catch((error) => {
    console.log(error); // Handle any errors that occurred during the request
  });


// using axios
/* const axios = require('axios');

axios.get('https://api.github.com/users/octocat')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); */
