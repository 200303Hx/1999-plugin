import plugin from '../../../lib/plugins/plugin.js'
import { execSync } from 'child_process'
import { update } from '../../other/update.js'
import { command } from '../config/global/command.js'
const Plugin_Name = '1999-plugin'

export class update extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: '1999_更新',
      /** 功能描述 */
      dsc: '调用Yunzai自带更新模块进行插件更新',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 2000,
      rule: [...command.update],
    })
  }

  async update_plugin() {
    let Update_Plugin = new update()
    Update_Plugin.e = this.e
    Update_Plugin.reply = this.reply

    if (Update_Plugin.getPlugin(Plugin_Name)) {
      if (this.e.msg.includes('强制')) {
        await execSync('git reset --hard', { cwd: `${process.cwd()}/plugins/${Plugin_Name}/` })
      }
      await Update_Plugin.runUpdate(Plugin_Name)
      if (Update_Plugin.isUp) {
        setTimeout(() => Update_Plugin.restart(), 2000)
      }
    }
    return true
  }
}
