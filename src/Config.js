// ====================================================
// ====================================================
// == Configuration :  ================================
// ====================================================
// ====================================================

// État du bot (on/off) :
var state = "on";
var debug = "true";

// Nom du compte :
if (debug == "true")  {
  var accountName = "TestBot96875418";
} else {
  var accountName = "Tweether01";
}

// Messages d'erreur :
var error = "\n\n⚠️ Une erreur est survenue...\n\n⚠️ Si le problème persiste, merci de contacter @ Woosy__\n📝 https://github.com/Woosy/Tweether/issues/new";
var errorNoLoc = "\n\n⚠️ Une erreur est survenue...\n⚠️ Vous n'avez pas défini de localisation sur votre page de profil !\n(Exemple de localisation : Lyon, France)\n\n⚠️ Si le problème persiste, merci de contacter @ Woosy__\n📝 https://github.com/Woosy/Tweether/issues/new";
var errorInvalidLoc = "\n\n⚠️ Une erreur est survenue...\n⚠️ Veuillez indiquer une localisation valide !\n(Exemple de localisation : Lyon, France)\n\n⚠️ Si le problème persiste, merci de contacter @ Woosy__\n📝 https://github.com/Woosy/Tweether/issues/new";



// ====================================================
// ====================================================
// == "Exportation" :  ================================
// ====================================================
// ====================================================

// Méthodes pour récupérer les variables :
var getState = function() {
  return state;
}

var getAccountName = function() {
  return accountName;
}

var getError = function() {
  return error;
}

var getErrorNoLoc = function() {
  return errorNoLoc;
}

var getErrorInvalidLoc = function() {
  return errorInvalidLoc;
}

var getDebugState = function() {
  return debug;
}


// On rend les méthodes accessibles :
exports.getState = getState;
exports.getAccountName = getAccountName;
exports.getError = getError;
exports.getErrorNoLoc = getErrorNoLoc;
exports.getErrorInvalidLoc = getErrorInvalidLoc;
exports.getDebugState = getDebugState;