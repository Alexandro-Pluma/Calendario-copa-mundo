function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
     "segunda-feira",
      createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "luxembourg") +
      createGame("united states", "16:00", "wales") 
      
      
      ) +
  createCard(
    "22/11",
     "terça-feira",
      createGame("argentina", "07:00", "saudi arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia") 
      
      
      ) +
  createCard(
    "23/11",
     "quarta-feira",
      createGame("marroco", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japao") +
      createGame("espanha", "13:00", "costa rica") +
      createGame("belgica", "16:00", "canada") 
      
      
      ) +
  createCard(
    "24/11",
   "quinta-feira",
    createGame("switzerland", "07:00", "cameroon") +
    createGame("uruguai", "10:00", "coreiadosul") +
    createGame("portugal", "13:00", "gana") +
    createGame("brazil", "16:00", "serbia")
   ) +
  createCard(
    "25/11",
   "sexta-feira",
    createGame("wales", "07:00", "iran") +
    createGame("qatar", "10:00", "senegal") +
    createGame("luxembourg", "13:00", "ecuador") +
    createGame("england", "16:00", "united states")
   ) +
  createCard(
    "26/11",
   "sábado",
    createGame("tunisia", "07:00", "australia") +
    createGame("poland", "10:00", "saudi arabia") +
    createGame("france", "13:00", "denmark") +
    createGame("argentina", "16:00", "mexico")
   ) +
  createCard(
    "27/11",
   "domingo",
    createGame("japao", "07:00", "costa rica") +
    createGame("belgica", "10:00", "marroco") +
    createGame("croacia", "13:00", "canada") +
    createGame("espanha", "16:00", "alemanha")
   ) +
  createCard(
    "28/11",
   "segunda-feira",
    createGame("cameroon", "07:00", "serbia") +
    createGame("coreiadosul", "10:00", "gana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguai")
   ) +
  createCard(
    "29/11",
   "terça-feira",
    createGame("luxembourg", "12:00", "qatar") +
    createGame("ecuador", "12:00", "senegal") +
    createGame("wales", "16:00", "england") +
    createGame("iran", "16:00", "united states")
   ) +
  createCard(
    "30/11",
   "quarta-feira",
    createGame("tunisia", "12:00", "france") +
    createGame("australia", "12:00", "denmark") +
    createGame("poland", "16:00", "argentina") +
    createGame("saudi arabia", "16:00", "mexico")
   ) +
  createCard(
    "01/12",
   "quinta-feira",
    createGame("croacia", "12:00", "belgica") +
    createGame("canada", "12:00", "marroco") +
    createGame("japao", "16:00", "espanha") +
    createGame("costa rica", "16:00", "alemanha")
   ) +
  createCard(
    "02/12",
     "sexta",
      createGame("coreiadosul", "16:00", "portugal") +
      createGame("gana", "16:00", "uruguai") +
      createGame("cameroon", "16:00", "brazil") +
      createGame("serbia", "16:00", "switzerland")
      ) 
