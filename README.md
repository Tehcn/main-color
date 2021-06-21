# main-color

Find the main-color in an image!

## Usage

Example usage

```js
// Import the package and use destructuring
const { getDominantColorAsRGB, getDominantColorAsArray } = require("main-color");

// Will return a string like this: "255, 255, 255"
var dominantRGB = getDominantColorAsRGB("some-filename-here.png");

// Will return an array with a size of 3 containing the red, green, and blue of the dominant color
var dominantArr = getDominantColorAsArray("/slighty/nested/picture.png");
```

## Author

[@Tehcn](https://github.com/Tehcn)

## Dependency

- [get-image-colors](https://www.npmjs.com/package/get-image-colors)