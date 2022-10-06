const MYAPP = {};
(function () {
  class Calculator {
    constructor() {
      this.inputs = [];
      this.value = "";
      this.history = [];
    }
    init() {
      let calc = this;

      // Numbers
      this.inputs.push(
        new CalculatorInput(
          "1",
          "1",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='1']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "2",
          "2",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='2']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "3",
          "3",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='3']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "4",
          "4",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='4']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "5",
          "5",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='5']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "6",
          "6",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='6']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "7",
          "7",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='7']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "8",
          "8",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='8']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "9",
          "9",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='9']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "0",
          "0",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='0']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          ".",
          ".",
          function (e) {
            if (e.calculatorInput.value === "." && calc.value.includes("."))
              return;
            calc.value += e.calculatorInput.value;
          },
          "[role='.']"
        )
      );

      // Operators
      this.inputs.push(
        new CalculatorInput(
          "+",
          "+",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.history = calc.value;
            calc.value = "";
          },
          "[role='+']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "-",
          "-",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='-']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "*",
          "*",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='*']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "÷",
          "÷",
          function (e) {
            calc.value += e.calculatorInput.value;
          },
          "[role='÷']"
        )
      );

      // Clear
      this.inputs.push(
        new CalculatorInput(
          "AC",
          "AC",
          function (e) {
            calc.value = "0";
          },
          "[role='AC']"
        )
      );

      // Delete
      this.inputs.push(
        new CalculatorInput(
          "DELETE",
          "Delete",
          function (e) {
            calc.value = calc.value.toString().slice(0, -1);
          },
          "[role='DELETE']"
        )
      );

      // =
      this.inputs.push(
        new CalculatorInput(
          "=",
          "=",
          function (e) {
            calc.value = eval(calc.value);
          },
          "[role='=']"
        )
      );

      this.inputs.forEach((x) => {
        x.init(calc);
      });
    }
    refreshInput() {
      document.querySelector("input").value = this.value;
    }
    getInputs() {
      return this.inputs;
    }
    getValue() {
      return this.value;
    }
    getHistory() {
      return this.history;
    }
  }
  class CalculatorInput {
    constructor(text, value, clickEvent, selector) {
      this.text = text;
      this.clickEvent = clickEvent;
      this.value = value;
      this.selector = selector;
      this.domObject = null;
      this.calculator = null;
    }
    click() {
      this.domObject.click();
    }
    disable(isDisable) {
      if (isDisable) this.domObject.classList.add("disabled");
      else this.domObject.classList.remove("disabled");
    }
    init(calc) {
      let _this = this;
      this.calculator = calc;
      this.domObject = document.querySelector(this.selector);
      this.domObject.innerHTML = this.text;
      this.domObject.addEventListener("click", function (e) {
        e["calculatorInput"] = _this;
        _this.clickEvent(e);
        _this.calculator.refreshInput();
      });
    }
  }
  MYAPP.calculator = new Calculator();
})();
