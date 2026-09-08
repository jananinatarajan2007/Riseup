 // =========================
// Rise Up JavaScript
// Part 5
// =========================

// Welcome Message

window.onload = function () {

    console.log("Welcome to Rise Up");

};

// -------------------------
// Join Button
// -------------------------

const joinButton = document.querySelector(".join-btn");

if (joinButton) {

    joinButton.addEventListener("click", function () {

        document.getElementById("join").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// -------------------------
// Get Started Button
// -------------------------

const startButton = document.querySelector(".start-btn");

if (startButton) {

    startButton.addEventListener("click", function () {

        document.getElementById("features").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// -------------------------
// Learn More Button
// -------------------------

const learnButton = document.querySelector(".learn-btn");

if (learnButton) {

    learnButton.addEventListener("click", function () {

        document.getElementById("about").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// -------------------------
// Join Form Validation
const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        console.log("Form submitted");

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            const data = await response.json();

            alert(data.message);

            form.reset();

        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    });
}