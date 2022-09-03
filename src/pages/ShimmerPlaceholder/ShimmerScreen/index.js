import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export default () => {
  const [isFetched, toggleFetched] = useState(false);
  const {width: windowWidth} = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => toggleFetched(!isFetched), 2500);
  }, []);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
        <Fragment key={item}>
          <ShimmerPlaceHolder
            visible={isFetched}
            height={32}
            width={windowWidth - 32}
            style={styles.shimmer}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item {item}</Text>
            </View>
          </ShimmerPlaceHolder>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  shimmer: {
    borderRadius: 8,
    marginBottom: 16,
  },
  item: {
    padding: 8,
    paddingLeft: 16,
    backgroundColor: '#e1e1e1',
    borderRadius: 8,
  },
  itemText: {
    color: 'black',
  },
});
