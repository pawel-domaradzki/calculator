export function setupCounter(elements: NodeListOf<HTMLButtonElement>) {
  const resultDiv = document.querySelector(".result") as HTMLDivElement;
  let calResult = 0;
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent==="+") calResult+=
      CalculationMethods.result += element.textContent;
      displayResult(resultDiv);
    });
  });
}

export function displayResult(resultDiv: HTMLDivElement) {
  resultDiv.innerText = CalculationMethods.result;
  if (resultDiv.innerText.endsWith("=")) console.log(Number(resultDiv.innerText));
}

export class CalculationMethods {
  static result: string = "";

  static add(initialValue: number, newValue: number) {
    initialValue += newValue;
  }

  // static subtract(value: number) {
  //   CalculationMethods.result -= value;
  // }

  // static multiply(value: number) {
  //   CalculationMethods.result *= value;
  // }
  // static divide(value: number) {
  //   CalculationMethods.result /= value;
  // }
}
