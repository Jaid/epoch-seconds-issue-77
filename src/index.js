import debug from "debug"
import {consoleMessage, debugMessage} from "./lib/messages.js"

export default class MessagePrinter  {
  logDebug = null
  constructor() {
    this.logDebug = debug("main")
  }
  print() {
     this.logDebug(debugMessage)
     console.log(consoleMessage)
  }
}