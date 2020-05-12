/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';


import KeyboardView from './src/Components/KeyboardView';

const App: () => React$Node = () => {
  return (
   
    <KeyboardView style={styles.container}>
      <ScrollView style={{flex:1, width: '100%'}} >
      <TextInput value="1" style={styles.input}  />
      <TextInput value="2" style={styles.input}  />
      <TextInput value="3" style={styles.input}  />
      <TextInput value="4" style={styles.input}  />
      <TextInput value="5" style={styles.input}  />


      <TextInput value="6" style={styles.input}  />
      <TextInput value="7" style={styles.input}  />
      <TextInput value="8" style={styles.input}  />
      <TextInput value="9" style={styles.input}  />
      <TextInput value="10" style={styles.input}  />

      <TextInput value="11" style={styles.input}  />
      <TextInput value="12" style={styles.input}  />
      <TextInput value="13" style={styles.input}  />
      <TextInput value="14" style={styles.input}  />
      <TextInput value="15" style={styles.input}  />
      </ScrollView>
    </KeyboardView>
  );
};

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1,
    borderColor: 'red',
    borderWidth:1,
    padding: 20

  },

  input: {
    width: '80%',
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 'auto',
  }
});

export default App;