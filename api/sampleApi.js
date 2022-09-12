const axios = require('axios');

const fetchData = async () => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
    return results.data;
};


module.exports = {fetchData}