import axios from 'axios'

export class entext extends plugin {
  constructor() {
    super({
      /* 说明集 */
      dsc: '每日一句',
      /* 指令集 */
      rule: [
        {
          reg: '^/每日一句$',
          fnc: 'en'
        }
      ]
    })
  }

  /**
   * @param e 消息对象
   * @returns
   */
  async en(e) {
    const url = 'https://api.vvhan.com/api/en?type=sj'

    try {
      /** 调用接口获取数据 */
      const response = await axios.get(url)
      const res = response.data.data
      const zh = res.zh
      const en = res.en
      const pic = res.pic
      await e.reply(zh)
      await e.reply(en)
      await e.reply(segment.image(pic))
      return true
    } catch (error) {
      console.error('接口请求失败', error)
      await e.reply('接口请求失败')
      return false
    }
  }
}
