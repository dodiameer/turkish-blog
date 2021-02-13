/**
  * @param {any[]} collection
  */
const sortOnDataSort = (collection) => {
  const sorted = collection.sort((a, b) => {
    return a.data.sort - b.data.sort
  })
  return sorted
}

/**
 * 
 * @param {import("./types/Eleventy").EleventyConfig} eleventyConfig 
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static")
  eleventyConfig.addWatchTarget("src/static/")
  // @ts-ignore
  eleventyConfig.addLiquidFilter("sortOnDataSort", sortOnDataSort)
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}