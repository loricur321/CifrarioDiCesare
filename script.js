var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toUpperCase().split("");

//Cifratura
function Cifra(){
    var fraseDaCifrare = document.getElementById("fraseDaCifrare").value.toUpperCase().split("");
    var chiave = parseInt(document.getElementById("chiaveCifratura").value);
    var bitFrase = new Array(fraseDaCifrare.length);

    if(chiave <= 0 || chiave > 25)
    {
        alert("La chiave di cifratura deve essere compresa tra 1 e 25!")
        chiave = 1;
    }

    for(let i = 0; i < fraseDaCifrare.length; i++)
    {
        bitFrase[i] = fraseDaCifrare[i].charCodeAt(0);

        if(bitFrase[i] < 65 || bitFrase[i] > 90)
        {
            alert("La frase deve essere composta da lettere dell'alfabeto!")
            break;
        }
    }

    var contatore; //calcolo le lettere in più in caso il codice superi l'ascii code della lettera Z

    for(let i = 0; i < fraseDaCifrare.length; i++)
    {
        contatore = 0;

        bitFrase[i] = bitFrase[i] + chiave;

        if(bitFrase[i] > 90) //90 è Z
        {
            contatore = bitFrase[i] - 90;
            bitFrase[i] = alfabeto[contatore - 1].charCodeAt(0);
        }
    }

    var result = RicomponiStringa(bitFrase);
    document.getElementById("risultatoCifratura").innerHTML = result;
}

//----------------------------------------------------------------------------------------------
//Decifratura

function Decifratura(){
    var fraseDaDecifrare = document.getElementById("fraseDaDecifrare").value.toUpperCase().split("");
    var chiave = parseInt(document.getElementById("chiaveDecifratura").value);
    var bitFrase = new Array(fraseDaDecifrare.length);

    if(chiave <= 0 || chiave > 25)
    {
        alert("La chiave di decifratura deve essere compresa tra 1 e 25!")
        chiave = 1;
    }

    for(let i = 0; i < fraseDaDecifrare.length; i++)
    {
        bitFrase[i] = fraseDaDecifrare[i].charCodeAt(0);

        if(bitFrase[i] < 65 || bitFrase[i] > 90)
        {
            alert("La frase deve essere composta da lettere dell'alfabeto!")
            break;
        }
    }

    var contatore; 

    for(let i = 0; i < fraseDaDecifrare.length; i++)
    {
        contatore = 0;

        bitFrase[i] = bitFrase[i] - chiave;

        if(bitFrase[i] < 65) //65 è A
        {
            contatore = bitFrase[i] + 65; //Calcolo il codice del caratere giusto aggiungendo 65 (codice della prima lettera dell'alfabeto A)
            bitFrase[i] = alfabeto[contatore - 1].charCodeAt(0);
        }
    }

    var result = RicomponiStringa(bitFrase);
    document.getElementById("risultatoDecifratura").innerHTML = result;
}

//----------------------------------------------------------------------------------------------
//Ricomposizione stringa (da codici ascii a caratteri)
function RicomponiStringa(bitFrase){
    let retVal = "";

    bitFrase.forEach(bit => {
        for(let i = 65; i <= 90; i++)
        {
            if(bit == i)
                retVal += alfabeto[i - 65];
        }
    });

    return retVal;
}