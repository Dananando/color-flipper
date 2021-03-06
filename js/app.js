const app = {
    // Objet dans lequel on stocke les 2 tableaux contenant les noms de couleur en 2 formats différents
    tableObject: {
        colorTableHex: ['#000000', '#c0c0c0', '#808080', '#ffffff', '#800000', '#ff0000', '#800080', '#ff00ff', '#008000', '#00ff00', '#808000', '#ffff00', '#000080', '#0000ff', '#008080', '#00ffff', '#ffa500', '#f0f8ff', '#faebd7', '#7fffd4', '#f0ffff', '#f5f5dc', '#ffe4c4', '#ffebcd', '#8a2be2', '#a52a2a', '#deb887', '#5f9ea0', '#7fff00', '#d2691e', '#ff7f50', '#6495ed', '#fff8dc', '#dc143c', '#00ffff', '#fdf5e6', '#6b8e23', '#ff4500', '#da70d6', '#eee8aa', '#98fb98', '#afeeee', '#db7093', '#ffefd5', '#ffdab9', '#cd853f', '#ffc0cb', '#dda0dd', '#b0e0e6', '#bc8f8f', '#4169e1', '#8b4513', '#fa8072', '#f4a460', '#2e8b57', '#fff5ee', '#a0522d', '#00008b', '#008b8b', '#b8860b', '#a9a9a9', '#006400', '#a9a9a9', '#bdb76b', '#8b008b', '#556b2f', '#ff8c00', '#9932cc', '#8b0000', '#e9967a', '#8fbc8f', '#483d8b', '#2f4f4f', '#2f4f4f', '#00ced1', '#9400d3', '#ff1493', '#00bfff', '#696969', '#696969', '#1e90ff', '#b22222', '#fffaf0', '#228b22', '#dcdcdc', '#f8f8ff', '#ffd700', '#daa520', '#adff2f', '#808080', '#f0fff0', '#ff69b4', '#cd5c5c', '#4b0082', '#fffff0', '#f0e68c', '#e6e6fa', '#fff0f5', '#7cfc00', '#fffacd', '#add8e6', '#f08080', '#e0ffff', '#fafad2', '#d3d3d3', '#90ee90', '#d3d3d3', '#ffb6c1', '#ffa07a', '#20b2aa', '#87cefa', '#778899', '#778899', '#b0c4de', '#ffffe0', '#32cd32', '#faf0e6', '#ff00ff', '#66cdaa', '#0000cd', '#ba55d3', '#9370db', '#3cb371', '#7b68ee', '#00fa9a', '#48d1cc', '#c71585', '#191970', '#f5fffa', '#ffe4e1', '#ffe4b5', '#ffdead', '#87ceeb', '#6a5acd', '#708090', '#708090', '#fffafa', '#00ff7f', '#4682b4', '#d2b48c', '#d8bfd8', '#ff6347', '#40e0d0', '#ee82ee', '#f5deb3', '#f5f5f5', '#9acd32'],

        colorTableName: ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen']
    },

    // Tableau dans lequel on stockera le tableau de couleurs qui nous intéresse (format hex ou 'normal')
    chosenTableColor: [],

    // Initialisation de l'application front
    init: () => {
        app.chosenTableColor = app.tableObject.colorTableName;
        app.initListeners();
    },

    // Initialisation des listeners sur les boutons
    initListeners: () => {
        document.querySelector('#main-button').addEventListener('click', app.changeColor);
        
        document.querySelector('#changeColorFormatButton').addEventListener('click', app.changeColorFormat);        
    },

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    // Obtenir un entier entre min (inclusif) et max (exclusif)
    getRandomInt: () => {
        let min = Math.ceil(0);
        let max = Math.floor(148);
        return Math.floor(Math.random() * (max - min) + min);
    },

    // Changer le format d'écriture de la couleur ainsi que le contenu du bouton
    changeColorFormat: (event) => {
        if(app.chosenTableColor == app.tableObject.colorTableName) {
            event.target.classList.toggle('is-primary');
            event.target.textContent = `'Normal' version`;
            app.chosenTableColor = app.tableObject.colorTableHex;
        } else {
            event.target.classList.toggle('is-primary');
            event.target.textContent = `Hex version`;
            app.chosenTableColor = app.tableObject.colorTableName;            
        }
    },

    // Changement de la couleur de fond du body
    changeColor: (event) => {
        // On récupère l'index aléatoire du tableau de couleurs
        const randomNb = app.getRandomInt();

        // On change la couleur du body
        document.querySelector('body').style.backgroundColor = app.chosenTableColor[randomNb];
        document.querySelector('#color-span').textContent = app.chosenTableColor[randomNb].toLocaleUpperCase();
    }

}

document.addEventListener('DOMContentLoaded', app.init);