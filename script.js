/* =========================================
   BYTEZONE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open");

        }
    );

}


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeButton =
    document.querySelector("#themeBtn");


const savedTheme =
    localStorage.getItem("bytezoneTheme");


if (savedTheme) {

    document.documentElement.dataset.theme =
        savedTheme;

}


function updateThemeIcon() {

    if (!themeButton) return;

    if (
        document.documentElement.dataset.theme
        === "dark"
    ) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

}


updateThemeIcon();


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const dark =
                document.documentElement.dataset.theme
                !== "dark";


            if (dark) {

                document.documentElement.dataset.theme =
                    "dark";

                localStorage.setItem(
                    "bytezoneTheme",
                    "dark"
                );

            } else {

                document.documentElement.dataset.theme =
                    "light";

                localStorage.setItem(
                    "bytezoneTheme",
                    "light"
                );

            }


            updateThemeIcon();

        }
    );

}


/* =========================================
   PRODUCT POPUP
========================================= */

const productButtons =
    document.querySelectorAll(
        ".product-btn"
    );


const modal =
    document.querySelector(
        "#productModal"
    );


const modalName =
    document.querySelector(
        "#modalName"
    );


const modalDescription =
    document.querySelector(
        "#modalDescription"
    );


const modalPrice =
    document.querySelector(
        "#modalPrice"
    );


const closeButton =
    document.querySelector(
        ".close"
    );


productButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                modalName.textContent =
                    button.dataset.name;

                modalDescription.textContent =
                    button.dataset.description;

                modalPrice.textContent =
                    button.dataset.price;

                modal.classList.add(
                    "show"
                );

            }
        );

    }
);


/* CLOSE MODAL */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            modal.classList.remove(
                "show"
            );

        }
    );

}


/* CLICK OUTSIDE MODAL */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const forms =
    document.querySelectorAll(
        ".contact-form"
    );


forms.forEach(
    function (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                alert(
                    "Thank you for contacting ByteZone! 💙\n\nWe will get back to you soon."
                );


                form.reset();

            }
        );

    }
);