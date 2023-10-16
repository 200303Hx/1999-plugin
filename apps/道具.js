export class showImg3 extends plugin {
  constructor () {
    super({ /** 功能名称 */
      name: '道具',
      /** 功能描述 */
      dsc: '道具图鉴',
      event: 'message',
      /** 优先级,数字越小等级越高 */
      priority: 1,
      rule: [
        {
          reg: /^\/不腐猴爪$/,
          fnc: 'C1'
        },
        {
          reg: /^\/分别善恶之果$/,
          fnc: 'C2'
        },
        {
          reg: /^\/双头形骨架$/,
          fnc: 'C3'
        },
        {
          reg: /^\/啮咬盒$/,
          fnc: 'C4'
        },
        {
          reg: /^\/幸运咒语$/,
          fnc: 'C5'
        },
        {
          reg: /^\/幼龙骨标本$/,
          fnc: 'C6'
        },
        {
          reg: /^\/床下怪物$/,
          fnc: 'C7'
        },
        {
          reg: /^\/未知种根骨$/,
          fnc: 'C8'
        },
        {
          reg: /^\/液化战栗$/,
          fnc: 'C9'
        },
        {
          reg: /^\/清扫咒$/,
          fnc: 'C10'
        },
        {
          reg: /^\/狂人絮语$/,
          fnc: 'C11'
        },
        {
          reg: /^\/百灵百验鸟$/,
          fnc: 'C12'
        },
        {
          reg: /^\/盐封曼德拉$/,
          fnc: 'C13'
        },
        {
          reg: /^\/破碎骨片$/,
          fnc: 'C14'
        },
        {
          reg: /^\/祝圣秘银$/,
          fnc: 'C15'
        },
        {
          reg: /^\/粗糙银锭$/,
          fnc: 'C16'
        },
        {
          reg: /^\/精磨苦盐$/,
          fnc: 'C17'
        },
        {
          reg: /^\/罗马金币$/,
          fnc: 'C18'
        },
        {
          reg: /^\/苦盐簇$/,
          fnc: 'C19'
        },
        {
          reg: /^\/金爪灵摆$/,
          fnc: 'C20'
        },
        {
          reg: /^\/金羊毛$/,
          fnc: 'C21'
        },
        {
          reg: /^\/铂金通灵板$/,
          fnc: 'C22'
        },
        {
          reg: /^\/银光子弹$/,
          fnc: 'C23'
        },
        {
          reg: /^\/银矿原石$/,
          fnc: 'C24'
        },
        {
          reg: /^\/长青剑$/,
          fnc: 'C25'
        },
        {
          reg: /^\/颤颤之齿$/,
          fnc: 'C26'
        }
      ]
    })
  }

  // 道具图鉴
  async C1 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/不腐猴爪.png`)])
    return false
  }

  async C2 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/分别善恶之果.png`)])
    return false
  }

  async C3 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/双头形骨架.png`)])
    return false
  }

  async C4 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/道具/啮咬盒.png`)])
    return false
  }

  async C5 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/幸运咒语.png`)])
    return false
  }

  async C6 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/幼龙骨标本.png`)])
    return false
  }

  async C7 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/床下怪物.png`)])
    return false
  }

  async C8 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/未知种根骨.png`)])
    return false
  }

  async C9 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/液化战栗.png`)])
    return false
  }

  async C10 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/道具/清扫咒.png`)])
    return false
  }

  async C11 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/狂人絮语.png`)])
    return false
  }

  async C12 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/百灵百验鸟.png`)])
    return false
  }

  async C13 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/盐封曼德拉.png`)])
    return false
  }

  async C14 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/破碎骨片.png`)])
    return false
  }

  async C15 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/祝圣秘银.png`)])
    return false
  }

  async C16 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/粗糙银锭.png`)])
    return false
  }

  async C17 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/精磨苦盐.png`)])
    return false
  }

  async C18 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/罗马金币.png`)])
    return false
  }

  async C19 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/道具/苦盐簇.png`)])
    return false
  }

  async C20 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/金爪灵摆.png`)])
    return false
  }

  async C21 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/道具/金羊毛.png`)])
    return false
  }

  async C22 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/铂金通灵板.png`)])
    return false
  }

  async C23 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/银光子弹.png`)])
    return false
  }

  async C24 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/银矿原石.png`)])
    return false
  }

  async C25 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/图鉴/道具/长青剑.png`)])
    return false
  }

  async C26 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/图鉴/道具/颤颤之齿.png`)])
    return false
  }
}
