function menu(){
    const content = document.getElementById("content");
    content.textContent = "";
    const menu = document.createElement("H1");
    content.classList = "menu";
    menu.textContent = "menu";
    content.appendChild(menu);
}

export default menu;