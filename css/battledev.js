/*On va stocker les clefs (valeurs du tableau input) et les valeurs (le nombre de fois où la clef a été répétée dans le tableau input) */
let testObject = {};
/*La réponse aux mystères de l'univers*/
let answer = null;

/*Avec le système clef-valeur :
	- on attribue la valeur 0 à la valeur de la clef correspondant à la propriété du tableau qui est parcourue si elle n'existe pas
	- si elle existe, on incrémente la valeur de la clef correspondante */
	for(const property of input) {
	    if(!testObject[property]) {
	        testObject[property] = 0;
	    } else {
	        testObject[property]++;
	    }
	}
	
	/*On parcourt ensuite l'objet test pour voir quelle clef a pour valeur zéro*/
	for(let value in testObject) {
	    if(testObject[value] == 2) {
	        answer = value;
	    }
	}
	
	return console.log(`testObject:`+testObject+`- input: ${input}`);