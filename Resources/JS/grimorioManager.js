//----------------------------------------//



// GRIMORIO ESTRAPOLATO DAL D&d 5E PLAYER HANDBOOK



// Oggetto contenenente il nome del caster e i suoi incantesimi in array.
// Lasciare in questa pozione perche' serve successivamente nel codice alla creazione di grimArr.
let objCastersArr = objClassesArrSpellLists(listaIncantesimi);

// Array contenente i nomi di tutti gli incantesimi presi una volta sola e ordinati alfabeticamente.
// N.B. non e' stato fabbricato da grimArr ma da listeIncantesimi_grimorioPHB.js, in modo da avere un riscontro a due fattori
// Lasciare in questa pozione perche' serve successivamente nel codice alla creazione grimArr.
let allSpellTitlesArr = allSpellsUniqueArray();

// Grimorio:  array con indici tutti gli oggetti contenenti gli incantesimi.
let grimArr = grimorioCreation(grimorioStringPHB); 

// Crei tutte le voci del menù di scelta e mostri tutti gli incantesimi.
datalistsSelectBuilder();
spellFilter ();

// Rende indifferente la scelta delle "componenti" oppure mostra opzioni piu' localizzate (V, S, M) utilizzando il display del css;
$('#compInd').change(function () {
  if ($('#compInd').prop('checked') === true) {
    alert('ATTENZIONE: verranno elencati gli incantesimi contenenti solo le componenti selezionate, tralasciando quelli le cui componenti non sono selezionate!!!')
    return $('.componentiOnOff').css('display', 'inline');
  } else {
    $('input[id="V"]')[0].checked = false;
    $('input[id="S"]')[0].checked = false;
    $('input[id="M"]')[0].checked = false;
    spellFilter ();
    return $('.componentiOnOff').css('display', 'none');
  } 
});

// Al cambiamento del valore del campo selezionato viene triggerata la funzione.
$('.trigger').change(function () {
  spellFilter ();
});

// funzione auto chiamante che fa cambiare il testo al H2
(function () {
  let h2_1 = $('h2')[0].innerText;
  let h2_2 = $('h2')[1].innerText;
  $('h2').hover(function () {
    $('h2')[0].innerText = 'Clicca per resettare i campi';
    $('h2')[1].innerText = 'Clicca per resettare i campi';
  }, function () {
    $('h2')[0].innerText = h2_1;
    $('h2')[1].innerText = h2_2;
  });
})()

// permette di resettare i campi sottostanti nell'interfaccia grafica dei settaggi e titoli/descrizioni
$('h2').on('click', function () {
  $('select[id="classe"]').val('');
  $('select[id="livello"]').val('');
  $('select[id="scuolaDiMagia"]').val('');
  $('select[id="tempoDiLancio"]').val('');
  $('select[id="gittata"]').val('');
  $('select[id="durata"]').val('');
  $('#titolo').val('');
  for (let input of $('input')) {
    input.checked = false;
  }
  for (let select of $('select')) {
    select.checked = false;
  }
  $('.elenco').html('');
  spellFilter ();
  $('.componentiOnOff').css('display', 'none');
});



//----------------------------------------//



// LISTA DI LOG PER CONTROLLARE CHE LA SORGENTE SIA IN ORDINE ABBASTANZA DA FUNZIONARE

// console.log(checkIfDurationIsLine6(grimorioStringPHB)); // Tutto funziona
// console.log(correctSpellList(listaIncantesimi)); // Tutto funziona
// console.log(grimArr); // Tutto funziona
// console.log(objCastersArr); // Tutto funziona
// console.log(allSpellTitlesArr); // Tutto funziona



//----------------------------------------//



// DICHIARAZIONE DELLE FUNZIONI

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
      magicLevel : [schoolAndLevel(spell.split('\n')[1].split(' '), 'level')],
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
      description : [spell.split('\n').slice(6).join(' ')],
      ritual : (function () {
        if (spell.split('\n')[1].slice(-9) === '(rituale)') return ['Si'];
        return ['No'];
      })()
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
};

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
};

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
};

// objClassesArrSpellLists:
// Questa funzione crea un oggetto le cui chiavi corrispondono alle classi e
// i rispettivi valori sono array contenenti gli incantesimi di quella classe.
function objClassesArrSpellLists (spellList) {
  let obj = {};
  
  for (let classSpells in spellList) {
    obj[classSpells.slice(11)] = spellList[classSpells].toUpperCase().slice(1).split('\n');
  }
  
  return obj;
};

// allSpellsUniqueArray:
// un array contenente tutti gli incanteimi di tutte le classi presi una sola volta e
// ordinati in ordine alfabetico.
function allSpellsUniqueArray () {
  let arr = [];
  for (let classSpells in objCastersArr) {
    arr = arr.concat(objCastersArr[classSpells]);
  }
  return arrayUniqueValues(arr).sort().slice(1);
};

// filterEveryTypeValue:            N.B. prende solo il primo valore dell'array della chiave in questione
// una funzione che restituisce un array contenente i valori univoci della chiave di proprieta' inserita come argomento
// della funzione stessa per tutte le spell di grimmArr o altra raccolta.
function filterEveryTypeValue (collection, key) {
  let arr = [];
  for (let spell of collection) {
    arr.push(spell[key][0]);
  }
  return arrayUniqueValues(arr);
};

// datalistsSelectBuilder:
// Crei un datalist HTML per tutte le voci, in questo modo se in futuro si aggingeranno classi o livelli o altro
// il sistema le riconoscerà in automatico.
function datalistsSelectBuilder () {
  // Crei un datalist HTML per i titoli nel DOM, in questo modo la ricerca per titoli è potente
  for (let spell of filterEveryTypeValue(grimArr, 'title').sort()) {
    $('.dataListTitles').append('<option value="'+spell+'"></option>');
  };
  
  // Crei un datalist HTML per i livelli nel DOM, in questo modo la ricerca per i livelli è potente
  for (let spell of filterEveryTypeValue(grimArr, 'magicLevel').sort()) {
    // $('.dataListmagicLevels').append('<option value="'+spell+'"></option>');
    $('#livello').append('<option value="'+spell+'">'+spell+'</option>');
  };
  
  // Crei un datalist HTML per i casters nel DOM, in questo modo la ricerca per i casters è potente
  let castersList = Object.keys(objCastersArr).sort();
  for (let caster of castersList) {
    // $('.dataListClasses').append('<option value="'+caster+'"></option>');
    $('#classe').append('<option value="'+caster+'">'+caster+'</option>');
  };
  
  // Crei un datalist HTML per le scuole di magia nel DOM, in questo modo la ricerca per le scuole di magia è potente
  for (let spell of filterEveryTypeValue(grimArr, 'magicSchool').sort()) {
    // $('.dataListmagicSchools').append('<option value="'+spell+'"></option>');
    $('#scuolaDiMagia').append('<option value="'+spell+'">'+spell+'</option>');
  };
  
  // Crei un datalist HTML per i tempi di lancio nel DOM, in questo modo la ricerca per i tempi di lancio è potente
  for (let spell of filterEveryTypeValue(grimArr, 'spellcastingTime').sort()) {
    // $('.dataListSpellcastingTimes').append('<option value="'+spell+'"></option>');
    $('#tempoDiLancio').append('<option value="'+spell+'">'+spell+'</option>');
  };
  
  // Crei un datalist HTML per le i range nel DOM, in questo modo la ricerca per i range è potente
  for (let spell of filterEveryTypeValue(grimArr, 'range').sort()) {
    // $('.dataListRanges').append('<option value="'+spell+'"></option>');
    $('#gittata').append('<option value="'+spell+'">'+spell+'</option>');
  };
  
  // Crei un datalist HTML per le durate nel DOM, in questo modo la ricerca per durate è potente
  for (let spell of filterEveryTypeValue(grimArr, 'duration').sort()) {
    // $('.dataListDurations').append('<option value="'+spell+'"></option>');
    $('#durata').append('<option value="'+spell+'">'+spell+'</option>');
  };
};

// filterKeyValueGrimArr:
// una funzione che restituisce un array contenente tutti gli incantesimi filtrati dal
// grimorio che in quel momento viene usato come base di riferimento (quindi non necessariamente grimArr). 
// Inserendo quindi come argomenti: il grimorio di riferimento in quel momento, la chiave della proprieta'
// che ti interessa e il suo valore desiderato e FACOLTATIVAMENTE un altro argomento VERO, ad esempio 'U'.
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
};

// spellFilter:
// è la funzione che permette a tutto il sistema di proporre i titoli corretti in base alla ricerca effettuata nel DOM
// e cliccare su di essi per far comparire la spell voluta.
function spellFilter () {

  let filtGrim = Object.assign([], grimArr);

  function filt (filter, key) {
    if ($(filter).val() !== '' && $(filter).val() !== undefined && filter === "input[name=concentrazione]:checked") {
      if ($("input[name=concentrazione]:checked").val() === 'Si') return filtGrim = filterKeyValueGrimArr (filtGrim, 'duration', 'Concentrazione');
      if ($("input[name=concentrazione]:checked").val() === 'No') {
        let arr = [];
        for (let i of filtGrim) {
          let stateB = true;
          for (let j of i.duration) {
            if (j === 'Concentrazione') stateB = false;   
          }
          if (stateB === true) arr.push(i);
        }
        return filtGrim = arr;
      }
      if ($("input[name=concentrazione]:checked").val() === 'Indifferente') return filtGrim;
    }
    if ($(filter).val() !== '' && $(filter).val() !== undefined && filter === "input[name=ritual]:checked") {
      if ($("input[name=ritual]:checked").val() === 'Si') return filtGrim = filterKeyValueGrimArr (filtGrim, 'ritual', 'Si');
      if ($("input[name=ritual]:checked").val() === 'No') return filtGrim = filterKeyValueGrimArr (filtGrim, 'ritual', 'No');
      if ($("input[name=ritual]:checked").val() === 'Indifferente') return filtGrim;
    }
    if ($(filter).val() !== '' && $(filter).val() !== undefined && filter === "#titolo") {
      return filtGrim = filterKeyValueGrimArr (grimArr, key, $(filter).val());
    }
    if ($(filter).val() !== '' && $(filter).val() !== undefined) {
      return filtGrim = filterKeyValueGrimArr (filtGrim, key, $(filter).val());
    }
  }

  function filtComponents (V, S, M) {
    if (V && !S && !M) {
      filtGrim = filterKeyValueGrimArr (filtGrim, 'components', 'V', 1);
    } else if (!V && S && !M) {
      filtGrim = filterKeyValueGrimArr (filtGrim, 'components', 'S', 1);
    } else if (!V && !S && M) {
      filtGrim = filterKeyValueGrimArr (filtGrim, 'components', 'M', 1);
    } else if (V && S && !M) {
      filtGrim = [];
      for (let spell of grimArr) {
        if (spell.components[0] === 'V' && spell.components[1] === 'S' && spell.components[2] === undefined) filtGrim.push(spell);
      }
    } else if (V && !S && M) {
      filtGrim = [];
      for (let spell of grimArr) {
        if (spell.components[0] === 'V' && spell.components[1] === 'M') filtGrim.push(spell);
      }
    } else if (!V && S && M) {
      filtGrim = [];
      for (let spell of grimArr) {
        if (spell.components[0] === 'S' && spell.components[1] === 'M') filtGrim.push(spell);
      }
    } else if (V && S && M) {
      filtGrim = [];
      for (let spell of grimArr) {
        if (spell.components[0] === 'V' && spell.components[1] === 'S' && spell.components[2] === 'M') filtGrim.push(spell);
      }
    }
    return filtGrim;
  }

  // V - S - M - VS - VM - SM - VSM

  filt('#classe', 'casters');
  filt('#livello', 'magicLevel');
  filt('#scuolaDiMagia', 'magicSchool');
  filt('#tempoDiLancio', 'spellcastingTime');
  filt('input[name=concentrazione]:checked');
  filt('input[name=ritual]:checked');
  filt('#gittata', 'range');
  filtComponents($('#V').prop('checked'), $('#S').prop('checked'), $('#M').prop('checked'));
  filt('#durata', 'duration');
  filt('#titolo', 'title');
  
  console.log(filtGrim);
  $('.elenco').html('');
  for (let spell of filtGrim) {
    let p = $('<p class="p">');
    p.html('- ' + spell.title);
    p.data('title', spell.title);
    $('.elenco').append(p);
    // $('.elenco').append('<br>');
  }
  $('.p').on('click', displaySpell);
}

// displaySpell:
// funzione che recupera i data dal link cliccato e la spell corrispondente a quel determinato data. 
// Questa funzione si occupa anche di dare un aspetto consono alla spell oggetto richiamato, 
// permettendo cosi' una miglior lettura all'utente interessato.
function displaySpell (event) {
  let tagTitle = $(event.target).data('title')[0]; // lo zero perche' senza ti dava un array :)
  $('.elenco').html('');
  let selectedSpell = filterKeyValueGrimArr (grimArr, 'title', tagTitle)[0];
  $('.elenco').append('<br><button onclick="spellFilter()">Indietro</button><br><br>');
  $('.elenco').append('<hr><br><p class="caratteristicheSpell"> Titolo: <span>' + selectedSpell.title.join(' - ') + '</span></p><br><hr><br>');
  $('.elenco').append('<p class="caratteristicheSpell"> Scuola di magia: <span>' + selectedSpell.magicSchool.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Livello: <span>' + selectedSpell.magicLevel.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Tempo di lancio: <span>' + selectedSpell.spellcastingTime.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Gittata: <span>' + selectedSpell.range.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Componenti: <span>' + selectedSpell.components.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Durata: <span>' + selectedSpell.duration.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Rituale: <span>' + selectedSpell.ritual.join(' - ') + '</span></p>');
  $('.elenco').append('<p class="caratteristicheSpell"> Utilizzatori: <span>' + selectedSpell.casters.join(' - ') + '</span></p><br><hr><br>');
  $('.elenco').append('<p class="caratteristicheSpell"> Descrizione: <br><span>' + selectedSpell.description.join(' - ') + '</span></p><br><hr>');
  $('.elenco').append('<br><button onclick="spellFilter()">Indietro</button><br><br>');
};



//----------------------------------------//