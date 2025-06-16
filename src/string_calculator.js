// StringCalculator.js
function findSpaceship(map) {
  if (!map) return "Spaceship lost forever.";

  const lines = map.split("\n").reverse(); //Y = 0 ist unten
  for (let y = 0; y < lines.length; y++) {
    const x = lines[y].indexOf("X");
    if (x !== -1) {
      return [x, y]; //Koordinaten zurückgeben
    }
  }
  
  return "Spaceship lost forever."; //Kein 'X' gefunden
}


