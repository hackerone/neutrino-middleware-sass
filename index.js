const path = require("path")

const CSS_LOADER = require.resolve("css-loader")
const SASS_LOADER = require.resolve("sass-loader")
const STYLE_LOADER = require.resolve("style-loader")

module.exports = neutrino => {
  neutrino.config.module
    .rule("scss")
    .test(/\.scss$/)
    .use("style")
      .loader(STYLE_LOADER)
      .end()
    .use("css")
      .loader(CSS_LOADER)
      .options({
        modules: true,
        sourceMap: true,
        localIdentName: "[local]---[hash:base64:5]"
      })
      .end()
    .use("sass")
      .loader(SASS_LOADER)
      .options({
        sourceMap: true,
        includePaths: [neutrino.options.source]
      })
}
