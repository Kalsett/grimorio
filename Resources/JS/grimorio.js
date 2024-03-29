
// LEGGIMI --- IMPORTANTE
// Per aggingere incantesimi andare in fondo alla pagina e scriverli esattamente rispettando il modello
// di quelli sopra. È molto importante che gli incantesimi aggiunti siano scritti fra 
// l'ultimo incantesimo presente e la virgoletta rispettivamente a capo.
// Se non si rispettano le regole di cui sopra, l'incantesimo non sarà gestito ottimamente.
// Stai attento che quando vai a capo nelle liste non ti metta degli spazi in automatico che fra le template literals ``

// grimorioAllBooks è un oggetto contenente un oggetto per ogni manuale con 2 proprieta' dentro,
// la lista incantesimi di quel manuale e la stringa contenente tutti gli incantesimi.


// Migliora la regex per matchare i titoli con piu' di 2 parole
// let formattazione = function (str) {
//     str = str.split('\n\n').join('\n').split('\n°\n').join('\n').split('Gittata').join('\nGittata').split('Componenti').join('\nComponenti').split('Durata').join('\nDurata');
//     let strArr = str.match(/[A-Z][A-Z]+ *[A-Z][A-Z]*/g);
//     for (let title of strArr) {
//         str = str.split(title).join('\n'+title);
//     }
//     return str;
// }


const grimorioAllBooks = {
  playerHandBook: {
    grimorioString: `
AIUTO
Abiurazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una minuscola striscia di tessuto bianco)
Durata: 8 ore
Questo incantesimo rafforza il vigore e la determinazione
degli alleati. L'incantatore sceglie fino a tre creature entro
gittata. Il massimo dei punti ferita e i punti ferita attuali di
ogni bersaglio aumentano di 5 per la durata dell'incantesimo.
Ai livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, i punti ferita di un bersaglio aumentano di altri 5
punti per ogni slot di livello superiore al 2.

ALLARME
Abiurazione di 1 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: 9 metri
Componenti: V, S, M (una campanella e un frammento di un sottile cavo d'argento)
Durata: 8 ore
L'incantatore predispone un allarme contro le visite
indesiderate. Sceglie una porta, una finestra o un'area
entro gittata che non sia più grande di un cubo con spigolo
di 6 metri. Finché l'incantesimo non termina, un allarme
avverte l'incantatore ogni volta che una creatura di taglia
Minuscola o superiore tocca l'area protetta o vi entra.
Al momento del lancio dell'incantesimo, l'incantatore
designa quali creature non faranno scattare l'allarme.
Sceglie inoltre se l'allarme è mentale o udibile.
Un allarme mentale fa scattare un suono nella mente
dell'incantatore se questi si trova entro 1,5 km dall'area
protetta. Questo suono lo sveglia se sta dormendo.
Un allarme udibile genera il suono di una campana per
10 secondi entro 18 metri.

ALLEATO PLANARE
Evocazione di 6 livello
Tempo di Lancio: 10 minuti
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
L'incantatore chiede l'aiuto di un'entità ultraterrena che
deve essergli nota: un dio, un primordiale, un principe dei
demoni o qualche altro essere dotato di poteri cosmici.
Quell'entità invia un celestiale, un elementale o un
immondo a lei fedele in aiuto dell'incantatore. La creatura
appare in uno spazio libero entro gittata. Se l'incantatore
conosce il nome di una creatura specifica, può pronunciare
quel nome quando lancia l'incantesimo per richiedere
l'intervento di quella creatura, ma potrebbe comunque
ricevere quello di una creatura diversa (a scelta del DM).
Quando la creatura appare, non è obbligata in alcun
modo a comportarsi in modo particolare. L'incantatore
può chiederle di svolgere per lui un servizio in cambio di
pagamento, ma essa non è obbligata ad accettare. Il compito
da svolgere potrebbe variare dai più semplici ("portaci in
volo oltre il baratro", "aiutaci a vincere una battaglia") ai
più complessi ("spia i nostri nemici", "proteggici durante la
nostra incursione nel dungeon"). L'incantatore deve essere
in grado di comunicare con la creatura per mercanteggiare
con lei e assicurarsi i suoi servigi.
Il pagamento può assumere le forme più disparate. Un
celestiale potrebbe richiedere un'ingente donazione in oro
o in oggetti magici a un tempio alleato, mentre un immondo
potrebbe esigere una creatura vivente in sacrificio o un
tesoro in dono. Alcune creature potrebbero concedere i
loro servigi in cambio di un compito che l'incantatore dovrà
svolgere.
Come regola generale. un compito che può essere
misurato in minuti richiede un pagamento del valore di 100
mo per minuto. un compito misurato in ore richiede 1.000
mo all'ora e un compito misurato in giorni (fino a 10 giorni)
richiede 10.000 mo al giorno. Il DM può modificare questi
pagamenti in base alle circostanze in cui l'incantatore
lancia l'incantesimo. Se il compito è in sintonia con l'etica
della creatura, il pagamento potrebbe essere dimezzato o
addirittura superfluo. I compiti non pericolosi solitamente
richiedono soltanto la metà del pagamento suggerito,
mentre quelli particolarmente pericolosi potrebbero
richiedere una ricompensa superiore. È raro che una
creatura accetti un compito potenzialmente suicida.
Dopo che la creatura ha portato a termine il compito,
o quando la durata pattuita si esaurisce, la creatura fa
ritorno al suo piano di origine dopo avere fatto rapporto
all'incantatore, se questo è possibile e appropriato al compito
in questione. Se l'incantatore non riesce ad accordarsi su
un prezzo per i servizi della creatura, quest'ultima fa ritorno
immediatamente sul suo piano di origine.
Una creatura arruolata per unirsi al gruppo
dell'incantatore conta come membro di quel gruppo e
riceve la sua parte di punti esperienza concessi.

ALLUCINAZIONE DI FORZA
Illusione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un ciuffo di lana)
Durata: Concentrazione, 1 minuto
L'incantatore crea un'illusione che mette radici nella
mente di una creatura entro gittata e che egli sia in grado
di vedere. Il bersaglio deve effettuare un tiro salvezza su
Intelligenza. Se lo fallisce, l'incantatore crea un oggetto
una creatura o un fenomeno fittizio di altra natura visibile a
sua scelta, che non sia più grande di un cubo con spigolo di
3 metri e sia percepibile soltanto dal bersaglio per la durata
dell'incantesimo. Questo incantesimo non ha effetto sui
costrutti o sui non morti.
L'allucinazione include suoni, temperature e altri stimoli
analoghi, anch'essi evidenti soltanto alla creatura.
li bersaglio pub usare la sua azione per esaminare
l'allucinazione con una prova di Intelligenza a (Indagare)
contro la CD del tiro salvezza dell'incantesimo. Se la prova
ha successo, il bersaglio capisce che l'allucinazione è
un'illusione e l'incantesimo termina.
Finché un bersaglio è influenzato dall'incantesimo,
considera l'allucinazione come se fosse reale. Il bersaglio
razionalizza qualsiasi esito illogico prodotto dalle sue
interazioni con l'allucinazione. Per esempio, un bersaglio
che tenta di camminare su un ponte fittizio che attraversa
un baratro cadrà non appena mette piede sul ponte. Se il
bersaglio sopravvive alla caduta, crederà comunque che
il ponte esista e penserà a un'altra spiegazione per la sua
caduta (è stato spinto, è scivolato, o un vento forte lo ha
buttato di sotto).
Un bersaglio influenzato è talmente convinto che
l'allucinazione sia reale che puó perfino subire danni
da essa. Un'allucinazione creata per apparire come
una creatura può attaccare il bersaglio. Analogamente
un'allucinazione:-inazione creata per apparire come un fuoco, una
pozza d'acido o un flusso di lava può bruciare il bersaglio.
A ogni round nel turno dell'incantatore, l'allucinazione
può infliggere ld6 danni psichici al bersaglio se esso si
trova nell'area dell'allucinazione o entro 1.5 metri da essa
purché l'allucinazione riproduca una creatura o un pericolo
in grado di infliggere danni logicamente, per esempio
attaccando. n bersaglio percepisce i danni come se fossero
del tipo appropriato per l'illusione.

ALLUCINAZIONE MORTALE
Illusione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore attinge agli incubi di una creatura entro
gittata e che egli sia in grado di vedere, per creare una
manifestazione illusoria delle sue paure più recondite,
visibile soltanto a quella creatura. Il bersaglio deve
effettuare un tiro salvezza su Saggezza. Se lo fallisce,
diventa spaventato per la durata dell'incantesimo. Alla fine
di ogni turno del bersaglio prima che l'incantesimo termini,
il bersaglio deve superare un tiro salvezza su Saggezza,
altrimenti subirà 4d10 danni psichici. Se lo supera
l'incantesimo termina.
Al livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 5 livello o
superiore i danni aumentano di 1dlO per ogni slot di livello
superiore al 4.

ALTERARE SE STESSO
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore assume una forma diversa, scegliendo
al momento del lancio dell'incantesimo una delle
opzioni seguenti, i cui effetti permangono per la durata
dell'incantesimo. Finché l'incantesimo permane,
l'incantatore può porre fine a un'opzione con un'azione per
ottenere i benefici di un'opzione diversa.
Adattamento Acquatico. L'incantatore adatta il suo
corpo a un ambiente acquatico: sviluppa le branchie e una
membrana tra le dita. Pub respirare sott'acqua e ottiene
una velocità di nuotare pari alla sua velocità base sul
terreno.
Armi Naturali. L'incantatore sviluppa artigli, zanne,
spine, corna o un'arma naturale diversa a sua scelta. I suoi
colpi senz'armi infliggono ld6 danni contundenti, perforanti
o taglienti, come appropriato per l'arma naturale scelta, e
l'incantatore è competente nei colpi senz'armi. Infine, l'arma
naturale è magica e l'incantatore ottiene un bonus di +1 ai
tiri per colpire e ai tiri per i danni che effettua quando la usa.
Cambiare Aspetto. L'incantatore altera il suo aspetto.
Decide come apparire e definisce altezza, peso, lineamenti
facciali, suono della voce, lunghezza dei capelli1 carnagione
e tratti distintivi, se lo desidera. Può apparire come un
membro di un'altra razza, ma nessuna delle sue statistiche
cambia di conseguenza. Non può apparire come una
creatura di taglia diversa dalla propria e la sua forma base
resta la stessa; per esempio, se è bipede, non può usare
questo incantesimo per diventare quadrupede. In qualsiasi
momento entro la durata dell'incantesimo può usare la sua
azione per cambiare di nuovo aspetto in questo modo.

AMICIZIA
Trucchetto di Ammaliamento
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: S, M (una piccola quantità di trucco da applicare al volto mentre si lancia l'incantesimo)
Durata: Concentrazione, 1 minuto
Per la durata dell'incantesimo, l'incantatore dispone di
vantaggio a tutte le prove di Carisma rivolte a una creatura
a sua scelta che non sia ostile nei suoi confronti. Quando
l'incantesimo termina, la creatura capisce che l'incantatore
ha usato la magia per influenzare il suo umore e potrebbe
diventare ostile nei suoi confronti. Se la creatura è tendente
alla violenza, potrebbe attaccarlo. Un'altra creatura potrebbe
cercare vendetta in altri modi {a discrezione del DM), in base
alla natura delle sue interazioni con l'incantatore.

AMICIZIA CON GLI ANIMALI
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un boccone di cibo)
Durata: 24 ore
Grazie a questo incantesimo l'incantatore convince
una bestia che non ha alcuna intenzione di nuocerle.
L'incantatore sceglie una bestia entro gittata e che egli
sia in grado di vedere. La bestia deve vedere e sentire
l'incantatore. Se l'Intelligenza della bestia è pari o
superiore a 4, l'incantesimo fallisce. Altrimenti, la bestia
deve superare un tiro salvezza su Saggezza o essere
affascinata dall'incantatore per la durata dell'incantesimo.
Se l'incantatore o uno dei suoi compagni infligge danni al
bersaglio, l'incantesimo termina.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2· livello o
:superiore, pub influenzare una bestia aggiuntiva per ogni
slot di livello superiore al l°.

ANATEMA
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una goccia di sangue)
Durata: Concentrazione, 1 minuto
L'incantatore sceglie fino a tre creature entro gittata e che
egli sia in grado di vedere, che dovranno effettuare un tiro
salvezza su Carisma. Se una creatura fallisce il suo tiro
salvezza, ogni volta che effettua un tiro per colpire o un
tiro salvezza prima che l'incantesimo termini deve tirare
un d4 e sottrarre il numero ottenuto dal tiro per-colpire o
dal tiro salvezza.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2· livello o
superiore, può bersagliare una creatura aggiuntiva per ogni
slot di livello superiore al i=.

ANIMALE MESSAGGERO
Ammaliamento di 2 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un boccone di cibo)
Durata: 24 ore
Grazie a questo incantesimo, l'incantatore usa un animale
per trasmettere un messaggio, scegliendo una bestia
Minuscola entro gittata e che egli sia in grado di vedere
(per esempio uno scoiattolo, una ghiandaia o un pipistrello).
L'incantatore specifica un luogo, che deve avere già visitato,
e un destinatario che corrisponda a una descrizione generica
come "un uomo o una donna che indossi l'uniforme della
guardia cittadina" o "un nano dai capelli rossi che indossi
un cappello a punta". Pronuncia inoltre un messaggio di
un massimo di venticinque parole. La bestia bersaglio
viaggia per la durata dell'incantesimo verso il luogo
specificato, percorrendo circa 75 k m in 24 ore nel caso dl uo
messaggero volante, o 37,5 km nel caso di altri animali.
Quando il messaggero arriva, trasmette il suo
messaggio alla creatura che l'incantatore ha descritto,
replicando il suono di sua scelta. Il messaggero parla
solo con una creatura corrispondente alla descrizione
fornita dall'incantatore. Se il messaggero non giunge a
destinazione prima della fine dell'incantesimo, il messaggio
è perduto e la bestia si rimette in viaggio verso il punto in
cui l'incantesimo è stato lanciato.
Al Uve/li Superiori. Se l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3• livello o
superiore, In durata dell'incantesimo aumenta di 48 ore per
ogni slot di livello superiore al 2·.

ANIMARE MORTI
Necromanzia di 3 livello
Tempo di Lancio: 1 minuto
Gittata: 3 metri
Componenti: V, S, M (una goccia di sangue, un brandello di carne, un pizzico di polvere d'osso)
Durata: Istantanea
Questo incantesimo crea un servitore non morto,
scegliendo un cadavere di umanoide Medio o Piccolo
entro gittata. Il suo incantesimo infonde nel bersaglio
un'empia parvenza di vita, animandolo come creatura non
morta. Il bersaglio diventa uno scheletro se l'incantatore
ha scelto le ossa o uno zombi se ha scelto un cadavere.
(Il DM possiede le statistiche di gioco di queste creature.)
A ogni suo turno l'incantatore può usare un'azione
bonus per comandare mentalmente qualsiasi creatura da
lui creata tramite questo incantesimo e situata entro 18
metri da lui (se controlla più creature, può comandarle
tutte o nessuna allo stesso tempo, impartendo lo stesso
comando a ogni creatura). L'incantatore decide quale azione
effettuerà la creatura e dove si muoverà durante il suo turno
successivo, oppure può impartire un comando generale,
come per esempio vigilare su una camera o un corridoio in
particolare. Se l'incantatore non impartisce alcun comando,
la creatura si limita a difendersi dalle creature ostili. Una
volta ricevuto un ordine, la creatura continua a seguirlo
finché non ha portato a termine il compito.
La creatura rimane sotto il controllo dell'incantatore
per 24 ore, dopodiché smette di obbedire ai comandi che
l'incantatore le ha impartito. Per mantenere il controllo
della creatura per altre 24 ore, l'incantatore deve lanciare
di nuovo questo incantesimo su di essa prima che l'attuate
periodo di 24 ore termini. Questo uso dell'incantesimo
gli permette di ristabilire il controllo su un massimo di
quattro creature da lui animate tramite questo incantesimo,
anziché animarne una nuova.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, anima o ristabilisce il controllo su due creature
non morte aggiuntive per ogni slot di livello superiore al 3'.
Ognuna di queste creature deve provenire da un cumulo di
ossa o da un cadavere diverso.

ANIMARE OGGETTI
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Gli oggetti prendono vita a comando delJ'incantatore, che
sceglie fino a dieci oggetti non magici entro gittata che
non siano indossati o trasportati. I ber agli Medi contano
come due oggetti, quelli Grandi come quattro e quelli
Enormi come otto oggetti. L'incantatore non può animare
oggetti di taglia superiore a Enorme. Ogni bersaglio
si anima e diventa una creatura sotto iJ suo controllo
finché l'incantesimo non termina o finché non scende a O
punti ferita.
Come azione bonus, l'incantatore può comandare
mentalmente qualsiasi creatura creata con questo
incantesimo e situata entro 150 metri da lui (se controlla
più creature, può comandarle tutte o nessuna allo stesso
tempo, impartendo lo stesso comando a ogni creatura).
L'incantatore decide quale azione effettuerà la creatura e
dove si muoverà durante il suo turno successivo, oppure
può impartire un comando generale, come per esempio
vigilare su una camera o un corridoio in particolare. Se
l'incantatore non impartisce alcun comando, la creatura si
limita a difendersi dalle creature ostili. Una volta ricevuto
un ordine, la creatura continua a seguirlo finché non ha
portato a termine il compito.
STATISTICHE DEGLI OGGETTI ANIMATI
Taglia PF CA Attacco For Des
Minuscola 20 18 +8 al tiro per colpire, ld4 + 4 danni 4 18
Piccola 25 16 +6 al tiro per colpire, ld8 + 2 danni 6 14
Media 40 l3 +S al tiro per colpire, 2d6 + l danni 10 12
Grande so 10 +6 a1 tiro per colpire, 2d10+ 2 danni 14 10
Enorme 80 10 +8 al tiro per colpire, 2d12 + 4 danni 18 6
Un oggetto animato è un costrutto dotato di CA, punti
ferita, attacchi, Forza e Destrezza determinati dalla sua
taglia. La sua Costituzione è pari a 10, la sua Intelligenza
e Saggezza sono pari a 3 e il suo Carisma è pari a 1. La
sua velocità è pari a 9 metri; se l'oggetto è privo di gambe o
altre appendici che possa usare per la locomozione, ottiene
invece una velocità di volare pari a 9 metri e pub fluttuare.
Se l'oggetto è agganciato saldamente a una superficie o a
un oggetto più grosso, come una catena imbullonata a una
parete, la sua velocità è pari a O. È dotato di vista cieca
entro un raggio di 9 metri ed è cieco oltre quella distanza.
Quando l'oggetto animato scende a O punti ferita, riassume
la forma dell'oggetto originale e ogni danno rimanente si
trasferisce alla forma dell'oggetto originale.
Se l'incantatore comanda a un oggetto di attaccare,
esso può effettuare un singolo attacco in mischia contro
una creatura entro 1,5 metri da esso. L'oggetto effettua
un attacco con schianto con un bonus al tiro per colpire e
ai danni contundenti determinati dalla sua taglia. Il DM
potrebbe decidere che uno specifico oggetto infligga danni
taglienti o perforanti, in base alla sua forma.
Ai Livelli Superiori. Se l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6• livello o
superiore, può animare due oggetti aggiuntivi per ogni slot
di livello superiore al s·.

ANTI-INDIVIDUAZIONE
Abiurazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pizzico di polvere di diamante da spruzzare sul bersaglio del valore di 25 mo, che l'incantesimo consuma)
Durata: 8 ore
Per la durata dell'incantesimo, l'incantatore nasconde
un bersaglio da lui toccato dalle magie di divinazione.
Il bersaglio può essere una creatura consenziente o un
luogo o un oggetto non più grande di 3 metri in ogni
dimensione. Il bersaglio non può essere bersagliato da
alcuna magia di divinazione né percepito dai sensori di
scrutamento magico.

ANTIPATIA / SIMPATIA
Ammaliamento di 8 livello
Tempo di Lancio: 1 ora
Gittata: 18 metri
Componenti: V, S, M (un frammento di allume immerso nell'aceto per un effetto di antipatia o una goccia di miele per un effetto di simpatia)
Durata: 10 giorni
Questo incantesimo attira o repelle un tipo di creatura.
L'incantatore sceglie un bersaglio entro gittata, che pub
trattarsi di un oggetto o di una creatura di taglia Enorme o
inferiore. o di un'area della grandezza massima di un cubo
con spigolo di 60 metri. Dopodiché specifica un tipo di
creatura intelligente, come i draghi rossi, i goblin o i vampiri.
I.:incantatore infonde nel bersaglio un'aura che attira o
respinge le creature specificate per la durata dell'incantesimo
scegliendo antipatia o simpatia come effetto dell'aura.
Antipatia. L'ammaliamento suscita nelle creature del
tipo designato dall'incantatore il desiderio impellente di
abbandonare l'area ed evitare il bersaglio. Quando una tale
creatura vede il bersaglio o giunge entro 18 metri da esso,
deve superare un tiro salvezza su Saggezza, altrimenti
diventa spaventata. La creatura rimane spaventata fintanto
che è in grado di vedere il bersaglio o rimane entro 18 metri
da esso. Finché è spaventata dal bersaglio, deve usare il suo
movimento per muoversi verso il punto sicuro più vicino da
cui non vedrà più il bersaglio. Se la creatura si allontana a
più di 18 metri dal bersaglio e non è più in grado di vederlo,
cessa di essere spaventata, ma lo diventa di nuovo se torna
a vedere il bersaglio o a trovarsi entro 18 metri da esso.
Simpatia. L'ammaliamento fa si che le creature
specificate provino il desiderio impellente di avvicinarsi al
bersaglio finché si trovano entro 18 metri da esso o sono m
grado di vederlo. Quando una tale creatura vede il bersaglio
o giunge entro 18 metri da esso, deve superare un tiro
salvezza su Saggezza o usare il suo movimento in ogni suo
turno per entrare nell'area o muoversi entro la portata del
bersaglio. Una volta fatto questo, la creatura non può più
muoversi volontariamente per allontanarsi dal bersaglio.
Se il bersaglio infligge danni a una creatura influenzata
o le nuoce in altri modi, essa pub effettuare un tiro salvezza
per terminare l'effetto come descritto sotto. 
Terminare l'effetto. Se una creatura influenzata termina
il suo turno oltre 18 metri dal bersaglio o non è in grado di
vederlo, effettua un tiro salvezza su Saggezza. Se lo supera,
non è più influenzata dal bersaglio e capisce che la sensazione
di ripugnanza o di attrazione era magica. Inoltre. una creatura
influenzata dall'incantesimo ha diritto a un altro tiro salvezza
su Saggezza ogni 24 ore finché l'incantesimo permane.
Una creatura che supera un tiro salvezza contro questo
effetto è immune a esso per 1 minuto, dopodiché può
esserne influenzata di nuovo.

ARMA ELEMENTALE
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 ora
Un'arma non magica toccata dall'incantatore diventa un'arma
magica. L'incantatore sceglie uno dei tipi di danno seguenti:
acido, freddo, fulmine, fuoco o tuono. Per la durata
dell'incantesimo, l'arma ottiene un bonus di +1 ai tiri per colpire
e infigge ld4 danni extra del tipo scelto quando colpisce.
Al livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di s· o 6D livello,
iJ bonus ai tiri per colpire aumenta a +2 e i danni extra .
aumentano a 2d4. Quando l'incantatore usa uno slot
incantesimo di 7a livello o superiore, il bonus aumenta a +3
e i danni extra aumentano a 3d4.

ARMA MAGICA
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore tocca un'arma non magica e finché l'incantesimo
non termina, quell'arma diventa un'arma magica con un
bonus di + 1 ai tiri per colpire e ai tiri per i danni.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4a livello o
superiore, il bonus aumenta a +2. Quando l'incantatore
usa uno slot incantesimo di 6" livello o superiore, il bonus
aumenta a +3.

ARMA SPIRITUALE
Invocazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: 18 metri
Componenti: V, S
Durata: 1 minuto
L'incantatore crea entro gittata un'arma fluttuante spettrale
che permane per la durata dell'incantesimo o finché
l'incantatore non.lancia di nuovo questo incantesimo.
Quando lancia questo incantesimo, l'incantatore può
effettuare un attacco in mischia con questo incantesimo
contro una creatura entro 1,5 metri dall'arma. Se colpisce,
il bersaglio subisce ld8 danni da forza+ il modificatore di
caratteristica da incantatore.
Con un' azione bonus nel suo turno, l'incantatore può
muovere l'arma di un massimo di 6 metri e ripetere l'attacco
contro una creatura situata entro 1,5 metri da essa.
L'arma pub assumere la forma che l'incantatore preferisce.
I chierici di una divinità associata a un tipo particolare
di arma (come per esempio St Cuthbert, noto per la sua
mazza, o Thor per il suo martello) impartiranno all'arma
creata da questo incantesimo la forma di tale arma.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di 1d8 per ogni due slot
incantesimo superiori al 2.

ARMATURA DI AGATHYS
Abiurazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (una coppa d'acqua)
Durata: 1 ora
Una forza magica protettiva circonda l'incantatore,
manifestandosi come una patina di gelo spettrale che
ricopre sia lui che il suo equipaggiamento. L'incantatore
ottiene 5 punti ferita temporanei per la durata
dell'incantesimo. Se una creatura ,colpisce l'incantatore
con un attacco in mischia finché egli possiede questi punti
ferita, essa subisce 5 danni da freddo.
Ai Live/H Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, sia i punti ferita temporanei che i danni da freddo
aumentano di 5 per ogni slot di livello superiore al r.

ARMATURA MAGICA
Abiurazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pezzo di cuoio trattato)
Durata: 8 ore
L'incantatore tocca una creatura consenziente che non
indossi un'armatura, e una forza magica protettiva circonda
quella creatura finché l'incantesimo non termina. La CA
base del bersaglio diventa 13 +il suo modificatore di
Destrezza. L'incantesimo termina se il bersaglio indossa
un'armatura o se l'incantatore interrompe l'incantesimo
con un'azione.

ARTIFICIO DRUIDICO
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Istantanea
Sussurrando agli spiriti della natura, l'incantatore crea uno
degli effetti seguenti entro gittata:
• L'incantatore crea un minuscolo sensore innocuo che
predice il tempo atmosferico nel suo luogo per Je 24 ore
successive. Il sensore potrebbe manifestarsi come un
globo dorato in caso di cielo sereno, una nube in caso di
pioggia, un ammasso di fiocchi di neve in caso di neve e
cosí via. L'effetto permane per 1 round.
• L'incantatore fa sbocciare istantaneamente un fiore,
aprire un baccello o schiudere un germoglio.
• L'incantatore crea un effetto sensoriale istantaneo e
innocuo come un cumulo di foglie volanti, uno sbuffo di
vento, il rumore di un piccolo animale o il vago odore di
una puzzola. L'effetto non deve essere più grande di un
cubo con spigolo di 1,5 metri.
• L'incantatore accende o spegne istantaneamente una
candela, una torcia o un piccolo fuoco da campo.

AURA DI PUREZZA
Abiurazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 9 metri)
Componenti: V
Durata: Concentrazione, 10 minuti
L'incantatore emana un'aura di energia purificatrice entro
un raggio di 9 metri. Finché l'incantesimo non termina,
l'aura si muove assieme a lui ed è centrata su di lui. Ogni
creatura non ostile entro l'aura (incluso l'incantatore) non
può diventare malata, è dotata di resistenza ai danni da
veleno e dispone di vantaggio ai tiri salvezza contro gli
effetti che provocano qualsiasi condizione tra le seguenti:
accecato, affascinato, assordato, avvelenato, paralizzato,
spaventato e stordito.

AURA DI VITA
Abiurazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 9 metri)
Componenti: V
Durata: Concentrazione, 10 minuti
L'incantatore emana un'aura di energia che preserva la
vita entro un raggio di 9 metri. Finché l'incantesimo non
termina, l'aura si muove assieme a lui ed è centrata su di lui.
Ogni creatura non ostile entro l'aura (incluso l'incantatore)
è dotata di resistenza ai danni necrotici e il suo massimo
dei punti ferita non può essere ridotto. Inoltre, ogni creatura
vivente non ostile recupera 1 punto ferita quando inizia il
proprio turno entro l'aura con O punti ferita.

AURA DI VITALITÀ
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 9 metri)
Componenti: V
Durata: Concentrazione, 1 minuto
L'incantatore emana un'aura di energia curativa entro un
raggio di 9 metri. Finché l'incantesimo non termina, l'aura
si muove assieme a lui ed è ('entrata su di lui. L'incantatore
può usare un'azione bonus per far si che una creatura entro
l'aura (incluso l'incantatore) recuperi 2d6 punti ferita.

AURA MAGICA DI NYSTUL
Illusione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pezzo quadrato di seta)
Durata: 24 ore
L'incantatore pone un'illusione su una creatura o un oggetto
da lui toccato in modo che gli incantesimi di divinazione
rivelino informazioni false su di esso. li bersaglio può
essere una creatura consenziente o un oggetto che non sia
indossato o trasportato da un'altra creatura.
Quando l'incantatore lancia l'incantesimo, sceglie uno o
entrambi gJi effetti seguenti. L'effetto permane per la durata
dell'incantesimo. Se lancia questo incantesimo sulla stessa
creatura o oggetto ogni giorno per 30 giorni, ponendo su di
esso lo stesso effetto ogni volta, l'illusione permane finché
non viene dissolta.
Falsa Aura. L'incantatore cambia il modo in cui il
bersaglio appare agli incantesimi e agli effetti magici
che individuano le aure magiche, come per esempio
individuazione del magico. L'incantatore può fare in modo
che un oggetto non magico appaia magico o che un oggetto
magico appaia non magico, oppure può cambiare l'aura
magica dell'oggetto in modo che sembri appartenere a una
scuola di magia specifica a sua scelta. Quando usa questo
effetto su un oggetto, può rendere la falsa magia apparente
a qualsiasi creatura che maneggi l'oggetto.
Maschera. L'incantatore cambia il modo in cui il
bersaglio appare agli incantesimi e agli effetti magici
che individuano i tipi di creature, come la Percezione
del Divino di un paladino o l'innesco di un incantesimo
simbolo. L'incantatore sceglie un tipo di creatura: gli
altri incantesimi e oggetti magici considereranno il
bersaglio come se fosse una creatura di quel tipo o di
quell'allineamento.

AURA SACRA
Abiurazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un minuscolo reliquiario del valore di almeno 1.000 mo contenente una reliquia sacra, come un pezzo di stoffa della tunica di un santo o un frammento di pergamena di un testo religioso)
Durata: Concentrazione, 1 minuto
Dall'incantatore si diffonde una luce divina che si
materializza in un tenue bagliore entro un raggio di 9
metri da lui. Le creature a sua scelta entro quel raggio net
momento in cui l'incantesimo viene lanciato proiettano luce
fioca in un raggio di 1,5 metri e dispongono di vantaggio a
tutti i tiri salvezza; le altre creature subiscono svantaggio
ai tiri per colpire effettuati contro le creature scelte finché
l'incantesimo non termina. Inoltre, quando un immondo 0
un non morto colpisce una creatura influenzata da questo
incantesimo con un attacco in mischia, l'aura emette un
bagliore accecante e l'attaccante deve superare un tiro
salvezza su Costituzione, altrimenti resta accecato finché
l'incantesimo non termina.

BACCHE BENEFICHE
Trasmutazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un rametto di vischio)
Durata: Istantanea
Fino a dieci bacche compaiono in mano all'incantatore e sono
pervase di magia per la durata dell'incantesimo. Una creatura
può usare la sua azione per mangiare una bacca. Mangiare
una bacca ripristina 1 punto ferita e la bacca fornisce
nutrimento sufficiente a sfamare una creatura per un giorno.
L e bacche perdono il loro potere se non vengono
mangiate entro 24 ore dal lancio di questo incantesimo.

BAGLIORE LUNARE
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (alcuni semi di qualsiasi pianta a chicchi e un frammento di feldspato opalescente)
Durata: Concentrazione, 1 minuto
Un bagliore argentato di luce pallida forma un cilindro del
raggio di 1,5 metri e alto 12 metri, centrato su un punto
entro gittata. Finché l'incantesimo non termina, il cilindro è
pervaso di luce fioca.
Quando una creatura entra nell'area dell'incantesimo per
la prima volta in un turno o vi inizia il proprio turno, viene
avvolta da una cortina di fiamme spettrali che le provocano
un dolore lancinante e la obbligano a effettuare un tiro
salvezza su Costituzione. Se lo fallisce, subisce 2d10 danni
radiosi, mentre se lo supera, subisce soltanto la metà di
quei danni.
Un muta forma subisce svantaggio a questo tiro salvezza.
Inoltre, se lo fallisce, riassume istantaneamente la sua
forma originale e non può assumere una forma diversa
finché non esce dalla luce dell'incantesimo.
Nei suoi turni successivi, dopo avere lanciato questo
incantesimo, l'incantatore pub usare un'azione per muovere
il bagliore di un massimo di 18 metri in qualsiasi direzione.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3" livello o
superiore, i danni aumentano di ldlO per ogni slot di livello
superiore al 2D.

BAGLIORE SOLARE
Invocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (linea di 18 metri)
Componenti: V, S, M (una lente d'ingrandimento)
Durata: Concentrazione, 1 minuto
Un bagliore di luce brillante scaturisce dalla mano
dell'incantatore e genera una linea lunga 18 metri e
larga 1,5 metri. Ogni creatura sulla linea deve effettuare
un tiro salvezza su Costituzione. Se lo fallisce. subisce
6d8 danni radiosi ed è accecata fino al turno successivo
dell'incantatore, mentre se lo supera, subisce soltanto la
metà di quei danni e non è accecata da questo incantesirmo.
Le melme e i non morti subiscono svantaggio a questo tiro
salvezza.
L'incantatore può creare una nuova linea di energia
radiosa con la sua azione in qualsiasi turno finché
l'incantesimo non termina.
Per la durata dell'incantesimo, una scintilla di energia
radiosa risplende nella mano dell'incantatore e proietta
luce intensa entro un raggio di 9 metri e luce fioca per altri
9 metri. Questa luce è considerata luce solare.

BANCHETTO DEGLI EROI
Evocazione di 6 livello
Tempo di Lancio: 10 minuti
Gittata: 9 metri
Componenti: V, S, M (una scodella tempestata di gemme del valore di almeno 1.000 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore evoca un grande banchetco, completo di
sontuose pietanze e bevande. Pasteggiare al banchetto
richiede 1 ora. al termine della quale il banchetto
s.compare; gli effetti benefici del banchetto non si applicano
finché que1l'ora non è trascorsa. Fino a un massimo di altre
dodici creature possono partecipare al banchetto.
Una creatura che partecipa al banchetto ottiene vari
benefici: viene curata da tutte le malattie e dai veleni,
diventa immune ai veleni e alla condizione di spaventato,
dispone di vantaggio a tutti i tiri salvezza su Saggezza, il
suo massimo dei punti ferita aumenta di 2dl0 e ottiene
quello stesso numero di punti ferita. Questi benefici durano
per 24 ore.

BARRIERA DI LAME
Invocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore crea un muro verticale di lame affilate
turbinanti, fatte di energia magica. Il muro appare
entro gittata e permane per la durata dell'incantesimo.
L'incantatore può creare un muro in linea retta lungo fino a
30 metri, alto 6 metri e spesso 1,5 metri, oppure un muro
circolare del diametro massimo di 18 metri, alto 6 metri e
Spesso 1,5 metri. Il muro fornisce tre quarti di copertura
alle creature dietro di esso e il suo spazio è considerato
terreno difficile.
Quando una creatura entra nell'area del muro per la
Prima volta in un turno o vi inizia il proprio turno, essa
deve superare, un tiro salvezza su Destrezza. Se lo fallisce,
subisce 6d10 danni taglienti, mentre se lo supera, subisce
soltanto la metà di quei danni.

BEFFA CRUDELE
Trucchetto di Ammaliamento
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: Istantanea
L'incantatore pronuncia una sequenza di insulti mescolati
a sottili ammaliamenti contro una creatura entro gittata e
che egli sia in grado di vedere. Se il bersaglio è in grado di
sentirlo (non è necessario che lo capisca), deve superare
un tiro salvezza su Saggezza, altrimenti subisce ld4 danni
psichici e svantaggio al tiro per colpire successivo che
effettua prima della fine del suo turno successivo.
I danni di questo incantesimo aumentano di ld4 quando
l'incantatore arriva al s· livello (2d4), 1 r livello {3d4) e i 1·
livello (4d4).

BENEDIZIONE
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (uno spruzzo di acqua santa)
Durata: Concentrazione, 1 minuto
L'incantatore benedice fino a tre creature a sua scelta entro
gittata. Ogni volta che un bersaglio effettua un tiro per
colpire o un tiro salvezza prima che l'incantesimo termini
pub tirare un d4 e aggiungere il numero ottenuto al tiro per
colpire o al tiro salvezza.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, può bersagliare una creatura aggiuntiva per ogni
slot superiore al 1.

BLOCCA MOSTRI
Ammaliamento di 5 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (una piccola sbarra di ferro)
Durata: Concentrazione, 1 minuto
L'incantatore sceglie una creatura entro gittata e che egli
sia in grado di vedere. li bersaglio deve superare un tiro
salvezza su Saggezza, altrimenti sarà paralizzato per la
durata dell'incantesimo. Questo incantesimo non ha effetto
sui non morti. Alla fine di ogni suo turno, il bersaglio può
effettuare un altro tiro salvezza su Saggezza. Se lo supera,
l'incantesimo su di esso termina.
Al Live/11 Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6• livello o
superiore, pub bersagliare una creatura aggiuntiva per
ogni slot di livello superiore al s-. Le creature devono
trovarsi a non più di 9 metri l'una dall'altra quando
l'incantatore le bersaglia.

BLOCCA PERSONE
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una piccola sbarra di ferro)
Durata: Concentrazione, 1 minuto
L'incantatore sceglie un umanoide entro gittata e che egli
sia in grado di vedere. Il bersaglio deve superare un tiro
salvezza su Saggezza, altrimenti sarà paralizzato per
la durata dell'incantesimo. Alla fine di ogni suo turno, il
bersaglio pub effettuare un altro tiro salvezza su Saggezza.
Se lo supera, l'incantesimo su di esso termina.
Ai livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, può bersagliare un umanoide aggiuntivo per ogni
slot di livello superiore al 2. Gli umanoidi devono trovarsi a non
più di 9 metri l'uno dall'altro quando l'incantatore li bersaglia.

BOCCA MAGICA
Illusione di 2 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: 9 metri
Componenti: V, S, M (un frammento di un favo e polvere di giada del valore di almeno 10 mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto
L'incantatore inserisce un messaggio in un oggetto entro
gittata, che sarà enunciato quando una condizione di innesco
sarà soddisfatta L'incantatore sceglie un oggetto che egli è
in grado di vedere e che non sia indossato o trasportato da
un'altra creatura. Quindi pronuncia il messaggio, che non deve
essere più lungo di 25 parole, e che può tuttavia essere ripetuto
entro un periodo massimo di 10 minuti. Infine, l'incantatore
determina la circostanza che innescherà l'incantesimo e
l'enunciazione del messaggio.
Quando quella circostanza si verifica, una bocca magica
appare sull'oggetto e recita il messaggio con la voce
dell'incantatore, allo stesso volume in cui egli l'ha pronunciato.
Se l'oggetto scelto dall'incantatore ha una bocca o qualcosa
di simile a una bocca (per esempio, la bocca di una statua),
la bocca magica appare in modo che le parole sembrino
pronunciate dalla bocca dell'oggetto Al momento del lancio,
l'incantatore può stabilire se l'incantesimo termina nel
momento in cui il messaggio viene enunciato o se esso viene
ripetuto qualora le circostanze di innesco si verifichino di
nuovo.
La circostanza di innesco può essere generale o dettagliata,
ma deve essere basata su condizioni visibili o udibili che si
verifichino entro 9 metri dall'oggetto. Per esempio, l'incantatore
potrebbe ordinare alla bocca di parlare quando una qualsiasi
creatura giunge entro 9 metri dall'oggetto o quando una
campana d'argento suona entro 9 metri da esso.

BRACCIA DI HADAR
Evocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 3 metri)
Componenti: V, S
Durata: Istantanea
L'incantatore invoca il potere di Hadar, la Fame Oscura. Dalla
sua persona si protendono alcuni tentacoli di energia oscura che
tempestano di colpi tutte le creature entro 3 metri da lui. Ogni
creatura in quell'area deve effettuare un tiro salvezza su Forza.
Se lo fallisce, subisce 2d6 danni necrotici e non può effettuare
reazioni fino al suo turno successivo. Se lo supera, subisce
soltanto Ja metà di quei danni, ma non subisce altri effetti.
Ai UveJJJ Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di T livello o superiore,
i danni aumentano di ld6 per ogni slot superiore al 1.

CADUTA MORBIDA
Trasmutazione di 1 livello
Tempo di Lancio: 1 reazione, che l'incantatore può effettuare quando egli o una creatura entro 18 metri da lui cade
Gittata: 18 metri
Componenti: V, M (una piccola piuma)
Durata: 1 minuto
L'incantatore sceglie fino a cinque creature in caduta entro
gittata. La velocità di discesa di una creatura in caduta
rallenta fino a 18 metri per round finché l'incantesimo non
termina. Se la creatura atterra prima che l'incantesimo
termini, essa non subisce alcun danno da caduta e pub
atterrare in piedi, e l'incantesimo termina per quella creatura.

CALMARE EMOZIONI
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore tenta di sopprimere le emozioni più intense in
un gruppo di persone. Ogni umanoide entro una sfera del
raggio di 6 metri centrata su un punto scelto dall'incantatore
entro gittata deve effettuare un tiro salvezza su Carisma;
una creatura può scegliere di fallire questo tiro salvezza,
se lo desidera. Se una creatura fallisce il suo tiro salvezza,
l'incantatore sceglie uno dei due effetti seguenti.
L'incantatore può sopprimere qualsiasi effetto che rende
un bersaglio affascinato o spaventato. Quando questo
incantesimo termina, ogni effetto soppresso torna a essere
applicato, purché la sua durata non si sia esaurita nel
frattempo.
In alternativa, l'incantatore può rendere un bersaglio
indifferente ad alcune creature da lui scelte nei cui confronti
il bersaglio risulterebbe ostile. Questa indifferenza
termina se il bersaglio viene attaccato o danneggiato da
un incantesimo, o se vede uno dei suoi amici subire danni.
Quando l'incantesimo termina, la creatura torna a essere
ostile, a meno che il DM non decida altrimenti.

CAMMINARE NEL VENTO
Trasmutazione di 6 livello
Tempo di Lancio: 1 minuto
Gittata: 9 metri
Componenti: V, S, M (fuoco e acqua santa)
Durata: 8 ore
L'incantatore e un massimo di dieci creature consenzienti
entro gittata e che egli sia in grado di vedere assumono
forma gassosa per la durata dell'incantesimo, apparendo
come sbuffi di fumo. Finché rimane in questa forma gassosa,
una creatura possiede una velocità di volare pari a 90 metri
e resistenza ai danni delle armi non magiche. Le uniche
azioni che una creatura può effettuare in questa forma sono
l'azione di Scatto o tornare alla propria forma normale. Per
tornare alla propria forma normale è necessario 1 minuto,
durante il quale la creatura è incapacitata e non è in grado di
muoversi. Finché l'incantesimo non termina, la creatura può
riassumere forma gassosa, cosa che richiede a sua volta 1
minuto per la trasformazione.
Se una creatura si trova in forma gassosa e sta
volando quando l'effetto termina, scende di 18 metri
per round per 1 minuto finché non atterra, senza subire
danni. Se però non riesce ad atterrare dopo 1 minuto,
cade della distanza rimanente.

CAMMINARE SULL'ACQUA
Trasmutazione di 3 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un pezzo di sughero)
Durata: 1 ora
Questo incantesimo conferisce la capacità di muoversi
su una qualsiasi superficie liquida come l'acqua, l'acido,
il fango, la neve, le sabbie mobili o la lava, come se si
trattasse di un innocuo terreno solido (ma le creature che
attraversano un tratto di lava fusa possono comunque
subire danni dal calore). Fino a dieci creature consenzienti
entro gittata e che l'incantatore sia in grado di vedere
ottengono questa capacità per la durata dell'incantesimo.
Se l'incantatore bersaglia una creatura immersa in un
liquido, l'incantesimo porta il bersaglio alla superficie di
quel liquido a una velocità di 18 metri per round.

CAMPO ANTI-MAGIA
Abiurazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (sfera del raggio di 3 metri)
Componenti: V, S, M (un pizzico di polvere o di limatura di ferro)
Durata: Concentrazione, 1 ora
L'incantatore viene circondato da una sfera di anti-magia
invisibile del raggio di 3 metri. Quest'area è isolata
dall'energia magica che pervade il multiverso. All'interno
della sfera non è possibile lanciare incantesimi, le creature
evocate scompaiono e perfino gli oggetti magici diventano
oggetti comuni. Finché l'incantesimo non termina, la sfera
si muove assieme all'incantatore, centrata su di lui.
Gli incantesimi e gli altri effetti magici, ad eccezione
di quelli creati da un artefatto o da una divinità, sono
soppressi all'interno della sfera e non possono spingersi
all'interno di essa. Uno slot speso per lanciare un
incantesimo soppresso viene consumato. Finché un effetto
è soppresso, esso non funziona, ma il tempo che trascorre
da soppresso viene comunque sottratto dalla sua durata.
Effetti a Bersaglio. Gli incantesimi e gli altri effetti
magici, come dardo incantato e charme su persone, che
bersagliano una creatura o un oggetto all'interno della
sfera non hanno alcun effetto su quel bersaglio.
Aree di Ma,Ja. L'area di un altro incantesimo o effetto
magico, come palla di fuoco, non può estendersi all'interno
della sfera. Se la sfera si sovrappone a un'area di magia,
quella parte dell'area che è coperta dalla sfera viene
soppressa. Per esempio, le fiamme create da un muro dì
fuoco sono soppresse all'interno della sfera e creano un
varco nel muro se la sovrapposizione è larga a sufficienza.
Incantesimi. Ogni incantesimo o altro effetto magico
su una creatura o un oggetto all'interno della sfora è
soppresso finché la creatura o l'oggetto in questione si
trova al suo interno.
Oggetti Magici. Le proprietà e i poteri degli oggetti
magici sono soppressi all'interno della sfera. Per esempio,
una spada lunga +1 all'interno della sfera funziona come
una spada lunga non magica.
Le proprietà e i poteri di un'arma magica vengono
soppressi se usati contro un bersaglio all'interno delJa sfora
o impugnati da un attaccante all'interno della sfera. Se
un'arma magica o una munizione magica esce interamente
dalla sfera (per esempio se l'incantatore scaglia una freccia
magica o una lancia magica verso un bersaglio al di fuori
della sfera), la magia dell'oggetto cessa di essere soppressa
non appena esce.
Viaggio Magico. Il teletrasporto e i viaggi planari non
funzionano all'interno della sfera, che essa costituisca il
punto di partenza o di arrivo di un tale viaggio magico. Un
Portale verso un altro luogo, mondo o piano di esistenza,
nonché un varco verso uno spazio extradimensionale come
quello creato dall'incantesimo trucco della corda, si chiude
temporaneamente finché si trova all'interno della sfera.
Creature e Oggetti. Una creatura o un oggetto
evocato o creato dalla magia svanisce temporaneamente
dall'esistenza all'interno della sfera. Una tale creatura
ricompare istantaneamente una volta che lo spazio che
essa occupa non si trova più all'interno della sfera.
Dissolvi Magie. Gli incantesimi e gli effetti magici
come dissolvi magie non hanno alcun effetto sulla sfera.
Analogamente, le sfere create da più incantesimi campo
anti-magia non si annullano a vicenda.

CAMUFFARE SE STESSO
Illusione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 1 ora
L'incantatore assume un aspetto diverso (che include i
suoi abiti, armatura, armi e altri oggetti personali prese11ti
sulla sua persona) per la durata dell'incantesimo o finché
egli non usa In sua azione per terminarlo. Può apparire
30 cm più alto o più basso e apparire magro, grasso o
di corporatura normale. Non può cambiare il suo tipo di
corpo, quindi deve adottare una forma che usi la stessa
disposizione basilare degli arti. Entro questi limiti, la
natura dell'illusione dipende da lui.
I cambiamenti apportati da questo incantesimo non
passano il vaglio di un'ispezione fisica. Per esempio, se
l'incantatore usa questo incantesimo per aggiungere un
cappello in testa, gli oggetti passerebbero attraverso il
cappello e chiunque tocchi l'incantatore non sentirebbe
nulla o toccherebbe la testa e i capelli dell'incantatore.
Se l'incantatore usa questo incantesimo per apparire più
magro rispetto alla realtà, quando qualcuno protende la
mano per toccarlo, urta l'incantatore quando la sua mano è
apparentemente ancora a mezz'aria.
Per capire che l'incantatore è camuffato, una creatura
può usare la sua azione per ispezionare il .suo aspetto e
deve superare una prova di Intelligenza {Indagare) contro
la CD del tiro salvezza dell'incantesimo.

CAPANNA DI LEOMUND
Invocazione di 3 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Incantatore (semisfera del raggio di 3 metri)
Componenti: V, S, M (una biglia di cristallo)
Durata: 8 ore
Una cupola di forza immobile del raggio di 3 metri si
materializza attorno all'incantatore e sopra di lui, e
permane stazionaria per la durata dell'incantesimo.
L'incantesimo termina se l'incantatore esce dalla sua area.
Nove creature di taglia Media o inferiore possono essere
ospitate all'interno della cupola assieme all'incantatore.
L'incantesimo fallisce se la sua area include una creatura
più grande o più di nove creature. Le creature e gli
oggetti all'interno della cupola al momento del lancio
dell'incantesimo possono attraversarla liberamente. A
tutte le altre creature e oggetti è proibito attraversarla. Gli
incantesimi e gli altri effetti magici non possono estendersi
attraverso la cupola o essere lanciati attraverso di essa.
L'atmosfera all'interno dell'area è gradevole e asciutta, a
prescindere dal tempo atmosferico all'esterno.
Finché l'incantesimo non termina, l'incantatore puó
decidere che all'interno della cupola ci sia luce fioca o
oscurità. La cupola appare opaca dall'esterno (di qualsiasi
colore a scelta dell'incantatore), ma appare trasparente
dall'interno.

CARATTERISTICA POTENZIATA
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M ( peli o piume strappati a una bestia)
Durata: Concentrazione, 1 ora
L'incantatore tocca una creatura e le conferisce un
potenziamento magico, scegliendo uno degli effetti seguenti
che permane finché l'incantesimo non termina.
Astuzia della Volpe. Il bersaglio dispone di vantaggio
alle prove di Intelligenza.
Forza del Toro. Il bersaglio dispone di vantaggio alle
prove di Forza e la sua capacità di trasporto raddoppia.
Grazia del Gatto. Il bersaglio dispone di vantaggio alle
prove di Destrezza. Inoltre non subisce danni se cade da 6
metri o meno purché non sia incapacitato.
Resistenza del/tOrso. Il bersaglio dispone di vantaggio
alle prove di Costituzione. Ottiene anche 2d6 punti ferita
temporanei. che vanno perduti quando l'incantesimo
termina.
Saggezza del Gufo. Il bersaglio dispone di vantaggio alle
prove di Saggezza.
Splendore dell'Aquila. Il bersaglio dispone di vantaggio
alle prove di Carisma.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, può bersagliare una creatura aggiuntiva per ogni
slot di livello superiore al 2.

CARNE IN PIETRA
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un pizzico di pietra calcarea. acqua e terra)
Durata: Concentrazione, 1 minuto
L'incantatore tenta di pietrificare una creatura entro gittata
e che egli sia in grado di vedere. Se il corpo del bersaglio ,�
fatto di carne, la creatura deve effettuare un tiro salvezza su
Costituzione. Se lo fallisce. è trattenuto e la sua carne inizia
a indurirsi, mentre se Jo supera, non subisce alcun effetto.
Una creatura trattenuta da questo incantesimo deve
effettuare un altro tiro salvezza su Costituzione alla fine
di ogni suo turno. Se supera il tiro salvezza contro questo
incantesimo per tre volte, l'incantesimo termina. Se la
creatura fallisce il tiro salvezza per tre volte, si trasforma
in pietra ed è soggetta alla condizione di pietrificato per la
durata dell'incantesimo. Non è necessario che i successi
e i fallimenti siano consecutivi; basta tenere il conto di
entrambi finché il bersaglio non accumula tre risultati di un
determinato tipo.
Se la creatura subisce una rottura fisica di qualche tipo
mentre è pietrificata. subirà una deformità analoga quando
torna al suo stato originale.
Se l'incantatore mantiene Ja concentrazione su questo
incantesimo per l'intera durata possibile, la creatura è
pietrificata finché l'effetto non viene rimosso.

CATENA DI FULMINI
Invocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (un ciuffo di pelliccia, un frammento d'ambra, di vetro o di una verga di cristallo. e tre spilli d'argento)
Durata: Istantanea
L'incantatore crea un fulmine che sfreccia verso un
bersaglio a sua scelta entro gittata e che egli sia in grado
di vedere. Tre fulmini sfrecciano poi dal bersaglio verso
un massimo di altri tre bersagli, ognuno dei quali deve
trovarsi entro 9 metri dal primo bersaglio. L'incantesimo
può bersagliare una creatura o un oggetto che può essere
bersagliato soltanto da uno dei fulmini.
Un bersaglio deve effettuare un tiro salvezza su
Destrezza. Se lo fallisce, subisce 10d8 danni da fulmine
mentre se lo supera, subisce soltanto la metà di quei danni
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o superiore, un fulmine aggiuntivo sfreccia dal primo bersaglio
a un altro bersaglio per ogni slot di livello superiore al 6.

CECITÀ/SORDITÀ
Necromanzia di 2 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V
Durata: 1 minuto
L'incantatore può accecare o assordare un nemico,
scegliendo una creatura entro gittata e che egli sia in grado
di vedere. Quella creatura deve effettuare un tiro salvezza
su Costituzione. Se lo fallisce, è accecata o assordata (a
scelta dell'incantatore) per la durata dell'incantesimo. Alla
fine di ogni suo turno può effettuare un nuovo tiro salvezza
su Costituzione. Se lo supera. l'incantesimo termina.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3• livello o
superiore. può bersagliare una creatura aggiuntiva per ogni
slot superiore al 2.

CELARE
Trasmutazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (una mistura composta di polvere di diamante, smeraldo, rubino e zaffiro del valore dì almeno 5.000 mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto
Questo incantesimo consente all'incantatore di nascondere
una creatura consenziente o un oggetto dai tentativi di
individuazione per Ja durata dell'incantesimo. Quando
l'incantatore lancia questo incantesimo e tocca il bersaglio,
quest'ultimo diventa invisibile e non può essere bersagliato
dagli incantesimi di divinazione o percepito dai sensori di
scrutamento creati dagli incantesimi di divinazione.
Se il bersaglio è una creatura. essa entra in uno stato di
animazione sospesa e smette di invecchiare; il tempo cessa
di scorrere per lei.
L'incantatore può stabilire una condizione che porrà
termine all'incantesimo prematuramente. La condizione
può essere qualsiasi cosa a sua scelta, ma deve verificarsi
o essere visibile entro 1.5 km dal bersaglio. Alcuni esempi
includono "dopo 1.000 anni" o .. quando il terrasque
si risveglia". Questo incantesimo termina anche se il
bersaglio subisce danni

CERCHIO DI MORTE
Necromanzia di 6 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (polvere ricavata da una perla nera del valore di almeno 500 mo)
Durata: Istantanea
Una sfera di energia negativa si espande crepitando fino
a un raggio di 18 metri da un punto entro gittata. Ogni
creatura entro quell'area deve effettuare un tiro salvezza
su Costituzione. Se lo fallisce, subisce 8d6 danni necrotici,
mentre se lo supera, subisce soltanto la metà di quei danni.
Ai livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o
superiore, i danni aumentano di 2d6 per ogni slot di livello
superiore al 6.

CERCHIO DI POTERE
Abiurazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 9 metri)
Componenti: V
Durata: Concentrazione, 10 minuti
Dall'incantatore si irradia un flusso di energia divina
distorcente entro un raggio di 9 metri. Finché l'incantesimo
non termina, la sfera si muove assieme a lui ed è centrata
su di lui. Per la durata dell'incantesimo, ogni creatura
amica situata entro l'area (incluso l'incantatore) dispone di
vantaggio ai tiri salvezza contro gli incantesimi e gli altri
effetti magici. Inoltre, quando una creatura influenzata
supera un tiro salvezza contro un incantesimo o un effetto
magico che consente un tiro salvezza per subire solo
la metà dei danni, in caso di tiro salvezza superato non
subisce alcun danno.

CERCHIO DI TELETRASPORTO
Evocazione di 5 livello
Tempo di Lancio: 1 minuto
Gittata: 3 metri
Componenti: V, M (gessetti e inchiostri rari infusi di gemme preziose del valore di 50 mo, che l'incantesimo consuma)
Durata: 1 round
Quando l'incantatore lancia l'incantesimo, traccia un
cerchio del diametro di 3 metri dotato di simboli che
collegano il suo luogo a un cerchio di teletrasporto
permanente a sua scelta, di cui gli è nota la sequenza di
simboli e che si trovi sul suo stesso piano di esistenza.
All'interno del cerchio tracciato dall'incantatore si apre un
portale scintillante che resta aperto fino alla fine del turno
successivo dell'incantatore. Ogni creatura che entra nel
portale appare istantaneamente entro 1,5 metri dal cerchio
di destinazione, o nello spazio libero più vicino, se quello
spazio è occupato.
Molti dei più importanti templi, gilde e altri luoghi
simili possiedono un cerchio di teletrasporto permanente.
tracciato da qualche parte entro i loro confini. A ogni
cerchio di questo tipo è abbinata una sequenza di simboli
unica, una serie di rune magiche disposte secondo uno
schema particolare. Quando l'incantatore ottiene per la
prima volta la capacità di lanciare questo incantesimo,
apprende la sequenza di simboli abbinata a due
destinazioni situate sul Piano Materiale. determinate dal
DM. L'incantatore può apprendere ulteriori sequenze di
simboli nel corso delle sue avventure. Per imparare a
memoria una nuova sequenza di simboli ha bisogno di
studiarla per 1 minuto.
L'incantatore può creare un cerchio di teletrasporto
permanente lanciando questo incantesimo sullo stesso
luogo ogni giorno per un anno. Non è obbligato a usare il
cerchio di teletrasporto quando lo lancia in questo modo.

CERCHIO MAGICO
Abiurazione di 3 livello
Tempo di Lancio: 1 minuto
Gittata: 3 metri
Componenti: V, S, M (acqua santa o polvere d'argento e di ferro del valore di almeno 100 mo, che l'incantesimo consuma)
Durata: 1 ora
L'incantatore crea un cilindro di energia magica del raggio
di 3 metri e alto 6 metri centrato su un punto del terreno
situato entro gittata e che egli sia in grado di vedere. Una
sequenza di rune scintillanti appare nel punto in cui il
cilindro si interseca con il pavimento o un'altra superficie.
L'incantatore sceglie uno o più tipi di creature seguenti:
celestiali, elementali, folletti, immondi o non morti. Il cerchio
influenza una creatura del tipo scelto nei modi seguenti:
• La creatura non può entrare volontariamente nel cilindro
tramite mezzi non magici. Se la creatura cerca di usare
una forma di teletrasporto o di viaggio interplanare per
farlo, deve prima superare un tiro salvezza su Carisma.
• L a creatura subisce svantaggio ai tiri per colpire contro i
bersagli all'interno del cilindro.
• I bersagli all'interno del cilindro non possono essere
affascinati, spaventati o posseduti dalla creatura.
Quando l'incantatore lancia questo incantesimo, pub
decidere che la sua magia funzioni nella direzione inversa,
impedendo a una creatura del tipo specificato di uscire dal
cilindro e proteggendo i bersagli all'esterno.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, la durata aumenta di 1 ora per ogni slot di livello
superiore al 3.

CHARME SU PERSONE
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: 1 ora
L'incantatore tenta di affascinare un umanoide entro gittata
e che egli sia in grado di vedere. L'umanoide deve effettuare
un tiro salvezza su Saggezza e dispone di vantaggio
se l'incantatore o i suoi compagni stanno combattendo
contro di lui. Se lo fallisce, è affascinato dall'incantatore
finché l'incantesimo non termina o finché l'incantatore
o i suoi compagni non lo danneggiano in qualche modo.
La creatura affascinata considera l'incantatore una
figura conosciuta e amichevole. Quando l'incantesimo
termina, la creatura capirà di essere stata affascinata
dall'incantatore.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, può bersagliare una creatura aggiuntiva per ogni
slot di livello superiore al 1 . Le creature devono trovarsi
a non più di 9 metri l'una dall'altra quando l'incantatore le
bersaglia.

CHIAROVEGGENZA
Divinazione di 3 livello
Tempo di Lancio: 10 minuti
Gittata: 1,5 km
Componenti: V, S, M (un focus del valore di almeno 100 mo, a scelta tra un cornetto acustico ingioiellato per l'udito o un occhio di vetro per la vista)
Durata: Concentrazione, 10 minuti
L'incantatore crea un sensore invisibile entro gittata in un
luogo a lui familiare (vale a dire un luogo che abbia visitato
o visto in precedenza), oppure in un luogo ovvio che non gli
sia familiare (per esempio dietro una porta, oltre un angolo
o in mezzo a un boschetto). Il sensore rimane al suo posto
per la durata dell'incantesimo e non è possibile attaccarlo o
interagire con esso in altri modi.
Quando l'incantatore lancia l'incantesimo sceglie tra
vista e udito. Può usare il senso scelto tramite il sensore,
come se si trovasse nel suo spazio. Usando la sua azione,
l'incantatore può passare da vista a udito o viceversa.
Una creatura in grado di vedere il sensore (per esempio
una creatura che beneficia di vedere invisibilità o vista
pura) vede un globo luminoso e intangibile grande
all'incirca quanto il pugno dell'incantatore.

CLONE
Necromanzia di 8 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (un diamante del valore di almeno 1.000 mo e un cubo di carne della creatura da clonare con spigolo di almeno 2,5 cm, che l'incantesimo consuma, e un involucro del valore di almeno 2.000 mo che abbia un coperchio sigillabile e sia abbastanza grande da contenere una creatura Media, come un'urna enorme, una bara, una ciste piena di fango nel terreno o un contenitore di cristallo riempito d'acqua salata)
Durata: Istantanea
Questo incantesimo sviluppa un duplicato inerte di una
creatura vivente come misura di sicurezza contro la morte.
Questo clone si sviluppa all'interno di un involucro sigillato
e raggiunge la taglia completa e la maturità dopo 120
giorni; l'incantatore può anche scegliere che il clone sia una
versione più giovane della stessa creatura. Il clone rimane
inerte e permane a tempo indeterminato, fintanto che il suo
involucro rimane indisturbato.
In un qualsiasi momento dopo che il clone è giunto
a maturazione, se la creatura originale muore, la sua
anima si trasferisce nel clone, purché quell'anima sia
libera e disposta a tornare. Il clone è fisicamente identico
all'originale e possiede la personalità, i ricordi e le capacità
dell'originale, ma non il suo equipaggiamento. I resti fisici
della creatura originale, se ancora esistono, diventano
inerti e non possono più essere riportati in vita, dal
momento che l'anima della creatura si trova altrove.

COLPO ACCURATO
Trucchetto di Divinazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: S
Durata: Concentrazione, 1 round
L'incantatore punta il dito contro un bersaglio entro
gittata. La sua magia gli conferisce una fugace e accurata
percezione delle difese del bersaglio. NelLivelli suo turno
successivo, l'incantatore dispone di vantaggio al suo primo
tiro per colpire contro quel bersaglio, purché l'incantesimo
non sia terminato.

COLPO INFUOCATO
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un pizzico di zolfo)
Durata: Istantanea
Una colonna verticale di fuoco divino scende dal cielo
con un boato in un luogo indicato dall'incantatore. Ogni
creatura entro un cilindro del raggio di 3 metri e alto 1 2
metri centrato su un punto entro gittata deve effettuare un
tiro salvezza su Destrezza. Se lo fallisce, subisce 4d6 danni
da fuoco e 4d6 danni radiosi, mentre se lo supera, subisce
soltanto la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6" livello
o superiore, i danni da fuoco o i danni radiosi (a scelta
dell'incantatore) aumentano di ld6 per ogni slot di livello
superiore al 5.

COLPO INTRAPPOLANTE
Evocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce una creatura
con un attacco con un'arma entro la durata di questo
incantesimo, una massa brulicante di rampicanti spinosi
appare nel luogo dell'impatto e il bersaglio deve superare
un tiro salvezza su Forza, altrimenti è trattenuto dai
rampicanti magici finché l'incantesimo non termina. Una
creatura di taglia Grande o superiore dispone di vantaggio
a questo tiro salvezza. Se il bersaglio supera il tiro
salvezza, i rampicanti si ritraggono e avvizziscono.
Finché è trattenuto da questo incantesimo, il bersaglio
subisce ld6 danni perforanti all'inizio di ogni suo turno.
Una creatura trattenuta dai rampicanti o un'altra creatura
in grado di toccare la creatura trattenuta può usare la
sua azione per effettuare una prova di Forza contro la CD
del tiro salvezza dell'incantesimo. In caso di successo, la
creatura bersaglio è liberata.
Al livelli Superiori. Se l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 Livello o
superiore, i danni aumentano di 1d6 per ogni slot di livello
superiore al 1.

COMANDO
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: 1 round
L'incantatore rivolge un comando di una parola a una
creatura entro gittata e che egli sia in grado di vedere.
Il bersaglio deve superare un tiro salvezza su Saggezza,
altrimenti obbedirà al comando nel proprio turno
successivo. L'incantesimo non ha effetto se il bersaglio è un
non morto, se non capisce il linguaggio dell'incantatore o se
il comando di quest'ultimo si rivela dannoso in modo diretto.
Di seguito sono descritti alcuni tipici comandi assieme
ai loro effetti. L'incantatore può impartire un comando
diverso da quelli descritti di seguito. In quel caso è il DM a
determinare come si comporta il bersaglio. Se il bersaglio
non può eseguire il comando, l'incantesimo termina.
Avvicinati. Il bersaglio si muove verso l'incantatore
seguendo il percorso più breve e diretto, terminando il suo
turno se giunge entro 1,5 metri da lui.
Fermo. Il bersaglio non si muove e non effettua azioni.
Una creatura volante rimane in aria, se è in grado di farlo.
Se deve muoversi per rimanere in aria, vola della distanza
minima richiesta per rimanere in aria.
FuUI. Il bersaglio usa il suo turno per allontanarsi
dall'incantatore nel modo più rapido possibile.
Lascia. Il bersaglio lascia cadere ciò che stava
impugnando, poi termina il suo turno.
Supplica. li bersaglio cade a terra prono e termina il suo
turno.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2· livello o
superiore, può influenzare una creatura aggiuntiva per ogni
slot di livello superiore al 1 ". Le creature devono trovarsi
a non più di 9 metri runa dall'altra quando l'incantatore le
bersaglia.

COMPRENSIONE DEI LINGUAGGI
Divinazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un pizzico di fuliggine e di sale)
Durata: 1 ora
Per la durata dell'incantesimo, l'incantatore comprende il
significato letterale di qualsiasi linguaggio parlato che è in
grado di sentire. Comprende inoltre ogni linguaggio scritto
che è in grado di vedere, ma deve toccare la superficie su
cui sono scritte le parole. È necessario circa 1 minuto per
leggere una pagina di testo.
Questo incantesimo non decodifica i messaggi segreti di
un testo o di un glifo, come un sigillo arcano, che non faccia
parte di un linguaggio scritto.

COMPULSIONE
Ammaliamento di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Le creature a scelta dell'incantatore entro gittata, che siano
in grado di sentirlo e che egli sia in grado di vedere, devono
effettuare un tiro salvezza su Saggezza. Un bersaglio supera
automaticamente questo tiro salvezza se non può essere
affascinato. In caso di tiro salvezza fallito, un bersaglio è
influenzato da questo incantesimo. Finché l'incantesimo
non termina, l'incantatore può usare un'azione bonus a ogni
suo turno per designare una direzione orizzontale rispetto
a lui. Ogni bersaglio influenzato deve usare la maggior
parte possibile del suo movimento per muoversi in quella
direzione nel suo turno successivo. Può effettuare la sua
azione prima di muoversi. Dopo essersi mosso in questo
modo, un bersaglio può effettuare un altro tiro salvezza su
Saggezza per cercare di terminare l'effetto.
Un bersaglio non è obbligato a muoversi verso un terreno
palesemente pericoloso, come un incendio o una fossa, ma
provocherà attacchi di opportunità nel muoversi verso la
direzione designata.

COMUNIONE
Divinazione di 5 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Incantatore
Componenti: V, S, M (incenso e una fiala di acqua santa o sacrilega)
Durata: 1 minuto
L'incantatore contatta la sua divinità o un emissario di
quella divinità e pone fino a tre domande a cui sia possibile
rispondere sì o no. L'incantatore deve porre le domande
prima che l'incantesimo termini e riceve la risposta esatta
a ogni domanda.
Gli esseri divini non sono necessariamente onniscienti,
quindi l'incantatore potrebbe ricevere "incerto'' come
risposta se una domanda riguarda informazioni che vanno
oltre le conoscenze di quella divinità. Nel caso in cui una
risposta di una parola possa rivelarsi fuorviante o contraria
agli interessi della divinità, il DM pub fornire come risposta
una breve frase.
Se l'incantatore lancia l'incantesimo due o più volte
prima di completare il suo riposo lungo successivo, esiste
una probabilità cumulativa del 25 per cento per ogni lancio
dopo il primo che non ottenga alcuna risposta. Il DM
effettua questo tiro in segreto.

COMUNIONE CON LA NATURA
Divinazione di 5 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Incantatore
Componenti: V, S
Durata: Istantanea
L'incantatore diventa un tutt'uno con la natura e sviluppa
un'accurata conoscenza del territorio circostante. Nei
luoghi esterni, questo incantesimo fornisce all'incantatore
una conoscenza del territorio entro un raggio di 4,5 km.
Nelle caverne e negli altri ambienti sotterranei naturali il
raggio è limitato a 90 metri. L'incantesimo non funziona là
dove la natura è stata sostituita dalle costruzioni artificiali,
come per esempio nei dungeon e nei paesi.
L'incantatore apprende istantaneamente fino a tre fatti a
sua scelta sugli argomenti seguenti correlati all'area:
• terreni e masse d'acqua
• minerali, animali, vegetali o popolazioni rilevanti
• celestiali, elementali, folletti, immondi o non morti potenti
• influenza da altri piani di esistenza
• edifici
Per esempio, l'incantatore potrebbe determinare la
posizione di un potente non morto nell'area, delle principali
fonti di acqua potabile e di eventuali paesi vicini.

CONFUSIONE
Ammaliamento di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (tre gusci di noce)
Durata: Concentrazione, 1 minuto
Questo incantesimo assale e sconvolge le menti delle
creature, inducendole al delirio e provocando azioni
incontrollate. Ogni creatura entro una sfera del raggio di 3
metri centrata su un punto a scelta dell'incantatore entro
gittata deve superare un tiro salvezza su Saggezza nel
momento in cui l'incantesimo viene lanciato, altrimenti ne
sarà influenzata.
Un bersaglio influenzato non può effettuare reazioni
e deve tirare un dlO all'inizio di ogni suo turno per
determinare il suo comportamento per quel turno.
dlO Comportamento:
1 La creatura usa tutto il suo movimento per muoversi in
una direzione casuale. Per determinare la direzione si
tira un d8 e si assegna una direzione a ogni faccia del
dado. La creatura non effettua un'azione in questo turno.
2-6 La creatura non s:i muove e non effettua azioni in
questo turno.
7-8 La creatura usa la sua azione per effettuare un
attacco In mischia contro una creatura determinata
casualmente e situata entro la sua portata. Se non c'è
alcuna creatura entro portata, la creatura non fa nulla.
9-10 La creatura può agire e muoversi normalmente.
Alla fine di ogni suo turno, un bersaglio influenzato
può effettuare un tiro salvezza su Saggezza. Se lo supera,
questo effetto per lui termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 5 livello o
superiore, il raggio della sfera aumenta di 1,5 metri per
ogni slot di livello superiore al 4.

CONO DI FREDDO
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cono di 18 metri)
Componenti: V, S, M (un piccolo cono di vetro o di cristallo)
Durata: Istantanea
Una scarica di aria fredda prorompe dalle mani
dell'incantatore. Ogni creatura entro un cono di 18 metri
deve effettuare un tiro salvezza su Costituzione. Se lo
fallisce, subisce 8d8 danni da freddo, mentre se lo supera,
subisce soltanto la metà di quei danni.
Una creatura uccisa da questo incantesimo diventa una
statua di ghiaccio finché non si scioglie.
Al livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6 livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 5.

CONOSCENZA DELLE LEGGENDE
Divinazione di 5 livello
Tempo di Lancio: 10 minuti
Gittata: Incantatore
Componenti: V, S, M (incenso del valore di almeno 250 mo, che l'incantesimo consuma, e quattro bastoncini d'avorio del valore di almeno 50 mo ciascuno)
Durata: Istantanea
L'incantatore nomina o descrive una persona, un luogo o
un oggetto. L'incantesimo trasmette nella sua mente un
breve riassunto delle conoscenze più significative relative
a ciò che l'incantatore ha nominato. Queste conoscenze
possono includere storie attuali, racconti dimenticati o
perfino conoscenze segrete che non sono mai divenute
note ai più. Se ciò che l'incantatore ha nominato non è
di importanza leggendaria, nessuna informazione viene
fornita. Più informazioni l'incantatore già possiede, più
precise e dettagliate saranno quelle che riceve.
Le informazioni apprese dall'incantatore sono accura1e.
ma potrebbero essere espresse tramite metafore
e allegorie. Per esempio, se l'incantatore impugna
un'ascia magica, l'incantesimo potrebbe fornire queste
informazioni: "La sventura attende il malfattore la cui
mano tocca l'ascia, poiché perfino l'impugnatura pub
tagliare la mano di chi è malvagio. Soltanto un vero Figlio
della Pietra, fedele a Moradin e da lui benvoluto, potrà
risvegliare i veri poteri dell'ascia, e soltanto con la parola
sacra Rudnogg sulle sue labbra".

CONTAGIO
Necromanzia di 5 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: 7 giorni
Il tocco dell'incantatore trasmette una malattia.
L'incantatore effettua un attacco in mischia con questo
incantesimo contro una creatura entro la sua portata. Se
colpisce, contamina la creatura con una malattia a sua
scelta tra quelle descritte di seguito.
Alla fine di ogni suo turno, il bersaglio deve effettuare
un tiro salvezza su Costituzione. Dopo avere fallito tre di
questi tiri salvezza, gli effetti della malattia permangono
per la durata dell'incantesimo e la creatura smette di
effettuare questi tiri salvezza. Dopo avere superato tre di
questi tiri salvezza, la creatura si riprende dalla malattia e.
l'incantesimo termina.
Dal momento che questo incantesimo induce una
malattia naturale nel suo bersaglio, ogni effetto che
rimuove una malattia o migliora gli effetti di una malattia è
applicabile al bersaglio.
Carne Putrefatta. La carne della creatura si decompone.
La creatura subisce svantaggio alle prove di Carisma e
vulnerabilità a tutti i danni.
Devastazione Vischiosa. La creatura inizia a perdere
sangue inesorabilmente e subisce svantaggio alle prove di
Costituzione e ai tiri salvezza su Costituzione. Inoltre, ogni
volta che la creatura subisce danni, è stordita fino alla fine
del suo turno successivo.
Febbre Lurida. Il corpo della creatura brucia di febbre.
La creatura subisce svantaggio alle prove di Forza, ai tiri
salvezza su Forza e al tiri per colpire che utilizzano la Forza.
Fuoco Mentale. La mente della creatura è febbricitante.
La creatura subisce svantaggio alle prove di Intelligenza
e ai tiri salvezza su Intelligenza, e si comporta come se
fosse sotto gli effetti dell'incantesimo confusione durante il
combattimento.
Infermità Accecante. La mente della creatura è scossa
dal dolore e i suoi occhi diventano lattiginosi. La creatura
subisce svantaggio alle prove di saggezza, ai tiri salvezza
su Saggezza ed è accecata.
Tremarella. La creatura è colta da violenti brividi,
subisce svantaggio alle prove di Destrezza, ai tiri salvezza su
Destrezza e ai tiri per colpire che utilizzano la Destrezza.

CONTATTARE ALTRI PIANI
Divinazione di 5 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Incantatore
Componenti: V
Durata: 1 minuto
L'incantatore contatta mentalmente un semidio, lo spirito
di un sapiente defunto da tempo o qualche altra misteriosa
entità da un altro piano. Contattare questa intelligenza
extraplanare può spossare o perfino sconvolgere la sua
mente. Quando l'incantatore lancia questo incantesimo,
effettua un tiro salvezza su Intelligenza con CD 15. Se lo
fallisce, subisce 6d6 danni psichici e diventa pazzo finché non
completa un riposo lungo. Finché è pazzo, non può effettuare
azioni, non capisce ciò che dicono le altre creature, non
sa leggere e dice solo parole senza senso. Un incantesimo
ristorare superiore lanciato su di lui termina questo effetto.
Se supera il tiro salvezza, l'incantatore può porre all'entità
un massimo di cinque domande. Deve porre le domande
prima che l'incantesimo termini. U DM risponde a ogni
domanda con una parola, come "sl", "no", "forse", "mai",
"irrilevante" o "ignoto" (se l'entità non conosce la risposta
alla domanda). Se una risposta di una sola parola può
risultare fuorviante, il DM può invece fornire una breve
frase come risposta.

CONTINGENZA
Invocazione di 6 livello
Tempo di Lancio: 10 minuti
Gittata: Incantatore
Componenti: V, S, M (una statuetta dell'incantatore scolpita in avorio e decorata di gemme del valore di almeno 1.500 mo)
Durata: 10 giorni
L'incantatore sceglie un incantesimo di 5 livello o inferiore
che sia in grado di lanciare, che abbia un tempo di lancio
di 1 azione e che abbia come bersaglio l'incantatore stesso.
L'incantatore può lanciare quell'incantesimo (chiamato
l'incantesimo contingente) come parte del lancio di
contingenza, spendendo gli slot incantesimo per entrambi.
L'incantesimo contingente, tuttavia, non ha effetto. Avrà
invece effetto quando si verificherà una determinata
circostanza descritta dall'incantatore al momento del
lancio dei due incantesimi. Per esempio, un lancio di
contingenza con respirare sott'acqua potrebbe stabilire che
respirare sott'acqua avrà effetto quando l'incantatore sarà
sommerso dall'acqua o da un liquido simile.
L'incantesimo contingente ha effetto immediato non appena la circostanza viene soddisfatta la prima volta, che
l'incantatore lo desideri o meno, poi contingenza termina.
L'incantesimo contingente ha effetto solo sull'incantatore,
anche se normalmente può bersagliare altri. L'incantatore
può usare soltanto un incantesimo di contingenza alla
volta. Se lancia di nuovo questo incantesimo, l'effetto di un
altro incantesimo contingenza presente su di lui termina.
Inoltre, contingenza termina qualora la sua componente
materiale cessi di trovarsi sulla persona dell'incantatore.

CONTRO INCANTESIMO
Abiurazione di 3 livello
Tempo di Lancio: 1 reazione, che l'incantatore effettua quando vede una creatura entro 18 metri da lui che lancia un incantesimo
Gittata: 18 metri
Componenti: S
Durata: Istantanea
L'incantatore tenta di interrompere una creatura nell'atto
di lanciare un incantesimo. Se la creatura sta lanciando
un incantesimo di 3' livello o inferiore. l'incantesimo
della creatura fallisce e non ha effetto. Se la creatura
sta lanciando un incantesimo di 4 livello o superiore,
l'incantatore effettua una prova di caratteristica usando
la sua caratteristica da incantatore. La CD è pari a 10 +il
livello dell'incantesimo della creatura. In caso di successo.
l'incantesimo della creatura fallisce e non ha effetto.
ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4' livello o
superiore, l'incantesimo interrotto non ha effetto se il suo
livello è pari o inferiore al livello dello slot incantesimo
usato dall'incantatore.

CONTROLLARE ACQUA
Trasmutazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V, S, M (una goccia d1acqua e un pizzico di polvere)
Durata: Concentrazione, 10 minuti
Finché l'incantesimo non termina, l'incantatore controlla
una massa libera d'acqua in un•area a sua scelta, fino a un
volume massimo pari a un cubo con spigolo di 30 metri.
Può scegliere uno qualsiasi degli effetti seguenti quando
lancia questo incantesimo. Con un'azione nel suo turno può
ripetere lo stesso effetto o sceglierne uno diverso.
Deviare la Corrente. L'incantatore fa scorrere l'acqua
corrente all'interno dell'area in una direzione a sua scelta,
anche se l'acqua deve superare degli ostacoli, risalire una
parete o scorrere in altre direzioni improbabili. L'acqua
nell'area si muove secondo le indicazioni dell'incantatore,
ma una volta giunta oltre l'area dell'incantesimo, riprende
a scorrere normalmente, secondo le condizioni del
terreno. L'acqua continua a scorrere nella direzione scelta
dall'incantatore finché l'incantesimo non termina o finché
l'incantatore non sceglie un effetto diverso.
Gorgo. Questo effetto richiede una massa d'acqua in
un'area quadrata con lato di almeno 15 metri e profonda
almeno 7,5 metri. Il gorgo forma un vortice largo 1,5
metri alla base e 15 metri in cima. e alto 7,5 metri. Ogni
creatura o oggetto situato in acqua ed entro 7,5 metri
dal vortice viene trascinato di 3 metri verso di esso. Una
creatura può allontanarsi a nuoto dal vortice effettuando
una prova di Forza (Atletica) contro la CD del tiro salvezza
dell'incantesimo.
Quando una creatura entra nel vortice per la prima volta
in un turno o vi inizia il proprio turno, deve effettuare un
tiro salvezza su Forza. Se lo fallisce, subisce 2d8 danni
contundenti ed è catturata dal vortice finché l'incantesimo
non termina, mentre se lo supera, subisce la metà dei danni
e si libera dal vortice. Una creatura nel vortice può usare la
sua azione per tentare di allontanarsi a nuoto da esso nel
modo sopra descritto, ma subisce svantaggio alla prova di
Forza (Atletica) richiesta per farlo.
La prima volta in ogni turno che un oggetto entra nel
vortice, quell'oggetto subisce 2d8 danni contundenti; questi
danni vengono inferti in ogni round in cui l'oggetto rimane
nel vortice.
Inondazione. L'incantatore fa in modo che il livello di
tutta l'acqua ferma nell'area si sollevi di un massimo di
6 metri. Se l'area include una riva, l'acqua crescente si
riversa sulla terraferma.
Se l'incantatore sceglie un'area contenuta in una vasta
massa d'acqua, genera invece un'onda alta 6 metri da un
lato dell'area all'altro, che si riversa poi in avanti. Ogni
imbarcazione di taglia Enorme o inferiore che si trovi sul
cammino viene trasportata dall'onda fino all'altro lato. Ogni
imbarcazione di taglia Enorme o inferiore colpita dall'onda
ha una probabilità del 25 per cento di capovolgersi.
li livello dell'acqua rimane elevato finché l'incantesimo
non termina o finché l'incantatore non sceglie un effetto
diverso. Se questo effetto ha prodotto un'onda, l'onda
si ripete all'inizio del turno successivo dell'incantatore
fintanto che l'effetto di inondazione permane.
Separare le Acque. L'incantatore fa in modo che l'acqua
nell'area si separi per creare un varco. Il varco attraversa
tutta l'area di effetto e le acque separate formano un muro
su entrambi i lati. Il varco rimane finché l'incantesimo non
termina o l'incantatore non sceglie un effetto diverso. Poi
l'acqua si riversa lentamente all'interno del varco nel corso
del round successivo, finché il livello normale dell'acqua
non viene ripristinato.

CONTROLLARE TEMPO ATMOSFERICO
Trasmutazione di 8 livello
Tempo di Lancio: 10 minuti
Gittata: Incantatore (raggio di 7,5 km)
Componenti: V, S, M (incenso bruciato e frammenti di terra e di legno mescolati nell'acqua)
Durata: Concentrazione, 8 ore
L'incantatore assume il controllo del tempo atmosferico
entro un raggio di 7,5 km per la durata dell'incantesimo.
Deve trovarsi all'esterno per lanciare questo incantesimo.
Se si muove in un luogo in cui non dispone di una linea
diretta fino al cielo. l'incantesimo termina prematuramente.
Quando l'incantatore lancia l'incantesimo, cambia le
condizioni atmosferiche attuali determinate dal DM in
base al clima e alla stagione. L'incantatore può cambiare
le precipitazioni, le temperature e il vento. Occorrono ld4
x 10 minuti prima che le nuove condizioni abbiano effetto.
Quando questo accade, l'incantatore può cambiare di nuovo
le condizioni. Quando l'incantesimo termina, il tempo
atmosferico torna gradualmente alla normalità.
Quando l'incantatore cambia le condizioni atmosferiche,
trova la ,condizione attuale nelle tabelle sottostanti e le
cambia di un grado verso l'alto o verso il basso. Quando
cambia il vento, può cambiarne anche la direzione.
PRECIPITAZIONI
Grado Condizione
1- Sereno
2- Poco nuvoloso
3- Nuvoloso o nebbia
4- Pioggia, grandine o neve
5- Pioggia torrenziale, grandine fitta o tormenta
TEMPERATURA
Grado Condizione
1- Caldo insopportabile
2- Caldo
3- Temperato
4- Fresco
5- Freddo
6- Freddo artico
VENTO
Grado Condizione
1- Calmo
2- Vento moderato
3- Vento forte
4- Burrasca
5- Tempesta

CORDONE DI FRECCE
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 1,5 metri
Componenti: V, S. M (quattro o più frecce o quadrelli)
Durata: 8 ore
L'incantatore colloca quattro munizioni non magiche (frecce
o quadrelli) nel terreno entro gittata e le rende magiche al
fine di proteggere l'area. Finché l'incantesimo non termina,
ogni volta che una creatura diversa dall'incantatore giunge
entro 9 metri dalle munizioni per la prima volta in un turno
o vi termina n proprio turno, una delle munizioni sfreccia in
volo per colpirJa. La creatura deve superare un tiro salvezza
su Destrezza altrimenti subirà 1d6 danni perforanti. L a
munizione viene distrutta. L'incantesimo termina quando
non rimangono più munizioni.
Quando l'incantatore lancia questo incantesimo, può
designare un qualsiasi numero di creature a sua scelta che
saranno ignorate dall'incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia
questo incantesimo usando uno slot incantesimo di 3
livello o superiore, l'ammontare di munizioni che può
essere influenzato aumenta di due per ogni slot di livello
superiore al 2.

CORONA DI FOLLIA
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Un umanoide a scelta dell'incantatore, situato entro gittata
e che l'incantatore sia in grado di vedere, deve superare un
tiro salvezza su Saggezza, altrimenti diventa affascinato
dall'incantatore per la durata dell'incantesimo. Finché il
bersaglio è affascinato in questo modo, una corona di ferro
deforme e tagliente compare sulla sua testa e nei suoi occhi
risplende un bagliore di follia.
Il bersaglio affascinato deve usare la sua azione prima di
muoversi in ognuno dei suoi turni per effettuare un attacco
in mischia contro una creatura diversa da se stesso e
scelta mentalmente dall'incantatore. Il bersaglio può agire
normalmente nel suo turno se l'incantatore non sceglie
nessuna creatura o se nessuna creatura si trova entro la sua
portata.
Nei suoi turni successivi, l'incantatore deve usare la sua
azione per mantenere il controllo sul bersaglio, altrimenti
l'incantesimo termina. Il bersaglio può inoltre effettuare un
tiro salvezza su Saggezza alla fine di ogni suo turno. Se lo
supera, l'incantesimo termina.

COSTRIZIONE
Ammaliamento di 5 livello
Tempo di Lancio: 1 minuto
Gittata: 18 metri
Componenti: V
Durata: 30 giorni
L'incantatore impartisce un comando magico a una
creatura entro gittata e che egli sia in grado di vedere,
obbligandola a compiere per lui un servizio di qualche
tipo o ad astenersi da un corso d'azione o un'attività, come
da lui stabilito. Se la creatura è in grado di comprendere
l'incantatore, deve superare un tiro salvezza su Saggezza,
altrimenti è affascinata dall'incantatore per la durata
dell'incantesimo. Finché la creatura è affascinata
dall'incantatore, subisce 5dlO danni psichici ogni volta
che agisce in maniera dichiaratamente contraria alle sue
istruzioni, ma non più di una volta al giorno. Se la creatura
non è in grado di comprendere l'incantatore, non subisce
l'effetto di questo incantesimo.
L'incantatore può impartire un qualsiasi comando a sua
scelta, ad eccezione di quelle attività che condurrebbero
a morte certa. Se l'incantatore impartisce un comando
suicida, l'incantesimo termina.
L'incantatore può terminare l'incantesimo
prematuramente usando un'azione. Anche un incantesimo
desiderio, rimuovi maledizione o ristorare superiore è in
grado di porre termine all'incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7' o s• livello,
la durata è pari a 1 anno. Quando l'incantatore lancia
questo incantesimo usando uno slot incantesimo di 9
livello, l'incantesimo dura finché uno degli incantesimi
menzionati più sopra non vi pone termine.

CREARE CIBO E ACQUA
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Istantanea
L'incantatore crea 22,5 kg di cibo e 120 litri di acqua sul
terreno o nei contenitori entro gittata, sufficienti a offrire
sostentamento a un massimo di quindici umanoidi o
cinque cavalcature per 24 ore. Il cibo è poco saporito, ma è
nutriente. Il cibo si guasta se non viene mangiato nel giro di
24 ore, mentre l'acqua è pulita e non va a male.

CREARE NON MORTI
Necromanzia di 6 livello
Tempo di Lancio: 1 minuto
Gittata: 3 metri
Componenti: V, S, M (un vaso d'argilla pieno di terra raccolta da un cimitero, un vaso d'argilla pieno di acqua salmastra e un'onice da 150 mo per ogni cadavere)
Durata: Istantanea
L'incantatore può lanciare questo incantesimo solo di
notte. Sceglie fino a tre cadaveri umanoidi di taglia Media
o Piccola situati entro gittata. Ogni cadavere diventa un
ghoul sotto il suo controllo. (Il DM possiede le statistiche di
gioco di queste creature.)
A ogni suo turno l'incantatore può usare un'azione
bonus per comandare mentalmente qualsiasi creatura da
lui creata tramite questo incantesimo e situata entro 36
metri da lui (se controlla più creature, può comandarle
tutte o nessuna allo stesso tempo, impartendo lo stesso
comando a ogni creatura). L'incantatore decide quale azione
effettuerà la creatura e dove si muoverà durante il suo turno
successivo, oppure può impartire un comando generale,
come per esempio vigilare su una camera o un corridoio in
particolare. Se l'incantatore non impartisce alcun comando,
la creatura si limita a difendersi dalle creature ostili. Una
volta ricevuto un ordine, la creatura continua a seguirlo
finché non ha portato a termine il compito.
La creatura rimane sotto il controllo dell'incantatore
per 24 ore, dopodiché smette di obbedire ai comandi che
l'incantatore le ha impartito. Per mantenere il controllo
della creatura per altre 24 ore, l'incantatore deve lanciare
di nuovo questo incantesimo su di essa prima che l'attuale
periodo di 24 ore termini. Questo uso dell'incantesimo
gli permette di ristabilire il controllo su un massimo di
tre creature da lui animate tramite questo incantesimo,
anziché animarne di nuove.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di T livello, anima
o ristabilisce il controllo su quattro ghoul. Quando lancia
questo incantesimo usando uno slot incantesimo di s· livello,
anima o ristabilisce il controllo su cinque ghoul, o due ghast
o wight. Quando lancia questo incantesimo usando uno slot
incantesimo di 9" livello, anima o ristabilisce il controllo su
sei ghoul, tre ghast o wight, o due mummie.

CREARE O DISTRUGGERE ACQUA
Trasmutazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una goccia d'acqua per creare l'acqua o alcuni granelli di sabbia per distruggerla)
Durata: Istantanea
L'incantatore può creare o distruggere l'acqua.
Creare Acqua. L'incantatore crea fino a 40 litri d'acqua
pulita in un contenitore aperto situato entro gittata. In
alternativa, l'acqua cade sotto forma di pioggia in un cubo
con spigolo di 9 metri entro gittata, estinguendo le fiamme
nell'area.
Distruggere Acqua. L'incantatore distrugge fino a 40
litri d'acqua in un contenitore aperto situato entro gittata.
In alternativa, può distruggere la nebbia all'interno di un
cubo con spigolo di 9 metri situato entro gittata.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore. crea o distrugge 40 litri aggiuntivi d'acqua,
oppure lo spigolo del cubo aumenta di 1,5 metri per ogni
slot di livello superiore al 1.

CREAZIONE
Illusione di 5 livello
Tempo di Lancio: 1 minuto
Gittata: 9 metri
Componenti: V, S, M (un minuscolo frammento di materia dello stesso tipo dell'oggetto che l'incantatore intende creare)
Durata: Speciale
L'incantatore chiama a sé dei filamenti di sostanza d'ombra
dalla Coltre Oscura per creare un oggetto non vivente di
materia vegetale entro gittata: stoffa, corda, legno o altri
materiali simili. Può usare questo incantesimo anche per
creare oggetti fatti di minerali come pietra, cristallo o
metallo. L'oggetto creato non deve essere più grande di un
cubo con spigolo di 1,5 metri e deve avere una forma e un
materiale che l'incantatore abbia già visto in precedenza.
La durata dipende dal materiale dell'oggetto. Se l'oggetto
è composto da più materiali, si usa la durata più breve.
Materiale - Durata
Materia vegetale - 1 giorno
Pietra o cristallo - 12 ore
Metalli preziosi - 1 ora
Gemme - 10 minuti
Adamantio o mithral - 1 minuto
L'uso di qualsiasi materiale creato da questo incantesimo
come componente materiale di un altro incantesimo
provoca il fallimento di quell'incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6• livello o
superiore, lo spigolo del cubo aumenta di 1,5 metri per ogni
slot di livello superiore al 5 .

CRESCITA DI SPINE
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (sette spine aguzze o sette rametti appuntiti)
Durata: Concentrazione, 10 minuti
Spine e spuntoni nascono dal terreno entro un raggio di
6 metri centrato su un punto situato entro gittata. L'area
diventa terreno difficile per la durata dell'incantesimo.
Quando una creatura entra nell'area o si muove al suo
interno, subisce 2d4 danni perforanti per ogni 1.5 metri di
cui si muove.
La trasformazione del terreno è mimetizzata in modo
da sembrare naturale. Ogni creatura che non abbia
osservato l'area al momento del lancio dell'incantesimo
deve effettuare una prova di Saggezza (Percezione) contro
la CD del tiro salvezza dell'incantesimo per riconoscere la
pericolosità del terreno prima di entrarvi.

CRESCITA VEGETALE
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione o 8 ore
Gittata: 45 metri
Componenti: V, S
Durata: Istantanea
Questo incantesimo incanala vitalità nei vegetali di un'area
specifica. Esistono due possibili usi dell'incantesimo, mirati
a fornire benefici immediati o a lungo termine.
Se l'incantatore lancia questo incantesimo usando 1
azione, sceglie un punto situato entro gittata. Tutti i vegetali
normali entro un raggio di 30 metri centrato su quel punto
crescono rigogliosamente fino a formare un groviglio. Una
creatura che si muove attraverso quell'area deve spendere
120 cm di movimento per ogni 30 cm di cui si muove.
L'incantatore può escludere una o più aree di qualsiasi
dimensione all'interno dell'area dell'incantesimo per fare in
modo che non ne siano influenzate.
Se l'incantatore lancia questo incantesimo nell'arco di
8 ore, rende la terra fertile. Tutti i vegetali entro un raggio
di 750 metri centrato in un punto situato entro gittata
cresceranno rigogliosamente per 1 anno. Al momento del
raccolto produrranno il doppio del cibo normale.

CURA FERITE
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
Una creatura toccata dall'incantatore recupera un numero
di punti ferita pari a ld8 +il modificatore di caratteristica
da incantatore. Questo incantesimo non ha effetto sui
costrutti o sui non morti.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore. la guarigione aumenta di ld8 per ogni slot di
livello superiore al 1.

CURA FERITE DI MASSA
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
Un'ondata di energia curativa si sprigiona da un punto a
scelta dell'incantatore situato entro gittata. L'incantatore
indica fino a sei creature entro una sfera del raggio di
9 metri centrata su quel punto. Ogni creatura bersaglio
recupera un ammontare di punti ferita pari a 3d8 + il
modificatore di caratteristica da incantatore. Questo
incantesimo non ha effetto sui costrutti o sui non morti.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6" livello o
superiore, la guarigione aumenta di ld8 per ogni slot di
livello superiore al 5.

DANZA IRRESISTIBILE DI OTTO
Ammaliamento di 6 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V
Durata: Concentrazione, 1 minuto
L'incantatore sceglie una creatura entro gittata e che egli sia
in grado di vedere. La creatura inizia a danzare comicamente
sul posto, agitando le braccia, battendo i piedi a terra e facendo
capriole per la durata dell'incantesimo. Le creature che non
possono essere affascinate sono immuni a questo incantesimo.
Una creatura danzante deve usare tutto il suo movimento per
danzare senza uscire dal suo spazio e subisce svantaggio ai tiri
salvezza su Destrezza e ai tiri per colpire. Finché il bersaglio è
influenzato da questo incantesimo, le altre creature dispongono
di vantaggio ai tiri per colpire contro di esso. Con un'azione.
una creatura danzante può effettuare un tiro salvezza su
Saggezza per riprendere il controllo di se stessa. Se lo supera,
l'incantesimo termina.

DARDO DI FUOCO
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
L'incantatore scaglia una scintilla di fuoco verso una
creatura o un oggetto situato entro gittata, effettuando
un attacco a distanza con questo incantesimo contro il
bersaglio. Se colpisce, il bersaglio subisce ldlO danni
da fuoco. Un oggetto infiammabile colpito da questo
incantesimo si incendia se non è indossato o trasportato.
I danni di questo incantesimo aumentano di 1dlO quando
l'incantatore arriva al 5 livello (2d10). 11 livello (3d 10) e
17 livello (4dl0).

DARDO INCANTATO
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
L'incantatore crea tre dardi lucenti di forza magica. Ogni
dardo colpisce una creatura scelta dall'incantatore, situata
entro gittata e che egli sia in grado di vedere. Un dardo
infligge 1d4+1 danni da forza al suo bersaglio. Tutti i dardi
colpiscono simultaneamente e l'incantatore può dirigerli
per colpire una sola creatura o più creature.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, l'incantesimo crea un dardo aggiuntivo per ogni
slot di livello superiore al 1.

DARDO STREGATO
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un rametto di un albero colpito da un fulmine)
Durata: Concentrazione, 1 minuto
Un raggio di energia azzurra crepitante sfreccia verso una
creatura entro gittata, formando una scarica di fulmini
prolungata che corre dall'incantatore al bersaglio. L'incantatore
effettua un attacco a distanza con questo incantesimo contro
quella creatura. Se colpisce. il bersaglio subisce ld12 danni
da fulmine, e l'incantatore, durante ogni proprio turno per
la durata dell'incantesimo, può usare la propria azione per
infliggere automaticamente ld12 danni da fulmine al bersaglio.
L'incantesimo termina se l'incantatore usa la propria azione
per fare qualsiasi altra cosa. L'incantesimo termina inoltre
se il bersaglio si porta al di fuori della gittata o se beneficia di
copertura totale nei confronti dell'incantatore.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore. i danni iniziali aumentano di 1d12 per ogni slot di
livello superiore al 1.

DARDO TRACCIANTE
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: 1 round
Un lampo di luce sfreccia verso una creatura scelta
dall'incantatore e situata entro gittata. L'incantatore
effettua un attacco a distanza con questo incantesimo
contro il bersaglio. Se lo colpisce, il bersaglio subisce 4d6
danni radiosi, e il successivo tiro per colpire effettuato
contro il bersaglio entro la fine del turno successivo
dell'incantatore dispone di vantaggio, grazie all'alone
mistico di luce fioca che lo avvolge fino ad allora.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2• livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
superiore al 1.

DEFLAGRAZIONE OCCULTA
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
Un raggio di energia crepitante sfreccia verso una creatura
entro gittata. L'incantatore effettua un attacco a distanza
con questo incantesimo contro il bersaglio. Se lo colpisce,
il bersaglio subisce ldlO danni da forza.
Quando l'incantatore arriva ai livelli superiori, l'incantesimo
crea più raggi: due raggi al 5" livello, tre raggi all'11 livello
e quattro raggi al 17 livello. L'incantatore può indirizzare i raggi contro lo stesso bersaglio o contro bersagli diversi, effettuando un tiro per colpire separato per ogni raggio.

DESIDERIO
Evocazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V
Durata: Istantanea
Desiderio è il più potente incantesimo che una creatura
mortale sia in grado di lanciare. Pronunciando
semplicemente il proprio desiderio ad alta voce,
l'incantatore altera le fondamenta stesse della realtà in
base n ciò che desidera.
L'uso base di questo incantesimo è riprodurre un qualsiasi
altro incantesimo di livello pari o inferiore all'8. L'incantatore
non deve soddisfare alcun requisito di quell'incantesimo,
nemmeno gli eventuali requisiti in componenti costose.
L'incantesimo ha semplicemente effetto.
In alternativa, l'incantatore può creare uno degli effetti
seguenti a sua scelta:
• L'incantatore crea un oggetto del valore massimo di
25.000 mo che non sia un oggetto magico. L'oggetto non
può essere più lungo di 90 metri in ogni dimensione e
compare a terra, in uno spazio libero che l'incantatore sia
in grado di vedere.
• L'incantatore consente a un massimo di venti creature
che egli sia in grado di vedere di recuperare tutti i punti
ferita e terminare tutti gli effetti su di esse come descritto
nell'incantesimo ristorare superiore.
• L'incantatore conferisce a un massimo di dieci creature
che egli sia in grado di vedere resistenza a un tipo di
danni a sua scelta.
• L'incantatore conferisce a un massimo di dieci creature
che egli sia in grado di vedere immunità a un singolo
incantesimo o a un altro effetto magico per 8 ore.
Per esempio, potrebbe rendere se stesso e tutti i suoi
compagni immuni all'attacco da risucchio di un lich.
• L'incantatore annulla un singolo evento recente
imponendo la ripetizione di un qualsiasi tiro effettuato
entro l'ultimo round (incluso il suo ultimo turno). La
realtà viene rimodellata e si adatta al nuovo risultato.
Per esempio, un incantesimo desiderio potrebbe
annullare il tiro salvezza superato di un avversario, il
colpo critico di un nemico o il tiro salvezza fallito di un
amico. L'incantatore può imporre che il tiro ripetuto .sia
effettuato con vantaggio o svantaggio e può scegliere se
usare il tiro ripetuto o il tiro originale.
L'incantatore potrebbe essere in grado di realizzare
qualcosa che vada oltre gli esempi soprastanti, dichiarando
il suo desiderio al DM nel modo più preciso possibile. Il DM
ha la massima libertà di decidere cosa accade in questi casi:
più potente è il desiderio, maggiori sono le probabilità che
qualcosa vada storto. L'incantesimo potrebbe semplicemente
fallire, e l'effetto desiderato dall'incantatore potrebbe
avverarsi solo in parte, oppure l'incantatore potrebbe subire
delle conseguenze inaspettate a seguito della formulazione
del desiderio. Per esempio, se desidera che un suo nemico
sia morto, potrebbe essere portato avanti nel tempo in un
periodo in cui quel nemico non è più in vita, finendo per
essere rimosso dal gioco a tutti gli effetti. Analogamente,
se desidera un oggetto magico leggendario o un artefatto,
potrebbe essere trasportato istantaneamente in presenza del
legittimo proprietario dell'oggetto.
La tensione provocata dal lancio di questo incantesimo
per produrre un qualsiasi effetto diverso dalla duplicazione
di un altro incantesimo debilita l'incantatore. Dopo avere
subito quella tensione, ogni volta che l'incantatore lancia
un incantesimo prima di avere completato un riposo lungo
subisce ldlO danni necrotici per livello di quell'incantesimo.
Questi danni non possono essere ridotti o prevenuti in alcun
modo. Inoltre, la Forza dell'incantatore scende a 3 per 2d4
giorni (se non è già pari o inferiore n 3). Per ognuno di quei
giorni trascorso a riposare e a non rare nulla al di fuori di
attività poco impegnative, il tempo di recupero rimanente
diminuisce di 2 giorni. Esiste infine una probabilità del
33 percento che l'incantatore non sia in grado di lanciare
desiderio mai più, se non riesce a reggere a questa tensione.

DESTRIERO FANTOMATICO
Illusione di 3 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: 9 metri
Componenti: V, S
Durata: 1 ora
Una creatura Grande, simile a un cavallo e quasi
reale, appare sul terreno in uno spazio libero a scelta
dell'incantatore entro gittata. L'incantatore può scegliere
l'aspetto della creatura, che deve però essere dotata di
sella, morso e briglie. Tutto l'equipaggiamento creato
dall'incantesimo svanisce in uno sbuffo di fumo se
trasportato a più di 3 metri dalla cavalcatura.
Per la durata dell'incantesimo, l'incantatore o una
creatura a sua scelta può cavalcare il destriero. La creatura
usa le statistiche di un cavallo da galoppo, ma ha una
velocità di 30 metri e può percorrere 15 km in un'ora o
20 km a passo veloce. Quando l'incantesimo termina,
la cavalcatura svanisce gradualmente, concedendo al
cavalcatore 1 minuto per smontare. L'incantesimo termina
se l'incantatore usa un'azione per interromperlo o se la
cavalcatura subisce danni.

DISCO FLUTTUANTE DI TENSER
Evocazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una goccia di mercurio)
Durata: 1 ora
Questo incantesimo crea un piano circolare e orizzontale
di forza, del diametro di 90 cm e dello spessore di 2,5 cm,
che fluttua a 90 cm dal terreno in uno spazio libero a scelta
dell'incantatore, situato entro gittata e che egli sia in grado
di vedere. Il disco permane per la durata dell'incantesimo e
può sostenere fino a 250 kg. Se si aggiunge ulteriore peso,
l'incantesimo termina e tutto ciò che si trovava sul disco
cade a terra.
Il disco è immobile finché l'incantatore si trova entro 6
metri da esso. Se l'incantatore si allontana dal disco a più
di 6 metri, il disco lo segue in modo da rimanere entro 6
metri da lui. Può muoversi sul terreno dissestato, lungo
scalinate, pendii e cosí via, ma non può superare un cambio
di elevazione pari o superiore a 3 metri. Per esempio, il
disco non potrebbe muoversi oltre una fossa profonda 3
metri e non potrebbe uscire da quella fossa se fosse stato
creato sul fondo.
Se l'incantatore si muove a più di 30 metri dal disco
(solitamente perché il disco non può aggirare un ostacolo
per seguirlo), l'incantesimo termina.

DISINTEGRAZIONE
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una calamita e un pizzico di polvere)
Durata: Istantanea
Un sottile raggio verde si sprigiona dall'indice
dell'incantatore fino a un bersaglio situato entro gittata e
che egli sia in grado di vedere. Jl bersaglio può essere una
creatura, un oggetto o una creazione di forza magica, come
il muro creato da un muro di forza.
Una creatura bersagliata da questo incantesimo deve
effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 10d6 + 40 danni da forza. Se questi danni riducono
il bersaglio a O punti ferita, il bersaglio è disintegrato.
Una creatura disintegrata e tutto ciò che essa indossa
e trasporta (tranne gli oggetti magici) si riduce in un
cumulo di sottile polvere grigia. La creatura può essere
riportata in vita soltanto tramite un incantesimo desiderio o
resurrezione pura.
Questo incantesimo disintegra automaticamente un
oggetto non magico di taglia Grande o inferiore o una
creazione di forza magica. Se il bersaglio è un oggetto
o una creazione di forza magica di taglia Enorme o
superiore, questo incantesimo disintegra una parte di esso
grande quanto un cubo con spigolo di 3 metri. Un oggetto
magico non è influenzato da questo incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7'1 livello o
superiore, i danni aumentano di 3d6 per ogni slot di livello
superiore al 6.

DISSOLVI IL BENE E IL MALE
Abiurazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (acqua santa o polvere d1argento e di ferro)
Durata: Concentrazione, 1 minuto
L'incantatore è circondato da un alone di energia
scintillante che lo protegge dai folletti, dai non morti e dalle
creature originarie di un piano diverso dal Piano Materiale.
Per la durata dell'incantesimo, i celestiali, gli elementali, i
folletti, gli immondi e i non morti subiscono svantaggio ai
tiri per colpire contro di lui.
L'incantatore può porre fine all'incantesimo usando una
delle funzioni speciali seguenti.
Congedo. Con la sua azione, l'incantatore effettua un
attacco in mischia con questo incantesimo contro un
celestiale, un elementale, un folletto, un immondo o un
non morto entro la sua portata. Se lo colpisce, tenta di
respingerlo sul suo piano di origine. La creatura deve
superare un tiro salvezza su Carisma, altrimenti sarà
ricacciata sul suo piano natio (se già non si trova laggiù).
Se non si trovano sul loro piano di origine, i non morti sono
inviati nella Coltre Oscura e i folletti nella Selva Fatata.
Spezzare Ammaliamento. Con la sua azione,
l'incantatore tocca una creatura situata entro la sua portata
che sia affascinata, spaventata o posseduta da un celestiale,
un elementale, un folletto, un immondo o un non morto.
La creatura toccata non è più affascinata, spaventata o
posseduta da quella creatura.

DISSOLVI MAGIE
Abiurazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
L'incantatore sceglie una creatura, oggetto o effetto
magico situalo entro gittata. Ogni incantesimo di 3"' livello
o inferiore termina. Per ogni incantesimo di 4 livello o
superiore presente sul bersaglio, l'incantatore effettua una
prova di caratteristica usando la propria caratteristica da
incantatore. La CD è pari a 10 +il livello dell'incantesimo.
Se supera la prova, l'incantesimo termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello
o superiore. termina automaticamente gli effetti di un
incantesimo sul bersaglio se il livello di quell'incantesimo
è pari o inferiore al livello dello slot incantesimo usato
dall'incantatore.

DITO DELLA MORTE
Necromanzia di 7 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
L'incantatore trasmette un flusso di energia negativa
attraverso una creatura entro gittata e che egli sia in grado
di vedere, provocandole un dolore lancinante. Il bersaglio
deve effettuare un tiro salvezza su Costituzione. Se lo
fallisce, subisce 7d8 + 30 danni necrotici, mentre se lo
supera, subisce soltanto la metà di quei danni.
Un umanoide ucciso da questo incantesimo si anima
all'inizio del turno successivo dell'incantatore come zombi
permanentemente al suo comando: obbedirà ai suoi ordini
verbali al meglio delle sue capacità.

DIVINAZIONE
Divinazione di 4 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (incenso e un'offerta sacrificale appropriata alla religione dell'incantatore, del valore complessivo di almeno 25 mo, che l'incantesimo consuma)
Durata: Istantanea
Tramite la sua magia e la sua offerta, l'incantatore entra in
contatto con una divinità o con i servitori di una divinità.
L'incantatore può porre una singola domanda relativa a uno
specifico obiettivo, evento o attività che si verificherà entro
7 giorni. Il DM fornisce una risposta onesta, che potrebbe
essere costituita da una breve frase, una rima enigmatica o
un presagio.
L'incantesimo non tiene conto delle possibili circostanze
che potrebbero cambiare l'esito del responso, come il
lancio di ulteriori incantesimi aggiuntivi o la perdita o
l'aggiunta di un compagno.
Se l'incantatore lancia l'incantesimo due o più volte
prima di completare il suo riposo lungo successivo, esiste
una probabilità cumulativa del 25 per cento per ogni lancio
dopo il primo di ottenere un responso casuale. Il DM
effettua questo tiro in segreto.

DOMINARE BESTIE
Ammaliamento di 4 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore tenta di soggiogare una bestia entro gittata
e che egli sia in grado di vedere. Quella bestia deve
superare un tiro salvezza su Saggezza, altrimenti sarà
affascinata dall'incantatore per la durata dell'incantesimo.
Se l'incantatore o le creature a lui amichevoli stanno
combattendo contro Ja bestia, quest'ultima dispone di
vantaggio al tiro salvezza.
Mentre la bestia è affascinata, l'incantatore dispone di un
legame telepatico con essa finché entrambi si trovano sullo
stesso piano di esistenza. L'incantatore può usare questo
legame telepatico per impartire comandi alla creatura
finché è cosciente (nessuna azione richiesta), ed essa farà
del suo meglio per obbedire. L'incantatore può specificare
un corso d'azione semplice e generico come "attacca quella
creatura", "corri fin laggiù" o 04portami quell'oggetto". Se
la creatura porta a termine l'ordine e non riceve ulteriori
indicazioni da parte dell'incantatore, essa si diffonde e si
protegge al meglio delle sue capacità.
L'incantatore può usare la sua azione per assumere
il controllo totale e preciso del bersaglio. Fino alla fine
del turno successivo dell'incantatore, la creatura effettua
soltanto le azioni scelte dall'incantatore e non fa niente
che l'incantatore non le consenta di fare. Durante questo
periodo, l'incantatore può anche fare in modo che la
creatura usi una reazione, ma per farlo dovrà usare Ja sua
stessa reazione.
Ogni volta che il bersaglio subisce danni, effettua un
nuovo tiro salvezza su Saggezza contro l'incantesimo. Se lo
supera, l'incantesimo termina.
Al Livelli Superiori. Quando l'incantatore lancia
questo incantesimo con uno slot incantesimo di s·
livello, la durata diventa concentrazione, fino a 10 minuti.
Quando usa uno slot incantesimo di 6• livello, la durata
diventa concentrazione, fino a 1 ora. Quando usa uno slot
incantesimo di 7 livello o superiore, la durata diventa
concentrazione, fino a 8 ore.

DOMINARE MOSTRI
Ammaliamento di 8 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore tenta di soggiogare una creatura entro gittata
e che egli sia in grado di vedere. Quella creatura deve
superare un tiro salvezza su Saggezza, altrimenti sarà
affascinata dall'incantatore per la durata dell'incantesimo.
Se l'incantatore o le creature a lui amichevoli stanno
combattendo contro la creatura, quest'ultima dispone di
vantaggio al tiro salvezza.
Mentre la creatura è affascinata, l'incantatore dispone di
un legame telepatico con essa finché entrambi si trovano
sullo stesso piano di esistenza. L'incantatore può usare
questo legame telepatico per impartire comandi alla
creatura finché è cosciente (nessuna azione richiesta), ed
essa farà del suo meglio per obbedire. L'incantatore può
specificare un corso d'azione semplice e generico come
04attacca quella creatura", "corri fin laggiù" o "portami
quell'oggetto". Se la creatura porta a termine l'ordine e non
riceve ulteriori indicazioni da parte dell'incantatore, essa si
difende e si protegge al meglio delle sue capacità.
L'incantatore può usare la sua azione per assumere
il controllo totale e preciso del bersaglio. Fino alla fine
del turno successivo dell'incantatore, la creatura effettua
soltanto le azioni scelte dall'incantatore e non fa niente
che l'incantatore non le consenta di fare. Durante questo
periodo, l'incantatore può anche rare in modo che la
creatura usi una reazione, ma per farlo dovrà usare la sua
stessa reazione.
Ogni volta che il bersaglio :subisce danni, effettua un
nuovo tiro salvezza su Saggezza contro l'incantesimo. Se lo
supera, l'incantesimo termina.
Ai livelli Superiori. Quando l'incantatore lancia questo
incantesimo con uno slot incantesimo di 9" livello, la durata
diventa concentrazione, fino a 8 ore.

DOMINARE PERSONE
Ammaliamento di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore tenta di soggiogare un umanoide entro gittata
e che egli sia in grado di vedere. Quell'umanoide deve
superare un tiro salvezza su Saggezza, altrimenti sarà
affascinato dall'incantatore per la durata dell'incantesimo.
Se l'incantatore o le creature a lui amichevoli stanno
combattendo contro l'umanoide, quest'ultimo dispone di
vantaggio al tiro salvezza.
Mentre il bersaglio è affascinato, l'incantatore dispone
di un legame telepatico con lui finché entrambi si trovano
sullo stesso piano di esistenza. L'incantatore può usare
questo legame telepatico per impartire comandi alla
creatura finché è cosciente (nessuna azione richiesta), ed
essa farà del suo meglio per obbedire. L'incantatore può
specificare un corso d'azione semplice e generico come
04attacca quella creatura", "corri fin laggiù" o 04portami
quell'oggetto". Se la creatura porta a termine l'ordine e non
riceve ulteriori indicazioni da parte dell'incantatore, essa si
difende e si protegge al meglio delle sue capacità.
L'incantatore può usare la sua azione per assumere
il controllo totale e preciso del bersaglio. Fino alla fine
del turno successivo dell'incantatore, la creatura effettua
soltanto le azioni scelte dall'incantatore e non fa niente
che l'incantatore non le consenta di fare. Durante questo
periodo, l'incantatore può anche fare in modo che la
creatura usi una reazione, ma per farlo dovrà usare Ja sua
stessa reazione.
Ogni volta che il bersaglio subisce danni, effettua un
nuovo tiro salvezza su Saggezza contro l'incantesimo. Se lo
supera, l'incantesimo termina.
Al Livelli Superiori. Quando l'incantatore lancia
questo incantesimo con uno slot incantesimo di 6• livello,
la durata diventa concentrazione, fino a 10 minuti.
Quando usa uno slot incantesimo di 7 livello, la durata
diventa concentrazione, fino a 1 ora. Quando usa uno slot
incantesimo di 8" livello o superiore, la durata diventa
concentrazione, fino a 8 ore.

DUELLO OBBLIGATO
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: 9 metri
Componenti: V
Durata: Concentrazione, 1 minuto
L'incantatore tenta di obbligare una creatura a partecipare
a un duello. Una creatura entro gittata e che egli sia
in grado di vedere deve effettuare un tiro salvezza su
Saggezza. Se lo fallisce, è obbligata dall'imposizione
divina dell'incantatore ad avvicinarsi a lui. Per la durata
dell'incantesimo, la creatura subisce svantaggio ai tiri per
colpire contro le creature diverse dall'incantatore e deve
effettuare un tiro salvezza ogni volta che tenta di muoversi
fino a uno spazio più lontano di 9 metri da lui. Se supera il
tiro salvezza, questo incantesimo non limita i movimenti
della creatura per quel turno.
L'incantesimo termina se l'incantatore attacca una
qualsiasi altra creatura, se lancia un incantesimo che
bersaglia una creatura ostile diversa dal bersaglio, se una
creatura a lui amichevole infligge danni al bersaglio o
lancia un incantesimo dannoso su di esso, o se l'incantatore
termina il proprio turno a più di 9 metri dal bersaglio.

EROISMO
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 minuto
Una creatura consenziente toccata dall'incantatore è
animata da un grande coraggio. Finché l'incantesimo
non termina, la creatura è immune alla condizione
di spaventato e ottiene un ammontare di punti ferita
temporanei pari al modificatore di caratteristica da
incantatore all'inizio di ogni proprio turno. Quando
l'incantesimo termina, iJ bersaglio perde tutti i punti ferita
temporanei rimanenti forniti da questo incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2· livello
o superiore, l'incantatore può bersagliare una creatura
aggiuntiva per ogni slot di livello superiore al 1.

ESILIO
Abiurazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un oggetto sgradito al bersaglio)
Durata: Concentrazione, 1 minuto
L'incantatore tenta di inviare su un altro piano di esistenza
una creatura che egli sia in grado di vedere e che si trovi
entro gittata. Il bersaglio deve superare un tiro salvezza su
Carisma o sarà esiliato.
Se il bersaglio è originario del piano di esistenza in cui
si trova, l'incantatore lo esilia su un semipiano innocuo.
Mentre si trova laggiù, il bersaglio è incapacitato e rimane
in quel luogo finché l'incantesimo non termina, nel qual
caso ricompare nello spazio che aveva lasciato o nello
spazio libero più vicino se quello spazio è occupato.
Se il bersaglio è originario di un piano di esistenza
diverso da quello in cui si trova l'incantatore, esso viene
esiliato con una piccola implosione a malapena udibile e fa
ritorno al suo piano natio. Se l'incantesimo termina prima
che sia trascorso 1 minuto, il bersaglio ricompare nello
spazio che aveva lasciato o nello spazio libero più vicino, se
quello spazio è occupato. Altrimenti non fa ritorno.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di s· livello o
superiore, può bersagliare una creatura aggiuntiva per ogni
slot di livello superiore al 4.

ESPLOSIONE SOLARE
Invocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (fuoco e un frammento di pietra del sole)
Durata: Istantanea
Un'onda di luce solare si diffonde entro un raggio di 18
metri centrato su un punto a scelta dell'incantatore situato
entro gittata. Ogni creatura all'interno di quella luce deve
effettuare un tiro salvezza su Costituzione. Se lo fallisce,
subisce 12d6 danni radiosi ed è accecata per 1 minuto,
mentre se lo supera, subisce soltanto la metà di quei danni
e non è accecata da questo incantesimo. Le melme e i non
morti subiscono svantaggio a questo tiro salvezza.
Una creatura accecata da questo incantesimo effettua un
altro tiro salvezza su Costituzione alla fine di ogni proprio
turno. Se lo supera, non è più accecata.
Questo incantesimo dissolve qualsiasi oscurità creata da
un incantesimo presente nella sua area.

ESTASIARE
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: 1 minuto
L'incantatore pronuncia una frastornante sequenza di parole
e costringe le creature a sua scelta entro gittata e che egli sia
in grado di vedere a effettuare un tiro salvezza su Saggezza.
Ogni creatura che non pub essere affascinata supera questo
tiro salvezza automaticamente, e se l'incantatore o i suoi
compagni stanno combattendo contro una creatura, quella
creatura dispone di vantaggio al tiro salvezza. Se la creatura
bersaglio fallisce il tiro salvezza, subisce svantaggio alle
prove di Saggezza (Percezione) effettuate per percepire
una qualsiasi creatura diversa dall'incantatore finché
l'incantesimo non termina o finché il bersaglio non è più in
grado di sentirlo. L'incantesimo termina se l'incantatore è
incapacitato o non è più in grado di parlare.

EVOCA ANIMALI
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore evoca alcuni spiriti fatati che assumono
forme bestiali e compaiono in spazi liberi entro gittata e
che egli sia in grado di vedere, scegliendo una delle opzioni
seguenti per determinare cib che appare:
• Una bestia con grado di sfida pari o inferiore a 2
• Due bestie con grado di sfida pari o inferiore a 1
• Quattro bestie con grado di sfida pari o inferiore a 1/2
• Otto bestie con grado di sfida pari o inferiore a 1/4
Ogni bestia è considerata un folletto e scompare quando
scende a O punti ferita o quando l'incantesimo termina.
Le creature evocate sono amichevoli nei confronti
dell'incantatore e dei suoi compagni. Si tira una sola volta
per l'iniziativa di tutto il gruppo delle creature evocate,
che svolgono poi il loro turno tutte assieme. Le creature
obbediscono ai comandi verbali impartiti dall'incantatore
{nessuna azione richiesta). Se l'incantatore non impartisce
loro un comando, le creature si difendono da eventuali altre
creature ostili, ma altrimenti non intraprendono alcuna
azione.
Il DM possiede le statistiche delle creature.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando determinati slot incantesimo di
livello superiore, sceglie una delle opzioni di evocazione
soprastanti e fa apparire un numero superiore di creature:
il doppio con uno slot di 5 livello, il triplo con uno slot di 7
livello e il quadruplo con uno slot di 9 livello.

EVOCA CELESTIALE
Evocazione di 7 livello
Tempo di Lancio: 1 minuto
Gittata: 27 metri
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore evoca un celestiale con grado di sfida pari o
inferiore a 4, che appare in uno spazio libero entro gittata
e che l'incantatore sia in grado di vedere. Il celestiale
scompare quando scende a O punti ferita o quando
l'incantesimo termina.
Il celestiale è amichevole nei confronti dell'incantatore
e dei suoi compagni per la durata dell'incantesimo. Si
tira per l'iniziativa del celestiale, che svolge i propri
turni. Il celestiale obbedisce ai comandi verbali impartiti
dall'incantatore (nessuna azione richiesta), purché non
violino il suo allineamento. Se l'incantatore non gli
impartisce un comando, il celestiale si difende da eventuali
altre creature ostili, ma altrimenti non intraprende alcuna
azione.
Il DM possiede le statistiche del celestiale.
Al Livelli Superiori. Quando l'incantatore lancia
questo incantesimo usando uno slot di 9 livello, evoca un
celestiale con grado di sfida pari o inferiore a 5.

EVOCA CREATURE BOSCHIVE
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una bacca di agrifoglio per ogni creatura evocata)
Durata: Concentrazione, 1 ora
L'incantatore evoca alcune creature fatate che compaiono
in spazi liberi entro gittata e che egli sia in grado di vedere,
scegliendo una delle opzioni seguenti per determinare ciò
che appare:
• Una creatura fatata con grado di sfida pari o inferiore a 2
• Due creature fatate con grado di sfida pari o inferiore a 1
• Quattro creature fatate con grado di sfida pari o inferiore
a 1/2
• Otto creature fatate con grado di sfida pari o inferiore a 1/4
Una creatura evocata scompare quando scende a O punti
ferita o quando l'incantesimo termina.
L e creature evocate sono amichevoli nei confronti
dell'incantatore e dei suoi compagni. Si tira una sola volta
per l'iniziativa di tutto il gruppo delle creature evocate,
che svolgono poi il loro turno tutte assieme. Le creature
obbediscono ai comandi verbali impartiti dall'incantatore
(nessuna azione richiesta). Se l'incantatore non impartisce
loro un comando, le creature si difendono da eventuali altre
creature ostili, ma altrimenti non intraprendono alcuna
azione.
Il DM possiede le statistiche delle creature.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando determinati slot incantesimo di livello
superiore, sceglie una delle opzioni di evocazione soprastanti
e fa apparire un numero superiore di creature: il doppio con
uno slot di 6 livello e il triplo con uno slot di 8 livello.

EVOCA ELEMENTALE
Evocazione di 5 livello
Tempo di Lancio: 1 minuto
Gittata: 27 metri
Componenti: V, S, M (acqua e sabbia per l'acqua, incenso bruciato per l'aria, zolfo e fosforo per il fuoco, argilla duttile per la terra)
Durata: Concentrazione, 1 ora
L'incantatore chiama a sé un servitore elementale,
scegliendo un'area di acqua, aria, fuoco o terra delle
dimensioni di un cubo con spigolo di 3 metri situato entro
gittata. Un elementale con grado di sfida pari o inferiore a
5 e appropriato all'area scelta appare in uno spazio libero
entro 3 metri da quell'area. Per esempio, un elementale
del fuoco scaturisce da un falò, mentre un elementale della
terra emerge dal terreno. L'elementale scompare quando
scende a O punti ferita o quando l'incantesimo termina.
L'elementale è amichevole nei confronti dell'incantatore
e dei suoi compagni per la durata dell'incantesimo. Si
tira per l'iniziativa dell'elementale, che svolge i propri
turni. L'elementale obbedisce ai comandi verbali
impartiti dall'incantatore (nessuna azione richiesta). Se
l'incantatore non gli impartisce un comando, l'elementale
si difende da eventuali altre creature ostili, ma altrimenti
non intraprende alcuna azione.
Se la concentrazione dell'incantatore è interrotta,
l'elementale non scompare. L'incantatore perde invece
il controllo dell'elementale, che diventa ostile nei suoi
confronti e nei confronti dei suoi compagni e li potrebbe
attaccare. Un elementale privo di controllo non può essere
congedato dall'incantatore e scompare 1 ora dopo essere
stato evocato.
Il DM possiede le statistiche dell'elementale.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6 livello o
superiore, il grado di sfida aumenta di 1 per ogni slot di
livello superiore al 5.

EVOCA ELEMENTALI MINORI
Evocazione di 4 livello
Tempo di Lancio: 1 minuto
Gittata: 27 metri
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore evoca alcuni elementali che compaiono in
spazi liberi entro gittata e che egli sia in grado di vedere,
scegliendo una delle opzioni seguenti per determinare ciò
che appare:
• Un elementale con grado di sfida pari o inferiore a 2
• Due elementali con grado di sfida pari o inferiore a 1
• Quattro elementali con grado di sfida parì o inferiore a 1/2
• Otto elementali con grado di sfida pari o inferiore a 1/4
Un elementale evocato da questo incantesimo scompare
quando scende a O punti ferita o quando l'incantesimo
termina.
L e creature evocate sono amichevoli nei confronti
dell'incantatore e dei suoi compagni. Si tira una sola volta
per l'iniziativa di tutto il gruppo delle creature evocate,
che svolgono poi il loro turno tutte assieme. Le creature
obbediscono ai comandi verbali impartiti dall'incantatore
(nessuna azione richiesta). S e l'incantatore non impartisce
loro un comando, le creature si difendono da eventuali altre
creature ostili, ma altrimenti non intraprendono alcuna
azione.
Il DM possiede le statistiche delle creature.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando determinati slot incantesimo di livello
superiore, sceglie una delle opzioni di evocazione soprastanti
e fa apparire un numero superiore di creature: il doppio
con uno slot di 6 livello e il triplo con uno slot di 8 livello.

EVOCA FOLLETTO PHB
Evocazione di 6 livello
Tempo di Lancio: 1 minuto
Gittata: 27 metri
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore evoca un folletto con grado di sfida pari o
inferiore a 6 o uno spirito fatato che assume la forma di
una bestia con grado di sfida pari o inferiore a 6. Il folletto
appare in uno spazio libero entro gittata e che l'incantatore
sia in grado di vedere. li folletto scompare quando scende a
O punti ferita o quando l'incantesimo termina.
Il folletto è amichevole nei confronti dell'incantatore e dei
suoi compagni per la durata dell'incantesimo. Si tira per
l'iniziativa del folletto, che svolge i propri turni. Obbedisce
ai comandi verbali impartiti dall'incantatore (nessuna
azione richiesta). Se l'incantatore non gli impartisce un
comando, il folletto si difende da eventuali altre creature
ostili, ma altrimenti non intraprende alcuna azione.
Se la concentrazione dell'incantatore è interrotta,
il folletto non scompare. L'incantatore perde invece il
controllo del folletto, che diventa ostile nei suoi confronti
e nei confronti dei suoi compagni e li potrebbe attaccare.
n folletto privo di controllo non può essere congedato
dall'incantatore e scompare 1 ora dopo essere stato evocato.
Il DM è in possesso delle statistiche del folletto.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 1 livello o
superiore, il grado di sfida aumenta di 1 per ogni slot di
livello superiore al 6.

EVOCA PIOGGIA DI ARMI
Evocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (una munizione o un'arma da lancio)
Durata: Istantanea
L'incantatore scaglia una munizione non magica o lancia
in aria un'arma non magica e sceglie un punto situato
entro gittata. Centinaia di duplicati della munizione o
dell'arma ricadono a pioggia dall'alto e poi scompaiono.
Ogni creatura entro un cilindro del raggio di 12 metri e
alto 6 metri centrato su quel punto deve effettuare un tiro
salvezza su Destrezza. Se lo fallisce, subisce 8d8 danni,
mentre se lo supera, subisce soltanto la metà di quei danni.
Il tipo di danno è lo stesso della munizione o dell'arma
usata come componente.

EVOCA RAFFICA
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cono di 18 metri)
Componenti: V, S, M (una munizione o un'arma da lancio)
Durata: Istantanea
L'incantatore lancia in aria un'arma non magica o scaglia
una munizione non magica per creare un cono di armi
identiche che sfrecciano in avanti e poi scompaiono. Ogni
creatura entro un cono di 18 metri deve effettuare un tiro
salvezza su Destrezza. Se lo fallisce, subisce 3d8 danni,
mentre se lo supera, subisce soltanto la metà di quei danni.
Il tipo di danno è lo stesso dell'arma o della munizione
usata come componente.

EVOCAZIONI ISTANTANEE DI DRAWMIJ
Evocazione di 6 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S, M (uno zaffiro del valore di 1.000 mo)
Durata: Finché non viene dissolto
L'incantatore tocca un oggetto di peso pari o inferiore a 5
kg e la cui dimensione più lunga non sia superiore a 1,8
metri. L'incantesimo imprime un marchio invisibile sulla
superficie dell'oggetto e traccia il suo nome sullo zaffiro
che l'incantatore ha usato come componente materiale.
Ogni volta che l'incantatore lancia questo incantesimo, deve
usare uno zaffiro diverso.
Da quel momento in poi, l'incantatore può usare la sua
azione per pronunciare il nome dell'oggetto e distruggere
lo zaffiro. L'oggetto compare istantaneamente in mano
all'incantatore, a prescindere dalle distanze fisiche o
planari, e l'incantesimo termina.
Se un'altra creatura impugna o trasporta l'oggetto,
la distruzione dello zaffiro non trasporta l'oggetto fino
all'incantatore, ma quest'ultimo apprende chi è che
possiede l'oggetto e l'ubicazione approssimativa della
creatura in quel momento.
Dissolvi maAie o un effetto analogo applicato con
successo allo zaffiro termina l'effetto di questo incantesimo.

FABBRICARE
Trasmutazione di 4 livello
Tempo di Lancio: 10 minuti
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
L'incantatore converte le materie prime in prodotti finiti
dello stesso materiale. Per esempio, può fabbricare un ponte
di legno da un cumulo di tronchi, una corda da un groviglio
di canapa e degli abiti da un cumulo di lino o di lana.
L'incantatore sceglie delle materie prime situate entro
gittata e che egli sia in grado di vedere. Può fabbricare un
oggetto di taglia Grande o inferiore (non più grande di un
cubo con spigolo di 30 metri, o di otto cubi con spigolo di
1,5 metri collegati tra loro), purché la quantità di materie
prime sia sufficiente. Tuttavia, se l'incantatore lavora con
il metallo, la pietra o altre sostanze minerarie, l'oggetto
fabbricato può essere al massimo di taglia Media (non più
grande di un cubo con spigolo di 1,5 metri). La qualità degli
oggetti effettuati dall'incantesimo è proporzionale alla
qualità delle materie prime.
Non è possibile creare o trasmutare creature o oggetti
magici con questo incantesimo. Non è inoltre possibile
usarlo per creare oggetti che normalmente richiedono un
alto grado di precisione nella fabbricazione, come gioielli,
armi, vetro o armature, a meno che l'incantatore non
possieda competenza nel tipo di strumenti da artigiano
usato per fabbricare tali oggetti.

FAME DI HADAR
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (un tentacolo di piovra conservato sott'olio)
Durata: Concentrazione, 1 minuto
L'incantatore apre un portale fino all'oscurità celata tra le
stelle, una regione infestata da orrori ignoti. Appare una
sfera del raggio di 6 metri composta di oscurità e di freddo
pungente, centrata su un punto entro gittata, che permane
per la durata dell'incantesimo. All'interno di quel vuoto
echeggia una cacofonia di tenui sussurri e fauci biascicanti
che possono essere uditi fino a 9 metri di distanza.
Nessuna luce, magica o meno che sia, può illuminare l'area
e le creature che si trovano completamente al suo interno
sono accecate.
Il vuoto genera una distorsione nella trama dello spazio
e l'area è considerata terreno difficile. Ogni creatura che
inizia il suo turno nell'area subisce 2d6 danni da freddo.
Ogni creatura che termina il suo turno all'interno dell'area
deve superare un tiro salvezza su Destrezza altrimenti subisce 2d6 danni da acido inferti da un nugolo di tentacoli
lattiginosi e ultraterreni che la sfiorano.

FARETRA RAPIDA
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione bonus
Gittata: Contatto
Componenti: V, S, M (una faretra che contenga almeno una munizione)
Durata: Concentrazione, 1 minuto
L'incantatore trasmuta la propria faretra in modo che
produca una scorta infinita di munizioni non magiche che
sembrano balzargli in mano ogni volta che egli protende la
mano verso di essa.
A ogni suo turno, finché l'incantesimo non termina,
l'incantatore può usare un'azione bonus per effettuare due
attacchi con un'arma che usi le munizioni fornite dalla
faretra. Ogni volta che l'incantatore effettua uno di questi
attacchi a distanza, la sua faretra sostituisce magicamente
la munizione da lui usata con un'altra munizione non
magica analoga. Tutte le munizioni create da questo
incantesimo si disintegrano quando l'incantesimo
termina. Se l'incantatore perde il possesso della faretra,
l'incantesimo termina.

FARO DI SPERANZA
Abiurazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Questo incantesimo infonde speranza e vitalità.
L'incantatore sceglie un qualsiasi numero di creature
entro gittata. Per la durata dell'incantesimo, ogni bersaglio
dispone di vantaggio ai tiri salvezza su Saggezza e ai tiri
salvezza contro morte e recupera il numero massimo di
punti ferita possibile da qualsiasi guarigione.

FATALE
Illusione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Attingendo alle più profonde paure di un gruppo di
creature, l'incantatore crea nella loro mente un gruppo di
creature illusorie visibili soltanto a esse. Ogni creatura
situata all'interno di una sfera del raggio di 9 metri centrata
su un punto entro gittata a scelta dell'incantatore deve
effettuare un tiro salvezza su Saggezza. Se lo fallisce,
diventa spaventata per la durata dell'incantesimo.
L'illusione fa leva sulle paure più profonde di una creatura,
manifestando i suoi incubi peggiori come una minaccia
implacabile. Alla fine di ogni proprio turno, la creatura
spaventata deve effettuare un tiro salvezza su Saggezza.
Se lo fallisce, subisce 4d10 danni psichici, mentre se lo
supera, l'incantesimo termina per quella creatura.

FAVORE DIVINO
Invocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 1 minuto
Intonando una preghiera, l'incantatore è pervaso da un
alone radioso di luce divina. Finché l'incantesimo non
termina, i suoi attacchi con le armi infliggono ld4 danni
radiosi extra se colpiscono.

FERIRE
Necromanzia di 6 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
L'incantatore scatena una malattia virulenta contro una
creatura entro gittata e che egli sia in grado di vedere.
Il bersaglio deve effettuare un tiro salvezza su Costituzione.
Se lo fallisce, subisce 14d6 danni necrotici, mentre se lo
supera, subisce soltanto la metà di quei danni. I danni non
possono portare i punti ferita del bersaglio a meno di 1.
Se il bersaglio fallisce il tiro salvezza, il suo massimo
dei punti ferita è ridotto di un ammontare pari ai danni
necrotici subiti per la durata di 1 ora. Qualsiasi effetto che
rimuova una malattia riporta il massimo dei punti ferita di
una creatura alla normalità prima che quel periodo termini.

FERMARE IL TEMPO
Trasmutazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V
Durata: Istantanea
L'incantatore arresta temporaneamente lo scorrere del
tempo per tutti tranne che per se stesso. Per le altre
creature il tempo non passa, mentre l'incantatore effettua
ld4 + 1 turni consecutivamente, nel corso dei quali può
usare azioni e muoversi normalmente.
Questo incantesimo termina se una delle azioni usate
durante questo periodo o un qualsiasi effetto creato
dall'incantatore durante questo periodo influenza una
creatura diversa da lui o un oggetto indossato o trasportato
da qualcuno che non sia lui. L'incantesimo termina inoltre
se l'incantatore si muove a più di 300 metri dal punto in cui
lo ha lanciato.

FIAMMA PERENNE
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (polvere di rubino del valore di 50mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto
Una fiamma di intensità equivalente a quella di una torcia
si sprigiona da un oggetto toccato dall'incantatore. L'effetto
appare come una fiamma normale, ma non produce calore
e non consuma ossigeno. Una fiamma perenne pub essere
coperta o nascosta, ma non soffocata o estinta.

FIAMMA SACRA
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
Un bagliore simile a una fiamma scende fino a una creatura
entro gittata e che l'incantatore sia in grado di vedere. li
bersaglio deve superare un tiro salvezza su Destrezza,
altrimenti subisce ld8 danni radiosi. li bersaglio non trae
beneficio dalla copertura per questo tiro salvezza.
I danni di questo incantesimo aumentano di 1d8 quando
l'incantatore arriva al 5 livello (2d8), 11 livello (3d8) e 17
livello (4d8).

FIOTTO ACIDO
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
L'incantatore scaglia una bolla di acido, scegliendo una
creatura entro gittata oppure due creature entro gittata
situate a non più di 1,5 metri l'una dall'altra. Un bersaglio
deve superare un tiro salvezza su Destrezza, altrimenti
subisce ld6 danni da acido.
I danni di questo incantesimo aumentano di ld6 quando
l'incantatore arriva al 5 livello (2d6), 11 livello (3d6) e 17
livello (4d6).

FOLATA DI VENTO
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (Linea di 18 metri)
Componenti: V, S, M (il seme di un legume)
Durata: Concentrazione, 1 minuto
Una linea di vento forte lunga 18 metri e larga 3 metri
si diffonde dall'incantatore in una direzione a sua scelta
per la durata dell'incantesimo. Ogni creatura che inizia il
suo turno su quella linea deve superare un tiro salvezza
su Forza, altrimenti sarà spinta di 4,5 metri più lontana
dall'incantatore, nella stessa direzione della linea.
Ogni creatura sulla linea deve spendere 60 cm di
movimento per ogni 30 cm di cui si muove quando cerca di
avvicinarsi all'incantatore.
La rolata disperde i gas e i vapori ed estingue candele,
torce e simili fiamme prive di protezione nell'area. Fa
tremolare le fiamme protette come quelle delle lanterne e
ha una probabilità del 50% di spegnerle.
Con un'azione bonus in ogni suo turno prima che
l'incantesimo termini, l'incantatore può cambiare la
direzione in cui la linea si diffonde da sé.

FONDERSI NELLA PIETRA
Trasmutazione di 3 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: 8 ore
L'incantatore entra in un oggetto o in una superficie di pietra
sufficientemente grande da contenere il suo intero corpo,
fondendosi nella pietra assieme a tutto l'equipaggiamento
che trasporta per la durata dell'incantesimo. Usando il
suo movimento, egli entra nella pietra in un punto che è in
grado di toccare. Nulla della sua presenza rimane visibile 0
individuabile da qualsiasi senso non magico.
Finché è fuso nella pietra, l'incantatore non può
vedere cosa accade all'esterno e ogni prova di Saggezza
(Percezione) che effettua per udire suoni subisce
svantaggio. L'incantatore rimane cosciente del passaggio
del tempo e può lanciare incantesimi su se stesso finché è
fuso nella pietra. Può usare iJ suo movimento per lasciare
la pietra nel punto in cui è entrato, cosa che termina
l'incantesimo. Altrimenti, è impossibilitato a muoversi.
Gli eventuali danni minori inferti alta pietra non
feriscono l'incantatore, ma la sua distruzione parziale o
un'alterazione della sua forma (se sufficiente a fare in modo
che non contenga più il suo corpo) provoca l'espulsione
dell'incantatore e gli infligge 6d6 danni contundenti. La
distruzione completa della pietra (o la sua trasmutazione in
una sostanza diversa) provoca l'espulsione dell'incantatore
e gli infligge 5O danni contundenti. Quando l'incantatore
viene espulso, cade a terra prono nello spazio libero più
vicino al punto in cui era entrato.

FORMA ETEREA
Trasmutazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 8 ore
L'incantatore si spinge nelle regioni di confine del Piano
Etereo, nell'area in cui si sovrappone al suo piano attuale.
Rimane sul Confine Etereo per la durata dell'incantesimo
o finché non usa la sua azione per terminare l'incantesimo.
Durante questo periodo, può muoversi in qualsiasi
direzione. Se si muove in su o in giù, ogni 30 cm di
movimento gli richiedono 30 cm di movimento extra.
L'incantatore può vedere e udire cib che accade sul piano
da cui proviene, ma tutto gli appare grigio, e non può
vedere nulla oltre 18 metri di distanza.
Finché si trova sul Piano Etereo, l'incantatore può solo
influenzare le altre creature di quel piano (ed esserne
influenzato). Le creature che non si trovano sul Piano
Etereo non possono percepirlo e l'incantatore non può
interagire con loro, a meno che una capacità speciale o una
magia non fornisca loro un mezzo per farlo.
L'incantatore ignora tutti gli oggetti e gli effetti che
non si trovano sul Piano Etereo, cosa che gli consente di
muoversi attraverso gli oggetti che percepisce sul piano da
cui proviene.
Quando l'incantesimo termina, l'incantatore torna
immediatamente sul piano di provenienza, nel punto
che occupa attualmente. Se quel punto è occupato da un
oggetto solido o da una creatura mentre questo accade,
l'incantatore viene immediatamente strattonato nello
spazio libero più vicino che può occupare e subisce 2 danni
da forza per ogni 30 cm di cui si è mosso.
Questo incantesimo non ha effetto se l'incantatore lo
lancia quando si trova sul Piano Etereo o su un piano ad
esso non confinante, come per esempio uno dei Piani
Esterni.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno sJot incantesimo di s· livello
o superiore, può bersagliare fino a un massimo di tre
creature consenzienti (incluso se stesso) per ogni slot di
livello superiore al 1•. Le creature devono trovarsi entro
3 metri dall'incantatore nel momento in cui quest'ultimo
lancia l'incantesimo.

FORMA GASSOSA
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un frammento di garza e uno sbuffo di fumo)
Durata: Concentrazione, 1 ora
L'incantatore trasforma una creatura consenziente da lui
toccata (assieme a tutto ciò che essa indossa e trasporta)
in una nube di foschia per la durata dell'incantesimo.
L'incantesimo termina se la creatura scende a O punti ferita.
Una creatura incorporea non è influenzata dall'incantesimo.
Finché il bersaglio si trova in questa forma, il suo unico
metodo di movimento è una velocità di volare pari a 3
metri. Il bersaglio può entrare nello spazio di un 'altra
creatura e occuparlo, dispone di resistenza ai danni non
magici e di vantaggio ai tiri salvezza su Forza, Destrezza
e Costituzione. Il bersaglio può passare attraverso piccoli
fori, aperture strette e perfino semplici crepe, ma considera
i liquidi come se fossero superfici solide. Il bersaglio non
può cadere e continua a fluttuare nell'area anche quando è
stordito o incapacitato in altri modi.
Finché è in forma gassosa. il bersaglio non può parlare
o manipolare oggetti, e quelli che trasporta o impugna non
possono essere usati, lasciati cadere o manipolati in alcun
modo. Il bersaglio non può attaccare o lanciare incantesimi.

FORME ANIMALI
Trasmutazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Concentrazione, 24 ore
La magia dell'incantatore trasforma gli altri in bestie.
L'incantatore sceglie un qualsiasi numero di creature
consenzienti entro gittata e che egli sia in grado di vedere.
L'incantatore trasforma ogni bersaglio nella forma di una
bestia di taglia Grande o inferiore con un grado di sfida pari
a 4 o inferiore. Nei turni successivi può usare la sua azione
per trasformare le creature influenzate in altre forme.
La trasformazione permane su ogni bersaglio per la
durata dell'incantesimo, oppure finché il bersaglio non
scende a O punti ferita o non muore. L'incantatore può
scegliere una forma diversa per ogni bersaglio. Le statistiche
di gioco di un bersaglio vengono sostituite dalle statistiche
della bestia scelta, anche se il bersaglio conserva il suo
allineamento e i suoi punteggi di Intelligenza, Saggezza e
Carisma. Il bersaglio assume i punti ferita della sua nuova
forma, e quando riassume la sua forma normale, ritorna
al numero di punti ferita che possedeva prima di essere
trasformato. Se riassume la sua forma per essere sceso a O
punti ferita, ogni eventuale danno in eccesso si trasferisce
alla sua forma normale. Fintanto che i danni in eccesso non
riducono la forma normate della creatura a O punti ferita, la
creatura non cade priva di sensi. La creatura è limitata alle
azioni che può effettuare in base alla natura della sua nuova
forma e non può parlare o lanciare incantesimi.
L'equipaggiamento del bersaglio si fonde nella nuova
forma. Il bersaglio non può attivare il suo equipaggiamento,
impugnarlo o trarre altri benefici da esso.

FRANTUMARE
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un frammento di mica)
Durata: Istantanea
Un rumore improvviso e assordante, dolorosamente
intenso. si diffonde da un punto a scelta dell'incantatore
situato entro gittata. Ogni creatura entro una srera del
raggio di 3 metri centrata su quel punto deve effettuare
un tiro salvezza su Costituzione. Se lo fallisce, subisce
3d8 danni da tuono. mentre se lo supera, subisce soltanto
la metà di quei danni. Una creatura fatta di materiale
inorganico come pietra, cristallo o metallo subisce
svantaggio a questo tiro salvezza.
Anche un oggetto non magico che non sia indossato
o trasportato subisce i danni se si trova entro l'area
dell'incantesimo.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di :; livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 2.

FRECCIA ACIDA DI MELF
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (una foglia di rabarbaro in polvere e lo stomaco di una vipera)
Durata: Istantanea
Una freccia verde scintillante vola fino a un bersaglio
entro gittata cd esplode generando uno spruzzo d'acido.
L'incantatore effettua un attacco a distanza con questo
incantesimo contro il bersaglio. Se colpisce, il bersaglio
subisce immediatamente 4d4 danni da acido e 2d4 danni
da acido alla fine del suo turno successivo. Se manca, la
freccia spruzza di acido il bersaglio infliggendo la metà
dei danni iniziali e nessun danno alla fine del suo turno
successivo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore. i danni (sia quelli iniziali che quelli successivi)
aumentano di 1d4 per ogni slot di livello superiore al 2.

FRECCIA FOLGORANTE
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 1 minuto
La prossima volta che l 'incantatore effettua un attacco con
un'arma a distanza entro la durata dell'incantesimo, la
munizione dell'arma, o l'arma stessa se si tratta di un'arma
da lancio, si trasforma in un fulmine. L'incantatore effettua
il tiro per colpire normalmente. Se colpisce, il bersaglio
subisce 4d8 danni da fulmine, mentre se lo manca, subisce
soltanto la metà di quei danni, anziché i danni normali
dell'arma.
A prescindere che l'incantatore colpisca o manchi, ogni
creatura entro 3 metri dal bersaglio deve superare un tiro
salvezza su Destrezza. Se lo fallisce, subisce 2d8 danni da
fulmine, mentre se lo supera, subisce soltanto la metà di
quei danni.
La munizione o l'arma torna poi alla sua forma originaria.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni di entrambi gli effetti dell'incantesimo
aumentano di 1d8 per ogni slot di livello superiore al 3.

FRUSTA DI SPINE
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (il gambo di una pianta spinata)
Durata: Istantanea
L'incantatore crea una lunga frusta simile a un rampicante
e coperta di spine che al suo comando sferza fino a una
creatura entro gittata. L'incantatore effettua un attacco
in mischia con questo incantesimo contro la creatura. Se
colpisce, la creatura subisce ld6 danni perforanti, e se la
creatura è di taglia Grande o inferiore, l'incantatore può
trascinarla verso di sé di un massimo di 3 metri.
I danni di questo incantesimo aumentano di ld6 quando
l'incantatore arriva al 5 livello (2d6), 11 livello (3d6) e 17
livello (4d6).

FULMINE
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (linea di 30 metri)
Componenti: V, S, M (un ciuffo di pelo e una verga d'ambra, di cristallo o di vetro)
Durata: Istantanea
Un fulmine parte dall'incantatore in una direzione a sua
scelta. formando una linea lunga 30 metri e larga 1,5 metri.
Ogni creatura entro la linea deve effettuare un tiro salvezza
su Destrezza. Se lo fallisce, subisce 8d6 danni da fulmine.
mentre se lo supera. subisce soltanto la metà di quei danni.
Il fulmine incendia gli oggetti infiammabili nell'area che
non sono indossati o trasportati.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di 1d6 per ogni slot di livello
superiore al 3.

FUORVIARE
Illusione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: S
Durata: Concentrazione, 1 ora
L'incantatore diventa invisibile nello stesso momento in
cui un suo sosia illusorio appare nel punto dove egli si
trova. Il sosia permane per la durata dell'incantesimo, ma
l'invisibilità termina se l'incantatore attacca o lancia un
incantesimo.
L'incantatore può usare la sua azione per muovere il
suo sosia illusorio fino al doppio della sua velocità e farlo
gesticolare, parlare e comportarsi nel modo che ritiene più
opportuno.
L'incantatore pub vedere attraverso gli occhi e sentire
attraverso le orecchie del sosia come se si trovasse nel punto
in cui esso si trova. A ogni suo turno, come azione bonus,
l'incantatore può passare dall'uso dei propri sensi a quelli
del sosia o viceversa. Finché l'incantatore usa i sensi del
sosia è cieco e assordato ai fini del suo ambiente circostante.

GABBIA DI FORZA
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 30 metri
Componenti: V, S, M (polvere di rubino del valore di 1.500mo)
Durata: 1 ora
Una prigione cubica immobile e invisibile. composta di
forza magica, si materializza attorno a un'area entro gittata
a scelta dell'incantatore. La prigione può essere una gabbia
o un involucro solido, a scelta dell'incantatore.
Una prigione a forma di gabbia può misurare fino a 6
metri di lato ed è composta da sbarre del diametro di 1,25
cm disposte a distanza di 1,25 cm l'una dall'altra.
Una prigione a forma di involucro può misurare fino a
3 metri di lato e crea una barriera solida che impedisce
a qualsiasi forma di materia di attraversarla e blocca
qualsiasi incantesimo lanciato dall'interno all'esterno
detrarea o viceversa.
Quando l'incantatore lancia l'incantesimo, ogni
creatura situata completamente all'interno dell'area della
gabbia è intrappolata. Le creature situate nell'area solo
parzialmente o quelle troppo grosse per entrare nell'area
vengono spinte via finché non finiscono completamente
fuori dall'area.
Una creatura all'interno della gabbia non pub uscire
tramite mezzi non magici. Se la creatura cerca di usare
il teletrasporto o il viaggio interplanare per uscire dalla
gabbia, deve prima effettuare un tiro salvezza su Carisma.
Se lo supera. può usare quella magia per uscire dalla
gabbia, mentre se lo fallisce, non può uscire dalla gabbia
e spreca un uso di quell'incantesimo o effetto. La gabbia si
estende anche sul Piano Etereo e blocca i viaggi eterei.
Questo incantesimo non può essere dissolto da dissolvi
magie.

GIARA MAGICA
Necromanzia di 6 livello
Tempo di Lancio: 1 minuto
Gittata: Incantatore
Componenti: V, S, M (una gemma, un cristallo, un reliquiario o un altro contenitore ornamentale del valore di almeno 500 mo)
Durata: Finché non viene dissolto
Il corpo dell'incantatore cade in uno stato catatonico, la
sua anima lo abbandona per entrare nel contenitore usato
come componente materiale dell'incantesimo. Finché
l'anima dell'incantatore risiede nel contenitore, l'incantatore
è consapevole di ciò che accade attorno a lui come se si
trovasse nello spazio del contenitore, ma non può muoversi o
usare reazioni. L'unica azione che può effettuare è proiettare
la propria anima fino a 30 metri fuori dal contenitore, per
tornare nel suo corpo vivente (e terminare l'incantesimo) o
tentare di possedere il corpo di un'umanoide.
L'incantatore può tentare di possedere un qualsiasi
umanoide entro 30 metri da lui e che egli sia in grado di
vedere (le creature protette da un incantesimo protezione
dal bene e dal male o cerchio magico non possono essere
possedute). Il bersaglio deve effettuare un tiro salvezza
su Carisma. Se lo fallisce, l'anima dell'incantatore si
trasferisce nel corpo del bersaglio e l'anima del bersaglio
resta intrappolata nel contenitore. Se lo supera, il bersaglio
resiste al tentativo di possessione da parte dell'incantatore
che non potrà tentare di possederlo di nuovo per le 24 ore
successive.
Una volta che l'incantatore ha posseduto il corpo di
una creatura, ne assume il controllo. Le sue statistiche
di gioco sono sostituite dalle statistiche della creatura,
anche se l'incantatore conserva il suo allineamento e i suoi
punteggi di Intelligenza, Saggezza e Carisma. L'incantatore
conserva i benefici dei suoi privilegi di classe. Se il
bersaglio possiede dei livelli di classe, l'incantatore non
può usare nessuno dei suoi privilegi di classe.
Nel frattempo, l'anima della creatura posseduta pub
percepire ciò che accade attorno al contenitore usando
i propri sensi, ma non può muoversi o effettuare alcuna
azione.
Finché possiede un corpo, l'incantatore può usare la sua
azione per rare ritorno dal corpo ospite al contenitore, se
esso si trova entro 30 metri da lui. riportando l'anima della
creatura ospite nel suo corpo. Se il corpo ospite muore
mentre l'incantatore è al suo interno, la creatura muore e
l'incantatore deve effettuare un tiro salvezza su Carisma
contro la CD del suo stesso incantesimo. Se lo supera,
ritorna nel contenitore qualora esso si trovi entro 30 metri
da lui. Altrimenti, l'incantatore muore.
Se il contenitore è distrutto o se l'incantesimo termina,
l'anima dell'incantatore ritorna immediatamente nel
suo corpo. Se il suo corpo si trova a più di 30 metri
dall'incantatore o se il corpo è morto quando l'incantato/e
tenta di farvi ritorno, l'incantatore muore. Se l'anima di ·
un'altra creatura si trova nel contenitore al momento della
sua distruzione, l'anima della creatura fa ritorno al suo
corpo, se esso è vivo e si trova entro 30 metri. Altrimenti, la
creatura muore.
Quando l'incantesimo termina. il contenitore è distrutto.

GLIFO DI INTERDIZIONE
Abiurazione di 3 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (incenso e polvere di diamante del valore di almeno 200 mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto o innescato
Quando l'incantatore lancia questo incantesimo, traccia
un glifo da cui in seguito si sprigionerà un effetto magico.
Il glifo pub essere tracciato su una superficie (come un
tavolo, una sezione di pavimento o una parete) o all'interno
di un oggetto che può essere chiuso (come un libro. una
pergamena o un forziere del tesoro), al fine di nasconderlo.
Il glifo può coprire un'area massima del diametro di 3
metri. Se la superficie o l'oggetto viene spostato per più
di 3 metri dal punto in cui l'incantatore ha lanciato questo
incantesimo, il glifo si infrange e l'incantesimo termina
senza essere innescato.
Il glifo è pressoché invisibile e richiede una prova di
Intelligenza (Indagare} contro la CD del tiro salvezza
dell'incantesimo per essere individuato.
L'incantatore decide cosa innesca il glifo quando
lancia l'incantesimo. Nel caso dei glifi tracciati su una
superficie, gli inneschi più comuni includono toccare
il glifo, camminare sul glifo, rimuovere un oggetto che
copre il glifo, giungere entro una certa distanza dal glifo
o manipolare l'oggetto su cui il glifo è stato tracciato. Nel
caso di un glifo tracciato su un oggetto, gli inneschi più
comuni includono aprire quell'oggetto, giungere entro una
certa distanza dall'oggetto, vedere o leggere il glifo. Una
volta innescato il glifo, questo incantesimo termina.
L'incantatore può affinare ulteriormente l'innesco in
modo che l'incantesimo si attivi solo in certe circostanze
o in base a certe caratteristiche fisiche (come per esempio
l'altezza o il peso), il tipo della creatura (per esempio,
l'interdizione potrebbe essere regolata per influenzare
le aberrazioni o i drow) o l'allineamento. L'incantatore
può anche stabilire le condizioni per quelle creature
che non innescano il glifo, come per esempio quelle che
pronunceranno una certa parola d'ordine.
Quando l'incantatore traccia il glifo, può scegliere tra
glifo magico e rune esplosive.
Glifo Magico. L'incantatore pub custodire un incantesimo
preparato di 39 livello o inferiore all'interno del glifo
lanciandolo come parte della procedura di creazione del
glifo. L'incantesimo deve bersagliare una singola creatura
o un'area. L'incantesimo é custodito non ha alcun effetto
immediato quando viene lanciato in questo modo. Quando
il glifo si innesca, l'incantesimo custodito viene lanciato.
Se l'incantesimo ha un bersaglio, bersaglia la creatura che
ha innescato il glifo. Se l'incantesimo influenza un'area,
l'area è centrata su quella creatura. Se l'incantesimo
evoca creature ostili o crea oggetti o trappole dannose,
ciò che viene creato o evocato appare nel punto più vicino
possibile all'intruso e lo attacca. Se l'incantesimo richiede
concentrazione, permane fino alla fine della sua durata.
Rune Esplosive. Quando questo glifo viene innescato,
diffonde un'ondata di energia magica in una sfera dcl
raggio di 6 metri centrata su di esso. La sfera si diffonde
oltre gli angoli. Ogni creatura entro l'area deve effettuare
un tiro salvezza su Destrezza. Se lo fallisce, subisce 5d8
􀃡anni da acido, freddo, fulmine, fuoco o tuono (a scelta
dell'incantatore al momento della creazione del glifo).
mentre se lo supera, subisce soltanto la metà di quei danni.
Al UveJIJ Superiori. Quando l'incantatore crea un glifo
magico, pub custodire qualsiasi incantesimo di livello pari o
inferiore al livello dello slot usato per il glifo di interdizione.
Se l'incantatore lancia questo incantesimo usando uno
slot incantesimo di 4 livello o superiore, i danni di un glifo
rune esplosive aumentano di 1d8 per ogni slot di livello
superiore al 3.

GLOBO CROMATICO
Invocazione dì 1 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un diamante del valore di almeno 5O mo)
Durata: Istantanea
L'incantatore scaglia una sfera del diametro di 10 cm
contro una creatura entro gittata e che egli sia in grado di
vedere. Può scegliere che tipo di globo creare tra acido,
freddo, fulmine, fuoco, tuono o veleno e poi effettuare
un attacco a distanza con questo incantesimo contro il
bersaglio. Se l'attacco colpisce, la creatura subisce 3d8
danni del tipo scelto dall'incantatore.
Al Uve/Il Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 1.

GLOBO DI INVULNERABILITÀ
Abiurazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 3 metri)
Componenti: V, S, M (una perla di vetro o di cristallo che si frantuma quando l'incantesimo termina)
Durata: Concentrazione, 1 minuto
Una barriera scintillante e immobile si materializza in un
raggio di 3 metri attorno all'incantatore e permane per la
durata dell'incantesimo.
Qualsiasi incantesimo di s· livello o inferiore lanciato
all'esterno della barriera non può influenzare le creature o
gli oggetti al suo interno, nemmeno se l'incantesimo viene
lanciato usando uno slot incantesimo superiore. Un tale
incantesimo può bersagliare le creature e gli oggetti
all'interno della barriera, ma non avrà alcun effetto su
di loro. Analogamente, l'area all'interno della barriera è
esclusa dalle aree influenzate da tali incantesimi.
Al Live/IJ Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o
superiore, la barriera blocca gli incantesimi di un livello
superiore per ogni slot di livello superiore al 6.

GUARDIANI SPIRITUALI
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 4,5 metri)
Componenti: V, S, M (un simbolo sacro)
Durata: Concentrazione, 10 minuti
L'incantatore chiama a sé degli spiriti che lo proteggano.
Gli spiriti fluttuano attorno a lui a una distanza di 4,5 metri
per la durata dell'incantesimo. Se l'incantatore è buono o
neutrale, la loro forma spettrale appare angelica o fatata
(a scelta dell'incantatore). Se è malvagio, appaiono come
immondi.
Quando l'incantatore lancia questo incantesimo, pub
designare un qualsiasi numero di creature che egli sia in
grado di vedere, che non ne saranno influenzate. La velocità
di una creatura influenzata viene dimezzata nell'area, e
quando la creatura entra nell'area per la prima volta o vi
inizia il proprio turno, deve effettuare un tiro salvezza su
Saggezza. Se lo fallisce, subisce 3d8 danni radiosi (se
l'incantatore è buono o neutrale) o 3d8 danni necrotici (se è
malvagio), mentre se lo supera, subisce soltanto la metà di
quei danni.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di 1d8 per ogni slot di livello
superiore al 3.

GUARDIANO DELLA FEDE
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V
Durata: 8 ore
Un guardiano spettrale Grande compare e fluttua per
la durata dell'incantesimo in uno spazio libero a scelta
dell'incantatore situato entro gittata e che egli sia in grado
di vedere. Il guardiano occupa quello spazio ed è sfocato,
ad eccezione di una spada scintillante e uno scudo decorati
con il simbolo della divinità dell'incantatore.
Ogni creatura ostile all'incantatore che si muova fino a
uno spazio entro 3 metri dal guardiano per la prima volta
in un turno deve superare un tiro salvezza su Destrezza.
Se lo fallisce, subisce 20 danni radiosi, mentre se lo
supera, subisce soltanto la metà di quei danni. Il guardiano
svanisce quando ha inferto un totale di 60 danni.

GUARIGIONE
Invocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
L'incantatore sceglie una creatura entro gittata e che egli
sia in grado di vedere. Un flusso di energia positiva investe
la creatura, consentendole di recuperare 70 punti ferita.
Questo incantesimo pone inoltre fine a ogni forma di cecità,
sordità e malattia che potrebbe influenzare il bersaglio.
Questo incantesimo non ha effetto sui costrutti o sui non
morti.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o
superiore, l'ammontare di guarigione aumenta di 10 punti
ferita per ogni slot di livello superiore al 6.

GUARIGIONE DI MASSA
Invocazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
Un'ondata di energia curativa si sprigiona dall'incantatore e
investe le creature ferite attorno a lui. L'incantatore ripristina
fino a 700 punti ferita, ripartiti come egli preferisce tra un
numero qualsiasi di creature situate entro gittata e che
egli sia in grado di vedere. Le creature guarite da questo
incantesimo vengono anche curate da tutte le malattie e da
qualsiasi effetto che le renda accecate o assordate. Questo
incantesimo non ha effetto sui costrutti o sui non morti.

GUIDA
Trucchetto di Divinazione
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore tocca una creatura consenziente. Una volta
prima che l'incantesimo termini, il bersaglio pub tirare un
d4 e aggiungere il risultato a una prova di caratteristica a
sua scelta. Può tirare il dado prima o dopo avere effettuato
la prova di caratteristica. Dopodiché l'incantesimo termina.

GUSCIO ANTI-VITA
Abiurazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 3 metri)
Componenti: V, S
Durata: Concentrazione, 1 ora
Una barriera scintillante si proietta dall'incantatore entro
un raggio di 3 metri e si muove assieme a lui, rimanendo
centrata su di lui e respingendo tutte le creature che non
siano costrutti e non morti. La barriera permane per la
durata dell'incantesimo.
La barriera impedisce a una creatura influenzata di
attraversarla o di protendersi oltre di essa. Una creatura
influenzata può lanciare incantesimi o effettuare attacchi
usando armi a distanza o armi con portata che attraversino
la barriera.
Se l'incantatore si muove in modo che una creatura
influenzata sia costretta a passare attraverso la barriera,
l'incantesimo termina.

IDENTIFICARE
Divinazione di 1 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S, M (una perla del valore di almeno 100 monete d'oro e una piuma di gufo)
Durata: Istantanea
L'incantatore sceglie un oggetto che deve toccare durante
il lancio dell'incantesimo. Se si tratta di un oggetto magico
o di un altro oggetto infuso di magia, apprende le sue
proprietà e come usarlo, se necessita di sintonia per usarlo
e quante cariche contiene, se ne contiene. Apprende se
l'oggetto è influenzato da eventuali incantesimi e quali
essi siano. Se l'oggetto è stato creato da un incantesimo,
l'incantatore apprende quale incantesimo l'ha creato.
Se invece tocca una creatura durante il lancio
dell'incantesimo, apprende quali incantesimi influenzano
attualmente quella creatura, se ce ne sono.

ILLUSIONE MINORE
Trucchetto di Illusione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: S, M (un ciuffo di lana)
Durata: 1 minuto
L'incantatore crea un suono o un'immagine di un oggetto
entro gittata che permane per la durata dell'incantesimo.
L'illusione termina anche se l'incantatore la interrompe con
un'azione o se lancia questo incantesimo di nuovo.
Se l'incantatore crea un suono, il suo volume può
variare da un sussurro a un urlo. Può trattarsi della voce
dell'incantatore, della voce di qualcun altro, del ruggito di
un leone, di un rullo di tamburi o di un qualsiasi altro suono
a sua scelta. Il suono può echeggiare ininterrottamente per
tutta la durata, oppure l'incantatore può emettere suoni più
discreti in momenti diversi prima che l'incantesimo termini.
Se l'incantatore crea l'immagine di un oggetto (come
per esempio una sedia, una serie di impronte nel fango
o uno scrigno), quell'oggetto non deve essere più grande
di un cubo con spigolo di 115 metri. L'immagine non
può emettere suoni, luci, odori o qualsiasi altro effetto
sensoriale. Un'interazione fisica con l'immagine rivela che
si tratta di un'illusione, in quanto gli oggetti la attraversano.
Se una creatura usa la sua azione per esaminare il suono
o l'immagine, può determinare che si tratta di un'illusione
se effettua con successo una prova di Intelligenza
(Indagare) contro la CD del tiro salvezza dell'incantesimo.
Se una creatura discerne l'illusione per ciò che è, l'illusione
si attenua per quella creatura.

ILLUSIONE PROGRAMMATA
Illusione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un ciuffo di lana e polvere di giada del valore di almeno 25 mo)
Durata: Finché non viene dissolto
L'incantatore crea l'illusione di un oggetto, una creatura o
un altro fenomeno visibile situato entro gittata, che si attiva
quando si verifica una condizione specifica. Fino ad allora,
l'illusione è impercettibile. L'illusione non pub essere più
grande di un cubo con spigolo di 9 metri, e l'incantatore
decide al momento del lancio dell'incantesimo come si
comporta l'illusione e quali suoni emette. Questa esibizione
preprogrammata può durare un massimo di 5 minuti.
Quando la condizione specificata si verifica, l'illusione
si materializza e si comporta nella maniera descritta
dall'incantatore. Quando l'illusione ha concluso la sua
esibizione, scompare e rimane latente per 10 minuti. Dopo
questo periodo, pub essere attivata di nuovo.
La condizione innescante pub essere generica o dettagliata
quanto l'incantatore preferisce, ma deve essere basata
su condizioni visive o auditive che si verifichino entro 9
metri dall'area. Per esempio, l'incantatore potrebbe creare
un'illusione di se stesso che apparirà e avvertirà coloro che
tenteranno di aprire una porta protetta da una trappola,
oppure potrebbe programmarla per innescarsi solo quando
una creatura recita la parola o la frase giusta.
Un'interazione fisica con l'immagine rivela che si tratta di
un'illusione, in quanto gli oggetti vi passano attraverso. Una
creatura che usa la sua azione per esaminare l'immagine
può determinare che si tratta di un'illusione superando una
prova di Intelligenza (Indagare) contro la CD del tiro salvezza
dell'incantesimo. Se una creatura discerne l'illusione per ciò
che è, riesce a vedere attraverso l'immagine e gli eventuali
suoni che essa emette si attenuano alle sue orecchie.

IMMAGINE MAGGIORE
Illusione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un ciuffo di lana)
Durata: Concentrazione, 10 minuti
L'incantatore crea l'immagine di un oggetto, una creatura
o qualche altro fenomeno visibile che non sia più grande di
un cubo con spigolo di 6 metri. I.:immagine appare in un
punto situato entro gittata e che l'incantatore sia in grado di
vedere, e permane per la durata dell'incantesimo+ Sembra
completamente reale e include temperature, suoni e odori
appropriati all'oggetto raffigurato. L'incantatore non pub
creare calore o freddo sufficienti a infliggere danni, un
rumore abbastanza forte da infliggere danni da tuono o
assordare una creatura, o un odore in grado di rendere una
creatura inferma (come il fetore di un troglodita).
Fintanto che l'incantatore si trova entro gittata, può usare
la sua azione per fare in modo che l'immagine si muova fino
a un qualsiasi altro punto entro gittata. Quando l'immagine
cambia luogo, l'incantatore può alterare il suo aspetto in
modo che il movimento appaia naturale per l'immagine.
Per esempio, se crea l'immagine di una creatura e decide
di muoverla, può alterare l'immagine in modo che sembri
camminare. Analogamente, pub fare in modo che l'illusione
generi suoni diversi in momenti diversi, facendola perfino
partecipare a una conversazione.
Un'interazione fisica con l'immagine rivela che si tratta
di un'illusione, in quanto gli oggetti vi passano attraverso.
Una creatura che usa la sua azione per esaminare
l'immagine può determinare che si tratta di un'illusione
superando una prova di Intelligenza (Indagare) contro la
CD del tiro salvezza dell'incantesimo. Se una creatura
discerne l'illusione per ciò che è, riesce a vedere attraverso.
l'immagine e le altre qualità sensoriali dell'immagine si
attenuano per quella creatura.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6* livello o
superiore, l'incantesimo dura finché non viene dissolto,
senza richiedere la concentrazione dell'incantatore.

IMMAGINE PROIETTATA
Illusione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 750 km
Componenti: V, S, M (una riproduzione in miniatura dell'incantatore fatta di materiali del valore di almeno 5 mo)
Durata: Concentrazione, 1 giorno
L'incantatore crea una copia illusoria di se stesso che
permane per la durata dell'incantesimo. La copia pub apparir-e
in un qualsiasi luogo situato entro gittata e che l'incantatore
abbia visto in precedenza, a prescindere dagli ostacoli
frapposti. L'illusione appare e suona come l'incantatore,
ma è intangibile. Se l'illusione subisce danni, scompare e
l'incantesimo termina.
L'incantatore può usare la sua azione per muovere questa
illusione fino al doppio della sua velocità e farla agire, parlare
e comportarsi nel modo che preferisce. L'illusione imita i modi
di fare dell'incantatore alla perfezione.
I.:incantatore vede e sente attraverso gli occhi e le orecchie
dell'illusione come se si trovasse nel suo spazio. Nel suo turno,
come azione bonus, può passare dai sensi dell'illusione ai
propri o viceversa. Mentre usa i sensi dell'illusione è accecato
e assordato nei confronti di ciò che accade attorno a lui.
Un'interazione fisica con l'immagine rivela che si tratta
di un'illusione, in quanto gli oggetti vi passano attraverso.
Una creatura che usa la sua azione per esaminare
l'immagine pub determinare che si tratta di un'illusione
superando una prova di Intelligenza (Indagare) contro la
CD del tiro salvezza dell'incantesimo. Se una creatura
discerne l'illusione per ciò che è, riesce a vedere attraverso
l'immagine e gli eventuali suoni che essa emette si
attenuano alle sue orecchie.

IMMAGINE SILENZIOSA
Illusione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un ciuffo di lana)
Durata: Concentrazione, 10 minuti
L'incantatore crea l'immagine di un oggetto, una creatura
o un altro fenomeno visibile che non sia più grande di
un cubo con spigolo di 4,5 metri. L'immagine appare in
un punto situato entro gittata e permane per la durata
dell'incantesimo. L'immagine è puramente visiva; non è
accompagnata da suoni, odori o altri effetti sensoriali.
L'incantatore può usare la sua azione per fare in
modo che l'immagine si muova fino a un qualsiasi altro
punto entro gittata. Quando l'immagine cambia luogo,
l'incantatore può alterare il suo aspetto in modo che il
movimento appaia naturale per l'immagine. Per esempio,
se crea l'immagine di una creatura e decide di muoverla,
può alterare l'immagine in modo che sembri camminare.
Un'interazione fisica con l'immagine rivela che si tratta
di un'illusione, in quanto gli oggetti vi passano attraverso.
Una creatura che usa la sua azione per esaminare
l'immagine può determinare che si tratta di un'illusione
superando una prova di Intelligenza (Indagare) contro la
CD del tiro salvezza dell'incantesimo. Se una creatura
discerne l'illusione per ciò che è, riesce a vedere attraverso
l'immagine.

IMMAGINE SPECULARE
Illusione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 1 minuto
Tre duplicati illusori dell'incantatore compaiono nel suo
spazio. Finché l'incantesimo non termina, i duplicati si
muovono assieme a lui e imitano le sue azioni, cambiando
posizione in modo che sia impossibile individuare quale
immagine sia quella vera. L' incantatore può usare la sua
azione per congedare i duplicati illusori.
Ogni volta che una creatura bersaglia l'incantatore con
un attacco, l'incantatore tira un d20 per determinare se
l'attacco bersaglia invece uno dei duplicati.
Se l'incantatore possiede tre duplicati, deve ottenere al
tiro un 6 o più per spostare il bersaglio delJ'attacco su un
duplicato. Se possiede due duplicati, deve ottenere al tiro
un 8 o più. Se possiede un duplicato, deve ottenere al tiro
un 11 o più.
La CA di un duplicato è pari a 10 + il modificatore di
Destrezza dell'incantatore. Se un attacco colpisce un
duplicato, esso viene distrutto. Un duplicato può essere
distrutto solo da un attacco che lo colpisce. Ignora tutti gli
altri danni ed effetti. L' incantesimo termina quando tutti e
tre i duplicati ·ono distrutti.
Una creatura non è influenzata da questo incantesimo se
non pub vedere, se si affida a sensi diversi dalla vista, come
per esempio la vista cieca, o se può percepire le illusioni
come false, nel caso sia dotata di visione del vero.

IMPRIGIONARE
Abiurazione di 9 livello
Tempo di Lancio: 1 minuto
Gittata: 9 metri
Componenti: V, S, M (un ritratto su pergamena o una statuetta che riproduce le fattezze del bersaglio e una componente speciale che varia in base alla versione dell'incantesimo che si desidera lanciare, del valore di almeno 500 mo per ogni Dado Vita del bersaglio)
Durata: Finché non viene dissolto
L'incantatore crea una costrizione magica per trattenere
una creatura entro gittata e che egli sia in grado di
vedere. Il bersaglio deve effettuare un tiro salvezza su
Saggezza. Se lo fallisce, sarà vincolato dall'incantesimo;
se invece lo supera, sarà immune a questo incantesimo
qualora l'incantatore dovesse lanciarlo di nuovo. Finché
è influenzata da questo incantesimo, la creatura non ha
bisogno di respirare, mangiare o bere e non invecchia.
Gli incantesimi di divinazione non possono localizzare o
percepire il bersaglio.
Quando l'incantatore lancia l'incantesimo, sceglie una
delle seguenti forme di prigionia.
Ceppi. Il bersaglio è bloccato sul posto da una serie di
pesanti catene saldamente ancorate al terreno. Il bersaglio
è trattenuto finché l'incantesimo non termina e non pub
muoversi o essere mosso in alcun modo fino ad allora.
La componente speciale per questa versione
dell'incantesimo è una catenella di metallo prezioso.
Prigione Delimitata. L' incantesimo trasporta il bersaglio
su un minuscolo semipiano protetto da un'interdizione
contro il teletrasporto e i viaggi planari. Il semipiano può
essere un labirinto, una gabbia, una torre o un'analoga
struttura confinata a scelta dell'incantatore.
La componente speciale per questa versione
dell'incantesimo è una riproduzione in miniatura della
prigione desiderata fatta di giada.
Prigionia ridotta. Il bersaglio è rimpicciolito fino
a un'altezza di 2,5 cm ed è rinchiuso in una gemma
o in un oggetto simile. La gemma lascia passare la
luce normalmente (consentendo al bersaglio di vedere
all'esterno e alle altre creature di vedere all'interno),
ma nient'altro può attraversarla, nemmeno tramite
teletrasporto o viaggi planari. La gemma non può es.sere
intagliata o infranta finché l'incantesimo ha effetto.
La componente speciale per questa versione
dell'incantesimo è una grossa gemma trasparente, come un
corindone, un diamante o un rubino.
Sepoltura. Il bersaglio è sepolto nelle viscere della
terra, in una sfera di forza magica sufficientemente grande
da contenerlo. Nulla pub attraversare la sfera e nessuna
creatura può teletrasportarsi o usare un viaggio planare
per entrare o uscire dalla sfera.
La componente speciale per questa versione
dell'incantesimo è un piccolo globo di mithral.
Sonno. Il bersaglio si addormenta e non può essere
svegliato.
La componente speciale per questa versione
dell'incantesimo è una raccolta di rare erbe soporifere.
Terminare l'Incantesimo. Durante il lancio
dell'incantesimo, in qualsiasi sua versione, l'incantatore
può specificare una condizione che porrà termine
all'incantesimo e libererà il bersaglio. La condizione può
essere specifica e complessa quanto l'incantatore desidera,
ma il DM deve considerarla ragionevole e ritenere che abbia
una certa probabilità di verificarsi. Le condizioni possono
basarsi sul nome, l'identità o la divinità di una creatura,
ma devono basarsi su azioni o qualità osservabili e non su
concetti intangibili come il livello, la classe o i punti ferita.
Un incantesimo dissolvi magie può terminare questo
incantesimo solo se viene lanciato come incantesimo di 9 livello bersagliando la prigione o la componente speciale
usata per crearla.
L'incantatore può usare una determinata componente
speciale soltanto per creare una prigione alla volta. Se
lancia di nuovo l'incantesimo usando la stessa componente,
il bersaglio del primo lancio viene immediatamente liberato
dalla sua prigionia.

INARIDIRE
Necromanzia di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Istantanea
Una creatura entro gittata e che l'incantatore sia in grado di
vedere è investita da un'ondata di energia necromantica che
ne prosciuga i fluidi corporei e la vitalità. Il bersaglio deve
effettuare un tiro salvezza su Costituzione. Se lo fallisce,
subisce 8d8 danni necrotici mentre se lo supera, subisce
soltanto la metà di quei danni. Questo incantesimo non ha
alcun effetto sui costrutti o sui non morti.
Se l'incantatore bersaglia una creatura vegetale o un
vegetale magico, tale bersaglio subisce svantaggio al tiro
salvezza e l'incantesimo infligge il massimo dei danni.
Se l'incantatore bersaglia un vegetale non magico
che non è una creatura, come un albero o un arbusto.
esso non effettua alcun tiro salvezza: avvizzisce e muore
automaticamente.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 5 livello o
superiore, i danni aumentano di 1d8 per ogni slot di livello
superiore al 4.

INDIVIDUAZIONE DEI PENSIERI
Divinazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (una moneta di rame)
Durata: Concentrazione, 1 minuto
Per la durata dell'incantesimo, l'incantatore può leggere
i pensieri di certe creature. Quando lancia l'incantesimo
e come sua azione in ogni turno finché l'incantesimo non
termina, l'incantatore può concentrarsi su una qualsiasi
creatura situata entro 9 metri da lui e che egli sia in grado
di vedere. Se la creatura scelta ha un'Intelligenza pari o
inferiore a 3 o non parla alcun linguaggio, non può essere
influenzata dall'incantesimo.
All'inizio l'incantatore apprende i pensieri superficiali
della creatura (ciò a cui la creatura sta pensando in quel
momento). Con un'azione. l'incantatore può trasferire la
sua attenzione sui pensieri di un'altra creatura oppure
tentare di sondare più a fondo la mente della stessa
creatura. Se sonda più a fondo, il bersaglio deve effettuare
un tiro salvezza su Saggezza. Se lo fallisce, all'incantatore
vengono rivelati i suoi ragionamenti (se ne fa), il suo stato
emotivo e una presenza dominante nei suoi pensieri
(qualcosa di cui si preoccupa, che ama o che odia). Se ha
successo. l'incantesimo termina. In ogni caso. il bersaglio è
consapevole che l'incantatore sta sondando la sua mente: se
l'incantatore non trasferisce la sua attenzione sui pensieri
di un'altra creatura, la creatura può usare la sua azione
nel proprio turno per effettuare una prova di Intelligenza
contrapposta alla prova di Intelligenza dell'incantatore. Se
ha successo, l'incantesimo termina.
Le domande rivolte verbalmente alla creatura bersaglio
plasmano naturalmente il corso dei suoi pensieri, quindi
questo incantesimo è particolarmente efficace nel corso di
un interrogatorio.
L'incantatore può anche usare questo incantesimo per
individuare la presenza di creature pensanti che non è in
grado di vedere. Quando lancia l'incantesimo, o come sua
azione nell'arco della durata, l'incantatore può cercare
pensieri entro un raggio di 9 metri da sé. L'incantesimo può
penetrare la maggior parte delle barriere, ma è bloccato da
60 cm di pietra, 5 cm di metallo diverso dal piombo o una
sottile lamina di piombo. L'incantatore non può individuare
una creatura con un'Intelligenza pari o inferiore a 3, o che
non parli alcun linguaggio.
Una volta individuata la presenza di una creatura in
questo modo, l'incantatore può leggere i suoi pensieri per il
resto della durata nel modo sopra descritto, anche se non
è in grado di vederla; la creatura, tuttavia, deve comunque
trovarsi entro gittata.

INDIVIDUAZIONE DEL BENE E DEL MALE
Divinazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 10 minuti
Per la durata dell'incantesimo, l'incantatore sa se è presente
un'aberrazione. un celestiale, un elementale, un folletto,
un immondo o un non morto entro 9 metri da lui, nonché
la posizione esatta di quella creatura. Analogamente,
l'incantatore sa se entro 9 metri da lui c'è un luogo o un
oggetto consacrato o dissacrato magicamente.
L'incantesimo può penetrare la maggior parte delle
barriere, ma è bloccato da 30 cm di pietra, 2,5 cm di
metallo comune, una sottile lamina di piombo o 90 ·Cm di
legno o terriccio.

INDIVIDUAZIONE DEL MAGICO
Divinazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 10 minuti
Per la durata dell'incantesimo, l'incantatore percepisce la
presenza della magia entro 9 metri da lui. Se percepisce la
magia in questo modo, può usare la sua azione per vedere
una debole aura attorno a ogni creatura o oggetto visibile
nell'area e che contenga magia, e apprende di che scuola di
magia si tratta, se ne esiste una.
L'incantesimo può penetrare la maggior parte delle
barriere, ma è bloccato da 30 cm di pietra, 2,5 cm di
metallo comune, una sottile lamina di piombo o 90 cm di
legno o terriccio.

INDIVIDUAZIONE DELLE MALATTIE E DEI VELENI
Divinazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (una foglia di tasso)
Durata: Concentrazione, 10 minuti
Per la durata dell'incantesimo, l'incantatore può percepire
la presenza e l'ubicazione di veleni, creature velenose e
malattie situate entro 9 metri da lui. È inoltre in grado di
identificare il tipo di veleno, creatura velenosa o malattia in
ciascuno dei casi.
L'incantesimo può penetrare la maggior parte delle
barriere, ma è bloccato da 30 cm di pietra, 2,5 cm di
metallo comune, una sottile lamina di piombo o 90 cm di
legno o terriccio.

INFLIGGI FERITE
Necromanzia di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
L'incantatore effettua un attacco in mischia con questo
incantesimo contro una creatura entro la sua portata. Se il
colpo va a segno, il bersaglio subisce 3dl0 danni necrotici.
Al Uve/li Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, i danni aumentano di ldlO per ogni slot di livello
superiore al 1.

INGRANDIRE/RIDURRE
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un pizzico di polvere di ferro)
Durata: Concentrazione, 1 minuto
L'incantatore ingrandisce o riduce una creatura o un oggetto
situato entro gittata e che egli sia in grado di vedere per la
durata dell'incantesimo. L'incantatore deve scegliere una
creatura o un oggetto che non sia indossato o trasportato. Se
il bersaglio non è consenziente, può effettuare un tiro salvezza
su Costituzione. Se lo supera, l'incantesimo non ha effetto.
Se il bersaglio è una creatura, tutto ciò che essa indossa e
trasporta cambia di taglia assieme a lei. Ogni oggetto lasciato
cadere da una creatura influenzata torna immediatamente alla
sua taglia normale.
Ingrandire. La taglia del bersaglio raddoppia in tutte le
dimensioni e il suo peso aumenta di otto volte. Questa crescita
aumenta la taglia della creatura di una categoria (da Media
a Grande, per esempio). Se non c'è abbastanza spazio per
consentire al bersaglio di raddoppiare la sua taglia, la creatura
o l'oggetto in questione sviluppa la massima taglia possibile
nello spazio disponibile. Finché l'incantesimo non termina, il
bersaglio dispone anche di vantaggio alle prove di Forza e ai
tiri salvezza su forza. Anche le armi del bersaglio crescono
fino ad adattarsi alla nuova taglia. Finché queste armi sono
ingrandite, gli attacchi effettuati dal bersaglio con queste armi
infliggono ld4 danni extra.
Ridurre. La taglia del bersaglio si dimezza in tutte le
dimensioni e il suo peso diventa un ottavo del peso normale.
Questa riduzione diminuisce la taglia della creatura di
una categoria (da Media a Piccola, per esempio). Finché
l'incantesimo non termina, il bersaglio subisce svantaggio alle
prove di Forza e ai tiri salvezza su Forza. Anche le armi del
bersaglio si riducono fino ad adattarsi alla nuova taglia. Finché
queste armi sono ridotte, gli attacchi effettuati dal bersaglio
con queste armi infliggono ld4 danni in meno (i danni non
possono scendere a meno di 1).

INSETTO GIGANTE
Trasmutazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore trasforma un massimo di dieci millepiedi,
tre ragni, cinque vespe o uno scorpione situati entro gittata
in versioni giganti delle loro forme naturali per la durata
dell'incantesimo. Un millepiedi diventa un millepiedi gigante,
un ragno diventa un ragno gigante, una vespa diventa una
vespa gigante e uno scorpione diventa uno scorpione gigante.
Ogni creatura obbedisce ai comandi verbali dell'incantatore
e in combattimento agisce al turno dell'incantatore durante
ogni round. Il DM possiede le statistiche di queste creature e
risolve le loro azioni e i loro movimenti.
Una creatura rimane in questa forma gigante per la durata
dell'incantesimo, finché non scende a O punti ferita o finché
l'incantatore non usa un•azione per terminare l'effetto su di
essa.
Il DM potrebbe consentire all'incantatore di scegliere dei
bersagli diversi. Per esempio, un'ape trasformata da questo
incantesimo sarà una versione gigante che userà le stesse
statistiche di una vespa gigante.

INTERDIZIONE ALLA MORTE
Abiurazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: 8 ore
L'incantatore tocca una creatura e le conferisce una certa
misura di protezione dalla morte.
La prima volta in cui il bersaglio dovrebbe scendere a O
punti ferita a seguito dei danni subiti, il bersaglio scende
invece a 1 punto ferita e l'incantesimo termina.
Se l'incantesimo ha ancora effetto quando il bersaglio è
soggetto a un effetto che lo ucciderebbe istantaneamente
senza infliggere danni, quell'effetto è invece negato contro il
bersaglio e l'incantesimo termina.

INTERDIZIONE ALLE LAME
Trucchetto di Abiurazione
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 1 round
L'incantatore protende la mano in avanti e traccia un
simbolo di interdizione nell'aria. Fino alla fine del suo turno
successivo, l'incantatore dispone di resistenza ai danni
contundenti, perforanti e taglienti inferti dagli attacchi con
le armi.

INTERMITTENZA
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 1 minuto
L'incantatore tira un d20 alla fine di ogni suo turno per la
durata dell'incantesimo. Con un risultato pari o superiore
a 11, svanisce dal suo piano di esistenza attuale e compare
sul Piano Etereo (se l'incantatore già si trovava su quel
piano, l'incantesimo non funziona e il lancio va sprecato).
All'inizio del suo turno successivo, e quando l'incantesimo
termina se l'incantatore si trova sul Piano Etereo.
l'incantatore torna su uno spazio libero a sua scelta, situato
entro 3 metri dallo spazio da cui è svanito e che egli sia
in grado di vedere, Se nessuno spazio libero è disponibile
entro quella gittata, l'incantatore appare nello spazio libero
più vicino (determinato casualmente se più spazi liberi
si trovano a pari distanza). L'incantatore può terminare
questo incantesimo con un'azione.
Finché si trova sul Piano Etereo, l'incantatore può vedere
e sentire il piano da cui proviene, che viene proiettato
attorno a lui in ombre di grigio ed è visibile solo fino a
una distanza di 18 metri. L'incantatore può influenzare
ed essere influenzato solo dalle altre creature sul Piano
Etereo. Le creature che non si trovano su quel piano non
possono percepire l'incantatore o interagire con lui se non
sono dotate di qualche capacità che consenta loro di farlo.

INTIMORIRE INFERNALE
Invocazione di 1 livello
Tempo di Lancio: 1 reazione, che l'incantatore può effettuare quando subisce danni da una creatura entro 18 metri e che egli sia in grado di vedere
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
L'incantatore punta l'indice contro la creatura che gli
ha inferto danni e quella creatura è momentaneamente
avviluppata da una cortina di fiamme infernali. La creatura
deve effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 2d10 danni da fuoco, mentre se lo supera, subisce
soltanto la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, i danni aumentano di 1dlO per ogni slot di livello
superiore al 1.

INTRALCIARE
Evocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Erbacce e rampicanti spuntano dal terreno in un quadrato
con lato di 6 metri che parte da un punto situato entro
gittata. Per la durata dell'incantesimo, questi vegetali
trasformano l'area in terreno difficile.
Una creatura situata nell'area quando l'incantatore lancia
questo incantesimo deve superare un tiro salvezza su
Forza, altrimenti è trattenuta dai vegetali intralcianti finché
l'incantesimo non termina. Una creatura trattenuta dai
vegetali può usare la sua azione per effettuare una prova di
Forza contro la CD del tiro salvezza dell'incantesimo. Se ha
successo, si libera.
Quando l'incantesimo termina, i vegetali evocati
avvizziscono.

INVERSIONE DELLA GRAVITÀ
Trasmutazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 30 metri
Componenti: V, S, M (una calamita e limatura di ferro)
Durata: Concentrazione, 1 minuto
Questo incantesimo inverte la gravità all'interno di un cilindro
del raggio di 15 metri e alto 30 metri, centrato su un punto
situalo entro gittata. Tutte le creature e gli oggetti che non sono
in qualche modo ancorati al terreno all'interno dell'area cadono
verso l'alto e arrivano in cima all'area quando l'incantesimo
viene lanciato. Una creatura può effettuare un tiro salvezza
su Destrezza per afferrare un oggetto ancorato entro portala,
evitando in questo modo la caduta.
Se un oggetto solido di qualche tipo (come per esempio
un soffitto) viene urtato durante questa caduta, gli oggetti
e le creature subiscono un impatto identico a quello che
subirebbero durante una normale caduta verso il basso. Se
un oggetto o una creatura arriva in cima all'area senza colpi re
niente, rimane lassù a oscillare leggermente per la durata
dell'incantesimo.
Alla fine della durata, gli oggetti e le creature influenzate
ricadono a terra.

INVIARE
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Illimitata
Componenti: V, S, M (un pezzo di cavo di rame)
Durata: 1 round
L'incantatore invia un breve messaggio di un massimo di
venticinque parole a una creatura che gli sia familiare. La
creatura sente il messaggio nella sua mente, riconosce
l'incantatore come colui che l'ha inviato e può rispondere
immediatamente allo stesso modo. L'incantesimo consente
alle creature con un punteggio di Intelligenza pari o
superiore a 1 di capire il significato del messaggio.
L'incantatore può inviare il messaggio a qualsiasi distanza
e perfino sugli altri piani di esistenza, ma se il bersaglio
si trova su un piano di esistenza diverso dal suo, c'è una
probabilità del 5 per cento che il messaggio non arrivi.

INVISIBILITÀ
Illusione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un ciglio in uno strato di resina)
Durata: Concentrazione, 1 ora
Una creatura toccata dall'incantatore diventa invisibile finché
l'incantesimo non termina. Anche tutto ciò che il bersaglio
indossa o trasporta diventa invisibile finché rimane sulla sua
persona. L'incantesimo termina per un bersaglio quando
quel bersaglio attacca o lancia un incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3" livello o
superiore. pub bersagliare una creatura aggiuntiva per ogni
slot di livello superiore al 2.

INVISIBILITÀ SUPERIORE
Illusione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore o la creatura da lui toccata diventa invisibile
finché l'incantesimo non termina. Anche tutto ciò che il
bersaglio indossa o trasporta diventa invisibile finché
rimane sulla sua persona.

INVOCARE IL FULMINE
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
Una nube tempestosa a forma di un cilindro del raggio di 18
metri e alto 3 metri compare in un punto che l'incantatore
sia in grado di vedere e situato a 30 metri direttamente
sopra di lui. L'incantesimo fallisce se l'incantatore non è in
grado di vedere il punto in cui la nube tempestosa potrebbe
comparire (per esempio, se si trova all'interno di una stanza
che non è in grado di contenere la nube).
Quando l'incantatore lancia l'incantesimo, sceglie un punto
entro gittata e che egli sia in grado di vedere. Una scarica di
fulmini si propaga dalla nube fino a quel punto. Ogni creatura
entro 1,5 metri da quel punto deve effettuare un tiro salvezza
su Destrezza. Se lo fallisce, subisce 3dl0 danni da fulmine,
mentre se lo supera, subisce soltanto la metà di quei danni. A
ogni suo turno finché l'incantesimo non termina, l'incantatore
può usare la sua azione per invocare di nuovo il fulmine in
questo modo, bersagliando lo stesso punto o un punto diverso.
Se l'incantatore si trova all'esterno durante una tempesta
quando lancia questo incantesimo, ottiene il controllo della
tempesta esistente anziché crearne una nuova. In queste
condizioni, i danni dell'incantesimo aumentano di 1dIO.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di 1dlO per ogni slot di livello,
superiore al 3.

LABIRINTO
Evocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore esilia una creatura entro gittata e che egli sia
in grado di vedere su un semipiano labirintico. li bersaglio
rimane laggiù per la durata dell'incantesimo o finché non
fogge dal labirinto.
Il bersaglio può usare la sua azione per tentare di
fuggire. Quando lo fa, effettua una prova di Intelligenza con
CD 20. Se ha successo, riesce a fuggire e l'incantesimo
termina (un minotauro o un demone goristro hanno
successo automaticamente).
Quando l'incantesimo termina, il bersaglio ricompare
nello spazio che ha lasciato o, se quello spazio è occupato,
nella spazio libero più vicino.

LAMA INFUOCATA
Invocazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V, S, M (una foglia di scolano)
Durata: Concentrazione, 10 minuti
L'incantatore evoca una lama infuocata nella sua mano
tibera. La lama ha forma e dimensioni simili a quelle di
una scimitarra e permane per la durata dell'incantesimo.
Se l'incantatore la lascia andare, In lama scompare, ma
pub essere evocata di nuovo con un'azione bonus da parte
dell'incantatore.
L'incantatore può usare la sua azione per effettuare un
attacco in mischia con questo incantesimo con la lama
infuocata. Se colpisce, il bersaglio subisce 3d6 danni da
fuoco.
La lama infuocata proietta luce intensa entro un raggio
di 3 metri e luce fioca per altri 3 metri.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di ld6 per ogni due slot
oltre il 2.

LEGAME PLANARE
Abiurazione di 5 livello
Tempo di Lancio: 1 ora
Gittata: 18 metri
Componenti: V, S, M (un gioiello del valore di almeno 1.000 mo, che l'incantesimo consuma)
Durata: 24 ore
Con questo incantesimo, l'incantatore tenta di vincolare
un celestiale, un elementale, un folletto o un immondo e di
metterlo al suo servizio. La creatura deve trovarsi entro gittata
per l'intero lancio dell'incantesimo. (Solitamente la creatura
viene prima evocata al centro di un cerchio magico invertito per
tenerlo intrappolato mentre questo incantesimo viene lanciato.)
Completato il lancio, il bersaglio deve effettuare un tiro salvezza
su Carisma. Se lo fallisce, è obbligato a servire l'incantatore
per la durata dell'incantesimo. Se la creatura è stata evocala o
creata da un altro incantesimo, la durata di quell'incantesimo
viene estesa per corrispondere alla durata di questo.
Una creatura vincolata deve eseguire le istruzioni
dell'incantatore al meglio delle sue capacità. L'incantatore
potrebbe ordinare alla creatura di accompagnarlo in
un'avventura, di proteggere un luogo o di trasmettere un
messaggio. La creatura obbedisce alla lettera alle sue
istruzioni, ma se è ostile nei confronti dell'incantatore lotterà
per interpretare a modo suo le parole di quest'ultimo e
perseguire i suoi obiettivi personali. Se la creatura porta a
termine le istruzioni dell'incantatore prima che l'incantesimo
termini, si reca da lui per riferirgli di ciò che ha fatto, se si trova
sul suo stesso piano di esistenza. Se l'incantatore si trova su un
piano di esistenza diverso, la creatura torna nel luogo in cui è
stata vincolata e vi rimane finché l'incantesimo non termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di un livello
superiore, la durata aumenta a 10 giorni con uno slot di 6
livello, a 30 giorni con uno slot di .,. livello, a 180 giorni con uno
slot di 8 livello e a un anno e un giorno con uno slot di 9 livello.

LEGAME TELEPATICO DI RARY
Divinazione di 5 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (pezzi di gusci d'uovo di due tipi di creature diverse)
Durata: 1 ora
L'incantatore stringe un legame telepatico con un massimo
di otto creature consenzienti a sua scelta situate entro
gittata, collegando fisicamente ogni creatura a tutte le
altre per la durata dell'incantesimo. Le creature con un
punteggio di Intelligenza pari o inferiore a 2 non sono
influenzate da questo incantesimo.
Finché l'incantesimo non termina, i bersagli possono
comunicare telepaticamente attraverso il legame, a
prescindere che abbiano un linguaggio in comune o meno.
La comunicazione è possibile attraverso qualsiasi distanza,
ma non può estendersi ad altri piani di esistenza.

LENTEZZA
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (una goccia di melassa)
Durata: Concentrazione, 1 minuto
L'incantatore altera il tempo attorno a un massimo di sei
creature a sua scelta all'interno di un cubo con spigolo di
12 metri situato entro gittata. Ogni bersaglio deve superare
un tiro salvezza su Saggezza, altrimenti è influenzato da
questo incantesimo per la sua durata.
Un bersaglio influenzato subisce una penalità di -2 alla
CA e ai tiri salvezza su Destrezza. non può usare reazioni e
la sua velocità è dimezzata. Nel proprio turno, il bersaglio
deve scegliere se usare un'azione o un'azione bonus, ma
non entrambe. A prescindere dalle sue capacità e oggetti
magici. non può effettuare più di un attacco in mischia o a
distanza durante il suo turno.
Se la creatura tenta di lanciare un incantesimo con un
tempo di lancio di 1 azione, deve tirare un d20. Con un
risultato pari o superiore a 11, l'incantesimo non ha effetto
prima del turno successivo della creatura e quest'ultima
deve usare Ja propria azione di quel turno per completare
l'incantesimo. Se non pub farlo, l'incantesimo va sprecato.
Una creatura influenzata da questo incantesimo effettua
un altro tiro salvezza alla fine del suo turno. Se lo supera,
l'effetto per lei termina.

LEVITAZIONE
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un piccolo cappio di cuoio o un sottile cavo dorato piegato a forma di coppa con un lungo manico a un'estremità)
Durata: Concentrazione, 10 minuti
Una creatura o un oggetto a scelta dell'incantatore, situato
entro gittata e che egli sia in grado di vedere, si solleva
verticalmente fino a 6 metri e rimane sospeso lassù per
la durata dell'incantesimo. L'incantesimo pub far levitare
un bersaglio che pesa fino a 250 kg. Una creatura non
consenziente che supera un tiro salvezza su Costituzione
non subisce l'effetto dell'incantesimo.
Il bersaglio pub muoversi soltanto spingendosi o
aggrappandosi a un oggetto fisso o a una superficie entro
portata (come per esempio una parete o un soffitto), che
gli permette di muoversi come se stesse scalando quella
superficie. L'incantatore può variare l'altitudine del
bersaglio di un massimo di 6 metri in ogni direzione nel
proprio turno. Se il bersaglio è l'incantatore stesso, egli
può muoversi su o giù come parte del suo movimento.
Altrimenti può usare la sua azione per muovere il bersaglio,
che deve rimanere entro gittata.
Quando l'incantesimo termina, il bersaglio scende
dolcemente fluttuando fino a terra, se era ancora sospeso.

LIBERTÀ DI MOVIMENTO
Abiurazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (una cinghia di cuoio legata attorno al braccio o a un'appendice simile)
Durata: 1 ora
L'incantatore tocca una creatura consenziente. Per la
durata dell'incantesimo, il movimento del bersaglio non è
influenzato dal terreno difficile, e gli incantesimi e gli altri
effetti magici non possono ridurre la velocità del bersaglio
e non possono renderlo paralizzato o trattenuto.
11 bersaglio può inoltre spendere 1,5 metri di movimento
per sfuggire automaticamente alle costrizioni non magiche,
come un paio di manette o una creatura che lo abbia
afferrato. Infine, se il bersaglio si trova sott'acqua, non
subisce penalità al suo movimento e ai suoi attacchi.

LINGUAGGI
Divinazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, M (una piccola riproduzione in argilla di una ziggurat)
Durata: 1 ora
Questo incantesimo consente alla creatura toccata
dall'incantatore di comprendere qualsiasi linguaggio che
essa senta parlare. Inoltre, quando il bersaglio parla, ogni
creatura che conosca almeno un linguaggio e sia in grado
di udirlo capisce ciò che esso sta dicendo.

LOCALIZZA ANIMALI O VEGETALI
Divinazione di 2 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un ciuffo di pelo strappato a un segugio)
Durata: Istantanea
L'incantatore descrive o nomina un tipo specifico di bestia
o vegetale. Concentrandosi sulla voce della natura che
echeggia attorno a lui, apprende la direzione e la distanza
fino alla creatura o al vegetale di quel tipo più vicino entro
7,5 km, se ne è presente almeno uno.

LOCALIZZA CREATURA
Divinazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un ciuffo di pelo strappato a un segugio)
Durata: Concentrazione, 1 ora
L'incantatore descrive o nomina una creatura a lui familiare.
Percepisce la direzione dell'ubicazione di quella creatura,
purché essa si trovi entro 300 metri da lui. Se la creatura è
in movimento, l'incantatore sa in che direzione si muove.
L'incantesimo può localizzare una creatura specifica
nota all'incantatore, o la creatura più vicina di un tipo
specifico (come per esempio un umano o un unicorno),
purché l'incantatore abbia visto tale creatura da vicino
(entro 9 metri) almeno una volta. Se la creatura descritta
o nominata dall'incantatore ha una forma diversa, per
esempio se si trova sotto l'effetto di un incantesimo
metamorfosi, questo incantesimo non localizza la creatura.
Questo incantesimo non pub localizzare una creatura se
un corso d'acqua largo almeno 3 metri blocca il percorso
diretto tra l'incantatore e lo creatura.

LOCALIZZA OGGETTO
Divinazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un rametto biforcuto)
Durata: Concentrazione, 10 minuti
L'incantatore descrive o nomina un oggetto a lui familiare.
Percepisce la direzione dell'ubicazione di quell'oggetto
purché esso si trovi entro 300 metri da lui. Se l'oggetto è ia
movimento, l'incantatore sa in che direzione si muove.
L'incantesimo può localizzare un oggetto specifico noto
all'incantatore, purché l'incantatore abbia visto tale oggetto
da vicino (entro 9 metri) almeno una volta. In alternativa,
l'incantesimo pub localizzare l'oggetto più vicino di un tipo
particolare, come un certo tipo di veste, gioiello, mobile,
strumento o arma.
Questo incantesimo non può localizzare un oggetto se una
cortina di piombo di qualsiasi spessore, anche una sottile
lamina, blocca il percorso diretto tra l'incantatore e l'oggetto.

LOQUACITÀ
Trasmutazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V
Durata: 1 ora
Finché l'incantesimo non termina, quando l'incantatore
effettua una prova di Carisma, può sostituire il risultato
del tiro con un 15. Inoltre. a prescindere da ciò che dice, le
magie in grado di determinare se un bersaglio dice o meno
Ja verità indicheranno che ciò che l'incantatore sta dicendo
è la verità.

LUCE
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, M (una lucciola o del muschio fosforescente)
Durata: 1 ora
L'incantatore tocca un oggetto non più grande di 3 metti
in ogni dimensione. Finché l'incantesimo non termina,
l'oggetto proietta luce intensa entro un raggio di 6 metri e
luce fioca per altri 6 metri. La luce può essere del colore
desiderato dall'incantatore. Coprire completamente
l'oggetto con qualcosa di opaco blocca la luce.
L'incantesimo termina se l'incantatore lo lancia di nuovo o
lo interrompe con un'azione.
Se l'incantatore bersaglia un oggetto impugnato o
posseduto da una creatura ostile, quella creatura deve
superare un tiro salvezza su Destrezza per evitare
l'incantesimo.

LUCE DIURNA
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: 1 ora
Una sfera di luce dcl raggio di 18 metri si diffonde da un
punto situato entro gittata scelto dall'incantatore. La sfera
è pervasa da luce intensa e proietta luce fioca per altri 18
metri.
Se il punto scelto dall'incantatore si trova su un
oggetto che egli sta impugnando o che non è indossato o
trasportato da nessuno, la luce si diffonde dall'oggetto e si
muove assieme a esso. Coprire completamente la fonte di
luce con un oggetto opaco, come una scodella o un elmo,
blocca la luce.
Se una parte dell'area di questo incantesimo si
sovrappone a un'area di oscurità creata da un incantesimo
di 3 livello o inferiore, l'incantesimo che ha creato
l'oscurità è dissolto.

LUCI DANZANTI
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un frammento di fosforo, di legno wych o una lucciola)
Durata: Concentrazione, 1 minuto
L'incantatore crea fino a quattro luci delle dimensioni
di una torcia, facendole apparire come lanterne, torce
o globi luminosi che fluttuano nell'aria per la durata
dell'incantesimo. L'incantatore può anche fondere le
quattro luci in un'unica forma luminosa vagamente
umanoide di taglia Media. Qualunque sia la forma scelta,
ogni luce proietta luce fioca entro un raggio di 3 metri.
Come azione bonus nel suo turno, l'incantatore pub
muovere le luci di un massimo di 18 metri fino a un nuovo
punto entro gittata. Ogni luce deve trovarsi entro 6 metri
da un'altra luce creata da questo incantesimo; una luce si
spegne se esce dalla gittata dell'incantesimo.

LUMINESCENZA
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: Concentrazione, 1 minuto
Ogni oggetto contenuto in un cubo con spigolo di 6 metri
entro gittata viene evidenziato da un alone di luce blu, verde
o viola (a scelta dell'incantatore). Ogni creatura situata
entro l'area quando l'incantesimo viene lanciato, viene a
sua volta evidenziata dall'alone di luce se fallisce un tiro
salvezza su Destrezza. Per la durata dell'incantesimo, gli
oggetti e le creature influenzate proiettano luce fioca entro
un raggio di 3 metri.
Ogni tiro per colpire contro una creatura o un oggetto
influenzato dispone di vantaggio se l'attaccante è in grado
di vederlo, e la creatura o l'oggetto influenzato non trae
beneficio dal fatto di essere invisibile.

MANI BRUCIANTI
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cono di 4,5 metri)
Componenti: V, S
Durata: Istantanea
L'incantatore apre le mani, punta i pollici l'uno contro l'altro
e dalla punta delle sue dita protese si propaga un sottile
velo di fiamme. Ogni creatura entro un cono di 4,5 metri
deve effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 3d6 danni da fuoco, mentre se lo supera, subisce
soltanto la metà di quei danni.
Il fuoco incendia ogni oggetto infiammabile nell'area che
non sia indossato o trasportato.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2• livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
superiore al 1.

MANO DI BIGBY
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un guscio d'uovo e un guanto di pelle di serpente)
Durata: Concentrazione, 1 minuto
L'incantatore crea una mano di forza scintillante e
trasparente di taglia Grande in uno spazio libero entro
gittata e che egli sia in grado di vedere. La mano permane
per la durata dell'incantesimo e si muove a comando
dell'incantatore, imitando i movimenti della sua mano.
La mano è un oggetto con CA 20 e un ammontare di
punti ferita pari al massimo dei punti ferita dell'incantatore.
Se scende a O punti ferita. l'incantesimo termina. Possiede
una Forza pari a 26 (+8) e una Destrezza pari a 10 (+O).
La mano non riempie il suo spazio.
Quando l'incantatore lancia l'incantesimo e come azione
bonus nei suoi turni successivi, può muovere la mano fino
a un massimo di 18 metri e poi causare uno degli effetti
seguenti a essa associati.
Mano Interposta. La mano si frappone tra l'incantatore
e una creatura a sua scelta finché l'incantatore non
impartisce alla mano un comando diverso. La mano
si muove per rimanere tra l'incantatore e il bersaglio,
fornendo all'incantatore metà copertura contro di esso. Il
bersaglio non può muoversi attraverso lo spazio della mano
se il suo punteggio di Forza è pari o inferiore al punteggio
di Forza della mano. Se il punteggio di Forza del bersaglio
è superiore a quello della mano, il bersaglio può muoversi
verso l'incantatore passando attraverso lo spazio della
mano, ma quello spazio è considerato terreno difficile per il
bersaglio.
Mano Possente. La mano tenta di spingere una creatura
situata entro 1,5 metri da essa in una direzione a scelta
dell'incantatore. Quest'ultimo effettua una prova con
la Forza della mano contrapposta alla prova di Forza
(Atletica) del bersaglio. Se il bersaglio è di taglia Media o
inferiore. l'incantatore dispone di vantaggio alla prova. Se
ha successo, la mano spinge il bersaglio fino a una distanza
pari a 1,5 metri più altri 1,5 metri per ogni punto del suo
modificatore di caratteristica da incantatore. La mano si
muove assieme al bersaglio in modo da rimanere a 1,5
metri da esso.
Mano Stritolatrice. La mano tenta di afferrare una
creatura di taglia Enorme o inferiore situata entro 1,5
metri da essa. L'incantatore usa il punteggio di Forza della
mano per la prova di lotta. Se il bersaglio è di taglia Media
o inferiore, l'incantatore dispone di vantaggio alla prova.
Finché la mano afferra il bersaglio, l'incantatore può usare
un'azione bonus per ordinare alla mano di stritolarlo.
Quando lo fa, il bersaglio subisce danni contundenti pari a
2d6 + il modificatore di caratteristica da incantatore.
PuAno Serrato. La mano colpisce una creatura o un
oggetto situato entro 1,5 metri da essa. L'incantatore
effettua un attacco in mischia con questo incantesimo per
la mano usando le proprie statistiche di gioco. Se l'attacco
colpisce, il bersaglio subisce 4d8 danni da forza.
Ai Uve/li Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6 livello o
superiore, i danni dell'opzione della mano stritolatrice
aumentano di 2d6 e quelli di pugno serrato aumentano di
2d8 per ogni slot di livello superiore al 5.

MANO MAGICA
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: 1 minuto
Una mano spettrale fluttuante appare in un punto a scelta
dell'incantatore situato entro gittata. La mano permane
per Ja durata dell'incantesimo o finché l'incantatore non la
congeda con un'azione. La mano svanisce se si trova a più
di 9 metri dall'incantatore o se quest'ultimo lancia di nuovo
questo incantesimo.
L'incantatore può usare la sua azione per controllare
la mano. Può usarla per maneggiare un oggetto, aprire
una porta o un contenitore che non sia chiuso a chiave,
estrarre o riporre un oggetto da un contenitore aperto o
versare il contenuto di una fiala. Può muovere la mano di
un massimo di 9 metri ogni volta che la usa.
La mano non può attaccare, attivare oggetti magici o
trasportare più di 5 kg.

MANTO DEL CROCIATO
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
Dall'incantatore si irradia un'aura del raggio di 9 metri
che infonde coraggio nelle creature amiche. Finché
l'incantesimo non termina. l'aura si muove assieme
all'incantatore ed è centrata su di lui. Ogni creatura non
ostile situata entro l'aura (incluso l'incantatore) infligge 1d4
danni radiosi extra quando colpisce con un attacco con
un'arma.

MARCHIO DEL CACCIATORE
Divinazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: 27 metri
Componenti: V
Durata: Concentrazione, 1 ora
L'incantatore sceglie una creatura entro gittata e che cali
sia in grado di vedere e la marchia misticamente come
sua preda. Finché l'incantesimo non termina, l'incantatore
infligge ld6 danni extra al bersaglio ogni volta che lo
colpisce con un attacco con un'arma e dispone di vantaggio
a ogni prova di Saggezza (Percezione) o Saggezza
(Sopravvivenza) effettuata per trovarlo. Se il bersaglio
scende a O punti ferita prima che questo incantesimo
termini, l'incantatore può usare un'azione bonus in un suo
turno successivo per marchiare una nuova creatura.
Ai Livelli Super/ori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 o 4 livello,
può mantenere la concentrazione sull'incantesimo fino a
un massimo di 8 ore. Quando usa uno slot incantesimo
di 5 livello o superiore, può mantenere la concentrazione
sull'incantesimo fino a un massimo di 24 ore.

MESSAGGIO
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un frammento di un filo di rame)
Durata: 1 round
L'incantatore punta l'indice verso una creatura entro
gittata e sussurra un messaggio. Il bersaglio (e soltanto
il bersaglio) sente il messaggio e può rispondere con un
sussurro che soltanto l'incantatore può udire.
L'incantatore può lanciare questo incantesimo attraverso
gli oggetti solidi, se ha familiarità con il bersaglio e sa che
si trova oltre la barriera. Il silenzio magico, 30 cm di pietra,
2,5 cm di metallo comune, una sottile lamina di piombo
o 90 cm di legno bloccano l'incantesimo. L'incantesimo
non deve necessariamente seguire una linea retta e può
svilupparsi liberamente oltre gli angoli e attraverso le
aperture.

METAMORFOSI
Trasmutazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (il bozzolo di un bruco)
Durata: Concentrazione, 1 ora
Questo incantesimo impartisce una nuova forma a una
creatura entro gittata e che l'incantatore sia in grado di
vedere. Una creatura non consenziente deve effettuare
un tiro salvezza su Saggezza per evitare l'effetto.
L'incantesimo non ha effetto su un mutaforma o su una
creatura con O punti ferita.
La trasformazione permane per la durata
dell'incantesimo o finché il bersaglio non scende a O punti
ferita o non muore. La nuova forma può essere quella di
qualsiasi bestia il cui grado di sfida sia pari o inferiore
a quello del bersaglio (o al livello del bersaglio, se esso
non possiede un grado di sfida). Le statistiche di gioco
del bersaglio, inclusi i punteggi di caratteristica mentali,
vengono sostituite dalle statistiche della bestia scelta. Il
bersaglio mantiene il suo allineamento e la sua personalità.
Il bersaglio assume i punti ferita della sua nuova forma.
Quando torna alla sua forma normale, torna al numero di
punti ferita che possedeva prima della trasformazione. Se
riassume la sua forma normale per essere sceso a O punti
ferita, ogni eventuale danno in eccesso si trasferisce alla
sua forma normale. Fintanto che i danni in eccesso non
portano la forma normale della ,creatura a O punti ferita,
essa non cade priva di sensi.
Le azioni della creatura sono limitate a quelle che la
natura della sua nuova forma le consente di effettuare: non
può parlare, lanciare incantesimi o effettuare qualsiasi
altra azione che richieda l'uso delle mani o della parola.
L'equipaggiamento del bersaglio si fonde nella nuova forma.
La creatura non può attivare. usare o impugnare gli oggetti
del suo equipaggiamento, né trarne benefici in altri modi.

METAMORFOSI PURA
Trasmutazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una goccia di mercurio, una sfera di resina e uno sbuffo di fumo)
Durata: Concentrazione, 1 ora
L'incantatore sceglie una creatura o un oggetto non
magico situato entro gittata e che egli sia in grado di
vedere e trasforma la creatura in una creatura diversa o
in un oggetto, oppure trasforma l'oggetto in una creatura
(l'oggetto non deve essere indossato o trasportato da
un'altra creatura). La trasformazione permane per la
durata dell'incantesimo, o finché il bersaglio non scende a
O punti ferita o non muore. Se l'incantatore si concentra su
questo incantesimo per l'intera durata, la trasformazione
permane finché non viene dissolta.
Questo incantesimo non ha effetto su un mutaforma
o su una creatura con O punti ferita. Una creatura non
consenziente può effettuare un tiro salvezza su Saggezza.
Se lo supera, non è influenzata da questo incantesimo.
Creatura in Creatura. Se l'incantatore trasforma una
creatura in un altro tipo di creatura, la nuova forma può
essere di qualsiasi tipo a scelta dell'incantatore, purché il
suo grado di sfida sia pari o inferiore a quello del bersaglio
(o del suo livello, se il bersaglio non possiede un grado
di sfida). Le statistiche di gioco del bersaglio, inclusi i
punteggi di caratteristica mentali, vengono sostituite dalle
statistiche della nuova forma. Il bersaglio mantiene il suo
allineamento e la sua personalità.
Il bersaglio assume i punti ferita della sua nuova forma.
Quando torna alla sua forma normale, torna al numero di
punti ferita che possedeva prima della trasformazione. Se
riassume la sua forma normale per essere sceso a O punti
ferita, ogni eventuale danno in eccesso si trasferisce alla
sua forma normale. Fintanto che i danni in eccesso non
portano la forma normale della creatura a O punti ferita,
essa non cade priva di sensi.
Le azioni della creatura sono limitate a quelle che la
natura della sua nuova forma le consente di effettuare: non
può parlare, lanciare incantesimi o effettuare qualsiasi
altra azione che richieda l'uso delle mani o della parola, a
meno che la sua nuova forma non sia in grado di compiere
tali azioni.
L'equipaggiamento del bersaglio si fonde nella nuova forma.
La creatura non può attivare, usare o impugnare gli oggetti
del suo equipaggiamento, né trarne benefici in altri modi.
Oggetto In Creatura. L'incantatore può trasformare
un oggetto in una qualsiasi creatura, fintanto che la taglia
della creatura non è superiore alla taglia dell'oggetto e
il grado di sfida della creatura è pari o inferiore a 9. La
creatura è amichevole nei confronti dell'incantatore e dei
suoi compagni e agisce a ogni turno dell'incantatore, che
decide quale azione effettua e come si muove. È il DM a
possedere le sue statistiche e a risolvere le sue azioni e il
suo movimento.
Se l'incantesimo diventa permanente, l'incantatore non
controlla più la creatura, che potrebbe rimanere amichevole
o meno nei suoi confronti, in base a come è stata trattata.
Creatura In Oggetto. Se l'incantatore trasforma una
creatura in oggetto, tutto ciò che la creatura trasporta e
indossa si fonde in quella forma. Le statistiche della creatura
diventano quelle dell'oggetto e la creatura non ricorderà nulla
del tempo trascorso in questa forma quando l'incantesimo
sarà terminato ed essa tornerà alla sua forma normale.

MIRAGGIO ARCANO
Illusione di 7 livello
Tempo di Lancio: 10 minuti
Gittata: Vista
Componenti: V, S
Durata: 10 giorni
L'incantatore fa in modo che il terreno entro un'area
massima di un quadrato con lato di 1,5 km appaia, suoni,
odori e perfino risulti al tatto come un altro tipo di terreno.
La forma generica del terreno, tuttavia, non cambia. Un
campo aperto o una strada potrebbe quindi sembrare una
palude, una collina, un crepaccio o un qualche altro tipo
di terreno difficile o invalicabile. Uno stagno potrebbe
apparire come un prato erboso, un precipizio come un
dolce pendio e un fosso erto di rocce come una strada
ampia e accogliente.
L'incantatore pub alterare allo stesso modo l'aspetto delle
strutture presenti o aggiungerne altre dove non ce ne sono.
L'incantesimo non può camuffare, occultare o aggiungere
creature.
L'illusione include elementi auditivi, visivi, tattili e olfattivi
quindi può trasformare un terreno libero in terreno difficile
(o viceversa) o ostacolare i movimenti attraverso l'area in
altri modi. Ogni frammento del terreno illusorio (come
per esempio una roccia o un bastone) che viene rimosso
dall'area dell'incantesimo scompare immediatamente.
Le creature dotate di visione del vero sono in grado
di vedere la vera forma del terreno attraverso l'illusione;
tuttavia, tutti gli elementi dell'illusione permangono, quindi,
nonostante sia consapevole della presenza dell'illusione,
una creatura può comunque interagire fisicamente con
essa.

MODIFICARE MEMORIA
Ammaliamento di 5 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore tenta di alterare i ricordi di un'altra creatura
che egli ia in grado di vedere, che dovrà effettuare un tiro
salvezza su Saggezza. Se l'incantatore sta combattendo
contro la creatura, essa dispone di vantaggio al tiro
salvezza. Se il bersaglio fallisce il tiro salvezza, diventa
affascìnato dall'incantatore per la durata dell'incantesimo.
Il bersaglio affascinato è incapacitato e inconsapevole
di ciò che accade attorno a lui, ma può ancora udire
l'incantatore. Se subisce danni o se è bersagliato da un
altro incantesimo, questo incantesimo termina e nessun
ricordo del bersaglio viene modificalo.
Finché questo ammaliamento permane, l'incantatore può
alterare il ricordo che il bersaglio ha di un evento avvenuto
entro le ultime 24 ore e della durata massima di 10 minuti.
L'incantatore può eliminare permanentemente tutti i
ricordi dell'evento, consentire al bersaglio di ricordare
l'evento con perfetta lucidità e in ogni dettaglio, alterare il
ricordo di alcuni dettagli dell'evento o creare il ricordo di
un evento diverso.
L'incantatore deve parlare con il bersaglio per descrivere
in che modo i suoi ricordi vengono alterati e il bersaglio
deve essere in grado di capire il linguaggio usato
dall'incantatore affinché i ricordi modificati si radichino
nella sua mente. La mente del bersaglio riempie le
eventuali lacune presenti nella descrizione dell'incantatore.
Se l'incantesimo termina prima che l'incantatore abbia
finito di descrivere i ricordi modificati, i ricordi della
creatura non subiscono alcuna alterazione. Altrimenti, i
ricordi modificati si radicano nella mente del bersaglio
quando l'incantesimo termina.
Un ricordo modificato non influenza necessariamente
il comportamento di una creatura, specialmente se il
ricordo contraddice le inclinazioni naturali, l'allineamento
o le convinzioni della creatura. Un ricordo modificato
illogicamente, come per esempio il ricordo di quanto
la creatura ami immergersi nell'acido, viene ignorato
e probabilmente bollato come un brutto sogno. Il DM
potrebbe ritenere che un ricordo modificato sia troppo
insensato per influenzare la creatura in modo significativo.
Un incantesimo rimuovi maledizione o ristorare superiore
lanciato sul bersaglio ripristina i veri ricordi della creatura.
Al Livelli Superiori. Se l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6 livello o
superiore, può alterare i ricordi del bersaglio relativi a un
evento risalente fino a 7 giorni fa (6 livello), 30 giorni fa (7 livello), 1 anno fa es· livello) o a un qualsiasi momento del
suo passato (9 livello).

MORTE APPARENTE
Necromanzia di 3 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pizzico di terriccio prelevato da un cimitero)
Durata: 1 ora
L'incantatore tocca una creatura consenziente, ponendola
in uno stato catatonico indistinguibile dalla morte.
Per la durata dell'incantesimo, o finché l'incantatore
non usa un'azione per toccare il bersaglio e terminare
l'incantesimo, il bersaglio appare morto a ogni ispezione
esterna e agli incantesimi usati per determinare il suo
status. Il bersaglio è accecato e incapacitato e la sua
velocità scende a O. Il bersaglio dispone di resistenza a tutti
i danni tranne i danni psichici. Se il bersaglio è ammalato
o avvelenato quando l'incantatore lancia l'incantesimo, o se
diventa ammalalo o avvelenato finché si trova sotto l'effetto
dell'incantesimo, la malattia e il veleno non hanno effetto
finché l'incantesimo non termina.

MOVIMENTI DEL RAGNO
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (una goccia di bitume e un ragno)
Durata: Concentrazione, 1 ora
Finché l'incantesimo non termina, una creatura
consenziente toccata dall'incantatore ottiene Ja capacità
di muoversi verticalmente e orizzontalmente sulle pareti
e a testa in giù sui soffitti, mantenendo le mani libere. Il
bersaglio ottiene inoltre una velocità di scalare pari alla
sua velocità base sul terreno.

MUOVERE IL TERRENO
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (una lama di ferro e un sacchetto contenente un misto di terre: argilla, terriccio e sabbia)
Durata: Concentrazione, 2 ore
L'incantatore sceglie un'area di terreno grande al massimo·
12 metri per lato e situata entro gittata. Può modellare
l'argilla, il terriccio o la sabbia entro l'area nella maniera
che preferisce per la durata dell'incantesimo. L'incantatore
può aumentare o ridurre l'elevazione del terreno, creare
o riempire una fossa, erigere o spianare una parete o
innalzare una colonna. L'estensione di tali cambiamenti
non può superare la metà della dimensione più grande
dell'area. Quindi, se influenza un quadrato con lato di
12 metri, può creare una colonna alta fino a 6 metri,
aumentare o ridurre l'elevazione del terreno di un massimo
di 6 metri, scavare una rossa della profondità massima
di 6 metri e cos1 via. Servono 10 minuti prima che queste
alterazioni siano completate.
Alla fine di ogni 10 minuti trascorsi a concentrarsi
sull'incantesimo, l'incantatore può scegliere una nuova
area di terreno da influenzare.
Dal momento che la trasformazione del terreno si
completa gradualmente, le creature nell'area solitamente
non restano intrappolate o ferite dal movimento del terreno.
Questo incantesimo non può manipolare la pietra
naturale o le costruzioni in pietra. L e rocce e le strutture
si spostano per adattarsi al nuovo terreno. Se l'incantatore
modella il terreno in un modo che renderebbe una struttura
instabile, quella struttura potrebbe crollare.
Analogamente, questo incantesimo non influenza
in modo diretto la crescita vegetale. La terra spostata
trasporta con sé ogni vegetale presente.

MURO DI FORZA
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un pizzico di polvere ricavato dalla distruzione di una gemma trasparente)
Durata: Concentrazione, 10 minuti
Un muro di forza invisibile si materializza in un punto a
scelta dell'incantatore situato entro gittata. Il muro appare
nell'orientamento che l'incantatore desidera, come barriera
orizzontale, verticale o inclinata. Può fluttuare nell'aria
o poggiare su una superficie solida. L'incantatore può
modellarlo in una semisfera o una sfera del raggio massimo
di 3 metri, o come una superficie piatta composta di dieci
pannelli quadrati con lato di 3 metri l'uno. Ogni pannello
deve essere contiguo a un altro pannello. In qualsiasi
forma, il muro ha uno spessore di 0,5 cm e permane per
la durata dell'incantesimo. Se il muro passa attraverso lo
spazio di una creatura quando appare, la creatura viene
spinta da un lato del muro a scelta dell'incantatore.
Nulla può attraversare fisicamente il muro, che è immune
a tutti i danni e non può essere dissolto tramite dissolvi
magie. Un incantesimo disintegrazione, tuttavia, distrugge il
muro istantaneamente. Il muro si estende anche sul Piano
Etereo, bloccando i viaggi eterei che lo attraversano.

MURO DI FUOCO
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un frammento di fosforo)
Durata: Concentrazione, 1 minuto
L'incantatore crea un muro di fuoco su una superficie
solida situata entro gittata. Il muro può essere lungo fino a
18 metri, alto 6 metri e spesso 30 cm, oppure può essere
un muro circolare del diametro massimo di 6 metri, alto
6 metri e spesso 30 cm. Il muro è opaco e permane per la
durata dell'incantesimo.
Quando il muro appare, ogni creatura entro la sua area
deve effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 5d8 danni da fuoco, mentre se lo supera, subisce
soltanto la metà di quei danni.
Un lato del muro, scelto dall'incantatore al momento del
lancio di questo incantesimo, infligge Sd8 danni da fuoco
a ogni creatura che termina il suo turno entro 3 metri da
quel lato o all'interno del muro. Una creatura subisce gli
stessi danni quando entra nel muro per la prima volta in un
turno o vi termina il proprio turno. L'altro lato del muro non
infligge danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di s· livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 4.

MURO DI GHIACCIO
Invocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un frammento di quarzo)
Durata: Concentrazione, 10 minuti
L'incantatore crea un muro di ghiaccio su una superficie
solida situata entro gittata, formando una semisfera o
una sfera del raggio massimo di 3 metri o una superficie
piatta composta da dieci pannelli quadrati con lato di 3
metri l'uno. Ogni pannello deve essere contiguo a un altJO
pannello. In qualsiasi forma, il muro è spesso 30 cm e
permane per la durata dell'incantesimo.
Se il muro passa attraverso lo spazio di una creatura
quando appare, la creatura entro la sua area viene spinta
da un lato del muro e deve effettuare un tiro salvezza su
Destrezza. Se lo fallisce, subisce 10d6 danni da freddo,
mentre se lo supera, subisce soltanto la metà di quei danni.
li muro è un oggetto che pub essere danneggiato e quindi
infranto. Possiede CA 12 e 30 punti ferita per ogni sezione
di 3 metri ed è vulnerabile ai danni da fuoco. Una sezione
di 3 metri di muro ridotta a O punti ferita è distrutta. Nello
spazio occupato da quella sezione resta solo una cortina
d'aria gelida. Se una creatura attraversa la cortina d'aria
gelida per la prima volta in un turno, deve effettuare un tiro
salvezza su Costituzione. Se lo fallisce, subisce Sd6 danni
da freddo, mentre se lo supera, subisce soltanto la metà di
quei danni.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o
superiore, i danni che il muro infligge quando compare
aumentano di 2d6 e i danni subiti da chi passa attraverso
la cortina d'aria gelida aumentano di ld6 per ogni slot di
livello superiore al 6.

MURO DI PIETRA
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un piccolo pezzo di granito)
Durata: Concentrazione, 10 minuti
Un muro non magico di solida pietra si materializza
partendo da un punto a scelta dell'incantatore situato
entro gittata. Il muro è spesso 15 cm e composto da dieci
pannelli quadrati con lato di 3 metri l'uno. Ogni pannello
deve essere contiguo ad almeno u n altro pannello. In
alternativa, l'incantatore può creare dei pannelli di 3 metri
per 6 metri dello spessore di soli 7,5 cm.
Se il muro attraversa lo spazio di una creatura nel
momento in cui compare, quella creatura viene spinta da
un lato del muro (a scelta dell'incantatore). Se una creatura
sarebbe circondata su tutti i lati dal muro (o dal muro e da
un'altra superficie solida), può effettuare un tiro salvezza
su Destrezza. Se lo supera, può usare la sua reazione per
muoversi fino alla sua velocità nel tentativo di non rimanere
intrappolata dal muro.
Il muro può avere la forma desiderata dall'incantatore,
ma non può occupare lo stesso spazio di una creatura o
di un oggetto. Non è necessario che il muro sia verticale o
poggi su fondamenta solide. Deve però fondersi ed essere
solidamente sorretto da una massa di pietra già esistente.
Quindi è possibile usare questo incantesimo per creare una
rampa o un ponte che attraversi un baratro.
Se l'incantatore crea un'arcata di lunghezza superiore a
6 metri, deve dimezzare le dimensioni di ogni pannello per
creare dei sostegni. Può rozzamente modellare il muro per
creare feritoie, spalti e cosí via.
Il muro è un oggetto fatto di pietra che può essere
danneggiato e quindi sfondato. Ogni pannello ha CA 15 e 30
punti ferita per ogni 2,5 cm di spessore. Quando un pannello
scende a O punti ferita è distrutto e potrebbe provocare
anche il crollo di altri pannelli, a discrezione del DM.
Se l'incantatore mantiene la concentrazione su questo
incantesimo per l'intera durata, il muro diventa permanente
e non pub essere dissolto. Altrimenti, il muro scompare
quando l'incantesimo termina.

MURO DI SPINE
Evocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (una manciata di spine)
Durata: Concentrazione, 10 minuti
L'incantatore crea u n fitto muro di rovi, resistente,
flessibile ed erto di spine affilate. Il muro appare su una
superficie solida entro gittata e permane per la durata
dell'incantesimo. Il muro può essere lungo fino a 18 metri,
alto 3 metri e spesso 1,5 metri, oppure pub essere un
muro circolare del diametro di 6 metri, alto fino a 6 metri e
spesso 1,5 metri. Il muro blocca la linea di vista.
Quando il muro appare, ogni creatura entro la sua area
deve effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 7d8 danni perforanti, mentre se lo supera, subisce
soltanto la metà di quei danni.
Una creatura può muoversi attraverso il muro, anche
se lentamente e dolorosamente. Per ogni 30 cm di muro
che attraversa, la creatura deve spendere 120 cm di
movimento. Inoltre, la prima volta che una creatura entra
nel muro in un turno o vi termina il proprio turno, deve
effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 7d8 danni taglienti, mentre se lo supera, subisce
solo la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 1· livello o
superiore, entrambi i tipi di danno aumentano di 1d8 per
ogni slot di livello superiore al 6.

MURO DI VENTO
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un minuscolo ventaglio e una piuma di origini esotiche)
Durata: Concentrazione, 1 minuto
Un muro di vento forte si solleva dal terreno in un punto
a scelta dell'incantatore situato entro gittata. Il muro può
essere lungo fino a 15 metri, alto 4,5 metri e spesso 30
cm. L'incantatore può modellare il muro nel modo che
preferisce, purché formi un percorso continuo lungo il
terreno. Il muro permane per la durata dell'incantesimo.
Quando il muro appare, ogni creatura entro la sua area
deve effettuare un tiro salvezza su Forza. Se lo fallisce,
subisce 3d8 danni contundenti, mentre se lo supera,
subisce soltanto la metà di quei danni.
Il vento forte tiene lontana la nebbia, il fumo e gli alari
gas. Le creature o gli oggetti volanti di taglia Piccola
o inferiore. non possono passare attraverso il muro. I
materiali leggeri e non fissati in qualche modo volano verso
l'alto una volta portati all'interno del muro. Le frecce, i
quadrelli e gli altri proiettili ordinari lanciati ai bersagli
dietro il muro vengono deviati verso l'alto e mancano
automaticamente. (I macigni scagliati dai giganti o dalle
macchine d'assedio e altri proiettili simili non sono
influenzati dal muro.) Le creature in forma gassosa non
possono attraversare il muro.

MURO PRISMATICO
Abiurazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: 10 minuti
Un piano di luce dai numerosi colori scintillanti forma un
muro opaco verticale (che pub misurare fino a 27 metri di
lunghezza, 9 metri di altezza e 2,5 cm di spessore), centrato
su un punto entro gittata e che l'incantatore sia in grado di
vedere. In alternativa l'incantatore pub modellare il muro
in una sfera del diametro massimo di 9 metri centrata
su un punto a sua scelta entro gittata. Il muro rimane al
suo posto per la durata dell'incantesimo. Se l'incantatore
posiziona il muro in modo che passi attraverso uno spazio
occupato da una creatura, l'incantesimo fallisce e sia razione
dell'incantatore che il suo slot incantesimo vanno sprecati.
li muro emana luce intensa entro un raggio di 30 metri
e luce fioca per altri 30 metri. L'incantatore e le creature
da lui designate al momento del lancio dell'incantesimo
possono passare attraverso il muro o rimanervi accanto
senza subire danni. Se un'altra creatura in grado di
vedere il muro giunge entro 6 metri da esso o vi comincia
il proprio turno, deve superare un tiro salvezza su
Costituzione, altrimenti è accecata per 1 minuto.
Il muro è composto da sette strati, ognuno di un colore
diverso. Quando una creatura tenta di protendersi oltre il
muro o di attraversarlo, lo fa di uno strato alla volta, fino ad
attraversare tutti gli strati del muro. Quando si protende o
attraversa ogni strato deve effettuare un tiro salvezza su
Destrezza, altrimenti sarà influenzata dalle proprietà di
quello strato, come descritto di seguito.
Il muro può essere distrutto, anche in questo caso uno
strato alla volta, procedendo in ordine dal rosso al viola,
tramite un modo specifico per ogni strato. Quando uno strato
è distrutto, resta distrutto per la durata dell'incantesimo. Un
incantesimo campo anti-magia non ha alcun effetto sul muro
e dissolvi maAie pub influenzare solo lo strato viola.
1. Rosso. La creatura subisce 10d6 danni da fuoco se
fallisce il tiro salvezza, o soltanto la metà di quei danni se
lo supera. Finché questo strato è al suo posto, gli attacchi a
distanza non magici non possono attraversare il muro. Lo
strato pub essere distrutto infliggendogli almeno 25 danni
da freddo.
2. Arancione. La creatura subisce 10d6 danni da
acido se fallisce il tiro salvezza, o soltanto la metà di quei
danni se lo supera. Finché questo strato è al suo posto,
gli attacchi a distanza magici non possono attraversare il
muro. Lo strato può essere distrutto da un vento forte.
3. Giallo. La creatura subisce 10d6 danni da fulmine se
fallisce il tiro salvezza, o soltanto la metà di quei danni se
lo supera. Questo strato può essere distrutto infliggendogli
almeno 60 danni da forza.
4. Verde. La creatura subisce 10d6 danni da veleno se
fallisce il tiro salvezza, o soltanto la metà di quei danni
se lo supera. Un incantesimo passapareti o un altro
incantesimo di livello pari o superiore in grado di aprire un
portale su una superficie solida distrugge questo strato.
5. Blu. La creatura subisce 10d6 danni da freddo se
fallisce il tiro salvezza, o soltanto la metà di quei danni se
lo supera. Questo strato può essere distrutto infliggendogli
almeno 25 danni da fuoco.
6. Indaco. l n caso di tiro salvezza fallito, la creatura è
trattenuta. Deve effettuare un tiro salvezza su Costituzione
alla fine di ogni suo turno. Se supera il tiro salvezza tre
volte, l'incantesimo termina. Se lo fallisce tre volte, si
trasforma in pietra permanentemente ed è soggetta alla
condizione di pietrificato. Non è necessario che i successi
e i fallimenti siano consecutivi; si tiene conto di entrambi
finché il bersaglio non ne accumula tre di un tipo.
Finché questo strato è al suo posto non è possibile lanciare
incantesimi attraverso il muro. Questo strato è distrutto da
una luce intensa emanata da un incantesimo luce diurna o un
incantesimo analogo di livello pari o superiore.
1. Viola. In caso di tiro salvezza fallito, la creatura
è accecata. Deve quindi effettuare un tiro salvezza su
Saggezza all'inizio del turno successivo dell'incantatore.
Se lo supera, non è più accecata, mentre se lo fallisce, viene
trasportata su un altro piano di esistenza a scelta del DM,
e non è più accecata. (Solitamente, una creatura che si trova
su un piano diverso dal suo piano di origine viene esiliata
sul suo piano di origine, mentre le altre creature solitamente
vengono inviate sul Piano Astrale o sul Piano Etereo.)
Questo strato è distrutto da un incantesimo dissolvi magie o
da un incantesimo simile di livello pari o superiore che sia in
grado di porre termine agli incantesimi e agli effetti magici.

NUBE DI NEBBIA
Evocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 1 ora
L'incantatore crea una sfera di nebbia del raggio di 6 metri
centrata su un punto entro gittata. La sfera si diffonde oltre
gli angoli e la sua area risulta pesantemente oscurata. La
nebbia permane per la durata dell'incantesimo o finché un
vento moderato o superiore (almeno 15 km all'ora) non la
disperde.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, il raggio della sfera di nebbia aumenta di 6 metri
per ogni slot di livello superiore al 1.

NUBE DI PUGNALI
Evocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una scheggia di vetro)
Durata: Concentrazione, 1 minuto
L'incantatore riempie l'aria di pugnali turbinanti in un cubo
con spigolo di 1,5 metri, centrato su un punto a sua scelta
entro gittata. Una creatura subisce 4d4 danni taglienti
quando entra nell'area dell'incantesimo per la prima volta
in un turno o inizia il proprio turno al suo interno.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, i danni aumentano di 2d4 per ogni slot di livello
superiore al 2.

NUBE INCENDIARIA
Evocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Una nube turbinante di fumo mista a un nugolo di tizzoni
incandescenti appare in una sfera del raggio di 6 metri
centrata su un punto entro gittata. La nube si diffonde
oltre gli angoli ed è pesantemente oscurata. Permane per
la durata dell'incantesimo o finché un vento moderato o
superiore (al meno 15 km all'ora) non la disperde.
Quando la nube appare, ogni creatura al suo interno deve
effettuare un tiro salvezza su Destrezza. Se lo fallisce, subisce
10d8 danni da fuoco, mentre se lo supera, subisce soltanto la
metà di quei danni. Una creatura deve effettuare questo tiro
salvezza anche quando entra nell'area dell'incantesimo per la
prima volta in un turno o vi termina il proprio turno.
La nube si muove di 3 metri allontanandosi direttamente
dall'incantatore, in una direzione a scelta di quest'ultimo
all'inizio di ogni suo turno.

NUBE MALEODORANTE
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un uovo marcio o alcune foglie di cavolfiore)
Durata: Concentrazione, 1 minuto
L'incantatore crea una sfera del raggio di 6 metri composta
di gas nauseante giallastro, centrata su un punto situato
entro gittata. La nube si diffonde oltre gli angoli e la sua
area è pesantemente oscurata. La nube permane nell'aria
per la durata dell'incantesimo.
Ogni creatura situata completamente all'interno della
nube all'inizio del suo turno deve effettuare un tiro salvezza
su Costituzione contro veleno. Se lo fallisce, spende la
sua azione di quel turno a vomitare in preda al dolore. Le
creature che non hanno bisogno di respirare o sono immuni
al veleno superano automaticamente questo tiro salvezza.
Un vento moderato (almeno 15 km all'ora) disperde la
nube dopo 4 round. Un vento forte (almeno 30 km all'ora) la
disperde dopo 1 round.

NUBE MORTALE
Evocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore crea una sfera di velenosa nebbia gialloverdastra
del raggio di 6 metri, centrata su un punto a sua
scelta entro gittata. La nebbia si diffonde oltre gli angoli e
permane per la durata dell'incantesimo o finché un vento
forte non In disperde, terminando l'incantesimo. La sua
area è pesantemente oscurata.
Quando una creatura entra nell'area dell'incantesimo per
la prima volta in un turno o inizia il proprio turno al suo
interno, deve effettuare un tiro salvezza su Costituzione.
Se lo fallisce, subisce 5d8 danni da veleno. mentre se lo
supera, subisce soltanto la metà di quei danni. Le creature
sono influenzate dall'incantesimo anche se trattengono il
respiro o non hanno bisogno di respirare.
La nebbia si muove allontanandosi di 3 metri dall'incantatore
all'inizio di ogni turno di quest'ultimo, strisciando lungo il
terreno. I vapori sono più pesanti dell'aria e rimangono al
livello del terreno; possono persino scendere nelle aperture.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6 livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 5.

OCCHIO ARCANO
Divinazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un ciuffo di pelo di pipistrello)
Durata: Concentrazione, 1 ora
L'incantatore crea un occhio magico invisibile entro gittata
che fluttua nell'aria per la durata dell'incantesimo.
L'incantatore riceve mentalmente una serie di
informazioni visive dall'occhio, che è dotato di visione
normale e scurovisione fino a 9 metri. L'occhio può
guardare in ogni direzione.
Con un'azione, l'incantatore può muovere l'occhio di 9
metri in qualsiasi direzione. Non c'è limite alla distanza di
cui l'occhio può allontanarli dall'incantatore, ma esso non
può entrare su un altro piano di esistenza. Una barriera
solida blocca il movimento dell'occhio, che però può passare
attraverso un'apertura del diametro minimo di 2,5 cm.

ONDA DISTRUTTIVA
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 9 metri)
Componenti: V
Durata: Istantanea
L'incantatore colpisce il terreno, generando un'ondata di
energia divina che si diffonde da lui. Ogni creatura scelta
dall'incantatore e situata entro 9 metri deve superare un
tiro salvezza su Costituzione, altrimenti subisce 5d6 danni
radiosi o necrotici (a scelta dell'incantatore) e cade a terra
prona. Se una creatura supera il tiro salvezza, subisce solo
metà di quei danni e non cade a terra prona.

ONDA TONANTE
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cubo con spigolo di 4,5 metri)
Componenti: V, S
Durata: Istantanea
Un'ondata di energia tonante si propaga dall'incantatore.
Ogni creatura entro un cubo con spigolo di 4,5 metri
originato dall'incantatore deve effettuare un tiro salvezza
su Costituzione. Se lo fallisce, subisce 2d8 danni da tuono
e viene spinta di 3 metri più lontana dall'incantatore,
mentre se lo supera, subisce soltanto la metà di quei danni
e non viene spinta. ,
Inoltre, gli oggetti non fissati e completamente situati
all'interno dell'area di effetto vengono automaticamente·
spinti 3 metri più lontani dall'incantatore a seguito
dell'effetto dell'incantesimo. L'incantesimo emette un
rombo tonante udibile fino a 90 metri di distanza.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2• livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 1.

OSCURITÀ
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, M (pelo di pipistrello e una goccia di pece o un pezzo di carbone)
Durata: Concentrazione, 10 minuti
L'incantatore sceglie un punto situato entro gittata da cui si
diffonde un'oscurità magica che riempie una sfera del raggio
di 4,5 metri per la durata dell'incantesimo. L'oscurità si
diffonde oltre gli angoli. Una creatura dotata di scurovisione
non è in grado di vedere attraverso questa oscurità e le luci
non magiche non possono illuminarla.
Se il punto scelto dall'incantatore si trova su un
oggetto che egli sta impugnando o che non è indossato o
trasportato da nessuno, l'oscurità si diffonde dall'oggetto e
si muove assieme a esso. Coprire completamente la fonte
dell'oscurità con un oggetto opaco, come una scodella o un
elmo, blocca l'oscurità.
Se una parte dell'area di questo incantesimo si sovrappone
a un'area di luce creata da un incantesimo di 2 livello o
inferiore, l'incantesimo che ha creato la luce è dissolto.

PALLA DI FUOCO
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (una piccola sfera di sterco di pipistrello e zolfo)
Durata: Istantanea
Una scia di luce parte dall'indice dell'incantatore e sfreccia
fino a un punto a sua scelta entro gittata, dove detona con
un profondo boato generando un'esplosione di fiamme.
Ogni creatura situata entro una sfera del raggio di 6 metri
centrata su quel punto deve effettuare un tiro salvezza
su Destrezza. Se lo fallisce, subisce 8d6 danni da fuoco,
mentre se lo supera, subisce soltanto la metà di quei danni.
Il fuoco si diffonde oltre gli angoli e incendia ogni oggetto
infiammabile nell'area che non sia indossato o trasportato.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
superiore al 3.

PALLA DI FUOCO RITARDATA
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (una piccola sfera di sterco di pipistrello e zolfo)
Durata: Concentrazione, 1 minuto
Un raggio di luce gialla si sprigiona dal dito indice
dell'incantatore per condensarsi in un punto a sua scelta
situato entro gittata, fino a formare una perla scintillante
per la durata dell'incantesimo. Quando l'incantesimo
termina perché la concentrazione dell'incantatore è stata
interrotta o perché l'incantatore ha deciso di terminarlo,
la perla deflagra con un cupo boato in un'esplosione di
fiamme che si diffonde oltre gli angoli. Ogni creatura entro
un raggio di 6 metri centrato su quel punto deve effettuare
un tiro salvezza su Destrezza. Se lo fallisce, subisce danni
da fuoco pari al totale dei danni accumulati, mentre se lo
supera, subisce soltanto la metà di quei danni.
I danni base dell'incantesimo sono pari a 12d6. Se
alla fine del turno dell'incantatore la perla non è ancora
detonata, i danni aumentano di ld6.
Se la perla scintillante viene toccata prima che
l'intervallo termini, la creatura che la tocca deve effettuare
un tiro salvezza su Destrezza. Se lo fallisce, l'incantesimo
termina immediatamente e la perla deflagra in
un'esplosione di fiamme, mentre se lo supera, può scagliare
la perla fino a una distanza di 12 metri. Quando la perla
colpisce una creatura o un oggetto solido, l'incantesimo
termina e la perla esplode.
Il fuoco danneggia gli oggetti nell'area e incendia gli
oggetti infiammabili che non sono indossati o trasportati.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 8 livello o
superiore, i danni base aumentano di 1d6 per ogni slot di
livello superiore al 7.

PARLARE CON GLI ANIMALI
Divinazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 10 minuti
L'incantatore ottiene la capacità di comprendere le
bestie e comunicare verbalmente con loro per la durata
dell'incantesimo. Le conoscenze e la consapevolezza
di molte bestie sono limitate alla loro intelligenza, ma
l'incantatore può apprendere da loro quanto meno alcune
informazioni sui luoghi o sui mostri nelle vicinanze, o su
ciò che esse sono in grado di percepire o hanno percepito
nell'ultimo giorno. L'incantatore potrebbe anche persuadere
una bestia a fargli un piccolo favore, a discrezione del DM.

PARLARE CON I MORTI
Necromanzia di 3 livello
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V, S, M (incenso bruciato)
Durata: 10 minuti
L'incantatore conferisce una parvenza di vita e di
intelligenza a un cadavere a sua scelta situato entro gittata,
permettendogli di rispondere alle domande che egli gli
pone. Il cadavere deve avere ancora una bocca e non deve
essere un non morto. L'incantesimo fallisce se il cadavere è
già stato il bersaglio di questo incantesimo negli ultimi 10
giorni.
Finché l'incantesimo non termina, l'incantatore può porre
al cadavere un massimo di cinque domande. Il cadavere
sa solo quello che sapeva in vita, inclusi i linguaggi che
conosceva. Le risposte sono generalmente brevi, criptiche
o ripetitive e il cadavere non è obbligato in alcun modo a
fornire risposte sincere se l'incantatore gli è ostile o se lo
riconosce come nemico. L'incantesimo non riporta l'anima
della creatura nel suo corpo, ma soltanto lo spirito animante.
Quindi il cadavere non può apprendere nuove informazioni,
non conosce nulla di ciò che è accaduto dopo la sua morte e
non pub speculare sugli eventi futuri.

PARLARE CON I VEGETALI
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 9 metri)
Componenti: V, S
Durata: 10 minuti
L'incantatore infonde nei vegetali entro 9 metri da sé una
parvenza di animazione e di volontà, nonché la capacità
di comunicare con lui e di obbedire ai suoi comandi più
semplici. L'incantatore può interrogare i vegetali sugli
eventi avvenuti entro l'area dell'incantesimo nella giornata
passata, ottenere informazioni sulle creature che sono
transitate al suo interno, il clima e altre circostanze.
L'incantatore pub anche trasformare un terreno reso
difficile dalla crescita vegetale (come per esempio arbusti
e sottobosco) in un terreno ordinario che permane per la
durata dell'incantesimo. In alternativa può trasformare
un terreno ordinario dove siano presenti dei vegetali in un
terreno difficile che permane per la durata dell'incantesimo,
ordinando per esempio a rami e rampicanti di ostacolare
gli inseguitori.
I vegetali potrebbero essere in grado di effettuare altri
compiti per conto dell'incantatore, a discrezione del DM.
L'incantesimo non consente alle piante di sradicarsi e di
deambulare, ma consente loro di muovere liberamente
rami, rampicanti e viticci.
Se una creatura vegetale si trova nell'area, l'incantatore
può comunicare con essa come se entrambi condividessero
un linguaggio, ma non ottiene alcuna capacità magica di
influenzarla.
Questo incantesimo può fare in modo che i vegetali creati
dall'incantesimo intralciare liberino una creatura trattenuta.

PAROLA DEL POTERE GUARIRE
Invocazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
Un'onda di energia curativa investe la creatura toccata
dall'incantatore. Il bersaglio recupera tutti i suoi punti
ferita. Se la creatura è affascinata, paralizzata, spaventata o
stordita, quella condizione termina. Se la creatura è prona,
può usare la sua reazione per rialzarsi. Questo incantesimo
non ha effetto sui costrutti o sui non morti

PAROLA DEL POTERE STORDIRE
Ammaliamento di 8 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: Istantanea
L'incantatore pronuncia una parola del potere che può
sopraffare la mente di una creatura entro gittata e che
egli sia in grado di vedere, lasciandola in uno stato
confusionale. Se il bersaglio possiede 150 punti ferita o
meno, è stordito. Altrimenti, l'incantesimo non ha effetto.
Il bersaglio stordito deve effettuare un tiro salvezza
su Costituzione alla fine di ogni suo turno. Se lo supera,
l'effetto di stordimento termina.

PAROLA DEL POTERE UCCIDERE
Ammaliamento di 9 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: Istantanea
L'incantatore pronuncia una parola del potere che può
uccidere istantaneamente una creatura entro gittata e che
egli sia in grado di vedere. Se la creatura scelta possiede
100 punti ferita o meno, muore. Altrimenti, l'incantesimo
non ha effetto.

PAROLA DEL RITIRO
Evocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 1,5 metri
Componenti: V
Durata: Istantanea
L'incantatore e un massimo di cinque creature consenzienti
entro es metri da lui si teletrasportano istantaneamente
in un santuario designato in precedenza. L'incantatore
e le creature che si teletrasportano con lui compaiono
nello spazio libero più vicino al punto designato quando
egli ha preparato il suo santuario (vedi sotto). Se lancia
questo incantesimo prima di avere preparato un santuario,
l'incantesimo non ha effetto.
L'incantatore deve designare un santuario lanciando questo
incantesimo all'interno di un luogo dedicato alla sua divinità
o fortemente legato a essa, come per esempio un tempio. Se
tenta di lanciare l'incantesimo in questo modo in un'area che
non è dedicata alla sua divinità, l'incantesimo non ha effetto.

PAROLA DIVINA
Invocazione di 7 livello
Tempo di Lancio: 1 azione bonus
Gittata: 9 metri
Componenti: V
Durata: Istantanea
L'incantatore pronuncia una parola divina, pervasa dal potere
che plasmò il mondo all'alba della creazione, scegliendo
un qualsiasi numero di creature entro gittata e che egli sia
in grado di vedere. Ogni creatura che è in grado di sentire
l'incantatore deve effettuare un tiro salvezza su Carisma. Se lo
fallisce, subisce un effetto basato sui suoi punti ferita attuali:
• 50 punti ferita o meno: assordata per 1 minuto
• 40 punti ferita o meno: assordata e accecata per 10 minuti
• 30 punti ferita o meno: accecata, assordata e stordita per 1 ora
• 20 punti ferita o meno: uccisa istantaneamente
A prescindere dai suoi punti ferita attuali, un celestiale,
un elementale, un folletto o un immondo che fallisce il suo
tiro salvezza viene respinto sul suo piano di origine (se non
si trova già laggiù) e non può fare ritorno al piano attuale
dell'incantatore per 24 ore in alcun modo ad eccezione di
un incantesimo desiderio.

PAROLA GUARITRICE
Invocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: 18 metri
Componenti: V
Durata: Istantanea
Una creatura scelta dall'incantatore entro gittata e che egli sia
in grado di vedere recupera un ammontare di punti ferita pari
a 1d4 + il modificatore di caratteristica da incantatore. Questo
incantesimo non ha effetto sui costrutti o sui non morti.
Ai livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, l'ammontare di guarigione aumenta di 1d4 punti
ferita per ogni slot di livello superiore al 1.

PAROLA GUARITRICE DI MASSA
Invocazione di 3 livello
Tempo di Lancio: 1 azione bonus
Gittata: 18 metri
Componenti: V
Durata: Istantanea
L'incantatore pronuncia una serie di parole risananti, e fino a
sei creature a sua scelta situate entro gittata e che egli sia in
grado di vedere recuperano un ammontare di punti ferita pari
a 1d4 +il modificatore di caratteristica da incantatore. Questo
incantesimo non ha effetto sui costrutti o sui non morti.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, l'ammontare di guarigione aumenta di 1d4 punti
ferita per ogni slot di livello superiore al 3.

PASSAPARETI
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un pizzico di semi di sesamo)
Durata: 1 ora
Un passaggio si apre in un punto scelto dall'incantatore su
una superficie di legno, di pietra o d i intonaco e che egli sia
in grado di vedere (come per esempio una parete, un soffitto
o un pavimento) entro gittata. Il passaggio permane per la
durata dell'incantesimo. L'incantatore decide le dimensioni
dell'apertura, che pub essere al massimo larga 1,5 metri,
alta 2,4 metri e profonda 6 metri. Il passaggio non genera
alcuna instabilità nella struttura che lo circonda.
Quando l'apertura scompare, ogni creatura o oggetto
ancora all'interno del passaggio creato dall'incantesimo
viene espulso senza subire danni nello spazio libero più
vicino alla superficie in cui l'incantesimo è stato lanciato.

PASSARE SENZA TRACCE
Abiurazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (cenere di una foglia di vischio bruciata e un rametto di abete)
Durata: Concentrazione, 1 ora
L'incantatore è avvolto da un velo d'ombra e di silenzio che
impediste a lui e ai suoi compagni di essere individuati.
Per la durata dell'incantesimo, ogni creatura da lui scelta
e situata entro 9 metri da lui (incluso se stesso) ottiene un
bonus di + 10 alJe prove di Destrezza (Furtività) e le sue
tracce sono impossibili da seguire se non tramite mezzi
magici. Una creatura che riceve questo bonus non lascia
impronte o altre tracce del suo passaggio.

PASSO VELATO
Evocazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Istantanea
L'incantatore è avvolto per un istante da una foschia
argentata e si teletrasporta di un massimo di 9 metri fino a
uno spazio libero che egli sia in grado di vedere.

PASSO VELOCE
Trasmutazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pizzico di terriccio)
Durata: 1 ora
L'incantatore tocca una creatura, la cui velocità aumenta di
3 metri finché l'incantesimo non termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2" livello
o superiore, l'incantatore può bersagliare una creatura
aggiuntiva per ogni slot di livello superiore al 1.

PAURA
Illusione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cono di 9 metri)
Componenti: V, S, M (una piuma bianca o un cuore di pollo)
Durata: Concentrazione, 1 minuto
L'incantatore proietta un'immagine illusoria delle peggiori
paure di una creatura. Ogni creatura entro un cono di
9 metri deve superare un tiro salvezza su Saggezza,
altrimenti lascia cadere ciò che tiene in mano e diventa
spaventata per la durata dell'incantesimo.
Finché è spaventata da questo incantesimo, una
creatura deve effettuare razione di Scatto e muoversi per
allontanarsi dall'incantatore lungo il percorso più sicuro
possibile a ogni suo turno, a meno che non ci sia alcun
posto dove andare. Se la creatura termina il suo turno in un
luogo dove non possiede linea di vista fino all'incantatore,
può effettuare un tiro salvezza su Saggezza. Se lo supera,
l'incantesimo termina per lei.

PELLE CORIACEA
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un frammento di corteccia di quercia)
Durata: Concentrazione, 1 ora
L'incantatore tocca una creatura consenziente. Finché
l'incantesimo non termina, la pelle del bersaglio assume
un aspetto ruvido simile alla corteccia e la sua CA non può
essere inferiore a 16, a prescindere dal tipo di armatura
che esso indossa.

PELLE DI PIETRA
Abiurazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M ( polvere di diamante del valore di 100 mo, che l'incantesimo consuma)
Durata: Concentrazione, 1 ora
Questo incantesimo rende la carne di una creatura
consenziente toccata dall'incantatore dura come la pietra.
Finché l'incantesimo non termina, il bersaglio ottiene
resistenza ai danni non magici contundenti, perforanti e
taglienti.

PERCEZIONE DELLE BESTIE
Divinazione di 2 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: S
Durata: Concentrazione, 1 ora
L'incantatore tocca una bestia consenziente. Per la durpta
dell'incantesimo, può usare la sua azione per vedere
attraverso gli occhi della bestia e sentire ciò che essa
sente, e continuerà a farlo finché non usa la propria azione
per tornare ai suoi sensi normali. Finché percepisce il
mondo attraverso i sensi della bestia, l'incantatore ottiene
i benefici di qualsiasi senso speciale posseduto da quella
creatura, ma resta accecato e assordato nei confronti di ciò
che accade attorno a lui.

PIAGA DEGLI INSETTI
Evocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V, S, M (alcuni granelli di zucchero, alcuni chicchi di grano e un pezzetto di grasso animale)
Durata: Concentrazione, 10 minuti
Uno sciame di locuste fameliche riempie una sfera del raggio
di 6 metri centrata su un punto a scelta dell'incantatore
entro gittata. La sfera si diffonde oltre gli angoli, permane
per la durata dell'incantesimo e la sua area 􀀼 leggermente
oscurata. L'area della sfera è considerata terreno difficile.
Quando la sfera compare, ogni creatura al suo interno
deve effettuare un tiro salvezza su Costituzione. Se lo
fallisce, subisce 4dl0 danni perforanti, mentre se lo supera,
subisce soltanto la metà di quei danni. Una creatura deve
effettuare questo tiro salvezza anche quando entra nell'area
dell'incantesimo per la prima volta in un turno o vi termina
il proprio turno.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 6• livello o
superiore, i danni aumentano di ldlO per ogni slot di livello
superiore al 5.

PORTA DIMENSIONALE
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 150 metri
Componenti: V
Durata: Istantanea
L'incantatore si teletrasporta dal suo luogo attuale a un
qualsiasi altro punto entro gittata. Arriva esattamente
nel punto desiderato, che può trattarsi di un luogo che
è in grado di vedere o uno che è in grado di descrivere
dichiarandone la distanza e la direzione, come per esempio
"60 metri in linea retta verso il basso" o "verso nordovest, a
un'angolazione ascendente di 45 gradi per 90 metri".
L'incantatore pub portare con sé degli oggetti, purché
il loro peso non superi quello che egli è in grado di
trasportare. Può inoltre portare con sé una creatura
consenziente di taglia pari o inferiore alla sua, che
trasporti equipaggiamento che non superi la sua capacità
di trasporlo. La creatura deve trovarsi entro 1,5 metri
dall'incantatore quando questi lancia l'incantesimo.
Se l'incantatore dovesse arrivare in un luogo già
occupato da un oggetto o da una creatura, sia l'incantatore
che ogni creatura che viaggia assieme a lui subiscono 4d6
danni da forza ciascuno e l'incantesimo di teletrasporto
fallisce.

PORTALE
Evocazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un diamante del valore di almeno 5.000 mo)
Durata: Concentrazione, 1 minuto
L'incantatore evoca un portale che collega uno spazio
libero entro gittata e che egli sia in grado di vedere a un
punto preciso di un diverso piano di esistenza. Il portale
è un'apertura circolare del diametro variabile tra 1,5 e
6 metri, a scelta dell'incantatore. Il portale può essere
orientato in qualsiasi direzione a scelta dell'incantatore e
permane per la durata dell'incantesimo.
Il portale ha un lato anteriore e un lato posteriore su
ogni piano in cui appare. Viaggiare attraverso il portale
è possibile solo attraversandolo dal lato anteriore. Tutto
ciò che lo attraversa in questo modo viene trasportato
istantaneamente sull'altro piano, dove compare nello spazio
libero più vicino al portale.
L e divinità e gli altri signori planari possono impedire
che i portali creati da questo incantesimo si aprano in loro
presenza o in qualsiasi punto dei loro domini.
Quando l'incantatore lancia questo incantesimo, può
pronunciare il nome di una creatura specifica (pseudonimi,
titoli o soprannomi non funzionano). Se quella creatura
si trova su un piano diverso da quello in cui si trova
l'incantatore, il portale si apre nelle immediate vicinanze
della creatura nominata e attira la creatura attraverso di
esso, fino allo spazio libero più vicino sul lato del portale
in cui si trova l'incantatore. L'incantatore non ottiene alcun
potere speciale sulla creatura, che rimane libera di agire
come il DM ritiene più appropriato. Potrebbe andarsene,
aiutare l'incantatore o attaccarlo.

PORTALE ARCANO
Evocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 150 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore crea dei portali di teletrasporto collegati
che rimangono aperti per la durata dell'incantesimo.
L'incantatore sceglie due punti sul terreno che sia in grado
di vedere: un punto entro 3 metri da lui e un punto entro
150 metri da lui. Un portale circolare, del diametro di
3 metri, si apre su ognuno dei punti scelti. Se il portale
si aprirebbe in uno spazio occupato da una creatura,
l'incantesimo fallisce e il lancio è perduto.
I portali sono anelli bidimensionali scintillanti al cui
interno si agita una coltre di nebbia; fluttuano a pochi
centimetri dal suolo e sono perpendicolari al terreno nei
punti scelti dall'incantatore. Un anello è visibile soltanto da
un lato (a scelta dell'incantatore), che è il lato che funziona
come portale.
Qualsiasi creatura o oggetto che entra nel portale esce
dall'altro portale come se i due fossero adiacenti l'uno
all'altro. Passare attraverso un portale dal lato che non è
un portale non produce alcun effetto. La nebbia che riempie
ogni portale è opaca e blocca Ja visione attraverso di esso.
Nel proprio turno, l'incantatore può ruotare gli anelli come
azione bonus in modo che il lato attivo si orienti in una
direzione diversa.

PREGHIERA DI GUARIGIONE
Invocazione di 2 livello
Tempo di Lancio: 10 minuti
Gittata: 9 metri
Componenti: V
Durata: Istantanea
Fino a sei creature scelte dall'incantatore, situate entro
gittata e che egli sia in grado di vedere, recuperano
un ammontare di punti ferita a testa pari a 2d8 + il
modificatore di caratteristica da incantatore. Questo
incantesimo non ha effetto :sui costrutti o sui non morti,
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, la guarigione aumenta di ld8 per ogni slot di
livello superiore al 2.

PRESAGIO
Divinazione di 2 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Incantatore
Componenti: V, S, M (bastoncini, ossa o amuleti analoghi ricoperti di segni e del valore di almeno 25 mo)
Durata: Istantanea
Lanciando bastoncini incastonati di gemme o ossa di
drago, rivelando carte illustrate o usando altri strumenti
di divinazione, l'incantatore riceve un segno da un'entità
ultraterrena riguardo al risultato di un corso d'azione
specifico che intendi! intraprendere entro i prossimi 30
minuti. Il DM sceglie tra i seguenti presagi possibili.:
• Ventura, se l'azione fornisce risultati positivi
• Sventura, se l'azione fornisce risultati negativi
• Ventura e sventura, se l'azione fornisce sia risultati
positivi che negativi
• Nulla, se l'azione non fornisce risultati positivi o negativi
in modo rilevante
L'incantesimo non prende in considerazione quelle
potenziali circostanze che potrebbero alterare )'esito, come
per esempio il lancio di incantesimi aggiuntivi o la perdita o
l'acquisizione di un compagno.
Se l'incantatore lancia l'incantesimo due o più volte
prima di completare il suo riposo lungo successivo, esiste
una probabilità cumulativa del 25 per cento per ogni lancio
dopo il primo di ottenere un responso casuale. Il DM
effettua questo tiro in segreto.

PRESTIDIGITAZIONE
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V, S
Durata: 1 ora
Questo incantesimo è un trucco magico che gli incantatori
novizi usano per fare pratica. L'incantatore crea uno degli
effetti magici seguenti entro gittata:
• Crea un effetto sensoriale innocuo e istantaneo, come
una pioggia di scintille, una folata di vento, una tenue
melodia musicale o uno strano odore.
• Accende o spegne istantaneamente una candela, una
torcia o un piccolo fuoco da campo.
• Pulisce o sporca istantaneamente un oggetto non più
grande di un cubo con spigolo di 30 cm.
• Riscalda, raffredda o condisce materiale non vivente del
volume massimo di un cubo con spigolo di 30 cm per 1 ora.
• Fa comparire un colore, un piccolo segno o un simbolo
su un oggetto o una superficie per 1 ora.
• Crea un ninnolo non magico o un'immagine illusoria che
può stare nella sua mano e che permane fino alla fine del
suo turno successivo.
Se l'incantatore lancia questo incantesimo più volte,
può tenere attivi fino a tre dei suoi effetti non istantanei
contemporaneamente, e può congedare ognuno di questi
effetti con un'azione.

PREVISIONE
Divinazione di 9 livello
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S, M (una piuma di colibrí)
Durata: 8 ore
L'incantatore tocca una creatura consenziente e le
conferisce una capacità limitata di prevedere il futuro
prossimo. Per la durata dell'incantesimo, il bersaglio non
può essere sorpreso e dispone di vantaggio ai tiri per
colpire, alle prove di caratteristica e ai tiri salvezza. Inoltre,
le altre creature subiscono svantaggio ai tiri per colpire
contro il bersaglio per la durata dell'incantesimo.
Questo incantesimo termina immediatamente se
l'incantatore lo lancia di nuovo prima che la sua durata
termini.

PRODURRE FIAMMA
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: 10 minuti
Una fiamma tremolante compare nella mano
dell'incantatore. La fiamma permane per la durata
dell'incantesimo e non infligge danni né all'incantatore né
al suo equipaggiamento. La fiamma proietta luce intensa
entro un raggio di 3 metri e luce fioca per altri 3 metri.
L'incantesimo termina se l'incantatore lo interrompe con
un'azione o se lo lancia di nuovo.
L'incantatore può anche attaccare con la fiamma,
ponendo termine all'incantesimo. Quando l'incantatore
lancia questo incantesimo, o usando un'azione in un turno
successivo, può scagliare la fiamma contro una creatura
situata entro 9 metri da lui. Effettua un attacco a distanza
con questo incantesimo. Se colpisce, il bersaglio subisce
ld8 danni da fuoco.
I danni di questo incantesimo aumentano di ld8 quando
l'incantatore arriva al 5 livello (2d8), 11 livello (3d8) e 17 livello (4d8).

PROIBIZIONE
Abiurazione di 6 livello (rituale)
Tempo di Lancio: 10 minuti
Gittata: Contatto
Componenti: V, S, M (uno spruzzo d'acqua santa, incenso raro e polvere di rubino del valore di almeno 1.000 mo)
Durata: 1 giorno
L'incantatore crea un'interdizione ai viaggi magici che
protegge un'area di terreno quadrata con lato di 200 metri
fino a un'altezza di 9 metri. Per la durata dell'incantesimo,
le creature non possono teletrasportarsi in quell'area o
entrarvi usando portali come quelli creati dall'incantesimo
portale. L'incantesimo isola l'area dai viaggi planari quindi
impedisce alle creature di accedere all•area tramite il Piano
Astrale, il Piano Etereo, la Selva Fatata, la Coltre Oscura 0
l'incantesimo spostamento planare.
L'incantesimo inoltre infligge danni ai tipi di creature
scelti dall'incantatore al momento del lancio. L'incantatore
sceglie uno o più tipi di creature tra celestiali, elementali,
folletti, immondi e non morti. Quando una delle creature
scelte entra nell'area dell'incantesimo per la prima
volta o vi inizia il proprio turno, subisce 5d10 radiosi o
necrotici (a scelta dell'incantatore al momento del lancio
dell'incantesimo).
Quando l'incantatore lancia questo incantesimo, pub
designare una parola d'ordine. Una creatura che pronuncia
la parola d'ordine quando entra nell'area non subisce danni
dall'incantesimo.
L'area dell'incantesimo non pub sovrapporsi all'area di
un altro incantesimo proibizione. Se l'incantatore lancia
proibizione ogni giorno nello stesso luogo per 30 giorni,
l'incantesimo permane finché non viene dissolto, e le
componenti materiali vengono consumate al momento
dell'ultimo lancio.

PROIEZIONE ASTRALE
Necromanzia di 9 livello
Tempo di Lancio: 1 ora
Gittata: 3 metri
Componenti: V, S, M (per ogni creatura influenzata da questo incantesimo, l'incantatore deve fornire un giacinto del valore di almeno 1.000 mo e un lingotto d'argento finemente decorato del valore di almeno 100 mo, entrambi consumati dall'incantesimo)
Durata: Speciale
L'incantatore e fino a un massimo di otto creature
consenzienti entro gittata proiettano i loro corpi astrali
sul Piano Astrale (l'incantesimo fallisce e il lancio è
sprecato se l'incantatore si trova già su quel piano). li corpo
materiale che l'incantatore si lascia indietro cade privo di
sensi ed entra in uno stato di animazione :sospesa; non ha
bisogno di cibo o di aria e non invecchia.
Il corpo astrale dell'incantatore assomiglia alla sua
forma mortale in quasi ogni modo, replicandone le
statistiche di gioco e le proprietà. La differenza principale
consiste nell'aggiunta di un cordone argentato che parte
dalle sue scapole e fluttua alle sue spalle, diventando
invisibile dopo circa 30 cm. Questo cordone tiene ancorato
l'incantatore al suo corpo materiale. Fintanto che il cordone
rimane intatto, l'incantatore è in grado di trovare la via del
ritorno. Se il cordone viene reciso (cosa che accade quando
un effetto lo dichiara specificamente), l'anima e il corpo
dell'incantatore si separano e l'incantatore muore sul colpo.
La forma astrale dell'incantatore può viaggiare
liberamente per il Piano Astrale e può passare attraverso
i portali di quel piano che conducono a qualsiasi altro
piano. Se l'incantatore si sposta su un nuovo piano o torna
sul piano dove si trovava quando aveva lanciato questo
incantesimo, il suo corpo e le sue proprietà vengono
trasportati lungo il cordone argentato, consentendo
all'incantatore di rientrare nel suo corpo nel momento in
cui accede al nuovo piano. La forma astrale dell'incantatore
è un'incarnazione separata. Qualsiasi danno o altro effetto
che si applichi a essa non ha effetto sul suo corpo fisico e
non persiste quando la forma astrale vi (a ritorno.
L'incantesimo permane per l'incantatore e i suoi
compagni fino a quando l'incanalatore usa la sua azione
per terminarlo. Quando l'incantesimo termina, la creatura
influenzata fa ritorno al suo corpo fisico e si sveglia.
L'incantesimo potrebbe terminare prematuramente per
l'incantatore o uno dei suoi compagni. Un incantesimo
dissolvi magie usato con successo contro una forma astrale
o un corpo fisico termina l'incantesimo per quella creatura.
Se il corpo originale o la forma astrale di una creatura
scende a O punti ferita, l'incantesimo termina per quella
creatura. Se l'incantesimo termina e il cordone argentato è
intatto, il cordone trascina la forma astrale della creatura
all'interno del suo corpo, cosa che pone fine allo stato di
animazione sospesa.
Se l'incantatore fa ritorno al suo corpo prematuramente,
i suoi compagni rimangono nelle loro forme astrali e
devono trovare da soli il modo di rientrare nei loro corpi,
solitamente scendendo a O punti ferita.

PROTEZIONE DAI VELENI
Abiurazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: 1 ora
L'incantatore tocca una creatura. Se quella creatura è
avvelenata, il veleno è neutralizzato. Se il bersaglio è afflitto
da più veleni, l'incantatore neutralizza un veleno di cui
conosce la presenza, oppure ne neutralizza uno a caso.
Per la durata dell'incantesimo, il bersaglio dispone di
vantaggio ai tiri salvezza per non essere avvelenato e di
resistenza ai danni da veleno.

PROTEZIONE DAL BENE E DAL MALE
Abiurazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (acqua santa o polvere d'argento e di ferro, che l'incantesimo consuma)
Durata: Concentrazione, 10 minuti
Finché l'incantesimo non termina, una creatura
consenziente toccata dall'incantatore è protetta da certi
tipi di creature: aberrazioni, celestiali, elementali, folletti,
immondi e non morti.
La protezione conferisce vari benefici. Le creature di
quei tipi subiscono svantaggio ai tiri per colpire contro il
bersaglio. Inoltre, il bersaglio non pub essere affascinato,
posseduto o spaventato da quelle creature. Se il bersaglio
è già affascinato, posseduto o spaventato da una di quelle
creature, dispone di vantaggio al nuovo tiro salvezza contro
l'effetto rilevante.

PROTEZIONE DALL'ENERGIA
Abiurazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 ora
Per la durata dell'incantesimo, una creatura consenziente
toccata dall'incantatore dispone di resistenza a un tipo di
danni scelto dall'incantatore: acido, freddo, fulmine, fuoco
o tuono.

PUNIZIONE ACCECANTE
Invocazione di 3 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce una creatura
con un attacco con un'arma da mischia entro la durata di
questo incantesimo, l'arma in questione emette un lampo
di luce intensa e l'attacco infligge 3d8 danni radiosi extra
al bersaglio. Inoltre, il bersaglio deve superare un tiro
salvezza su Costituzione, altrimenti rimarrà accecato
finché l'incantesimo non termina.
Una creatura accecata da questo incantesimo effettua
un altro tiro salvezza su Costituzione alla fine di ogni suo
turno. Se lo supera, non è più accecata.

PUNIZIONE COLLERICA
Invocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce con un
attacco con un'arma da mischia entro la durata di questo
incantesimo, infligge l d6 danni psichici extra. Inoltre, se
il bersaglio è una creatura, deve superare un tiro salvezza
su Saggezza, altrimenti sarà spaventato dall'incantatore
finché l'incantesimo non termina. Con un'azione, la
creatura può effettuare una prova di Saggezza contro la
CD del tiro salvezza dell'incantesimo per rafforzare la sua
determinazione e terminare questo incantesimo.

PUNIZIONE DEMORALIZZANTE
Invocazione di 4 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce una creatura
con un attacco con un'arma da mischia entro la durata di
questo incantesimo, la sua arma penetra sia il corpo che
la mente, e l'attacco infligge 4d6 danni psichici extra al
bersaglio, che deve effettuare un tiro salvezza su Saggezza.
Se lo fallisce, subisce svantaggio ai tiri per colpire e alle
prove di caratteristica e non può effettuare reazioni fino
alla fine del proprio turno successivo.

PUNIZIONE ESILIANTE
Abiurazione di 5 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce una creatura
con un attacco con un'arma entro la durata di questo
incantesimo, la sua arma crepita di energia e l'attacco
infligge 5dlO danni da forza extra al bersaglio. Inoltre, se
questo attacco riduce il bersaglio a 50 punti ferita o meno,
lo esilia. Se il bersaglio è originario di un piano di esistenza
diverso da quello in cui l'incantatore si trova, il bersaglio
scompare e ritorna sul suo piano natio. Se il bersaglio è
originario del piano in cui l'incantatore si trova, esso svanisce
in un semipiano innocuo. Finché si trova laggiù, il bersaglio è
incapacitato. Rimane Il finché l'incantesimo non termina, nel
qual caso ricompare nello spazio che aveva lasciato o nello
spazio libero più vicino se quello spazio è occupato.

PUNIZIONE INCANDESCENTE
Invocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l1incantatore colpisce una creatura
con un attacco con un'arma da mischia entro la durata
di questo incantesimo, l'arma diventa incandescente e
l'attacco infligge ld6 danni da fuoco extra al bersaglio,
oltre che incendiarlo. All'inizio di ogni suo turno finché
l'incantesimo non termina, il bersaglio deve effettuare un
tiro salvezza su Costituzione. Se lo fallisce. subisce ld6
danni da fuoco, mentre se lo supera, l'incantesimo termina.
Se il bersaglio o una creatura situata entro 1,5 metri da lui
usa un'azione per estinguere le fiamme, o se qualche altro
effetto sopprime le fiamme (per esempio se il bersaglio
viene immerso nell'acqua), l'incantesimo termina.
Ai Livelli Superiori. Quando l'incantatore lancia
questo incantesimo usando uno slot incantesimo di 2'
livello o superiore, i danni extra iniziali inferti dall'attacco
aumentano di ld6 per ogni slot di livello superiore al 1.

PUNIZIONE MARCHIANTE
Invocazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce una creatura
con un attacco con un'arma entro la durata di questo
incantesimo, l'arma risplende di un bagliore astrale al
momento di colpire. L'attacco infligge 2d6 danni radiosi
extra al bersaglio, che diventa visibile se è invisibile,
proietta luce fioca in un raggio di 1,5 metri attorno a sé,
e non pub diventare invisibile finché l'incantesimo non
termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, i danni extra aumentano di ld6 per ogni slot di
livello superiore al 2.

PUNIZIONE TONANTE
Invocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce con un
attacco con un'arma da mischia entro la durata di questo
incantesimo, la sua arma vibra di un rombo di tuono udibile
entro 90 metri e l'attacco infligge 2d6 danni da tuono extra
al bersaglio. Inoltre, se il bersaglio è una creatura, deve
.superare un tiro salvezza su Forza, altrimenti è spinto 3
metri più lontano dall'incantatore e buttato a terra prono.

PURIFICARE CIBO E BEVANDE
Trasmutazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V, S
Durata: Istantanea
Tutti i cibi e le bevande non magici entro una sfera
del raggio di 1,5 metri centrata su un punto a scelta
dell'incantatore entro gittata sono purificati e liberati dai
veleni e dalle malattie.

RAFFICA DI SPINE
Evocazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
La prossima volta che l'incantatore colpisce una creatura
con un'arma a distanza entro la durata di questo
incantesimo, una raffica di spine si sprigiona dalla sua
arma a distanza o dalle sue munizioni. In aggiunta al
normale effetto dell'attacco, il bersaglio e ogni creatura
entro 1,5 metri da esso devono effettuare un tiro salvezza
su Destrezza. Chi lo fallisce subisce 1dlO danni perforanti,
mentre chi lo supera subisce soltanto la metà di quei danni.
Ai Livelli Superiori. Se l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, i danni aumentano di ldlO per ogni slot di livello
superiore al 1 (fino a un massimo di 6d10).

RAGGIO DI AFFATICAMENTO
Necromanzia di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
Un raggio nero di energia logorante scaturisce dal dito
dell'incantatore e punta verso una creatura entro gittata.
L'incantatore effettua un attacco a distanza con questo
incantesimo contro il bersaglio. Se lo colpisce, il bersaglio
infligge soltanto la metà dei danni con gli attacchi con le
armi basati sulla Forza, finché l'incantesimo non termina.
Alla fine di ogni proprio turno, il bersaglio può effettuare
un tiro salvezza su Costituzione contro l'incantesimo. Se lo
supera, l'incantesimo termina.

RAGGIO DI GELO
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
Un raggio gelido di luce azzurra e biancastra sfreccia verso
una creatura entro gittata. L'incantatore effettua un attacco
a distanza con questo incantesimo contro il bersaglio. Se
lo colpisce, il bersaglio subisce ld8 danni da freddo e Ja
sua velocità è ridotta di 3 metri fino all'inizio del turno
successivo dell'incantatore.
I danni di questo incantesimo aumentano di 1d8 quando
l'incantatore arriva al 5 livello (2d8), 11 livello (3d8) e 17
livello (4d8).

RAGGIO DI INFERMITÀ
Necromanzia di 1 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Istantanea
Un raggio di nauseante energia verdastra sfreccia verso
una creatura entro gittata. L'incantatore effettua un attacco
a distanza con questo incantesimo contro il bersaglio.
Se lo colpisce. il bersaglio subisce 2d8 danni da veleno
e deve effettuare un tiro salvezza su Costituzione. Se lo
fallisce, è avvelenato fino alla fine del turno successivo
dell'incantatore.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 1.

RAGGIO ROVENTE
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
L'incantatore crea tre raggi di fuoco e li scaglia contro u􀂃o
o più bersagli entro gittata.
L'incantatore effettua un attacco a distanza con questo
incantesimo per ogni raggio. Se colpisce, il bersaglio
subisce 2d6 danni da fuoco.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, crea un raggio aggiuntivo per ogni slot di livello
superiore al 2.

RAGNATELA
Evocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un frammento di ragnatela comune)
Durata: Concentrazione, 1 ora
L'incantatore evoca una massa di spessi e viscosi filamenti
di ragnatela in un punto a sua scelta situato entro gittata.
Le ragnatele riempiono un cubo con spigolo di 6 metri
generato da quel punto per la durata dell'incantesimo. Le
ragnatele sono terreno difficile e la loro area è considerata
leggermente oscurata.
Se le ragnatele non sono ancorate tra due masse solide
(per esempio pareti o alberi) o stese su un pavimento, un
muro o un soffitto, collassano su se stesse e l'incantesimo
termina all'inizio del turno successivo dell'incantatore.
Le ragnatele stese su una superficie piatta hanno una
profondità di 1,5 metri.
Ogni creatura che inizia il suo turno nelle ragnatele o
che vi entra durante il proprio turno deve effettuare un
tiro salvezza su Destrezza. Se lo fallisce, la creatura è
trattenuta fintanto che rimane tra le ragnatele o finché non
si libera spezzandole.
Una creatura trattenuta dalle ragnatele può usare la sua
azione per effettuare una prova di Forza contro la CD del
tiro salvezza dell'incantesimo. Se ha successo, non è più
trattenuta.
Le ragnatele sono infiammabili. Un cubo di ragnatele
con spigolo di 1,5 metri brucia in 1 round, infliggendo 2d4
danni da fuoco a ogni creatura che inizi il suo turno tra te
fiamme.

RAMPICANTE AFFERRANTE
Evocazione di 4 livello
Tempo di Lancio: 1 azione bonus
Gittata: 9 metri
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore evoca un rampicante che spunta dal terreno
in uno spazio libero entro gittata e che egli sia in grado di
vedere. Quando lancia questo incantesimo, l'incantatore
pub ordinare al rampicante di avvinghiarsi a una creatura
situata entro 9 metri da esso e che l'incantatore sia in grado
di vedere. Quella creatura deve superare un tiro salvezza su
Destrezza, altrimenti viene tirata di 6 metri direttamente
verso il rampicante.
Finché l'incantesimo non termina, l'incantatore può
ordinare al rampicante di avvinghiare la stessa creatura o
un'altra creatura come azione bonus a ogni suo turno.

RANDELLO INCANTATO
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione bonus
Gittata: Contatto
Componenti: V, S, M (vischio, una foglia di trifoglio e un randello o un bastone ferrato)
Durata: 1 minuto
Il legno di un randello o di un bastone ferrato impugnato
dall'incantatore è pervaso dal potere della natura. Per la
durata dell'incantesimo, l'incantatore può usare la sua
caratteristica da incantatore anziché la Forza per i tiri per
colpire e i tiri per i danni effettuati negli attacchi in mischia
usando quell'arma; inoltre, i danni dell'arma diventano un
dS. L'arma diventa magica se già non lo era. L'incantesimo
termina se l'incantatore lo lancia di nuovo o se lascia
andare l'arma.

REGGIA MERAVIGLIOSA DI MORDENKAINEN
Evocazione di 7 livello
Tempo di Lancio: 1 minuto
Gittata: 90 metri
Componenti: V, S, M (un portale in miniatura scolpito in avorio, un frammento di marmo lucido, un cucchiaino d'argento; ognuno di questi oggetti deve avere un valore di almeno 5 mo)
Durata: 24 ore
L'incantatore evoca entro gittata una dimora
extradimensionale che permane per la durata
dell'incantesimo. L'incantatore sceglie l'ubicazione
dell'entrata, che risplende di un debole bagliore di luce ed è
larga 1,5 metri e alta 3 metri. L'incantatore e ogni creatura
da lui designata al momento del lancio dell'incantesimo
possono entrare nella dimora extradimensionale fintanto
che il portale resta aperto. L'incantatore può aprire o
chiudere il portale se si trova entro 9 metri da esso. Finché
è chiuso, il portale è invisibile.
Oltre il portale.si trova uno sfarzoso atrio circondato da
numerose stanze. L'atmosfera è fresca, pulita e accogliente.
L'incantatore può definire la planimetria della dimora
come preferisce, ma lo spazio occupato non può superare
50 cubi con spigolo di 3 metri ciascuno. La dimora è
arredata e decorata in base ai desideri dell'incantatore,
Contiene cibo a sufficienza da servire un banchetto di 9
portate per un massimo di 100 persone. Un personale di
100 servitori semitrasparenti si prende cura di tutti coloro
che entrano nella dimora. L'incantatore decide l'aspetto e
la tenuta di questi servitori, che obbediscono a ogni suo
ordine. Ogni servitore pub eseguire qualsiasi compito che
un normale servitore umano sarebbe in grado di eseguire,
ma non può attaccare o effettuare qualsiasi altra azione
che ferirebbe in modo diretto un'altra creatura. Quindi i
servitori possono portare oggetti, pulire, riparare, ripiegare
abiti, accendere fuochi, servire pietanze, versare vino
e cosl via. I servitori possono recarsi in qualsiasi punto
della dimora ma non possono uscirne. I mobili e gli altri
oggetti creati da questo incantesimo si dissolvono in fumo
se rimossi dalla dimora. Quando l'incantesimo termina,
tutte le creature all'interno dello spazio extradimensionale
vengono espulse negli spazi liberi più vicini all'entrata.

REGRESSIONE MENTALE
Ammaliamento di 8 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (una manciata di argilla, cristallo, vetro o sfere minerali)
Durata: Istantanea
L'incantatore assale la mente di una creatura entro gittata e
che egli sia in grado di vedere, nel tentativo di infrangere il suo
intelletto e la sua personalità. Il bersaglio subisce 4d6 danni
psichici e deve effettuare un tiro salvezza su Intelligenza.
Se lo fallisce, i suoi punteggi di Intelligenza e di Carisma
diventano 1.11 bersaglio non pub lanciare incantesimi,
attivare oggetti magici, capire linguaggi o comunicare in
alcun modo intelligibile. La creatura è in grado, tuttavia, di
identificare i suoi amici, seguirli e perfino proteggerli.
Alla fine di ogni 30 giorni, la creatura può ripetere il
suo tiro salvezza contro questo incantesimo. Se lo supera
l'incantesimo termina.
Anche gli incantesimi desiderio, guarigione o ristorare
superiore possono terminare questo incantesimo.

REINCARNAZIONE
Trasmutazione di 5 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (oli e unguenti rari del valore di almeno 1.000 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore tocca un umanoide morto o una parte di un
umanoide morto. Purché la creatura non sia morta da più
di 10 giorni, l'incantesimo forma un nuovo corpo adulto per
quell'umanoide e poi richiama la sua anima all'interno di
quel corpo. Se l'anima del bersaglio non è consenziente o
libera di tornare, l'incantesimo fallisce.
La magia produce un nuovo corpo in cui la creatura
possa vivere, cosa che probabilmente costringe la creatura
a cambiare razza. Il DM tira un dlOO e consulta la tabella
seguente per determinare quale forma assume la creatura
quando ritorna in vita; in alternativa, il DM pub scegliere la
forma.
dlOO Razza
01-04 Dragonide
05-13 Elfo alto
14-21 Elfo dei boschi
22-25 Elfo oscuro
26-29 Ci nomo delle foreste
30-35 Gnomo delle rocce
36-43 Halfling piedelesto
44-51 Halfling tozzo
52-55 Mezzelfo
56-59 Mezzorco
60-68 Nano delle colline
69-76 Nano delle montagne
77-80 Tiefling
81-00 Umano
La creatura reincarnata ricorda la sua vita e le sue
esperienze passate. Conserva le capacità che possedeva
nella sua forma originale, ad eccezione della razza
originale, che viene sostituita dalla nuova, e dei suoi tratti
razziali, che cambiano di conseguenza.

RESISTENZA
Trucchetto di Abiurazione
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un mantello in miniatura)
Durata: Concentrazione, 1 minuto
L'incantatore tocca una creatura consenziente. Per una
volta prima che l'incantesimo termini, il bersaglio può
tirare un d4 e aggiungere il risultato ottenuto a un tiro
salvezza a sua scelta. Può tirare il dado prima o dopo avere
effettuato il tiro salvezza. Dopodiché l'incantesimo termina.

RESPIRARE SOTT'ACQUA
Trasmutazione di 3 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un piccolo giunco o una paglia)
Durata: 24 ore
Questo incantesimo conferisce a un massimo di dieci
creature consenzienti entro gittata e che l'incantatore
sia in grado di vedere la capacità di respirare sott'acqua
finché l'incantesimo non termina. Le creature influenzate
conservano anche la loro normale modalità di respirazione.

RESURREZIONE
Necromanzia di 7 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (un diamante del valore di almeno 1.000 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore tocca una creatura morta da non più di un
secolo, che non sia morta di vecchiaia e che non sia un non
morto. Se la sua anima è libera e consenziente, essa torna in
vita con tutti i suoi punti ferita.
Questo incantesimo neutralizza ogni veleno e cura le
normali malattie che affliggevano la creatura al momento
della morte. Tuttavia non rimuove le malattie magiche,
le maledizioni e altre afflizioni analoghe se tali effetti
non vengono rimossi prima del lancio dell'incantesimo,
il bersaglio ne sarà afflitto quando tornerà in vita.
Questo incantesimo richiude tutte le ferite mortali e
ripristina le eventuali parti del corpo mancanti.
Il ritorno dalla morte è una vera e propria ordalia. Il
bersaglio subisce una penalità di -4 a tutti i tiri per colpire,
ai tiri salvezza e alle prove di caratteristica. Ogni volta che il
bersaglio completa un riposo lungo, la penalità viene ridotta
di 1 finché non sparisce del tutto.
Lanciare questo incantesimo per riportare in vita una
creatura morta da un anno o più risulta molto logorante per
l'incantatore. Finché non completa un riposo lungo, egli non
pub lanciare di nuovo incantesimi e subisce svantaggio a tutti
i tiri per colpire, alle prove di caratteristica e ai tiri salvezza.

RESURREZIONE PURA
Necromanzia di 9 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (uno spruzzo d'acqua santa e diamanti del valore di almeno 25.000 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore tocca una creatura morta da non più di
200 anni a causa di un qualsiasi effetto al di fuori detta
vecchiaia. Se la sua anima è libera e consenziente, essa
torna in vita con tutti i suoi punti ferita.
Questo incantesimo chiude tutte le ferite, neutralizza ogni
veleno, cura tutte le malattie e annulla ogni maledizione che
affliggeva il bersaglio al momento della morte. L'incantesimo
ripristina inoltre gli eventuali organi e arti danneggiati e
scomparsi. Se la creatura era un non morto, viene restituita
alla forma originaria che aveva in vita.
L'incantesimo può perfino fornire alla creatura un
nuovo corpo, se l'originale non esiste più, nel qual caso
l'incantatore deve pronunciare il nome della creatura.
La creatura appare in uno spazio libero a scelta
dell'incantatore e situato entro 3 metri da lui.

RIANIMARE MORTI
Necromanzia di 5 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (un diamante del valore di almeno 500 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore riporta in vita una creatura morta da lui
toccata, purché non sia morta da più di 10 giorni. Se
l'anima della creatura è consenziente ed è libera di riunirsi
al corpo, la creatura torna in vita con 1 punto ferita.
Questo incantesimo neutralizza inoltre qualsiasi veleno e
cura le malattie non magiche che influenzavano la creatura
al momento della morte. Tuttavia, questo incantesimo
non rimuove le malattie magiche, le maledizioni e le altre
afflizioni analoghe; se non vengono rimossi prima del
lancio dell'incantesimo, il bersaglio ne sarà afflitto quando
tornerà in vita. Questo incantesimo non può riportare in
vita una creatura non morta.
Questo incantesimo richiude tutte le ferite mortali, ma
non ripristina le parti del corpo mancanti. Se una creatura
è priva di parti del corpo o di organi essenziali per la sua
sopravvivenza (come per esempio la testa), l'incantesimo
fallisce automaticamente.
Il ritorno dalla morte è una vera e propria ordalia. Il
bersaglio subisce una penalità di -4 a tutti i tiri per colpire,
ai tiri salvezza e alle prove di caratteristica. Ogni volta che
il bersaglio completa un riposo lungo, la penalità viene
ridotta di 1 nonché non sparisce del tutto.

RIGENERAZIONE
Trasmutazione di 7 livello
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S, M (una ruota della preghiera e acqua santa)
Durata: 1 ora
L'incantatore tocca una creatura e amplifica le sue capacità
curative naturali. Il bersaglio recupera 4d8+15 punti ferita.
Per la durata dell'incantesimo, il bersaglio recupera 1 punto
ferita all'inizio di ogni suo turno (10 punti ferita a1 minuto).
Se al bersaglio sono state recise delle parti del corpo
(dita, gambe, coda e cosí via), quelle parti ricrescono
dopo 2 minuti. Se il bersaglio è in possesso della parte
recisa e la appoggia al troncone, l'incantesimo rinsalda
istantaneamente l'arto reciso al troncone.

RIMUOVI MALEDIZIONE
Abiurazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
Al tocco dell'incantatore, tutte le maledizioni che affliggono
una creatura o un oggetto terminano. Se l'oggetto è un
oggetto magico maledetto, la sua maledizione rimane, ma
l'incantesimo spezza la sintonia del suo proprietario con
quell'oggetto, consentendogli di rimuoverlo o di scartarlo.

RINASCITA
Necromanzia di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (diamanti del valore di 300 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore tocca una creatura morta entro l'ultimo
minuto. Quella creatura torna in vita con 1 punto ferita.
Questo incantesimo non pub riportare in vita una creatura
morta di vecchiaia e non può ripristinare le eventuali parti
del corpo mancanti.

RIPARARE
Trucchetto di Trasmutazione
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S, M (due calamite)
Durata: Istantanea
Questo incantesimo ripara una singola crepa o uno
squarcio in un oggetto toccato dall'incantatore, come
l'anello spezzato di una catena, due metà di una chiave
spezzata, un mantello strappato o un otre forato. Fintanto
che la crepa o lo squarcio non è più grande di 30 cm in ogni
dimensione, l'incantatore lo ripara senza lasciare traccia
del danno precedente.
Questo incantesimo può fisicamente riparare un oggetto
magico o un costrutto, ma non può ripristinare la magia in
un oggetto del genere.

RIPOSO INVIOLATO
Necromanzia di 2 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pizzico di sale e due monete di rame da collocare sugli occhi del cadavere, che devono rimanere in quella posizione per la durata dell'incantesimo)
Durata: 10 giorni
L'incantatore tocca un cadavere o dei resti di altro tipo.
Per la durata dell'incantesimo, il bersaglio è protetto dalla
decomposizione e non può diventare un non morto.
Inoltre, l'incantesimo estende a tutti gli effetti il limite
di tempo entro cui rianimare il bersaglio dalla morte, dal
momento che i giorni trascorsi sotto l'influenza di questo
incantesimo non contano al fine di determinare il limite di
tempo di incantesimi come rianimare morti.

RISATA INCONTENIBILE DI TASHA
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una manciata di briciole e una piuma da agitare in aria)
Durata: Concentrazione, 1 minuto
Una creatura a scelta dell'incantatore, situata entro gittata
e che egli sia in grado di vedere, percepisce ogni cosa come
esilarante ed è scossa da una spasmodica risata se questo
incantesimo la influenza. Il bersaglio deve superare un
tiro salvezza su Saggezza, altrimenti cade a terra prono,
diventa incapacitato e non è in grado di rialzarsi per la
durata dell'incantesimo. Una creatura con un punteggio
di Intelligenza pari o inferiore a 4 non è influenzata
da I l'incantesimo.
Alla fine di ogni suo turno e ogni volta che subisce
danni, il bersaglio può effettuare un altro tiro salvezza
su Saggezza. Il bersaglio dispone di vantaggio al tiro
salvezza se esso è innescato dai danni. In caso di successo,
l'incantesimo termina.

RISCALDARE IL METALLO
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un pezzo di ferro e una fiamma)
Durata: Concentrazione, 1 minuto
L'incantatore sceglie un oggetto artificiale di metallo
come un'arma di metallo o un'armatura di metallo
media o pesante, situato entro gittata e che egli sia in
grado di vedere, e fa in modo che quell'oggetto diventi
incandescente. Ogni creatura a contatto fisico con l'oggetto
subisce 2d8 danni da fuoco quando l'incantesimo viene
lanciato. Finché l'incantesimo non termina, l'incantatore
può usare un'azione bonus a ogni suo turno successivo per
infliggere di nuovo quei danni.
Se una creatura indossa a impugna l'oggetto e ne subisce
i danni, quella creatura deve superare un tiro salvezza su
Costituzione o lasciare cadere l'oggetto, se può farlo. Se
non lascia cadere l'oggetto, subisce svantaggio ai tiri per
colpire e alle prove di caratteristica fino all'inizio del turno
successivo dell'incantatore.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3 livello o
superiore, i danni aumentano di ld8 per ogni slot di livello
superiore al 2.

RISTORARE INFERIORE
Abiurazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
L'incantatore tocca una creatura e può porre termine a
una malattia o una condizione che lo affligge tra accecato,
assordato avvelenato o paralizzato.

RISTORARE SUPERIORE
Abiurazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (polvere di diamante del valore di almeno 100 mo, che l'incantesimo consuma)
Durata: Istantanea
L'incantatore infonde energia positiva in una creatura
toccata per disfare un effetto debilitante. L'incantatore può
ridurre di uno il livello di indebolimento del bersaglio o
terminare uno degli effetti seguenti su di esso:
• Un effetto che ha affascinato o pietrificato il bersaglio
• Una maledizione, inclusa la sintonia del bersaglio con un
oggetto magico maledetto
• Una qualsiasi riduzione di un punteggio di caratteristica
del bersaglio
• Un effetto che riduce il massimo dei punti ferita del
bersaglio

RISVEGLIO
Trasmutazione di 5 livello
Tempo di Lancio: 8 ore
Gittata: Contatto
Componenti: V, S, M (un'agata del valore di almeno 1.000mo, che l'incantesimo consuma)
Durata: Istantanea
Dopo avere trascorso il tempo di lancio a tracciare un
percorso magico su una pietra preziosa, l'incantatore tocca
una bestia o un vegetale di taglia Enorme o inferiore. Il
bersaglio deve essere privo di un punteggio di Intelligenza
o avere Intelligenza pari o inferiore a 3. Il bersaglio ottiene
Intelligenza pari a 10 e la capacità di parlare un linguaggio
noto all'incantatore. Se il bersaglio è un vegetale, ottiene la
capacità di muovere i suoi rami, radici, liane, rampicanti e
cos via e sviluppa sensi simili a quelli degli umani. li DM
sceglie le statistiche appropriate al vegetale risvegliato,
come per esempio nel caso di un cespuglio o di un albero
risvegliato.
La bestia o il vegetale risvegliato è affascinato
dall'incantatore per 30 giorni o finché l'incantatore o i suoi
compagni non ]o danneggiano in qualche modo. Quando la
condizione di affascinato termina, la creatura risvegliata
sceglie se rimanere amichevole o meno nei confronti
dell'incantatore, in base a come è stata trattata quando era
affascinata.

RITIRATA RAPIDA
Trasmutazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 10 minuti
Questo incantesimo consente all'incantatore di muoversi
a una velocità straordinaria. Quando lancia questo
incantesimo, e poi come azione bonus a ogni suo turno
finché l'incantesimo non termina, l'incantatore può
effettuare l'azione di Scatto.

SALTARE
Trasmutazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (la zampa posteriore di una cavalletta)
Durata: 1 minuto
L'incantatore tocca una creatura. La distanza coperta dai
salti di quella creatura è triplicata finché l'incantesimo non
termina.

SALVARE I MORENTI
Trucchetto di Necromanzia
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
L'incantatore tocca una creatura vivente a O punti ferita.
Quella creatura diventa stabile. Questo incantesimo non ha
effetto sui costrutti o sui non morti.

SANTIFICARE
Invocazione di 5 livello
Tempo di Lancio: 24 ore
Gittata: Contatto
Componenti: V, S, M (erbe, oli e incenso del valore di almeno 1.000 mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto
L'incantatore tocca un punto e infonde un flusso di potere
sacro (o sacrilego) in un'area del raggio massimo di 18 metri.
L'incantesimo fallisce se il raggio include già un'area sotto
l'effetto di un incantesimo santificare. L'area influenzata è
soggetta agli effetti seguenti.
Per prima cosa, celestiali, elementali, folletti, immondi
e non morti non possono entrare nell'area e non possono
affascinare, spaventare o possedere le creature all'interno
dell'area. Ogni creatura affascinata, spaventata o posseduta
da una creatura del genere non è più affascinata, spaventata
e posseduta una volta entrata nell'area. L'incantatore può
escludere uno o più tipi di creature da questo effetto.
Secondariamente, l'incantatore può vincolare un effetto
extra all'area, scegliendolo dalla lista sottostante o usando un
effetto offerto dal DM. Alcuni effetti si applicano alle creature
nell'area; l'incantatore può designare se si applica a tutte le
creature, alle creature che seguono un capo o una divinità
specifica o alle creature di un tipo specifico, come gli orchi
o i troll. Quando una creatura che sarebbe influenzata entra
nell'area dell'incantesimo per la prima volta in un turno o
vi inizia il proprio turno, può effettuare un tiro salvezza su
Carisma. Se lo supera, ignora l'effetto extra finché non esce
dall'area.
Coraggio. Le creature influenzate non possono essere
spaventate finché si trovano nell'area.
Eterno Riposo. I corpi senza vita sepolti nell'area non
possono essere trasformati in non morti.
Interferenza Extradimensionale. Le creature influenzate
non possono muoversi o viaggiare usando il teletrasporto o
mezzi extradimensionali o interplanari.
Linguaggi. Le creature influenzate possono comunicare
con qualsiasi altra creatura nell'area, anche se non
condividono un linguaggio comune.
Luce Diurna. L'area è pervasa di luce intensa. L'oscurità
magica creata dagli incantesimi di livello inferiore
rispetto allo slot usato dall'incantatore per lanciare questo
incantesimo non possono sopprimere la luce.
Oscurità. L'area si riempie di oscurità. La luce normale,
nonché la luce magica creata dagli incantesimi di livello
inferiore rispetto allo slot usato dall'incantatore per lanciare
questo incantesimo non possono illuminare l'area.
Paura. Le creature influenzate sono spaventate finché si
trovano nell'area.
Protezione dall'Energia. Le creature influenzate entro
l'area ottengono resistenza a un tipo di danno a scelta
dell'incantatore, ad eccezione dei danni contundenti,
perforanti o taglienti.
Silenzio. Nessun suono può provenire dall'interno dell'area
e nessun suono esterno può penetrare al suo interno.
Vulnerabilità sull'Energia. Le creature influenzate entro
l'area ottengono vulnerabilità a un tipo di danno a scelta
dell'incantatore, ad eccezione dei danni contundenti,
perforanti o taglienti.

SANTUARIO
Abiurazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: 9 metri
Componenti: V, S, M (uno specchietto d'argento)
Durata: 1 minuto
L'incantatore protegge una creatura situata entro gittata
dagli attacchi. Finché l'incantesimo non termina, ogni
creatura che bersaglia la creatura protetta con un attacco
o un incantesimo che infligge danni deve prima effettuare
un tiro salvezza su Saggezza. Se lo fallisce, deve scegliere
un nuovo bersaglio o perdere l'attacco. Questo incantesimo
non protegge la creatura bersaglio dagli effetti ad area
come l'esplosione di una palla di fuoco.
Se la creatura protetta effettua un attacco o lancia un
incantesimo che influenza una creatura nemica, questo
incantesimo termina.

SANTUARIO PRIVATO DI MORDENKAINEN
Abiurazione di 4 livello
Tempo di Lancio: 10 minuti
Gittata: 36 metri
Componenti: V, S, M (una sottile lamina di piombo, un pezzo di vetro opaco, un pezzo di cotone o di stoffa e un crisolito polverizzato)
Durata: 24 ore
L'incantatore rende un'area entro gittata magicamente
sicura. L'area in questione è un cubo le cui dimensioni
possono variare da uno spigolo minimo di 1,5 metri a uno
spigolo massimo di 30 metri. L'incantesimo permane per
tutta la sua durata o finché l'incantatore non usa un'azione
per interromperlo.
Quando lancia l'incantesimo, l'incantatore decide che
tipo di sicurezza esso fornisce, scegliendo una o più delle
proprietà seguenti:
• I suoni non possono oltrepassare la barriera ai confini
dell'area protetta.
• La barriera dell'area protetta appare oscura e nebulosa,
rendendo impossibile vedere oltre di essa (anche a chi è
dotato di scurovisione).
• I sensori creati dagli incantesimi di divinazione non
possono apparire all'interno dell'area protetta o
oltrepassare il perimetro della barriera.
• L e creature all'interno dell'area non possono essere
bersagliate dagli incantesimi di divinazione.
• Nulla può teletrasportarsi dentro o fuori dall'area protetta.
• Il viaggio planare è bloccato all'interno dell'area protetta.
Lanciando ogni giorno questo incantesimo nello stesso
punto per un anno si rende questo effetto permanente.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di s· livello o
superiore. può aumentare le dimensioni dello spigolo del
cubo di 30 metri per ogni slot incantesimo superiore al 4.
Quindi un incantatore può proteggere un cubo con spigolo
lungo fino a 60 metri usando uno slot incantesimo di 5
livello.

SCAGLIARE MALEDIZIONE
Necromanzia di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore tocca una creatura che deve superare un
tiro salvezza su Saggezza per non essere maledetta per la
durata dell'incantesimo. Quando l'incantatore lancia questo
incantesimo, sceglie la natura della maledizione tra le
opzioni seguenti:
• L'incantatore sceglie un punteggio di caratteristica.
Finché è maledetto, il bersaglio subisce svantaggio alle
prove di caratteristica e ai tiri salvezza effettuati con quel
punteggio di caratteristica.
• Finché è maledetto, il bersaglio subisce svantaggio ai tiri
per colpire contro l'incantatore.
• Finché è maledetto, il bersaglio deve effettuare un tiro
salvezza su Saggezza all'inizio di ogni suo turno. Se lo
fallisce, spreca la sua azione di quel turno e non ra niente.
• Finché il bersaglio è maledetto, gli attacchi e gli
incantesimi dell'incantatore infliggono ld8 danni
necrotici extra al bersaglio.
Un incantesimo rimuovi maledizione pone fine a questo
effetto. A discrezione del DM, l'incantatore può scegliere
un effetto alternativo per la maledizione, che però non
dovrebbe risultare più potente di quelli descritti sopra.
Il DM ha l'ultima parola su tali effetti della maledizione.
Ai Livelli Superiori. Se l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello
o superiore, la durata diventa concentrazione, fino a
10 minuti. Se usa uno slot incantesimo di s􀀴 livello
o superiore, la durata diventa 8 ore. Se usa uno slot
incantesimo di 7• livello o superiore, la durata è 24 ore.
Se usa uno slot incantesimo di 9 livello o superiore,
l'incantesimo dura finché non viene dissolto. L'uso di uno
slot incantesimo di 5 livello o superiore conferisce una
durata che non richiede concentrazione.

SCASSINARE
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: Istantanea
L'incantatore sceglie un oggetto entro gittata e che egli sia
in grado di vedere. Può trattarsi di una porta. uno scrigno,
un forziere, un paio di manette, un lucchetto o un altro
oggetto dotato di un mezzo normale o magico per impedire
l'accesso.
Un bersaglio tenuto chiuso da una serratura magica,
incastrato o sbarrato cessa di essere tale. Se l'oggetto
è protetto da più serrature, soltanto una di esse viene
sbloccata.
Se l'incantatore sceglie un bersaglio tenuto chiuso
da serratura arcana, quell'incantesimo è soppresso per
10 minuti, un periodo in cui può essere aperto e chiuso
normalmente.
Quando l'incantatore lancia l'incantesimo, l'oggetto
emette un forte rumore simile al bussare, udibile fino a una
distanza di 90 metri.

SCIAME DI METEORE
Invocazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 1,5 km
Componenti: V, S
Durata: Istantanea
Globi rocciosi infuocati precipitano a terra in quattro punti
diversi situati entro gittata e che l'incantatore sia in grado
di vedere. Ogni creatura situata entro una sfera del raggio
di 12 metri centrata su ogni punto scelto daU'incantatore
deve effettuare un tiro salvezza su Destrezza. La sfera
si diffonde oltre gli angoli. Se una creatura fallisce il
tiro salvezza, subisce 20d6 danni da fuoco e 20d6 danni
contundenti, mentre se lo supera, subisce soltanto la metà
di quei danni. Una creatura entro l'area di più esplosioni
infuocate ne subisce l'effetto una volta sola.
L'incantesimo infligge danni agli oggetti nell'area e
incendia gli oggetti infiammabili che non sono indossati o
trasportati.

SCOLPIRE PIETRA
Trasmutazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (argilla duttile, che deve essere plasmata nella forma dell'oggetto desiderato)
Durata: Istantanea
L'incantatore tocca un oggetto di pietra di taglia Media o
inferiore o una sezione di pietra che non deve essere più
gronde di 1,5 metri in ogni dimensione e lo modella nella
forma che desidera. Potrebbe per esempio modellare
una grossa roccia per realizzare un'arma, un idolo o un
forziere, o aprire un piccolo passaggio lungo una parete,
purché quella parete non sia spessa più di 1,5 metri.
Potrebbe anche modellare una porta di pietra o i suoi stipiti
per sigillare la porta. L'oggetto creato dall'incantatore può
avere un massimo di due cardini e un coperchio, ma non
può essere dotato di meccanismi più raffinati.

SCOPRI IL PERCORSO
Divinazione di 6 livello
Tempo di Lancio: 1 minuto
Gittata: Incantatore
Componenti: V, S, M (una serie di strumenti da divinazione, come ossa, bastoncini d'avorio, carte, denti o incisioni runiche, del valore di 100mo e un oggetto proveniente dal luogo che si desidera trovare)
Durata: Concentrazione, 1 giorno
Questo incantesimo consente all'incantatore di scoprire
il percorso fisico più breve e diretto verso un determinato
luogo fisso che gli sia familiare e che si trovi sul suo
stesso piano di esistenza. Se l'incantatore nomina
una destinazione su un altro piano di esistenza. una
destinazione che si muove (come per esempio una fortezza
mobile) o una destinazione troppo generica (come per
esempio la tana di un drago verde), l'incantesimo fallisce.
Per la durata dell'incantesimo, fintanto che l'incantatore
si trova sullo stesso piano di esistenza della destinazione,
egli sa quanto la destinazione è lontana e in che direzione si
trova. Mentre viaggia verso quella destinazione, ogni volta
che gli si presentano più sentieri tra cui scegliere lungo
il cammino, l'incantatore determina automaticamente il
sentiero più breve e più diretto (ma non necessariamente il
più sicuro) che lo porterà a destinazione.

SCOPRI TRAPPOLE
Divinazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Istantanea
L'incantatore percepisce la presenza di ogni trappola entro
gittata ed entro linea di vista. Ai fini di questo incantesimo,
per trappola si intende ogni cosa che infliggerebbe un
effetto improvviso o inaspettato considerato dannoso o
indesiderabile dall'incantatore e specificamente inteso
come tale dal suo creatore. Quindi questo incantesimo
sarebbe in grado di individuare un'area sotto l'effetto di un
incantesimo allarme, un glifo di interdizione o una fossa
ad apertura meccanica, ma non rivelerebbe un cedimento
naturale nel pavimento, un soffitto instabile o un buco
nascosto nel terreno.
Questo incantesimo rivela semplicemente che
una trappola è presente. L'incantatore non apprende
l'ubicazione di ogni trappola, ma solo la natura generale del
pericolo posto dalla trappola che percepisce.

SCRIGNO SEGRETO DI LEOMUND
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (uno scrigno di fattura pregiata che misura 90 x 60 x 60 cm, fatto di materiali rari del valore di almeno 5.000 mo, e una riproduzione Minuscola fatta degli stessi materiali e del valore di almeno 50 mo)
Durata: Istantanea
L'incantatore nasconde uno scrigno e tutti i suoi contenuti
sul Piano Etereo. Deve toccare lo scrigno e la riproduzione
in miniatura che funge da componente materiale
dell'incantesimo. Lo scrigno può contenere fino a 90 x 60 x
60 cm di materiale non vivente.
Finché lo scrigno rimane sul Piano Etereo, l'incantatore
può usare un'azione e toccare la riproduzione per
richiamare a sé lo scrigno, che appare a terra, in uno spazio
libero entro 1,5 metri dall'incantatore. L'incantatore può
rimandare lo scrigno sul Piano Etereo usando un'azione e
toccando sia Jo scrigno che la riproduzione.
Dopo 60 giorni si applica una probabilità cumulativa
del 5 per cento al giorno che l'effetto dell'incantesimo
termini. Questo effetto termina se l'incantatore lancia
questo incantesimo di nuovo, se la riproduzione più piccola
del forziere viene distrutta o se l'incantatore sceglie di
terminare l'incantesimo con un'azione. Se lo scrigno più
grande si trova sul Piano Etereo quando l'incantesimo
termina, è perduto irrimediabilmente.

SCRITTO ILLUSORIO
Illusione di 1 livello (rituale)
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: S, M (inchiostro a base di piombo del valore di almeno 10 mo, che l'incantesimo consuma)
Durata: 10 giorni
L'incantatore scrive qualcosa su carta, pergamena o un
altro materiale adatto alla scrittura e infonde in quello
scritto una potente illusione che permane per la durata
dell'incantesimo.
Agli occhi dell'incantatore e di ogni creatura da lui
designata al momento dcl lancio dell'incantesimo, lo scritto
appare normale, stilato con la calligrafia dell'incantatore
e trasmette il significato che l'incantatore intendeva
trasmettere quando ha scritto il testo. Agli occhi di tutti gli
altri, il messaggio appare come se fosse stato scritto in un
linguaggio magico o ignoto, impossibile da decifrare. In
alternativa, l'incantatore può fare in modo che il messaggio
appaia come qualcosa di completamente diverso, stilato
in una calligrafia e in un linguaggio diverso, che deve però
trattarsi di un linguaggio da lui conosciuto.
Se l'incantesimo viene dissolto, sia il messaggio
originale che l'illusione scompaiono.
Una creatura dotata di vista pura può leggere il
messaggio nascosto.

SCRUTARE
Divinazione di 5 livello
Tempo di Lancio: 10 minuti
Gittata: Incantatore
Componenti: V, S, M (un focus del valore di almeno 1.000mo, come una sfera di cristallo, uno specchio d'argento o un bacile pieno di acqua santa)
Durata: Concentrazione, 10 minuti
L'incantatore può vedere e udire una particolare creatura
a sua scelta situata sul suo stesso piano di esistenza. Il
bersaglio deve effettuare un tiro salvezza su Saggezza,
modificato dalla conoscenza e dal tipo di legame che
l'incantatore ha nei confronti del bersaglio. Se il bersaglio
sa che l'incantatore sta lanciando questo incantesimo, può
fallire il tiro salvezza volontariamente se desidera essere
osservato.
(Modificatore al tiro salvezza = MTS)
-- Conoscenza
- Informazioni indirette (solo sentito parlare del bersaglio) (MTS +5)
- Informazioni dirette (si è Incontrato il bersaglio) (MTS +0)
- Familiarità (si conosce bene il bersaglio) (MTS -5)
-- Legame
- Descrizione o immagine (MTS -2)
- Oggetto personale o abito (MTS -4)
- Parte del corpo, ciocca dl capelli, unghia tagliata ecc. (MTS -10)
In caso di tiro salvezza superato, il bersaglio non è
influenzato e l'incantatore non può più usare questo
incantesimo contro di lui per 24 ore.
In caso di tiro salvezza fallito, l'incantesimo crea un
sensore invisibile entro 3 metri dal bersaglio. L'incantatore
può vedere e sentire attraverso il sensore come se
si trovasse sul posto. Il sensore si muove assieme al
bersaglio, rimanendo entro 3 metri da esso per la durata
dell'incantesimo. Una creatura in grado di vedere gli
oggetti invisibili vede il sensore come un globo luminoso
delle dimensioni approssimative di un pugno umano.
Anziché bersagliare una creatura, l'incantatore può
scegliere un luogo che abbia già visto in precedenza come
bersaglio di questo incantesimo. Quando lo fa, il sensore
appare in quel luogo e non si muove.

SCUDO
Abiurazione di 1 livello
Tempo di Lancio: 1 reazione, che l'incantatore effettua quando è colpito da un attacco o bersagliato dall'incantesimo dardo incantato
Gittata: Incantatore
Componenti: V, S
Durata: 1 round
Una barriera di forza magica invisibile si materializza t?
protegge l'incantatore. Fino all'inizio del proprio turno
successivo, l'incantatore ottiene un bonus di +5 alla CA da
applicare anche all'attacco innescante e non subisce danni
da dardo incantato.

SCUDO DELLA FEDE
Abiurazione di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: 18 metri
Componenti: V, S, M (una piccola pergamena su cui sia stato scritto un frammento di un testo sacro)
Durata: Concentrazione, 10 minuti
Un campo di energia scintillante si materializza attorno
a una creatura scelta dall'incantatore entro gittata,
conferendole un bonus di +2 alla CA per la durata
dell'incantesimo.

SCUDO DI FUOCO
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un frammento di zolfo o una lucciola)
Durata: 10 minuti
Per la durata dell'incantesimo il corpo dell'incantatore
è avvolto da un sottile alone di fiamme spettrali che
proiettano luce intensa entro un raggio di 3 metri e
luce fioca per altri 3 metri. L'incantatore può terminare
l'incantesimo prematuramente usando un'azione.
Le fiamme conferiscono all'incantatore uno scudo
ardente o uno scudo gelido, a sua scelta. L o scudo ardente
gli conferisce resistenza ai danni da freddo mentre lo scudo
gelido gli conferisce resistenza ai danni da fuoco.
Inoltre, ogni volta che una creatura entro 1,5 metri
dall'incantatore lo colpisce con un attacco in mischia, dallo
scudo si sprigiona una fiammata. L'attaccante subisce 2d8
danni da fuoco nel caso di uno scudo ardente o 2d8 danni
da freddo nel caso di uno scudo gelido.

SCUROVISIONE
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un pizzico di carota essiccata o un'agata)
Durata: 8 ore
L'incantatore tocca una creatura consenziente per
conferirle la capacità di vedere nell'oscurità. Per la durata
dell'incantesimo, quella creatura è dotata di scurovisione
fino a 18 metri.

SEGUGIO FEDELE DI MORDENKAINEN
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (un fischietto d'argento, un pezzo d'osso e un filo)
Durata: 8 ore
L'incantatore evoca un cane da guardia fantasma in
uno spazio libero entro gittata e che egli sia in grado di
vedere. Il segugio rimarrà in quel punto per la durata
dell'incantesimo, finché l'incantatore non lo congeda con
un'azione o finché non si allontana a più di 30 metri dal
segugio.
Il segugio è invisibile a tutte le creature tranne
l'incantatore e non può essere danneggiato. Quando una
creatura di taglia Piccola o superiore giunge entro 9 metri
da esso senza pronunciare la parola d'ordine specificata
dall'incantatore al momento del lancio dell'incantesimo,
il segugio inizia a latrare a piena voce. Il segugio vede le
creature invisibili, può vedere il Piano Etereo e ignora le
illusioni.
All'inizio di ogni turno dell'incantatore, il segugio tenta
di mordere una creatura situata entro 1,5 metri da lui e che
sia ostile all'incantatore. Il bonus di attacco del segugio
è pari al modificatore di caratteristica da incantatore + il
bonus di competenza dell'incantatore. Se colpisce, infligge
4d8 danni perforanti.

SEMBRARE
Illusione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S
Durata: 8 ore
Questo incantesimo consente all'incantatore di alterare
l'aspetto di un qualsiasi numero di creature entro gittata e
che egli sia in grado di vedere, impartendo a ognuna di esse
un nuovo aspetto illusorio. Un bersaglio non consenziente
può effettuare un tiro salvezza su Carisma. Se lo supera,
non è influenzato da questo incantesimo.
Questo incantesimo camuffa l'aspetto fisico oltre
agli abiti, l'armatura, le armi e l'equipaggiamento. Ogni
creatura può apparire 30 cm più alta o più bassa e apparire
magra, grassa, o di corporatura normale. Non è possibile
cambiare il tipo di corpo, quindi ogni creatura deve
adottare una forma che usi la stessa disposizione basilare
degli arti. Entro questi limiti, la natura dell'illusione
dipende dall'incantatore.
I cambiamenti apportati da questo incantesimo non
passano il vaglio di un'ispezione fisica. Per esempio, se
l'incantatore usa questo incantesimo per aggiungere un
cappello sulla testa di una creatura, gli oggetti passerebbero
attraverso il cappello e chiunque tocchi la creatura non
sentirebbe nulla o toccherebbe la sua testa e i capelli. Se
l'incantatore usa questo incantesimo per fare apparire la
creatura più magra rispetto alla realtà, quando qualcuno
protende la mano per toccarla, urta la creatura quando la
sua mano è apparentemente ancora a mezz'aria.
Una creatura pub usare la sua azione per ispezionare un
bersaglio ed effettuare una prova di Intelligenza (Indagare)
contro la CD dcl tiro salvezza dell'incantesimo. Se ha
successo, capisce che il bersaglio è camuffato.

SEMIPIANO
Evocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: S
Durata: 1 ora
L'incantatore crea una porta d'ombra su una superficie
solida e piatta, situata entro gittata e che egli sia in grado
di vedere. La porta è abbastanza grande da consentire alle
creature Medie di attraversarla senza difficoltà. Quando è
aperta, la porta conduce a un semipiano che appare come
una stanza vuota fatta di legno o di pietra che misura 9
metri in ogni dimensione. Quando l'incantesimo termina, la
porta scompare e ogni creatura o oggetto che si trovavano
all'interno del semipiano vi rimangono intrappolati, in
quanto la porta scompare anche sul lato o opposto.
Ogni volta che l'incantatore lancia questo incantesimo,
pub creare un nuovo semipiano o fare in modo che la
porta d'ombra si colleghi a un semipiano da lui creato
con un precedente lancio di questo incantesimo. Inoltre,
se l'incantatore conosce la natura e i contenuti di un
semipiano creato dal lancio di questo incantesimo da parte
di un'altra creatura, può fare in modo che la porta d'ombra
si colleghi invece a quel semipiano.

SERRATURA ARCANA
Abiurazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M ( polvere d'oro del valore di almeno 25mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto
L'incantatore tocca una porta, una finestra, un portale, un
forziere o un altro punto di accesso chiuso. che diventa
chiuso a chiave. L'incantatore e le creature da lui designate
al momento del lancio dell'incantesimo possono aprire
l'oggetto normalmente. L'incantatore pub anche stabilire
una parola d'ordine che, una volta pronunciata entro 1,5
metri dall'oggetto, sopprime l'incantesimo per 1 minuto.
Altrimenti l'oggetto è impenetrabile finché non viene rotto
o finché l'incantesimo non viene dissolto o soppresso.
Lanciare scassinare sull'oggetto sopprime la serratura
arcana per 10 minuti.
Finché è influenzato da questo incantesimo, l'oggetto è
più difficile da rompere o da aprire a viva forza; la CD per
romperlo o per scassinare le eventuali serrature presenti
aumenta di 10.

SERVITORE INOSSERVATO
Evocazione di 1 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un filo di spago e un pezzo di legno)
Durata: 1 ora
Questo incantesimo crea una forza invisibile, amorfa e
priva di volontà propria che svolge i compiti più semplici su
ordine dell'incantatore finché l'incantesimo non termina.
Il servitore si materializza sul terreno, in uno spazio libero
entro gittata. Possiede CA 10, 1 punto ferita, una Forza
pari a 2 e non può attaccare. Se scende a O punti ferita,
l'incantesimo termina.
Una volta in ogni suo turno, come azione bonus,
l'incantatore può ordinare mentalmente al servitore di
muoversi fino a 4,5 metri e di interagire con un oggetto.
Il servitore può effettuare compiti semplici come portare
oggetti, pulire, riparare, ripiegare abiti, accendere fuochi,
servire pietanze, versare vino e cos via. Una volta
impartito l'ordine, il servitore svolge il compito al meglio
delle sue capacità finché non lo porta a termine, poi attende
il comando successivo dell'incantatore.
Se l'incantatore ordina al servitore di svolgere un
compito che lo porterebbe a più di 18 metri da lui,
l'incantesimo termina.

SFERA CONGELANTE DI OTILUKE
Invocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V, S, M (una piccola sfera di cristallo)
Durata: Istantanea
Un globo ghiacciato carico di energia fredda parte dalla punta
delle dita dell'incantatore e sfreccia verso un punto a sua scelta
situato entro gittata, dove esplode in una sfera del raggio di 18
metri. Ogni creatura entro l'area deve effettuare un tiro salvezza
su Costituzione. Se lo fallisce, subisce 10d6 danni da freddo,
mentre se lo supera, subisce soltanto la metà di quei danni.
Se il globo colpisce una massa d'acqua o un liquido
composto principalmente d'acqua (questo non include le
creature basate sull'acqua), congela quel liquido fino a una
profondità di 15 cm su un'area quadrata con lato di 9 metri.
Questo strato di ghiaccio dura 1 minuto. Le creature che
stavano nuotando sulla superficie dell'acqua gelata sono
intrappolate nel ghiaccio. Una creatura pub usare un'azione
per effettuare una prova di Forza contro la CD del tiro salvezza
dell'incantesimo per liberarsi.
L'incantatore pub trattenersi dallo scagliare il globo quando
completa l'incantesimo, se lo desidera. Un piccolo globo grande
all'incirca quanto una pietra da fionda e freddo al tatto compare
nella sua mano. In qualsiasi momento, l'incantatore o una
creatura a cui egli porga il globo può lanciarlo (entro una gittata
di 12 metri) o scagliarlo con una fionda (entro la normale gittata
della fionda). li globo si frantuma all'impatto, con lo stesso
effetto del normale lancio dell'incantesimo. L'incantatore può
anche poggiare il globo a terra senza frantumarlo. Dopo 1
minuto, se il globo non è già stato frantumato, esplode.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
superiore al 6.

SFERA ELASTICA DI OTILUKE
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una semisfera di cristallo trasparente e una semisfera corrispondente di resina)
Durata: Concentrazione, 1 minuto
Una sfera di forza scintillante racchiude una creatura o
un oggetto di taglia Grande o inferiore entro gittata. Una
creatura non consenziente deve effettuare un tiro salvezza
su Destrezza. Se lo fallisce, è rinchiusa nella sfera per la
durata dell'incantesimo.
Nulla può attraversare la barriera in entrata e in uscita
(oggetti fisici, energia, o altri effetti magici), ma una
creatura all'interno della sfera può respirare liberamente.
La sfera è immune a tutti i danni e una creatura o un
oggetto all'interno non può essere danneggiato dagli
attacchi o dagli effetti che hanno origine all'esterno;
analogamente, una creatura all'interno della sfera non può
danneggiare nulla all'esterno.
La sfera non ha peso ed è grande quanto basta da
contenere la creatura o l'oggetto al suo interno. Una
creatura rinchiusa può usare la sua azione per spingere
la sfera dall'interno e farla rotolare a metà della propria
velocità. Analogamente, la sfera può essere sollevata e
mossa dalle altre creature.
Un incantesimo disintegrazione che bersaglia la sfera la
distrugge senza danneggiare ciò che essa contiene.

SFERA INFUOCATA
Evocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un frammento di sego, un pizzico di zolfo e una manciata di polvere di ferro)
Durata: Concentrazione, 1 minuto
Una sfera di fuoco del diametro di 1,5 metri appare in uno
spazio libero a scelta dell'incantatore, situato entro gittata,
dove permane per la durata dell'incantesimo. Ogni creatura
che termina il suo turno entro 1,5 metri dalla sfera deve
effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 2d6 danni da fuoco, mentre se lo supera, subisce
soltanto la metà di quei danni.
Con un'azione bonus, l'incantatore può muovere la sfera
di un massimo di 9 metri. Se urta una creatura con la sfera,
quella creatura deve effettuare il tiro salvezza contro i
danni della sfera e la sfera non può muoversi ulteriormente
per quel turno.
Quando l'incantatore muove la sfera, può dirigerla oltre le
barriere alte fino a 1,5 metri e farla saltare oltre le fosse
larg he fino a 3 metri. La sfera incendia gli oggetti infiammabili
che non sono indossati e trasportati e proietta luce intensa
entro un raggio di 6 metri e luce fioca per altri 6 metri.
Al UveJIJ Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3􀃉 livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
superiore al 2.

SFOCATURA
Illusione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V
Durata: Concentrazione, 1 minuto
Il corpo dell'incantatore diventa sfocato, instabile e
ondeggiante agli occhi di tutti coloro che sono in grado di
vederlo. Per la durata dell'incantesimo, tutte le creature
subiscono svantaggio ai tiri per colpire contro di lui. Un
attaccante è immune a questo effetto se non si affida alla
vista, per esempio se è dotato di vista cieca o se è in grado di
vedere attraverso le illusioni, per esempio tramite vista pura.

SGUARDO PENETRANTE
Necromanzia di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 1 minuto
Per la durata dell'incantesimo, gli occhi dell'incantatore
diventano neri, vacui e pervasi da una sinistra energia.
Una creatura a sua scelta entro 18 metri da lui e che egli
sia in grado di vedere deve superare un tiro salvezza
su Saggezza, altrimenti è influenzata da uno degli
effetti seguenti a scelta dell'incantatore per la durata
dell'incantesimo. In ogni suo turno, finché l'incantesimo
non termina, l'incantatore può usare la sua azione per
bersagliare un'altra creatura, ma non può bersagliare di
nuovo una creatura che abbia superato un tiro salvezza
contro questo lancio di sguardo penetrante.
Addormentato. Il bersaglio cade privo di sensi. Si
sveglia se subisce danni o se un'altra creatura usa la sua
azione per risvegliarlo scuotendolo.
In Preda al Panico. Il bersaglio è spaventato
dall'incantatore. In ogni suo turno, la creatura spaventata
deve effettuare l'azione di Scatto e muoversi per
allontanarsi dall'incantatore lungo il percorso più breve e
più sicuro possibile, a meno che non ci sia alcun luogo dove
andare. Se il bersaglio si muove fino a un luogo ]ontano
almeno 18 metri dall'incantatore in cui non è più in grado
di vederlo, questo effetto termina.
Nauseato. Il bersaglio subisce svantaggio ai tiri per
colpire e alle prove di caratteristica. Alla fine di ogni suo
turno, può effettuare un altro tiro salvezza su Saggezza. Se
lo supera, l'effetto termino.

SILENZIO
Illusione di 2 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore genera una sfera del raggio di 6 metri centrata
su un punto a sua scelta situato entro gittata. Per la durata
dell'incantesimo, nessun suono pub essere creato all'interno
di quella sfera o attraversarla. Ogni creatura o oggetto
interamente all'interno della sfera è immune ai danni da
tuono e ogni creatura interamente all'interno della sfera è
assordata. All'interno dell'area è impossibile lanciare un
incantesimo che includa una componente verbale.

SIMBOLO
Abiurazione di 7 livello
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S, M (mercurio, fosforo e polvere di opale e diamante per un valore totale di almeno 1.000 mo, che l'incantesimo consuma)
Durata: Finché non viene dissolto o innescato
Quando l'incantatore lancia questo incantesimo, traccia un
glifo nocivo su una superficie (come un tavolo, una sezione
di pavimento o una parete) o all'interno di un oggetto
che pub essere chiuso nascondendo il glifo (come un
libro, una pergamena o un forziere del tesoro). Se sceglie
una superficie, il glifo pub coprire un'area massima del
diametro di 3 metri. Se sceglie un oggetto, quell'oggetto
deve rimanere al suo posto; se l'oggetto viene spostato per
più di 3 metri dal punto in cui l'incantatore ha lanciato
questo incantesimo, il glifo si infrange e l'incantesimo
termina senza essere innescato.
Il glifo è pressoché invisibile: per trovarlo è necessario
superare una prova di Intelligenza (Indagare) contro la CD
del tiro salvezza dell'incantesimo.
L'incantatore decide cosa innesca il glifo quando
lancia l'incantesimo. Nel caso dei glifi tracciati su una
superficie, gli inneschi più comuni includono toccare
il glifo, camminare sul glifo, rimuovere un oggetto che
copre il glifo, giungere entro una certa distanza dal glifo
o manipolare l'oggetto su cui il glifo è stato tracciato. Nel
caso di un glifo tracciato su un oggetto, gli inneschi più
comuni includono aprire quell'oggetto, giungere entro una
certa distanza dall'oggetto, vedere o leggere il glifo.
L'incantatore può affinare ulteriormente l'innesco in
modo che l'incantesimo si attivi solo in certe circostanze
o in base a certe caratteristiche fisiche (come per esempio
l'altezza o il peso), il tipo delJa creatura (per esempio,
l'interdizione potrebbe essere regolata per influenzare le
megere o i mutaforma). L'incantatore può anche stabilire
le condizioni per quelle creature che non innescano il glifo,
come per esempio quelle che pronunceranno una certa
parola d'ordine.
Quando l'incantatore traccia il glifo, sceglie il suo effetto
tra una delle opzioni sottostanti. Una volta innescato, il
glifo risplende e proietta luce fioca in una sfera del raggio
di 18 metri per 10 minuti, dopodiché l'incantesimo termina.
Ogni creatura entro la sfera quando il glifo si attiva è
bersagliata da questo effetto, come anche una creatura che
entra nella sfera per la prima volta in un turno o vi termina
il proprio turno.
Discordia. Ogni bersaglio deve effettuare un tiro
salvezza su Costituzione. Se lo fallisce, il bersaglio si mette
a discutere e a litigare con le altre creature per 1 minuto.
In questo periodo non è in grado di comunicare in modo
sensato e subisce svantaggio ai tiri per colpire e alle prove
di caratteristica.
Disperazione. Ogni bersaglio deve effettuare un tiro
salvezza su Carisma. Se lo fallisce, è sopraffallo dalla
disperazione per 1 minuto. Durante questo periodo, il
bersaglio non può attaccare o bersagliare nessuna creatura
con capacità, incantesimi o altri effetti magici.
Dolore. Ogni bersaglio deve effettuare un tiro salvezza
su Costituzione. Se lo fallisce, è soggetto a un dolore
lancinante e diventa incapacitato per 1 minuto.
Morte. Ogni bersaglio deve effettuare un tiro salvezza su
Costituzione. Se lo fallisce, subisce lOdlO danni necrotici,
mentre se lo supera, subisce solo la metà di quei danni.
Paura. Ogni bersaglio deve effettuare un tiro salvezza su
Saggezza. Se lo fallisce, diventa spaventato per 1 minuto.
Finché è spaventato, il bersaglio lascia cadere ciò che
impugnava e deve muoversi di almeno 9 metri ogni turno
allontanandosi dal glifo, se possibile.
Pazzia. Ogni bersaglio deve effettuare un tiro salvezza
su Intelligenza. Se lo fallisce, il bersaglio impazzisce
per 1 minuto. Una creatura impazzita non può effettuare
azioni, non capisce ciò che le altre creature dicono, non può
leggere e dice solo cose senza senso quando parla. Il DM
controlla i suoi movimenti, che sono imprevedibili.
Sonno. Ogni bersaglio deve effettuare un tiro salvezza su
Saggezza. Se lo fallisce, cade privo di sensi per 10 minuti.
Una creatura si sveglia se subisce danni o se qualcuno usa
un'azione per risvegliarla, scuotendola o schiaffeggiandola.
Stordimento. Ogni bersaglio deve effettuare un tiro
salvezza su Saggezza. Se lo fallisce, diventa stordito per 1
minuto.

SIMULACRO
Illusione di 7 livello
Tempo di Lancio: 12 ore
Gittata: Contatto
Componenti: V, S, M (neve o ghiaccio sufficienti a effettuare una copia a grandezza naturale della creatura da duplicare; una ciocca di capelli, un'unghia tagliata o un altro pezzo del corpo della creatura da collocare in mezzo al ghiaccio o alla neve, polvere di rubino del valore di 1.500 mo da spruzzare sul duplicato, che l'incantesimo consuma)
Durata: Finché non viene dissolto
L'incantatore realizza un duplicato illusorio di una bestia
o di un umanoide che deve rimanere entro gittata per
tutto il lancio dell'incantesimo. Il duplicato è una creatura
parzialmente reale fatta di ghiaccio o di neve che può
effettuare azioni ed essere influenzata come una creatura
normale. Ha lo stesso aspetto dell'originale, ma possiede la
metà del suo massimo dei punti ferita e viene formata priva
di equipaggiamento. Sotto ogni altro aspetto, l'illusione usa
tutte le statistiche della creatura che duplica.
Il simulacro è amichevole nei confronti dell'incantatore
e delle creature da lui designate. Obbedisce ai comandi
vocali dell'incantatore, si muove e agisce in ottemperanza
ai suoi desideri e in combattimento agisce nel turno
dell'incantatore. Il simulacro non è in grado di apprendere
o di diventare più potente, quindi non aumenta mai di
livello, le sue caratteristiche non aumentano e non può
recuperare gli slot incantesimo spesi.
Se il simulacro subisce danni, l'incantatore può ripararlo
in un laboratorio alchemico usando minerali ed erbe rare del
valore di 100 mo per ogni punto ferita che esso recupera. Il
simulacro permane finché non scende a O punti ferita, nel qual
caso si ritrasforma in neve e si scioglie istantaneamente.
Se l'incantatore lancia di nuovo questo incantesimo,
il duplicato attualmente attivo da lui creato viene
istantaneamente distrutto.

SOGNO
Illusione di 5 livello
Tempo di Lancio: 1 minuto
Gittata: Speciale
Componenti: V, S, M (una manciata di sabbia, una goccia d'inchiostro o una penna strappata da un uccello che dorme)
Durata: 8 ore
Questo incantesimo modella i sogni di una creatura.
L'incantatore sceglie una creatura che conosce come
bersaglio. La creatura bersaglio deve trovarsi sullo stesso
piano di esistenza dell'incantatore. Le creature che non
dormono, come gli elfi, non possono essere contattate
da questo incantesimo. L'incantatore, o una creatura
consenziente da lui toccata, entra in uno stato di trance e
funge da messaggero. Finché è in trance, il messaggero
percepisce l'ambiente circostante ma non è in grado di
intraprendere azioni o di muoversi.
Se il bersaglio è addormentato, il messaggero appare
nei suoi sogni e può conversare con lui fintanto che esso
continua a dormire, per tutta la durata dell'incantesimo.
Il messaggero può anche modellare l'ambiente del sogno,
creando paesaggi, oggetti e altre immagini. Il messaggero
può emergere dalla trance in ogni momento terminando
l'effetto dell'incantesimo prematuramente. Il bersaglio
ricorda il sogno alla perfezione quando si risveglia.
Se il bersaglio è sveglio quando l'incantatore lancia
l'incantesimo, il messaggero lo apprende e può scegliere se
porre fine alla trance (e all'incantesimo} o aspettare che si
addormenti, nel qual caso il messaggero appare nei sogni
del bersaglio.
L'incantatore può fare in modo che il messaggero appaia
mostruoso e terrificante agli occhi del bersaglio. Se lo
fa, il messaggero può trasmettere un messaggio di un
massimo di dieci parole; il bersaglio deve quindi effettuare
un tiro salvezza su Saggezza. Se lo fallisce, l'eco di
un'allucinazione mostruosa genera un incubo che permane
per la durata del sonno del bersaglio e gli impedisce di
trarre qualsiasi beneficio da quel riposo. Inoltre, quando il
bersaglio si sveglia, subisce 3d6 danni psichici.
Se l'incantatore possiede una parte del corpo, una ciocca
di capelli, un'unghia tagliata o una parte analoga del corpo
del bersaglio, il bersaglio subisce svantaggio al suo tiro
salvezza.

SONNO
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un pizzico di sabbia finissima, petali di rosa o un grillo)
Durata: 1 minuto
Questo incantesimo fa in modo che le creature siano
vittime di un sonno magico. L'incantatore tira SdB; il totale
ottenuto è l'ammontare di creature in punti ferita che
questo incantesimo può influenzare. Le creature entro 6
metri da un punto a scelta dell'incantatore situato entro
gittata sono influenzate in ordine crescente dei loro punti
ferita attuali (ignorando le creature prive di sensi).
A partire dalla creatura che possiede meno punti ferita
attuali, ogni creatura influenzata da questo incantesimo
cade priva di sensi finché l'incantesimo non termina, il
dormiente non subisce danni o qualcuno non usa un'azione
per scuotere o schiaffeggiare il dormiente per svegliarlo. Si
sottraggono i punti ferita di ogni creatura dal totale prima
di passare alla creatura con l'ammontare immediatamente
superiore di punti ferita. I punti ferita di una creatura
devono essere pari o inferiori al totale rimanente affinché
quella creatura possa essere influenzata.
Le creature non morte e quelle immuni all'essere
affascinate non sono influenzate da questo incantesimo.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 211 livello
o superiore, tira 2d8 aggiuntivi per ogni slot di livello
superiore al 1.

SORTILEGIO
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione bonus
Gittata: 27 metri
Componenti: V, S, M (l'occhio pietrificato di un girino)
Durata: Concentrazione, 1 ora
L'incantatore scaglia una maledizione su una creatura
entro gittata e che egli sia in grado di vedere. Finché
l'incantesimo non termina, l'incantatore infligge ld6 danni
necrotici extra al bersaglio ogni volta che lo colpisce con un
attacco. Inoltre, quando l'incantatore lancia l'incantesimo,
sceglie una caratteristica. Il bersaglio subisce svantaggio
alle prove di caratteristica effettuate con la caratteristica
scelta.
Se il bersaglio scende a O punti ferita prima che questo
incantesimo termini, l'incantatore può usare un'azione
bonus in un suo turno successivo per maledire una nuova
creatura.
Un incantesimo rimuovi maledizione lanciato sul
bersaglio termina questo incantesimo prematuramente.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 3a o 4 livello.
può mantenere la concentrazione sull'incantesimo fino a
un massimo di 8 ore. Quando usa uno slot incantesimo
di 5 livello o superiore, può mantenere la concentrazione
sull'incantesimo fino a un massimo di 24 ore.

SPADA DI MORDENKAINEN
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una spada di platino in miniatura dall'impugnatura e dal pomolo di rame e di zinco, del valore di 250 mo)
Durata: Concentrazione, 1 minuto
L'incantatore crea un piano di forza a forma di spada
che fluttua entro gittata e permane per la durata
dell'incantesimo.
Quando la spada appare, l'incantatore effettua un
attacco in mischia con questo incantesimo contro un
bersaglio a sua scelta situato entro 1,5 metri dalla spada.
Se colpisce, il bersaglio subisce 3d10 danni da forza.
Finché l'incantesimo non termina, l'incantatore può usare
un'azione bonus a ogni suo turno per muovere la spada
di un massimo di 6 metri fino a un punto che egli sia in
grado di vedere e ripetere questo attacco contro lo stesso
bersaglio o un bersaglio diverso.

SPOSTAMENTO PLANARE
Evocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (una verga biforcuta di metallo del valore di almeno 250 mo, in sintonia con un particolare piano di esistenza)
Durata: Istantanea
L'incantatore e un massimo di otto creature consenzienti
che si tengono per mano formando un cerchio vengono
trasportati su un piano di esistenza diverso. L'incantatore
può specificare una destinazione bersaglio in termini
generici, come la Città d'Ottone sul Piano Elementale del
Fuoco o il palazzo di Dispater sul secondo livello dei Nove
Inferi. e apparirà in quella destinazione o nelle immediate
vicinanze. Se cerca di raggiungere la Città d'Ottone, per
esempio, potrebbe arrivare nella Via dell'Acciaio. davanti
alla Porta delle Ceneri, o nei pressi della città in mezzo al
Mare di Fuoco, a discrezione del DM.
In alternativa, se l'incantatore conosce la sequenza di
simboli di un cerchio di teletrasporto su un altro piano
di esistenza, questo incantesimo può portarlo fino a quel
cerchio. Se il cerchio di teletrasporto è troppo piccolo per
contenere tutte le creature trasportate dall'incantatore,
esse appariranno negli spazi liberi più vicini al cerchio.
L'incantatore può usare questo incantesimo per esiliare
una creatura non consenziente su un altro piano. Sceglie
una creatura entro la sua portata ed effettua un attacco
in mischia con questo incantesimo contro di essa. Se
colpisce, la creatura deve effettuare un tiro salvezza su
Carisma. Se lo fallisce. viene trasportata in un luogo
casuale sul piano di esistenza specificato dall'incantatore.
Una creatura trasportata in questo modo dovrà trovare
da sola il modo di tornare sul piano di esistenza attuale
dell'incantatore.

SPRUZZO COLORATO
Illusione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cono di 4,5 metri)
Componenti: V, S, M (un pizzico di sabbia o di polvere colorata di rosso, giallo e blu)
Durata: 1 round
Dalla mano dell'incantatore si sprigiona un lampo
abbagliante di luce multicolore. L'incantatore tira 6dl0:
il totale indica l'ammontare di creature in punti ferita che
questo incantesimo può influenzare. L e creature situate
entro un cono di 4,5 metri che ha origine dall'incantatore
sono influenzate in ordine crescente basato sui loro punti
ferita attuali (ignorando le creature prive di sensi e quelle
che non sono in grado di vedere).
A partire dalla creatura che possiede meno punti ferita
attuali, ogni creatura influenzata da questo incantesimo è
accecata finché l'incantesimo non termina. Si sottraggono i
punti ferita di ogni creatura dal totale prima di passare alla
creatura con l'ammontare immediatamente superiore di
punti ferita. I punti ferita di una creatura devono essere pari
o inferiori al totale rimanente affinché quella creatura possa
essere influenzata.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2· livello
o superiore, tira 2d10 aggiuntivi per ogni slot di livello
superiore al 1.

SPRUZZO PRISMATICO
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (cono di 18 metri)
Componenti: V, S
Durata: Istantanea
Otto raggi di luce multicolore si sprigionano dalla mano
dell'incantatore. Ogni raggio è di un colore diverso e ha un
potere e una funzione diversa. Ogni creatura situata entro
un cono di 18 metri deve effettuare un tiro salvezza su
Destrezza. Per ogni bersaglio si tira un d8 per determinare
da quale raggio colorato viene influenzato.
1. Rosso. Il bersaglio subisce 10d6 danni da fuoco se
fallisce il tiro salvezza, ma soltanto la metà di quei danni se
lo supera.
2. Arancione. Il bersaglio subisce 10d6 danni da acido
se fallisce il tiro salvezza, ma soltanto la metà di quei danni
se lo supera.
3. Giallo. Il bersaglio subisce 10d6 danni da fulmine se
fallisce il tiro salvezza. ma soltanto la metà di quei danni se
lo supera.
4. Verde. Il bersaglio subisce 10d6 danni da veleno se
fallisce il tiro salvezza, ma soltanto la metà di quei danni se
lo supera.
S. Blu. Il bersaglio subisce 10d6 danni da freddo se
fallisce il tiro salvezza, ma soltanto la metà di quei danni se
lo supera.
6. Indaco. In caso di tiro salvezza fallito, il bersaglio è
trattenuto. Deve effettuare un tiro salvezza su Costituzione
alla fine di ogni suo turno. Se supera il tiro salvezza tre
volte, l'incantesimo termina. Se lo fallisce tre volte, si
trasforma in pietra permanentemente ed è soggetto alla
condizione di pietrificato. Non è necessario che i successi
e i fallimenti siano consecutivi; si tiene conto di entrambi
finché il bersaglio non ne accumula tre di un tipo.
7. Viola. In caso di tiro salvezza fallito. il bersaglio
è accecato. Deve quindi effettuare un tiro salvezza su
Saggezza all'inizio del turno successivo dell'incantatore.
Se lo supera, non è più accecato, mentre se lo fallisce, viene
trasportato su un altro piano di esistenza a scelta del DM, e
non è più accecato. (Solitamente, una creatura che si trova
su un piano diverso dal suo piano di origine viene esiliata
sul suo piano di origine, mentre le altre creature solitamente
vengono inviate sul Piano Astrale o sul Piano Etereo.)
8. Speciale. li bersaglio è colpito da due raggi. Si tira
altre due volte, ignorando i risultati di 8.

SPRUZZO VELENOSO
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V, S
Durata: Istantanea
L'incantatore allunga la mano verso una creatura entro
gittata e che egli sia in grado di vedere e proietta uno sbuffo
di gas velenoso dal suo palmo. La creatura deve superare
un tiro salvezza su Costituzione, altrimenti subisce ld12
danni da veleno.
I danni di questo incantesimo aumentano di 1d12 quando
l'incantatore arriva al 5 livello (2d12), 11 livello (3dl2) e
17 livello (4d12).

STRETTA FOLGORANTE
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: Istantanea
Un fulmine si sprigiona dalla mano dell'incantatore per
trasmettere una scarica folgorante a una creatura da lui
toccata. I.:incantatore effettua un attacco in mischia con
questo incantesimo contro il bersaglio. Se il bersaglio indossa
un'armatura fatta di metallo, l'incantatore dispone di vantaggio.
Se colpisce, il bersaglio subisce ldB danni da fulmine e non
può effettuare reazioni fino all'inizio del suo turno successivo.
I danni di questo incantesimo aumentano di 1d8 quando
l'incantatore arriva al 5 livello (2d8), 11 livello (3d8) e 17 livello
(4d8).

SUGGESTIONE
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, M (una lingua di serpente e un frammento di un alveare o una goccia di olio dolce)
Durata: Concentrazione, 8 ore
L'incantatore suggerisce un corso d'azione da intraprendere
(limitandosi a una o due frasi) e influenza magicamente
una creatura entro gittata e che egli sia in grado di vedere.
La creatura deve essere in grado di sentire l'incantatore e
di capirlo. Le creature che non possono essere affascinate
sono immuni a questo effetto. La suggestione deve essere
formulata in modo che il corso d'azione appaia ragionevole.
Chiedere a una creatura di pugnalarsi, gettarsi su una
lancia, immolarsi o compiere altri atti palesemente
autolesionistici pone termine all'incantesimo.
Il bersaglio deve effettuare un tiro salvezza su Saggezza.
Se lo fallisce, deve perseguire il corso d'azione descritto
dall'incantatore al meglio delle sue capacità. Tale corso
d'azione può proseguire per l'intera durata dell'incantesimo.
Se l'attività suggerita può essere completata in un periodo
di tempo più breve, l'incantesimo termina quando il soggetto
completa ciò che gli è stato chiesto di fare.
L'incantatore può anche specificare quali condizioni
innescheranno un'attività speciale nel corso della durata.
Per esempio, potrebbe suggerire che un cavaliere ceda il
suo cavallo da guerra al primo mendicante che incontra.
Se questa condizione non viene soddisfatta prima che
l'incantesimo termini, quell'attività non viene effettuata.
Se l'incantatore o uno dei suoi compagni infliggono danni
al bersaglio, l'incantesimo termina.

SUGGESTIONE DI MASSA
Ammaliamento di 6 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, M (una lingua di serpente e un frammento di un alveare o una goccia di olio dolce)
Durata: 24 ore
L'incantatore suggerisce un corso d'azione da intraprendere
(limitandosi a una o due frasi) e influenza magicamente fino
a dodici creature a sua scelta entro gittata e che egli sia in
grado di vedere. Le creature devono essere in grado di sentire
l'incantatore e di capirlo. Le creature che non possono essere
affascinate sono immuni a questo effetto. La suggestione
deve essere formulata in modo che il corso d'azione appaia
ragionevole. Chiedere a una creatura di pugnalarsi, gettarsi
su una lancia, immolarsi o compiere altri atti palesemente
autolesionistici nega automaticamente l'effetto dell'incantesimo.
Ogni bersaglio deve effettuare un tiro salvezza su Saggezza.
Se lo fallisce, deve perseguire il corso d'azione descritto
dall'incantatore al meglio delle sue capacità. Tale corso d'azione
può proseguire per l'intera durata dell'incantesimo. Se l'attività
suggerita può essere completata in un periodo di tempo più
breve, l'incantesimo termina quando il soggetto completa ciò
che gli è stato chiesto di fare.
L'incantatore può anche specificare quali condizioni
innescheranno un'attività speciale nel corso della durata. Per
esempio, potrebbe suggerire che un gruppo di soldati ceda
tutto il suo denaro al primo mendicante che incontra. Se questa
condizione non viene soddisfatta prima che l'incantesimo
termini, quell'attività non viene effettuata.
Se l'incantatore o uno dei suoi compagni infligge danni a
una creatura influenzata da questo incantesimo, l'incantesimo
termina per quella creatura.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello, la durata
è pari a 10 giorni. Quando usa uno slot incantesimo di 8 livello,
la durata è pari a 30 giorni. Quando usa uno slot incantesimo di
9 livello, la durata è pari a un anno e un giorno.

SUSSURRI DISSONANTI
Ammaliamento di 1 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: Istantanea
L'incantatore sussurra una melodia dissonante che
soltanto una creatura a sua scelta e situata entro gittata
è in grado di udire; quella creatura sarà scossa da un
dolore lancinante. Il bersaglio deve effettuare un tiro
salvezza su Saggezza. Se lo fallisce, subisce 3d6 danni
psichici e. se disponibile, deve usare immediatamente la
sua reazione per muoversi fin dove la sua velocità glielo
consente, allontanandosi dall'incantatore. La creatura
non si muove su terreno palesemente pericoloso come un
incendio o una fossa. Se invece supera il tiro salvezza, il
bersaglio subisce soltanto la metà di quei danni e non deve
muoversi per allontanarsi. Una creatura assordata supera
automaticamente il tiro salvezza.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2• livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
:superiore al 1.

TAUMATURGIA
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V
Durata: 1 minuto
L'incantatore genera una meraviglia minore, una
manifestazione di potere soprannaturale. Può creare uno
degli effetti magici seguenti entro gittata:
• La sua voce rimbomba con potenza tre volte superiore
rispetto al normale per 1 minuto.
• L'incantatore fa in modo che una fiamma tremi, si
intensifichi, si affievolisca o cambi colore per 1 minuto.
• L'incantatore genera un tremito innocuo sul terreno per
1 minuto.
• L'incantatore crea un suono istantaneo che abbia origine
da un punto entro gittata a sua scelta, come un rombo di
tuono, il verso di un corvo o un sinistro sussurro.
• L'incantatore fa in modo che una porta o una finestra non
chiusa a chiave si spalanchi o si chiuda di colpo da sola.
• L'incantatore altera l'aspetto dei suoi occhi per 1 minuto.
Se l'incantatore lancia questo incantesimo più volte,
può mantenere attivi fino a tre dei suoi effetti da 1 minuto
simultaneamente e può congedare uno di quegli effetti con
un'azione.

TELECINESI
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: Concentrazione, 10 minuti
L'incantatore ottiene la capacità di spostare o manipolare
le creature o gli oggetti con la forza del pensiero. Quando
lancia l'incantesimo e come sua azione ogni round per
la durata dell'incantesimo può proiettare la sua volontà
su una creatura o un oggetto situato entro gittata e che
egli sia in grado di vedere, causando l'effetto appropriato
sottostante. L'incantatore può influenzare lo stesso
bersaglio round dopo round, oppure sceglierne uno nuovo
in qualsiasi momento. Se cambia bersaglio, il bersaglio
precedente non è più influenzato dall'incantesimo.
Creatura. !:incantatore può tentare di muovere una
creatura di taglia Enorme o inferiore, effettuando una
prova di caratteristica con la propria caratteristica da
incantatore contrapposta alla prova di Forza della creatura.
Se vince la contesa, muove la creatura di un massimo di 9
metri in qualsiasi direzione, anche verticalmente, ma non
oltre la gittata dell'incantesimo. Fino alla fine del turno
successivo dell'incantatore, la creatura è trattenuta dalla
morsa telecinetica. Una creatura sollevata verticalmente
rimane sospesa a mezz'aria.
Nei round successivi, l'incantatore può usare la sua
azione per tentare di mantenere la sua morsa telecinetica
sulla creatura ripetendo la contesa.
0Aletto. L'incantatore può tentare di muovere un oggetto
del peso massimo di 500 kg. Se l'oggetto non è indossato o
trasportato, l'incantatore può muoverlo automaticamente di
un massimo di 9 metri in qualsiasi direzione, ma non oltre
la gittata di questo incantesimo.
Se l'oggetto è indossato o trasportato da una creatura,
l'incantatore deve effettuare una prova di caratteristica
con la sua caratteristica da incantatore contrapposta a
una prova di Forza di quella creatura. Se vince la contesa,
strappa l'oggetto a quella creatura e può muoverlo di un
massimo di 9 metri in qualsiasi direzione, ma non oltre la
gittata di questo incantesimo.
L'incantatore può esercitare un controllo più preciso,
come manipolare un semplice strumento, aprire una porta
o un contenitore, riporre o prelevare un oggetto da un
contenitore aperto o versare i contenuti di una fiala.

TELEPATIA
Invocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: Illimitata
Componenti: V, S, M (un paio di anelli d'argento concatenati)
Durata: 24 ore
L'incantatore crea un legame telepatico tra se stesso e una
creatura consenziente che gli è fa miliare. La creatura può
trovarsi in qualsiasi punto dello stesso piano di esistenza
dell'incantatore. L'incantesimo termina se l'incantatore o il
bersaglio non si trovano più sullo stesso piano.
Finchè l'incantesimo non termina, l'incantatore e il bersaglio
possono condividere istantaneamente parole, immagini,
suoni e altri messaggi sensoriali attraverso il legame e il
bersaglio riconosce l'incantatore come la creatura con cui
sta comunicando. L'incantesimo consente a una creatura con
un punteggio di Intelligenza pari o superiore a 1 di capire
il significato delle parole dell'incantatore e di assimilare il
significato dei me.�saggi sensoriali che egli le invia.

TELETRASPORTO
Evocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V
Durata: Istantanea
Questo incantesimo trasporta immediatamente
l'incantatore e un massimo di otto creature consenzienti
a sua scelta, situate entro gittata e che egli sia in grado di
vedere, oppure un singolo oggetto entro gittata e che egli
sia in grado di vedere. in una destinazione a sua scelta. Se
bersaglia un oggetto, quell'oggetto deve essere interamente
contenuto in un cubo con spigolo di 3 metri e non può
essere impugnato o trasportato da una creatura non
consenziente.
La destinazione scelta deve essere nota all'incantatore
e deve trovarsi sul suo stesso piano di esistenza. La
familiarità dell'incantatore nei confronti della destinazione
determina se l'incantatore riesce a raggiungerla. Il DM tira
un d lOO e consulta la tabella.
Familiarità:
Errore(E) AreaSimile(AS) FuoriBersaglio(FB) SulBersaglio(SB)
- Cerchio permanente 01-100(SB)
- Oggetto associato 01-100(SB)
- Molto familiare 01-05(E) 06-13(AS) 14-24(FB) 25-100(SB)
- Visto per caso 01-33(E) 34-43(AS) 44-53(FB) 54-100(SB)
- Visto una volta 01-43(E) 44-53(AS) 54-73(FB) 74-100(SB)
- Descrizione 01-43(E) 44-53(AS) 54-73(FB) 74-100(SB)
- Falsa destinazione 01-50(E) 51-100(AS)
Familiarità. "Cerchio permanente" indica un cerchio di teletrasporto
permanente di cui l'incantatore conosce la sequenza di
simboli. "Oggetto associato" significa che l'incantatore è in possesso di un oggetto prelevato dalla destinazione desiderata da
non più di sei mesi, come un libro dalla biblioteca di un mago,
lenzuola da un alloggio reale o un (rammento di marmo della
tomba segreta di un lich.
"Molto familiare" è un luogo che l'incantatore ha visitato
molto spesso, un luogo che ha studiato attentamente o un luogo
che è in grado di vedere quando lancia l'incantesimo. "Visto
per caso" è un luogo che l'incantatore ha visto più di una volta
ma non gli è troppo familiare. "Visto una volta" è un luogo che
l'incantatore ha visto una volta, probabilmente usando la magia.
"Descrizione" è un luogo la cui ubicazione e apparenza sono
noti all'incantatore grazie alla descrizione di qualcun altro, o
forse grazie a una mappa.
"Falsa destinazione" è un luogo che non esiste. Forse
l'incantatore ha cercato di scrutare il rifugio segreto di un
nemico ma ha visto invece un'illusione, oppure tenta di
teletrasportarsi in un luogo familiare che non esiste più.
Sul bersaglio. L'incantatore e il suo gruppo (o l'oggetto
bersaglio) compaiono dove l'incantatore desidera.
Fuori bersaglio. L'incantatore e il suo gruppo (o l'oggetto
bersaglio) compaiono a una distanza casuale dalla destinazione
in una direzione casuale. La distanza fuori bersaglio è pari
a ldlO x ldlO per cento della distanza da percorrere. Per
esempio, se un incantatore tenta di viaggiare di 180 km,
arriva fuori bersaglio e ottiene un 5 e un 3 al tiro dei due dlO.
arriva fuori bersaglio deJ 15 per cento, vale a dire 27 km. Il
DM determina la direzione fuori bersaglio tirando un d8,
dove l' l corrisponde al nord, il 2 al nordest, il 3 all'est e cosí
via a indicare tutti i punti cardinali. Se l'incantatore voleva
teletrasportarsi fino a una città costiera e finisce 27 km al largo
della costa, è nei guai.
Area Simile. L'incantatore e il suo gruppo (o l'oggetto
bersaglio) arrivano in un'area diversa che è visivamente o
tematicamente simile all'area bersaglio. Per esempio, se
è diretto al suo laboratorio personale, potrebbe finire nel
laboratorio di un altro mago o in un negozio di sostanze
alchemiche che contiene molti strumenti e materiali simili a
quelli del suo laboratorio. In genere appare nel luogo simile
più vicino, ma dal momento che l'incantesimo non ha limiti di
gittata, in teoria potrebbe finire in un qualsiasi punto del piano.
Enore. La magia imprevedibile dell'incantesimo rende
il viaggio più difficile. Ogni creatura che si teletrasporta (o
l'oggetto bersaglio) subisce 3dl0 danni da forza e il DM ripete
il tiro sulla tabella per determinare dove arriverà {potrebbe
verificarsi più di un errore, nel qual caso i danni vengono
applicati ogni volta).

TEMPESTA DI FUOCO
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S
Durata: Istantanea
Una tempesta composta da una cortina di fiamme
rombanti compare in un luogo situato entro gittata a scelta
dell'incantatore. L'area della tempesta è composta da dieci
cubi con spigolo di 3 metri che l'incantatore può disporre
come desidera. Ogni cubo deve avere almeno un lato
adiacente al lato di un altro cubo. Ogni creatura entro l'area
deve effettuare un tiro salvezza su Destrezza. Se lo fallisce,
subisce 7d10 danni da fuoco, mentre se lo supera, subisce
soltanto la metà di quel danni.
Il fuoco infligge danni agli oggetti nell'area e incendia gli
oggetti infiammabili che non sono indossati o trasportati.
Se l'incantatore lo desidera, le forme di vita vegetali
nell'area non saranno influenzate da questo incantesimo.

TEMPESTA DI GHIACCIO
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V, S, M (un pizzico di polvere e alcune gocce d'acqua)
Durata: Istantanea
Chicchi di grandine duri quanto pietre piovono sul terreno
all'interno di un cilindro del raggio di 6 metri e alto 12
metri centrato su un punto entro gittata. Ogni creatura
entro il cilindro deve effettuare un tiro salvezza su
Destrezza. Se lo fallisce, subisce 2d8 danni contundenti e
4d6 danni da freddo, mentre se lo supera. subisce soltanto
la metà di quei danni.
La grandine trasforma l'area di effetto della tempesta
in terreno difficile fino alla fine del turno successivo
dell'incantatore.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di s• livello o
superiore, i danni contundenti aumentano di ld8 per ogni
slot di livello superiore al 4.

TEMPESTA DI NEVISCHIO
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (un pizzico di polvere e alcune gocce d'acqua)
Durata: Concentrazione, 1 minuto
Finché l'incantesimo non termina, una gelida pioggia di
nevischio cade in un cilindro del raggio di 12 metri e alto
6 metri, centrato su un punto a scelta dell'incantatore e
situato entro gittata. L'area è pesantemente oscurata e le
fiamme scoperte vengono estinte.
Il terreno entro l'area è coperto di ghiaccio scivoloso
e diventa terreno difficile. Quando una creatura entra
nell'area dell'incantesimo per la prima volta in un turno o
vi inizia il proprio turno, deve effettuare un tiro salvezza su
Destrezza. Se lo fallisce, cade a terra prona.
Se una creatura cerca di concentrarsi nell'area
dell'incantesimo, deve superare un tiro salvezza su
Costituzione contro la CD del tiro salvezza dell'incantesimo
lanciato dall'incantatore, altrimenti perderà la
concentrazione.

TEMPESTA DI VENDETTA
Evocazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: Vista
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore genera una minacciosa nube tempestosa,
che si espande fino a un raggio di 108 metri centrato su
un punto che egli sia in grado di vedere. L'area è scossa
da tuoni, fulmini e venti forti. Ogni creatura situata
sotto la nube (a non più di 1.500 metri sotto di essa) nel
momento in cui compare deve effettuare un tiro salvezza su
Costituzione. Se lo fallisce, subisce 2d6 danni da tuono e
diventa assordata per 5 minuti.
Ogni round in cui l'incantatore mantiene la
concentrazione su questo incantesimo, la tempesta produce
ulteriori effetti nel suo turno.
Round 2. Dalla nube cade una pioggia acida. Ogni
creatura e oggetto sotto di essa subisce ld6 danni da acido.
Round 3. L'incantatore invoca sei fulmini che scendono
daila nube e colpiscono sei creature o oggetti a sua scelta
situati sotto la nube. Una determinata creatura o oggetto
non può essere colpita da più di un fulmine. Una creatura
colpita deve effettuare un tiro salvezza su Destrezza. Se
lo fallisce, subisce 10d6 danni da fulmine, mentre se lo
supera, subisce soltanto la metà di quei danni.
Round 4. Dalla nube cade una violenta grandinata. Ogni
creatura sotto la nube subisce 2d6 danni contundenti.
Round 5-10. L'area sotto la nube è attraversata da
raffiche di vento e pioggia gelida. L'area diventa terreno
difficile e pesantemente oscurato e ogni creatura al suo
interno subisce ld6 danni da freddo. Gli attacchi con le
armi a distanza all'interno dell'area sono impossibili. Il
vento e la pioggia contano come gravi distrazioni al fine
di mantenere la concentrazione sugli incantesimi. Infine,
raffiche di vento forte {variabili da 30 a 75 km all'ora)
disperdono automaticamente nebbia, foschia e fenomeni
simili nell'area, comuni o magici che siano.

TENTACOLI NERI DI EVARD
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un frammento di tentacolo appartenuto a una piovra o a una seppia gigante)
Durata: Concentrazione, 1 minuto
Una massa di tentacoli brulicanti di color ebano riempiono
un quadrato con lato di 6 metri situato sul terreno, entro
gittata e che l'incantatore sia in grado di vedere. Per la
durata dell'incantesimo, quei tentacoli trasformano il
terreno di quest'area in terreno difficile.
Quando una creatura entra nell'area influenzata per la
prima volta in un turno o vi inizia iJ proprio turno, deve
superare un tiro salvezza su Destrezza, altrimenti subisce
3d6 danni contundenti ed è trattenuta dai tentacoli finché
l'incantesimo non termina. Una creatura che inizia il suo
turno nell'area ed è già trattenuta dai tentacoli subisce 3d6
danni contundenti.
Una creatura trattenuta dai tentacoli può usare
la sua azione per effettuare una prova di Forza o di
Destrezza {a sua scelta) contro la CD del tiro salvezza
dell'incantesimo. In caso di successo, si libera.

TERREMOTO
Invocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 150 metri
Componenti: V, S, M (un pizzico di terriccio, un frammento di pietra e un pezzo d'argilla)
Durata: Concentrazione, 1 minuto
L'incantatore crea una scossa sismica in un punto del
terreno situato entro gittata e che egli sia in grado di
vedere. Per la durata dell'incantesimo, un intenso tremito
scuote il terreno entro un raggio di 30 metri centrato
su quel punto, coinvolgendo le creature e le strutture a
contatto con il terreno in quell'area.
Il terreno nell'area diventa terreno difficile. Ogni
creatura sul terreno che si stia concentrando deve superare
un tiro salvezza su Costituzione. Se lo fallisce, la sua
concentrazione è interrotta.
Quando l'incantatore lancia questo incantesimo e alla fine
di ogni turno da lui trascorso a concentrarsi su di esso, ogni
creatura sul terreno nell'area interessata deve effettuare un
tiro salvezza su Destrezza. Se lo fallisce, cade a terra prona.
Questo incantesimo può avere degli effetti aggiuntivi in base
al terreno dell'area, come determinato dal DM.
Crepe. In tutta l'area dell'incantesimo si aprono
delle crepe a partire dall'inizio del turno successivo
dell'incantatore a quello in cui l'incantesimo è stato lanciato.
Un totale di ld6 crepe di questo tipo si apre nei punti scelti
dal DM. Ognuna è profonda 1d10 x 3 metri, larga 3 metri
e si estende da un bordo dell'area dell'incantesimo fino
al bordo opposto. Se una creatura si trova in un punto in
cui si apre una crepa, quella creatura deve superare un
tiro salvezza su Destrezza, altrimenti vi cade dentro. Se la
creatura supera il tiro salvezza, riesce a spostarsi assieme
al bordo della crepa quando questa viene a crearsi.
Una crepa che si apre sotto una struttura fa crollare
automaticamente quella struttura (vedi sotto).
Strutture. La scossa sismica infligge 50 danni
contundenti a qualsiasi struttura a contatto con il terreno
nell'area in cui è stato lanciato l'incantesimo e all'inizio
di ogni turno dell'incantatore finché l'incantesimo non
termina. Se una struttura scende a O punti ferita, essa
crolla e potrebbe infliggere danni alle creature vicine.
Una creatura situata entro una distanza pari a metà
dell'altezza della struttura deve effettuare un tiro salvezza
su Destrezza. Se lo fallisce, subisce Sd6 danni contundenti,
cade a terra prona ed è seppellita dai detriti. Per liberarsi
deve usare un'azione per effettuare una prova di Forza
{Atletica) con CD 20. Il DM può aumentare o ridurre la
CD, in base alla natura dei detriti. In caso di tiro salvezza
superato, la creatura subisce soltanto la metà di quei danni,
non cade a terra prona e non viene seppellita.

TERRENO ILLUSORIO
Illusione di 4 livello
Tempo di Lancio: 10 minuti
Gittata: 90 metri
Componenti: V, S, M (una pietra, un rametto e alcuni frammenti di un vegetale fresco)
Durata: 24 ore
L'incantatore fa in modo che un terreno naturale contenuto
in un cubo con spigolo di 45 metri appaia, suoni e odori
come un altro tipo di terreno naturale. Un campo aperto
o una strada potrebbe quindi sembrare una palude, una
collina, un crepaccio o un qualche altro tipo di terreno
difficile o invalicabile. Uno stagno potrebbe apparire come
un prato erboso, un precipizio come un dolce pendio e un
fosso erto di rocce come una strada ampia e accogliente.
L e strutture artificiali, l'equipaggiamento e le creature
entro l'area non cambiano aspetto.
Le caratteristiche tattili del terreno non cambiano,
quindi le creature che entrano nell'area hanno buone
probabilità di capire che si tratta di un'illusione. Se la
differenza non risulta evidente al tatto, una creatura che
esamini attentamente l'illusione pub effettuare una prova
di Intelligenza {Indagare) contro la CD del tiro salvezza
deU'incantesimo per dubitare. Una creatura che riconosce
l'illusione per ciò che è, la vede come immagine indistinta
sovrapposta al vero terreno.

TOCCO DEL VAMPIRO
Necromanzia di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 1 minuto
Il tocco della mano dell'incantatore, avviluppata in una
cortina d'ombra, può risucchiare l'energia vitale delle altre
creature per curare le proprie ferite. L'incantatore effettua
un attacco in mischia con questo incantesimo contro una
creatura entro portata. Se colpisce, il bersaglio subisce 3d6
danni necrotici e l'incantatore recupera un ammontare di
punti ferita pari alla metà dei danni necrotici inflitti. Finché
l'incantesimo non termina, l'incantatore può effettuare
l'attacco di nuovo a ogni suo turno con un'azione.
Al Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, i danni aumentano di ld6 per ogni slot di livello
superiore al 3.

TOCCO GELIDO
Trucchetto di Necromanzia
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S
Durata: 1 round
L'incantatore crea una mano scheletrica e spettrale nello
spazio di una creatura entro gittata, effettuando un attacco
a distanza con questo incantesimo contro quella creatura
per colpirla con un flusso di gelo sepolcrale. Se viene
colpito, il bersaglio subisce ld8 danni necrotici e non può
recuperare punti ferita fino all'inizio del turno successivo
dell'incantatore. Fino ad allora, la mano si avvinghia al
bersaglio.
Se l'incantatore colpisce un bersaglio non morto, quel
bersaglio subisce anche svantaggio ai suoi tiri per colpire
contro l'incantatore fino alla fine del turno successivo di
quest'ultimo.
I danni di questo incantesimo aumentano di ldS quando
l'incantatore arriva al 5 livello (2d8), 11 livello (3d8) e 17 livello (4d8).

TRAMA IPNOTICA
Illusione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: S, M (un bastoncino d'incenso acceso o una fiala di cristallo riempita di materiale fosforescente)
Durata: Concentrazione, 1 minuto
L'incantatore crea un complicato intreccio di colori che
si :snoda nell'aria all'interno di un cubo con spigolo di
9 metri entro gittata. La trama appare soltanto per un
istante, poi svanisce. Ogni creatura entro l'area che veda la
trama deve effettuare un tiro salvezza su Saggezza. Se lo
fallisce, diventa affascinata per la durata dell'incantesimo.
Finché è affascinata da questo incantesimo, la creatura è
incapacitata e la sua velocità è pari a O.
L'incantesimo su una creatura influenzata termina
se la creatura subisce dei danni o se qualcun altro usa
un'azione per scuotere la creatura, destandola dal suo stato
confusionale.

TRASFORMAZIONE
Trasmutazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un diadema di giada del valore di almeno 1.500 mo, che l'incantatore deve indossare prima di lanciare l'incantesimo)
Durata: Concentrazione, 1 ora
L'incantatore assume la forma di una creatura diversa
per la durata dell'incantesimo. La nuova forma può essere
quella di qualsiasi creatura con un grado di sfida pari o
inferiore al livello dell'incantatore. La creatura non può
essere un costrutto o un non morto e deve essere un
tipo di creatura che l'incantatore abbia visto almeno una
volta. L'incantatore si trasforma in un normale esemplare
di quella creatura, privo di livelli di classe e del tratto "Incantesimi".
Le statistiche di gioco vengono sostituite dalle statistiche
della creatura scelta, ma l'incantatore conserva il suo
allineamento e i suoi punteggi di intelligenza, Saggezza
e Carisma. Conserva inoltre tutte le sue competenze
nelle abilità e nei tiri salvezza, oltre a ottenere quelle
della creatura. Se la creatura possiede una competenza
che anche l'incantatore possiede e il bonus elencato
nelle sue statistiche è superiore a quello dell'incantatore,
quest'ultimo usa il bonus della creatura al posto del
proprio. L'incantatore non può usare nessuna azione
leggendaria o di tana nella nuova forma.
L'incantatore assume i punti ferita e i Dadi Vita della
nuova forma, e quando riassume la sua forma normale,
ritorna al numero di punti ferita che possedeva prima di
essere trasformato. Se riassume la sua forma normale
per essere sceso a O punti ferita, ogni eventuale danno in
eccesso si trasferisce alla sua forma normale. Fintanto
che i danni in eccesso non portano la forma normale
dell'incantatore a O punti ferita, l'incantatore non cade privo di sensi.
L'incantatore conserva il beneficio degli eventuali
privilegi fornitigli dalla sua classe, razza o altre fonti, e
può usarli, purché la sua nuova forma glielo consenta
fisicamente. Non può usare alcun senso speciale che
possieda (come per esempio la scurovisione), a meno che
la sua nuova forma non lo possieda a sua volta. Può parlare
solo se la creatura è normalmente in grado di parlare.
Quando l'incantatore si trasforma, sceglie se
lasciare cadere a terra il suo equipaggiamento, se tale
equipaggiamento si fonde nella sua nuova forma o se
indossarlo. L'equipaggiamento indossato funziona
normalmente, ma spetta al DM decidere se è pratico o
meno che la nuova forma indossi ogni determinato oggetto
di equipaggiamento, in base alla forma e alla taglia della
creatura. L'equipaggiamento dell'incantatore non cambia
taglia o forma per adattarsi alla nuova forma, e ogni
oggetto di equipaggiamento che la nuova forma non può
indossare deve cadere a terra o fondersi nella nuova forma
dell'incantatore. L'equipaggiamento fuso alla nuova forma
non ha alcun effetto in quello stato.
Per la durata dell'incantesimo, l'incantatore può usare
la sua azione per assumere una forma diversa seguendo le
stesse regole e restrizioni relative alla forma originale, con
una eccezione: se la nuova forma possiede più punti ferita
rispetto ai punti ferita attuali dell'incantatore, i punti ferita
di quest'ultimo rimangono al suo valore attuale.

TRASLAZIONE ARBOREA
Evocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S
Durata: Concentrazione, 1 minuto
L'incantatore ottiene la capacità di entrare in un albero e
di muoversi dall'interno di quell'albero a un altro albero
dello stesso tipo situato entro 150 metri. Entrambi gli
alberi devono essere vivi e di taglia pari o superiore
a quella dell'incantatore. L'incantatore deve usare 1,5
metri di movimento per entrare in un albero. Apprende
istantaneamente l'ubicazione di tutti gli altri alberi dello
stesso tipo entro 150 metri e, come parte del movimento
usato per entrare al suo interno, pub scegliere se passare
in uno di quegli alberi o emergere dall'albero in cui si trova.
L'incantatore ricompare in un punto a sua scelta entro 1,5
metri dall'albero di destinazione usando ulteriori 1,5 metri
di movimento. Se non gli rimane più alcun movimento,
ricompare entro 1,5 metri dall'albero in cui è entrato.
L'incantatore pub usare questa capacità di trasporto
una volta per round per la durata dell'incantesimo. Deve
concludere ogni suo turno fuori da un albero.

TRASPORTO VEGETALE
Evocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V, S
Durata: 1 round
Questo incantesimo crea un legame magico tra un vegetale
inanimato di taglia Grande o superiore situato entro gittata
e un altro vegetale, situato a qualsiasi distanza sullo stesso
piano di esistenza. L'incantatore deve avere visto o toccato·
il vegetale di destinazione almeno una volta in precedenza.
Per la durata dell'incantesimo, qualsiasi creatura può
entrare nel vegetale bersaglio e uscire da quello di
destinazione usando 1,5 metri di movimento.

TROVA CAVALCATURA
Evocazione di 2 livello
Tempo di Lancio: 10 minuti
Gittata: 9 metri
Componenti: V, S
Durata: Istantanea
L'incantatore evoca uno spirito che assume la forma di
una cavalcatura insolitamente forte, intelligente e fedele,
stringendo con lei un legame duraturo. La cavalcatura
appare in uno spazio libero entro gittata e assume una
forma a scelta dell'incantatore tra un cavallo da guerra, un
pony, un cammello, un alce o un mastino. (Il DM potrebbe
consentire di evocare altri animali come cavalcature.) La
cavalcatura usa le statistiche della forma scelta, anche se
si tratta di un celestiale. un folletto o un immondo (a scelta
dell'incantatore) anziché di un tipo normale. Inoltre, se la
cavalcatura ha un'Intelligenza pari o inferiore a 5, la sua
Intelligenza diventa 6 e ottiene la capacità di capire un
linguaggio a scelta dell'incantatore e che l'incantatore sia in
grado di parlare.
La cavalcatura serve l'incantatore sia in combattimento
che in altri momenti, e grazie al legame istintivo che li
unisce, i due combattono come un'unità perfettamente
coesa. Quando l'incantatore è in sella alla cavalcatura, può
fare in modo che ogni incantesimo che bersaglia solo se
stesso bersagli anche la sua cavalcatura.
Quando la cavalcatura scende a O punti ferita, scompare,
non lasciandosi dietro alcuna forma fisica. L'incantatore può
anche congedare la sua cavalcatura in qualsiasi momento
con un'azione, facendola scomparire. In ogni caso, un nuovo
lancio di questo incantesimo evocherà la stessa cavalcatura,
riportata al massimo dei suoi punti ferita.
Finché la cavalcatura si trova entro 1,5 km
dall'incantatore, questi può comunicare con lei
telepaticamente.
L'incantatore non può legarsi a più di una cavalcatura
alla volta tramite questo incantesimo. Con un'azione,
può liberare la cavalcatura dal suo legame in qualsiasi
momento, facendola scomparire.

TROVA FAMIGLIO
Evocazione di 1 livello (rituale)
Tempo di Lancio: 1 ora
Gittata: 3 metri
Componenti: V, S, M (carbone, incenso ed erbe del valore di 10 mo da bruciare in un braciere d'ottone)
Durata: Istantanea
L'incantatore ottiene il servizio di un fa miglio, uno spirito
che assume una forma animale a scelta dell'incantatore:
cavalluccio marino, corvo, faina, falco, gatto, granchio.
gufo, lucertola, pesce (quipper), piovra, pipistrello, ragno,
rana (rospo), serpente velenoso, topo. Il famiglia compare
in uno spazio libero entro gittata e possiede le statistiche
della forma scelta, anche se si tratta di un celestiale, un
folletto o un immondo (a scelta dell'incantatore) anziché di
una bestia.
Il famiglia agisce in modo indipendente dall'incantatore,
ma obbedisce sempre ai suoi comandi. In combattimento
tira per la propria iniziativa e agisce nel proprio turno. Un
famiglia non può attaccare ma può effettuare altre azioni
normalmente.
Quando il famiglio scende a O punti ferita, scompare e
non lascia dietro di sé alcuna forma fisica. Ricompare dopo
che l'incantatore ha lanciato di nuovo questo incantesimo.
Finché il famiglia si trova entro 30 metri dall'incantatore,
quest'ultimo pub comunicare con lui telepaticamente.
Inoltre, con un'azione, l'incantatore può vedere attraverso
gli occhi del famiglia e sentire db che esso sente fino
all'inizio del proprio turno successivo, beneficiando degli
eventuali sensi speciali posseduti dal famiglio. Durante
questo periodo, l'incantatore è sordo e cieco ai fini dei
propri sensi.
Con un'azione, l'incantatore può temporaneamente
congedare il suo famiglia, che scompare in una sacca
dimensionale dove attende di essere richiamato. In
alternativa, l'incantatore può congedarlo per sempre. Con
un'azione, finché il famiglio è congedato temporaneamenle.
l'incantatore pub farlo ricomparire in uno spazio libero
entro 9 metri da lui.
Un incantatore non può avere più di un famiglia alla
volta. Se lancia questo incantesimo quando già possiede
un famiglia, impartisce a quel famiglio una nuova forma,
scelta dalla lista soprastante. Il famiglia si trasforma nella
creatura scelta.
Infine. quando l'incantatore lancia un incantesimo con
gittata a contatto, il famiglio pub trasmettere l'incantesimo
come se fosse stato lui a lanciarlo. Il famiglio deve trovarsi
entro 30 metri dall'incantatore e deve usare Ja sua reazione
per trasmettere l'incantesimo quando l'incantatore lo
lancia. Se l'incantesimo richiede un tiro per colpire,
l'incantatore usa il suo modificatore di attacco per quel ti110.

TRUCCO DELLA CORDA
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (estratto di mais in polvere e un pezzo di pergamena annodato)
Durata: 1 ora
L'incantatore tocca un pezzo di corda di una lunghezza
massima di 18 metri. Un'estremità della corda sale in aria
finché essa non pende perpendicolarmente al terreno.
All'estremità superiore della corda si apre un'entrata
invisibile verso uno spazio extradimensiona)e che permane
finché l'incantesimo non termina.
È possibile raggiungere lo spazio extradimensionale
arrampicandosi in cima alla corda. Lo spazio può
contenere un massimo di otto creature di taglia Media
o inferiore. La corda può essere ritratta all'interno dello
spazio, nel qual caso sparirà dalla vista di chi osserva
all'esterno dello spazio.
Gli attacchi e gli incantesimi non possono attraversare in
entrata o in uscita lo spazio extradimensionale, ma coloro
che si trovano all'interno possono vedere all'esterno come
se osservassero da una finestra di 90 centimetri per 1,5
metri centrata sulla corda.
Tutto ciò che si trova all'interno dello spazio
extradimensionaie cade all'esterno quando l'incantesimo
termina.

TSUNAMI
Evocazione di 8 livello
Tempo di Lancio: 1 minuto
Gittata: Vista
Componenti: V, S
Durata: Concentrazione, 6 round
Un muro d'acqua si materializza in un punto a scelta
dell'incantatore situato entro gittata. Il muro può avere
dimensioni massime di 90 metri di lunghezza, 90 metri
di altezza e 15 metri di spessore e permane per la durata
dell'incantesimo.
Quando il muro appare, ogni creatura all'interno della
sua area deve effettuare un tiro salvezza su Forza. Se lo
fallisce, subisce 6dl0 danni contundenti, mentre se lo
supera, subisce soltanto la metà di quei danni.
All'inizio di ogni turno dell'incantatore, dopo che il muro
è comparso, esso si muove di 15 metri allontanandosi
dall'incantatore assieme alle creature che contiene. Ogni
creatura di taglia Enorme o inferiore situata all'interno
del muro e ogni creatura in uno spazio in cui il muro entra
quando si muove, deve superare un tiro salvezza su Forza,
altrimenti subisce 5dl0 danni contundenti. Una creatura
può .subire questi danni soltanto una volta per round. Alla
fine del turno, l'altezza del muro si riduce di 15 metri e i
danni che le creature subiscono dall'incantesimo nei round
successivi sono ridotti di ldlO. Quando il muro scende a O
metri di altezza, l'incantesimo termina.
Una creatura immersa nel muro può muoversi nuotando.
Data la forza dell'onda, tuttavia, deve effettuare con
successo una prova di Forza (Atletica) contro la CD del
tiro salvezza dell'incantesimo per muoversi. Se fallisce la
prova, non può muoversi. Se una creatura muovendosi esce
dall'area, cade a terra.

UNTO
Evocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un frammento di grasso di maiale o di burro)
Durata: 1 minuto
Una patina viscida di unto ricopre un quadrato di
terreno con lato di 3 metri, centrato in un punto entro
gittata, trasformandolo in terreno difficile per la durata
dell'incantesimo.
Quando l'unto compare, ogni creatura che si trova
entro l'area deve superare un tiro salvezza su Destrezza
altrimenti cade a terra prona. Anche una creatura che entra
nell'area o vi termina il proprio turno deve superare un tiro
salvezza su Destrezza o cade a terra prona.

VEDERE INVISIBILITÀ
Divinazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un pizzico di talco e una manciata di polvere d'argento)
Durata: 1 ora
Per la durata dell'incantesimo, l'incantatore vede le
creature e gli oggetti invisibili come se fossero visibili e può
vedere sul Piano Etereo. Le creature e gli oggetti eterei gli
appaiono spettrali e trasparenti.

VELOCITÀ
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una buccia di radice di liquirizia)
Durata: Concentrazione, 1 minuto
L'incantatore sceglie una creatura consenziente
entro gittata e che egli sia in grado di vedere. Finché
l'incantesimo non termina, il bersaglio ottiene un bonus
di +2 alla CA, dispone di vantaggio ai tiri salvezza su
Destrezza, la sua velocità raddoppia, e ottiene un'azione
aggiuntiva a ogni suo turno. L'azione aggiuntiva può essere
usata soltanto per effettuare un'azione di Attacco (solo
attacchi con le armi), Disimpegno, Nascondersi, Scatto o
Usare un Oggetto.
Quando l'incantesimo termina, il bersaglio non può
muoversi o effettuare azioni fino alla fine del suo turno
successivo, in quanto è sopraffatto da un'ondata di
spossatezza.

VIGILANZA E INTERDIZIONE
Abiurazione di 6 livello
Tempo di Lancio: 10 minuti
Gittata: Contatto
Componenti: V, S, M (incenso bruciato, piccole dosi di olio e zolfo, uno spago annodato, una piccola quantità di sangue di umber hulk e una piccola verga d'argento del valore di almeno 10 mo)
Durata: 24 ore
L'incantatore crea un'interdizione che protegge un'area
quadrata con lato di 15 metri, o cento quadrati con lato
di 1,5 metri, o venticinque quadrati con lato di 3 metri.
L'area protetta può essere alta fino a 6 metri e avere la
forma desiderata dall'incantatore. È possibile proteggere
vari piani di una roccaforte ripartendo l'area su più piani,
purché l'incantatore possa camminare in ogni area
contigua mentre lancia l'incantesimo.
Quando l'incantatore lancia l'incantesimo, può
specificare quali individui non saranno influenzati
da alcuni o da tutti gli effetti a sua scelta. Può anche
specificare una parola d'ordine che, una volta pronunciata a
voce alta, renderà immune a questi effetti chi Ja pronuncia.
Vigilanza e interdizione crea gli effetti seguenti
all'interno dell'area protetta.
Corridoi. Tutti i corridoi protetti si riempiono di nebbia e
diventano pesantemente oscurati. Inoltre, a ogni incrocio o
diramazione che richieda di scegliere una direzione esiste
una probabilità del 50 per cento che una creatura diversa
dall'incantatore creda di andare nelJa direzione opposta
rispetto a quella che ha scelto.
Porte. Tutte le porte entro l'area protetta sono chiuse
a chiave magicamente, come se fossero sigillate da un
incantesimo serratura arcana. Inoltre, l'incantatore può
celare fino a dieci porte con un'illusione (equivalente alla
funzione di oggetto illusorio dell'incantesimo illusione
minore) per farle apparire come normali sezioni di muro.
Scale. Tutte le scale entro l'area protetta si riempiono di
ragnatele da cima a fondo, con gli effetti dell'incantesimo
ragnatela. Questi filamenti di ragnatela ricrescono in
10 minuti se vengono bruciati o strappati, fintanto che
vigilanza e interdizione permane.
Altro Effetto Magico. L'incantatore può collocare uno
dei seguenti effetti magici a sua scelta entro l'area protetta
della roccaforte.
• Collocare luci danzanti in quattro corridoi. L'incantatore
pub designare un semplice programma che le luci
ripeteranno fintanto che vigilanza e interdizione
permane.
• Collocare bocca magica in due luoghi.
• Collocare nube maleodorante in due luoghi. Il vapore
compare nei luoghi designati dall'incantatore; tornano
dopo 10 minuti se dispersi dal vento fintanto che
vigilanza e interdizione permane.
• Collocare una folata di vento costante in un corridoio o in
una stanza .
• Collocare una suggestione in un luogo. L'incantatore
seleziona un'area massima pari a un quadrato con lato di
1,5 metri; ogni creatura che entra nell'area o l'attraversa
riceve la suggestione mentalmente.
L'intera area protetta emana magia. Un incantesimo
dissolvi magie lanciato con successo su un effetto specifico
rimuove soltanto quell'effetto.
L'incantatore può creare una struttura permanentemente
soggetta a vigilanza e interdizione lanciando questo
incantesimo sulla struttura ogni giorno per un anno.

VINCOLO DI INTERDIZIONE
Abiurazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un paio di anelli di platino del valore di almeno 50 mo, che l'incantatore e il bersaglio devono portare per la durata dell'incantesimo)
Durata: 1 ora
Questo incantesimo protegge una creatura consenziente
toccata dall'incantatore e crea tra i due un legame mistico
che permane finché l'incantesimo non termina. Finché il
bersaglio si trova entro 18 metri dall'incantatore, ottiene
un bonus di +1 alla CA e ai tiri salvezza e resistenza a tutti
i danni. Inoltre ogni volta che subisce danni, l'incantatore
subisce lo stesso ammontare di danni.
L'incantesimo termina se l'incantatore scende a O punti
ferita, se l'incantatore e il bersaglio si separano a più di 18
metri di distanza o se l'incantesimo viene lanciato di nuovo
su una delle due creature collegate. Inoltre, l'incantatore
può interrompere l'incantesimo con un'azione.

VISIONE DEL VERO
Divinazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un unguento per gli occhi del costo di 25 mo, ricavato da polvere di funghi, zolfo e grasso, che l'incantesimo consuma)
Durata: 1 ora
Questo incantesimo conferisce alla creatura toccata
dall'incantatore la capacità di vedere le cose per ciò che
effettivamente sono. Per la durata dell'incantesimo, la
creatura è dotata di vista pura, nota le porte segrete
nascoste dalla magia ed è in grado di vedere sul Piano
Etereo, entro un raggio di 36 metri.

VITA FALSATA
Necromanzia di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (una piccola quantità di alcol o di liquore distillato)
Durata: 1 ora
L'incantatore si rafforza con un duplicato necromantico di
vita e ottiene 1d4 + 4 punti ferita temporanei per la durata
dell'incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 2 livello o
superiore, ottiene 5 punti ferita temporanei per ogni slot di
livello superiore al 1.

VOLARE
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (la piuma dell'ala di un qualsiasi uccello)
Durata: Concentrazione, 10 minuti
L'incantatore tocca una creatura consenziente. Il bersaglio
ottiene una velocità di volare di 18 metri per la durata
dell'incantesimo. Quando l'incantesimo termina, il
bersaglio cade se era ancora sospeso in aria, a meno che
non abbia modo di impedire la caduta.
ai Livelli Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o
superiore, può bersagliare una creatura aggiuntiva per ogni
slot di livello superiore al 3.

VUOTO MENTALE
Abiurazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S
Durata: 24 ore
Finché l'incantesimo non termina, una creatura
consenziente toccata dall'incantatore è immune ai
danni psichici, a qualsiasi effetto che percepirebbe
le sue emozioni o leggerebbe i suoi pensieri, agli
incantesimi di divinazione e alla condizione di affascinato.
L'incantesimo neutralizza perfino gli incantesimi desiderio
e gli incantesimi o effetti di potenza analoga usati per
influenzare la mente del bersaglio o ottenere informazioni
su quel bersaglio.

ZONA DI VERITÀ
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S
Durata: 10 minuti
L'incantatore crea una zona magica protetta dagli inganni
entro una sfera del raggio di 4,5 metri centrata su un punto
a sua scelta situato entro gittata. Finché l'incantesimo non
termina, una creatura che entra nell'area dell'incantesimo
per la prima volta in un turno o vi inizia il proprio turno
deve effettuare un tiro salvezza su Carisma. Se lo fallisce,
la creatura non può mentire deliberatamente finché si trova
entro l'area. L'incantatore sa se ogni creatura ha superato o
fallito il suo tiro salvezza.
Una creatura influenzata è consapevole dell'incantesimo
e pub quindi evitare di rispondere alle domande a cui
normalmente risponderebbe mentendo. Una tale creatura
può fornire risposte sfuggenti, purché rimanga entro i
confini della verità.
`,
    listaIncantesimi: {
  incantesimiBardo: `
Frantumare
Individuazione dei Pensieri
Invisibilità
Localizza Animali o Vegetali
Localizza Oggetto
Amicizia
Nube di Pugnali
Beffa Crudele
Riscaldare il Metallo
Colpo Accurato
Ristorare Inferiore
Illusione Minore
Scassinare
Interdizione alle Lame
Silenzio
Luce
Suggestione
Luci Danzanti
Vedere Invisibilità
Mano Magica
Zona di Verità
Messaggio
Prestidigitazione
Riparare
Anti-Individuazione
Capanna di Leomund
Chiaroveggenza
Amicizia con gli Animali
Crescita Vegetale
Anatema
Dissolvi Magie
Caduta Morbida
Glifo di Interdizione
Camuffare Se Stesso
Immagine Maggiore
Charme su Persone
Inviare
Comprensione dei linguaggi
Linguaggi
Cura Ferite
Morte Apparente
Eroismo
Nube Maleodorante
Identificare
Parlare con i Morti
Immagine Silenziosa
Parlare con i Vegetali
Individuazione del Magico
Paura
Luminescenza
Scagliare Maledizione
Onda Tonante
Trama Ipnotica
Parlare con gli Animali
Parola Guaritrice
Passo Veloce
Compulsione
Risata Incontenibile di Tasha
Confusione
Scritto Illusorio
Invisibilità Superiore
Servitore Inosservato
Libertà di Movimento
Sonno
Localizza Creatura
Sussurri Dissonanti
Metamorfosi
Porta Dimensionale
Terreno Illusorio
Allucinazione di Forza
Animale Messaggero
Blocca Persone
Animare Oggetti
Bocca Magica
Blocca Mostri
Calmare Emozioni
Cerchio di Teletrasporto
Caratteristica Potenziata
Conoscenza delle Leggende
Cecità/Sordità
Costrizione
Corona di Follia
Cura Ferite di Massa
Estasiare
Dominare Persone
Fuorviare
Legame Planare
Modificare Memoria
Rianimare Morti
Ristorare Superiore
Risveglio
Scrutare
Sembrare
Sogno
Danza Irresistibile di Otto
Illusione Programmata
Scopri il Percorso
Sguardo Penetrante
Suggestione di Massa
Vigilanza e Interdizione
Visione del Vero
Forma Eterea
Gabbia di Forza
Immagine Proiettata
Miraggio Arcano
Reggia Meravigliosa di Mordenkainen
Resurrezione
Rigenerazione
Simbolo
Spada di Mordenkainen
Teletrasporto
Dominare Mostri
Loquacità
Parola del Potere Stordire
Regressione Mentale
Vuoto Mentale
Metamorfosi Pura
Parola del Potere Guarire
Parola del Potere Uccidere
Previsione
Comando
Spruzzo Colorato
Aiuto
Immagine Speculare
Ingrandire/Ridurre
Lentezza
Parola Guaritrice di Massa
Allucinazione Mortale
Legame Telepatico di Rary
Banchetto degli Eroi
Spruzzo Prismatico
Antipatia / Simpatia
Muro Prismatico
`, // Da comando a Muro Prismatico sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiChierico: `
Fiamma Sacra
Guida
Luce
Resistenza
Riparare
Salvare i Morenti
Taumaturgia
Anatema
Benedizione
Comando
Creare o Distruggere Acqua
Cura Ferite
Dardo Tracciante
Individuazione del Bene e del Male
Individuazione del Magico
Individuazione delle Malattie e dei Veleni
Infliggi Ferite
Parola Guaritrice
Protezione dal Bene e dal Male
Purificare Cibo e Bevande
Santuario
Scudo della Fede
Aiuto
Arma Spirituale
Blocca Persone
Calmare Emozioni
Caratteristica Potenziata
Cecità/Sordità
Fiamma Perenne
Localizza Oggetto
Preghiera di Guarigione
Presagio
Protezione dai Veleni
Riposo Inviolato
Ristorare Inferiore
Scopri Trappole
Silenzio
Vincolo di interdizione
Zona di Verità
Animare Morti
Camminare sull'Acqua
Cerchio Magico
Chiaroveggenza
Creare Cibo e Acqua
Dissolvi Magie
Faro di Speranza
Fondersi nella Pietra
Glifo di interdizione
Guardiani Spirituali
Inviare
linguaggi
Luce Diurna
Morte Apparente
Parlare con i Morti
Parola Guaritrice di Massa
Protezione dall'Energia
Rimuovi Maledizione
Rinascita
Scagliare Maledizione
Controllare Acqua
Divinazione
Esilio
Guardiano della Fede
Interdizione alla Morte
Libertà di Movimento
Localizza Creatura
Scolpire Pietra
Colpo Infuocato
Comunione
Conoscenza delle Leggende
Contagio
Costrizione
Cura Ferite di Massa
Dissolvi il Bene e il Male
Legame Planare
Piaga degli Insetti
Rianimare Morti
Ristorare Superiore
Santificare
Scrutare
Alleato Planare
Banchetto degli Eroi
Barriera di Lame
Creare Non Morti
Ferire
Guarigione
Parola del Ritiro
Proibizione
Scopri il Percorso
Visione del Vero
Evoca Celestiale
Forma Eterea
Parola Divina
Resurrezione
Rigenerazione
Simbolo
Spostamento Planare
Tempesta di Fuoco
Aura Sacra
Campo Anti-Magia
Controllare Tempo Atmosferico
Terremoto
Guarigione di Massa
Portale
Proiezione Astrale
Resurrezione Pura
Aura di Vitalità
Aura di Purezza
Aura di vita
Bagliore Solare
Esplosione Solare
Parola del Potere Guarire
`, // Da Aura di Vitalità a Parola del Potere Guarire sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiDruido: `
Artificio Druidico
Frusta di Spine
Guida
Produrre Fiamma
Randello Incantato
Resistenza
Riparare
Spruzzo Velenoso
Amicizia con gli Animali
Bacche Benefiche
Charme su Persone
Creare o Distruggere Acqua
Cura Ferite
Individuazione del Magico
Individuazione delle Malattie e dei Veleni
Intralciare
Luminescenza
Nube di Nebbia
Onda Tonante
Parlare con gli Animali
Parola Guaritrice
Passo Veloce
Purificare Cibo e Bevande
Saltare
Animale Messaggero
Bagliore Lunare
Blocca Persone
Caratteristica Potenziata
Crescita di Spine
Folata di Vento
Lama Infuocata
Localizza Animali o Vegetali
Localizza Oggetto
Passare Senza Tracce
Pelle Coriacea
Percezione delle Bestie
Protezione dai Veleni
Riscaldare il Metallo
Ristorare Inferiore
Scopri Trappole
Scurovisione
Sfera Infuocata
Camminare sull'Acqua
Crescita Vegetale
Dissolvi Magie
Evoca Animali
Fondersi nella Pietra
Invocare il Fulmine
Luce Diurna
Morte Apparente
Muro di Vento
Parlare con i Vegetali
Protezione dall'Energia
Respirare sott'Acqua
Tempesta di Nevischio
Confusione
Controllare Acqua
Dominare Bestie
Evoca Creature Boschive
Evoca Elementali Minori
Inaridire
Insetto Gigante
Libertà di Movimento
Localizza Creatura
Metamorfosi
Muro di Fuoco
Pelle di Pietra
Rampicante Afferrante
Scolpire Pietra
Tempesta di Ghiaccio
Terreno Illusorio
Comunione con la Natura
Contagio
Costrizione
Cura Ferite di Massa
Evoca Elementale
Guscio Anti-Vita
Legame Planare
Muro di Pietra
Piaga degli Insetti
Reincarnazione
Ristorare Superiore
Risveglio
Scrutare
Traslazione Arborea
Bagliore Solare
Banchetto degli Eroi
Camminare nel Vento
Evoca Folletto PHB
Guarigione
Muovere il Terreno
Muro di Spine
Scopri il Percorso
Trasporto Vegetale
Inversione della Gravità
Miraggio Arcano
Rigenerazione
Spostamento Planare
Tempesta di Fuoco
Antipatia / Simpatia
Controllare Tempo Atmosferico
Esplosione Solare
Forme Animali
Regressione Mentale
Terremoto
Tsunami
Previsione
Resurrezione Pura
Tempesta di Vendetta
Trasformazione
Protezione dal Bene e dal Male
Fiamma Perenne
Ingrandire/Ridurre
Presagio
Arma Elementale
Aura di Vitalità
Rinascita
Divinazione
Scudo di Fuoco
Cono di freddo
Carne in Pietra
Simbolo
Nube Incendiaria
`, // Da Protezione dal Bene e dal Male a Nube Incendiaria sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiMago: `
Amicizia
Colpo Accurato
Dardo di Fuoco
Fiotto Acido
Illusione Minore
Interdizione alle Lame
Luce
Luci Danzanti
Mano Magica
Messaggio
Prestidigitazione
Raggio di Gelo
Riparare
Spruzzo Velenoso
Stretta Folgorante
Tocco Gelido
Allarme
Armatura Magica
Caduta Morbida
Camuffare Se Stesso
Charme su Persone
Comprensione dei Linguaggi
Dardo Incantato
Dardo Stregato
Disco Fluttuante di Tenser
Globo Cromatico
Identificare
Immagine Silenziosa
Individuazione del Magico
Mani Brucianti
Nube di Nebbia
Onda Tonante
Passo Veloce
Protezione dal Bene e dal Male
Raggio di Infermità
Risata Incontenibile di Tasha
Ritirata Rapida
Saltare
Scritto Illusorio
Scudo
Servitore Inosservato
Sonno
Spruzzo Colorato
Trova Famiglio
Unto
Vita Falsata
Allucinazione di Forza
Alterare Se Stesso
Arma Magica
Aura Magica di Nystul
Blocca Persone
Bocca Magica
Cecità/Sordità
Corona di Follia
Fiamma Perenne
Folata di Vento
Frantumare
Freccia Acida di Melf
Immagine Speculare
Individuazione dei Pensieri
Ingrandire/Ridurre
Invisibilità
Levitazione
Localizza Oggetto
Movimenti del Ragno
Nube di Pugnali
Oscurità
Passo Velato
Raggio di Affaticamento
Raggio Rovente
Ragnatela
Riposo Inviolato
Scassinare
Scurovisione
Serratura Arcana
Sfera Infuocata
Sfocatura
Suggestione
Trucco della Corda
Vedere Invisibilità
Animare Morti
Anti-Individuazione
Capanna di Leomund
Cerchio Magico
Chiaroveggenza
Contro Incantesimo
Destriero Fantomatico
Dissolvi Magie
Forma Gassosa
Fulmine
Glifo di Interdizione
Immagine Maggiore
Intermittenza
Inviare
lentezza
linguaggi
Morte Apparente
Nube Maleodorante
Palla di Fuoco
Paura
Protezione dall'Energia
Respirare sott'Acqua
Rimuovi Maledizione
Scagliare Maledizione
Tempesta di Nevischio
Tocco del Vampiro
Trama Ipnotica
Velocità
Volare
Allucinazione Mortale
Confusione
Controllare Acqua
Esilio
Evoca Elementali Minori
Fabbricare
Inaridire
Invisibilità Superiore
Localizza Creatura
Metamorfosi
Muro di Fuoco
Occhio Arcano
Pelle di Pietra
Porta Dimensionale
Santuario Privato di Mordenkainen
Scolpire Pietra
Scrigno Segreto di Leomund
Scudo di Fuoco
Segugio Fedele di Mordenkainen
Sfera Elastica di Otiluke
Tempesta di Ghiaccio
Tentacoli Neri di Evard
Terreno Illusorio
Animare Oggetti
Blocca Mostri
Cerchio di Teletrasporto
Cono di Freddo
Conoscenza delle Leggende
Contattare Altri Piani
Costrizione
Creazione
Dominare Persone
Evoca Elementale
Fuorviare
Legame Planare
Legame Telepatico di Rary
Mano di Bigby
Modificare Memoria
Muro di Forza
Muro di Pietra
Nube Mortale
Passapareti
Scrutare
Sembrare
Sogno
Telecinesi
Bagliore Solare
Carne in Pietra
Catena di Fulmini
Cerchio di Morte
Contingenza
Creare Non Morti
Danza Irresistibile di Otto
Disintegrazione
Evocazioni Istantanee di Drawmij
Giara Magica
Globo di Invulnerabilità
Illusione Programmata
Muovere il Terreno
Muro di Ghiaccio
Portale Arcano
Sfera Congelante di Otiluke
Sguardo Penetrante
Suggestione di Massa
Vigilanza e Interdizione
Visione del Vero
Celare
Dito della Morte
Forma Eterea
Gabbia di Forza
Immagine Proiettata
Inversione della Gravità
Miraggio Arcano
Palla di Fuoco Ritardata
Reggia Meravigliosa di Mordenkainen
Simbolo
Simulacro
Spada di Mordenkainen
Spostamento Planare
Spruzzo Prismatico
Teletrasporto
Antipatia / Simpatia
Campo Anti-Magia
Clone
Controllare Tempo Atmosferico
Dominare Mostri
Esplosione Solare
Labirinto
Nube Incendiaria
Parola del Potere Stordire
Regressione Mentale
Semipiano
Telepatia
Vuoto Mentale
Desiderio
Fatale
Fermare il Tempo
Imprigionare
Metamorfosi Pura
Muro Prismatico
Parola del Potere Uccidere
Portale
Previsione
Proiezione Astrale
Sciame di Meteore
Trasformazione
Caratteristica Potenziata
Presagio
Parlare con i Morti
Divinazione
`, // Da Caratteristica Potenziata a Divinazione sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiPaladino: `
Benedizione
Comando
Cura Ferite
Duello Obbligato
Eroismo
Favore Divino
Individuazione del Bene e del Male
Individuazione del Magico
Individuazione delle Malattie e dei Veleni
Protezione dal Bene e dal Male
Punizione Collerica
Punizione Incandescente
Punizione Tonante
Purificare Cibo e Bevande
Scudo della Fede
Aiuto
Arma Magica
localizza Oggetto
Protezione dai Veleni
Punizione Marchiante
Ristorare Inferiore
Trova Cavalcatura
Zona di Verità
Arma Elementale
Aura di Vitalità
Cerchio Magico
Creare Cibo e Acqua
Dissolvi Magie
Luce Diurna
Manto del Crociato
Punizione Accecante
Rimuovi Maledizione
Rinascita
Aura di Purezza
Aura di Vita
Esilio
Interdizione alla Morte
Localizza Creatura
Punizione Demoralizzante
Cerchio di Potere
Costrizione
Dissolvi il Bene e il Male
Onda Distruttiva
Punizione Esiliante
Rianimare Morti
Preghiera di Guarigione
Riposo Inviolato
Vincolo di Interdizione
`, // Da Preghiera di Guarigione a Vincolo di Interdizione sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiRanger: `
Allarme
Amicizia con gli Animali
Bacche Benefiche
Colpo Intrappolante
Cura Ferite
Individuazione del Magico
Individuazione delle Malattie e dei Veleni
Marchio del Cacciatore
Nube di Nebbia
Parlare con gli Animali
Passo Veloce
Raffica di Spine
Saltare
Animale Messaggero
Cordone di Frecce
Crescita di Spine
Localizza Animali o Vegetali
Localizza Oggetto
Passare Senza Tracce
Pelle Coriacea
Percezione delle Bestie
Protezione dai Veleni
Ristorare Inferiore
Scopri Trappole
Scurovisione
Silenzio
Anti-Individuazione
Camminare sull'Acqua
Crescita Vegetale
Evoca Animali
Evoca Raffica
Freccia Folgorante
luce Diurna
Muro di Vento
Parlare con i Vegetali
Protezione dall'Energia
Respirare sott'Acqua
Evoca Creature Boschive
Libertà di Movimento
Localizza Creatura
Pelle di Pietra
Rampicante Afferrante
Comunione con la Natura
Evoca Pioggia di Armi
Faretra Rapida
Traslazione Arborea
Intralciare
Punizione Incandescente
Aiuto
Arma Magica
Caratteristica Potenziata
Folata di Vento
Arma Elementale
Fondersi nella Pietra
Rinascita
Dominare Bestie
Ristorare Superiore
`, // Da Intralciare a Ristorare Superiore sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiStregone: `
Amicizia
Colpo Accurato
Dardo di Fuoco
Fiotto Acido
Illusione Minore
Interdizione alle lame
luce
Luci Danzanti
Mano Magica
Messaggio
Prestidigitazione
Raggio di Gelo
Riparare
Spruzzo Velenoso
Stretta Folgorante
Tocco Gelido
Armatura Magica
Caduta Morbida
Camuffare Se Stesso
Charme su Persone
Comprensione dei Linguaggi
Dardo Incantato
Dardo Stregato
Globo Cromatico
Immagine Silenziosa
Individuazione del Magico
Mani Brucianti
Nube di Nebbia
Onda Tonante
Raggio di Infermità
Ritirata Rapida
Saltare
Scudo
Sonno
Spruzzo Colorato
Vita Falsata
Allucinazione di Forza
Alterare Se Stesso
Blocca Persone
Caratteristica Potenziata
Cecità/Sordità
Corona di Follia
Folata di Vento
Frantumare
Immagine Speculare
Individuazione dei Pensieri
Ingrandire/Ridurre
Invisibilità
levitazione
Movimenti del Ragno
Nube di Pugnali
Oscurità
Passo Velato
Raggio Rovente
Ragnatela
Scassinare
Scurovisione
Sfocatura
Suggestione
Vedere Invisibilità
Camminare sull'Acqua
chiaroveggenza
Contro Incantesimo
Dissolvi Magie
Forma Gassosa
Fulmine
Immagine Maggiore
Intermittenza
Lentezza
Linguaggi
Luce Diurna
Nube Maleodorante
Palla di Fuoco
Paura
Protezione dall'Energia
Respirare sott'Acqua
Tempesta di Nevischio
Trama Ipnotica
Velocità
Volare
Confusione
Dominare Bestie
Esilio
Inaridire
Invisibilità Superiore
Metamorfosi
Muro di Fuoco
Pelle di Pietra
Porta Dimensionale
Tempesta di Ghiaccio
Animare Oggetti
Blocca Mostri
Cerchio di Teletrasporto
Cono di Freddo
Creazione
Dominare Persone
Muro di Pietra
Nube Mortale
Piaga degli Insetti
Sembrare
Telecinesi
Bagliore Solare
Catena di Fulmini
Cerchio di Morte
Disintegrazione
Globo di Invulnerabilità
Muovere il Terreno
Portale Arcano
Sguardo Penetrante
Suggestione di Massa
Visione del Vero
Dito della Morte
Forma Eterea
Inversione della Gravità
Palla di Fuoco Ritardata
Spostamento Planare
Spruzzo Prismatico
Teletrasporto
Tempesta di Fuoco
Dominare Mostri
Esplosione Solare
Nube Incendiaria
Parola del Potere Stordire
Terremoto
desiderio
Fermare il Tempo
Parola del Potere Uccidere
Portale
Sciame di Meteore
Unto
Arma Magica
Lama Infuocata
Sfera Infuocata
Tocco del Vampiro
Scudo di Fuoco
Mano di Bigby
Carne in Pietra
Sfera Congelante di Otiluke
Semipiano
`, // Da Unto a Semipiano sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiWarlock: `
Amicizia
Colpo Accurato
Deflagrazione Occulta
Illusione Minore
Interdizione alle Lame
Mano Magica
Prestidigitazione
Spruzzo Velenoso
Tocco Gelido
Armatura di Agathys
Braccia di Hadar
Charme su Persone
Comprensione dei Linguaggi
Dardo Stregato
Intimorire Infernale
Protezione dal Bene e dal Male
Ritirata Rapida
Scritto Illusorio
Servitore Inosservato
Sortilegio
Blocca Persone
Corona di Follia
Estasiare
Frantumare
Immagine Speculare
Invisibilità
Movimenti del Ragno
Nube di Pugnali
Oscurità
Passo Velato
Raggio di Affaticamento
Suggestione
Cerchio Magico
Contro Incantesimo
Dissolvi Magie
Fame di Hadar
Forma Gassosa
Immagine Maggiore
Linguaggi
Paura
Rimuovi Maledizione
Tocco del Vampiro
Trama Ipnotica
Volare
Esilio
Inaridire
Porta Dimensionale
Terreno Illusorio
Blocca Mostri
Contattare Altri Piani
Scrutare
Sogno
Carne in Pietra
Cerchio di Morte
Creare Non Morti
Evoca Folletto PHB
Portale Arcano
Sguardo Penetrante
Suggestione di Massa
Visione del Vero
Dito della Morte
Forma Eterea
Gabbia di Forza
Spostamento Planare
Dominare Mostri
Loquacità
Parola del Potere Stordire
Regressione Mentale
Semipiano
Imprigionare
Metamorfosi Pura
Parola del Potere Uccidere
Previsione
Proiezione Astrale
Cerchio di Teletrasporto
Fuorviare
Legame Planare
Fatale
Portale
`, // Da Cerchio di Teletrasporto a Portale sono stati aggiunti in tasha, prima il phb non li prevedeva. 
  incantesimiArtefice: `
Luce
Luci Danzanti
Mano Magica
Messaggio
Prestidigitazione
Raggio di Gelo
Resistenza
Riparare
Salvare i Morenti
Spruzzo Velenoso
Stretta Folgorante
Dardo di Fuoco
Fiotto Acido
Frusta di Spine
Guida
Allarme
Caduta Morbida
Camuffare Se Stesso
Cura Ferite
Identificare
Individuazione del Magico
Luminescenza
Passo Veloce
Purificare Cibo e Bevande
Ritirata Rapida
Saltare
Santuario
Unto
Vita Falsata
Aiuto
Alterare Se Stesso
Arma Magica
Bocca Magica
Caratteristica Potenziata
Fiamma Perenne
Ingrandire/Ridurre
Invisibilità
Levitazione
Movimenti del Ragno
Protezione dai Veleni
Ragnatela
Riscaldare il Metallo
Ristorare Inferiore
Scurovisione
Serratura Arcana
Sfocatura
Trucco della Corda
Vedere Invisibilità
Arma Elementale
Camminare sull'Acqua
Creare Cibo e Acqua
Dissolvi Magie
Glifo di Interdizione
Intermittenza
Protezione dall'Energia
Respirare sott'Acqua
Rinascita
Velocità
Volare
Fabbricare
Libertà di Movimento
Occhio Arcano
Pelle di Pietra
Santuario Privato di Mordenkainen
Scolpire Pietra
Scrigno Segreto di Leomund
Segugio Fedele di Mordenkainen
Sfera Elastica di Otiluke
Animare Oggetti
Creazione
Mano di Bigby
Muro di Pietra
Ristorare Superiore
`, // Sono stati aggiunti in tasha, prima il phb non li prevedeva.     
    }
  },
  xanathar: {
    grimorioString: `
ABILITÀ POTENZIATA
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S 
Durata: Concentrazione, fino a 1 ora
Grazie alla magia, l'incantatore consente a una creatura di sviluppare una maggiore comprensione delle proprie doti. L'incantatore tocca una creatura consenziente e le conferisce maestria in un'abilità a scelta dell'incantatore· finché l'incantesimo non termina, la creatura raddoppia il suo bonus di competenza nelle prove di caratteristica che effettua per usare l'abilità scelta.
L'incantatore deve scegliere un'abilità in cui il bersaglio sia competente e che non benefici già di un effetto, come per esempio Maestria, che raddoppia il suo bonus di competenza.

ACULEO MENTALE
Divinazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: S 
Durata: Concentrazione, fino a 1 ora
L'incantatore si insinua nella mente di una creatura situata entro gittata e che egli sia in grado di vedere. Il bersaglio deve effettuare un tiro salvezza su Saggezza; se lo fallisce, subisce 3d8 danni psichici, mentre se lo supera, subisce la metà di quei danni. Se lo fallisce, l'incantatore sa sempre dove si trova il bersaglio fino alla fine dell'incantesimo, ma solo se entrambi si trovano sullo stesso piano d'esistenza. Finché l'incantatore è in possesso di queste conoscenze, il bersaglio non può nascondersi da lui e, se è invisibile, non ottiene alcun beneficio da quella condizione contro di lui.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello o superiore, i danni aumentano di ld8 per ogni slot di livello superiore al 2 °.

ALBA
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un pendente che raffigura un sole splendente del valore di almeno 100 mo) 
Durata: Concentrazione, fino a 1 minuto
La luce dell'alba risplende su un luogo specificato dall'incantatore entro gittata. Finché l'incantesimo non termina, un cilindro del raggio di 9 metri e alto 12 metri di luce intensa risplende in quel luogo. La sua luce è considerata luce del sole.
Quando il cilindro compare, ogni creatura al suo interno deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce 4dl0 danni radiosi, mentre se lo supera, subisce la metà di quei danni. Una creatura deve effettuare questo tiro salvezza anche ogni volta che termina il proprio turno nel cilindro.
Se l'incantatore si trova entro 18 metri dal cilindro, può muoverlo di un massimo di 18 metri come azione bonus nel proprio turno.

ANATEMA ELEMENTALE
Trasmutazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore sceglie una creatura situata entro gittata e che egli sia in grado di vedere e sceglie uno dei tipi di danno seguenti: acido, freddo, fulmine, fuoco o tuono. Il bersaglio deve superare un tiro salvezza su Costituzione, altrimenti sarà influenzato dall'incantesimo per la sua durata. La prima volta in ogni turno in cui il bersaglio influenzato subisce danni del tipo scelto, esso subisce 2d6 danni extra di quel ti�o. Il bersaglio perde inoltre qualsiasi resistenza a quel tipo d1 danno finché l'incantesimo non termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 5 ° livello o superiore, può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 4°. Le creature devono trovarsi entro 9 metri l'una dall'altra quando l'incantatore le bersaglia.

ARMA SACRA
Invocazione di 5 livello
Tempo di Lancio: 1 azione bonus
Gittata: Contatto
Componenti: V, S 
Durata: Concentrazione, fino a 1 ora
L'incantatore infonde di potere sacro un'arma che sta toccando. Finché l'incantesimo non termina, l'arma emette luce intensa in un raggio di 9 metri e luce fioca per altri 9 metri. Inoltre, gli attacchi effettuati con l'arma infliggono 2d8 danni radiosi extra se colpiscono. Se l'arma non è già un'arma magica, diventa tale per la durata dell'incantesimo.
Come azione bonus nel proprio turno, l'incantatore può congedare l'incantesimo e fare in modo che dall'arma si sprigioni un'esplosione radiosa. Ogni creatura a sua scelta ' situata entro 9 metri e che egli sia in grado di vedere, deve effettuare un tiro salvezza su Costituzione: se lo fallisce, subisce 4d8 danni radiosi ed è accecata per 1 minuto, mentre se lo supera, subisce la metà di quei danni e non è accecata. Alla fine di ogni suo turno, una creatura accecata può effettuare un tiro salvezza su Costituzione; se lo supera, l'effetto su se stessa termina.

ASSORBIRE ELEMENTI
Abiurazione di 1 ° livello
Tempo di Lancio: 1 reazione, che l'incantatore effettua quando subisce danni da acido, freddo, fulmine, fuoco o tuono 
Gittata: Incantatore
Componenti: S 
Durata: 1 round
L'incantesimo cattura parte dell'energia in arrivo, ammortizzando i suoi effetti sull'incantatore e consentendogli di incamerarla per il suo attacco in mischia successivo. L'incantatore possiede resistenza al tipo di danno innescante fino all'inizio del proprio turno successivo. Inoltre, la prima volta che colpisce con un attacco in mischia nel suo turno successivo, il bersaglio subisce ld6 danni extra del tipo innescante e l'incantesimo termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo ° incantesimo usando uno slot incantesimo di 2 livello o superiore, i danni extra aumentano di ld6 per ogni slot di livello superiore al 1 °.

BOSCHETTO DRUIDICO
Abiurazione di 6 livello
Tempo di Lancio: 10 minuti
Gittata: Contatto
Componenti: V, S, M (vischio, che l'incantesimo consuma, raccolto con un falcetto d'oro alla luce della luna piena) 
Durata: 24 ore
L ' incantatore invoca gli spiriti della natura per proteggere un'area esterna o sotterranea. L'area può variare da un minimo di un cubo con spigolo di 9 metri a un massimo di un cubo con spigolo di 27 metri. Gli edifici e le altre strutture sono esclusi dall'area influenzata. Se l'incantatore lancia questo incantesimo nella stessa area ogni giorno per un anno, l'effetto dura finché non viene dissolto.
L'incantesimo crea gli effetti seguenti all'interno dell'area. Quando lancia questo incantesimo, l'incantatore può specificare le creature amiche che saranno immuni ai suoi effetti. Può anche specificare una parola d'ordine che, se pronunciata a voce alta, renderà chi la pronuncia immune ai suoi effetti.
L'intera area dell'interdizione irradia magia. Un dissolvi magie lanciato sull'area con successo rimuove soltanto uno degli effetti seguenti, non l'intera area. L'incantatore che lancia quell'incantesimo decide a quale effetto porre termine. Soltanto quando tutti i suoi effetti sono scomparsi questo incantesimo è dissolto.
Nebbia Solida. L'incantatore può riempire di fitta nebbia un qualsiasi numero di quadrati con lato di 1,5 metri sul terreno, rendendoli pesantemente oscurati. La nebbia arriva a un'altezza di 3 metri. Inoltre, ogni 30 cm di movimento attraverso la nebbia costa 60 cm extra. A una creatura immune a questo effetto, la nebbia non oscura niente e appare come una leggera foschia, con scintille di luce verde che fluttuano nell'aria.
Sottobosco Afferrante. L'incantatore può riempire un qualsiasi numero di quadrati con lato di 1,5 metri sul terreno, che non siano già occupati dalla nebbia, con un groviglio di erbacce e rampicanti, come se fossero soggetti all'incantesimo intralciare. A una creatura immune a questo effetto, le erbacce e i rampicanti risultano soffici e si modellano per fungere da sedie o letti temporanei.
Guardiani del Boschetto. L'incantatore può animare fino a quattro alberi nell'area, facendo in modo che si sradichino dal terreno. Questi alberi hanno le stesse statistiche di un albero risvegliato, che compare nel Monster Manual, con la differenza che non possono parlare e che la loro corteccia è ricoperta di simboli druidici. Se qualsiasi creatura non immune a questo effetto entra nell'area protetta, i guardiani del boschetto combattono finché non respingono o uccidono gli intrusi. I guardiani del boschetto obbediscono ai comandi parlati dell'incantatore (senza che sia richiesta alcuna azione da parte sua) che egli impartisce mentre si trova all'interno dell'area. Se l'incantatore non impartisce comandi e nessun intruso è presente, i guardiani del boschetto non fanno nulla. I guardiani del boschetto non possono uscire dall'area protetta. Quando l'incantesimo termina, la magia che li anima svanisce e gli alberi mettono radici di nuovo, se possibile.
Effetto Magico Aggiuntivo. L'incantatore può collocare uno degli effetti magici seguenti a sua scelta all'interno dell'area protetta:
Una folata di vento costante in due luoghi a sua scelta Crescita di spine in un luogo a sua scelta Muro di vento in due luoghi a sua scelta
A una creatura immune a questo effetto, i venti appaiono come una brezza fragrante e gentile e l'area di crescita di spine è innocua.

CATAPULTA
Trasmutazione di 1 ° livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: S 
Durata: Istantanea
L'incantatore sceglie un oggetto di peso compreso tra 0,5 e 2,5 kg, situato entro gittata e che non sia indossato o trasportato. L'oggetto vola in linea retta fino a 27 metri in una direzione a scelta dell'incantatore prima di cadere a terra, fermandosi prima se impatta contro una superficie solida. Se l'oggetto sta per colpire una creatura, quella creatura deve effettuare un tiro salvezza su Destrezza.
Se lo fallisce, l'oggetto colpisce il bersaglio e smette di muoversi. In ogni caso, sia l'oggetto che la creatura o la superficie solida subiscono 3d8 danni contundenti.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 2 livello o superiore, il peso massimo degli oggetti che può bersagliare con questo incantesimo aumenta di 2,5 kg e i danni aumentano di ld8, per ogni slot di livello superiore al 1°.

CERIMONIA
Abiurazione di 1 livello (rituale)
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (polvere argentata per un valore di 25 mo, che l'incantesimo consuma) 
Durata: Istantanea
L'incantatore effettua una cerimonia religiosa speciale infusa di magia. Quando lancia l'incantesimo, sceglie uno dei riti seguenti, il cui bersaglio deve trovarsi entro 3 metri da lui per tutto il tempo di lancio.
Benedire l'Acqua. L'incantatore tocca una fiala d'acqua e la fa diventare acqua santa.
Dedizione. L'incantatore tocca un umanoide che desidera dedicarsi al servizio del dio dell'incantatore. Per le 24 ore successive, ogni volta che il bersaglio effettua un tiro salvezza, può tirare un d4 e aggiungere il risultato ottenuto al tiro salvezza. Una creatura può beneficiare di questo rito una volta sola.
Espiazione. L ' incantatore tocca una creatura consenziente il cui allineamento è cambiato ed effettua una prova di Saggezza (Intuizione) con CD 20. In caso di successo, ripristina l'allineamento originale del bersagliai
Ingresso nell'Età Adulta. L'incantatore tocca un umanoide che sia un giovane adulto. Per le 24 ore successive, ogni volta che il bersaglio effettua una prova di caratteristica, può tirare un d4 e aggiungere il risultato ottenuto alla prova di caratteristica. Una creatura può beneficiare di questo rito una volta sola.
Matrimonio. L'incantatore tocca due umanoidi adulti disposti a legarsi l'un l'altro in matrimonio. Per i 7 giorni successivi, ogni bersaglio ottiene un bonus di +2 alla CA mentre si trova entro 9 metri dall'altro. Una creatura può beneficiare di nuovo di questo rito soltanto se resta vedova.
Rito Funebre. L'incantatore tocca un cadavere e, per i 7 giorni successivi, il bersaglio non può diventare non morto in alcun modo, ad eccezione di un incantesimo desiderio.

CHARME SUI MOSTRI
Ammaliamento di 4 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S 
Durata: 1 ora
L'incantatore tenta di affascinare una creatura entro gittata e che egli sia in grado di vedere. La creatura deve effettuare un tiro salvezza su Saggezza e dispone di vantaggio se l'incantatore o i suoi compagni stanno combattendo contro di lei. Se lo fallisce, è affascinata dall'incantatore finché l'incantesimo non termina o finché l'incantatore o i suoi compagni non la danneggiano in qualche modo. La creatura affascinata considera l'incantatore una figura amichevole. Quando l'incantesimo termina, la creatura capirà di essere stata affascinata dall'incantatore.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 5 ° livello o superiore, può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 4°. Le creature devono trovarsi entro 9 metri l'una dall'altra quando l'incantatore le bersaglia.

COLLERA DELLA NATURA
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore si appella agli spiriti della natura e li scaglia contro i suoi nemici. Sceglie un punto situato entro gittata e che sia in grado di vedere e gli spiriti faranno in modo che gli alberi, le rocce e l'erba entro un cubo con spigolo di 18 metri centrato su quel punto diventino animati finché l'incantesimo non termina.
Erba e Sottobosco. Qualsiasi area di terreno all'interno del cubo che sia coperta di erba o sottobosco diventa terreno difficile per i suoi nemici.
Alberi. All'inizio di ogni turno dell'incantatore, ogni suo nemico situato entro 3 metri da un qualsiasi albero all'interno del cubo deve superare un tiro salvezza su Destrezza, altrimenti subisce 4d6 danni taglienti dai rami sferzanti.
Radici e Rampicanti. Alla fine di ogni turno dell'incantatore, una creatura a sua scelta che si trovi sul terreno all'interno del cubo deve superare un tiro salvezza su Forza, altrimenti diventa trattenuta finché l'incantesimo non termina. Una creatura trattenuta può usare un'azione per effettuare una prova di Forza (Atletica) contro la CD del tiro salvezza dell'incantesimo; se ha successo, l'effetto su di lei termina.
Rocce. Come azione bonus nel proprio turno, l'incantatore può fare in modo che una roccia smossa all'interno del cubo si scagli contro una creatura situata all'interno del cubo e che egli sia in grado di vedere. L'incantatore effettua un attacco con incantesimo a distanza contro il bersaglio. Se lo colpisce, il bersaglio subisce 3d8 danni contundenti non magici e deve superare un tiro salvezza su Forza, altrimenti cade a terra prono.

COLPO DEL VENTO D'ACCIAIO
Evocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: S, M (un'arma da mischia del valore di almeno 1 ma) 
Durata: Istantanea
L'incantatore agita nell'aria l'arma usata per lanciare l'incantesimo e poi svanisce per colpire come il vento. L'incantatore sceglie fino a cinque creature situate entro gittata e che egli sia in grado di vedere. Effettua un attacco con incantesimo in mischia contro ogni bersaglio. Se colpito, un bersaglio subisce 6d10 danni da forza.
L'incantatore può poi teletrasportarsi fino a uno spazio libero che sia in grado di vedere e sia situato entro 1,5 metri da uno dei bersagli che ha colpito o mancato.

COLPO DELLO ZEFIRO
Trasmutazione di 1 ° livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V 
Durata: Concentrazione, fino a 1 minuto
L'incantatore si muove come il vento. Finché l'incantesimo non termina, il suo movimento non provoca attacchi di opportunità.
Una volta, prima che l'incantesimo termini, l'incantatore può conferire a se stesso vantaggio in un tiro per colpire con un'arma durante il proprio turno. Quell'attacco infligge ld8 danni da forza extra se colpisce. Che l'attacco colpisca o manchi, la velocità base sul terreno dell'incantatore aumenta di 9 metri fino alla fine di quel turno.

COLTELLO DI GHIACCIO
Evocazione di 1 ° livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: S, M (una goccia d'acqua o un frammento di ghiaccio) 
Durata: Istantanea
L'incantatore crea un frammento di ghiaccio e lo scaglia contro una creatura entro gittata, effettuando un attacco con incantesimo a distanza contro il bersaglio. Se lo colpisce, il bersaglio subisce ldlO danni perforanti. Che colpisca o manchi il bersaglio, il frammento poi esplode. Il bersaglio e ogni creatura entro 1,5 metri dal punto in cui il ghiaccio è esploso devono superare un tiro salvezza su Destrezza, altrimenti subiscono 2d6 danni da freddo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 2 ° livello o superiore, i danni da freddo aumentano di ld6 per ogni slot di livello superiore al 1°.

CONTROLLARE FIAMME
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: S 
Durata: Istantanea o 1 ora (vedi sotto)
L'incantatore sceglie una fiamma non magica situata entro gittata, che egli sia in grado di vedere e che sia contenuta in un cubo con spigolo di 1,5 metri. L'incantatore la influenza in uno dei modi seguenti:
L'incantatore espande istantaneamente la fiamma di 1,5 metri in una direzione, purché nella nuova direzione sia disponibile della legna o altro materiale combustibile. L'incantatore estingue istantaneamente le fiamme all'interno del cubo.
L'incantatore raddoppia o dimezza l'area di luce intensa e luce fioca proiettata dalla fiamma, cambia il suo colore o entrambe le cose. Il cambiamento dura per 1 ora. L'incantatore fa in modo che alcune forme semplici (come la vaga forma di una creatura, un oggetto inanimato o un luogo) compaiano tra le fiamme e si animino a suo piacimento. Le forme permangono per 1 ora.
Se l'incantatore lancia questo incantesimo più volte, può mantenere attivi fino a tre dei suoi effetti non istantanei contemporaneamente e può congedare uno di questi effetti con un'azione.

CONTROLLARE VENTI
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 ora
L'incantatore prende il controllo dell'aria all'interno di un cubo con spigolo di 30 metri situato entro gittata e che egli sia in grado di vedere. Quando l'incantatore lancia l'incantesimo, sceglie uno degli effetti seguenti. L'effetto permane per la durata dell'incantesimo, a meno che l'incantatore non usi la sua azione in un turno successivo per passare a un effetto diverso. Può anche usare la sua azione per interrompere temporaneamente un effetto o per riavviare un effetto interrotto.
Folate. All'interno del cubo, il vento prende velocità e soffia costantemente in una direzione orizzontale a scelta dell'incantatore, che può scegliere anche l'intensità del vento: calmo, moderato o forte. Se il vento è moderato o forte, gli attacchi delle armi a distanza che vi passano attraverso o sferrati contro i bersagli all'interno del cubo subiscono svantaggio ai tiri per colpire. Se il vento è forte, qualsiasi creatura che si muove controvento deve spendere 30 cm extra di movimento per ogni 30 cm di movimento effettuati.
Corrente Discendente. L'incantatore genera una sostenuta raffica di vento forte che soffia verso il basso dall'alto del cubo. Gli attacchi delle armi a distanza che passano attraverso il cubo o sferrati contro i bersagli al suo interno subiscono svantaggio ai tiri per colpire. Una creatura deve effettuare un tiro salvezza su Forza se vola all'interno del cubo per la prima volta in un turno o inizia il proprio turno al suo interno volando. Se fallisce il tiro salvezza, la creatura si ritrova prona.
Corrente Ascendente. L'incantatore genera una sostenuta raffica di vento che soffia verso l'alto dal basso del cubo. Le creature che terminano una caduta all'interno del cubo subiscono soltanto metà danni dalla caduta. Quando una creatura nel cubo effettua un salto in alto, può saltare fino a 3 metri più in alto rispetto al normale.

CORONA DI STELLE
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S 
Durata: 1 ora
Sette scintille di luce simili a stelle appaiono e orbitano attorno alla testa dell'incantatore finché l'incantesimo non termina. L'incantatore può usare un'azione bonus per inviare una delle scintille sfrecciando verso una creatura o un oggetto situato entro 36 metri da lui. Quando lo fa, effettua un attacco con incantesimo a distanza. Se colpisce, il bersaglio subisce 4dl2 danni radiosi. Sia che colpisca, sia che manchi, la scintilla è consumata. L'incantesimo termina anticipatamente se l'incantatore consuma l'ultima scintilla.
Se all'incantatore rimangono quattro o più scintille, esse proiettano luce intensa nel raggio di 9 metri e luce fioca per altri 9 metri. Se all'incantatore rimangono da una a tre scintille, esse proiettano luce fioca nel raggio di 9 metri.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 8 o superiore, il numero di scintille create aumenta di due per ogni slot di livello superiore al 7'.

CREARE FALÒ
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore crea un falò su un punto del terreno situato entro gittata e che egli sia in grado di vedere. Finché l'incantesimo non termina, il falò occupa un cubo con spigolo di 1,5 metri. Ogni creatura nello spazio del falò nel momento in cui l'incantatore lancia l'incantesimo deve superare un tiro salvezza su Destrezza, altrimenti subisce ld8 danni da fuoco. Una creatura deve effettuare il tiro salvezza anche quando entra nello spazio del falò per la prima volta in un turno o vi termina il proprio turno.
Il falò incendia gli oggetti infiammabili entro l'area che non siano indossati o trasportati.
I danni dell'incantesimo aumentano di ld8 quando ° l'incantatore raggiunge il 5 livello (2d8), 1'11' livello (3d8) e ° il 17 livello (4d8).

CREARE OMUNCOLO
Trasmutazione di 6 livello
Tempo di Lancio: 1 ora
Gittata: Contatto
Componenti: V, S, M (argilla, cenere e radice di mandragora, che l'incantesimo consuma tutte, e un pugnale ingioiellato del valore di almeno 1.000 mo) 
Durata: Istantanea
Recitando una complicata formula, l'incantatore si taglia con un pugnale ingioiellato, subendo 2d4 danni perforanti che non possono essere ridotti in alcun modo. Poi versa il suo sangue sulle altre componenti dell'incantesimo e le tocca, trasformandole in uno speciale costrutto chiamato omuncolo.
Le statistiche dell'omuncolo sono riportate nel Monster Manual. L'omuncolo è un fedele compagno dell'incantatore e muore se l'incantatore muore. Ogni volta che l'incantatore completa un riposo lungo, può spendere fino a metà dei suoi Dadi Vita se l'omuncolo si trova sul suo stesso piano d'esistenza. Quando lo fa, tira ogni dado e vi aggiunge il suo modificatore di Costituzione. Il massimo dei punti ferita dell'incantatore è ridotto di quel totale e sia il massimo dei punti ferita che i punti ferita attuali dell'omuncolo aumentano di quel totale. Questo procedimento non può ridurre l'incantatore a meno di 1 punto ferita e i cambiamenti ai punti ferita dell'incantatore e dell'omuncolo terminano quando l'incantatore completa il suo riposo lungo successivo. La riduzione al massimo dei punti ferita dell'incantatore non può essere rimossa in alcun modo prima di allora, se non dalla morte dell'omuncolo.
L'incantatore può possedere solo un omuncolo alla volta. Se lancia questo incantesimo mentre il suo omuncolo è vivo, l'incantesimo fallisce.

DANZA MACABRA
Necromanzia di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 ora
Filamenti di energia oscura si sprigionano dalle dita dell'incantatore e raggiungono fino a cinque cadaveri di taglia Media o Piccola situati entro gittata e che l'incantatore sia in grado di vedere. Ogni cadavere si alza immediatamente e diventa un non morto. L'incantatore può decidere se si tratta di uno zombi o di uno scheletro
(le statistiche degli zombi e degli scheletri sono contenute nel Monster Manual). Ognuno di qu�sti non morti ottiene un bonus ai tiri per colpire e ai tiri per i danni pari al modificatore di caratteristica da incantatore del personaggio.
L'incantatore può usare un'azione bonus per comandare mentalmente le creature ricavate da questo incantesimo, impartendo lo stesso comando a tutte. Per ricevere il comando, una creatura deve trovarsi entro 18 metri dall'incantatore. È l'incantatore a decidere quale azione le creature intraprendono e dove si muoveranno durante il loro turno successivo; in alternativa, l'incantatore può impartire un comando generale, come per esempio sorvegliare una camera o proteggere un corridoio dai suoi nemici. Se l'incantatore non impartisce alcun comando, le creature non fanno altro che difendersi dalle creature ostili. Una volta ricevuto un ordine, le creature continuano a seguirlo finché non completano il loro compito.
Le creature sono sotto il controllo dell'incantatore finché l'incantesimo non termina, dopodiché tornano a essere inanimate.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 6 livello o superiore, anima fino a due cadaveri aggiuntivi per ogni slot di livello superiore al 5 °.

DARDO DI CAOS
Invocazione di 1 ° livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore scaglia una massa tremolante e gorgogliante di energia caotica contro una creatura entro gittata, effettuando un attacco con incantesimo a distanza contro il bersaglio. Se lo colpisce, il bersaglio subisce 2d8 + ld6 danni. L'incantatore sceglie uno dei d8. Il risultato ottenuto col tiro di quel dado determina il tipo di danno dell'attacco, come indicato di seguito.
d8
1 2 3 4 5 6 7 8
Tipo di Danno
Acido Forza Freddo Fulmine Fuoco Psichico Tuono Veleno
Se l'incantatore ottiene lo stesso risultato con entrambi i d8, l'energia caotica balza dal bersaglio a una creatura diversa a scelta dell'incantatore situata entro 9 metri da esso. L'incantatore effettua un nuovo tiro per colpire contro il nuovo bersaglio e un nuovo tiro per i danni, che potrebbe far balzare di nuovo l'energia caotica.
Una creatura può essere bersagliata soltanto una volta da ogni lancio di questo incantesimo.
Ai LiveJJi Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 2 livello o superiore, ogni bersaglio subisce ld6 danni extra del tipo ottenuto con il tiro per ogni slot di livello superiore al 1 °.

DEBILITAZIONE
Necromanzia di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
Un tentacolo di densa oscurità si protende dall'incantatore e tocca una creatura situata entro gittata e che egli sia in grado di vedere per prosciugare la sua energia vitale. Il bersaglio deve effettuare un tiro salvezza su Destrezza; se lo supera, subisce 2d8 danni necrotici e l'incantesimo termina. Se lo fallisce, il bersaglio subisce 4d8 danni necrotici e, finché l'incantesimo non termina, l'incantatore può usare la sua azione a ogni suo turno per infliggere automaticamente 4d8 danni necrotici al bersaglio. L'incantesimo termina se l'incantatore usa la sua azione per fare qualsiasi altra cosa, se il bersaglio si trova per qualsiasi motivo al di fuori della gittata dell'incantesimo o se il bersaglio beneficia di copertura totale dall'incantatore.
Ogni volta che l'incantesimo infligge danni a un bersaglio, l'incantatore recupera un ammontare di punti ferita pari alla metà dei danni necrotici subiti dal bersaglio.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 6 livello o superiore, i danni aumentano di ld8 per ogni slot incantesimo superiore al 5 °.

DIAVOLETTO DI POLVERE
Evocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (un pizzico di polvere) 
Durata: Concentrazione, fino a 1 minuto
I.:incantatore sceglie un cubo d'aria con spigolo di 1,5 metri libero, situato entro gittata e che egli sia in grado di vedere. Una forza elementale simile a un diavoletto di polvere compare nel cubo e permane per la durata dell'incantesimo.
Ogni creatura che termina il suo turno entro 1,5 metri dal diavoletto di polvere deve effettuare un tiro salvezza su Forza; se lo fallisce, subisce ld8 danni contundenti e viene spinta lontano di 3 metri, mentre se lo supera, subisce la metà di quei danni e non viene spinta.
Come azione bonus, l'incantatore può muovere il diavoletto di polvere fino a 9 metri in qualsiasi direzione. Se il diavoletto di polvere si muove su sabbia, polvere, terriccio o ghiaia, risucchia il materiale e forma attorno a se stesso una nube di detriti del raggio di 3 metri che permane fino all'inizio del prossimo turno dell'incantatore. L'area occupata dalla nube è pesantemente oscurata.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello o superiore, i danni aumentano di ld8 per ogni slot di livello superiore al 2°.

DISPERDERE
Evocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V 
Durata: Istantanea
I.:aria vibra attorno a un massimo di cinque creature a scelta dell'incantatore, situate entro gittata e che egli sia in grado di vedere. Una creatura non consenziente deve superare un tiro salvezza su Saggezza per resistere a questo incantesimo. I.:incantatore teletrasporta ogni bersaglio influenzato in uno spazio libero situato entro 36 metri da sé e che egli sia in grado di vedere. Quello spazio deve trovarsi a terra o su un piano.

DRAGO ILLUSORIO
Illusione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: S 
Durata: Concentrazione, fino a 1 minuto
Radunando filamenti di sostanza d'ombra dalla Coltre Oscura, l'incantatore crea un drago Enorme fatto d'ombra in uno spazio libero entro gittata che egli sia in grado di vedere. I.:illusione permane per la durata dell'incantesimo e occupa il suo spazio come se fosse una creatura.
Quando l'illusione compare, ogni nemico dell'incantatore che è in grado di vederla deve superare un tiro salvezza su Saggezza, altrimenti sarà spaventato da essa per 1 minuto. Se una creatura spaventata termina il suo turno in un luogo dove non possiede linea di vista fino all'illusione, può ripetere il tiro salvezza; se lo supera, l'effetto su se stessa termina.
Con un'azione bonus nel proprio turno, l'incantatore può muovere l'illusione di un massimo di 18 metri. In qualsiasi punto durante quel movimento, l'incantatore può fare esalare all'illusione una scarica di energia in un cono di 18 metri che ha origine dal suo spazio. Quando l'incantatore crea il drago, sceglie un tipo di danno: acido, freddo, fulmine, fuoco, necrotico o veleno. Ogni creatura nel cono deve effettuare un tiro salvezza su Intelligenza; se lo fallisce, subisce 7d6 danni del tipo scelto, mentre se lo supera, subisce la metà di quei danni.
L'illusione è tangibile grazie alla sostanza d'ombra usata per crearla, ma gli attacchi la mancano automaticamente, supera tutti i tiri salvezza ed è immune a tutti i danni e a tutte le condizioni. Una creatura che usa un'azione per esaminare il drago può determinare che si tratta di un'illusione se effettua con successo una prova di Intelligenza (Indagare) contro la CD del tiro salvezza dell'incantesimo. Se una creatura riconosce che è un'illusione, può vedere attraverso di essa e dispone di vantaggio ai tiri salvezza contro il suo soffio.

ERUZIONE TERRESTRE
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un frammento d'ossidiana) 
Durata: Istantanea
L'incantatore sceglie un punto sul terreno situato entro gittata e che egli sia in grado di vedere. Una fontana di terra e di pietre turbinanti sgorga in un cubo con spigolo di 6 metri centrato su quel punto. Ogni creatura in quell'area deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 3dl2 danni contundenti, mentre se lo supera, subisce la metà di quei danni. Inoltre, il terreno in quell'area diventa terreno difficile finché non viene sgombrato. Ogni porzione quadrata con lato di 1,5 metri dell'area richiede almeno 1 minuto per essere sgombrata a mano.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello o superiore, i danni aumentano di ld12 per ogni slot di livello superiore al 3°.

EVOCA DEMONE MAGGIORE
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una fiala di sangue di un umanoide ucciso entro le ultime 24 ore) 
Durata: Concentrazione, fino a 1 ora
Pronunciando empie parole, l'incantatore evoca un demone dal caos dell'Abisso. Sceglie il tipo del demone, che deve avere un grado di sfida pari o inferiore a 5, come un demone d'ombra o un barlgura. Il demone compare in uno spazio libero situato entro gittata che l'incantatore sia in grado di vedere e scompare quando scende a O punti ferita o quando l'incantesimo termina.
Il DM tira per l'iniziativa del demone, che agisce nei propri turni. Quando l'incantatore lo evoca e a ogni proprio turno successivo, può impartirgli un comando verbale (che non richiede alcuna azione da parte sua), dicendo al demone cosa dovrà fare nel suo turno successivo. Se l'incantatore non impartisce alcun comando, il demone usa il suo turno per attaccare qualsiasi creatura entro portata che lo abbia attaccato.
Alla fine di ogni proprio turno, il demone effettua un tiro salvezza su Carisma, ma subisce svantaggio a questo tiro salvezza se l'incantatore pronuncia il vero nome del demone. Se il demone fallisce il tiro salvezza, continua a obbedire all'incantatore. Se lo supera, il controllo dell'incantatore termina per il resto della durata e il demone usa i suoi turni per inseguire e attaccare le creature più vicine che non siano demoni al meglio delle sue capacità. Se l'incantatore smette di concentrarsi sull'incantesimo prima della fine della sua durata, un demone non controllato non scompare per ld6 round se possiede ancora punti ferita.
Come parte del lancio dell'incantesimo, l'incantatore può tracciare un cerchio sul terreno con il sangue usato come componente materiale. Il cerchio è abbastanza grande da contenere lo spazio dell'incantatore. Finché l'incantesimo dura, il demone evocato non può attraversare il cerchio o danneggiarlo e non può bersagliare nessuno al suo interno. L'uso della componente materiale in questo modo la consuma al termine dell'incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 5 ° livello o superiore, il grado di sfida aumenta di 1 per ogni slot di livello superiore al 4°.

EVOCA DEMONI MINORI
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una fiala di sangue di un umanoide ucciso entro le ultime 24 ore) 
Durata: Concentrazione, fino a 1 ora
Pronunciando empie parole, l'incantatore evoca alcuni demoni dal caos dell'Abisso. Si tira sulla tabella seguente per determinare cosa compare.
dG
Demoni Evocati
l-2 3 -4 5-6
Due demoni con grado di sfida pari o inferiore al Quattro demoni con grado di sfida pari o inferiore al/2 Otto demoni con grado di sfida pari o inferiore al/4
Il DM sceglie i demoni, come i mani o i dretch, e l'incantatore sceglie gli spazi liberi entro gittata che egli sia in grado di vedere dove essi compariranno. Un demone evocato scompare quando scende a O punti ferita o quando l'incantesimo termina.
I demoni sono ostili a tutte le creature, incluso l'incantatore. Il DM tira l'iniziativa per i demoni evocati in gruppo, che agiscono al loro turno. I demoni inseguono e attaccano le creature più vicine che non siano demoni al meglio delle loro capacità.
Come parte del lancio dell'incantesimo, l'incantatore può tracciare un cerchio sul terreno con il sangue usato come componente materiale. Il cerchio è abbastanza grande da contenere lo spazio dell'incantatore. Finché l'incantesimo dura, i demoni evocati non possono attraversare il cerchio o danneggiarlo e non possono bersagliare nessuno al suo interno. L'uso della componente materiale in questo modo la consuma al termine dell'incantesimo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 6 ° o 7 ° livello, evoca il doppio dei demoni. Se lo lancia usando uno slot ° incantesimo di 8 ° o 9 livello, evoca il triplo dei demoni.

FEROCIA PRIMORDIALE
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: S 
Durata: Istantanea
L'incantatore incanala la magia primordiale e sviluppa denti o unghie affilate con cui sferrare un attacco corrosivo. L'incantatore effettua un attacco con incantesimo in mischia contro una creatura situata entro 1,5 metri da lui. Se colpisce, il bersaglio subisce ldlO danni da acido. Dopo che l'incantatore ha effettuato questo attacco, i suoi denti o le sue unghie tornano alla normalità.
I danni dell'incantesimo aumentano di ldlO quando l'incantatore raggiunge il 5° livello (2d10), 1'11° livello (3d10) ° e il 17 livello (4d10).

FLUSSO DI ENERGIA NEGATIVA
Necromanzia di 5 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, M (un osso spezzato e un quadretto di seta nera) 
Durata: Istantanea
L'incantatore invia dei filamenti di energia negativa verso una creatura situata entro gittata e che egli sia in grado di vedere. Se non è un non morto, il bersaglio deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce 5d12 danni necrotici, mentre se lo supera, subisce la metà di quei danni. Un bersaglio ucciso da questi danni si anima come zombi all'inizio del turno successivo dell'incantatore. Lo zombi persegue qualsiasi creatura che sia in grado di vedere a lui più vicina. Le statistiche dello zombi sono contenute nel Monster Manual.
Se l'incantatore bersaglia un non morto con questo incantesimo, il bersaglio non effettua un tiro salvezza. L'incantatore tira invece 5dl2 e il bersaglio ottiene la metà del totale come punti f e rita temporanei.

FOLATA
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore stringe il pugno nell'aria e la obbliga a generare uno degli effetti seguenti in un punto situato entro gittata e che egli sia in grado di vedere:
Una creatura di taglia Media o inferiore a scelta dell'incantatore deve superare un tiro salvezza su Forza, altrimenti sarà spinta lontano da lui di un massimo di 1,5 metri.
L'incantatore genera una piccola raffica di vento in grado di muovere un oggetto che non sia né trattenuto né trasportato e che non pesi più di 2,5 kg. L'oggetto viene spinto lontano da lui di un massimo di 3 metri. Non viene spinto con forza sufficiente da infliggere danni. L'incantatore crea un effetto sensoriale innocuo usando l'aria, come per esempio un fruscio di foglie, un'imposta che sbatte o una brezza che agita leggermente le sue vesti.

FORTEZZA POSSENTE
Evocazione di 8 livello
Tempo di Lancio: 1 minuto
Gittata: 1,5 km
Componenti: V, S, M (un diamante del valore di almeno 500 mo, che l'incantesimo consuma) 
Durata: Istantanea
Una fortezza di pietra prorompe da un'area quadrata di terreno a scelta dell'incantatore, situata entro gittata e che l'incantatore sia in grado di vedere. L'area misura 36 metri su ogni lato e deve essere sgombra da edifici o altre strutture. Ogni creatura nell'area viene sollevata in alto senza subire danni man mano che la fortezza emerge.
La fortezza è dotata di quattro torrette a base quadrata, ognuna con lato di 6 metri e alta 9 metri, situate ai quattro angoli. Le torrette sono collegate l'una all'altra da muri di pietra lunghi ognuno 24 metri, che formano un'area chiusa. Ogni muro è spesso 30 cm ed è composto da pannelli laghi 3 metri e alti 6 metri: ogni pannello è contiguo ad altri due pannelli o a un altro pannello e una torretta. L'incantatore può collocare fino a quattro porte di pietra lungo le mura esterne della fortezza.
Una piccola rocca si erge all'interno dell'area chiusa.
La rocca ha una base quadrata con lato di 15 metri ed è composta da tre piani, ognuno alto 3 metri. Ogni piano può essere suddiviso nel numero di stanze che l'incantatore desidera, purché ogni stanza abbia il lato di almeno 1,5 metri. I piani della rocca sono collegati da scalinate di pietre, le pareti sono spesse 15 cm e le camere interne possono essere dotate di porte di pietra o di arcate aperte, a scelta dell'incantatore. La rocca è ammobiliata e decorata come l'incantatore preferisce e contiene cibo sufficiente a servire un banchetto di nove portate per un massimo di 100 persone al giorno. I mobili, il cibo e gli altri oggetti creati da questo incantesimo si sbriciolano in polvere se rimossi dalla fortezza.
Un personale composto da cento servitori invisibili obbedisce a ogni comando impartito dalle creature designate dall'incantatore al momento del lancio dell'incantesimo. Ogni servitore funziona come se fosse stato creato dall'incantesimo servitore inosservato.
Le mura, le torrette e la rocca sono tutte fatte di pietra che può essere danneggiata. Ogni sezione di 3 metri per 3 metri di pietra possiede CA 15 e 30 punti f e rita per ogni 2,5 cm di spessore. È immune ai danni psichici e da veleno. Se una sezione di pietra scende a O punti ferita, è distrutta e potrebbe provocare l'instabilità e il crollo delle sezioni ad essa collegate, a discrezione del DM.
Dopo 7 giorni, o quando l'incantatore lancia questo incantesimo altrove, la fortezza crolla senza infliggere danni e sprofonda nel terreno, depositando le creature al suo interno sul terreno senza nuocere.
Lanciando questo incantesimo nello stesso punto una volta ogni 7 giorni per un anno, la fortezza diventa permanente.

FRECCE INFUOCATE
Trasmutazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S 
Durata: Concentrazione, fino a 1 ora
L'incantatore tocca una faretra contenente frecce o quadrelli. Quando un bersaglio è colpito da un attacco con arma a distanza che usa una munizione estratta dalla faretra, quel bersaglio subisce ld6 danni da fuoco extra. La magia dell'incantesimo sulla munizione termina quando colpisce o manca e l'incantesimo termina quando dodici munizioni sono state estratte dalla faretra.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello o superiore, il numero di munizioni che può influenzare con questo incantesimo aumenta di due per ogni slot di livello superiore al 3°.

FULGORE NAUSEANTE
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S 
Durata: Concentrazione, fino a 10 minuti
Una fioca luce verdastra si irradia entro una sfera con raggio di 9 metri centrata su un punto a scelta dell'incantatore entro gittata. La luce si diffonde oltre gli angoli e dura finché l'incantesimo non termina.
Quando una creatura entra nell'area dell'incantesimo per la prima volta in un turno o vi inizia il proprio turno, quella creatura deve superare un tiro salvezza su Costituzione, altrimenti subisce 4d10 danni radiosi, subisce un livello di indebolimento ed emette una fioca luce verdastra in un raggio di 1,5 metri. Questa luce impedisce alla creatura di beneficiare dell'invisibilità. La luce e gli eventuali livelli di indebolimento causati da questo incantesimo se ne vanno quando l'incantesimo termina.

GABBIA DELL'ANIMA
Necromanzia di 6 livello
Tempo di Lancio: 1 reazione, che l'incantatore effettua quando vede morire un umanoide entro 18 metri da sé 
Gittata: 18 metri
Componenti: V, S, M (una minuscola gabbia d'argento del valore di 100 mo) 
Durata: 8 ore
Questo incantesimo ghermisce l'anima di un umanoide al momento della morte e la intrappola nella minuscola gabbia usata come componente materiale. Un'anima rubata rimane all'interno della gabbia finché l'incantesimo non termina o finché l'incantatore non distrugge la gabbia, atto che termina l'incantesimo. Finché c'è un'anima intrappolata nella gabbia, l'incantatore può sfruttarla nei vari modi descritti di seguito. Un'anima intrappolata può essere usata fino a un massimo di sei volte. Una volta sfruttata un'anima per la sesta volta, essa viene liberata e l'incantesimo termina. Mentre un'anima è intrappolata, l'umanoide morto a cui essa apparteneva non può essere riportato in vita.
Rubare Vita. L'incantatore può usare un'azione bonus per risucchiare vigore dall'anima e recuperare 2d8 punti ferita.
Interrogare Anima. L'incantatore pone all'anima una domanda (non è richiesta alcuna azione) e riceve una breve risposta telepatica, che può capire a prescindere dal linguaggio utilizzato. L'anima sa solo ciò che sapeva quando era in vita, ma deve rispondere onestamente e al meglio delle sue capacità. La risposta può essere lunga una o due frasi al massimo e può essere criptica.
Esperienza in Prestito. L'incantatore può usare un'azione bonus per rafforzarsi con le esperienze di vita dell'anima, disponendo di vantaggio al suo prossimo tiro per colpire, prova di caratteristica o tiro salvezza. Se
non usa questo beneficio prima dell'inizio del suo turno successivo, tale beneficio va perduto.
Occhi dei Morti. L'incantatore può usare un'azione per nominare un luogo che l'umanoide ha visto in vita sua, creando in quel posto un sensore invisibile, purché il luogo si trovi sul suo stesso piano d'esistenza attuale. Il sensore rimane fintanto che l'incantatore si concentra, fino a 10 minuti (come se si concentrasse su un incantesimo). L'incantatore riceve informazioni visive e uditive dal sensore come se si trovasse in quello spazio e usasse i propri sensi.
Una creatura in grado di vedere il sensore (per esempio, una creatura che usi vedere invisibilità o vista pura) vede un'immagine trasparente dell'umanoide tormentato la cui anima è stata ingabbiata.

GUARDIANO DELLA NATURA
Trasmutazione di 4 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V 
Durata: Concentrazione, fino a 1 minuto
Uno spirito della natura risponde al richiamo dell'incantatore e lo trasforma in un potente guardiano. La trasformazione dura finché l'incantesimo non termina. L'incantatore può scegliere di assumere una delle forme seguenti: Bestia Primordiale o Grande Albero.
Bestia Primordiale. Il corpo dell'incantatore si ricopre della pelliccia di una bestia, i suoi lineamenti diventano ferini e l'incantatore ottiene i benefici seguenti:
La sua velocità base sul terreno aumenta di 3 metri. Ottiene scurovisione entro un raggio di 36 metri. Dispone di vantaggio ai tiri per colpire basati su Forza. I suoi attacchi con le armi da mischia infliggono ld6 danni da forza extra se colpiscono.
Grande Albero. La pelle dell'incantatore diventa simile a corteccia, uno strato di foglie cresce tra i suoi capelli e l'incantatore ottiene i benefici seguenti:
Ottiene 10 punti ferita temporanei.
Dispone di vantaggio ai tiri salvezza su Costituzione. Dispone di vantaggio ai tiri per colpire basati su Destrezza e su Saggezza.
Mentre si trova a terra, il terreno entro 4,5 metri da lui è considerato terreno difficile per i suoi nemici.

IMMOLAZIONE
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V 
Durata: Concentrazione, fino a 1 minuto
Una creatura situata entro gittata e che l'incantatore sia in grado di vedere viene avviluppata dalle fiamme. Il bersaglio deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 8d6 danni da fuoco, mentre se lo supera, subisce la metà di quei danni. Inoltre, in caso di tiro salvezza fallito, il bersaglio brucia per la durata dell'incantesimo. Un bersaglio in fiamme proietta luce intensa nel raggio di 9 metri e luce fioca per altri 9 metri. Alla fine di ogni suo turno, il bersaglio ripete il tiro salvezza. Subisce 4d6 danni da fuoco in caso di tiro salvezza fallito, mentre l'incantesimo termina in caso di tiro salvezza riuscito. Queste fiamme magiche non possono essere estinte tramite mezzi non magici.
Se i danni di questo incantesimo uccidono un bersaglio, il bersaglio è ridotto in cenere.

INCUTI PAURA
Necromanzia di 1 ° livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V 
Durata: Concentrazione, fino a 1 minuto
L'incantatore risveglia la percezione della mortalità in una creatura situata entro gittata e che egli sia in grado di vedere. Un costrutto o un non morto è immune a questo effetto. Il bersaglio deve superare un tiro salvezza su Saggezza, altrimenti diventa spaventato dall'incantatore finché l'incantesimo non termina. Il bersaglio spaventato può ripetere il tiro salvezza alla fine di ogni suo turno, terminando l'effetto su se stesso in caso di successo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 2 ° livello o superiore, può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al l Le creature devono trovarsi entro 9 metri l'una dall'altra quando l'incantatore le bersaglia.
0.

INFESTAZIONE
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una pulce viva) 
Durata: Istantanea
L'incantatore fa apparire temporaneamente una nube di termiti, pulci e altri parassiti su una creatura situata entro gittata e che egli sia in grado di vedere. Il bersaglio deve superare un tiro salvezza su Costituzione, altrimenti subisce ld6 danni da veleno e si muove di 1,5 metri in una direzione casuale se è in grado di muoversi e la sua velocità è di almeno 1,5 metri. Si tira un d4 per la direzione: 1, nord; 2, sud; 3, est; o 4, ovest. Questo movimento non provoca attacchi di opportunità e, se la direzione indicata dal tiro è bloccata, il bersaglio non si muove.
I danni dell'incantesimo aumentano di ld6 quando l'incantatore raggiunge il 5 ° livello (2d6), 1'11° livello (3d6) e il 17 ° livello (4d6).

INTERDIZIONE PRIMORDIALE
Abiurazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore possiede resistenza ai danni da acido, freddo, fulmine, fuoco e tuono per la durata dell'incantesimo.
Quando l'incantatore subisce danni di uno di quei tipi, può usare la sua reazione per ottenere immunità a quel tipo di danno, inclusi i danni innescanti. Se lo fa, le resistenze terminano e l'incantatore possiede l'immunità fino alla fine del suo turno successivo, quando l'incantesimo termina.

INVESTITURA DEL GHIACCIO
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S 
Durata: Concentrazione, fino a 10 minuti
Finché l'incantesimo non termina, il corpo dell'incantatore è ricoperto da una patina di ghiaccio e l'incantatore ottiene i benefici seguenti:
L'incantatore è immune ai danni da freddo e possiede resistenza ai danni da fuoco.
L'incantatore può muoversi su un terreno difficile creato dal ghiaccio o dalla neve senza spendere movimento extra.
Il terreno in un raggio di 3 metri attorno all'incantatore è ghiacciato ed è considerato terreno difficile per tutte le creature ad eccezione di lui. Il raggio si sposta assieme all'incantatore.
L'incantatore può usare la sua azione per creare un cono di 4,5 metri di vento gelido che si estende dalla sua mano tesa in una direzione a sua scelta. Ogni creatura nel cono deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce 4d6 danni da freddo, mentre se lo supera, subisce la metà di quei danni. Una creatura che fallisce il suo tiro salvezza contro questo effetto ha velocità dimezzata fino all'inizio del turno successivo dell'incantatore.

INVESTITURA DEL VENTO
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S 
Durata: Concentrazione, fino a 10 minuti
Finché l'incantesimo non termina, il vento turbina attorno all'incantatore, che ottiene i benefici seguenti:
Gli attacchi con arma a distanza effettuati contro l'incantatore subiscono svantaggio al tiro per colpire. L'incantatore ottiene una velocità di volare pari a 18 metri. Se è ancora in volo quando l'incantesimo termina, cade, a meno che non sia in grado di impedirlo in qualche modo. L'incantatore può usare la sua azione per creare un cubo con spigolo di 4,5 metri di vento turbinante centrato su un punto situato entro 18 metri dall'incantatore e che egli sia in grado di vedere. Ogni creatura in quell'area deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce 2d10 danni contundenti, mentre se lo supera, subisce la metà di quei danni. Se una creatura di taglia Grande o inferiore fallisce il tiro salvezza, quella creatura viene anche spinta di un massimo di 3 metri lontano dal centro del cubo.

INVESTITURA DELLA FIAMMA
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S 
Durata: Concentrazione, fino a 10 minuti
Una cortina di fiamme corre lungo il corpo dell'incantatore, diffondendo luce intensa in un raggio di 9 metri e luce fioca per 9 metri aggiuntivi per la durata dell'incantesimo. Le fiamme non infliggono alcun danno all'incantatore. Finché l'incantesimo non termina, l'incantatore ottiene i benefici seguenti:
L'incantatore è immune ai danni da fuoco e possiede resistenza ai danni da freddo.
Ogni creatura che giunge entro 1,5 metri dall'incantatore per la prima volta in un turno o termina il suo turno in quella posizione subisce ldlO danni da fuoco. L'incantatore può usare la sua azione per creare una linea di fuoco lunga 4,5 metri e larga 1,5 metri, che si estende da lui in una direzione a sua scelta. Ogni creatura sulla linea deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 4d8 danni da fuoco, mentre se lo supera, subisce la metà di quei danni.

INVESTITURA DELLA PIETRA
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S 
Durata: Concentrazione, fino a 10 minuti
Finché l'incantesimo non termina, il corpo dell'incantatore si ricopre di frammenti rocciosi e l'incantatore ottiene i benefici seguenti:
L'incantatore possiede resistenza ai danni contundenti, perforanti e taglienti da attacchi non magici. L'incantatore può usare la sua azione per creare un piccolo terremoto sul terreno in un raggio di 4,5 metri incentrato su di sé. Le altre creature su quel terreno devono superare un tiro salvezza su Destrezza, altrimenti cadono a terra prone. L'incantatore può muoversi su un terreno difficile fatto di terra o di pietra senza spendere movimento extra. Può muoversi attraverso la terra solida o la pietra come se fosse aria e senza destabilizzarla, ma non può terminarvi il suo movimento. Se lo fa, viene espulso nello spazio libero più vicino, questo incantesimo termina e l'incantatore è stordito fino alla fine del suo turno successivo.

INVULNERABILITÀ
Abiurazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (un piccolo frammento di adamantio del valore di almeno 500 mo, che l'incantesimo consuma) 
Durata: Concentrazione, fino a 10 minuti
L'incantatore è immune a tutti i danni finché l'incantesimo non termina.

LAMA D'OMBRA
Illusione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore intreccia assieme dei filamenti d'ombra per creare una spada di oscurità solidificata nella sua mano. Questa spada magica dura finché l'incantesimo non termina. Conta come arma da mischia semplice in cui l'incantatore possiede competenza. Infligge 2d8 danni psichici se colpisce e possiede le proprietà accurata, leggera e da lancio (gittata 6/18). Inoltre, quando l'incantatore usa la spada per attaccare un bersaglio che si trova nella luce fioca o nell'oscurità, ottiene vantaggio al tiro per colpire.
Se l'incantatore lascia cadere l'arma o la lancia, essa si dissipa alla fine del turno. Da allora in poi, finché l'incantesimo permane, l'incantatore può usare un'azione bonus per far ricomparire la spada nella sua mano.
LAMA o'OMBRA
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 o 4° livello, i danni aumentano a 3d8. Quando lo lancia usando uno slot incantesimo di 5 o 6° livello, i danni aumentano a 4d8. Quando lo lancia usando uno slot incantesimo di 7 ° livello o superiore, i danni aumentano a 5d8.

LEGAME CON LE BESTIE
Divinazione di 1 ° livello
Tempo di Lancio: 1 azione
Gittata: Contatto
Componenti: V, S, M (un ciuffo di pelliccia avvolto in un pezzo di stoffa) 
Durata: Concentrazione, fino a 10 minuti
L'incantatore stabilisce un legame telepatico con una bestia con cui è in contatto, che è stata da lui affascinata o è amichevole nei suoi confronti. L'incantesimo fallisce se l'Intelligenza della bestia è pari o superiore a 4. Finché l'incantesimo non termina, il legame resta attivo fintanto che l'incantatore e la bestia rimangono entro linea di vista l'uno dall'altra. Attraverso il legame, la bestia può capire i messaggi telepatici che l'incantatore le invia e può a sua volta comunicare telepaticamente le emozioni e i concetti più semplici all'incantatore. Fintanto che il legame è attivo, la bestia dispone di vantaggio ai tiri per colpire contro qualsiasi creatura situata entro 1,5 metri dall'incantatore e che quest'ultimo sia in grado di vedere.

MAELSTROM
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (un foglio di carta o una foglia a forma di imbuto) 
Durata: Concentrazione, fino a 1 minuto
Una massa d'acqua profonda 1,5 metri compare e turbina in un raggio di 9 metri centrato su un punto entro gittata e che l'incantatore sia in grado di vedere. Il punto deve trovarsi sul terreno o su una massa d'acqua. Finché l'incantesimo non termina, quell'area è considerata terreno difficile e ogni creatura che vi inizi il proprio turno deve superare un tiro salvezza su Forza, altrimenti subisce 6d6 danni contundenti e viene trascinata di 3 metri verso il centro.

METAMORFOSI DI MASSA
Trasmutazione di 9 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (il bozzolo di un bruco) 
Durata: Concentrazione, fino a 1 ora
L'incantatore trasforma fino a dieci creature a sua scelta entro gittata e che sia in grado di vedere. Un bersaglio non consenziente deve superare un tiro salvezza su Saggezza per resistere alla trasformazione. Un mutaforma non consenziente supera automaticamente il tiro salvezza.
Ogni bersaglio assume la forma di una bestia a scelta dell'incantatore, che può scegliere la stessa forma o forme diverse per ciascun bersaglio. La nuova forma può essere quella di qualsiasi bestia che l'incantatore abbia visto e il cui grado di sfida sia pari o inferiore a quello del bersaglio (o a metà del livello del bersaglio, se esso non possiede un grado di sfida). Le statistiche di gioco del bersaglio, inclusi i punteggi di caratteristica mentali, vengono sostituite dalle statistiche della bestia scelta. Il bersaglio mantiene i suoi punti ferita, il suo allineamento e la sua personalità.
Ogni bersaglio ottiene un numero di punti ferita temporanei pari ai punti ferita della sua nuova forma. Questi punti ferita temporanei non possono essere sostituiti dai punti ferita temporanei di altre fonti. Un bersaglio riassume la sua forma normale quando non ha più punti ferita temporanei o se muore. Se l'incantesimo termina prima di allora, la creatura perde tutti i suoi punti ferita temporanei e torna alla sua forma normale.
Le azioni della creatura sono limitate a quelle che la natura della sua nuova forma le consente di effettuare: non può parlare, lanciare incantesimi o effettuare qualsiasi altra azione che richieda l'uso delle mani o della parola.
L'equipaggiamento del bersaglio si fonde nella nuova forma. Il bersaglio non può attivare, usare o impugnare gli oggetti del suo equipaggiamento, né trarne benefici in altri modi.

MINUSCOLE METEORE DI MELF
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (salnitro, zolfo e pece di pino mescolati in una biglia) 
Durata: Concentrazione, fino a 10 minuti
L'incantatore crea sei minuscole meteore nel suo spazio. Le meteore fluttuano nell'aria e orbitano attorno all'incantatore per la durata dell'incantesimo. Quando l'incantatore lancia l'incantesimo (e come azione bonus a ogni suo turno successivo) può spendere una o due meteore, inviandole verso uno o più punti a sua scelta entro 36 metri da lui. Quando una meteora raggiunge la sua destinazione o impatta contro una superficie solida, esplode. Ogni creatura entro 1,5 metri dal punto in cui la meteora è esplosa deve effettuare un tiro salvezza su Destrezza; se lo f a llisce, subisce 2d6 danni da fuoco, mentre se lo supera, subisce la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello o superiore, il numero di meteore create aumenta di due per ogni slot di livello superiore al 3 °.

MODELLARE ACQUA
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: S 
Durata: Istantanea o 1 ora (vedi sotto)
L'incantatore sceglie un'area d'acqua situata entro gittata, che egli sia in grado di vedere e che sia contenuta in un cubo con spigolo di 1,5 metri. Manipola quell'acqua in uno dei modi seguenti:
L'incantatore muove istantaneamente o cambia in altri modi il corso dell'acqua in base al suo comando, fino a 1,5 metri in ogni direzione. Questo movimento non ha abbastanza forza da infliggere danni.
L'incantatore ricava dall'acqua delle semplici forme che anima in base alle sue indicazioni. Questo cambiamento dura 1 ora.
L'incantatore cambia il colore o l'opacità dell'acqua. L'intera massa d'acqua deve essere cambiata nello stesso modo. Questo cambiamento dura 1 ora.
L'incantatore congela l'acqua, purché non ci siano creature in essa. L'acqua si scongela dopo 1 ora.
Se l'incantatore lancia questo incantesimo più volte, può mantenere attivi fino a due dei suoi effetti non istantanei contemporaneamente e può congedare uno di questi effetti con un'azione.

MODELLARE TERRA
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: S 
Durata: Istantanea o 1 ora (vedi sotto)
L'incantatore sceglie una parte di terra o di pietra situata entro gittata, che egli sia in grado di vedere e che sia contenuta entro un cubo con spigolo di 1,5 metri. Manipola quella terra in uno dei modi seguenti:
Se l'incantatore bersaglia un'area di terra smossa, può istantaneamente scavarla, spostarla lungo il terreno e depositarla fino a 1,5 metri di distanza. Questo movimento non ha abbastanza forza da infliggere danni. • L'incantatore f a comparire forme, colori o entrambe le cose sulla terra o sulla pietra, per formare parole, creare immagini o tracciare disegni. Questi cambiamenti permangono per 1 ora.
Se il terriccio o la pietra modellati dall'incantatore si trovano sul terreno, l'incantatore può rendere quel terreno difficile. In alternativa, se quel terreno è già terreno difficile, l'incantatore può renderlo terreno normale. Questo cambiamento permane per 1 ora.
Se l'incantatore lancia questo incantesimo più volte, non può avere attivi più di due suoi effetti non istantanei alla volta e può congedare uno di questi effetti con un'azione.

MORSA DEL GELO
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore crea una patina di gelo che intorpidisce su una creatura situata entro gittata e che egli sia in grado di vedere. Il bersaglio deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce ld6 danni da freddo e subisce svantaggio al prossimo tiro per colpire con un'arma che effettua prima della fine del suo turno successivo.
I danni dell'incantesimo aumentano di ld6 quando l'incantatore raggiunge il 5 ° livello (2d6), 1'11° livello (3d6) e il 17 ° livello (4d6).

MURO D'ACQUA
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S, M (una goccia d'acqua) 
Durata: Concentrazione, fino a 10 minuti
L'incantatore evoca un muro d'acqua su un punto del terreno situato entro gittata e che egli sia in grado di vedere. Il muro può essere lungo fino a 9 metri, alto fino a 3 metri e spesso 30 cm; in alternativa, l'incantatore può creare un muro circolare del diametro massimo di 6 metri, alto 6 metri e spesso 30 cm. Il muro svanisce quando l'incantesimo termina. Lo spazio del muro è considerato terreno difficile.
Ogni attacco con arma a distanza che entra nello spazio del muro subisce svantaggio al tiro per colpire e i danni da fuoco sono dimezzati se l'effetto di fuoco passa attraverso il muro per raggiungere il bersaglio. Gli incantesimi che infliggono danni da freddo e che passano attraverso il muro fanno congelare e solidificare l'acqua (almeno una sezione quadrata con lato di 1,5 metri rimane congelata). Ogni sezione quadrata con lato di 1,5 metri congelata possiede CA 5 e 15 punti ferita. Se una sezione congelata scende a O punti ferita, è distrutta. Quando una sezione è distrutta, l'acqua del muro non va a riempirla.

MURO DI LUCE
Invocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (uno specchietto) 
Durata: Concentrazione, fino a 10 minuti
Uno scintillante muro di luce intensa compare in un punto a scelta dell'incantatore entro gittata. Il muro compare in qualsiasi orientamento a scelta dell'incantatore: orizzontalmente, verticalmente o diagonalmente. Può fluttuare nell'aria o poggiare su una superficie solida. Il muro può essere al massimo lungo 18 metri, alto 3 metri e spesso 1,5 metri. Il muro blocca le linee di vista, ma le creature e gli oggetti possono passarci attraverso. Emette luce intensa entro 36 metri e luce fioca per altri 36 metri.
Quando il muro compare, ogni creatura nella sua area deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce 4d8 danni radiosi ed è accecata per 1 minuto, mentre se lo supera, subisce la metà di quei danni e non è accecata. Una creatura accecata può effettuare un tiro salvezza su Costituzione alla fine di ogni suo turno; se lo supera, l'effetto su di lei termina.
Una creatura che termina il suo turno nell'area del muro subisce 4d8 danni radiosi.
Finché l'incantesimo non termina, l'incantatore può usare un'azione per lanciare un raggio radioso dal muro verso una creatura situata entro 18 metri da esso e che l'incantatore sia in grado di vedere. L'incantatore effettua un attacco con incantesimo a distanza. Se colpito, il bersaglio subisce 4d8 danni radiosi. Che il raggio colpisca o manchi il bersaglio, la lunghezza del muro si riduce di 3 metri. Se la lunghezza del muro scende a O metri, l'incantesimo termina.
Ai Livelli Superiori. Quando l'incantatore lancia questo ° incantesimo usando uno slot incantesimo di 6 livello o superiore, i danni aumentano di ld8 per ogni slot di livello superiore al 5°.

MURO DI SABBIA
Invocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (una manciata di sabbia) 
Durata: Concentrazione, fino a 10 minuti
L'incantatore evoca un muro di sabbia turbinante su un punto del terreno situato entro gittata e che egli sia in grado di vedere. Il muro può essere lungo fino a 9 metri, alto fino a 3 metri e spesso fino a 3 metri e svanisce quando l'incantesimo termina. Blocca le linee di vista ma non i movimenti. Finché una creatura si trova nello spazio del 1 muro, è accecata e deve spendere 90 cm di movimento per ogni 30 cm di cui si muove all'interno del muro.

NEMICI IN ABBONDANZA
Ammaliamento di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore si insinua nella mente di una creatura che egli sia in grado di vedere e la obbliga a effettuare un tiro salvezza su Intelligenza. La creatura supera automaticamente il tiro se è immune alla condizione di spaventato. Se lo fallisce, perde la capacità di distinguere gli amici dai nemici e considera tutte le creature che vede sue nemiche, finché l'incantesimo non termina. Ogni volta che il bersaglio subisce danni, può ripetere il tiro salvezza; se lo supera, l'effetto su se stesso termina.
Ogni volta che la creatura influenzata sceglie un'altra creatura come bersaglio, deve scegliere il bersaglio casualmente tra le creature che è in grado di vedere e che sono situate entro la gittata dell'attacco, dell'incantesimo o dell'altra capacità che usa. Se un nemico provoca un attacco di opportunità dalla creatura influenzata, la creatura deve effettuare quell'attacco se è in grado di farlo.

OMBRA DI MOIL
Necromanzia di 4 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (il globo oculare di un non morto racchiuso in una gemma del valore di almeno 150 mo) 
Durata: Concentrazione, fino a 1 minuto
Ombre simili a fiamme avvolgono il corpo dell'incantatore finché l'incantesimo non termina, rendendolo pesantemente oscurato agli occhi degli altri. Le ombre trasformano la luce fioca entro 3 metri dall'incantatore in oscurità e la luce intensa entro quella stessa area in luce fioca.
Finché l'incantesimo non termina, l'incantatore possiede resistenza ai danni radiosi. Inoltre, ogni volta che una creatura entro 3 metri dall'incantatore lo colpisce con un attacco, le ombre sferzano quella creatura, infliggendole 2d8 danni necrotici.

ONDA DI MAREA
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (una goccia d'acqua) 
Durata: Istantanea
L'incantatore evoca un'onda d'acqua che si riversa su un'area entro gittata. L'area può essere lunga fino a 9 metri, larga fino a 3 metri e alta fino a 3 metri. Ogni creatura in quell'area deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 4d8 danni contundenti ed è buttata a terra prona, mentre se lo supera, subisce la metà di quei danni e non è buttata a terra prona. L'acqua si riversa sul terreno in tutte le direzioni, estinguendo le fiamme non protette nella sua area ed entro 9 metri da essa, per poi svanire.

ORRIDO AVVIZZIMENTO DI ABI-DALZIM
Necromanzia di 8 livelJo
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (un frammento di spugna) 
Durata: Istantanea
L'incantatore estrae l'umidità da ogni creatura in un cubo con spigolo di 9 metri centrato su un punto a sua scelta che egli sia in grado di vedere. Ogni creatura in quell'area deve effettuare un tiro salvezza su Costituzione. I costrutti e i non morti non sono influenzati da questo incantesimo, mentre i vegetali e gli elementali dell'acqua subiscono svantaggio a questo tiro salvezza. Se una creatura fallisce il tiro salvezza, subisce 12d8 danni necrotici, mentre se lo supera, subisce la metà di quei danni.
I vegetali non magici presenti nell'area che non sono creature, come gli alberi e i cespugli, avvizziscono e muoiono all'istante.

OSCURITÀ DELLA FOLLIA
Invocazione di 8 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, M (una goccia di pece mescolata a una goccia di mercurio) 
Durata: Concentrazione, fino a 10 minuti
Un'oscurità magica si diffonde partendo da un punto a scelta dell'incantatore situato entro gittata e riempie una sfera del raggio di 18 metri finché l'incantesimo non termina. I:oscurità si diffonde oltre gli angoli. Una creatura dotata di scurovisione non può vedere attraverso quest'oscurità. Le luci non magiche, nonché quelle create da incantesimi di 8 livello o inferiore, non possono illuminare l'area.
Grida, voci f a rfuglianti e folli risate echeggiano all'interno di tutta la sfera. Ogni volta che una creatura inizia il suo turno nella sfera, deve effettuare un tiro salvezza su Saggezza; se lo fallisce, subisce 8d8 danni psichici, mentre se lo supera, subisce la metà di quei danni.

OSSA DELLA TERRA
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore fa emergere fino a sei colonne di pietra da altrettanti punti del terreno entro gittata e che egli sia in grado di vedere. Ogni colonna è un cilindro del diametro di 1,5 metri e di un'altezza massima di 9 metri. Il terreno da cui la colonna emerge deve essere abbastanza largo da contenere il diametro della colonna; l'incantatore può bersagliare il terreno sotto una creatura se quella creatura è di taglia Media o inferiore. Ogni colonna possiede CA 5 e 30 punti ferita. Quando una colonna scende a O punti ferita, si sbriciola in frammenti, creando un'area di terreno difficile nel raggio di 3 metri. I detriti permangono finché non sono sgombrati. Ogni porzione dell'area del diametro di 1,5 metri richiede almeno 1 minuto per essere sgombrata.
Se una colonna viene creata sotto una creatura, quella creatura deve superare un tiro salvezza su Destrezza, altrimenti sarà sollevata dalla colonna. Una creatura può scegliere di f a llire il tiro salvezza.
Se a una colonna viene impedito di raggiungere la sua altezza completa a causa di un soffitto o di un altro ostacolo, una creatura sulla colonna subisce 6d6 danni contundenti ed è trattenuta, stretta tra la colonna e l'ostacolo. La creatura trattenuta può usare un'azione per effettuare una prova di Forza o di Destrezza (a sua scelta) contro la CD del tiro salvezza dell'incantesimo. In caso di successo, la creatura non è più trattenuta e deve muoversi fuori dalla colonna o cadere dalla cima della colonna.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 7 ° livello o superiore, può creare due colonne aggiuntive per ogni slot di livello superiore al 6°.

PAROLA DEL POTERE DOLORE
Ammaliamento di 7 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V 
Durata: Istantanea
L'incantatore pronuncia una parola del potere che trasmette ondate di dolore intenso a una creatura situata entro gittata e che egli sia in grado di vedere. Se il bersaglio possiede 100 punti ferita o meno, è soggetto a dolori lancinanti. Altrimenti, l'incantesimo non ha effetto su di lui. Anche un bersaglio che è immune alla condizione di affascinato non subisce alcun effetto.
Mentre il bersaglio è influenzato da dolori lancinanti, ogni velocità che possiede non può essere superiore a 3 metri. Il bersaglio subisce inoltre svantaggio ai tiri per colpire, alle prove di caratteristica e ai tiri salvezza che non siano tiri salvezza su Costituzione. Infine, se il bersaglio tenta di lanciare un incantesimo, deve prima superare un tiro salvezza su Costituzione, altrimenti il lancio fallisce e l'incantesimo è sprecato.
Un bersaglio soggetto a questi dolori può effettuare un tiro salvezza su Costituzione alla fine di ogni suo turno. Se lo supera, il dolore termina.

PAROLA RADIOSA
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 1,5 metri
Componenti: V, M (un simbolo sacro) 
Durata: Istantanea
L'incantatore pronuncia una parola divina e un bagliore radioso e bruciante compare attorno alla sua figura.
Ogni creatura a sua scelta situata entro gittata e che egli sia in grado di vedere deve superare un tiro salvezza su Costituzione, altrimenti subisce ld6 danni radiosi.
I danni dell'incantesimo aumentano di ld6 quando l'incantatore raggiunge il 5 ° livello (2d6), 1'11 ° livello (3d6) e il 17 ° livello (4d6).

PASSO DEL TUONO
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V 
Durata: Istantanea
L'incantatore si teletrasporta in uno spazio libero situato entro gittata e che egli sia in grado di vedere. Immediatamente dopo la sua scomparsa, echeggia il rombo di un tuono e ogni creatura entro 3 metri dallo spazio che egli ha lasciato deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce 3d10 danni da tuono, mentre se lo supera, subisce la metà di quei danni. Il tuono può essere udito fino a 90 metri di distanza.
L'incantatore può portare con sé degli oggetti, fintanto che il loro peso non supera il peso che l'incantatore può trasportare. Può inoltre teletrasportare una creatura consenziente di taglia pari o inferiore alla propria che trasporti equipaggiamento fino alla propria capacità di carico. La creatura deve trovarsi entro 1,5 metri dall'incantatore quando questi lancia l'incantesimo e deve esserci uno spazio libero entro 1,5 metri dallo spazio di destinazione dell'incantatore, dove la creatura possa comparire; altrimenti, la creatura viene lasciata indietro.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 ° livello o superiore, i danni aumentano di ldlO per ogni slot di livello superiore al 3 °.

PASSO REMOTO
Evocazione di 5 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V 
Durata: Concentrazione, fino a 1 minuto
L'incantatore si teletrasporta di un massimo di 18 metri fino a uno spazio libero che sia in grado di vedere. A ogni suo turno, prima che l'incantesimo termini, può usare un'azione bonus per teletrasportarsi di nuovo in questo modo.

PIETRA MAGICA
Trucchetto di Trasmutazione
Tempo di Lancio: 1 azione bonus
Gittata: Contatto
Componenti: V, S 
Durata: 1 minuto
L'incantatore tocca da uno a tre sassolini, infondendo in essi un flusso di magia. L'incantatore o qualcun altro può effettuare un attacco con incantesimo a distanza con uno dei sassolini scagliandolo a mano o con una fionda. Se scagliato a mano, ha una gittata di 18 metri.
Se qualcun altro attacca con il sassolino, quell'attaccante aggiunge il modificatore di caratteristica da incantatore (dell'incantatore e non dell'attaccante) al tiro per colpire. Se colpito, il bersaglio subisce un ammontare di danni contundenti pari a ld6 + il modificatore di caratteristica da incantatore dell'incantatore. Che il bersaglio sia colpito o mancato, l'incantesimo sulla pietra termina.
Se l'incantatore lancia di nuovo questo incantesimo, l'incantesimo termina anticipatamente sugli eventuali sassolini già influenzati da esso.

PIROTECNICA
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore sceglie un'area di fiamme non magiche situata entro gittata, che egli sia in grado di vedere e che sia contenuta in un cubo con spigolo di 1,5 metri. Può estinguere le fiamme in quell'area e creare fuochi d'artificio o fumo.
Fuochi d'Artificio. Il bersaglio esplode in uno spettacolo abbacinante di colori. Ogni creatura entro 3 metri dal bersaglio deve superare un tiro salvezza su Costituzione, altrimenti diventa accecata fino alla fine del turno successivo dell'incantatore.
Fumo. Un denso fumo nero scaturisce dal bersaglio e si diffonde in un raggio di 6 metri, muovendosi oltre gli angoli. L'area del fumo è pesantemente oscurata. Il fumo persiste per 1 minuto o finché un vento forte non lo disperde.

PRIGIONE MENTALE
Illusione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore tenta di vincolare una creatura in una cella illusoria che soltanto essa può percepire. Una creatura situata entro gittata e che l'incantatore sia in grado di vedere deve effettuare un tiro salvezza su Intelligenza. Se il bersaglio è immune alla condizione di affascinato, lo supera automaticamente. Se il bersaglio supera il tiro salvezza, subisce 5d10 danni psichici e l'incantesimo termina. Se lo fallisce, subisce 5d10 danni psichici e l'incantatore fa sembrare l'area attorno ad esso pericolosa in qualche modo. Il bersaglio potrebbe percepire di essere circondato dal fuoco, da lame fluttuanti o da orrende fauci zannute e sbavanti. Qualunque forma assuma l'illusione, il bersaglio non può vedere o sentire nulla oltre di essa ed è trattenuto per la durata dell'incantesimo. Se il bersaglio viene mosso al di fuori dell'illusione, effettua un attacco in mischia attraverso di essa o protende una qualsiasi parte del suo corpo attraverso di essa, subisce lOdlO danni psichici e l'incantesimo termina.

RICHIAMO INFERNALE
Evocazione di 5 livello
Tempo di Lancio: 1 minuto
Gittata: 27 metri
Componenti: V, S, M (un rubino del valore di almeno 999 mo) 
Durata: Concentrazione, fino a 1 ora
Pronunciando una formula oscura, l'incantatore evoca un diavolo dai Nove Inferi. Sceglie il tipo del diavolo, che deve avere un grado di sfida pari a o inferiore a 6, come un diavolo uncinato o un diavolo barbuto. Il diavolo compare in uno spazio libero situato entro gittata che l'incantatore sia in grado di vedere e scompare quando scende a O punti ferita o quando l'incantesimo termina.
Il diavolo è maldisposto verso l'incantatore e i suoi compagni. Il DM tira per l'iniziativa del diavolo, che agisce nei propri turni. Si trova sotto il controllo del Dungeon Master e agisce in base alla sua natura a ogni suo turno, cosa che potrebbe portarlo ad attaccare l'incantatore, se pensa che possa prevalere, o a tentarlo affinché compia un atto malvagio in cambio di un servizio limitato. Il DM ha le statistiche della creatura.
A ogni suo turno, l'incantatore può tentare di impartire al diavolo un comando verbale (senza che sia richiesta alcuna azione). Il diavolo obbedisce al comando se l'esito più probabile è compatibile con i suoi desideri, specialmente se il risultato condurrà l'incantatore verso il male. Altrimenti, l'incantatore deve effettuare una prova di Carisma (Inganno, Intimidire o Persuasione) contrapposta alla prova di Saggezza (Intuizione) del diavolo. L'incantatore effettua la prova con vantaggio se pronuncia il vero nome del diavolo. Se la prova dell'incantatore fallisce, il diavolo diventa immune ai suoi comandi verbali per la durata dell'incantesimo, ma può comunque obbedire ai suoi ordini, se decide di farlo. Se la prova ha successo, il diavolo esegue il comando dell'incantatore, come "attacca i miei nemici", "esplora la stanza davanti a noi" o " porta questo messaggio alla regina" finché non completa l'attività; a quel punto, fa ritorno dall'incantatore per riferire ciò che ha fatto.
Se la concentrazione dell'incantatore termina prima che l'incantesimo raggiunga la fine della sua durata, il diavolo non scompare se è diventato immune ai suoi comandi verbali. Agisce invece nel modo che preferisce per 3d6 minuti e poi scompare. Se l'incantatore possiede il talismano di un diavolo individuale, può evocare quel diavolo se esso è del grado di sfida appropriato più 1; il diavolo obbedirà a tutti i suoi comandi, senza alcuna prova di Carisma richiesta.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 6 livello o superiore, il grado di sfida aumenta di 1 per ogni slot di livello superiore al 5°.

RINTOCCO DEI MORTI
Trucchetto di Necromanzia
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore indica una creatura situata entro gittata e che egli sia in grado di vedere e il lugubre rintocco di una campana echeggia attorno ad essa per un istante. Il bersaglio deve superare un tiro salvezza su Saggezza, altrimenti subisce ld8 danni necrotici. Se al bersaglio mancano uno o più punti ferita, subisce invece ld12 danni necrotici.
I danni dell'incantesimo aumentano di un dado quando ° l'incantatore raggiunge il 5° livello (2d8 o 2d12), 1'11 livello ° (3d8 o 3d12) e il 17 livello (4d8 o 4d12).

ROMBO DI TUONO
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: 1,5 metri
Componenti: S 
Durata: Istantanea
L'incantatore genera un'esplosione tonante, che può essere udita a 30 metri di distanza. Ogni creatura situata entro gittata, ad eccezione dell'incantatore, deve effettuare un tiro salvezza su Costituzione; se lo fallisce, subisce ld6 danni da tuono.
I danni dell'incantesimo aumentano di ld6 quando l'incantatore raggiunge il 5° livello (2d6), I'11 ° livello (3d6) e ° il 17 livello (4d6).

SCIAME DI PALLE DI NEVE DI SNILLOC
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un pezzo di ghiaccio o una scheggia di pietra bianca) 
Durata: Istantanea
Una raffica di palle di neve magiche prorompe da un punto a scelta dell'incantatore entro gittata. Ogni creatura in una sfera del raggio di 1,5 metri centrata su quel punto deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 3d6 danni da freddo, mentre se lo supera, subisce la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello o superiore, i danni aumentano di ld6 per ogni slot di livello superiore al 2°.

SCOSSA SINAPTICA
Ammaliamento di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore sceglie un punto entro gittata e genera un'esplosione di energia psichica in quel punto. Ogni creatura entro una sfera con raggio di 6 metri centrata su quel punto deve effettuare un tiro salvezza su Intelligenza. Una creatura con un punteggio di Intelligenza pari o inferiore a 2 non può essere influenzata da questo incantesimo. Un bersaglio subisce 8d6 danni psichici se fallisce il tiro salvezza, mentre se lo supera, subisce la metà di quei danni.
Dopo un tiro salvezza fallito, i pensieri del bersaglio restano offuscati per 1 minuto. Durante quel periodo, il bersaglio tira un d6 e sottrae il risultato ottenuto da tutti i suoi tiri per colpire e prove di caratteristica, nonché dai suoi tiri salvezza su Costituzione per mantenere la concentrazione. Il bersaglio può effettuare un tiro salvezza su Intelligenza alla fine di ogni suo turno; se lo supera, l'effetto su se stesso termina.

SCOSSA TELLURICA
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: 3 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore provoca una scossa tellurica sul terreno entro gittata. Ogni creatura entro l'area, a eccezione dell'incantatore, deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce ld6 danni contundenti e cade a terra prona. Se il terreno in quell'area è di pietra o terriccio smosso, diventa terreno difficile finché non viene sgombrato. Ogni porzione dell'area del diametro di 1,5 metri richiede almeno 1 minuto per essere sgombrata.
Ai LiveJJi Superiori. Quando l'incantatore lancia questo ° incantesimo usando uno slot incantesimo di 2 livello o superiore, i danni aumentano di ld6 per ogni slot di livello superiore al 1 °.

SCRITTA CELESTE
Trasmutazione di 2 livello (rituale)
Tempo di Lancio: 1 azione
Gittata: Vista
Componenti: V, S 
Durata: Concentrazione, fino a 1 ora
L'incantatore fa comparire un massimo di dieci parole in una parte del cielo che è in grado di vedere. Le parole sembrano fatte di nuvole e rimangono al loro posto per la durata dell'incantesimo. Le parole si dissolvono quando l'incantesimo termina. Un vento forte può disperdere le nuvole e porre fine all'incantesimo anticipatamente.

SERVITORE MINUSCOLO
Trasmutazione di 3 livello
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: V, S 
Durata: 8 ore
L'incantatore tocca un oggetto Minuscolo non magico che non sia attaccato a un altro oggetto o superficie e non sia trasportato da un'altra creatura. Il bersaglio si anima, sviluppa piccole braccia e gambe e diventa una creatura sotto il controllo dell'incantatore finché l'incantesimo non termina o la creatura non scende a O punti ferita. Vedi la scheda delle statistiche per le sue statistiche.
Come azione bonus, l'incantatore può comandare mentalmente la creatura se essa si trova entro 36 metri da lui (se controlla più creature tramite questo incantesimo, può comandarle tutte o solo alcune contemporaneamente, impartendo lo stesso comando a ognuna di esse).
SERVITORE MINUSCOLO
Costrutto Minuscolo, senza allineamento
Classe Armatura 15 (armatura naturale) Punti Ferita 10 (4d4) Velocità 9 m, scalare 9 m
FOR 4 ( -3)  DES 16 (+3)  COS 10 (+O)  INT 2 ( - 4)  SAG 10 (+O)  CAR 1 (- 5)
Immunità ai Danni psichico, veleno Immunità alle Condizioni accecato, affascinato, assordato,
avvelenato, indebolimento, paralizzato, pietrificato, spaventato Sensi Percezione passiva 10, vista cieca 18 m (cieco oltre
questo raggio) Linguaggi-
AZIONI
Schianto. Attacco con Arma da Mischia: +5 al tiro per colpire, portata 1,5 m, un bersaglio. Col p ito: 5 (ld4 + 3 ) danni contundenti.
L'incantatore decide quale azione la creatura deve effettuare e dove si muoverà nel suo turno successivo oppure può impartirle un semplice comando generico, come portargli una chiave, fare la guardia o impilare alcuni libri. Se l'incantatore non gli impartisce alcun comando, il servitore non fa altro che difendersi dalle creature ostili. Una volta impartitogli un ordine, il servitore continua a eseguire _quell'ordine finché non avrà completato il suo compito.
Quando la creatura scende a O punti ferita, torna alla sua forma originale e gli eventuali danni rimanenti si trasferiscono anche a quella forma.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot di livello pari o superiore al 4 °, può animare due oggetti aggiuntivi per ogni slot di livello superiore al 3°.

SFERA ACQUEA
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (una goccia d'acqua) 
Durata: Concentrazione, fino a 1 minuto
L'incantatore evoca una sfera d'acqua del raggio di 1,5 metri in un punto entro gittata che egli sia in grado di vedere. La spera può fluttuare in aria, ma non a più di 3 metri dal terreno. La sfera permane per la durata dell'incantesimo.
Ogni creatura nello spazio della sfera deve effettuare un tiro salvezza su Forza; se lo supera, viene espulsa nello spazio libero più vicino all'esterno a sua scelta. Una creatura di taglia Enorme o superiore supera il tiro salvezza automaticamente e una creatura di taglia Grande o inferiore può scegliere di fallirlo. In caso di tiro salvezza fallito, la creatura è trattenuta dalla sfera e inghiottita dall'acqua. Alla fine di ogni suo turno, un bersaglio trattenuto può ripetere il tiro salvezza; se lo supera, l'effetto su se stesso termina.
La sfera può trattenere un massimo di quattro creature di taglia Media o inferiore o una creatura Grande. Se la sfera trattiene una creatura in eccesso rispetto a questi numeri, una creatura casuale che era già trattenuta dalla sfera cade all'esterno e atterra prona in uno spazio entro 1,5 metri da essa. Con un'azione, l'incantatore può muovere la sfera di un massimo di 9 metri in linea retta. Se si muove sopra una fossa, un burrone o un altro dislivello, scende senza subire danni finché non fluttua a 3 metri dal terreno. Ogni creatura trattenuta dalla sfera si muove assieme ad essa. L'incantatore può speronare le altre creature con la sfera, obbligandole a effettuare il tiro salvezza. Quando l'incantesimo termina, la sfera cade sul terreno ed estingue tutte le fiamme normali entro 9 metri da essa. Ogni creatura trattenuta dalla sfera è buttata a terra prona nello spazio in cui cade. L'acqua poi svanisce.

SFERA AL VETRIOLO
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S, M (una goccia di bile di una lumaca gigante) 
Durata: Istantanea
L'incantatore indica un punto entro gittata e una sfera luminescente di acido smeraldino del diametro di 30 cm sfreccia verso quel punto, dove esplode in un raggio di 6 metri. Ogni creatura in quell'area deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 10d4 danni da acido e 5d4 danni da acido alla fine del suo turno successivo, mentre se lo supera, subisce la metà dei danni iniziali e nessun danno alla fine del suo turno successivo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 5 livello o superiore, i danni iniziali aumentano di 2d4 per ogni slot di livello superiore al 4 °.

SFERA DELLA TEMPESTA
Invocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 45 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
Dal nulla si forma una sfera di aria turbinante del raggio di 6 metri, centrata su un punto entro gittata a scelta dell'incantatore. La sfera permane per la durata dell'incantesimo. Ogni creatura che si trova nella sfera quando questa compare o che vi termina il proprio turno deve superare un tiro salvezza su Forza, altrimenti subisce 2d6 danni contundenti. Lo spazio della sfera è terreno difficile.
Finché l'incantesimo non termina, l'incantatore può usare un'azione bonus a ogni suo turno per generare un fulmine che scaturisce dal centro della sfera e sfreccia verso una creatura a scelta dell'incantatore situata entro 18 metri dal centro. L'incantatore effettua un attacco con incantesimo a distanza. Se il bersaglio si trova nella sfera, l'incantatore dispone di vantaggio al tiro per colpire. Se colpito, il bersaglio subisce 4d6 danni da fulmine.
Le creature entro 9 metri dalla sfera subiscono svantaggio alle prove di Saggezza (Percezione) effettuate per ascoltare.
Ai Livelli Superiori. Quando l'incantatore lancia questo ° incantesimo usando uno slot incantesimo di 5 livello o superiore, i danni di ogni effetto dell'incantesimo aumentano di ld6 per ogni slot di livello superiore al 4 °.

SOFFIO DEL DRAGO
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: Contatto
Componenti: V, S, M (un peperoncino) 
Durata: Concentrazione, fino a 1 minuto
L'incantatore tocca una creatura consenziente e infonde in essa il potere di esalare energia magica dalla bocca, purché ne possieda una. L'incantatore sceglie tra acido, freddo, fulmine, fuoco o veleno. Finché l'incantesimo non termina, la creatura può usare un'azione per esalare l'energia del tipo scelto in un cono di 4,5 metri. Ogni creatura in quell'area deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 3d6 danni del tipo scelto, mentre se lo supera, subisce la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 ° livello o superiore, i danni aumentano di ld6 per ogni slot di livello superiore al 2°.

SONNELLINO
Ammaliamento di 3 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: S, M (un pizzico di sabbia) 
Durata: 10 minuti
L'incantatore fa un gesto tranquillizzante e fino a tre creature consenzienti a sua scelta situate entro gittata e che egli sia in grado di vedere cadono prive di sensi per la durata dell'incantesimo. L'incantesimo termina anticipatamente su un bersaglio se esso subisce danni o se qualcuno usa un'azione per risvegliarlo scuotendolo o schiaffeggiandolo. Se un bersaglio rimane privo di sensi per l'intera durata, ottiene i benefici di un riposo breve e non può essere influenzato di nuovo da questo incantesimo finché non completa un riposo lungo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 ° livello o superiore, può bersagliare una creatura consenziente aggiuntiva per ogni slot di livello superiore al 3 °.

SPIRITO GUARITORE
Evocazione di 2 livello
Tempo di Lancio: 1 azione bonus
Gittata: 18 metri
Componenti: V, S 
Durata: Concentrazione, fino a 1 minuto
L'incantatore chiama a sé uno spirito della natura per lenire i feriti. Lo spirito intangibile compare in uno spazio delle dimensioni di un cubo con spigolo di 1,5 metri entro gittata e che l'incantatore sia in grado di vedere. Lo spirito ha l'aspetto di una bestia o di un folletto trasparente (a scelta dell'incantatore).
Finché l'incantesimo non termina, ogni volta che l'incantatore o una creatura che egli sia in grado di vedere entrano nello spazio dello spirito per la prima volta in un turno o vi iniziano il proprio turno, l'incantatore può decidere che lo spirito ripristini ld6 punti ferita di quella creatura (non è richiesta alcuna azione). Lo spirito non può curare i costrutti o i non morti.
Come azione bonus nel proprio turno, l'incantatore può muovere lo spirito di un massimo di 9 metri fino a uno spazio che egli sia in grado di vedere.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello o superiore, la guarigione aumenta di ld6 per ogni slot di livello superiore al 2 °.

STRETTA DELLA TERRA DI MAXIMILIAN
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una mano in miniatura modellata in argilla) 
Durata: Concentrazione, fino a 1 minuto
L'incantatore sceglie sul terreno uno spazio libero quadrato con lato di 1,5 metri situato entro gittata e che egli sia in grado di vedere. Una mano Media fatta di terriccio compresso emerge dal terreno e si protende verso una creatura situata entro 1,5 metri da essa e che l'incantatore sia in grado di vedere. Il bersaglio deve effettuare un tiro salvezza su Forza; se lo fallisce, subisce 2d6 danni contundenti ed è trattenuto per la durata dell'incantesimo.
Con un'azione, l'incantatore può fare in modo che la mano stritoli il bersaglio trattenuto, che deve effettuare un tiro salvezza su Forza: se lo fallisce, subisce 2d6 danni contundenti, mentre se lo supera, subisce la metà di quei danni.
Per liberarsi, il bersaglio trattenuto può usare la sua azione per effettuare una prova di Forza contro la CD del tiro salvezza degli incantesimi dell'incantatore. In caso di successo, il bersaglio sfugge e non è più trattenuto dalla mano.
Con un'azione, l'incantatore può fare in modo che la mano si protenda verso una creatura diversa o si muova fino a uno spazio libero diverso entro gittata. La mano libera un bersaglio trattenuto se l'incantatore sceglie l'una o l'altra cosa.

TEMPIO DEGLI DÈI
Evocazione di 7 livello
Tempo di Lancio: 1 ora
Gittata: 36 metri
Componenti: V, S, M (un simbolo sacro del valore di almeno 5 mo) 
Durata: 24 ore
L'incantatore fa materializzare un tempio splendente su un terreno situato entro gittata che egli sia in grado di vedere. Il tempio deve entrare in un cubo di spazio libero con spigolo fino a 36 metri. Il tempio permane finché l'incantesimo non termina ed è dedicato al dio, al pantheon o alla filosofia rappresentata dal simbolo sacro usato per lanciare l'incantesimo.
L'incantatore prende tutte le decisioni relative all'aspetto del tempio. L'interno è delimitato da un pavimento, da pareti e da un tetto, è dotato di una porta d'accesso e di qualsiasi numero di finestre che l'incantatore desideri. Soltanto l'incantatore e le creature da lui designate al momento del lancio dell'incantesimo possono aprire o chiudere la porta.
L'interno del tempio è uno spazio aperto con un indolo o un altare a un'estremità. L'incantatore decide se il tempio è illuminato e se l'illuminazione equivale a luce intensa o fioca. All'interno, l'odore di incenso bruciato aleggia nell'aria e la temperatura è mite.
Il tempio si oppone ai tipi di creature scelti dall'incantatore al momento del lancio dell'incantesimo. L'incantatore sceglie uno o più dei tipi di creature seguenti: celestiali, elementali, folletti, immondi o non morti. Se una creatura del tipo scelto tenta di entrare nel tempio, quella creatura deve effettuare un tiro salvezza su Carisma. Se lo fallisce, non può entrare nel tempio per le 24 ore successive. Anche se una creatura riesce a entrare nel tempio, la magia all'interno del tempio la ostacola; ogni volta che la creatura effettua un tiro per colpire, una prova di caratteristica o un tiro salvezza all'interno del tempio, deve tirare un d4 e sottrarre il risultato ottenuto dal tiro del d20.
Inoltre, i sensori creati dagli incantesimi di divinazione non possono comparire all'interno del tempio e le creature all'interno non possono essere bersagliate dagli incantesimi di divinazione.
Infine, ogni volta che una creatura nel tempio recupera punti ferita grazie a un incantesimo di 1 livello o superiore, quella creatura recupera un ammontare di punti ferita aggiuntivi pari al modificatore di Saggezza dell'incantatore (fino a un minimo di 1 punto ferita).
Il tempio è fatto di una forza magica opaca che si estende sul Piano Etereo, cosa che blocca i viaggi eterei verso l'interno del tempio. Nulla può passare fisicamente attraverso l'esterno del tempio. Dissolvi magie non lo dissolve e campo anti-magia non ha alcun effetto su di esso. Un incantesimo disintegrazione distrugge il tempio istantaneamente.
Lanciando questo incantesimo nello stesso punto ogni giorno per un anno, questo effetto diventa permanente.

TRABOCCHETTO
Abiurazione di 1 livello
Tempo di Lancio: 1 minuto
Gittata: Contatto
Componenti: S, M (7,5 metri di corda, che l'incantesimo consuma) 
Durata: 8 ore
Quando lancia questo incantesimo, l'incantatore usa la corda per creare un cerchio del raggio di 1,5 metri sul terreno o sul pavimento. Una volta completato il lancio, la corda scompare e il cerchio diventa una trappola magica.
Questa trappola è pressoché invisibile e per discernerla è necessario effettuare con successo una prova di Intelligenza (Indagare) contro la CD del tiro salvezza dell'incantesimo.
La trappola si innesca quando una creatura Piccola, Media o Grande si muove sul terreno o sul pavimento, entrando nel raggio dell'incantesimo. Quella creatura deve superare un tiro salvezza su Destrezza, altrimenti viene magicamente sollevata in aria, dove rimane appesa a testa in giù a 90 cm dal terreno o dal pavimento. La creatura rimane trattenuta in quella posizione finché l'incantesimo non termina.
Una creatura trattenuta può effettuare un tiro salvezza su Destrezza alla fine di ogni suo turno; se lo supera, l'effetto su se stessa termina. In alternativa, la creatura o qualcun altro in grado di raggiungerla può usare un'azione per effettuare una prova di Intelligenza (Arcano) contro la CD del tiro salvezza dell'incantesimo. Se ha successo, l'effetto di trattenuto termina.
Dopo che la trappola è stata innescata, l'incantesimo termina quando nessuna creatura è trattenuta da esso.

TRASFERIMENTO DI VITA
Necromanzia di 3 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore sacrifica parte della sua salute per risanare le ferite di un'altra creatura. Subisce 4d8 danni necrotici e una creatura a sua scelta situata entro gittata e che egli sia in grado di vedere recupera un numero di punti ferita pari al doppio dei danni necrotici che l'incantatore subisce.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 ° livello o superiore, i danni aumentano di ld8 per ogni slot di livello superiore al 3 °.

TRASFORMAZIONE DI TENSER
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V, S, M (alcuni peli di un toro) 
Durata: Concentrazione, fino a 10 minuti
L'incantatore si conferisce resistenza e valore nelle arti marziali tramite l'uso della magia. Finché l'incantesimo non termina, l'incantatore non può lanciare incantesimi e ottiene i benefici seguenti:
Ottiene 50 punti ferita temporanei. Se alcuni di questi punti ferita rimangono quando l'incantesimo termina, vanno perduti.
Dispone di vantaggio ai tiri per colpire che effettua con le armi semplici e da guerra.
Quando colpisce un bersaglio con un attacco con un'arma, quel bersaglio subisce 2d12 danni da forza extra.
Possiede .competenza in tutte le armature, gli scudi, le armi semplici e le armi da guerra.
Possiede competenza nei tiri salvezza su Forza e Costituzione.
Può attaccare due volte, invece di una, quando effettua l'azione di Attacco nel suo turno. Ignora questo beneficio se possiede già un privilegio, come Attacco Extra, che gli conferisce attacchi extra.
Immediatamente dopo che l'incantesimo è terminato, l'incantatore deve superare un tiro salvezza su Costituzione con CD 15, altrimenti subisce un livello di indebolimento.

TRASMUTARE ROCCIA
Trasmutazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 36 metri
Componenti: V, S, M (argilla e acqua) 
Durata: Finché non viene dissolto
L'incantatore sceglie un'area di pietra o di fango situata entro gittata, che egli sia in grado di vedere e che sia contenuta in un cubo con spigolo di 12 metri, e sceglie uno degli effetti seguenti.
Trasmutare Roccia in Fango. La roccia non magica di qualsiasi tipo all'interno dell'area diventa un pari volume di fango denso e fluente che permane per la durata dell'incantesimo.
Il terreno nell'area dell'incantesimo diventa talmente fangoso che le creature possono sprofondarvi. Ogni 30 cm di cui una creatura si muove attraverso il fango costa 1,2 metri di movimento e ogni creatura che si trovi sul terreno quando l'incantatore lancia l'incantesimo deve effettuare un tiro salvezza su Forza. Una creatura deve effettuare questo tiro salvezza anche la prima volta che entra nell'area in un turno o vi termina il proprio turno; se lo fallisce, affonda nel fango ed è trattenuta, anche se può usare un'azione per porre termine alla condizione di trattenuto su se stessa e issarsi fuori dal fango.
Se l'incantatore lancia l'incantesimo su un soffitto, il fango cade. Ogni creatura situata sotto il fango nel momento in cui esso cade deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 4d8 danni contundenti, mentre se lo supera, subisce la metà di quei danni.
Trasmutare Fango in Roccia. Il fango o le sabbie mobili non magici situati nell'area e non più profondi di 3 metri si trasformano in pietra morbida per la durata dell'incantesimo. Ogni creatura che si trova nel fango al momento della trasformazione deve effettuare un tiro salvezza su Destrezza; se lo fallisce, diventa trattenuta dalla roccia. La creatura trattenuta o un'altra creatura entro portata può usare un'azione per tentare di rompere la roccia, effettuando con successo una prova di Forza (CD 20) o infliggendo danni alla roccia. La roccia ha CA 15 e 25 punti ferita ed è immune ai danni psichici e da veleno. Se una creatura supera il tiro salvezza, viene spinta senza subire danni in superficie, fino a uno spazio libero.

TROVA CAVALCATURA SUPERIORE
Evocazione di 4 livello
Tempo di Lancio: 10 minuti
Gittata: 9 metri
Componenti: V, S 
Durata: Istantanea
L'incantatore evoca uno spirito che assume la forma di una cavalcatura fedele e maestosa. La cavalcatura appare in uno spazio libero entro gittata e assume una forma a scelta dell'incantatore tra un grifone, un pegaso, un peryton, un lupo feroce, un rinoceronte o una tigre dai denti a sciabola. La cavalcatura usa le statistiche della forma scelta riportate nel Monster Manual, anche se si tratta di un celestiale, un folletto o un immondo (a scelta dell'incantatore), anziché di un normale tipo di creatura. Inoltre, se la cavalcatura ha un'Intelligenza pari o inferiore a 5, la sua Intelligenza diventa 6 e ottiene la capacità di capire un linguaggio a scelta dell'incantatore e che l'incantatore sia in grado di parlare.
L'incantatore controlla la cavalcatura in combattimento. Finché la creatura si trova a 1,5 km dall'incantatore, quest'ultimo può comunicare con lei telepaticamente. Quando l'incantatore è in sella alla cavalcatura, può fare in modo che ogni incantesimo che bersaglia solo se stesso bersagli anche la sua cavalcatura. La cavalcatura scompare temporaneamente quando scende a O punti ferita o quando l'incantatore la congeda con un'azione. Un nuovo lancio di questo incantesimo evocherà la stessa cavalcatura, riportandola al massimo dei suoi punti ferita e rimuovendo eventuali condizioni.
L'incantatore non può legarsi a più di una cavalcatura alla volta tramite questo incantesimo o trova cavalcatura. Con un'azione, può liberare la cavalcatura dal suo legame, facendola scomparire in modo permanente.
Ogni volta che la cavalcatura scompare, lascia dietro di sé ogni oggetto che indossava o trasportava.

TURBINE
Invocazione di 7 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V, M (una pagliuzza) 
Durata: Concentrazione, fino a 1 minuto
Un turbine scende urlando fino a un punto del terreno entro gittata che l'incantatore sia in grado di vedere. Il turbine è un cilindro del raggio di 3 metri e alto 9 metri centrato su quel punto. Finché l'incantesimo non termina, l'incantatore può usare la sua azione per muovere il turbine di un massimo di 9 metri in qualsiasi direzione lungo il terreno. Il turbine risucchia ogni oggetto di taglia Media o inferiore che non sia assicurato a qualcosa e che non sia indossato o trasportato da qualcuno.
Una creatura deve effettuare un tiro salvezza su Destrezza la prima volta in un turno in cui entra nel turbine o la prima volta in cui il turbine entra nel suo spazio, incluso il momento in cui il turbine compare per la prima volta. Una creatura subisce 10d6 danni contundenti, se fallisce il tiro salvezza, o la metà di quei danni, se lo supera. Inoltre, una creatura di taglia Grande o inferiore che fallisca il tiro salvezza deve superare un tiro salvezza su Forza, altrimenti diventa trattenuta nel turbine finché l'incantesimo non termina. Quando una creatura inizia il suo turno trattenuta dal turbine, viene spinta di 1,5 metri più in alto, a meno che non si trovi già in cima. Una creatura trattenuta si muove assieme al turbine e cade quando l'incantesimo termina, a meno che non sia in grado di rimanere sospesa in qualche modo.
Una creatura trattenuta può usare un'azione per effettuare una prova di Forza o di Destrezza conto la CD del tiro salvezza dell'incantesimo. Se ha successo, la creatura non è più trattenuta dal turbine e viene scagliata a 3d6 x 3 metri di distanza da esso in una direzione casuale.

URLO PSICHICO
Ammaliamento di 9 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: S 
Durata: Istantanea
L'incantatore scatena il potere della sua mente contro l'intelletto di un massimo di dieci creature a sua scelta, situate entro gittata e che egli sia in grado di vedere. Le creature con un punteggio di Intelligenza pari o inferiore a 2 non sono influenzate.
Ogni bersaglio deve effettuare un tiro salvezza su Intelligenza; se lo f a llisce, subisce 14d6 danni psichici ed è stordito, mentre se lo supera, subisce la metà di quei danni e non è stordito. Se un bersaglio è ucciso da questi danni, la sua testa esplode, presumendo che ne possieda una. Un bersaglio stordito può effettuare un tiro salvezza su Intelligenza alla fine di ogni suo turno. Se lo supera, l'effetto di stordimento finisce.

VAMPA DI AGANAZZAR
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V, S, M (una scaglia di drago rosso) 
Durata: Istantanea
Una linea di fiamme rombanti lunga 9 metri e larga 1,5 metri viene emanata dall'incantatore in una direzione a sua scelta. Ogni creatura sulla linea deve effettuare un tiro salvezza su Destrezza; se lo fallisce, subisce 3d8 danni da fuoco, mentre se lo supera, subisce la metà di quei danni.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello o superiore, i danni aumentano di ld8 per ogni slot di livello superiore al 2'.

VENTO DI INTERDIZIONE
Invocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore
Componenti: V 
Durata: Concentrazione, fino a 10 minuti
Un vento forte (30 km all'ora) soffia attorno all'incantatore in un raggio di 3 metri e si sposta assieme a lui, rimanendo incentrato su di lui. Il vento permane per la durata dell'incantesimo.
Il vento ha gli effetti seguenti:
Rende assordati l'incantatore e le altre creature nella sua area.
Estingue le fiamme non protette situate nella sua area e di taglia pari o inferiore a quella di una torcia.
L'are a è terreno difficile per le creature diverse dall'incantatore.
I tiri per colpire degli attacchi con arma a distanza subiscono svantaggio se entrano o escono dal vento. Spinge via i vapori, i gas e le nebbie che possono essere dispersi da un vento forte.

VINCOLO DELLA TERRA
Trasmutazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 90 metri
Componenti: V 
Durata: Concentrazione, fino a 1 minuto
L'incantatore sceglie una creatura entro gittata e che egli sia in grado di vedere. Alcune strisce gialle di energia magica avviluppano la creatura. Il bersaglio deve superare un tiro salvezza su Forza, altrimenti la sua velocità di volare (se ne possiede una) è ridotta a O metri per la durata dell'incantesimo. Una creatura in volo influenzata da questo incantesimo scende di 18 metri per round finché non arriva a terra o finché l'incantesimo non termina.    
`,
    listaIncantesimi: {
      incantesimiBardo: `
Rombo di tuono
Scossa tellurica
Pirotecnica
Scritta celeste
Vento di interdizione
Nemici in abbondanza
Sonnellino
Charme sui mostri
Abilità potenziata
Scossa sinaptica
Metamorfosi di massa
Urlo psichico
`,
      incantesimiChierico: `
Parola radiosa
Rintocco dei morti
Cerimonia
Trasferimento di vita
Alba
Arma sacra
Tempio degli dèi
`,
      incantesimiDruido: `
Controllare fiamme
Creare falò
Ferocia primordiale
Folata
Infestazione
Modellare acqua
Modellare terra
Morsa del gelo
Pietra magica
Rombo di tuono
Assorbire elementi
Coltello di ghiaccio
Legame con le bestie
Scossa tellurica
Trabocchetto
Diavoletto di polvere
Scritta celeste
Spirito guaritore
Vento di interdizione
Vincolo della terra
Eruzione terrestre
Frecce infuocate
Muro d'acqua
Onda di marea
Anatema elementale
Charme sui mostri
Guardiano della natura
Sfera acquea
Collera della natura
Controllare venti
Maelstrom
Trasmutare roccia
Boschetto druidico
Interdizione primordiale
Investitura del ghiaccio
Investitura del vento
Investitura della fiamma
Investitura della pietra
Ossa della terra
Turbine
`,
      incantesimiMago: `
Controllare fiamme
Creare falò
Folata
Infestazione
Modellare acqua
Modellare terra
Morsa del gelo
Rintocco dei morti
Rombo di tuono
Assorbire elementi
Catapulta
Coltello di ghiaccio
Incuti paura
Scossa tellurica
Trabocchetto
Aculeo mentale
Diavoletto di polvere
Investitura della pietra
Prigione mentale
Lama d'ombra
Pirotecnica
Sciame di palle di neve di Snilloc
Scritta celeste
Soffio del drago
Stretta della terra di Maximilian
Trasformazione di Tenser
Corona di stelle
Parola del potere dolore
Turbine
Vampa di Aganazzar
Vento di interdizione
Vincolo della terra
Eruzione terrestre
Evoca demoni minori
Frecce infuocate
Minuscole meteore di Melf
Muro d'acqua
Muro di sabbia
Nemici in abbondanza
Onda di marea
Passo del tuono
Servitore minuscolo
Sonnellino
Trasferimento di vita
Anatema elementale
Charme sui mostri
Evoca demone maggiore
Fulgore nauseante
Sfera acquea
Sfera al vetriolo
Sfera della tempesta
Abilità potenziata
Alba
Colpo del vento d'acciaio
Controllare venti
Danza macabra
Debilitazione
Flusso di energia negativa
Immolazione
Muro di luce
Passo remoto
Richiamo infernale
Scossa sinaptica
Trasmutare roccia
Creare omuncolo
Disperdere
Gabbia dell'anima
Investitura del ghiaccio
Investitura del vento
Investitura della fiamma
Drago illusorio
Fortezza possente
Orrido avvizzimento di Abi-Dalzim
Oscurità della follia
Invulnerabilità
Metamorfosi di massa
Urlo psichico
`,
      incantesimiPaladino: `
Cerimonia
Trova cavalcatura superiore
Arma sacra
`,
      incantesimiRanger: `
Assorbire elementi
Colpo dello zefiro
Legame con le bestie
Trabocchetto
Spirito guaritore
Frecce infuocate
Guardiano della natura
Collera della natura
Colpo del vento d'acciaio
`,
      incantesimiStregone: `
Controllare fiamme
Creare falò
Folata
Infestazione
Modellare acqua
Modellare terra
Morsa del gelo
Rombo di tuono
Assorbire elementi
Catapulta
Coltello di ghiaccio
Dardo di caos
Scossa tellurica
Aculeo mentale
Diavoletto di polvere
Lama d'ombra
Pirotecnica
Sciame di palle di neve di Snilloc
Soffio del drago
Stretta della terra di Maximilian
Vampa di Aganazzar
Vento di interdizione
Vincolo della terra
Eruzione terrestre
Frecce infuocate
Minuscole meteore di Melf
Muro d'acqua
Nemici in abbondanza
Onda di marea
Passo del tuono
Sonnellino
Charme sui mostri
Fulgore nauseante
Sfera acquea
Sfera al vetriolo
Sfera della tempesta
Abilità potenziata
Controllare venti
Debilitazione
Immolazione
Muro di luce
Passo remoto
Scossa sinaptica
Disperdere
Investitura del ghiaccio
Investitura del vento
Investitura della fiamma
Investitura della pietra
Prigione mentale
Corona di stelle
Parola del potere dolore
Turbine
Orrido avvizzimento di Abi-Dalzim
Metamorfosi di massa
Urlo psichico
`,
      incantesimiWarlock: `
Creare falò
Infestazione
Morsa del gelo
Pietra magica
Rintocco dei morti
Rombo di tuono
Incuti paura
Aculeo mentale
Lama d'ombra
Vincolo della terra
Evoca demoni minori
Nemici in abbondanza
Passo del tuono
Anatema elementale
Charme sui mostri
Evoca demone maggiore
Fulgore nauseante
Ombra di Moil
Danza macabra
Debilitazione
Flusso di energia negativa
Muro di luce
Passo remoto
Richiamo infernale
Scossa sinaptica
Disperdere
Gabbia dell'anima
Investitura del ghiaccio
Investitura del vento
Investitura della fiamma
Investitura della pietra
Prigione mentale
Corona di stelle
Parola del potere dolore
Oscurità della follia
Urlo psichico
`,
      incantesimiArtefice: `
Creare falò
Morsa del gelo
Pietra magica
Rombo di tuono
Assorbire elementi
Catapulta
Trabocchetto
Pirotecnica
Scritta celeste
Fortezza della mente
Frecce infuocate
Servitore minuscolo
Sonnellino
Anatema Elementale
Abilità potenziata
Trasmutare roccia
`
    }  
  },
  tasha: {
    grimorioString: `
ABITO ULTRATERRENO DI TASHA
Trasmutazione di 6 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V, S, M (un oggetto sul quale @ inciso un simbolo dei Piani Esterni, del valore di almeno 500 mo) 
Durata: Concentrazione, fino a 1 minuto
Proferendo questo incantesimo, I'incantatore sceglie se attingere alla magia dei Piani Inferiori o a quella dei Piani Superiori per trasformarsi e ottiene iseguenti benefici finché l'incantesimo non termina:
« Immunita ai danni da fuoco o da veleno (se ha scelto iPiani Inferiori) oimmunita ai danni radiosi 0 necrotici (se ha scelto iPiani Superiori).
« Immunita alla condizione avvelenato (Piani Inferiori) o alla condizione affascinato (Piani Superiori).
¢ Sulla schiena dell'incantatore compaiono delle ali spet- trali che gli forniscono una velocita di volare di 12 metri.
+ Lincantatore ottiene un bonus di +2 alla CA.
« Tutti gli attacchi con un'arma diventano magici e l'incantatore pud usare ilsuo modificatore di caratteristica da incantatore invece del modificatore di Forza
o Destrezza per iltiro per colpire e iltiro per idanni.
+ Lincantatore pud attaccare due volte invece di una quando effettua l'azione di Attacco nel proprio turno.

EVOCA ABERRAZIONE
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un tentacolo in salamoia e un bulbo oculare in una fiala intarsiata di platino del valore di almeno 400 mo)
Durata: Concentrazione, fino a 1 ora
L'incantatore evoca uno spirito aberrante che si manifesta in uno spazio libero entro gittata che egli sia in grado di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Aberrante. Quando questo incantesimo viene lanciato, l'incantatore pud sceglier tra pseudo-onnivedente, slaad o progenie stellare. La creatura ha le sembianze di una di queste aberrazioni e in base a questa somiglianza vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 0 quando I|'incantesimo termina.
La creatura diventa un alleato per Il'incantatore e isuoi compagni. In combattimento, la creatura condivide ilpunteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo ilsuo, obbedendo ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa il suo movimento per sottrarsi al pericolo.
Ai Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 5 livello
o superiore, usa lo slot di livello piti alto che compare nella sua scheda delle statistiche.
SPIRITO ABERRANTE Aberrazione Media
Classe Armatura 1 + il livello dell'incantesimo (armatura naturale) 
Punti Ferita 40 + 10 per ogni livello di incantesimo sopra il4° 
Velocita 9 m, volare 9 m (fluttuare) (solo pseudo-onnivedente) SaaS
FOR 16 (+3) re—
DES cos 10(+0) 15(42)
INT SAG CAR
Immunita ai Danni psichici
Sensi Percezione passiva 10, scurovisione 18 m
Linguaggi Gergo delle Profondita, comprende i linguaggi parlati
dal personaggio
Sfida — Bonus dicompetenza pari aquello del personaggio —_S=
Rigenerazione (Solo Slaad). Se ha almeno 1 punto ferita, l'‘aberrazione recupera 5 punti ferita all'inizio del suo turno.
Aura Sussurrante (Solo Progenie Stellare). All'inizio di ogni turno dell'aberrazione, purché questa non sia incapacitata, ogni creatura entro 1,5 metri dall'aberrazione deve superare un tiro salvezza
su Saggezza contro la CD del tiro salvezza dell'incantesimo
del personaggio o subire 2d6 danni psichici.
AZIONI
Multiattacco. Uaberrazione effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Artigli (Solo Slaad). Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d10 + 3 + il livello dell'incantesimo danni taglienti. Se il bersaglio @ una creatura, non pud recuperare punti ferita fino all'inizio del turno successivo dell'aberrazione.
Raggio Oculare (Solo Pseudo-onnivedente). Attacco con Incantesimo a Distanza: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, gittata 45 m, una creatura. Colpito: 1d8 + 3+ illivello dell'incantesimo danni psichici.
=Colpo FPsichico (Solo Progenie Stellare). Attacco con Incantesimoin Mischia: modificatore di attacco dell'incantesimo del personaggio tiro per colpire, portata 1,5 m, una creatura. Colpito: 148 + 3 + ivellodell'incantesimo di uipsichici. Cari j Jabs.

Evoca BESTIA D'OMBRA
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (delle lacrime all'interno di una gemma del valore di almeno 300 mo) 
Durata: Concentrazione, fino a 1 ora
L'incantatore invoca uno spirito dell'ombra che si manifesta in uno spazio libero entro gittata che egli sia in grado
di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito d'Ombra. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere uno stato d'animo tra furia, disperazione
o paura. La creatura ha le sembianze di una creatura bipede deforme, a scelta dell'incantatore, che é in uno di questi tre stati d'animo e in base a questa scelta vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 o quando |'incantesimo termina.
La creatura diventa un alleato per l'incantatore e isuoi compagni. In combattimento, la creatura condivide ilpunteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo il suo, obbedendo ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa il suo movimento per sottrarsi al pericolo.
Ai Livelfi Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello
o superiore, usa lo slot di livello piti alto che compare nella sua scheda delle statistiche.
SPIRITO D'OMBRA Mostruosita Media
Classe Armatura 1 + illivello dell'incantesimo (armatura naturale) 
Punti Ferita 35 + 15 per ogni livello di incantesimo sopra il 3° 
Velocita 12 m
FOR DES cos INT SAG CAR 13 (+1) 16 (+3) 15 (+2) 4 (-3) 10 (+0) 16 (+3)
Resistenze ai Danni necrotici
Immunita alle Condizioni spaventato
Sensi Percezione passiva 10, scurovisione 36 m
Linguaggi comprende i linguaggi parlati dal personaggio
Sfida — Bonus dicompetenza pari aquello del personaggio
Frenesia Spaventosa (Solo Furia). Lo spirito dispone di vantaggio ai tiri per colpire contro le creature spaventate.
Peso del Dolore (Solo Disperazione). Qualsiasi creatura, escluso ilper- sonaggio, che inizi ilsuo turno entro 1,5 metri dallo spirito vede la sua velocita ridotta di 6 metri fino all'inizio del proprio turno successivo.
AZIONI
Multiattacco. Lo spirito effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Squarcio Gelido. Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio.Colpito:1d12+3+illivellodell'incantesimodannidafreddo.
Grido Agghiacciante (1/Giorno). Lo spirito lancia un urlo: ogni creatura entro 9 metri dallo spirito deve superare un tiro salvezza su Saggezza contro la CD del tiro salvezza dell'incantesimo
del personaggio o essere spaventata dallo spirito per 1 minuto. La creatura spaventata puo ripetere iltiro salvezza alla fine di ogni suo turno e, se lo supera, l'effetto svanisce.
AZIONI BONUS
Furtivitd d'‘Ombra (Solo Paura). Quando si trova in oscurita o luce fioca, lo spirito effettua l'azione Nascondersi.

EVOCA CELESTIALE
Evocazione di 5 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un reliquario dorato del valore di almeno 500 mo)
Durata: Concentrazione, fino a 1 ora
L'incantatore invoca uno spirito celestiale che si manifesta in forma angelica in uno spazio libero entro gittata che egli sia in grado di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Celestiale. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere tra Vendicatore e Difensore. Con questa scelta, l'incantatore determina il tipo di attacco della creatura nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 0 quando I'incantesimo termina.
La creatura diventa un alleato per I'incantatore e isuoi compagni. In combattimento, la creatura condivide
il punteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo ilsuo, obbedendo
ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa ilsuo movimento per sottrarsi al pericolo.
Ai Livelli Superiori. Quando l'incantatore lancia questo incantesimo usando uno slot incantesimo di 6 livello
o superiore, usa lo slot di livello piti alto che compare nella sua scheda delle statistiche.
SPIRITO CELESTIALE Celestiale Grande
Classe Armatura 1+ illivello dell'incantesimo (armatura naturale) + 2 (solo Difensore)
Punti Ferita 40 + 10 per ogni livello di incantesimo sopra il 5° Velocita 9 m, volare 12 m
FOR DES cos INT SAG CAR
16 (+3) 14(+2) 16 (+3) 10(40) 14(42)
16 (+3)
Resistenze ai Danni radiosi
Immunita alle Condizioni affascinato, spaventato
Sensi Percezione passiva 12, scurovisione 18 m
Linguaggi Celestiale, comprende i linguaggi parlati dal personaggio Sfida — Bonus di competenza pari a quello del personaggio
AZIONI
Multiattacco. |celestiale effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Arco Radioso (Solo Vendicatore). Attacco con Arma a Distanza: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, gittata 45/180 m, un bersaglio, Colpito; 2d6 + 2+ illivello dell'incantesimo danni radiosi.
Mazza Radiosa (Solo Difensore). Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d10 + 3+ illivello dell'incantesimo danni radiosi. Inoltre ilcelestiale pud scegliere se stesso o un‘altra creatura che pud vedere entro 3 metri dal bersaglio: la creatura scelta ottiene 1d10 punti ferita temporanei.
Tocco Guaritore (1/Giorno). |celestiale tocca un‘altra creatura, che re- cupera magicamente punti ferita pari a 2d8 + il livello dell'incantesimo.

EVOCA COSTRUTTO
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (una pietra dipinta e uno scrigno di metallo del valore di almeno 400 mo) 
Durata: Concentrazione, fino a 1 ora
L'incantatore invoca lo spirito di un costrutto che
si manifesta in uno spazio libero entro gittata che egli sia in grado di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito del Costrutto. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere un materiale tra argilla, metallo o pietra. La creatura ha le sembianze
di un golem o un modron (a scelta dell'incantatore),
dal corpo costituito da uno di questi materiali, e in base a questa scelta vengono determinati alcuni tratti nella scheda delle statistiche del costrutto. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 0 quando l'incantesimo termina.
La creatura diventa un alleato per l'incantatore e isuoi compagni. In combattimento, la creatura condivide
il punteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo ilsuo, obbedendo
ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa ilsuo movimento per sottrarsi al pericolo.
Ai Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo
di 4 livello o superiore, usa lo slot di livello pid alto che compare nella sua scheda delle statistiche.
PIRITO DEL COSTRUTTO Costrutto Medio
a
_Classe Armatura 13+ illivello dell'incantesimo (armatura naturale) Punti Ferita 40 + 15 per ogni livello di incantesimo sopra i!3° Velocita 9 m
FOR DES cos 18 (+4) 10(+0) 18(+4) INT SAG
1442) (40) 5(-3)
Resistenze ai Danni veleno
Immunita alle Condizioni affascinato, avvelenato, incapacitato,
indebolimento, paralizzato, pietrificato, spaventato
Sensi Percezione passiva 10, scurovisione 18 m
Linguaggi comprende i linguaggi parlati dal personaggio
Sfida — Bonus di competenza pari a quello del personaggio —= Corpo Riscaldato (Solo Metallo). Qualsiasi creatura che tocchi ilcostrutto o lo colpisca con un attacco in mischia trovandosi entro 1,5 metri da esso subisce 1d10 danni da fuoco.
Flemma Rocciosa (Solo Pietra). Quando una creatura che ilcostrutto pud vedere inizia ilsuo turno entro 3 metri da esso, ilcostrutto pud costringerla a effettuare un tiro salvezza su Saggezza contro la CD del tiro salvezza dell'incantesimo del personaggio: in caso difallimento, ilbersaglio non pud usare reazioni elasua velocita é dimezzata fino all'inizio del suo turno successivo.
AZIONI
Multiattacco. | costrutto effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Schianto. Attacco con Arma da Mischia: modificatore di attacco dell'in- cantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersa- glio. Colpito: 1d8 + 4 + il livello dell'incantesimo danni contundenti.
RE
AZIONI
Slancio Rabbioso (Solo Argilla). Quando i|costrutto subisce danni, effettua un attacco Schianto contro una creatura a caso entro 1,5 metri. Se non ci sono creature a portata, ilcostrutto si muove di fino a meta della sua velocita verso un nemico nel suo campo visivo, senza provocare attacchi di opportunita.

EVOCA ELEMENTALE
Evocazione di 4 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (aria, un sassolino, cenere e acqua all'interno di una fiala intarsiata d'oro del valore di almeno 400 mo)
Durata: Concentrazione, fino a 1 ora
L'incantatore evoca uno spirito elementale che si manifesta in uno spazio libero entro gittata che egli sia in grado
di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Elementale. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere un elemento tra aria, terra, fuoco o acqua. La creatura ha le sembianze di una creatura bipede
dal corpo costituito da uno di questi elementi e in base a questa scelta vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 0 quando l'incantesimo termina.
La creatura diventa un alleato per l'incantatore e isuoi compagni. In combattimento, la creatura condivide
il punteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo ilsuo, obbedendo aisuoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa il suo movimento per sottrarsi al pericolo.
Ai Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 5 livello
o superiore, usa lo slot di livello pit: alto che compare nella sua scheda delle statistiche.
SPIRITO 
ELEMENTALE Elementale Medio
Classe Armatura 1+ illivello dell'incantesimo (armatura naturale) Punti Ferita 50 + 10 per ogni livello di incantesimo sopra il4° Velocita 12 m; scavare 12 m (solo terra); volare 12 m (fluttuare) (solo aria); nuotare 12 m (solo acqua)
FOR DES cos INT SAG CAR 18 (+4) 15 (+2) 1743) 4 (-3) 1040) —-16 (+3)
=
Resistenze ai Danni acido (solo acqua); fulmine e tuono (solo aria);
perforante etagliente (solo terra)
Immunita ai Danni veleno; fuoco (solo fuoco)
Immunita alle Condizioni avvelenato, indebolimento, paralizzato,
pietrificato, privo di sensi
Sensi Percezione passiva 10, scurovisione 18 m
Linguaggi Primordiale, comprende ilinguaggi parlati dal personaggio Sfida — Bonus di competenza pari a quello del personaggio
Forma Amorfa (Solo Aria, Acqua e Fuoco). L'elementale pud muoversi attraverso uno spazio stretto fino a 2,5 centimetri senza doversi stringere.
AZIONI
Multiattacco. L'elementale effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Schianto. Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d10 + 4 + il livello dell'incantesimo danni contundenti (solo aria, terra eacqua) o danni da fuoco (solo fuoco).

EVOCA FOLLETTO
Evocazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un fiore dorato del valore di almeno 300 mo)
Durata: Concentrazione, fino a 1 ora
L'incantatore invoca uno spirito fatato che si manifesta in uno spazio libero entro gittata che egli sia in grado
di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Fatato. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere uno stato d'animo tra rabbioso, gioioso o malandrino.,
La creatura ha le sembianze di uno spirito fatato a scelta dell'incantatore che é in uno di questi tre stati d'animo
e in base a questa scelta vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 o quando l'incantesimo termina.
La creatura diventa un alleato per l'incantatore e isuoi compagni. In combattimento, la creatura condivide
il punteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo ilsuo, obbedendo ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa
il suo movimento per sottrarsi al pericolo.
Ai Livelfi Superiori. Quando l'incantatore lancia questo
incantesimo usando uno slot incantesimo di 4 livello o superiore, usa lo slot di livello pitt alto che compare nella sua scheda delle statistiche.
SPIRITO FATATO Falletto Piccolo
Classe Armatura 12 + illivello dell'incantesimo (armatura naturale) Punti Ferita 30 + 10 per ogni livello di incantesimo sopra il 3° Velocita 12 m
FOR DES cos INT SAG CAR 13 (+1) 16 (+3) 14 (+2) 14 (+2) 1 (+0) 16 (+3)
Immunita alle Condizioni affascinato
Sensi Percezione passiva 10, scurovisione 18 m
Linguaggi Silvano, comprendei linguaggi parlati dal personaggio
Sfida —
AZIONI
Bonus di competenza pari a quello del personaggio
Multiattacco. |folletto effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Spada Corta. Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d6 + 3 + il livello dell'incantesimo danni perforanti + 1d6 danni da forza.
AZIONI BONUS
Passo Fatato. |folletto siteletrasporta magicamente di un massimo di 9 metri fino a uno spazio libero che sia in grado di vedere. Dopodiché si verifica uno dei seguenti effetti, in base all'umore del folletto:
Rabbioso. |folletto dispone di vantaggio al prossimo tiro per colpire che effettua prima della fine di questo turno.
Gioioso. |folletto pud costringere una creatura che pud vedere entro 3 metri a effettuare un tiro salvezza su Saggezza contro laCD del tiro salvezza dell'incantesimo del personaggio. Se non supera iltiro salvezza, la creatura resta affascinata dal personag- gio e dal folletto per 1 minuto o finché non subisce danni.
Malandrino. |folletto pud colmare di oscurita magica un cubo con spigolo di 1,5 metri entro 1,5 metri da sé; |'effetto termina alla fine del suo turno successivo.

EVOCA IMMONDO
Evocazione di 6 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (il sangue di una creatura umanoide all'interno di una fiala rosso rubino del valore di almeno 600 mo) 
Durata: Concentrazione, fino a 1 ora
Lincantatore invoca uno spirito demoniaco che si manifesta in uno spazio libero entro gittata che egli sia in grado di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Demoniaco. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere una creatura demoniaca tra demone, diavolo o yugoloth. La creatura ha le sembianze della creatura demoniaca scelta e in base a questa scelta vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 o quando I'incantesimo termina. La creatura diventa un alleato per I'incantatore e isuoi compagni. In combattimento, la creatura condivide il punteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo il suo, obbedendo ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa il suo movimento
per sottrarsi al pericolo.
Ai Livelli Superiori. Quando I'incantatore lancia questo
incantesimo usando uno slot incantesimo di 7 livello o superiore, usa lo slot di livello pit: alto che compare nella sua scheda delle statistiche.
SPIRITO DEMONIACO Immondo Grande
— zs Classe Armatura 12+ illivello dell'incantesimo (armatura naturale) Punti Ferita 50 (solo demone) o 40 (solo diavolo) 0 60 (solo yugoloth)
+ 15 per ogni livello di incantesimo sopra il6°
Velocita 12 m; scalare 12 m (solo demone); volare 18 m (solo diavolo) SSS
FOR DES cos INT SAG CAR 13(+1) 16(43) 15(+2) 10(+0) 10(+0) 16(43)
==
Resistenze ai Danni fuoco
Immunita ai Danni veleno
Immunita alle Condizioni avvelenato
Sensi Percezione passiva 10, scurovisione 18 m
Linguaggi Abissale, Infernale, telepatia 18 m
Sfida — Bonus di competenza pari a quello del personaggio
Spasmi di Morte (Solo Demone). Quando |'immondo scende a 0 punti ferita o l'incantesimo termina, l'immondo esplode e ogni creatura entro 3 metri da lui deve superare un tiro salvezza su Destrezza contro la CD del tiro salvezza dell'incantesimo del personaggio. In caso di fal- limento,lacreaturasubisce2d10+illivellodiquest'incantesimodanni da fuoco, mentre se lo supera subisce soltanto la meta di quei danni.
Vista del Diavolo (Solo Diavolo). L'oscurita magica non ostacola lascurovisione dell'immondo.
Resistenza allaMagia. L'immondo dispone divantaggio aitirisalvezza contro incantesimi e altri effetti magici.
AZIONI
Multiattacco. Limmondo effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Morso (Solo Demone). Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d12 + 3 + illivello dell'incantesimo danni necrotici.
Artigli (Solo Yugoloth). Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d8 + 3+ illivello dell'incantesimo danni taglienti. Subito dopo l'attacco, sia in caso di successo che di fallimento, l'immondo pué teletrasportarsi di un massimo
di 9 metri fino a uno spazio libero che egli sia in grado di vedere.
Scagliare Fiamma (Solo Diavolo). Attacco con Incantesimo a Distanza: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, gittata 45 m, un bersaglio. Colpito: 2d6 + 3 + il livello dell'in- cantesimo danni da fuoco. Se ilbersaglio é un oggetto infiammabile che non é indossato o trasportato, prende anche fuoco.

EVOCA NON MORTO
Necromanzia di 3 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (un teschio dorato del valore di almeno 300 mo)
Durata: Concentrazione, fino a 1 ora
Lincantatore evoca uno spirito non morto che si manifesta in uno spazio libero entro gittata che egli sia in grado
di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Non Morto. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere la forma della creatura tra spettrale, putrida
o scheletrica. La creatura ha le sembianze di una creatura non morta della forma scelta e in base a questa scelta vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 o quando I'incantesimo termina.
La creatura diventa un alleato per l'incantatore e isuoi compagni. In combattimento, la creatura condivide
il punteggio di iniziativa con l'incantatore, ma inizia
il turno immediatamente dopo il suo, obbedendo ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa il suo movimento per sottrarsi al pericolo.
Aji Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello
o superiore, usa lo slot di livello pit: alto che compare nella sua scheda delle statistiche.
SprrITo Non MortTo Non Morto Medio
Classe Armatura 1+ illivello dell'incantesimo (armatura naturale) Punti Ferita 30 (solo spettrale o putrido) o 20 (solo scheletrico) +
10 per ogni livello di incantesimo sopra il 3° Velocita 9 m; volare 12 m (fluttuare) (solo spettrale)
FOR DES cos INT SAG CAR 12(+1) 16 (43) «15 (+2) = 4(-3) 10 (40) 9.(-1)
+RaEET
Immunita ai Danni necrotici, veleno
Immunita alle Condizioni avvelenato, indebolimento, paralizzato,
spaventato
Sensi Percezione passiva 10, scurovisione 18 m
Linguaggi comprende ilinguaggi parlati dal personaggio
Sfida — Bonus di competenza pari a quello del personaggio
‘i ;
Aura Marcescente (Solo Putrido). Qualsiasi creatura, escluso ilpersonaggio, che inizi ilsuo turno entro 1,5 metri dallo spirito deve superare un tiro salvezza su Costituzione contro la CD del tiro salvezza dell'incantesimo del personaggio o essere avvelenata fino all'inizio del proprio turno successivo.
Movimento Incorporeo (Solo Spettrale). Lo spirito pud muoversi attraversoaltrecreatureeoggetticome sefosseroterrenodifficile. Se termina ilsuo turno all'interno di un oggetto, viene spinto nello spazio libero pit vicino e subisce 1d10 danni da forza per ogni
1,5 metri che ha percorso.
AZIONI
Multiattacco. Lo spirito effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Tocco Mortale (Solo Spettrale). Attacco con Arma da Mischia: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, portata 1,5 m, una creatura. Colpito: 1d8 + 3+ illivello dell'incantesimo danni necrotici, e la creatura deve superare un tiro salvezza su Saggezza contro la CD del tiro salvezza dell'incantesimo del personaggio o essere spaventata dal non morto fino alla fine del turno successivo della creatura.
Dardo Tombale (Solo Scheletrico). Attacco con Incantesimo a Distanza: modificatore di attacco dell'incantesimo del personaggio al tiro per colpire, gittata 45 m, un bersaglio. Colpito: 2d4 + 3 + il livello dell'incantesimo danni necrotici.
Artiglio Putrefatto (Solo Putrido). Attacco con Arma da Mischia: modificatore diattacco dell'incantesimo del personaggio altiro per colpire, portata 1,5 m, un bersaglio. Colpito: 1d6 + 3+ illivello dell'incantesimo danni taglienti. Se ilbersaglio ¢avvelenato, deve superare un tiro salvezza su Costituzione contro la CD del tiro salvezza dell'incantesimo del personaggio, altrimenti é paralizzato finoal termine del proprio turno successivo.

EVOCARE BESTIA
Evocazione di 2 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V, S, M (una piuma, un ciuffo di pelliccia e una coda di pesce all'interno di una ghianda dorata del valore di almeno 200 mo) 
Durata: Concentrazione, fino a 1 ora
L'incantatore invoca uno spirito bestiale che si manifesta in uno spazio libero entro gittata che egli sia in grado di vedere. La forma corporea di questo spirito utilizza la scheda delle statistiche dello Spirito Bestiale. Quando questo incantesimo viene lanciato, l'incantatore pud scegliere l'ambiente da cui proviene lo spirito evocato tra aria, terra o acqua. La creatura ha le sembianze
di un animale a scelta dell'incantatore proveniente da uno di questi ambienti e in base a questa scelta vengono determinati alcuni tratti nella sua scheda delle statistiche. La creatura scompare quando ilvalore dei suoi punti ferita scende a 0 0 quando |'incantesimo termina.
La creatura diventa un alleato per I'incantatore e isuoi compagni. In combattimento, la creatura condivide il punteggio di iniziativa con l'incantatore, ma inizia ilturno immediatamente dopo il suo, obbedendo ai suoi comandi verbali senza che all'incantatore venga richiesta alcuna azione. Se l'incantatore non pronuncia comandi verbali, la creatura compie la Schivata e usa il suo movimento per sottrarsi al pericolo.
Ai Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello
o superiore, usa lo slot di livello pit: alto che compare nella sua scheda delle statistiche.
SPIRITO BESTIALE Bestia Piccola
ClasseArmatura 1+illivellodell'incantesimo (armatura naturale) Punti Ferita 20 (solo aria) o 30 (solo terra e acqua) + 5 per ogni
livello di incantesimo sopra il2°
Velocita 9 m; scalare 9 m (solo terra); volare 18 m (solo aria); nuotare 18 m (solo acqua)
FOR 18 (+4)
DES = 1 (+0)
cos ~—s16 (+3)
INT 4 (-3)
SAG 14 (+2)
CAR 5 (-3)
===
Sensi Percezione passiva 12, scurovisione 18 m
Linguaggi comprende i linguaggi parlati dal personaggio
Sfida — Bonus dicompetenza pari aquello del personaggio ——
Sfuggente (Solo Aria). La bestia non provoca attacchi d'opportunita quando esce volando dalla portata di un nemico.
Tattiche del Branco (Solo Terra eAcqua). La bestia dispone di vantaggio aun tiro per colpire contro una creatura se almeno uno degli alleati della bestia si trova entro 1,5 metri dalla creatura e non é incapacitato.
Respirare sott ‘Acqua (solo Acqua). La bestia pud respirare soltanto sott'acqua.
AZIONI
Multiattacco. La bestia effettua un numero di attacchi pari alla meta del livello di quest'incantesimo (arrotondando per difetto).
Dilaniare. Attacco con Arma da Mischia: modificatore di attacco dell'in- cantesimo del personaggio al tiro per colpire, portata 1,5 m, un bersa- glio.Colpito: 1d8 +4+illivellodell'incantesdiamnnoi perforanti.

FORTEZZA DELLA MENTE
Abiurazione di 3 livello
Tempo di Lancio: 1 azione
Gittata: 9 metri
Componenti: V
Durata: Concentrazione, fino a 1 ora
Per tutta la durata dell'incantesimo, l'incantatore o una creatura consenziente entro gittata che egli sia in grado di vedere ottiene resistenza ai danni psichici e un vantaggio ai tiri salvezza su Intelligenza, Saggezza e Carisma.
Ai Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello
o superiore, pud bersagliare una creatura aggiuntiva per ogni slot superiore al 3°. Quando l'incantatore le bersaglia, le creature devono trovarsi a non pit di 9 metri l'una dall'altra.

LAMA DEL DISASTRO
Evocazione di 9 livello
Tempo di Lancio: 1 azione bonus
Gittata: 18 metri
Componenti: V,S
Durata: Concentrazione, fino a 1 minuto
Ilpersonaggio crea una spaccatura planare aforma di lama lunga circa 90 cm che compare in uno spazio libero entro gittata che egli sia in grado di vedere. Questa lama permane per tutta la durata dell'incantesimo. Una volta lanciato questo incantesimo, l'incantatore pud effettuare con la lama evocata fino a due attacchi in mischia con incantesimo, ognuno dei quali pud essere lanciato contro una creatura, un oggetto non equipaggiato o una struttura posti entro un raggio di 1,5 metri dalla lama. Se lo colpisce, ilbersaglio subisce 4d12 danni da forza. Questo attacco va considerato come un colpo critico se ottiene un risultato pari o superiore a 18 sul tiro del d20. In caso di colpo critico, la lama infligge 8d12 danni da forza extra
(per un totale di 12d12 danni da forza). Come azione bonus nel suo turno, l'incantatore pud muovere la lama fino a un massimo di 9 metri verso uno spazio libero entro gittata che egli sia in grado di vedere, dopodiché, sempre durante la stessa azione, pud effettuare fino a due attacchi in mischia con incantesimo.
La lama é in grado di attraversare indisturbata qualsiasi barriera, incluso un muro di forza.

LAMA ROBOANTE
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 1,5 metri) 
Componenti: S, M (un'arma da mischia del valore dialmeno 1ma) 
Durata: 1 round
Il personaggio impugna l'arma prevista dall'incantesimo ed effettua con questa un attacco in mischia contro una creatura nel raggio di 1,5 metri da lui. Se colpisce, il ber- saglio subisce gli effetti normalmente inflitti dall'attacco con quest'arma e resta avvinto dal suo roboante flusso di energia fino all'inizio del turno successivo dell'incantatore. Se ilbersaglio cerca dimuoversi di 1,5 metri opit prima di allora, subisce 1d8 danni da tuono e l'incantesimo termina. Il danno inflitto da questo incantesimo aumenta man mano che il personaggio raggiunge determinati livelli. Al 5° livello l'attacco in mischia, quando va a segno, infligge1d8dannidatuonoextrae,seilbersaglioprova a muoversi, idanni da tuono aumentano a 2d8. Il tiro per idanni di entrambi gli attacchi aumenta di 1d8 quando i raggiungono !'11° livello (2d8 e 3d8) e il 17° livello (3d8 e 4d8).

LAMA VERDEFIAMMA
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 1,5 metri) 
Componenti: S, M (un'arma da mischia del valore dialmeno 1ma) 
Durata: Istantanea
Ilpersonaggio impugna Il'arma prevista dall'incantesimo ed effettua con questa un attacco in mischia contro una creatura nel raggio di 1,5 metri da lui. Se colpisce, il bersa- glio subisce gli effetti normalmente inflitti dall'attacco con quest'arma eilpersonaggio pud indirizzare ilfuoco verde emanato facendolo saltare dal bersaglio a un'‘altra creatura a sua scelta che egli é in grado di vedere entro un raggio di 1,5 metri da lui. La seconda creatura subisce danni da fuoco pari al modificatore di caratteristica da incantatore del personaggio.
Il danno inflitto da questo incantesimo aumenta man mano che ilpersonaggio raggiunge determinati livelli. Al 5° livello l'attacco in mischia, quando va a segno, infligge 1d8 danni da fuoco extra che aumentano
a 1d8 + il modificatore di caratteristica da incantatore del personaggio quando vengono inflitti alla seconda creatura. Itiroperidanni dientrambi gliattacchi aumenta di 1d8 quando si raggiungono !'11° livello (2d8 e 2d8) e il 17° livello (3d8 e 3d8).

LENZA ELETTRIZZANTE
Trucchetto di Invocazione
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 4,5 metri) 
Componenti: V
Durata: Istantanea
Lincantatore crea una frusta di energia del fulmine che colpisce una creatura a sua scelta nel raggio di 4,5 metri da lui e che egli sia in grado di vedere. Il bersaglio deve superare un tiro salvezza su Forza o essere trascinato fino a 3 metri in linea retta verso l'incantatore, subendo
1d8 danni da fulmine se arriva nel raggio di 1,5 metri da lui. Idanni di questo incantesimo aumentano di 1d8 quando
l'incantatore arriva al 5° livello (2d8), 11° livello (3d8) e 17° livello (4d8).

MISCELA CAUSTICA DI TASHA
Invocazione di 1 livello
Tempo di Lancio: 1 azione
Gittata: Incantatore (linea di 9 metri)
Componenti: V, S, M (un frammento di cibo avariato) 
Durata: Concentrazione, fino a 1 minuto
Lincantatore emana un fiotto d'acido che indirizza in una direzione asua scelta, formando una linea lunga 9metri
e larga 1,5 metri. Ogni creatura entro la linea deve superare un tiro salvezza su Destrezza o essere ricoperto dall'acido per la durata dell'incantesimo o finché una delle creature coinvolte non usa la sua azione per ripulire se stessa
o un‘altra creatura dall'acido. La creatura che resta ricoperta dall'acido subisce 2d4 danni da acido all'inizio di ogni suo turno.
Ai Livelli Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 2 livello
o superiore, idanni aumentano di 2d4 per ogni slot
di livello superiore al 1°.

SCHEGGIA DELLA MENTE
Trucchetto di Ammaliamento
Tempo di Lancio: 1 azione
Gittata: 18 metri
Componenti: V
Durata: 1 round
L'iincantatore guida un flusso di energia psichica nella mente di una creatura entro gittata che egli sia in grado di vedere, disorientandola. La creatura deve superare un tiro salvezza su Intelligenza o subire 1d6 danni psichici e sottrarre 1d4 al tiro salvezza successivo che effettua prima del termine del turno successivo dell'incantatore.
Il danno inflitto da questo incantesimo aumenta
di 1d6 man mano che ilpersonaggio raggiunge determinati livelli: 5° livello (2d6), 11° livello (3d6) e 17° livello (4d6).

SCUDISCIO MENTALE DI TASHA
Ammaliamento di 2 livello
Tempo di Lancio: 1 azione
Gittata: 27 metri
Componenti: V
Durata: 1 round
Lincantatore scaglia un attacco psichico contro una creatura entro gittata che egli sia in grado di vedere
e il bersaglio deve effettuare un tiro salvezza su Intelligenza. In caso di fallimento, il bersaglio subisce 3d6 danni psichici e non puo effettuare una reazione fino al termine del proprio turno successivo. Inoltre, nel suo turno successivo, pud scegliere solo un'opzione tra muoversi, compiere un'azione o effettuare un'azione bonus. Se invece supera iltiro salvezza, ilbersaglio subisce soltanto la meta di quei danni e non viene influenzato dagli altri effetti dell'incantesimo.
Ai Livelfi Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 3 livello o superiore, pud bersagliare una creatura aggiuntiva per ogni slot superiore al 2°. Quando I'incantatore le bersaglia, le creature devono trovarsi a non pitt di 9 metri l'una dall'altra.

SOGNO DEL VELO CELESTE
Evocazione di 7 livello
Tempo di Lancio: 10 minuti
Gittata: 6 metri
Componenti: V, S, M (un oggetto magico o una creatura consenziente proveniente dal mondo di destinazione)
Durata: 6 ore
Lincantatore e fino a un massimo di otto creature consenzienti entro gittata cadono privi di sensi per
la durata dell'incantesimo e vengono raggiunti da visioni di altri mondi del Piano Materiale, come Oerth, Toril, Krynn o Eberron. Se l'incantesimo permane fino alla fine della sua durata, la visione termina con ipersonaggi che si ritirano dietro un misterioso velo blu. Quindi, al termine dell'incantesimo, ipersonaggi vengono trasportati mentalmente e fisicamente nel mondo della visione avuta.
Per poter lanciare questo incantesimo, l'incantatore deve possedere un oggetto magico proveniente dal mondo che desidera raggiungere e deve essere a conoscenza dell'esistenza effettiva di quel mondo, anche se non ne conosce ilnome. I]mondo della visione viene raggiunto in un luogo sicuro nel raggio di 1,5 km dal luogo dove
é stato creato l'oggetto magico. Oppure, é possibile lanciare l'incantesimo se una delle creature sotto la sua influenza
é nata nel mondo che si desidera raggiungere, e si viene materializzati in un luogo sicuro nel raggio di 1,5 km dal luogo dove é nata quella creatura.
Leffetto dell'incantesimo su una creatura termina prema- turamente se quella creatura subisce danni, impedendole cosi di raggiungere il mondo della visione. Se é l'incantatore a subire danni, l'effetto dell'incantesimo termina sia
per lui che per tutte le altre creature e nessuno riesce a raggiungere il mondo della visione.

SUDARIO SPIRITUALE
Necromanzia di 3 livello
Tempo di Lancio: 1 azione bonus
Gittata: Incantatore
Componenti: V,S
Durata: Concentrazione, fino a 1 minuto
Lincantatore invoca alcuni spiriti dei defunti che fluttuano attorno a lui per la durata dell'incantesimo. Gli spiriti sono intangibili e invulnerabili.
Finché l'incantesimo non termina, ogni attacco effettuato dall'incantatore infligge 1d8 danni extra quando colpisce una creatura nel raggio di 3 metri da lui. I danni inflitti possono essere radiosi, necrotici o da freddo, a seconda del tipo scelto dall'incantatore al momento del lancio dell'incantesimo. Tutte le creature che subiscono questi danni non possono recuperare punti ferita fino all'inizio del turno successivo dell'incantatore.
In piu, un‘altra creatura a sua scelta che egli riesce
a vedere che inizia il suo turno entro 9 metri da lui vede la sua velocita ridotta di 3 metri fino all'inizio del turno successivo dell'incantatore.
Ai Livelfi Superiori. Quando |'incantatore lancia questo incantesimo usando uno slot incantesimo di 4 livello
o superiore, idanni aumentano di 1d8 per ogni due slot di livello superiore al 3°.

TURBINE DI SPADE
Trucchetto di Evocazione
Tempo di Lancio: 1 azione
Gittata: Incantatore (raggio di 1,5 metri)
Componenti: V 
Durata: Istantanea
L'incantatore crea un cerchio di spade spettrali che vorticano attorno a lui temporaneamente. Ogni altra creatura situata entro 1,5 metri da lui deve superare un tiro salvezza su Destrezza, altrimenti ognuna di loro subisce 1d6 danni da forza.
Idanni di questo incantesimo aumentano di 1d6 quando l'incantatore arriva al 5° livello (2d6), 11° livello (3d6)
e 17° livello (4d6).
`,
    listaIncantesimi: {
      incantesimiBardo: `
Fortezza della Mente
Sogno del Velo Celeste

`,
      incantesimiChierico: `
Sudario Spirituale
Evoca Celestiale
`,
      incantesimiDruido: `
Evocare Bestia
Evoca Folletto
Evoca Elementale
`,
      incantesimiMago: `
Lama Roboante
Lama Verdefiamma
Lenza Elettrizzante
Scheggia della Mente
Turbine di Spade
Miscela Caustica di Tasha
Scudiscio Mentale di Tasha
Evoca Bestia d'Ombra
Evoca Folletto
Evoca Non Morto
Fortezza della Mente
Sudario Spirituale
Evoca Aberrazione
Evoca Costrutto
Evoca Elementale
Abito Ultraterreno di Tasha
Evoca Immondo
Sogno del Velo Celeste
Lama del Disastro
`,
      incantesimiPaladino: `
Sudario Spirituale
Evoca Celestiale
`,
      incantesimiRanger: `
Evocare Bestia
Evoca Folletto
Evoca Elementale
`,
      incantesimiStregone: `
Lama Roboante
Lama Verdefiamma
Lenza Elettrizzante
Scheggia della Mente
Turbine di Spade
Miscela Caustica di Tasha
Scudiscio Mentale di Tasha
Fortezza della Mente
Abito Ultraterreno di Tasha
Sogno del Velo Celeste
Lama del Disastro
`,
      incantesimiWarlock: `
Lama Roboante
Lama Verdefiamma
Lenza Elettrizzante
Scheggia della Mente
Turbine di Spade
Evoca Bestia d'Ombra
Evoca Folletto
Evoca Non Morto
Fortezza della Mente
Sudario Spirituale
Evoca Aberrazione
Abito Ultraterreno di Tasha
Evoca Immondo
Sogno del Velo Celeste
Lama del Disastro
`,
      incantesimiArtefice: `
Lama Roboante
Lama Verdefiamma
Lenza Elettrizzante
Turbine di Spade
Miscela Caustica di Tasha
Fortezza della Mente
Evoca Costrutto
`
    }
  }
};



/*



*/