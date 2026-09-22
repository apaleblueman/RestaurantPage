import ramenGuy from "../assets/teuichi.png"
function homepage(){
    const content = document.getElementById("content");
    content.classList = "home";
    content.textContent = "";
    const left = document.createElement("div");
    const right = document.createElement("div");
    const heading = document.createElement("h1");
    const body = document.createElement("span");
    const image = document.createElement("img");
    image.src=ramenGuy;
    heading.textContent = "Ramen is the Best Pleasure";
    body.textContent = "Ramen Ichiraku has been the RAMEN SHOP in Konohagakure! ask around, ask anyone! (even the hokage)";
    left.appendChild(heading);
    left.appendChild(body);
    right.append(image);
    content.appendChild(left);
    content.appendChild(right);
}
export default homepage;