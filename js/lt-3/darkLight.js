let darkMode = false;

function changeTheme() {

    let body = document.body;

    let header = document.getElementById("header");

    let content = document.getElementById("content");

    let footer = document.getElementById("footer");

    let btn = document.getElementById("themeBtn");

    if (darkMode == false) {

        body.style.backgroundColor = "black";

        header.style.backgroundColor = "#333";
        header.style.color = "white";

        content.style.backgroundColor = "#444";
        content.style.color = "white";

        footer.style.backgroundColor = "#333";
        footer.style.color = "white";

        btn.innerText = "Switch to Light Mode";

        darkMode = true;

    }

    else {

        body.style.backgroundColor = "white";

        header.style.backgroundColor = "white";
        header.style.color = "black";

        content.style.backgroundColor = "white";
        content.style.color = "black";

        footer.style.backgroundColor = "white";
        footer.style.color = "black";

        btn.innerText = "Switch to Dark Mode";

        darkMode = false;

    }

}

