import Mock from 'mockjs'

// 导入所有文件
// vite
// const files = import.meta.globEager('./api/*.json')

// webpack
const requireComponent = require.context('./api', true, /\.json$/)

const PREFIX = '/mock'

/**
 * 生成数据
 */
export function useMock() {
  for (let fileName of requireComponent.keys()) {
    const result = fileName.match(/\.(?<apiName>.*)\.json/)

    // url
    let url = result.groups.apiName
    // data
    let data = requireComponent(fileName)

    // console.log(url, data)
    Mock.mock(PREFIX + url, data)
  }
}
