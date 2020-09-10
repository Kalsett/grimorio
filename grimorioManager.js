// GRIMORIO ESTRAPOLATO DAL D&d 5E PLAYER HANDBOOK
// console.log(checkIfDurationIsLine6(grimorioStringPHB)); // Tutto funziona
// console.log(correctSpellList(listaIncantesimi)); // Tutto funziona


// Oggetto contenenente il nome del caster e i suoi incantesimi in array.
// Lasciare in questa pozione perche' serve successivamente nel codice alla creazione di grimArr.
let objCastersArr = objClassesArrSpellLists(listaIncantesimi);

// Array contenente i nomi di tutti gli incantesimi presi una volta sola e ordinati alfabeticamente.
// N.B. non e' stato fabbricato da grimArr ma da listeIncantesimi_grimorioPHB.js, in modo da avere un riscontro a due fattori
// Lasciare in questa pozione perche' serve successivamente nel codice alla creazione grimArr.
let allSpellTitlesArr = allSpellsUniqueArray();

// Grimorio:  array con indici tutti gli oggetti contenenti gli incantesimi.
let grimArr = grimorioCreation(grimorioStringPHB); 



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
    // if (spell.split('\n')[2].split(': ')[0] !== 'Tempo di Lancio') console.log('Qualcosa non va in "Tempo di Lancio" di: ', spell.split('\n')[0]);
    // if (spell.split('\n')[3].split(': ')[0] !== 'Gittata') console.log('Qualcosa non va in "Gittata" di: ', spell.split('\n')[0]);
    // if (spell.split('\n')[4].split(': ')[0] !== 'Componenti') console.log('Qualcosa non va in "Componenti" di: ', spell.split('\n')[0]);
    // if (spell.split('\n')[5].split(': ')[0] !== 'Durata') console.log('Qualcosa non va in "Durata" di: ', spell.split('\n')[0]);
    grimorioArray.push({
      title : [spell.split('\n')[0]],
      magicSchool : [schoolAndLevel(spell.split('\n')[1].split(' '), 'school')],
      magicLevel : [Number(schoolAndLevel(spell.split('\n')[1].split(' '), 'level'))],
      spellcastingTime : (function () {
        if (spell.split('\n')[2].split(': ')[1][2] === 'r') {
          return [spell.split('\n')[2].split(': ')[1].split(', che ')[0], spell.split('\n')[2].split(': ')[1].split(', che ')[1]];
        } else if (spell.split('\n')[2].split(': ')[1] === '1 azione o 8 ore') {
          return [spell.split('\n')[2].split(': ')[1].split(' o ')[0], spell.split('\n')[2].split(': ')[1].split(' o ')[1]];
        } else {
          return [spell.split('\n')[2].split(': ')[1]];
        }
      })(),
      range : (function () {
        if (spell.split('\n')[3].split(': ')[1].split('(')[0] === 'Incantatore ') {
          return [spell.split('\n')[3].split(': ')[1].split(' (')[0], spell.split('\n')[3].split(': ')[1].split(' (')[1].slice(0,-1)];
        }
        return [spell.split('\n')[3].split(': ')[1]];
      })(),
      components : (function () {
        let arr = spell.split('\n')[4].split(': ')[1].split(', ');
        let arr2 = [];
        for (let i=0; i<arr.length; i++) { 
          if (arr[i][0] === 'V' || arr[i][0] === 'S' || arr[i][0] === 'M') {
            arr2.push(arr[i][0]);
          }
        }
        if(spell.split('\n')[4].split(': ')[1].split(' (')[1]) arr2.push(spell.split('\n')[4].split(': ')[1].split(' (')[1].slice(0,-1));
        return arr2; 
      })(),
      duration : (function () {
        if (spell.split('\n')[5].split(': ')[1].split(', ')[0] === 'Concentrazione') {
          return [spell.split('\n')[5].split(': ')[1].split(', ')[0], spell.split('\n')[5].split(': ')[1].split(', ')[1]];
        } else {
          return [spell.split('\n')[5].split(': ')[1]];
        }
      })(),
      description : [spell.split('\n').slice(6).join(' ')]
    });
  }

  // Aggiunge ad ogni incantesimo oggetto di grimorioArray chi sono gli utilizzatori
  for (let spell of grimorioArray) {
    spell.casters = [];
    for (let caster in objCastersArr) {
      for (let i of objCastersArr[caster]) {
        if (spell.title[0] === i) spell.casters.push(caster);
      }
    }
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

// filterKeyValueGrimArr: DA FINIRE PER FARLA FUNZIONARE CON TUTTO!!!!! (ogni propietà di grimArr fai in modo che come valore sia un array contenete quel che serve)
// una funzione che restituisce un array contenente tutti gli incantesimi filtrati dal
// grimorio che in quel momento viene usato come base di riferimento (quindi non necessariamente grimArr). 
// Inserendo quindi come argomenti: il grimorio di riferimento in quel momento, 
// la chiave della proprieta' che ti interessa e il suo valore desiderato e FACOLTATIVAMENTE un altro argomento VERO, ad esempio 'U'.
// Se aggiunto filtrera' solamente gli incantemi che avranno il valore desiderato di cui sopra come elemento univoco della proprietà. 
// Se ad esempio vuoi tutti gli incantesimi che il paladino conosce ti basta digitare: filterKeyValueGrimArr(grimArr, 'casters', 'Paladino');
// Se invece vuoi tutti gli incantesimi che SOLO il paladino conosce allora: filterKeyValueGrimArr(grimArr, 'casters', 'Paladino', 'U');
function filterKeyValueGrimArr (grim, key, value, U) {
  let arr = [];
  for (let i of grim) {
    for (let j of i[key]) {
      if (U) {
        if (i[key].length === 1 && j === value) {
          arr.push(i);
        }
      } else {
        if (j === value) {
          arr.push(i);
        }
      }
    }
  }
  return arr;
}


