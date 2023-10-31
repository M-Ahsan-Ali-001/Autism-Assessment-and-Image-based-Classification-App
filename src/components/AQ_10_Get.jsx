import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

import AQtest from '../components/AQ_10.json';

function AQ_10_Get() {
  const list = ['a', 'b', 'c', 'd'];
  let correctAns = Array(10).fill(0);
  const [selectedKeys, setSelectedKeys] = useState({});

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Austism Qoutient Questionnaire</Text>
      {correctAns.map((items, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.questionText}>
            {idx + 1 + '). ' + AQtest[String(idx + 1) + 'a']['Q']}
          </Text>
          {list.map((item, index) => (
            <View
              key={String(idx + 1) + 'a' + item}
              style={styles.optionContainer}>
              <RadioButton
                style={styles.radioButton}
                status={
                  selectedKeys[idx] === String(idx + 1) + 'a' + item
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  console.log('idx:', AQtest[String(idx + 1) + 'a']['correct']);
                  console.log(AQtest[String(idx + 1) + 'a']['Q']);
                  setSelectedKeys({
                    ...selectedKeys,
                    [idx]: String(idx + 1) + 'a' + item,
                  });
                }}
              />
              <Text style={styles.optionText}>
                {AQtest[String(idx + 1) + 'a']['options'][item]}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a6864',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    textAlign: 'justify',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    backgroundColor: 'white',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default AQ_10_Get;
