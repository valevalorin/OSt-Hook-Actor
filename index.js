const axios = require('axios');

console.log(process.argv[2]);

axios.post('http://localhost:10733/process-changed', { processName: process.argv[2]} ) 
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.log(error);
	})
;