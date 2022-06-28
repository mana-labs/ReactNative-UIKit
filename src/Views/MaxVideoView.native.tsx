import React, {useContext, useMemo} from 'react';
import {RtcLocalView, RtcRemoteView, VideoRenderMode} from 'react-native-agora';
import styles from '../Style';
import PropsContext, {ToggleState, UidInterface} from '../Contexts/PropsContext';
import {StyleSheet, View} from 'react-native';
import ImageIcon from '../Controls/ImageIcon';
import Username from './Usernames';

const LocalView = RtcLocalView.SurfaceView;
const RemoteView = RtcRemoteView.SurfaceView;

interface MaxViewInterface {
  user: UidInterface;
}
/**
 * MaxVideoView takes in a user and renders the video
 */
const MaxVideoView: React.FC<MaxViewInterface> = (props: MaxViewInterface) => {
  const {styleProps, rtcProps, fallback: Fallback} = useContext(PropsContext);
  const {maxViewStyles} = styleProps || {};
  const {remoteBtnStyles, customIcon} = styleProps || {};

  const MuteIcon = useMemo(() => {
    if(customIcon && (typeof customIcon?.['micOff'] !== 'string') && (props.user.audio !== ToggleState.enabled)) {
      const MicOffIcon = customIcon?.['micOff'];
      if(MicOffIcon) {
        return <MicOffIcon />;
      }
    }
    return null;
  }, [props.user.audio]);

  return (
    <React.Fragment>
      {!rtcProps.disableRtm && <Username user={props.user} />}
      {props.user.uid === 'local' ? (
        props.user.video ? (
          <LocalView
            style={{...styles.fullView, ...(maxViewStyles as object)}}
            renderMode={styleProps?.videoMode?.max}
          />
        ) : Fallback ? (
          <Fallback user={props.user} type="MAX" />
        ) : (
          <DefaultFallback />
        )
      ) : props.user.video ? (
        <View>
          <RemoteView
            style={{...styles.fullView, ...(maxViewStyles as object)}}
            uid={props.user.uid as number}
            renderMode={styleProps?.videoMode?.max}
          />
          <View style={styles.minMuteContainer}>
            {MuteIcon}
          </View>
        </View>
      ) : Fallback ? (
        <Fallback user={props.user} type="MAX" />
      ) : (
        <DefaultFallback />
      )}
    </React.Fragment>
  );
};

const DefaultFallback = () => {
  const {styleProps} = useContext(PropsContext);
  const {videoPlaceholderContainer} = styleProps || {};
  return (
    <View style={[style.placeholderContainer, videoPlaceholderContainer]}>
      <ImageIcon
        name={'videocamOff'}
        style={[styles.placeholderIcon, styleProps?.videoPlaceholderIcon]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});

export default MaxVideoView;
