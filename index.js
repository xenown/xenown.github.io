const main = () => {
    debugger;
    let shield = document.getElementsByClassName("fa-shield-alt");
    shield.onmouseover = () => {
        let label = document.getElementsByClassName("label");
        label.textContent = "Web Security";
    }
    let database = document.getElementsByClassName("fa-database");
    database.onmouseover = () => {
        let label = document.getElementsByClassName("label");
        label.textContent = "Database Implementation";
    }
    let network = document.getElementsByClassName("fa-project-diagram");
    network.onmouseover = () => {
        let label = document.getElementsByClassName("label");
        label.textContent = "Distributed Computing";
    }
}

window.onload = main;
