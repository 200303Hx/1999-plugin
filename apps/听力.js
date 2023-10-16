export class showI extends plugin {
  constructor () {
    super({ /** 功能名称 */
      name: '听力',
      /** 功能描述 */
      dsc: '听力菜单',
      event: 'message',
      /** 优先级,数字越小等级越高 */
      priority: 1,
      rule: [
        // 听力笔记
        {
          reg: /^\/day1-1$/,
          fnc: 'T1'
        },
        {
          reg: /^\/day1-2$/,
          fnc: 'T2'
        },
        {
          reg: /^\/day1-3$/,
          fnc: 'T3'
        },
        {
          reg: /^\/day2-1$/,
          fnc: 'T4'
        },
        {
          reg: /^\/day2-2$/,
          fnc: 'T5'
        },
        {
          reg: /^\/day2-3$/,
          fnc: 'T6'
        },
        {
          reg: /^\/day3-1$/,
          fnc: 'T7'
        },
        {
          reg: /^\/day3-2$/,
          fnc: 'T8'
        },
        {
          reg: /^\/day4-1$/,
          fnc: 'T9'
        },
        {
          reg: /^\/day4-2$/,
          fnc: 'T10'
        },
        {
          reg: /^\/day4-3$/,
          fnc: 'T11'
        },
        {
          reg: /^\/day4-4$/,
          fnc: 'T12'
        },
        {
          reg: /^\/day5-1$/,
          fnc: 'T13'
        },
        {
          reg: /^\/day5-2$/,
          fnc: 'T14'
        }
      ]
    })
  }

  async T1 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day1-1.jpg`)])
    return false
  }

  async T2 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day1-2.jpg`)])
    return false
  }

  async T3 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day1-3.jpg`)])
    return false
  }

  async T4 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day2-1.jpg`)])
    return false
  }

  async T5 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day2-2.jpg`)])
    return false
  }

  async T6 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day2-3.jpg`)])
    return false
  }

  async T7 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day3-1.jpg`)])
    return false
  }

  async T8 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day3-2.jpg`)])
    return false
  }

  async T9 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day4-1.jpg`)])
    return false
  }

  async T10 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day4-2.jpg`)])
    return false
  }

  async T11 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day4-3.jpg`)])
    return false
  }

  async T12 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day4-4.jpg`)])
    return false
  }

  async T13 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day5-1.jpg`)])
    return false
  }

  async T14 (e) {
    e.reply([segment.image(
      `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/听力/day5-2.jpg`)])
    return false
  }
}
