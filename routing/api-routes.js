// API Routes
// =============================================================
// WEB SERVER CALLS GO HERE

console.log("api-route.js running");

module.exports = function(app) {
	// all code goes in here

	app.get('/api/:characters?', function(req, res){

		console.log("req.params = " + req.params);
		var chosen = req.params.characters; //darthmaul

		if(chosen){
			console.log(chosen);

			for (var i=0; i <characters.length; i++){

				if (chosen == characters[i].routeName){
					res.json(characters[i]);
					return;
				}
			}

			res.json(false);
		}

		else{
			res.json(characters);
		}
	})



	// Create New Reservation - takes in JSON input
	app.get('/new', function(req, res){

		var newCharacter = {
			routeName: req.query.routeName,
			name: req.query.characterName,
			role: req.query.characterRole,
			age: req.query.characterAge,
			forcePoints: req.query.characterPoints
		};

		console.log(newCharacter);
		characters.push(newCharacter)
		console.log(characters);
		res.json(newCharacter);

	}) // end of new reservations

} // end of module
