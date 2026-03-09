const medalsInput = document.getElementById("medals");
const rateInput = document.getElementById("rate");
const unitInput = document.getElementById("unit");

const totalYenEl = document.getElementById("totalYen");
const prizeAmountEl = document.getElementById("prizeAmount");
const remainingMedalsEl = document.getElementById("remainingMedals");

medalsInput.addEventListener("input", calculateExchange);
rateInput.addEventListener("input", calculateExchange);
unitInput.addEventListener("input", calculateExchange);

function calculateExchange() {
  const medals = Number(medalsInput.value);
  const rate = Number(rateInput.value);
  const unit = Number(unitInput.value);

  const isInvalid =
    medalsInput.value === "" ||
    rateInput.value === "" ||
    unitInput.value === "" ||
    Number.isNaN(medals) ||
    Number.isNaN(rate) ||
    Number.isNaN(unit) ||
    medals < 0 ||
    rate <= 0 ||
    unit <= 0;

  if (isInvalid) {
    totalYenEl.textContent = "-";
    prizeAmountEl.textContent = "-";
    remainingMedalsEl.textContent = "-";
    return;
  }

  const yenPerMedal = 1000 / rate;
  const totalYen = medals * yenPerMedal;
  const prizeAmount = Math.floor(totalYen / unit) * unit;
  const usedMedals = Math.floor(prizeAmount / yenPerMedal);
  const remainingMedals = medals - usedMedals;

  totalYenEl.textContent = `${Math.floor(totalYen).toLocaleString()}円`;
  prizeAmountEl.textContent = `${prizeAmount.toLocaleString()}円`;
  remainingMedalsEl.textContent = `${remainingMedals}枚`;
}

calculateExchange();
