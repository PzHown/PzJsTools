import sleep from './Tools/timeTools.js';
import creatADiv from './Tools/domTools.js';

const mounted = () => {
    console.log("PzJsTools.js加载成功！");
}

const PzJsTools = {
    sleep,
    creatADiv,
    mounted
}

export default PzJsTools;
