[![Waffle.io - Columns and their card count](https://badge.waffle.io/room127/homepage.svg?columns=all)](https://waffle.io/room127/homepage)
[![Build Status](https://travis-ci.com/room127/homepage.svg?branch=master)](https://travis-ci.com/room127/homepage)
[![Maintainability](https://api.codeclimate.com/v1/badges/be5a8b961d307e23906a/maintainability)](https://codeclimate.com/github/room127/homepage/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/be5a8b961d307e23906a/test_coverage)](https://codeclimate.com/github/room127/homepage/test_coverage)
[![Dependancy Status](https://david-dm.org/room127/homepage.svg)](https://david-dm.org/room127/homepage)

# room127

## Homepage

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Things we use
- **React** as our frontend library.
- **Jest** as our test runner.
- **Travis CI** for continuous integration.
- **Waffle** for issue tracking.
- **Code Climate** for code quality statistics and test coverage.

### Deployment
- First install the Surge CLI if you haven't already
  - `npm i -g surge`
  - run `surge login` and enter group credentials
- Run `yarn run build` to build project for deployment
- Run `yarn run deploy` to deploy to surge; all config should be taken care of by that command

Alternatively any *direct* push to the master branch will trigger Travis CI to do all this automatically *if* the build passes so be careful.