var objteste = { 'um': 1, 'dois': 2, 'tres': 3 };

// Armazena no LocalStorage
localStorage.setItem('objteste', JSON.stringify(objteste));

// Obtém do LocalStorage
var objSalvo = localStorage.getItem('objteste');

console.log('objSalvo: ', JSON.parse(objSalvo));