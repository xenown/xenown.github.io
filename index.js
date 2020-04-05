const main = () => {
    let label = document.getElementsByClassName("label")[0];
    let shield = document.getElementsByClassName("fa-shield-alt")[0];
    shield.onmouseover = function() {
        label.textContent = "Web Security";
    };
    shield.onmouseleave = function() {
        label.textContent = "";
    };
    let database = document.getElementsByClassName("fa-database")[0];
    database.onmouseover = function() {
        label.textContent = "Database Implementation";
    };
    database.onmouseleave = function() {
        label.textContent = "";
    };
    let network = document.getElementsByClassName("fa-project-diagram")[0];
    network.onmouseover = function() {
        label.textContent = "Distributed Computing";
    };
    network.onmouseleave = function() {
        label.textContent = "";
    }
}

window.onload = main;
