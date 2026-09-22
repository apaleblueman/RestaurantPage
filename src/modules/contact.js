function contact(){
    const content = document.getElementById("content");
    content.textContent = "";
    const Contact = document.createElement("H1");
    content.classList = "contact";
    Contact.textContent = "Contact";
    content.appendChild(Contact);
}

export default contact;