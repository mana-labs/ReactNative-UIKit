import React, {useContext} from 'react';
import PropsContext from '../../Contexts/PropsContext';
import BtnTemplate from '../BtnTemplate';
import styles from '../../Style';

function ChatButton() {
  const {styleProps, additionalProps} = useContext(PropsContext);
  const {localBtnStyles} = styleProps || {};
  const {chat} = localBtnStyles || {};
  const {onChatPressed, isChatOpen} = additionalProps || {};

  return (
    <BtnTemplate
      name={'chat'}
      btnText={'Chat'}
      style={{...styles.localBtn, ...(chat as object)}}
      onPress={() => onChatPressed && onChatPressed(!isChatOpen)}
    />
  );
}

export default ChatButton;
