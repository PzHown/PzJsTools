const sleep = require('./Tools/timeTools.js');
const creatADiv = require('./Tools/domTools.js');

const mounted = () => {
    console.log("PzJsTools.js加载成功！");
}

const PzJsTools = {
    sleep,
    creatADiv,
    mounted
}

module.exports = PzJsTools;
