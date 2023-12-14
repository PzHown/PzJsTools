/**
 *  创建div
 * @param {元素Id} id 
 * @param {元素文本} text 
 * @returns { HTMLDivElement类} div1: HTMLDivElement
 */
const creatADiv = (id, text) => {
    //在body末尾中添加一个div
    let div1 = document.createElement("div");
    div1.setAttribute("id",id);
    //内容为list
    div1.innerHTML = text;
    //透明度为0.5
    div1.style.opacity = "0.5";
    div1.style.width = "20px";
    div1.style.height = "20px";
    div1.style.background = "grey";
    div1.style.position = "fixed";
    div1.style.bottom = "40px";
    div1.style.left = "40px";
    div1.style.zIndex = "99999999";
    div1.style.cursor = "pointer";
    div1.style.borderRadius = "50%";
    return div1
}
export default {
    creatADiv
}