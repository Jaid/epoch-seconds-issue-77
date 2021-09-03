import configure from "webpack-config-jaid"

import Plugin from "./src/WebpackPlugin.js"

/**
 * @type {import("webpack").Configuration}
 */
const extra = {
  plugins: [new Plugin],
  target: "web",
  output: {
    chunkFormat: "module",
  },
}

export default configure({
  documentation: false,
  extra,
})