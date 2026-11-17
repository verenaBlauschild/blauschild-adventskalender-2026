# Blauschild Adventskalender 2026 — sito bilingue DE/IT

## Stato
Prototipo completo e responsive. **Non pubblicare prima di aver caricato il PDF ufficiale e verificato premi/partner.** I dati in `config.js` sono SEGNAPOSTO: i 24 premi sono volutamente coperti e l'elenco partner è parziale da verificare.

## File da aggiungere
- `assets/documenti/regolamento-ufficiale.pdf` — versione finale firmata del regolamento, da caricare prima del lancio.
- `assets/infografica/infografica-concorso.png` — infografica finale.
- `assets/loghi/*.png` — i loghi partner nelle dimensioni pulite, con nomi indicati in `config.js` (anche `wuerth-modyf.png` per il logo Nero-verticale).
- `assets/premi/01.png` ... `assets/premi/24.png` — foto di ogni premio. Puoi modificare nomi/percorso in `config.js`.
- Logo Blauschild ufficiale: il riquadro B nella testata è temporaneo.

## Personalizzare
Apri `config.js`:
- `partners`: elenco dei partner e percorsi ai loghi; aggiungi i partner mancanti e verifica le denominazioni.
- `days`: 24 caselle in ordine. Imposta `reveal: true` solo quando vuoi mostrare pubblicamente il premio, e compila `de`, `it`, `partner`, `image`.
- `winners`: popola solo dopo verbalizzazione ufficiale e verifica privacy, ad esempio `{day:1,displayName:'Nome comunicabile'}`. Evita pubblicazioni anticipate.

## Pubblicazione GitHub
1. Accedi a GitHub e crea un nuovo repository `blauschild-adventskalender-2026` nel profilo corretto. Se non vuoi che il codice sia visibile, crealo **Private**.
2. Carica i contenuti dello ZIP nella radice del repository.
3. **Attenzione:** GitHub Pages non è un sistema di accesso privato al sito. Quando il sito viene pubblicato, può essere accessibile via URL anche se il repository è privato, in base al piano e alle configurazioni. Per un sito protetto servono un hosting con autenticazione o altre misure specifiche. Non abilitare Pages se vuoi che il sito resti non pubblico.
4. Quando decidi di pubblicare: Settings → Pages → Deploy from a branch → main /(root), se disponibile sul tuo piano.
5. Un indirizzo come `blauschild.adventskalender.it` è un *dominio* che richiede registrazione/controllo del dominio `adventskalender.it` e configurazione DNS. Per un sottodominio controllabile più facilmente, valuta `adventskalender.blauschild.it` se hai accesso al DNS di blauschild.it.

## Funzioni e limiti
La pagina è bilingue (DE/IT), responsive, mostra istruzioni DM "QUIZ + spazio + risposta", 24 caselle, 25° premio di consolazione, sezione vincitori, partner, rimando regolamento. Il sito **non raccoglie risposte né assegna premi**: le partecipazioni devono avvenire esclusivamente tramite il sistema DM Instagram previsto dal regolamento.
