//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//Ciklusal végiglépkedek az eltárolt .btn classú gombokon
btns.forEach((btn) => {

    
    //Az összes gomb közül arra kattintok rá, amelyik a ciklusfutáskor következik
    btn.addEventListener("click", (e) => {

        //Megnézzük, hogy az aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //Megnézzük, hogy a megkattintott gomb tartalmazza-e a "decrease" classt
        if(style.contains("decrease")){

            //Ha igen, akkor az alapértékünket csökkentjük
            count--;
        }
         //Megnézzük, hogy a megkattintott gomb tartalmazza-e a "increase" classt
        else if(style.contains("increase")){
            
            //Ha igen, akkor az alapértékünket növeljük
            count++;
        }
        //Ha ezek közül egyik sem, tehát kizárásos alapon maradt a "reset"
        else{

            //Akkor az alapértéket visszaállítjük 0-ra
            count = 0;
        }


        //Adjuk hozzá a színeket, annak függvényében, hogy a szám pozotív vagy negatív értékű

        if(count > 0){

            value.style.color = "green";
        }
        else if(count < 0){

            value.style.color = "red";
        }
        else{

            value.style.color = "black";
        }

        //Beletöltjük a spanbe az alapértkünk aktális értékét
        value.textContent = count;
    })

    
})

