// GRIMORIO ESTRAPOLATO DAL D&d 5E PLAYER HANDBOOK
// console.log(checkIfDurationIsLine6(grimorioStringPHB)); // Tutto funziona
// console.log(correctSpellList(listaIncantesimi)); // Tutto funziona


// Oggetto contenenente il nome del caster e i suoi incantesimi in array.
let objCastersArr = objClassesArrSpellLists(listaIncantesimi);

// Array contenente i nomi di tutti gli incantesimi presi una volta sola e ordinati alfabeticamente.
// N.B. non e' stato fabbricato da grimArr ma da listeIncantesimi_grimorioPHB.js, in modo da avere un riscontro a due fattori
let allSpellTitlesArr = allSpellsUniqueArray();

// Grimorio:  array con indici tutti gli oggetti contenenti gli incantesimi.
let grimArr = grimorioCreation(grimorioStringPHB); 

// Aggiunge ad ogni incantesimo oggetto di grimArr chi sono gli utilizzatori
for (let spell of grimArr) {
  spell.casters = [];
  for (let caster in objCastersArr) {
    for (let i of objCastersArr[caster]) {
      if (spell.title === i) spell.casters.push(caster);
    }
  }
}


// console.log(grimArr); // Tutto funziona
// console.log(objCastersArr); // Tutto funziona
// console.log(allSpellTitlesArr); // Tutto funziona



//----------------------------------------//



// arrayUniqueValues: 
// questa funzione se chiamata con un array come argomento, 
// restituisce un diverso array con valori non ripetuti.
// console.log(arrayUniqueValues([1,2,2,3,4,4,5,5]));
// restituisce [1,2,3,4,5]
function arrayUniqueValues (arr) {
  let arrayUniqueValues = [];
  let state = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrayUniqueValues.length; j++) {
      if(arr[i] === arrayUniqueValues[j]) state = false;
    }    
    if (state === true) arrayUniqueValues.push(arr[i])
    state = true;
  }

  return arrayUniqueValues;
};

// grimorioCreation: 
// questa funzione si occupa di estrapolare il grimorio dalla variabile grimorio in grimorio.js e
// creare un array 'grimArr' avente come indici gli incantesimi singoli in formato oggetto.
function grimorioCreation (grimorio) {
  let grimorioArray = [];

  function schoolAndLevel (sAl, type) {
    if (sAl[0] === 'Trucchetto' && type === 'school') {
      return sAl[2];
    } else if (sAl[0] === 'Trucchetto' && type === 'level') {
      return sAl[0];
    } else if (sAl[0] !== 'Trucchetto' && type === 'school') {
      return sAl[0];
    } else if (sAl[0] !== 'Trucchetto' && type === 'level') {
      return sAl[2];
    }
  }

  for (let spell of grimorio.slice(1).split('\n\n')) {
    grimorioArray.push({
      title : spell.split('\n')[0],
      magicSchool : schoolAndLevel(spell.split('\n')[1].split(' '), 'school'),
      magicLevel : schoolAndLevel(spell.split('\n')[1].split(' '), 'level'),
      spellcastingTime : spell.split('\n')[2].split(': ')[1],
      range : spell.split('\n')[3].split(': ')[1],
      components : spell.split('\n')[4].split(': ')[1],
      duration : spell.split('\n')[5].split(': ')[1],
      description : spell.split('\n').slice(6).join(' ')
    });
  }



  return grimorioArray;
}

// Questa funzione serve a verificare che la 'Durata' di
// tutti gli incantesimi sia in ogni incantesimo nella 6 riga.
// Per farlo restituisce un array con i titoli degli incantesimi
// che non rispettano la regola, se non ce ne sono restituisce 'Grimorio con "Durata" nella posizione giusta!!!'.
function checkIfDurationIsLine6 (str) {
  let arr = [];
  for (let spell of str.slice(1).split('\n\n')) {
    if (spell.split('\n')[5].split(' ')[0] !== 'Durata:') {
      arr.push(spell.split('\n')[0]);
    }
  }
  if (arr.length === 0) return 'Grimorio con "Durata" nella posizione giusta!!!';
  return arr;
}

// correctSpellList:
// Questa funzione raffronta le liste degli incantesimi di ogni classe presenti in listeincantesimi_grimorioPHB.js con 
// i titoli degli incantesimi presenti in grimorioPHB.js restituendo un log con le liste divise per classe e array dei
// corrispettivi incantesimi per lista che non combaciano con quelli scritti nel grimorio. Quelli che non combaciono,
// sono errori da sistemare. Se invece non ci sono risultati vuol dire che tutto combacia e ogni lista resituira'
// la scritta "Tutti gli incantesimi di questa lista combaciano!!!"
function correctSpellList (spellList) {
  let obj = {};
  let arrayGrimorioSpells = []
  let objFiltered = {};

  for (let classSpells in spellList) {
    obj[classSpells] = spellList[classSpells].slice(1).split('\n');
  }

  for (let i of grimorioCreation(grimorioStringPHB)) {
    arrayGrimorioSpells.push(i.title);
  }

  for (let arrayClassSpells in obj) {
    objFiltered[arrayClassSpells] = [];

    for (let spell1 of obj[arrayClassSpells]) {
      let checkPresence = false;
      for (let spell2 of arrayGrimorioSpells) {
        if (spell1.toUpperCase() === spell2.toUpperCase()) {
          checkPresence = true;
        }
      }
      if (checkPresence === false && spell1 !== '') {
        objFiltered[arrayClassSpells].push(spell1);
      }
    }

    if (objFiltered[arrayClassSpells].length === 0) {
      objFiltered[arrayClassSpells] = "Tutti gli incantesimi di questa lista combaciano!!!";
    }

  }
  return objFiltered;
}

// objClassesArrSpellLists:
// Questa funzione crea un oggetto le cui chiavi corrispondono alle classi e
// i rispettivi valori sono array contenenti gli incantesimi di quella classe.
function objClassesArrSpellLists (spellList) {
  let obj = {};

  for (let classSpells in spellList) {
    obj[classSpells.slice(11)] = spellList[classSpells].toUpperCase().slice(1).split('\n');
  }

  return obj;
}

// allSpellsUniqueArray:
// un array contenente tutti gli incanteimi di tutte le classi presi una sola volta e
// ordinati in ordine alfabetico.
function allSpellsUniqueArray () {
  let arr = [];
  for (let classSpells in objCastersArr) {
    arr = arr.concat(objCastersArr[classSpells]);
  }
  return arrayUniqueValues(arr).sort().slice(1);
}

// filterKeyValueGrimArr: DA FINIRE PER FARLA FUNZIONARE CON TUTTO!!!!!
// una funzione che restituisce un array contenente tutti gli incantesimi filtrati da
// grimArr inserendo come argomenti la chiave della proprieta' che ti interessa e 
// il valore desiderato. Se ad esempio vuoi tutti gli incantesimi del paladino ti 
// basta digitare filterKeyValueGrimArr('casters', 'Paladino');
function filterKeyValueGrimArr (key, value) {
  let arr = [];
  for (let i of grimArr) {
    for (let j of i[key]) {
      if (j === value) {
        arr.push(i);
      }
    }
  }
  return arr;
}


