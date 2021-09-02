import fs from "node:fs"
import path from "node:path"

const pkg = JSON.parse(fs.readFileSync("./package.json"))

/**
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
  target: "node16",
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true, // https://webpack.js.org/configuration/experiments/#experimentsoutputmodule
  },
  output: {
    path: path.resolve("./dist/testOutput"),
    module: true, // https://webpack.js.org/configuration/output/#outputmodule
    library: {
      type: "module", // https://webpack.js.org/configuration/output/#librarytarget-module
    },
  },
  externals: async ({request}) =>  {
    if (pkg.dependencies?.[request] || pkg.peerDependencies?.[request]) {
			return `module ${request}`;
    }
  },
}

export default webpackConfig