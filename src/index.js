import "./style.css";

const contactBtn = document.querySelector(".contact__btn");

const inputDropdown = document.querySelectorAll(".filter__item_dropdown");

if (contactBtn) {
    contactBtn.addEventListener("click", function(event) {
        document.querySelectorAll(".contact__data_to-hide").forEach(function(elem){
            elem.classList.toggle("contact__data_hidden");
        })
        document.querySelector(".contact__data_to-dull").classList.toggle("contact__data_dull");
        contactBtn.classList.toggle("contact__btn_pressed");
    })
}

if (inputDropdown) {
    inputDropdown.forEach(function(item) {
        const pick = [];
        const input = item.querySelector(".input__text");
        const currentInput = item;
        const currentDropdown = item.querySelector(".input__dropdown");
        document.querySelector(".body").addEventListener("click", function(event) {
            if (!(event.target == currentInput || event.target == currentDropdown)) {
                currentDropdown.classList.add("dropdown_hidden");
            }
        })
        item.addEventListener("input", function(event) {
            currentDropdown.classList.remove("dropdown_hidden");
            if (input.value === "") {
                currentDropdown.classList.add("dropdown_hidden");
            }
        })
        item.querySelectorAll(".dropdown__checkbox").forEach(function(dropdownItem) {
            dropdownItem.addEventListener("click", function (event) {
                let value = event.target.parentNode.querySelector(".dropdown__item-text").textContent;
                if (!pick.includes(value)) {
                    pick.push(value);
                } else {
                    let index = pick.indexOf(value);
                    if (index > -1) {
                        pick.splice(index, 1);
                    }
                }
                if (pick.length > 1) {
                    input.value = `Выбрано ${pick.length}`;
                } else if (pick.length == 1) {
                    input.value = pick[0];
                } else {
                    input.value = " ";
                }
            })
        })
    })
}