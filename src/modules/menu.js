function menu(){
    const content = document.getElementById("content");
    content.textContent = "";
    const menu = document.createElement("div");
    menu.textContent = "menu";
    content.appendChild(menu);
}

export default menu;