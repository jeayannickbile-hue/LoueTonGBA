// Serveur LoueTonGBA - Node.js simple

const voitures = require('./voitures.json');
const reservations = require('./reservations.json');

// 1. Voir toutes les voitures
function voirVoitures() {
  console.log("Liste des voitures :");
  console.log(voitures);
}

// 2. Voir les voitures disponibles
function voirDisponibles() {
  const dispo = voitures.filter(v => v.disponible === true);
  console.log("Voitures disponibles :");
  console.log(dispo);
}

// 3. Réserver une voiture
function reserver(voiture_id, nom_client) {
  const voiture = voitures.find(v => v.id === voiture_id);
  if (voiture && voiture.disponible) {
    console.log(`✅ ${nom_client} a réservé ${voiture.nom} pour ${voiture.prix_par_jour} FCFA/jour`);
  } else {
    console.log("❌ Voiture non disponible");
  }
}

voirVoitures();
voirDisponibles();
reserver(1, "Koffi");
