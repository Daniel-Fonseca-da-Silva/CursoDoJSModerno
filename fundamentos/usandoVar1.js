{ 
    { 
        { 
            { 
                var sera = 'Será???'
            } 

        } 

     } 

 }
// Fora do bloco
 console.log(sera);

// Uma variavel fora da funcao será global
// Evitar criar funções globais!
// Var local || global

 function teste()
 {
     var local = 123; // Local
     console.log(local);
 }

teste();
