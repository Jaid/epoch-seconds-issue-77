import Plugin from "./src/WebpackPlugin.js"
import webpackMerge from "webpack-merge"

/**
 * @type {import("webpack").Configuration}
 */
const extraConfig = {
  plugins: [new Plugin],
  target: "web",
  output: {
    chunkFormat: "module",
  },
}



export default extraConfig