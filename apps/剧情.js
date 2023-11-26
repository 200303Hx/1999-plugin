export class showJ extends plugin {
  constructor() {
    super({ /** 功能名称 */
    name: '剧情',
    /** 功能描述 */
    dsc: '剧情菜单',
    event: 'message',
    /** 优先级,数字越小等级越高 */
    priority: 1,
      rule: [
        //听力笔记
        {
          reg: /^(#|\/)?TH.01-1$/,
          fnc: 'J1'
        },
        {
          reg: /^(#|\/)?TH.01-2$/,
          fnc: 'J2'
        }
      ]
    })
  }

  async J1(e) {
    await    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/剧情/TH.01-1.png`)])
    e.reply(`<@!${e.msg.author.id}> `)
    return false
  }

  async J2(e) {
    await    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/剧情/TH.01-2.png`)])
    e.reply(`<@!${e.msg.author.id}> `)
    return false
  }
}
