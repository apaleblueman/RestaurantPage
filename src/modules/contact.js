function contact(){
    const content = document.getElementById("content");
    content.textContent = "";
    const Contact = document.createElement("div");
    Contact.textContent = "Contact";
    content.appendChild(Contact);
}

export default contact;