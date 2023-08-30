import button from "./button";
import chark from "./chark";

export {
  button,
  chark,
}

import spawn from 'cross-spawn'

export const run = async (str: string) => {
  const runArr = str.split(' ')
  if (runArr.length < 2) {
    return false
  }
  const [npm, ...args] = runArr
  spawn.sync(npm, args, {
    stdio: 'pipe',
    cwd: process.cwd(),
  })
}