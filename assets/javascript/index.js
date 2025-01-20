const form = document.getElementById('form')
const number = document.getElementById('number')

function sendWhatsapp(number){

}
form.addEventListener('submit', function(event) {
  event.preventDefault();
});

number.addEventListener('keypress', function(event) {
  if (!/\d/.test(event.key)) {
    event.preventDefault();
    return;
  }
  let input = event.target.value.replace(/\D/g, '');
  input = input.substring(0, 11);
  const part1 = input.substring(0, 2);
  const part2 = input.substring(2, 7);
  const part3 = input.substring(7, 11);
  if (input.length > 7) {
    event.target.value = `(${part1}) ${part2}-${part3}`;
  } else if (input.length > 2) {
    event.target.value = `(${part1}) ${part2}`;
  } else if (input.length > 0) {
    event.target.value = `(${part1}`;
  }
});