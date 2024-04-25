import StyledApp from "./Styled.ts";
import {useState} from "react";
import {getRandomInt} from "helper/utils.ts";
import {HistoryOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";
import useLocalStorage from "hooks/useLocalStorage.ts";
import dayjs from 'dayjs';

const Vietlott = () => {
  document.title = "Vietlott";
  const [listNumber, setListNumber] = useState<number[]>([0, 0, 0, 0, 0, 0])
  const [isRoll, setIsRoll] = useState<boolean>(false);
  const [history, setHistory] = useLocalStorage('history', []);

  const onRoll = () => {
    if (isRoll) return;
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
    setIsRoll(true);
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        rollNumber();
      }, i * 100); // Delay increases with each iteration
    }
    setTimeout(() => {
      setIsRoll(false);
      logHistory(listNumber);
    }, (40 + 1) * 100)
  }

  const logHistory = (rollResult: number[]) => {
    const maxLengthHistory = 20;
    const historyItem: any = {
      ti: dayjs().format('YY-MM-D H:m:s'),
      f: rollResult[0],
      s: rollResult[1],
      t: rollResult[2],
      fo: rollResult[3],
      fi: rollResult[4],
      si: rollResult[5]
    }
    if (history.length === maxLengthHistory) {
      const newHistory = [...history.slice(1), historyItem];
      setHistory(newHistory)
    } else {
      const newHistory = [...history, historyItem];
      setHistory(newHistory)
    }
  }

  return (
    <StyledApp>
      <div className={'main-container'}>
        <Tooltip title={'History'}>
          <HistoryOutlined/>
        </Tooltip>
        <div className={'app-name-title'}>Vietlott</div>
        <div className={'box-container'}>
          {listNumber.map((item: number) => (
            <div className={'box-number'}>{item}</div>
          ))}
        </div>
        <div className={'btn-wrapper'}>
          <button className="btn-roll" onClick={onRoll}>
            <span className="text">{`${isRoll ? 'Rolling...' : 'Roll'}`}</span>
          </button>
        </div>
      </div>
    </StyledApp>
  )
}

export default Vietlott;
