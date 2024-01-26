let OSS = require('ali-oss')
let moment = require('moment')
const md5 = require('js-md5')
// import { v4 as uuidv4 } from 'uuid'

const config = {
  region: 'oss-cn-beijing',
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，创建并使用STS方式来进行API访问
  accessKeyId: '',
  accessKeySecret: '',
  // stsToken: "<Your securityToken(STS)>",
  bucket: '',
}
let client = new OSS(config)

const BASE_URL = `http://${config.bucket}.${config.region}.aliyuncs.com/`

export async function putObject({ file, dirname, progress }) {
  // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
  console.log('putObject')

  let ext = file.name.split('.').slice(-1)[0]
  let name = md5(new Date().getTime().toString()) + '.' + ext
  let filename = dirname + '/' + moment().format('YYYY/MM/DD') + '/' + name

  console.log('filename', filename)

  let result = await client.multipartUpload(filename, file, { progress })
  console.log(result)

  let code = -1
  let msg = '上传失败'

  if (result.res.status == 200) {
    code = 0
    msg = '上传成功'
  }

  return {
    code: code,
    msg: msg,
    data: {
      url: BASE_URL + filename,
    },
  }
}
