export class showImg2 extends plugin {
  constructor() {
    super({ /** 功能名称 */
    name: '心相',
    /** 功能描述 */
    dsc: '心相图鉴',
    event: 'message',
    /** 优先级,数字越小等级越高 */
    priority: 1,
      rule: [
        //心相图鉴
        {
          reg: /^(#|\/)?夜色亵渎者$/,
          fnc: 'X1'
        },
        {
          reg: /^(#|\/)?好奇心宝贝$/,
          fnc: 'X2'
        },
        {
          reg: /^(#|\/)?必要的记录$/,
          fnc: 'X3'
        },
        {
          reg: /^(#|\/)?掌声如雷鸣$/,
          fnc: 'X4'
        },
        {
          reg: /^(#|\/)?第二次生命$/,
          fnc: 'X5'
        },
        {
          reg: /^(#|\/)?美丽新世界$/,
          fnc: 'X6'
        },
        {
          reg: /^(#|\/)?跳房子游戏$/,
          fnc: 'X7'
        },
        {
          reg: /^(#|\/)?午后小憩$/,
          fnc: 'X8'
        },
        {
          reg: /^(#|\/)?心驰神往$/,
          fnc: 'X9'
        },
        {
          reg: /^(#|\/)?无束无拘$/,
          fnc: 'X10'
        },
        {
          reg: /^(#|\/)?明日亦然$/,
          fnc: 'X11'
        },
        {
          reg: /^(#|\/)?示我以真$/,
          fnc: 'X12'
        },
        {
          reg: /^(#|\/)?笑语欢声$/,
          fnc: 'X13'
        },
        {
          reg: /^(#|\/)?自由的心$/,
          fnc: 'X14'
        },
        {
          reg: /^(#|\/)?远大前程$/,
          fnc: 'X15'
        }
      ]
    })
  }

  //心相图鉴
  async X1(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/夜色亵渎者.png`)])
    return false
  }

  async X2(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/好奇心宝贝.png`)])
    return false
  }

  async X3(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/必要的记录.png`)])
    return false
  }

  async X4(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/掌声如雷鸣.png`)])
    return false
  }

  async X5(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/第二次生命.png`)])
    return false
  }

  async X6(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/美丽新世界.png`)])
    return false
  }

  async X7(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/跳房子游戏.png`)])
    return false
  }

  async X8(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/午后小憩.png`)])
    return false
  }

  async X9(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/心驰神往.png`)])
    return false
  }

  async X10(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/无束无拘.png`)])
    return false
  }

  async X11(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/明日亦然.png`)])
    return false
  }

  async X12(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/示我以真.png`)])
    return false
  }

  async X13(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/笑语欢声.png`)])
    return false
  }

  async X14(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/自由的心.png`)])
    return false
  }

  async X15(e) {
     e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/心相/远大前程.png`)])
    return false
  }
}
