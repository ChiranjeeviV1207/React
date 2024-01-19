import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Earn money",
];
export default function App() {
  //  const step = 2;
  const [step, setStep] = useState(1);
  //  const [test, setTest] = useState({ name: "Course" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    //   alert("Previous");
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    //    alert("Next");
    if (step < 4) {
      //    setStep(step + 1);
      setStep((s) => s + 1);
      //    setStep((s) => s + 1);
    }
    //  setTest({ name: "LinkedIn" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]};{/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "green", color: "blue" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "Orange", color: "blue" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
