import configure from "webpack-config-jaid"

import Plugin from "src/WebpackPlugin"

export default configure({
  // documentation: true,
  extra: {
    plugins: [new Plugin],
  },
})