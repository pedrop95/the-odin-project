const container = document.querySelector("#container");
const redP = document.createElement('p');
const header3 = document.createElement('h3');
const blackDiv = document.createElement('div');
const header1 = document.createElement('h1');
const meTooP = document.createElement('p');

container.appendChild(redP);
redP.textContent = "Hey I'm red!";
redP.style.color = "red";

container.appendChild(header3);
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

container.appendChild(blackDiv);
blackDiv.style.border = "2px solid black";
blackDiv.style.backgroundColor = "pink";

blackDiv.appendChild(header1);
header1.textContent = "I'm in a div";

blackDiv.appendChild(meTooP);
meTooP.textContent = "ME TOO!"