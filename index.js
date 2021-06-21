const getColors = require('get-image-colors');
const path = require('path');
function getDominantColorRGB(filename) {
    getColors(path.join(__dirname, filename)).then(colors => {console.log(getDominantColor(colors))});
    var dominantColor = cs[0]._rgb;
    var color = `${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}`;
    return color;
}
function getDominantColorArray(filename) {
    getColors(path.join(__dirname, filename)).then(colors => {console.log(getDominantColor(colors))});
    var dominantColor = cs[0]._rgb;
    var color = [dominantColor[0], dominantColor[1], dominantColor[2]];
    return color;
}
module.exports = {
    name: "main-color",
    description: "get the main color of an image",
    getDominantColorAsRGB: getDominantColorRGB,
    getDominantColorAsArray: getDominantColorArray
}