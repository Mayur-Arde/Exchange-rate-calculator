const currencyOneEl = document.getElementById('currency-one');
const amountOneEl = document.getElementById('amount-one');
const currencyTwoEl = document.getElementById('currency-two');
const amountTwoEl = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function caclulate() {
  const currency_one = currencyOneEl.value;
  const currency_two = currencyTwoEl.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
    });
}



// Event listeners

currencyOneEl.addEventListener('change', caclulate);
amountOneEl.addEventListener('input', caclulate);
currencyTwoEl.addEventListener('change', caclulate);
amountTwoEl.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
  const temp = currencyOneEl.value;
  currencyOneEl.value = currencyTwoEl.value;
  currencyTwoEl.value = temp;
  caclulate();
});
 
caclulate();