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
  if (val > 75) {
    newViews = ">1000";
    newPrice = 50;
    val = 100;
  } else if (val > 50) {
    newViews = "500";
    newPrice = 30;
  } else if (val > 25) {
    newViews = "100";
    newPrice = 16;
  } else {
    newViews = "<100";
    newPrice = 10;
  }
  billing.checked ? (newPrice *= discount) : newPrice;
  views.innerText = newViews;
  price.innerText = newPrice;
}
