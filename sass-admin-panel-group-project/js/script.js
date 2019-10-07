//Makes an array of all the list-items that have a class "dropdown".
let drop_downs = document.querySelectorAll("li.dropdown");

//Iterates over every element of the array.
for (element of drop_downs) {

    //Adds a function to every dropdown that executes when you click.
    element.children[0].addEventListener("click", function(){

        //Removes active class of all open dropdowns that you did not click.
        for (elem of drop_downs) {
            if (this.parentNode != elem && elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
        }

        //Toggles the active class of the dropdown you clicked.
        this.parentNode.classList.toggle("active");
    });
}
