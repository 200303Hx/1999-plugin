import fs from 'fs'
import jimp from 'jimp'
import { createCanvas, registerFont } from 'canvas'
import path from 'path'

export class fenxichouka1 extends plugin {
  constructor () {
    super({
      rule: [
        {
          reg: /^\/大保底概率$/,
          fnc: 'fenxi1'
        }
      ]
    })
  }

  async fenxi1 (e) {
    const userId = e.user_id// 获取用户唯一标识
    analyzeAndDisplayStats()

    async function analyzeAndDisplayStats () {
      const filePath = `${process
        .cwd()
        .replace(/\\/g, '/')}/plugins/1999-plugin/db/抽卡分析/抽卡记录${userId}.json`
      const file2Data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

      const isSpecialSixStarNotWhale = true
      let hasSixStar = false

      const poolStats = {}

      file2Data.reverse() // 从最下方的卡池开始遍历

      // 统计所有卡池的数据
      let totalPullsOverall = 0
      let sixStarPullsOverall = 0
      let misfitPullsOverall = 0
      const specialSixStar = ''
      file2Data.forEach(pool => {
        const poolName = pool.poolName

        // 排除“第一滴雨”和“于湖中央”卡池
        if (poolName !== '第一滴雨' && poolName !== '于湖中央') {
          const results = pool.results
          let specialSixStar = ''

          // 设置每个卡池的特殊六星（硬编码特殊六星的信息）
          if (poolName === '星的栖居') {
            specialSixStar = '远旅'
          } else if (poolName === '剑与盔的撕鸣') {
            specialSixStar = '未锈铠'
          } else if (poolName === '望族与隐士') {
            specialSixStar = '苏芙比'
          } else if (poolName === '流行即世界') {
            specialSixStar = '梅兰妮'
          } else if (poolName === '牧羊犬如是说') {
            specialSixStar = '皮克勒斯'
          } else if (poolName === '深林的絮语') {
            specialSixStar = '槲寄生'
          } else if (poolName === '弩箭破空而至') {
            specialSixStar = '红弩箭'
          } else if (poolName === '仙子振翅入夜') {
            specialSixStar = '牙仙'
          } else if (poolName === '精灵仍在等待') {
            specialSixStar = '洁西卡'
          }

          let hasSixStarInPool = false
          let totalPullsInPool = 0
          let sixStarPullsInPool = 0
          let misfitPullsInPool = 0

          results.forEach(result => {
            totalPullsInPool++

            if (result.includes('6星')) {
              hasSixStar = true
              hasSixStarInPool = true
              sixStarPullsInPool++

              // 对其他卡池的特殊6星情况进行标记
              if (specialSixStar && result.includes(specialSixStar) && isSpecialSixStarNotWhale) {
                console.log('正在分析')
              } else {
                misfitPullsInPool++
              }
            }
          })

          poolStats[poolName] = {
            totalPulls: totalPullsInPool,
            sixStarPulls: sixStarPullsInPool,
            misfitPulls: misfitPullsInPool
          }

          // 统计所有卡池的数据
          totalPullsOverall += totalPullsInPool
          sixStarPullsOverall += sixStarPullsInPool
          misfitPullsOverall += misfitPullsInPool
        }
      })

      // 歪卡数量和不歪卡数量的初始化
      const misfitCount = misfitPullsOverall
      const notMisfitCount = sixStarPullsOverall - misfitPullsOverall

      // 判断首尾六星是否歪了
      const firstPull = file2Data[0].results[0]
      const lastPull = file2Data[file2Data.length - 1].results[0]

      const isFirstMisfit = firstPull.includes('6星') && !firstPull.includes(specialSixStar)
      const isLastMisfit = lastPull.includes('6星') && !lastPull.includes(specialSixStar)

      // 根据不同情况计算歪卡的概率
      let overallMisfitProbability = 0
      if (isFirstMisfit && isLastMisfit) {
        if (misfitCount <= notMisfitCount) {
          overallMisfitProbability = misfitCount / (sixStarPullsOverall - misfitCount + 1)
        } else {
          overallMisfitProbability = 1
        }
      } else if (isFirstMisfit && !isLastMisfit) {
        if (misfitCount < notMisfitCount) {
          overallMisfitProbability = misfitCount / (sixStarPullsOverall - misfitCount)
        } else {
          overallMisfitProbability = 1
        }
      } else if (!isFirstMisfit && isLastMisfit) {
        if (misfitCount < notMisfitCount) {
          overallMisfitProbability = misfitCount / (sixStarPullsOverall - misfitCount)
        }
      } else {
        if (misfitCount < notMisfitCount || misfitCount > notMisfitCount) {
          overallMisfitProbability = misfitCount / (sixStarPullsOverall - misfitCount)
        } else {
          overallMisfitProbability = 1
        }

        // 歪卡的概率
        overallMisfitProbability *= 100

        // 合成图片并发送
        const textToPrint = `${overallMisfitProbability.toFixed(2)}%`
        const backgroundImagePath = `${process
          .cwd()
          .replace(
            /\\/g,
            '/'
          )}/plugins/1999-plugin/resources/assets/img/抽卡分析/大保底/dbd.jpg` // 替换为背景图片路径
        const ttffontPath = `${process
          .cwd()
          .replace(
            /\\/g,
            '/'
          )}/plugins/1999-plugin/resources/assets/ttf/SourceHanSerifSC-VF.ttf` // 替换为外部字体文件的路径
        const outputImagePath = `${process
          .cwd()
          .replace(
            /\\/g,
            '/'
          )}/plugins/1999-plugin/resources/assets/img/抽卡分析/大保底/baodi.jpg`
        await addTextAndSpecialImagesToBackground(
          textToPrint,
          backgroundImagePath,
          ttffontPath,
          outputImagePath
        )

        e.reply([segment.image(outputImagePath)])
      }
      /*

大保底概率图片合成

      */
      async function generateTextImage (text, ttffontPath, width, height) {
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')

        // 注册外部字体
        registerFont(ttffontPath, { family: 'MyFont' })

        // 绘制文字
        ctx.font = '264.67px MyFont'
        ctx.fillStyle = '#545454'
        ctx.textAlign = 'center' // 居中对齐文本
        ctx.fillText(text, width / 2, height / 2)

        // 将Canvas生成的Buffer转换为Node.js的Buffer类型
        const buffer = canvas.toBuffer()

        return buffer
      }

      async function selectGradeImage (overallMisfitProbability) {
        // 映射表，将大保底概率范围与对应的图片路径进行关联
        const gradeImageMap = {
          SS: 'SS.png',
          S: 'S.png',
          'A+': 'A+.png',
          A: 'A.png',
          'B+': 'B+.png',
          B: 'B.png',
          'C+': 'C+.png',
          C: 'C.png'
        }

        let gradeImage
        if (overallMisfitProbability >= 0 && overallMisfitProbability < 10) {
          gradeImage = gradeImageMap.SS
        } else if (overallMisfitProbability >= 10 && overallMisfitProbability < 20) {
          gradeImage = gradeImageMap.S
        } else if (overallMisfitProbability >= 20 && overallMisfitProbability < 30) {
          gradeImage = gradeImageMap['A+']
        } else if (overallMisfitProbability >= 30 && overallMisfitProbability < 40) {
          gradeImage = gradeImageMap.A
        } else if (overallMisfitProbability >= 40 && overallMisfitProbability < 50) {
          gradeImage = gradeImageMap['B+']
        } else if (overallMisfitProbability >= 50 && overallMisfitProbability < 60) {
          gradeImage = gradeImageMap.B
        } else if (overallMisfitProbability >= 60 && overallMisfitProbability < 70) {
          gradeImage = gradeImageMap['C+']
        } else if (overallMisfitProbability >= 70 && overallMisfitProbability < 100) {
          gradeImage = gradeImageMap.C
        } else {
          // 默认情况，当大保底概率超出映射表的范围时，默认为C.png
          gradeImage = gradeImageMap.C
        }
        return gradeImage
      }

      async function addTextAndSpecialImagesToBackground (
        text,
        backgroundImagePath,
        fontPath,
        outputImagePath
      ) {
        try {
          // 使用 Jimp 读取背景图片
          const backgroundImage = await jimp.read(backgroundImagePath)
          // 根据大保底概率选择合适的图片路径
          const gradeImageFileName = await selectGradeImage(overallMisfitProbability)
          const gradeImagePath = path.join(
            `${process
              .cwd()
              .replace(
                /\\/g,
                '/'
              )}/plugins/1999-plugin/resources/assets/img/抽卡分析/大保底/评级`,
            gradeImageFileName
          )

          // 使用 Jimp 读取评级图片
          const gradeImage = await jimp.read(gradeImagePath)

          // 设置评级图片的合成位置
          const gradeImageX = 966.2 // 替换为评级图片在背景图片上的 X 坐标
          const gradeImageY = 1583.7 // 替换为评级图片在背景图片上的 Y 坐标

          // 将评级图片合成在背景图片上
          backgroundImage.composite(gradeImage, gradeImageX, gradeImageY)

          // 生成包含文字的图片
          const textImageBuffer = await generateTextImage(text, fontPath, 1069, 400)

          // 使用 Jimp 读取文字图片
          const textImage = await jimp.read(textImageBuffer)

          // 设置文字图片的合成位置
          const textImageX = 217 // 替换为文字图片在背景图片上的 X 坐标
          const textImageY = 500 // 替换为文字图片在背景图片上的 Y 坐标

          // 将文字图片合成在背景图片上
          backgroundImage.composite(textImage, textImageX, textImageY)

          // 保存合成后的图片
          await backgroundImage.writeAsync(outputImagePath)
          console.log('图片合成成功！')
        } catch (error) {
          console.error('图片合成失败：', error)
        }
      }
    }
  }
}
