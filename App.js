import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [hrLowerLimit, setHrLowerLimit] = useState(0);
  const [hrUpperLimit, setHrUpperLimit] = useState(0);

  const calculate = () => {
    const resultLower = (220 - Number(age)) * 0.65;
    setHrLowerLimit(resultLower);
    const resultUpper = (220 - Number(age)) * 0.85;
    setHrUpperLimit(resultUpper);
  }





  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart rate limit calculator</Text>
      <Text style={styles.field}>Age</Text>
      <TextInput
       keyboardType='decimal-pad'
       value={age}
       onChangeText={age => setAge(age)}
       style={styles.field}
       placeholder="Enter your age" 
       //when you press enter, it will calculate
       onSubmitEditing={calculate}
       />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{hrLowerLimit.toFixed(0)} - {hrUpperLimit.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  field: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
