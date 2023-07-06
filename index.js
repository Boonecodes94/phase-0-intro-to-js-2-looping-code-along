function writeCards(names, surprise) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
  }

  return messages ;
}

// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
function countDown(startingNumber) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }