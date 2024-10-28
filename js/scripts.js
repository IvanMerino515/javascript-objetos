// Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."


const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
  
};

console.log(`Me llamo ${user.name} ${user.surname}, tengo ${user.age} años...`);

//  Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const dataNumbers = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (const numbers of dataNumbers.numbers){
    console.log(`Numeros +2: ${numbers + 2}`)
    dataNumbers.firstFloor.secondFloor.numbersPlus2.push(numbers + 2);
}

console.log(`Números + 2: ${dataNumbers.firstFloor.secondFloor.numbersPlus2}`)

for (const numbers of dataNumbers.numbers){
    console.log(`Números *2: ${numbers * 2}`)
    dataNumbers.firstFloor.secondFloor.numbersPlus2.push(numbers * 2);
}

console.log (`Números * 2: ${dataNumbers.firstFloor.secondFloor.numbersPlus2}`)

for (const numbers of dataNumbers.numbers){
    console.log(`Números /2: ${numbers / 2}`)
    dataNumbers.firstFloor.secondFloor.numbersPlus2.push(numbers / 2);
}

console.log (`Números / 2: ${dataNumbers.firstFloor.secondFloor.numbersPlus2}`)

for (const number of dataNumbers.numbers) {
    if (number % 2 === 0) {
      console.log(`Número par: ${number}`);
      dataNumbers.fifthFloor.onlyEven.push(number); 
    } else {
      console.log(`Número impar: ${number}`);
      dataNumbers.fifthFloor.onlyOdd.push(number);  
    }
  }
  
  console.log(`Números pares: ${dataNumbers.fifthFloor.onlyEven}`);
  console.log(`Números impares: ${dataNumbers.fifthFloor.onlyOdd}`);


//   Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String



const datos = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    consonants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const datos = {
    firstFloor: {
      vowels: []
    },
    secondFloor: {
      consonants: []
    },
    fourthFloor: {
      asciiCode: []
    },
    fifthFloor: {
      wordsInUppercase: [],
      wordsInLowercase: []
    },
    sixthFloor: {
      secretCode: ''
    }
  };
  
  // Función para procesar la frase
  function processString(phrase) {
    const vowelsSet = 'aeiouáéíóúAEIOUÁÉÍÓÚ'; // Vocales, incluyendo acentuadas
    const consonantsSet = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'; // Consonantes
  
    // Recorremos cada carácter de la frase
    for (const char of phrase) {
      // Verificamos si es vocal
      if (vowelsSet.includes(char)) {
        datos.firstFloor.vowels.push(char);
      }
      // Verificamos si es consonante
      else if (consonantsSet.includes(char)) {
        datos.secondFloor.consonants.push(char);
      }
      
      // Agregamos el código ASCII
      datos.fourthFloor.asciiCode.push(char.charCodeAt(0));
    }
  
    // Separamos las palabras
    const words = phrase.split(' ');
    for (const word of words) {
      datos.fifthFloor.wordsInUppercase.push(word.toUpperCase());
      datos.fifthFloor.wordsInLowercase.push(word.toLowerCase());
    }
  
    // Codificamos la frase
    let secret = '';
    for (const char of phrase) {
      if (vowelsSet.includes(char)) {
        // Sustitución de vocales por números
        switch (char.toLowerCase()) {
          case 'a':
          case 'á':
            secret += '1';
            break;
          case 'e':
          case 'é':
            secret += '2';
            break;
          case 'i':
            secret += '3';
            break;
          case 'o':
            secret += '4';
            break;
          case 'u':
          case 'ú':
            secret += '5';
            break;
        }
      } else if (consonantsSet.includes(char)) {
        // Sustitución de consonantes por la anterior
        const previousChar = String.fromCharCode(char.charCodeAt(0) - 1);
        secret += previousChar;
      } else if (char === ' ') {
        // Sustitución de espacios por una letra random
        const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // 'a' es 97 en ASCII
        secret += randomChar;
      } else {
        secret += char; // Para otros caracteres (como puntuación)
      }
    }
    
    datos.sixthFloor.secretCode = secret; // Asignamos el código secreto
  }
  
  // Ejemplo de uso de la función
  const inputPhrase = "Si no estudias acabarás como Enrique";
  processString(inputPhrase);
  
  // Mostrar el resultado completo
  console.log(datos);
  