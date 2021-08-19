import debug from "debug"

export default () => {
  const logDebug = debug("main")
  logDebug("my message")
}