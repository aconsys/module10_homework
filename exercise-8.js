//Задание 8:

let aircraft = new Map([
  ['Airbus', 'Europe'],
  ['Boeing', 'USA'],
  ['Embraer', 'Brazil'],
  ['Bombardier', 'Canada'],
  ['ATR', 'France']
]);
 
for(let key of aircraft.keys()) {
  console.log(`Ключ - ${key}, значение - ${aircraft.get(key)}`);
};