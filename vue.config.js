module.exports = {
  // publicPath: '/yuedu/'
  // process.env.NODE_ENV 可以检测到当前处于开发环境还是生产环境
  publicPath: process.env.NODE_ENV === "development" ? '/' : './'
}