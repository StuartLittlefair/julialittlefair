const sass = require("sass");
const path = require("node:path");

module.exports = function (eleventyConfig) {
    // Configure Eleventy
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/css/*.css');
    eleventyConfig.addPassthroughCopy('./src/js/*');
    eleventyConfig.addPassthroughCopy('./src/images/');

    // SCSS Support
    // Creates the extension for use
    // process SCSS files to CSS
    eleventyConfig.addTemplateFormats('scss');
    eleventyConfig.addExtension('scss', {
        outputFileExtension: 'css',
        compile: async function (inputContent, inputPath) {
            let parsedPath = path.parse(inputPath);

            let result = sass.compileString(inputContent, {
                loadPaths: [parsedPath.dir || '.', this.config.dir.includes],
            });
            this.addDependencies(inputPath, result.loadedUrls);
            return async (data) => result.css;
        },
    });


    // Set custom directories for input, output, includes, and data
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "_site"
        }
    };
};