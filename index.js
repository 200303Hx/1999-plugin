import fs from 'node:fs'
if (!global.segment) {
  global.segment = (await import('oicq')).segment
}

const files = fs
  .readdirSync('./plugins/1999-plugin/apps')
  .filter((file) => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status != 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
  }
  let plugin = ret[i].value[Object.keys(ret[i].value)[0]]
  apps[name] = plugin
}
export { apps }
logger.info(logger.green('-------  <・)))><<  -------'))
logger.info(logger.green('1999插件加载完成~~'))
logger.info(logger.green('-------  >><(((・> -------'))
