function calcolaPorzione() {
    // Prendi i valori dal form
    const tipoPasta = parseFloat(document.getElementById("tipoPasta").value);
    const pesoPastaSeccaTotale = parseFloat(document.getElementById("pesoPastaSeccaTotale").value);
    const pesoTotalePadella = parseFloat(document.getElementById("pesoTotalePadella").value);
    const grammiPastaSecca = parseFloat(document.getElementById("grammiPastaSecca").value);

    // Calcola il peso totale della pasta cotta
    const pesoPastaCottaTotale = pesoPastaSeccaTotale * tipoPasta;

    // Calcola la proporzione della tua porzione rispetto al totale
    const proporzione = grammiPastaSecca / pesoPastaSeccaTotale;

    // Calcola il peso della tua porzione di pasta cotta con sugo
    const pesoPorzione = proporzione * pesoTotalePadella;

    // Mostra il risultato
    document.getElementById("risultato").innerText = `Porzione: ${pesoPorzione.toFixed(2)} grammi`;
}
