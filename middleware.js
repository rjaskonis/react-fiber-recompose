const path = require('path');

module.exports = app => {
    app.all('/*', (req, res, next) => { // THIS ENABLES HTML5MODE - SPA
		//console.log(req.headers['user-agent']); // client browser detection
		if(req.url.indexOf('/css') > -1){ next(); return; }
		// Just send the index.html for other files to support HTML5Mode
	    res.sendFile(path.join(__dirname, 'public', 'index.html'));
	});
}