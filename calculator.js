let button = document.querySelectorAll(".num");
let input = document.querySelector("#display");
let string = "";
let arr = Array.from(button);
arr.forEach(box => {
    box.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = 0;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})