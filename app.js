const check = document.getElementById("check");
const h1 = document.getElementById("h1");
const nav = document.getElementById("nav");
const links = document.querySelectorAll('nav ul li a');
const body = document.getElementsByTagName("body")[0]; 

const toggleTheme = () => {
    let checkbox = check.querySelector('input');
    if (checkbox.checked) {
        body.style.backgroundColor = "black"; 
        h1.style.color = "white"; 
        body.style.color = "white"; 
        nav.style.backgroundColor = "white";
        links.forEach(link => link.style.color = "black");
    } else {
        body.style.backgroundColor = ""; 
        body.style.color = ""; 
        h1.style.color = "white"; 
        nav.style.backgroundColor = "";
        links.forEach(link => link.style.color = "");
    }
};

check.addEventListener("click", toggleTheme);
