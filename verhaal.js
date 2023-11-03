let readlineSync = require('readline-sync');
 
console.log("Je bevindt je in een donker bos. De maan verlicht zwakjes je pad. Voor je zie je twee verschillende paden. ");

let tekst1 = ("Je volgt het linkerpad en komt bij een brug die over een diepe kloof leidt. De brug ziet er oud en verroest uit. ");

let tekst2 = ("Je neemt het rechterpad en loopt een open veld in. Daar is het licht zo vel dat je verblind word en neer valt. Slecht einde 1/10 .");

let tekst3 = ("Je loopt langzaam over de brug bang dat als je te snel gaat de brug zou inzakken. Je zet je voeten weer op de grond en vind een klein huisje voor je voeten.");

let tekst4 = ("Je kijkt om je heen en ziet geen ander pad dus loopt maar over de brug heen. Aan het einde van de brug vind je een klein huisje voor je voeten.");

let tekst5 = ("Je pakt het huisje op en probeert naar binnen te kijken. Je opent het deurtje en opeens word je naar binnen gezogen. Eenmaal binnen bevind je je in een woonkamer. ");

let tekst6 = ("Je trapt het huisje stuk maar voelt opeens iets door je voet heen steken, je probeert het te negeren maar bloed dood. Slecht einde  2/10 ");

let tekst7 = ("Je kijkt om je heen, het is nog best knus. Je ziet twee deuren die naar andere kamers gaan. Opeens komt er iets of iemand uit een van de deuren.");

let tekst8 = ("Je roept uit hopend dat iemand die je zou kunnen uitleggen wat er aan de hand is en opeens komt er iets of iemand uit een van de deuren.");

let tekst9 = ("Je rent snel door de voordeur naar buiten.")

let tekst10 = ("Het beek een monster te zijn en ren je door de voordeur naar buiten. ");

let tekst11 = ("Je verstopt jezelf in een struik en je ziet een verschrikkelijk monster naar buiten rennen. ");

let tekst12 = ("Je blijft maar rennen zonder te kijken en valt in een ravijn je wordt levend gespiesd door een stalactiet en bloed dood. Slecht einde 3/10. ");

let tekst13 = ("Je scheet was te hard en je bent verraden het monster grijpt je uit de struiken en scheurt je in twee. Scheet einde, 4/10. ");

let tekst14 = ("Je laat een boer gelukkig was je boer zacht en hoort het monster je niet en loopt het huis weer binnen. ");

let tekst15 = ("Je besluit het huis in te gaan en je sluipt achter het monster aan. ");

let tekst16 = ("Je blijft te lang zitten en wordt gepakt en opgepeuzeld door een spin! Slecht einde, 5/10");

let tekst17 = ("Je rent de trap op struikelt en valt keihard de trap af je ligt met je hoofd tussen de voeten van het monster je ziet wazig en valt in slaap en wordt wakker in een kelder en je hele lichaam is vastgeketend je kan geen hand voor ogen zien en het is ijskoud je zit voor eeuwig vast. Slecht einde 6/8");

let tekst18 = ("Je steekt het monster in zijn rug hij valt dood neer. je ziet een kleurrijk en velle bal! ");

let tekst19 = ("Je besluit de magische bal aan te raken en je begint weer te groeien naar je normale lengte! Goed einde 7/10");

let tekst20 = ("Terwijl je aan het verkennen bent vind je een magisch zwaard en rent ermee naar buiten en je ziet een leger van monsters.");

let tekst21 = ("Je vecht met het leger van duizenden monsters het is een bloeddorstig gevecht je dood honderden monsters maar uiteindelijk word je overspoeld door alle lichamen en raak je vast te zitten en word je afgeslacht door het leger. Slecht einde 8/10");

let tekst22 = ("Je rent weg en komt op een open plek met een grote rots er is geen kant meer op om te rennen.");

let tekst23 = ("Je accepteert je lot en wordt afgeslacht door het leger van monsters. Slecht einde 9/10");

let tekst24 = ("Je klimt de rots met hoop dat je overleeft, maar je glijdt uit over een kei en valt tot je dood. Slecht einde 10/10");
 
let keuze1 = readlineSync.question('Wat wil je doen? 1. Neem het linkerpad, 2. Neem het rechterpad. ');
if (keuze1 == 1){
    console.log(tekst1);
    } else if( keuze1 == 2){
        console.log(tekst2);
        process.exit();
    }
 
let keuze2 = readlineSync.question('Wat wil je doen? 1. Loop over de brug, 2. Zoek een ander pad. ');
if(keuze2 == 1){
    console.log(tekst3);
    }else if(keuze2 == 2){
        console.log(tekst4)
        }
 
let keuze3 = readlineSync.question('Wat wil je doen? 1. Pak het huisje op en bestudeer het, 2. Trap het huisje stuk en loop door.');
if(keuze3 == 1){
    console.log(tekst5);
}else if(keuze3 == 2){
    console.log(tekst6);
    process.exit();
}
 
let keuze4 = readlineSync.question('Wat wil je doen? 1. Kijk om je heen, 2. Roep uit om te zien of er iemand is. ');
if(keuze4 == 1){
    console.log(tekst7);
}else if(keuze4 == 2){
    console.log(tekst8);
}
 
let keuze5 = readlineSync.question('Wat wil je doen? 1. Probeer weg te komen, 2. Vraag het persoon om hulp. ');
if(keuze5 == 1){
    console.log(tekst9);
}else if(keuze5 == 2){
    console.log(tekst10);
}
 
let keuze6 = readlineSync.question('Wat wil je doen? 1. Je verstopt jezelf, 2. Je rent als een kip zonder kop vooruit. ');
if(keuze6 == 1){
    console.log(tekst11);
}else if (keuze == 2){
    console.log(tekst12);
    process.exit();
}
 
let keuze7 = readlineSync.question('Wat wil je doen? 1. Laat een scheet van de angst, 2. Laat een boer van de angst. ');
if(keuze7 == 1){
    console.log(tekst13);
    process.exit();
}else if(keuze7 == 2){
    console.log(tekst14);
}
 
let keuze8 = readlineSync.question('Wat wil je doen? 1. Ga terug het huis in achter het monster aan, 2. Je blijft zitten in de struik. ');
if(keuze8 == 1){
    console.log(tekst15);
}else if(keuze8 == 2){
    console.log(tekst16);
    process.exit();
}
 
let keuze9 = readlineSync.question('Wat wil je doen? 1. Ren de trap op!, 2. Steek het monster in zijn rug. ');
if(keuze9 == 1){
    console.log(tekst17);
    process.exit();
}else if(keuze9 == 2){
    console.log(tekst18);
}
 
let keuze10 = readlineSync.question('Wat wil je doen? 1. Raak de magische bal aan., 2. Ga verder het huis ontdekken. ');
if(keuze10 == 1){
    console.log(tekst19);
    process.exit();
}else if(keuze10 == 2){
    console.log(tekst20);
}
 
let keuze11 = readlineSync.question('Wat wil je doen? 1. Vecht tegen het leger van monsters, 2. Ren weg in stress. ');
if(keuze11 == 1){
    console.log(tekst21);
    process.exit();
}else if(keuze11 == 2){
    console.log(tekst22);
}
 
let keuze12 = readlineSync.question('Wat wil je doen? 1. Accepteer je lot, 2. Probeer te rots klimmen. ');
if(keuze12 == 1){
    console.log(tekst23);
    process.exit();
}else if(keuze12 == 2){
    console.log(tekst24);
    process.exit();
}
