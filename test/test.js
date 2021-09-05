import {expect, it} from "@jest/globals"
import path from "path"

const {default: MessageWriter} = await import("../dist/testOutput/index.mjs")

it("should run", () => {
  const messageWriter = new MessageWriter
  messageWriter.print()
  expect(messageWriter.get2()).toBe(2)
})