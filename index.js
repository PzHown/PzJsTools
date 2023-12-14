import sleep from './Tools/timeTools.js'
import creatADiv from './Tools/domTools.js'
const mounted = () => {
    console.log("PzJsTools.js加载成功！")
}
var PzJsTools = {
    sleep,
    creatADiv,
    mounted

}
module.exports = PzJsTools