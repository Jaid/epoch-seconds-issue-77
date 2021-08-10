import fsp from "@absolunet/fsp"
import path from "path"
import webpack from "webpack"

const debug = require("debug")("a")

export default class PkgBannerPlugin {

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    debug("%O", compiler.options)
  }

}