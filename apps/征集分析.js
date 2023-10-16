import fs from 'fs'
import Jimp from 'jimp'
import { createCanvas, registerFont } from 'canvas'
export class fenxichouka2 extends plugin {
  constructor () {
    super({
    /** 功能名称 */
      name: '征集分析',
      /** 功能描述 */
      dsc: '征集分析',
      event: 'message',
      /** 优先级,数字越小等级越高 */
      priority: 1,
      rule: [
        {
          reg: /^\/征集分析$/,
          fnc: 'fenxi2'
        }
      ]
    })
  }

  async fenxi2 (e) {
    const userId = e.user_id // 获取用户唯一标识
    const imageFilePath = `${process
      .cwd()
      .replace(/\\/g, '/')}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/fenxi.jpg`
    const extensionImagePath = `${process
      .cwd()
      .replace(
        /\\/g,
        '/'
      )}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/pinjie.jpg` // 请替换为实际路径
    Jimp.read(extensionImagePath, async (err, extensionImage) => {
      if (err) {
        console.error('Error reading the extension image:', err)
        return
      }
      // 设置自定义字体路径
      const fontPath = `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/ttf/SourceHanSerifSC-VF.ttf`

      // 注册自定义字体
      registerFont(fontPath, { family: 'CustomFont' })

      // 读取新的JSON文件
      const newFilePath = `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/db/抽卡分析/抽卡记录2${userId}.json`
      const newFileData = JSON.parse(fs.readFileSync(newFilePath, 'utf8'))
      // 背景图片目标高度
      const backgroundImageHeight = 2000
      // 处理限定池数据
      const limitedPoolData = processGachaPoolData(newFileData, '限定池（其余卡池）')
      // 处理常驻池数据
      const standardPoolData = processGachaPoolData(newFileData, '常驻池（于湖中央）')
      // 处理新手池数据
      const novicePoolData = processGachaPoolData(newFileData, '新手池（滴一滴雨）')

      // 创建 canvas 用于自定义字体绘制
      const canvas = createCanvas(1414, 10000)
      const ctx = canvas.getContext('2d')

      // 设置字体样式
      ctx.font = '56px CustomFont' // 使用自定义字体
      ctx.fillStyle = '#CA5B2A'

      // 在 canvas 上绘制文本
      ctx.fillText(limitedPoolData, 138, 710)
      ctx.fillText(standardPoolData, 575, 710)
      ctx.fillText(novicePoolData, 1003, 710)

      // 将 canvas 保存为文本图片
      const textImagePath = `${process
        .cwd()
        .replace(
          /\\/g,
          '/'
        )}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/text_image.png`
      const textImageStream = fs.createWriteStream(textImagePath)
      const textImageBuffer = canvas.toBuffer('image/png')
      textImageStream.write(textImageBuffer)
      textImageStream.end()

      // 读取背景图片
      Jimp.read(imageFilePath, async (err, image) => {
        if (err) {
          console.error('Error reading the background image:', err)
          return
        }
        // 读取文本图片
        const textImage = await Jimp.read(canvas.toBuffer('image/png'))

        /// 获取文本的宽度和高度
        const textMetrics = ctx.measureText(limitedPoolData)
        const textHeight =
          textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent
        // 定义拼接图片的高度
        const extensionImageHeight = 767

        // 计算需要拼接的次数
        const numExtensions = Math.ceil(textHeight / extensionImageHeight)
        // 检查文本部分的高度是否超过 2000
        if (textHeight + 710 >= 2000) {
          // 创建新的背景图片2，高度为原背景图片高度加上拼接图片的高度乘以拼接次数
          const backgroundImage2Height =
            backgroundImageHeight + extensionImageHeight * (numExtensions - 1)
          const backgroundImage2 = new Jimp(1414, backgroundImage2Height)

          // 将原背景图片复制到背景图片2的 (0, 0) 坐标处
          backgroundImage2.composite(image, 0, 0)

          // 拼接延长图多次，使背景图片2的高度与文本部分高度一致
          for (let i = 0; i < numExtensions; i++) {
            const extensionImageY = backgroundImageHeight + i * extensionImageHeight
            backgroundImage2.composite(extensionImage, 0, extensionImageY)
          }

          // 在背景图片2上合成文本图片，使用 BLEND_SOURCE_OVER 模式确保覆盖合成
          backgroundImage2.composite(textImage, 0, 0, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacitySource: 1,
            opacityDest: 1
          })
          // 保存修改后的图片
          const outputImagePath = `${process
            .cwd()
            .replace(
              /\\/g,
              '/'
            )}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/choukafenxi.jpg` // 请替换为实际路径
          backgroundImage2.write(outputImagePath, writeErr => {
            if (writeErr) {
              console.error('Error saving the image:', writeErr)
              return
            }

            console.log('图片已保存：', outputImagePath)
            // 确保没有错误后，再发送图片
            e.reply([segment.image(
              `${process
                .cwd()
                .replace(
                  /\\/g,
                  '/'
                )}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/choukafenxi.jpg`
            )])
          })
        } else {
          // 文本图片的 '文本部分' 左下角高度未超过 2000，直接合成
          image.composite(textImage, 0, 0, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacitySource: 1,
            opacityDest: 1
          })

          // 保存修改后的图片
          const outputImagePath = `${process
            .cwd()
            .replace(
              /\\/g,
              '/'
            )}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/choukafenxi.jpg` // 请替换为实际路径
          image.write(outputImagePath, writeErr => {
            if (writeErr) {
              console.error('Error saving the image:', writeErr)
              return
            }

            console.log('图片已保存：', outputImagePath)
            // 确保没有错误后，再发送图片
            e.reply([segment.image(
              `${process
                .cwd()
                .replace(
                  /\\/g,
                  '/'
                )}/plugins/1999-plugin/resources/assets/img/抽卡分析/分析/choukafenxi.jpg`
            )])
          })
        }
      })

      function processGachaPoolData (data, poolName) {
        const poolData = data.find(pool => pool.poolName === poolName)

        if (poolData) {
          const results = poolData.results
          let prevSixStarIndex = -1 // 上一个6星角色的索引
          let hasSixStar = false // 是否有6星角色
          let totalPulls = 0 // 总抽数
          let sixStarCount = 0 // 6星角色数量
          let analysisResultText = '' // 用于保存分析结果的文本

          // 对池子的结果进行遍历
          results.forEach((result, index) => {
            const characterName = result.split('(')[0]
            const star = Number(result.match(/\d+/)) // 提取抽出的星级
            totalPulls++

            if (star === 6) {
              sixStarCount++
              const matchingSixStarName = characterName
              if (matchingSixStarName) {
                // 在这里输出六星角色名字和对应的抽出次数
                analysisResultText += `${characterName}`

                if (prevSixStarIndex !== 0) {
                  const interval = index - prevSixStarIndex
                  analysisResultText += ` (${interval}抽)\n`
                }

                prevSixStarIndex = index
                hasSixStar = true
              } else {
                analysisResultText += `${characterName}\n`
              }
            }
          })

          // 如果没有6星角色
          if (!hasSixStar) {
            analysisResultText += '暂无六星\n'
          }

          // 计算6星概率
          const sixStarProbability = (sixStarCount / totalPulls) * 100
          analysisResultText += `总抽数:${totalPulls}\n概率:${sixStarProbability.toFixed(2)}%\n`
          return analysisResultText
        } else {
          // 如果没有找到对应池子的数据
          return '无'
        }
      }
    })
  }
}
