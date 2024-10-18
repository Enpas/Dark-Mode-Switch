// Ottieni lo stato iniziale della modalità scura da localStorage
let darkmode = localStorage.getItem('darkmode');
const modeSwitch = document.querySelector('.mode-switch');

// Funzione per abilitare la modalità scura e l'effetto di bagliore della lampadina
const enableDarkmode = () => {
  document.body.classList.add('on');  // Aggiungi la classe 'on' al body
  document.body.classList.add('darkmode');  // Aggiungi la classe 'darkmode' al body
  localStorage.setItem('darkmode', 'active');  // Memorizza lo stato in localStorage
};

// Funzione per disabilitare la modalità scura e rimuovere l'effetto di bagliore della lampadina
const disableDarkmode = () => {
  document.body.classList.remove('on');  // Rimuovi la classe 'on' dal body
  document.body.classList.remove('darkmode');  // Rimuovi la classe 'darkmode' dal body
  localStorage.setItem('darkmode', null);  // Rimuovi lo stato da localStorage
};

// Verifica se la modalità scura è già attiva e applica il relativo stato
if (darkmode === "active") {
  enableDarkmode();
}

// Aggiungi un event listener al pulsante per alternare la modalità scura al clic
modeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


