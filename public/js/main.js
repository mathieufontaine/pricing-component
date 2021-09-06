//* selectors

const slider = document.getElementById("slider");
const views = document.getElementById("views-number");
const price = document.getElementById("amount");
const billing = document.querySelector('input[type="checkbox"]');

//* events

slider.addEventListener("input", fillBar);
slider.addEventListener("input", updateNumbers);
billing.addEventListener("click", updateNumbers);

//* functions

function fillBar(e) {
  const min = e.target.min;
  const max = e.target.max;
  const val = e.target.value;
  e.target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

function updateNumbers() {
  let val = slider.value;
  const discount = 0.75;
  let newPrice;
  let newViews;
  if (val == 5) {
    newViews = ">1000";
    newPrice = 50;
  } else if (val == 4) {
    newViews = "<500";
    newPrice = 30;
  } else if (val == 3) {
    newViews = "<100";
    newPrice = 16;
  } else if (val == 2) {
    newViews = "<20";
    newPrice = 12;
  } else {
    newViews = "<5";
    newPrice = 10;
  }
  billing.checked ? (newPrice *= discount) : newPrice;
  views.innerText = newViews;
  price.innerText = (Math.round(newPrice * 100) / 100).toFixed(2);
}
