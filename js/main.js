//Creo le variabili per i due button 
var generateBtn = document.getElementById("generate-btn");
var cancelBtn = document.getElementById("cancel-btn");

//Creo la funzione per il btn "Genera"
generateBtn.addEventListener("click", 
    function() {
        var nameUser = document.getElementById("name").value;
        var km = document.getElementById("km").value;
        var eta = document.getElementById("fascia-eta").value;
    }
)

// Creo la funzione per il btn "Annulla"
cancelBtn.addEventListener("click", 
    function() {
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia-eta").value = "void";
    }
)