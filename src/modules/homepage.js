import ramenGuy from "../assets/homepagepic.jpg"
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
    image.classList="pic";
    heading.textContent = "Ramen is the Best Pleasure";
    body.textContent = "Ask anyone in Konohagakure—from fresh Academy grads to the Hokage on the mountain—where to recharge after a tough mission. Tucked just off Main Street behind our signature curtains, Ichiraku has been fueling the Hidden Leaf's brave shinobi for decades with the richest bowls in the Land of Fire.Master Teuchi and Ayame simmer our secret broth for sixteen hours overnight to deliver maximum flavor and chakra-restoring comfort. Paired with fresh hand-pulled noodles, tender chashu pork, and signature narutomaki, every bowl is crafted with heart to power you through your next assignment.Pull up a stool at our cozy wooden counter, turn in your hard-earned mission Ryo, and experience the legendary Miso Tonkotsu that built Konoha’s heroes. We're open daily in the Commercial District—come pull back the curtains and eat like a legend!";
    left.appendChild(heading);
    left.appendChild(body);
    right.append(image);
    content.appendChild(left);
    content.appendChild(right);
}
export default homepage;