import homepage from "./modules/homepage.js";
import contact from "./modules/contact.js";
import menu from "./modules/menu.js";
import "./style.css"

window.onload = (event)=>{
    homepage();
};

const buttons = document.querySelectorAll('#button');

buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
    const buttontype=event.target.value;
    switch(buttontype){
        case "home":
            homepage();
            break;
        case "menu":
            menu();
            break;
        case "contact":
            contact();
            break;
        

    }
})
});