# Jules' website

Jules' professional webpages. The website is created using the static site generator [Eleventy](https://www.11ty.dev), and uses the [Pico](https://get.foundation/index.html) CSS sheets for accessible and responsive layout. 

### Setup
First, install a local version of Eleventy into your project, by making sure you are in the root directory and typing

```
npm install @11ty/eleventy
```

You should then be able view a locally served version of the site by running

```
npm start
```

which will fire up the site at [http://localhost:8080](http://localhost:8080).


### Hosting
The workflow in `.github/workflows` will ensure that all pushes to the main branch trigger a build
of the site using Eleventy and the static pages are pushed to the `gh-pages` branch. You can then setup github pages using this branch in the repository to be hosted by your organisation.
