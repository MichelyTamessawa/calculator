import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f6e5cb',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#000',
  },
});

export default props => {
  return (
    <SafeAreaView style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </SafeAreaView>
  );
};
