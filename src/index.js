import "./style.css";

class Select {
    constructor(DOMElement) {
        this.DOMElement = DOMElement;
        this.placeholder = DOMElement.querySelector('.select__text_placeholder');
        this.resultContainer = DOMElement.querySelector('.select__text_result');
        this.resultTextContainer = DOMElement.querySelector('.select__result');
        this.resultCloseBtn = DOMElement.querySelector('.select__result-close');
        this.result = [];
        this.optionsContainer = DOMElement.querySelector('.select__option-container');
        this.options = DOMElement.querySelectorAll('.select__checkbox');
        this.dropdownBtn = DOMElement.querySelector('.select__dropdown-btn');

        this.options.forEach(function(item) {
            item.addEventListener('click', function(elem) {
                // console.log(item.parentNode.querySelector('select__item-text'));
                this.togglePick(item.parentNode.querySelector('.select__item-text').textContent);
            }.bind(this));
        }.bind(this));

        this.DOMElement.addEventListener('click', function(event) {
            if (this.optionsContainer.classList.contains('select__option-container_hidden')) {
                this.showDropdown();
            } else {
                if (event.target === this.dropdownBtn) {
                    this.hideDropdown();
                }
            }
        }.bind(this));

        this.resultCloseBtn.addEventListener('click', this.uncheckALL.bind(this));
    }
    updateResult() {
        if (this.result.length > 1) {
            this.showResult(`Выбрано ${this.result.length}`);
        } else if (this.result.length === 1) {
            this.showResult(this.result[0]);
        } else {
            this.hideResult();
        }
    }
    togglePick(str) {
        if (!this.result.includes(str)){
            this.result.push(str);
        } else {
            let index = this.result.indexOf(str);
            if (index > -1) {
                this.result.splice(index, 1);
            }
        }
        this.updateResult();
    }
    uncheckALL() {
        this.options.forEach(function(item) {
            item.checked = false;
        });
        this.result = [];
        this.updateResult();
    }
    toggleDropdownBtn() {
        this.dropdownBtn.classList.toggle('select__dropdown-btn_active');
    }
    hidePlaceholder() {
        this.placeholder.classList.add('select__text_placeholder-hidden');
    }
    showPlaceholder() {
        this.placeholder.classList.remove('select__text_placeholder-hidden');
    }
    hideResult() {
        this.resultContainer.classList.add('select__text_result-hidden');
    }
    showResult(str) {
        this.resultContainer.classList.remove('select__text_result-hidden');
        this.resultTextContainer.textContent = str;
    }
    showDropdown() {
        this.optionsContainer.classList.remove('select__option-container_hidden');
        this.hidePlaceholder();
        this.toggleDropdownBtn();
    }
    hideDropdown() {
        this.optionsContainer.classList.add('select__option-container_hidden');
        if (this.result.length === 0) {
            this.showPlaceholder();
        }
        this.toggleDropdownBtn();
    }
}

const selects = document.querySelector('.select_city');

if (selects) {
    const citySelect = new Select(document.querySelector('.select_city'));
    const skillsSelect = new Select(document.querySelector('.select_skills'));
    const scheduleSelect = new Select(document.querySelector('.select_schedule'));
    const experienceSelect = new Select(document.querySelector('.select_experience'));
}

const contactBtn = document.querySelector(".contact__btn");

if (contactBtn) {
    contactBtn.addEventListener("click", function(event) {
        document.querySelectorAll(".contact__data_to-hide").forEach(function(elem){
            elem.classList.toggle("contact__data_hidden");
        })
        document.querySelector(".contact__data_to-dull").classList.toggle("contact__data_dull");
        contactBtn.classList.toggle("contact__btn_pressed");
    })
}

