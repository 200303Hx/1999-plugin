export class showImg extends plugin {
  constructor() {
    super({ /** 功能名称 */
    name: '角色',
    /** 功能描述 */
    dsc: '角色图鉴',
    event: 'message',
    /** 优先级,数字越小等级越高 */
    priority: 1,
      rule: [
        //角色图鉴
        {
          reg: /^(#|\/)?喀嚓喀嚓$/,
          fnc: 'A1'
        },
        {
          reg: /^(#|\/)?柏林以东$/,
          fnc: 'A2'
        },
        {
          reg: /^(#|\/)?五色月$/,
          fnc: 'A3'
        },
        {
          reg: /^(#|\/)?玛丽莲$/,
          fnc: 'A4'
        },
        {
          reg: /^(#|\/)?帕米埃$/,
          fnc: 'A5'
        },
        {
          reg: /^(#|\/)?坦南特$/,
          fnc: 'A6'
        },
        {
          reg: /^(#|\/)?玛蒂尔达$/,
          fnc: 'A7'
        },
        {
          reg: /^(#|\/)?夏利$/,
          fnc: 'A8'
        },
        {
          reg: /^(#|\/)?婴儿蓝$/,
          fnc: 'A9'
        },
        {
          reg: /^(#|\/)?讣告人$/,
          fnc: 'A10'
        },
        {
          reg: /^(#|\/)?气球派对$/,
          fnc: 'A11'
        },
        {
          reg: /^(#|\/)?十四行诗$/,
          fnc: 'A12'
        },
        {
          reg: /^(#|\/)?X$/,
          fnc: 'A13'
        },
        {
          reg: /^(#|\/)?未锈铠$/,
          fnc: 'A14'
        },
        {
          reg: /^(#|\/)?槲寄生$/,
          fnc: 'A15'
        },
        {
          reg: /^(#|\/)?泥鯭的士$/,
          fnc: 'A16'
        },
        {
          reg: /^(#|\/)?苏芙比$/,
          fnc: 'A17'
        },
        {
          reg: /^(#|\/)?百夫长$/,
          fnc: 'A18'
        },
        {
          reg: /^(#|\/)?兔毛手袋$/,
          fnc: 'A19'
        },
        {
          reg: /^(#|\/)?红弩箭$/,
          fnc: 'A20'
        },
        {
          reg: /^(#|\/)?星锑$/,
          fnc: 'A21'
        },
        {
          reg: /^(#|\/)?远旅$/,
          fnc: 'A22'
        },
        {
          reg: /^(#|\/)?温妮弗雷德$/,
          fnc: 'A23'
        },
        {
          reg: /^(#|\/)?新巴别塔$/,
          fnc: 'A24'
        },
        {
          reg: /^(#|\/)?梅兰妮$/,
          fnc: 'A25'
        }
      ]
    })
  }

  //角色图鉴
  async A1(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/喀嚓喀嚓.jpg`)])
    return false
  }

  async A2(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/柏林以东.jpg`)])
    return false
  }

  async A3(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/五色月.jpg`)])
    return false
  }

  async A4(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/玛丽莲.jpg`)])
    return false
  }

  async A5(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/帕米埃.jpg`)])
    return false
  }

  async A6(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/坦南特.jpg`)])
    return false
  }

  async A7(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/玛蒂尔达.jpg`)])
    return false
  }

  async A8(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/夏利.jpg`)])
    return false
  }

  async A9(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/婴儿蓝.jpg`)])
    return false
  }

  async A10(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/讣告人.jpg`)])
    return false
  }

  async A11(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/气球派对.jpg`)])
    return false
  }

  async A12(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/十四行诗.jpg`)])
    return false
  }

  async A13(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/X.jpg`)])
    return false
  }

  async A14(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/未锈铠.jpg`)])
    return false
  }

  async A15(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/槲寄生.jpg`)])
    return false
  }

  async A16(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/泥鯭的士.jpg`)])
    return false
  }

  async A17(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/苏芙比.jpg`)])
    return false
  }

  async A18(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/百夫长.jpg`)])
    return false
  }

  async A19(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/兔毛手袋.jpg`)])
    return false
  }

  async A20(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/红弩箭.jpg`)])
    return false
  }

  async A21(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/星锑.jpg`)])
    return false
  }

  async A22(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/远旅.jpg`)])
    return false
  }

  async A23(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/温妮弗雷德.jpg`)])
    return false
  }

  async A24(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/角色/新巴别塔.jpg`)])
    return false
  }
  async A25(e) {
       e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/角色/梅兰妮.jpg`)])
    return false
  }
}
