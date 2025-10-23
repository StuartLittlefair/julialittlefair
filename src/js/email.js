const url = "https://script.google.com/macros/s/AKfycbxM_APL0AsfFaGGTzo8SAG7n9tMMEqCYGgCPWt8wE_LDY2Jj2Ve_vGYuaJgyz5mrzSP/exec";

const form = document.getElementById("email-form");
const username = document.getElementById("name");
const mail = document.getElementById("mail");
const message = document.getElementById("message");

form.addEventListener("submit", onSubmit);

mail.value = "s.littlefair@gmail.com";
username.value = "Stuart Littlefair";
message.value = "Hello, I would like to enquire about booking an English lesson.";

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
    document.getElementById("submit").disabled = true;
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
            document.getElementById("submit").disabled = false;
            if (json.status === "success") {
                toggleModal(true);
            } else {
                toggleModal(false);
            }
        }
    );

}

