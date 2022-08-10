import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#ffc2bb',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ef9ca4',
  },
  operationButton: {
    color: '#FFF',
    backgroundColor: '#d76483',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default props => {
  const stylesButton = [styles.button];

  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.operationButton);

  return (
    <>
      <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
    </>
  );
};
