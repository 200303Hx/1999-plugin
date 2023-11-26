import fs from 'fs'

export class Box extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: 'box',
      /** 功能描述 */
      dsc: '配队分析',
      event: 'message',
      /** 优先级,数字越小等级越高 */
      priority: 1,
      rule: [
        {
          reg: /^(#|\/)?配队(.*)/,
          fnc: 'Box'
        },
        {
          reg: /^(#|\/)?百度TK\s+([\S]+)/,
          fnc: 'Box3'
        }
      ]
    })
  }

  async Box3 (e) {
    const TK = /^(#|\/)?百度TK\s+([\S]+)/
    const match = e.msg.match(TK)
    const partOfUrl = match[1]
    const yamlData = { partOfUrl }
    const yamlFileName = `${process
      .cwd()
      .replace(/\\/g, '/')}/plugins/1999-plugin/config/TK.yaml`
    fs.writeFileSync(yamlFileName, JSON.stringify(yamlData, null, 2), 'utf-8')
    console.log('TK已保存')
    e.reply('TK已保存')
  }

  async Box (e) {
    const img = e.img
    console.log(img)
    const imgLink = img[0] // 获取数组中的第一个元素，即链接
    console.log(imgLink)
    const yamlFileName = `${process
      .cwd()
      .replace(/\\/g, '/')}/plugins/1999-plugin/config/TK.yaml`
    const yamlData = fs.readFileSync(yamlFileName, 'utf-8')
    const parsedData = JSON.parse(yamlData)
    const TK = parsedData.partOfUrl
    const baiduurl = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token='
    const apiurl = baiduurl + TK
    console.log(apiurl)
    const requestData = {
      url: imgLink,
      language_type: 'CHN_ENG',
      detect_direction: 'false',
      paragraph: 'false',
      probability: 'false'
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      body: new URLSearchParams(requestData).toString() // 使用 URLSearchParams 对象来序列化请求体
    }
    fetch(apiurl, requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.words_result)

        const teamsData = {
          物理双c: {
            配队: ['温妮弗雷德', '红弩箭', '泥鯭的士', '兔毛手袋'],
            介绍: '(物理队2c2辅，微控)'
          },
          控制木队: {
            配队: ['柏林以东', '泥鯭的士', '槲寄生', '苏芙比'],
            介绍: '奶位可换，吸血控制木队'
          },
          岩系单c队: {
            配队: ['温妮弗雷德', '皮克勒斯', '十四行诗', '新巴别塔'],
            介绍: '1c3辅'
          },
          铠苏柏: {
            配队: ['未锈铠', '苏芙比', '柏林以东', 'X'],
            介绍: '万金油队伍,X是可替换位'
          },
          纯反伤队: {
            配队: ['新巴别塔', '远旅', '气球派对', '弄臣'],
            介绍: '远旅（核心）'
          },
          永控流: {
            配队: ['五色月', '槲寄生', '泥鯭的士', 'X'],
            介绍: '清一色，永控流，X是可替换位'
          },
          星系暴击队: {
            配队: ['红弩箭', '远旅', '牙仙', 'X'],
            介绍: '红弩箭（可换其他暴击c），X是可替换位'
          },
          纯星系队: {
            配队: ['红弩箭', '远旅', '牙仙', '星梯'],
            介绍: '纯星系队'
          },
          精神万金油队: {
            配队: ['槲寄生', '兔毛手袋', '皮克勒斯', 'X'],
            介绍: '槲寄生输出控制 兔毛奶增伤控制 皮克勒斯驱散增伤，X是可替换位'
          },
          兽系现实: {
            配队: ['百夫长', '玛丽莲', '坎南特', 'X'],
            介绍: '百夫长主c输出减防 坎南特大招减防 玛丽莲副c控制减防，X是可替换位'
          },
          循环出手队: {
            配队: ['牙仙', '皮克勒斯', '星梯', 'X'],
            介绍: '无'
          },
          现实队: {
            配队: ['柏林以东', '红弩箭', '讣告人', '牙仙'],
            介绍: '现实队柏林（核心）➕任意现实主c红弩箭，百夫长，➕任意拐或奶，可选讣告人，皮克勒斯，牙仙，气球派对，兔毛手袋'
          },
          by笯鸦: {
            配队: ['红弩箭', '远旅', '十四行诗', '柏林以东'],
            介绍: '红弩箭对单输出，十四行诗仪式对群体清残血，远旅卡好出手次数有沉默，仪式减激情，加上诗宝的缴械，控制很足，觉得不稳给诗宝带个第二次生命时不时奶一下，远旅只出一级反制二级明昧就足够，柏林以东？别问，问就是打不过就开。by笯鸦'
          },
          输出拉满: {
            配队: ['温妮弗雷德', '梅兰妮', '红弩箭', '百夫长'],
            介绍: '(4c)'
          }
          // 更多配队数据
        }

        // 提供可能的角色名字列表
        const possibleCharacterNames = [
          '槲寄生',
          '红弩箭',
          '尼克·波顿',
          '小春雀儿',
          '未锈铠',
          '勿忘我',
          '苏芙比',
          'X',
          '玛丽莲',
          '弄臣',
          '冬',
          '芭妮芭妮',
          '狼群',
          '婴儿蓝',
          '夏利',
          '雾行者',
          '柏林以东',
          '帕米埃',
          '十四行诗',
          '气球派对',
          '星锑',
          '红斗篷',
          '无线电小姐',
          'APPLe',
          '斯奈德',
          '拉拉泉',
          '铅玻璃',
          '百夫长',
          'TTT',
          '星之眼',
          '莉拉妮',
          '约翰·提托',
          '讣告人',
          '五色月',
          '泥鯭的士',
          '丽莎&路易斯',
          '玛蒂尔达',
          '爱宠',
          '坦南特',
          '莫桑女士',
          '贝蒂',
          '吵闹鬼',
          '兔毛手袋',
          '远旅',
          '喀嚓喀嚓',
          '哒哒达利',
          '温妮弗雷德',
          '新巴别塔',
          '牙仙',
          '洋葱头',
          '斯普特尼克',
          '小梅斯梅尔',
          '埃里克',
          '门',
          '金蜜儿',
          '梅兰妮',
          '皮克勒斯',
          '挖掘艺术'
        ]
        function levenshteinDistance (str1, str2) {
          const m = str1.length
          const n = str2.length
          const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))

          for (let i = 0; i <= m; i++) {
            dp[i][0] = i
          }

          for (let j = 0; j <= n; j++) {
            dp[0][j] = j
          }

          for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
              if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
              } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
              }
            }
          }

          return dp[m][n]
        }

        function findBestMatchingName (targetName) {
          let bestMatchName
          let bestMatchScore = Number.MAX_SAFE_INTEGER

          for (const possibleName of possibleCharacterNames) {
            const similarityScore = levenshteinDistance(targetName, possibleName)
            if (similarityScore < bestMatchScore) {
              bestMatchName = possibleName
              bestMatchScore = similarityScore
            }
          }

          return bestMatchScore <= 2 ? bestMatchName : undefined
        }

        const matchingNames = data.words_result
          .map(wordResult => wordResult.words.trim())
          .map(word => findBestMatchingName(word))
          .filter(name => name !== undefined)

        console.log(matchingNames)

        function findMatchingTeams (names) {
          const matchingTeams = []
          for (const teamName in teamsData) {
            const teamCharacters = teamsData[teamName].配队
            const foundCharacters = teamCharacters.filter(name => names.includes(name))
            if (foundCharacters.length === 4) {
              matchingTeams.push({
                [teamName]: {
                  配队: foundCharacters,
                  介绍: teamsData[teamName].介绍
                }
              })
            }
          }
          return matchingTeams
        }

        const matchingTeams = findMatchingTeams(matchingNames)

        if (matchingTeams.length > 0) {
          const formattedResult = matchingTeams.map((team) => {
            const teamName = Object.keys(team)[0]
            const teamData = team[teamName]
            const characterList = teamData.配队.join(', ')
            const teamIntro = teamData.介绍

            return `${teamName}\n  组成: ${characterList}\n  介绍: ${teamIntro}`
          }).join('\n\n')

          console.log(formattedResult)
          e.reply('配队方案\n' + formattedResult)
        } else {
          console.log('配队库中未匹配到队伍，请调整图片，确保角色名称清晰没有遮挡')
          e.reply('配队库中未匹配到队伍，请调整图片，确保角色名称清晰没有遮挡')
        }
      }
      )
  }
}
