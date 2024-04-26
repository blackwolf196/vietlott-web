import {useMemo, useState} from "react";
import {getRandomInt} from "helper/utils.ts";
import {HistoryOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";
import useLocalStorage from "hooks/useLocalStorage.ts";
import dayjs from 'dayjs';
import ModalHistory from "pages/Vietlott/ModalHistory.tsx";
import StyledApp from "pages/Vietlott/Styled.ts";

const Vietlott = () => {
  document.title = "Vietlott";
  const [listNumber, setListNumber] = useState<number[]>([0, 0, 0, 0, 0, 0])
  const [isRoll, setIsRoll] = useState<boolean>(false);
  const [history, setHistory] = useLocalStorage('history', []);
  const [openHistory, setOpenHistory] = useState<boolean>(false)
  const CONFIG = {
    rollTime: 40,
    maxHistory: 20
  }
  const onRoll = () => {
    if (isRoll) return;
    const rollNumber = (log: boolean = false) => {
      const numbers = new Set();
      while (numbers.size < 6) {
        const randomNumber = getRandomInt(1, 45);
        numbers.add(randomNumber);
      }
      const newArrNumber: any[] = Array.from(numbers);
      newArrNumber.sort((a, b) => a - b);
      setListNumber(newArrNumber);
      if (log) {
        logHistory(newArrNumber)
      }
    }
    setIsRoll(true);
    for (let i = 0; i < CONFIG.rollTime; i++) {
      setTimeout(() => {
        if (i === (CONFIG.rollTime - 1)) {
          rollNumber(true)
        } else {
          rollNumber()
        }
      }, i * 100); // Delay increases with each iteration
    }
    setTimeout(() => {
      setIsRoll(false);
    }, (CONFIG.rollTime + 1) * 100)
  }

  const logHistory = (rollResult: number[]) => {
    const historyItem: any = {
      ti: dayjs().format('YYMMDD H:m:s'),
      f: rollResult[0],
      s: rollResult[1],
      t: rollResult[2],
      fo: rollResult[3],
      fi: rollResult[4],
      si: rollResult[5]
    }
    if (history.length === CONFIG.maxHistory) {
      const newHistory = [...history.slice(1), historyItem];
      setHistory(newHistory)
    } else {
      const newHistory = [...history, historyItem];
      setHistory(newHistory)
    }
  }

  const clearHistory = () => {
    setHistory([]);
  }

  const dataHistoryModal = useMemo(() => history.map((item: any) => ({
    time: dayjs(item.ti, 'YYMMDD H:m:s').format('DD/MM/YYYY HH:mm:ss'),
    result: [item.f, item.s, item.t, item.fo, item.fi, item.si]
  })), [history])

  return (
    <>
      <StyledApp>
        <div className={'main-container'}>
          <Tooltip title={'History'}>
            <HistoryOutlined onClick={() => setOpenHistory(true)}/>
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
      <ModalHistory open={openHistory} onClose={() => setOpenHistory(false)} dataHistory={dataHistoryModal}
                    onClear={clearHistory}/>
    </>
  )
}

export default Vietlott;
