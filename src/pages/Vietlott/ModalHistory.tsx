import {Modal, Empty, Button} from 'antd';
import styled from "styled-components";
import {DeleteOutlined} from "@ant-design/icons";

interface ModalInterface {
  open: boolean;
  onClose: () => void;
  dataHistory: any[];
  onClear: () => void;
}

const ModalHistory = (props: ModalInterface) => {
  const {open, onClose, dataHistory, onClear} = props;

  const renderHistory = (
    <div className={'history-container'}>
      {dataHistory.map((item: any, index: number) => <div className={'history-line'}>
        {`${index + 1}) ${item.result.join(" - ")} | ${item.time}`}
      </div>)}
    </div>
  )

  const renderFooter = (
    <>
      <Button danger onClick={onClear} icon={<DeleteOutlined />}>Clear History</Button>
    </>
  )

  return (
    <ModalStyled open={open} onCancel={onClose} footer={renderFooter} centered title={'History'}>
      {!dataHistory.length ? <Empty/> : ""}
      {dataHistory.length ? renderHistory : ""}
    </ModalStyled>
  )
}

export default ModalHistory;

const ModalStyled = styled(Modal)`

`;