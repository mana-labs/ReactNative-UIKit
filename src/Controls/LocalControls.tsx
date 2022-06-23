import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from '../Style';
import EndCall from './Local/EndCall';
import ChatButton from './Local/Chat';
import MenuButton from './Local/Menu';
import LocalAudioMute from './Local/LocalAudioMute';
import LocalVideoMute from './Local/LocalVideoMute';
import SwitchCamera from './Local/SwitchCamera';
import RemoteControls from './RemoteControls';
import {MaxUidConsumer} from '../Contexts/MaxUidContext';
import PropsContext, {ClientRole, Layout} from '../Contexts/PropsContext';

interface ControlsPropsInterface {
  showButton?: boolean;
}

function Controls(props: ControlsPropsInterface) {
  const {styleProps, rtcProps, additionalProps = {}} = useContext(PropsContext);
  const {localBtnContainer} = styleProps || {};
  const showButton = props.showButton !== undefined ? props.showButton : true;

  const showMenu = additionalProps.onMenuPressed !== undefined;

  return (
    <>
      <View style={{...styles.Controls, ...(localBtnContainer as object)}}>
        {rtcProps.role !== ClientRole.Audience && (
          <>
            <LocalAudioMute />
            <LocalVideoMute />
            <SwitchCamera />
            <ChatButton />
          </>
        )}
        {
          showMenu ? (
            <MenuButton />
          ) : (
            <EndCall />
          )
        }
      </View>
      {showButton ? (
        <MaxUidConsumer>
          {(users) => (
            <View
              style={{
                ...styles.Controls,
                bottom: styles.Controls.bottom + 70,
              }}>
              {rtcProps.layout !== Layout.Grid && (
                <RemoteControls user={users[0]} showRemoteSwap={false} />
              )}
            </View>
          )}
        </MaxUidConsumer>
      ) : (
        <></>
      )}
    </>
  );
}

export default Controls;
