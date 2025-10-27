const url = "https://script.google.com/macros/s/AKfycbx9jewdSQ1xKVceR7_jMXFFiKkbG9fF_3QfuMoqbzqEgr29a7VKmzFv6ntNq8GghcC8iQ/exec";

const form = document.getElementById("email-form");
const username = document.getElementById("name");
const mail = document.getElementById("mail");
const message = document.getElementById("message");

form.addEventListener("submit", onSubmit);


function onSubmit(event) {
    console.log('Form submitted');
    event.preventDefault();

    if (username.value === "") {
        username.setAttribute("aria-invalid", "true");
    } else {
        username.removeAttribute("aria-invalid");
    }
    if (mail.value === "") {
        mail.setAttribute("aria-invalid", "true");
    } else {
        mail.removeAttribute("aria-invalid");
    }
    if (message.value === "") {
        message.setAttribute("aria-invalid", "true");
    } else {
        message.removeAttribute("aria-invalid");
    }
    if (username.value === "" || mail.value === "" || message.value === "") {
        alert("Please fill in all fields.");
        return;
    }

    const myObject = {
        subject: "English lesson enquiry",
        name: username.value,
        email: mail.value,
        message: message.value
    };
    addSendMail(myObject);
}

function addSendMail(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    let button = document.getElementById("submit");
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    button.setAttribute("aria-label", "Sending email");
    fetch(url, {
        redirect: 'follow',
        method: "POST",
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
    }
    ).then(
        res => res.json()
    ).then(
        json => {
            console.log(json);
            button.disabled = false;
            button.removeAttribute("aria-busy");
            button.removeAttribute("aria-label");
            if (json.status === "success") {
                toggleModal(true);
            } else {
                toggleModal(false);
            }
        }
    );

}

