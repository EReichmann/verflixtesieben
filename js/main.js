let anzahlwuerfe1 = 0
let anzahlwuerfe2 = 0
let punktespieler1 = 0
let punkteSpieler2 = 0
let wuerfel1 = 0
let wuerfel2 = 0
let summeWuerfel
let spielerAmZug = 1

function wuerfeln() {
   if (spielerAmZug === 1) {

       wuerfel1 = 0
       wuerfel2 = 0

       anzahlwuerfe1 = anzahlwuerfe1 + 1
       wuerfel1 = Augenzahl()
       wuerfel2 = Augenzahl()
       console.log(wuerfel1)
       document.getElementById("augenzahlwuerfel1").innerHTML = "Augenzahl Würfel 1: " + wuerfel1
       console.log(wuerfel2)
       document.getElementById("augenzahlwuerfel2").innerHTML = "Augenzahl Würfel 2: " + wuerfel2
       summeWuerfel = wuerfel1 + wuerfel2

       if (summeWuerfel === 7) {
           punktespieler1 = punktespieler1 - summeWuerfel
           spielerwechsel()
           alert("Durch die 7 ist Spieler 2 an der Reihe.")
       } else {
           punktespieler1 = punktespieler1 + summeWuerfel
       }

       document.getElementById("ausgabePunkteSpieler1").innerHTML = "Punktzahl Spieler 1 = " + punktespieler1

       console.log(spielerAmZug)

   }if (spielerAmZug === 2){

        wuerfel1 = 0
        wuerfel2 = 0

        anzahlwuerfe2 = anzahlwuerfe2 + 1
        wuerfel1 = Augenzahl()
        wuerfel2 = Augenzahl()
        console.log(wuerfel1)
        document.getElementById("augenzahlwuerfel1").innerHTML = "Augenzahl Würfel 1: " + wuerfel1
        console.log(wuerfel2)
        document.getElementById("augenzahlwuerfel2").innerHTML = "Augenzahl Würfel 2: " + wuerfel2
        summeWuerfel = wuerfel1 + wuerfel2
        console.log(summeWuerfel)

        if (summeWuerfel === 7) {
            punkteSpieler2 = punkteSpieler2 - summeWuerfel
            alert("Das Spiel wurde durch eine 7 beendet. Kommen wir nun zur Auswertung!")
        } else {
            punkteSpieler2 = punkteSpieler2 + summeWuerfel
        }
        document.getElementById("ausgabePunkteSpiler2"). innerHTML = "Punktzahl Spieler 2= " + punkteSpieler2
    }

   if (anzahlwuerfe1 === anzahlwuerfe2){
       document.getElementById("wuerfel").disabled = true
   }



}

function spielerwechsel() {
    spielerAmZug = spielerAmZug + 1

    if (spielerAmZug === 2){
        alert("Nun würfelt Spieler 2!")
    }

    if (spielerAmZug >= 3){
        alert("Das Spiel ist beendet. Kommen wir nun zur Auswertung!")
    }
}

function Augenzahl() {
   return Math.round((Math.random() * 5) +1)
}
