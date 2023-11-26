import axios from 'axios'
import fs from 'fs'
import _ from 'lodash'

const cardNameMap = {
  3003: { name: '槲寄生', star: '6星' },
  3004: { name: '红弩箭', star: '6星' },
  3005: { name: '尼克·波顿', star: '4星' },
  3006: { name: '小春雀儿', star: '4星' },
  3007: { name: '未锈铠', star: '6星' },
  3009: { name: '苏芙比', star: '6星' },
  3010: { name: 'X', star: '5星' },
  3011: { name: '玛丽莲', star: '5星' },
  3012: { name: '弄臣', star: '3星' },
  3013: { name: '冬', star: '4星' },
  3014: { name: '芭妮芭妮', star: '4星' },
  3015: { name: '狼群', star: '4星' },
  3016: { name: '婴儿蓝', star: '5星' },
  3017: { name: '夏利', star: '5星' },
  3018: { name: '雾行者', star: '4星' },
  3020: { name: '柏林以东', star: '5星' },
  3022: { name: '帕米埃', star: '5星' },
  3023: { name: '十四行诗', star: '5星' },
  3024: { name: '气球派对', star: '5星' },
  3025: { name: '星锑', star: '6星' },
  3026: { name: '红斗篷', star: '4星' },
  3027: { name: '无线电小姐', star: '2星' },
  3028: { name: 'APPLe', star: '4星' },
  3029: { name: '斯奈德', star: '5星' },
  3030: { name: '拉拉泉', star: '3星' },
  3031: { name: '铅玻璃', star: '4星' },
  3032: { name: '百夫长', star: '6星' },
  3033: { name: 'TTT', star: '4星' },
  3034: { name: '星之眼', star: '3星' },
  3035: { name: '莉拉妮', star: '3星' },
  3036: { name: '约翰·提托', star: '3星' },
  3037: { name: '讣告人', star: '5星' },
  3038: { name: '五色月', star: '5星' },
  3039: { name: '泥鯭的士', star: '6星' },
  3040: { name: '丽莎&路易斯', star: '3星' },
  3041: { name: '玛蒂尔达', star: '5星' },
  3042: { name: '爱宠', star: '4星' },
  3043: { name: '坦南特', star: '5星' },
  3044: { name: '莫桑女士', star: '4星' },
  3045: { name: '贝蒂', star: '3星' },
  3046: { name: '吵闹鬼', star: '4星' },
  3047: { name: '兔毛手袋', star: '6星' },
  3048: { name: '远旅', star: '6星' },
  3049: { name: '喀嚓喀嚓', star: '5星' },
  3050: { name: '哒哒达利', star: '3星' },
  3051: { name: '温妮弗雷德', star: '6星' },
  3052: { name: '新巴别塔', star: '6星' },
  3053: { name: '牙仙', star: '6星' },
  3054: { name: '洋葱头', star: '3星' },
  3055: { name: '斯普特尼克', star: '3星' },
  3057: { name: '小梅斯梅尔', star: '4星' },
  3058: { name: '埃里克', star: '4星' },
  3059: { name: '门', star: '2星' },
  3060: { name: '金蜜儿', star: '5星' },
  3062: { name: '梅兰妮', star: '6星' },
  3063: { name: '皮克勒斯', star: '6星' },
  3064: { name: '挖掘艺术', star: '5星' }
}
export class fenxichouka extends plugin {
  constructor () {
    super({
      rule: [
        {
          reg: /^(#|\/)?征集记录\s+([\S]+)/,
          fnc: 'fenxi'
        }
      ]
    })
  }

  async fenxi (e) {
    // 使用正则表达式匹配并提取链接的一部分
    const urlRegex = /^(#|\/)?征集记录\s+([\S]+)/
    const match = e.msg.match(urlRegex)

    if (match && match[1]) {
      const partOfUrl = match[1] // 用户发送的链接的一部分
      const completeUrl = `https://game-re-service.sl916.com/query/summon?${partOfUrl}`
      const decodedUrl = completeUrl.replace(/&amp;/g, '&')
      const userId = e.user_id // 获取用户唯一标识
      const jsonFileName = `${process
       .cwd()
       .replace(/\\/g, '/')}/plugins/1999-plugin/db/抽卡分析/${userId}.json` // 以用户UID为后缀的JSON文件名

      // 发送GET请求获取网页内容
      try {
        // 异步函数，获取网页内容并保存为JSON文件
        const response = await axios.get(decodedUrl)
        const html = response.data
        fs.writeFileSync(jsonFileName, JSON.stringify(html), 'utf-8')
        console.log('JSON文件保存成功！')

        const filePath = `${process
          .cwd()
          .replace(/\\/g, '/')}/plugins/1999-plugin/db/抽卡分析/${userId}.json`
        // 抽卡记录1
        try {
          // 从文件中读取JSON数据
          const jsonData = fs.readFileSync(filePath, 'utf-8')
          const data = JSON.parse(jsonData)

          // 从JSON数据中提取抽卡池记录
          const pools = data.data.pageData

          // 按抽卡池名称对记录进行分组
          const cardPools = _.groupBy(pools, 'poolName')

          // 初始化一个数组来存储最终结果
          const result = []

          // 遍历每个抽卡池
          for (const poolName in cardPools) {
            // 获取当前抽卡池的记录
            const poolRecords = cardPools[poolName]

            // 将记录倒序排列，以便按时间降序显示
            const reversedRecords = poolRecords.reverse()

            // 初始化一个数组来存储当前抽卡池的结果
            const poolResults = []

            // 记录当前的抽卡序号
            let position = 0

            // 遍历当前抽卡池的倒序记录
            for (const record of reversedRecords) {
              // 获取当前记录的所有id
              const gainIds = record.gainIds

              for (const gainId of gainIds) {
                const cardInfo = cardNameMap[gainId]
                if (cardInfo) {
                  const star = cardInfo.star ? `(${cardInfo.star})` : ''
                  position++

                  const cardResult = `${cardInfo.name}${star} - 第${position}抽`

                  // 将当前卡片结果添加到抽卡池结果数组
                  poolResults.push(cardResult)
                } else {
                  // 如果找不到卡片信息，可以添加一个默认值或者忽略当前卡片
                  poolResults.push(`未知卡片 - 第${position}抽`)
                  // 或者不做任何操作
                }
              }
            }

            // 将当前抽卡池的结果保存为一个对象
            const poolResultObject = {
              poolName,
              results: poolResults
            }

            // 将当前抽卡池的结果对象添加到最终结果数组
            result.push(poolResultObject)
          }
          // 将结果保存为 JSON 字符串格式
          const jsonResult = JSON.stringify(result, null, 2)

          // 保存 JSON 字符串到文件
          const saveFilePath = `${process
            .cwd()
            .replace(/\\/g, '/')}/plugins/1999-plugin/db/抽卡分析/抽卡记录${userId}.json`
          fs.writeFileSync(saveFilePath, jsonResult, 'utf-8')
          // 抽卡记录2
          try {
            // 从文件中读取JSON数据
            const jsonData = fs.readFileSync(filePath, 'utf-8')
            const data = JSON.parse(jsonData)

            // 从JSON数据中提取抽卡池记录
            const pools = data.data.pageData

            // 初始化一个数组来存储所有限定池的记录
            const limitedPoolRecords = []

            // 遍历每个抽卡池
            for (const pool of pools) {
              // 判断当前抽卡池是否为限定池
              const isLimitedPool = pool.poolName !== '第一滴雨' && pool.poolName !== '于湖中央'

              // 如果是限定池，将记录添加到限定池的数组中
              if (isLimitedPool) {
                limitedPoolRecords.push(pool)
              }
            }

            // 对限定池记录按照时间升序排序，确保按照id出现的时间顺序排列
            limitedPoolRecords.sort(
              (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime()
            )

            // 初始化三大卡池的结果对象
            const novicePoolResult = {
              poolName: '新手池（滴一滴雨）',
              results: []
            }

            const residentPoolResult = {
              poolName: '常驻池（于湖中央）',
              results: []
            }

            // 初始化一个数组来存储最终结果
            const result = []

            // 遍历每个抽卡池
            for (const pool of pools) {
              // 判断当前抽卡池是否为限定池
              const isLimitedPool = pool.poolName !== '第一滴雨' && pool.poolName !== '于湖中央'

              // 如果是限定池，直接跳过，因为限定池的记录已经在前面处理过了
              if (isLimitedPool) {
                continue
              }

              // 获取当前抽卡池的记录并将其倒序排列，以便按时间降序显示
              const poolRecords = pools.filter(p => p.poolName === pool.poolName).reverse()

              // 初始化一个数组来存储当前抽卡池的结果
              const poolResults = []
              // 记录当前的抽卡序号
              for (const record of poolRecords) {
                // 获取当前记录的所有id
                const gainIds = record.gainIds

                for (const gainId of gainIds) {
                  const cardInfo = cardNameMap[gainId]
                  if (cardInfo) {
                    const star = cardInfo.star1 ? `(${cardInfo.star})` : ''
                    const position = poolResults.length + 1

                    const cardResult = `${cardInfo.name}${star} - 第${position}抽`
                    poolResults.push(cardResult)
                  } else {
                    const position = poolResults.length + 1
                    // 如果找不到卡片信息，可以添加一个默认值或者忽略当前卡片
                    poolResults.push(`未知卡片 - 第${position}抽`)
                    // 或者不做任何操作
                  }
                }
              }
              // 将当前抽卡池的结果保存到对应的池子对象中
              if (pool.poolName === '第一滴雨') {
                novicePoolResult.results = poolResults
              } else if (pool.poolName === '于湖中央') {
                residentPoolResult.results = poolResults
              }
            }

            // 将三大卡池的结果合并到最终结果数组
            result.push(novicePoolResult)
            result.push(residentPoolResult)

            // 处理限定池的记录
            if (limitedPoolRecords.length > 0) {
              // 初始化一个数组来存储限定池的结果
              const limitedPoolResult = {
                poolName: '限定池（其余卡池）',
                results: []
              }

              // 遍历限定池的记录
              for (const record of limitedPoolRecords) {
                // 获取当前记录的所有id
                const gainIds = record.gainIds

                for (const gainId of gainIds) {
                  const cardInfo = cardNameMap[gainId]
                  if (cardInfo) {
                    const star = cardInfo.star ? `(${cardInfo.star})` : ''
                    const position = limitedPoolResult.results.length + 1
                    const cardResult = `${cardInfo.name}${star} - 第${position}抽`
                    limitedPoolResult.results.push(cardResult)
                  } else {
                    const position = limitedPoolResult.results.length + 1
                    limitedPoolResult.results.push(`未知卡片 - 第${position}抽`)
                    // 如果找不到卡片信息，可以添加一个默认值或者忽略当前卡片
                  }
                }
              }

              // 在遍历结束后将限定池的结果添加到最终结果数组
              result.push(limitedPoolResult)
            }
            // 将结果保存为 JSON 字符串格式
            const jsonResult = JSON.stringify(result, null, 2)

            // 保存 JSON 字符串到文件
            const saveFilePath = `${process
              .cwd()
              .replace(/\\/g, '/')}/plugins/1999-plugin/db/抽卡分析/抽卡记录2${userId}.json`
            fs.writeFileSync(saveFilePath, jsonResult, 'utf-8')

            // 发送回复消息
            e.reply('记录已保存！')
          } catch (error) {
            console.error('读取JSON文件失败:', error)

            // 如果出现错误，发送错误消息
            e.reply('读取JSON文件失败，请确认是否已进行抽卡分析或稍后再试。')
          }
          // 返回 false 表示函数执行结束
          return false
        } catch (error) {
          // 返回 false 表示函数执行结束
          console.error('请求或保存JSON文件出错:', error)
          e.reply('token已过期/输入不规范')
        }
      } catch (error) {
        console.error('保存JSON文件出错:', error)
      }
    }
  }
}
