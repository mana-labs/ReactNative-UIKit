import React, {useContext} from 'react';
import PropsContext from '../../Contexts/PropsContext';
import BtnTemplate from '../BtnTemplate';
import styles from '../../Style';

function MenuButton() {
  const {styleProps, additionalProps} = useContext(PropsContext);
  const {localBtnStyles} = styleProps || {};
  const {menu} = localBtnStyles || {};
  const {onMenuPressed, isMenuOpen} = additionalProps;

  return (
    <BtnTemplate
      name={'menu'}
      btnText={'Menu'}
      style={{...styles.localBtn, ...(menu as object)}}
      onPress={() => onMenuPressed && onMenuPressed(!isMenuOpen)}
    />
  );
}

export default MenuButton;
