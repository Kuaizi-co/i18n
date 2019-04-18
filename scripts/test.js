const minimist = require('minimist')
const rawArgs = process.argv.slice(2)
const args = minimist(rawArgs)

let regex
// 多个目录测试
// yarn test -p a,b
if (args.p) {
  const packages = (args.p || args.packages).split(',').join('|')
  regex = `.*@kuaizi/(${packages})/.*\\.spec\\.js$`
  const i = rawArgs.indexOf('-p')
  rawArgs.splice(i, 2)
}

if (!rawArgs.length) {
  regex = `.*@kuaizi/(.*)/.*\\.spec\\.js$`
}

const jestArgs = [
  '--env',
  'node',
  '--runInBand',
  ...rawArgs,
  ...(regex ? [regex] : [])
]

console.log(`running jest with args: ${jestArgs.join(' ')}`)
require('jest').run(jestArgs)
