const form = document.getElementById("form");

const forNavn = document.getElementById("for_navn");
const etterNavn = document.getElementById("etter_navn");
const alder = document.getElementById("alder");

const gateNavn = document.getElementById("gate_navn");
const postNummer = document.getElementById("post_nummer");
const postSted = document.getElementById("post_sted");

const ePost = document.getElementById("epost");
const ePost2 = document.getElementById("epost2");
const bruker = document.getElementById("bruker_navn");
const passord = document.getElementById("passord");
const passord2 = document.getElementById("passord2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validerInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (ePost) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(ePost).toLocaleLowerCase());
};

const validLowerUppercase = (passord) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])/;
  return re.test(String(passord));
};

const validNumber = (passord) => {
  const re = /^(?=.*\d)/;
  return re.test(String(passord));
};
const validSpecialCharacter = (passord) => {
  const re = /^(?=.*[@._#$!%*?&^])/;
  return re.test(String(passord));
};

function validerInputs() {
  const navnValue = forNavn.value.trim();
  const etterNavnValue = etterNavn.value.trim();
  const alderValue = alder.value.trim();
  const alderInt = parseInt(alderValue, 10);
  const gateValue = gateNavn.value.trim();
  const post_N_Value = postNummer.value.trim();
  const post_s_Value = postSted.value.trim();
  const emailValue = ePost.value.trim();
  const email2Value = ePost2.value.trim();
  const brukerNavnValue = bruker.value.trim();
  const passordValue = passord.value.trim();
  const passord2Value = passord2.value.trim();

  if (navnValue === "") {
    setError(forNavn, "Du må skrive inn fornavn");
  } else {
    setSuccess(forNavn);
  }

  if (etterNavnValue === "") {
    setError(etterNavn, "Du må skrive inn etternavn");
  } else {
    setSuccess(etterNavn);
  }
  if (alderValue === "") {
    setError(alder, "Du må skrive inn din alder");
  } else if (alderInt > 100) {
    setError(alder, "Skriv inn en gydlig alder, 0-100");
  } else {
    setSuccess(alder);
  }
  if (gateValue === "") {
    setError(gateNavn, "Du må skrive inn gateadresse!");
  } else {
    setSuccess(gateNavn);
  }
  if (post_N_Value === "") {
    setError(postNummer, "Du må skrive inn postnummer");
  } else {
    setSuccess(postNummer);
  }
  if (post_s_Value === "") {
    setError(postSted, "Du må skrive inn poststed");
  } else {
    setSuccess(postSted);
  }
  if (emailValue === "") {
    setError(ePost, "Du må skrive inn epost adresse");
  } else if (!isValidEmail(emailValue)) {
    setError(ePost, "Skriv in en gyldig epost adresse");
  } else {
    setSuccess(ePost);
  }
  if (email2Value === "") {
    setError(ePost2, "Du må bekrefte eposten din!");
  } else if (email2Value !== emailValue) {
    setError(ePost2, "Epostene stemmer ikke");
  } else {
    setSuccess(ePost2);
  }
  if (brukerNavnValue === "") {
    setError(bruker, "Du må skrive brukernavn");
  } else if (brukerNavnValue.length > 15) {
    setError(bruker, "Brukernavnet kan ikke være lengre enn 15 tegn");
  } else {
    setSuccess(bruker);
  }
  if (passordValue === "") {
    setError(passord, "Du må skrive inn passord");
  } else if (passordValue.length < 8) {
    setError(passord, "Minimum passordlengde er 8 tegn");
  } else if (!validNumber(passordValue)) {
    setError(passord, "Passordet skal inneholde minst et tall");
  } else if (!validLowerUppercase(passordValue)) {
    setError(passord, "Passordet skal inneholde store og små bokstaver");
  } else if (!validSpecialCharacter(passordValue)) {
    setError(passord, "Passordet skal inneholde spesialtegn. F.eks: #_$!%*?&");
  } else {
    setSuccess(passord);
  }
  if (passord2Value === "") {
    setError(passord2, "Du må skrive inn passord");
  } else if (passord2Value !== passordValue) {
    setError(passord2, "Passordene stemmer ikke");
  } else {
    setSuccess(passord2);
  }
}
