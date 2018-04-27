# Collections
>Collections of images on different topics.

## Installation
>Please note, that in order to start the app locally on your machine, you need to specify api keys. Please see *.env.example* for a reference.
```bash
# to install all dependencies.
yarn

# to start the app. It will open a window at *localhost:3000*.
yarn start

# Please read *package.json* for more available options.
```

## Tests
>Please note, that in order to execute perceptual diff tests, you need to boot an application on your local machine (port:3000 by default). All the screenshots will be saved at tmp/niffy directory.
```bash
# to run tests simply type yarn test:coverage in your terminal
yarn test:coverage
```

## Description
Collections is a web application, which displays images of various topics in a convenient way. Images is preseneted as a gallery (grid) of tiles of a different width and height. User has an option to click on a specific image to see it in a full sized mode. User also has an option to search and filter images.

API used: [unsplash.com](https://unsplash.com/documentation).

## Technologies used

* React
* Mobx
* Mobx-React
* Glamorous
* Jest
* Nightmarejs and Niffy
* Webpack

## Demo
Demo is available [here](https://synthetiquely.github.io/collections/).

## Author
[Anatoly Belobrovik](https://github.com/synthetiquely/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/synthetiquely/collections/blob/master/LICENSE) file for details.
