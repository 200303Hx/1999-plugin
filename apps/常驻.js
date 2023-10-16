import fs from 'fs'
import jimp from 'jimp'

export class chouka extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '常驻',
      /** 功能描述 */
      dsc: '常驻卡池',
      event: 'message',
      /** 优先级,数字越小等级越高 */
      priority: 1,
      rule: [
        {
          reg: /^\/十连$/,
          fnc: '十连'
        },
        {
          reg: /^\/单抽$/,
          fnc: '单抽'
        }
      ]
    })
  }

  async 单抽 (e) {
    try {
      const options = [
        { folderPath: folderPaths[0], probability: 0.015 },
        { folderPath: folderPaths[1], probability: 0.085 },
        { folderPath: folderPaths[2], probability: 0.4 },
        { folderPath: folderPaths[3], probability: 0.45 },
        { folderPath: folderPaths[4], probability: 0.05 }
      ]

      const drawCountMap = loadDrawCountMap()
      const userId = e.user_id

      // 单抽的逻辑，包括随机选择和处理抽卡结果
      const { randomFolder, randomImage } = await 单抽Logic(e)
      const image = await jimp.read(randomImage)
      const outputFilePath = `${outputFolderPath}/single_draw.jpg`
      await image.writeAsync(outputFilePath)

      // 添加抽到的文件名到抽卡次数映射中
      drawCountMap[userId] = drawCountMap[userId] || []
      drawCountMap[userId].push(randomImage)

      // 检查是否抽到了文件夹6的文件，如果是，重置抽卡次数并返回之前的抽卡次数
      if (randomFolder === folderPaths[0]) {
        const previousDrawCount = drawCountMap[userId].length
        drawCountMap[userId] = [randomImage]
        const previousFolder6Draws = drawCountMap[userId].filter(file => file !== randomImage)
        drawCountMap[userId] = previousFolder6Draws

        saveDrawCountMap(drawCountMap)

        await e.reply([segment.image(outputFilePath)], { recallMsg: 10 })
        e.reply(`当前卡池：于湖中央\n只是征集了 ${previousDrawCount} 次就抽到六星角色辣！`, true, { recallMsg: 10 })
        console.log(`单抽图片已保存至 ${outputFilePath}`)
      } else {
        saveDrawCountMap(drawCountMap)

        await e.reply([segment.image(outputFilePath)], false, { recallMsg: 10 })
        e.reply(
          `当前卡池：于湖中央\n征集次数：${drawCountMap[userId].length} 次。`, true
          , { recallMsg: 10 })
        console.log(`单抽图片已保存至 ${outputFilePath}`)
      }
    } catch (error) {
      console.error('发生错误：', error)
    }
  }

  async 十连 (e) {
    const positions = [
      [160, 0],
      [310, 0],
      [460, 0],
      [610, 0],
      [760, 0],
      [590, 400],
      [740, 400],
      [890, 400],
      [1040, 400],
      [1190, 400]
    ]

    try {
      const drawCountMap = loadDrawCountMap()
      const userId = e.user_id
      let folder6DrawCount = 0 // 记录抽到文件夹6的抽数
      const imagePaths = [] // 用于保存十连的文件名
      // 添加抽到的文件名到抽卡次数映射中
      drawCountMap[userId] = drawCountMap[userId] || []

      for (let i = 0; i < 10; i++) {
        const { randomFolder, randomImage } = await 单抽Logic(e)
        drawCountMap[userId].push(randomImage)
        imagePaths.push(randomImage)

        // 检查是否抽到了文件夹6的文件
        if (randomFolder === folderPaths[0]) {
          folder6DrawCount = drawCountMap[userId].length
          drawCountMap[userId] = [randomImage]
          const previousFolder6Draws = drawCountMap[userId].filter(file => file !== randomImage)
          drawCountMap[userId] = previousFolder6Draws
        }
      }

      saveDrawCountMap(drawCountMap)

      const backgroundImage = await jimp.read(backgroundImagePath)
      backgroundImage.resize(backgroundImageWidth, backgroundImageHeight)

      for (let i = 0; i < imagePaths.length; i++) {
        const randomImage = imagePaths[i]
        const image = await jimp.read(randomImage)

        // 叠加图片
        const [x, y] = positions[i]
        backgroundImage.composite(image, x, y)
      }

      // 保存合成后的图片
      const outputFilePath = `${outputFolderPath}/十连.jpg`
      await backgroundImage.writeAsync(outputFilePath)
      console.log(`图片已保存至 ${outputFilePath}`)

      console.log('图片合成完成！')
      e.reply([segment.image(
        `${process
          .cwd()
          .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/抽取中.gif`
      )], false, { recallMsg: 10 })
      await e.reply([segment.image(outputFilePath)], false, { recallMsg: 10 })

      if (folder6DrawCount > 0) {
        e.reply(`当前卡池：于湖中央\n只是征集了${folder6DrawCount} 次就抽到六星角色辣！`, true, { recallMsg: 10 })
      } else {
        e.reply(`当前卡池：于湖中央\n征集次数：${drawCountMap[userId].length} 次`, true, { recallMsg: 10 })
      }
    } catch (error) {
      console.error('发生错误：', error)
    }
  }
}

function loadDrawCountMap () {
  try {
    const json = fs.readFileSync(dbFolderPath, 'utf-8')
    return JSON.parse(json)
  } catch (error) {
    saveDrawCountMap({}) // 创建一个空的抽卡次数映射文件
    console.error('读取抽卡次数映射文件失败:', error)
    return {}
  }
}

function saveDrawCountMap (drawCountMap) {
  try {
    const json = JSON.stringify(drawCountMap, null, 2)
    fs.writeFileSync(drawCountMapPath, json, 'utf-8')
  } catch (error) {
    console.error('保存抽卡次数映射文件失败:', error)
  }
}

async function 单抽Logic (e) {
  const options = [
    { folderPath: folderPaths[0], probability: 0.015 },
    { folderPath: folderPaths[1], probability: 0.085 },
    { folderPath: folderPaths[2], probability: 0.4 },
    { folderPath: folderPaths[3], probability: 0.45 },
    { folderPath: folderPaths[4], probability: 0.05 }
  ]

  const randomFolder = getRandomOption(options)
  const randomImage = getRandomFileFromFolder(randomFolder)

  return { randomFolder, randomImage }
}

const backgroundImagePath = `${process
  .cwd()
  .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/bg.png`
const folderPaths = [
  `${process.cwd().replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/6`,
  `${process.cwd().replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/5`,
  `${process.cwd().replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/4`,
  `${process.cwd().replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/3`,
  `${process.cwd().replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/2`
]

const outputFolderPath = `${process
  .cwd()
  .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/模拟抽卡/im`
const dbFolderPath = `${process
  .cwd()
  .replace(/\\/g, '/')}/plugins/1999-plugin/db/模拟抽卡/drawCountMap.json`
const drawCountMapPath = `${process
  .cwd()
  .replace(/\\/g, '/')}/plugins/1999-plugin/db/模拟抽卡/drawCountMap.json`
// 背景图的宽度和高度
const backgroundImageWidth = 1500
const backgroundImageHeight = 800

// 根据概率从选项数组中随机选择一个
function getRandomOption (options) {
  const totalProbability = options.reduce((sum, option) => sum + option.probability, 0)
  let random = Math.random() * totalProbability

  for (let i = 0; i < options.length; i++) {
    const option = options[i]
    if (random < option.probability) {
      return option.folderPath
    }
    random -= option.probability
  }
}

// 从指定路径的文件夹中随机选择一个文件
function getRandomFileFromFolder (folderPath) {
  const files = fs.readdirSync(folderPath)
  const randomIndex = Math.floor(Math.random() * files.length)
  const randomFile = files[randomIndex]
  return `${folderPath}/${randomFile}`
}
