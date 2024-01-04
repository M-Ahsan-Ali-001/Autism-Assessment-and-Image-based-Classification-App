import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import AQtest from '../components/AQ_10.json';
import CustomButton from './CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function AQ_10_Get() {
  const questions = Object.keys(AQtest);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState({});

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitButton = () => {
    console.log('Questionnaire submitted!');
    alert('Questionnaire submitted!');
  };

  const question = AQtest[questions[currentQuestion]];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AQ-10</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, {width: `${progress}%`}]} />
      </View>
      <View style={styles.card}>
        <Text style={styles.questionText}>{`${currentQuestion + 1}. ${
          question.Q
        }`}</Text>
        {Object.keys(question.options).map(optionKey => (
          <View key={optionKey} style={styles.optionContainer}>
            <RadioButton
              color="#DE9181"
              uncheckedColor="#C0BFBF"
              value={optionKey}
              status={
                selectedKeys[questions[currentQuestion]] === optionKey
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => {
                console.log('Selected Answer:', optionKey);
                setSelectedKeys({
                  ...selectedKeys,
                  [questions[currentQuestion]]: optionKey,
                });
              }}
            />
            <Text
              style={[
                styles.optionText,
                {
                  backgroundColor:
                    selectedKeys[questions[currentQuestion]] === optionKey
                      ? '#DE9181'
                      : '#C0BFBF',
                },
              ]}
              onPress={() => {
                console.log('Selected Answer:', optionKey);
                isSelected = true;
                setSelectedKeys({
                  ...selectedKeys,
                  [questions[currentQuestion]]: optionKey,
                });
              }}>
              {question.options[optionKey]}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={prevQuestion}
          disabled={currentQuestion === 0}
        />
        {isLastQuestion && <Button title="Submit" onPress={submitButton} />}
        <CustomButton
          label="Next"
          onPress={nextQuestion}
          disabled={currentQuestion === questions.length - 1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FDFDFD',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1E1B1B',
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 25,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#DE9181',
  },
  card: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.6,
    alignSelf: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
    justifyContent: 'space-evenly',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginBottom: 8,
    color: '#292424',
    textAlign: 'left',
    marginBottom: 40,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    color: 'black',
  },
  optionText: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 8,
    padding: 0,
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 20,
    width: 250,
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

});

export default AQ_10_Get;
