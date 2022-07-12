import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MaxVideoView from './MaxVideoView.native';
import MinUidContext from '../Contexts/MinUidContext';
import MaxUidContext from '../Contexts/MaxUidContext';
import PropsContext, {ClientRole} from '../Contexts/PropsContext';

const layout = (userCount: number, isDesktop: boolean = true) => {
  const rows = Math.round(Math.sqrt(userCount));
  const cols = Math.ceil(userCount / rows);
  let [r, c] = isDesktop ? [rows, cols] : [cols, rows];
  return {
    matrix:
    // Makes a 2D array of 'X's
      userCount > 0
        ? [
            ...Array(r - 1)
              .fill(null)
              .map(() => Array(c).fill('X')),
            Array(userCount - (r - 1) * c).fill('X'),
          ]
        : [],
    dims: {r, c},
  };
};

const GridVideo: React.FC = () => {
  console.log('\n----------------------------------------\n')
  const max = useContext(MaxUidContext);
  const min = useContext(MinUidContext);
  console.log(`GridVideo: max: ${JSON.stringify(max)}`)
  console.log(`GridVideo: min: ${JSON.stringify(min)}`)
  const {rtcProps, styleProps} = useContext(PropsContext);
  const users =
    rtcProps.role === ClientRole.Audience
      ? [...max, ...min].filter((user) => user.uid !== 'local')
      : [...max, ...min];
  let onLayout = (e: any) => {
    setDim([
      e.nativeEvent.layout.width,
      e.nativeEvent.layout.height,
      e.nativeEvent.layout.width > e.nativeEvent.layout.height,
    ]);
  };
  const [dim, setDim]: [
    [number, number, boolean],
    Dispatch<SetStateAction<[number, number, boolean]>>,
  ] = useState([
    Dimensions.get('window').width,
    Dimensions.get('window').height,
    Dimensions.get('window').width > Dimensions.get('window').height,
  ]);
  const isDesktop = dim[0] > dim[1] + 100;
  let {matrix, dims} = useMemo(
    () => layout(users.length, isDesktop),
    [users.length, isDesktop],
  );
  console.log(`GridVideo: Users: ${JSON.stringify(users)}`)
  console.log(`GridVideo: Matrix: ${matrix}, Dims: ${JSON.stringify(dims)}`)
  return (
    <View style={style.full} onLayout={onLayout}>
      {matrix.map((r, ridx) => (
        <View style={style.gridRow} key={ridx}>
          {r.map((c, cidx) => {
            console.log(`GridVideoColumn: cidx: ${cidx} ridx: ${ridx}`)
            console.log(`GridVideoColumn: users[${ridx * dims.c + cidx}], user: ${JSON.stringify(users[ridx * dims.c + cidx])}`)
            console.log('---')
            return (
              <View style={style.col} key={cidx}>
                <View
                  style={{
                    ...style.gridVideoContainerInner,
                    ...(styleProps?.gridVideoView as object),
                  }}>
                  {rtcProps.role === ClientRole.Audience &&
                  users[ridx * dims.c + cidx].uid === 'local' ? null : (
                    <MaxVideoView
                      user={users[ridx * dims.c + cidx]}
                      key={users[ridx * dims.c + cidx].uid}
                    />
                  )}
                </View>
              </View>
            )}
          )}
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  full: {
    width: '100%',
    // flex: 1,
    height: '100%',
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  gridVideoContainerInner: {
    // borderColor: '#fff',
    // borderWidth:2,
    flex: 1,
    margin: 1,
  },
  col: {
    flex: 1,
    marginHorizontal: 'auto',
  },
});

export default GridVideo;
