# react-native-keyboard-hoc

## Why?
##### It helps in efficiently moving the inputFiled  above the keyboard whenever an inputField gets focused.

## Installation
`npm i react-native-keyboard-hoc`

`yarn add react-native-keyboard-hoc`

## Usage


```javascript
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

import KeyboardView from 'react-native-keyboard-hoc';

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


function App() {
  return (
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
  );
}

export default App;

```

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| spaceBottom    | max bottom margin between InputField and Keyboard, default value `10`| false |
| all View Props     | all the props which are availabe to a View| false |
