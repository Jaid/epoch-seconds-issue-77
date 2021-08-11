import fsp from "@absolunet/fsp"
import debug from "debug"
import path from "path"
import webpack from "webpack"

debugger
const logDebug = debug("a")

export default class PkgBannerPlugin {

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    logDebug("%O", compiler.options)
  }

}