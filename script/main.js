let operatore = "";

function calcola (value, obj) {
    switch (value) {
        case "reset":
            operatore = "";
            document.querySelectorAll(".operation:not(#confirm)").forEach ((button) => {
                button.style.borderColor = "black";
            });
            document.getElementById("n1").value = "";
            document.getElementById("n2").value = "";
            document.getElementById("operazione").value = "";
            document.getElementById("risultato").value = "";
            break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "sqrt":
        case "power":
            operatore = value;
            document.querySelectorAll(".operation:not(#confirm)").forEach ((button) => {
                button.style.borderColor = "black";
            });
            obj.style.borderColor = "red";
            break;
        case "=":
            let ris;
            let n1 = parseFloat(document.getElementById("n1").value);
            let n2 = parseFloat(document.getElementById("n2").value);
            if (operatore == "" || isNaN(n1) || (isNaN(n2) && operatore!="sqrt")) {
                alert("Input errati");
            } else {
                document.querySelectorAll(".operation:not(#confirm)").forEach ((button) => {
                    button.style.borderColor = "black";
                });
                if (operatore == "+") {
                    ris = n1+n2;
                } else if (operatore == "-") {
                    ris = n1-n2;
                } else if (operatore == "*") {
                    ris = n1*n2;
                } else if (operatore == "/") {
                    if (n2 != 0) {
                        ris = n1/n2;
                    } else {
                        alert("Impossibile dividere per 0");
                        operatore = "";
                        return;
                    }
                } else if (operatore == "sqrt") {
                    ris = (isNaN(n2) ? Math.pow(n1, 1/2) : Math.pow(n1, 1/n2)); //oppure sqrt per radice exp 2
                } else if (operatore == "power") {
                    ris = Math.pow(n1, n2);
                }
                document.getElementById("n1").value = ris;
                document.getElementById("n2").value = "";
                document.getElementById("operazione").value = `${n1} ${operatore} ${isNaN(n2) ?  "" : n2} = ${ris}`;
                document.getElementById("risultato").value = ris;
                console.log(operatore);
                operatore = "";
            }
            console.log(n1);
            console.log(n2);
            break;
    }
}