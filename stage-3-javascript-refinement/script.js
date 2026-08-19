/* Stage 3 – JavaScript & Refinement
   Purposeful client-side scripting added to the Stage 2 responsive website.
*/

document.addEventListener("DOMContentLoaded", () => {
    setTimeBasedGreeting(new Date().getHours());
    initialiseTheme();
    initialiseMenu();
    initialiseContactForm();
    initialiseScrollToTop();
});

/* ---------- Feature 1: function + parameter + selection ---------- */
function getGreeting(hour) {
    if (hour < 12) {
        return "Good morning";
    } else if (hour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

function setTimeBasedGreeting(hour) {
    const heading = document.getElementById("welcome-message");

    if (heading) {
        heading.textContent = `${getGreeting(hour)} – welcome to Hot Wheels`;
    }
}

/* ---------- Feature 2: persistent theme preference ---------- */
function initialiseTheme() {
    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) {
        return;
    }

    const savedTheme = localStorage.getItem("hot-wheels-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateThemeButton(themeButton);

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        const theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";

        localStorage.setItem("hot-wheels-theme", theme);
        updateThemeButton(themeButton);
    });
}

function updateThemeButton(button) {
    const darkModeOn = document.body.classList.contains("dark-theme");

    button.textContent = darkModeOn ? "Light mode" : "Dark mode";
    button.setAttribute(
        "aria-label",
        darkModeOn ? "Switch to light theme" : "Switch to dark theme"
    );
}

/* ---------- Feature 3: responsive navigation ---------- */
function initialiseMenu() {
    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const menuOpen = navigation.classList.toggle("menu-open");

        menuButton.setAttribute("aria-expanded", String(menuOpen));

        const hiddenLabel = menuButton.querySelector(".visually-hidden");
        if (hiddenLabel) {
            hiddenLabel.textContent = menuOpen
                ? "Close navigation menu"
                : "Open navigation menu";
        }
    });
}

/* ---------- Feature 4: form validation ---------- */
function initialiseContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const errors = validateContactForm(form);

        if (errors.length > 0) {
            showMessages(status, errors, "error");
        } else {
            showMessages(
                status,
                ["Example validation passed. No data has been sent."],
                "success"
            );
        }
    });
}

/* Demonstrates a function with a parameter, an array, iteration and decisions. */
function validateContactForm(form) {
    const errors = [];

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    const checks = [
        {
            valid: name.length >= 2,
            message: "Enter a name containing at least 2 characters."
        },
        {
            valid: email.includes("@") && email.includes("."),
            message: "Enter an email address in a valid format."
        },
        {
            valid: message.length >= 10,
            message: "Enter a message containing at least 10 characters."
        }
    ];

    checks.forEach((check) => {
        if (!check.valid) {
            errors.push(check.message);
        }
    });

    return errors;
}

function showMessages(container, messages, type) {
    container.className = `form-status ${type}`;
    container.replaceChildren();

    const list = document.createElement("ul");

    messages.forEach((message) => {
        const item = document.createElement("li");
        item.textContent = message;
        list.appendChild(item);
    });

    container.appendChild(list);
}

/* ---------- Feature 5: scroll-to-top interaction ---------- */
function initialiseScrollToTop() {
    const button = document.getElementById("scroll-top");

    if (!button) {
        return;
    }

    function updateVisibility() {
        button.classList.toggle("visible", window.scrollY > 300);
    }

    window.addEventListener("scroll", updateVisibility);
    updateVisibility();

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
