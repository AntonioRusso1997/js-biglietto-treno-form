//Creo le variabili per i due button 
var generateBtn = document.getElementById("generate-btn");
var cancelBtn = document.getElementById("cancel-btn");

//Creo variabile prezzo
var priceKm = 0.21;
var price = priceKm * km;

//Creo la funzione per il btn "Genera"
generateBtn.addEventListener("click", 
    function() {
        //variabili degli input inseriti dall'utente
        var nameUser = document.getElementById("name").value;
        document.getElementById("ticket-name").innerHTML = nameUser;
        var km = document.getElementById("km").value;
        var eta = document.getElementById("fascia-eta").value;
        
        //Calcolo prezzi biglietto
        var priceKm = 0.21;
        var price = priceKm * km;

        if (eta == "min") 
        {
            var priceMin = price * 0.8;
            console.log("prezzo minorenni: " + priceMin.toFixed(2) + " €");
            document.getElementById("ticket-price").innerHTML = priceMin.toFixed(2) + " €";
            document.getElementById("ticket-type").innerHTML = "Biglietto junior";
        } 
        else if (eta == "over")
        {
            priceMag = price * 0.6;
            console.log("prezzo over 65: " + priceMag.toFixed(2) + " €");
            document.getElementById("ticket-price").innerHTML = priceMag.toFixed(2) + " €";
            document.getElementById("ticket-type").innerHTML = "Biglietto senior";
        }
        else
        {
            console.log ("prezzo intero: " + price.toFixed(2) + " €");
            document.getElementById("ticket-price").innerHTML = price.toFixed(2) + " €";
            document.getElementById("ticket-type").innerHTML = "Biglietto standard";
        }
        

        //Codice casuale del ticket
        document.getElementById("ticket-code").innerHTML = randomCode(90000,100000);
        function randomCode(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        
        //Numero della carrozza
        document.getElementById("ticket-carriage").innerHTML = randomCarriage(1,10);
        function randomCarriage(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        //Comparsa della sezione "Il tuo biglietto"
        var ticketTab = document.getElementById("ticket");
        ticketTab.style.display = "block";

        //Animazione "a comparsa"
        var ticketTab = document.getElementById("ticket");
        ticketTab.className = ticketTab.classList + " ticket-animation";    
    }
)

// Creo la funzione per il btn "Annulla"
cancelBtn.addEventListener("click", 
    function() {
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia-eta").value = "void";

        //Scomparsa della sezione "Il tuo biglietto"
        var ticketTab = document.getElementById("ticket");
        ticketTab.style.display = "none";
    }
)