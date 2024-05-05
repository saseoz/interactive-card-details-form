const payForm = document.getElementById("payment-form");

const cardName = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

const errors = document.querySelectorAll(".error-msg");
const inputs = document.querySelectorAll("input");

function nameValidate() {
    var namePattern = /^[a-zA-Z\s]+$/;
    if (cardName.value === "") {
        cardName.nextElementSibling.innerText = "Can't be blank";
        return false;
    } else if (!namePattern.test(cardName.value)) {
        cardName.nextElementSibling.innerText = "Please enter a valid name";
        return false;
    } else {
        return true;
    }
}

function cardNumberValidate() {
    var numberPattern = /^(\d{4} ?){4}$/;
    var nonNumericPattern = /\D/;
    if (cardNumber.value === "") {
        cardNumber.nextElementSibling.innerText = "Can't be blank";
        return false;
    } else if (!nonNumericPattern.test(cardNumber.value) || !numberPattern.test(cardNumber.value)) {
        cardNumber.nextElementSibling.innerText = "Wrong format, numbers only";
        return false;
    } else {
        return true;
    }
}

function monthValidate() {
    if (month.value === "") {
        month.parentElement.nextElementSibling.innerText = "Can't be blank";
        return false;
    } else if (month.value < 1 || month.value > 12) {
        month.parentElement.nextElementSibling.innerText = "Invalid date";
        return false;
    } else {
        return true;
    }
}

function yearValidate() {
    if (year.value === "") {
        year.parentElement.nextElementSibling.innerText = "Can't be blank";
        return false;
    } else if (year.value < 24 || year.value > 34) {
        year.parentElement.nextElementSibling.innerText = "Invalid date";
        return false;
    } else {
        return true;
    }
}

function cvcValidate() {
    if (cvc.value === "") {
        cvc.nextElementSibling.innerText = "Can't be blank";
        return false;
    } else {
        return true;
    }
}

payForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    if (!nameValidate()) {
        cardName.style.borderColor = "red";
        valid = false;
    } else {
        cardName.style.borderColor = "";
        cardName.nextElementSibling.innerText = "";
    }

    if (!cardNumberValidate()) {
        cardNumber.style.borderColor = "red";
        valid = false;
    } else {
        cardNumber.style.borderColor = "";
        cardNumber.nextElementSibling.innerText = "";
    }

    if (!monthValidate()) {
        month.style.borderColor = "red";
        valid = false;
    } else {
        month.style.borderColor = "";
        month.parentElement.nextElementSibling.innerText = "";
    }

    if (!yearValidate()) {
        year.style.borderColor = "red";
        valid = false;
    } else {
        year.style.borderColor = "";
        month.parentElement.nextElementSibling.innerText = "";
    }

    if (!cvcValidate()) {
        cvc.style.borderColor = "red";
        valid = false;
    } else {
        cvc.style.borderColor = "";
        cvc.nextElementSibling.innerText = "";
    }

    const mainWrap = document.getElementById("main-wrap");
    let completeState = document.createElement("div");
    completeState.classList.add("main-wrap");
    
    if (valid === true) {
        mainWrap.innerHTML = `
        <div class="completed-state">
            <img src="images/icon-complete.svg" alt="">
            <h1 class="completed-title">THANK YOU!</h1>
            <p class="completed-descr">We've added your card details.</p>
            <form action="">
                <button type="submit" class="completed-btn">Continue</button>
            </form>
        </div>
        `;
    }
    
});

inputs.forEach(function(i) {
    i.addEventListener("keyup", function() {
        if (i.id === "name") {
            const frontName = document.getElementById("front-name");
            frontName.innerText = cardName.value;
        } 
        if (i.id === "card-number") {
            const frontNumber = document.getElementById("front-number");
            frontNumber.innerText = cardNumber.value;
        } 
        if (i.id === "month") {
            const frontMonth = document.getElementById("front-month");
            frontMonth.innerText =  month.value;
        }
        if (i.id === "year") {
            const frontYear = document.getElementById("front-year");
            frontYear.innerText =  year.value;
        }
        if (i.id === "cvc") {
            const backCvc = document.getElementById("back-cvc");
            backCvc.innerText =  cvc.value;
        }
    }) 
    
})

cardNumber.addEventListener("input", function(event) {
    var cleanedValue = event.target.value.replace(/[^0-9a-zA-Z]+/g, '');
    var formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ').trim();
    event.target.value = formattedValue;
});

month.addEventListener("input", function(event) {
    var value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        event.target.value = value.slice(0, 2); 
    } else {
        event.target.value = value; 
    }
});
year.addEventListener("input", function(event) {
    var value = event.target.value.replace(/\D/g, ''); 
    if (value.length > 2) {
        event.target.value = value.slice(0, 2); 
    } else {
        event.target.value = value; 
    }
});

cvc.addEventListener("input", function(event) {
    var numericValue = event.target.value.replace(/\D/g, ''); 

    if (numericValue.length > 3) {
        event.target.value = numericValue.slice(0, 3);
    } else {
        event.target.value = numericValue; 
    }
});