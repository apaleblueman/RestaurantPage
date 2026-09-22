function homepage(){
    const content = document.getElementById("content");
    content.textContent = "";
    const home = document.createElement("div");
    home.textContent = "Home";
    content.appendChild(home);
}

export default homepage;