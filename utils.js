/**
 * 文件说明：
 * 详细描述
 * 创建者：ycl
 * 创建时间： 2019/5/5
 * 变更记录：
 */
const utils = {
  /**
   * 对象转url参数
   * @param {*} data
   * @param {*} isPrefix
   */
  queryParams (url, data) {
    const sdata = [];
    for (let attr in data) {
      sdata.push(`${attr}=${data[attr]}`);
    }
    let pUrl = url + '?'+sdata.join('&');
    return pUrl
  },


}

export default utils
