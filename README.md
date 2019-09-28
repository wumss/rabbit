[![Build Status](https://img.shields.io/travis/wumss/rabbit/master.svg)](https://travis-ci.org/wumss/rabbit)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wumss/rabbit/blob/master/LICENSE.txt)

**Rabbit** is a primitive CSS framework for dummies who don't know anything about graphic
design but want their web services to look eatable. Almost no classes and no layouts. Just
design plain and simple web pages compliant with HTML5 and they will look OK.

Rabbit is a fork of the original [tacit](https://github.com/yegor256/tacit), which you
should also consider.

Details are here: [wumss.github.io/rabbit](https://wumss.github.io/rabbit/)

Just add it to your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="http://wumss.github.io/rabbit/rabbit.min.css"/>
  </head>
</html>
```

Or simply download [`rabbit.min.css`](http://wumss.github.io/rabbit/rabbit.min.css)
and use together with your HTML by adding:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="rabbit.min.css"/>
  </head>
</html>
```

## How to contribute

Fork repository, make changes, send us a pull request. We will review
your changes and apply them to the `master` branch shortly, provided
they don't violate our quality standards. To avoid frustration, before
sending us your pull request please run full Grunt build:

```
$ npm install
$ grunt
```

To develop it locally, open `index.html` in a browser and then run:

```
$ grunt dev
```

Now you can make changes to `.scss` files and refresh the page in the browser.
CSS will be recompiled automatically on every change you make.

If you have problems running the Grunt build you may need to install
[scss-lint](https://github.com/brigade/scss-lint) and [compass](http://compass-style.org/):

```
gem update --system && gem install scss_lint compass
```

## Got questions?

If you have questions or general suggestions, don't hesitate to submit
a new [Github issue](https://github.com/wumss/rabbit/issues/new).

