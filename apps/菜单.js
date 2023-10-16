export class show extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '帮助',
      /** 功能描述 */
      dsc: '帮助菜单',
      event: 'message',
      /** 优先级,数字越小等级越高 */
      priority: 1,
      rule: [
        {
          reg: /^\/1999帮助$/,
          fnc: 'help'
        },
        {
          reg: /^\/剧情$/,
          fnc: '剧情'
        },
        {
          reg: /^\/征集帮助$/,
          fnc: '征集帮助'
        },
        {
          reg: /^\/听力笔记$/,
          fnc: '听力笔记'
        },
        {
          reg: /^\/征集分析教程$/,
          fnc: '征集分析教程'
        },
        {
          reg: /^\/攻略$/,
          fnc: '攻略'
        }
      ]
    })
  }

  async 剧情 (e) {
    e.reply(
      '以下为剧情目录\n只需要复制下方目录命令@Bot就可以获取该小节的中英对照剧情辣！\n/TH.01-1\n/TH.01-2'
    )
  }

  async help (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/help/菜单.png`
    )])
  }

  async 征集帮助 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/help/征集帮助.png`
    )])
  }

  async 听力笔记 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/help/听力笔记.png`
    )])
  }

  async 攻略 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/help/攻略.jpg`
    )])
  }

  async 征集分析教程 (e) {
    e.reply([segment.image(
    `${process
      .cwd()
      .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/help/征集分析教程.png`
    )])
  }
}
