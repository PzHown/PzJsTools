/**
 *  休眠函数
 * @param {延迟时间} ms 
 * @returns Promise
 */
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export default {
    sleep
}