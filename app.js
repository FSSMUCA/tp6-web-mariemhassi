 let history = [];

function calculer() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let op = document.getElementById("op").value;

    if (a === "" || b === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    a = Number(a);
    b = Number(b);

    if (op === "/" && b === 0) {
        alert("La division par zéro est interdite.");
        return;
    }

    let result = 0;

    switch(op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }

    document.getElementById("resultat").innerHTML = "Résultat : " + result;

    const operation = `${a} ${op} ${b} = ${result}`;
    history.push(operation);

    afficherHistorique();
}

function afficherHistorique() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    history.forEach(op => {
        let li = document.createElement("li");
        li.textContent = op;
        list.appendChild(li);
    });
}
