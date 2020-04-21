module.exports = function(eleventyConfig) {

    // Todo: Add Netlify CMS - https://www.netlifycms.org/docs/add-to-your-site/

    eleventyConfig.addPassthroughCopy("assets");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "_includes"
        }
    }
}