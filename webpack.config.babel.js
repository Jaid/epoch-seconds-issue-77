import Plugin from "./src/WebpackPlugin.js"

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  plugins: [new Plugin],
  target: "web",
  output: {
    chunkFormat: "module",
  },
}

export default config