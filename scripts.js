let menus = document.querySelectorAll("nav > header, a");
let main = document.querySelector("main");

window.onresize = function() {
    if (this.innerWidth < 800) {
        main.style.marginLeft = "3rem";

        menus.forEach( menu => {
            menu.style.display = "none";
        });
        
    }
    else {
        main.style.marginLeft = "10rem";

        menus.forEach( menu => {
            menu.style.display = "block";
        });
    }
}


function toggleMenu(botao) {

    menus.forEach( menu => {
        if (menu.style.display == "none" || menu.style.display == "") {
            menu.style.display = "block";
            main.style.marginLeft = "10rem";
        }
        else {
            menu.style.display = "none";
            main.style.marginLeft = "3rem";
        }


    })

    

    
}