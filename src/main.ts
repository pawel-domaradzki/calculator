import "./style.css";
import { setupCounter } from "./counter.ts";

// prettier-ignore
const calculatorInputs = [
  7,  8,  9,  "DEL",
  4,  5,  6,  "+",
  1,  2,  3,  "-",
  ".",  0,  "/",  "x",
  "RESET", "="
];

const renderCalculatorInputs = () => {
  return calculatorInputs
    .map(
      (input) =>
        ` <div class="card">
             <div class="card__input" type="button">${input}</div>
          </div>`
    )
    .join("");
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="container"> 
    <h1>calc</h1>
    <div>
     <h3>THEME</h3>
     <p>toogle</p>
    </div>
  </header>
  <main>
    <div class="result"><h1>0</h1></div>
    <div class="inputs">
    ${renderCalculatorInputs()}

    </div>
  </main>
`;

setupCounter(document.querySelectorAll(".card__input"));
