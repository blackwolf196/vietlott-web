import StyledApp from "./Styled.ts";
import {useState} from "react";

const App = () => {
  const [listNumber, setListNumber] = useState<number[]>([0, 0, 0, 0, 0, 0])

  const getRandomInt = (min: number, max: number): number => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max + 1);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const onRoll = () => {
    const rollNumber = () => {
      const numbers = new Set();
      while (numbers.size < 6) {
        const randomNumber = getRandomInt(1, 45);
        numbers.add(randomNumber);
      }
      const newArrNumber: any[] = Array.from(numbers);
      newArrNumber.sort((a, b) => a - b);
      setListNumber(newArrNumber);
    }
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        rollNumber();
      }, i * 100); // Delay increases with each iteration
    }
  }

  return (
    <StyledApp>
      <div className={'main-container'}>
        <div className={'app-name-title'}>Vietlott</div>
        <div className={'box-container'}>
          {listNumber.map((item: number) => (
            <div className={'box-number'}>{item}</div>
          ))}
        </div>
        <div className={'btn-wrapper'}>
          <button className="btn-roll" onClick={onRoll}><span className="text">Roll</span></button>
        </div>
      </div>
    </StyledApp>
  )
}

export default App
