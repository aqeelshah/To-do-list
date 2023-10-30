
var addButton = document.querySelector(".btn1")
var inputField = document.querySelector(".input1")
var list = document.querySelector(".listtask")

addButton.addEventListener("click", function (e) {
    e.preventDefault();
    var inputValue = inputField.value;
    if (inputValue != "") {
        var li = document.createElement("li");
        li.textContent = inputValue;

        btn2 = document.createElement("button");
        btn2.innerHTML = '<div class="div1"><ion-icon name="trash-bin-outline"></ion-icon></div>';
        btn2.classList.add("mybutton");
       
        li.appendChild(btn2)
        list.appendChild(li);

        inputField.value = "";

        btn2.addEventListener("click", function () {
            li.remove();
        })
    }
})
inputField.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        addButton.click();
    }
})
