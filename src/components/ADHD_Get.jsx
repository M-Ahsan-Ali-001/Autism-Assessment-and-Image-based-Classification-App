import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ADHDtest from '../components/ADHD.json';
import CustomButton from './CustomButton';
import nextArrow from '../assets/images/arrowNext.png';
import backArrow from '../assets/images/backArrow.png';
import axios from 'axios';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var SharedPreferences = require('react-native-shared-preferences');

function ADHD_Get() {
  const questions = Object.keys(ADHDtest);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState({});
  const [holdAns, setHoldAns] = useState(Array(18).fill(0));

  const updateHoldAns = (index, optionKey) => {
    let value = 0;
    if (optionKey === 'Not at All') {
      value = 0;
    } else if (optionKey === 'Sometimes') {
      value = 0.5;
    } else if (optionKey === 'Frequently') {
      value = 1;
    }

    const newHoldAns = [...holdAns];
    newHoldAns[index] = value;
    setHoldAns(newHoldAns);
  };

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

    // Calculate total score by summing up the values in holdAns array
    const totalScore = holdAns.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    // Display the total score in an alert
    alert(`Total Score: ${totalScore}`);

    const today = new Date();

    // TODO: different state per totalScore
    SharedPreferences.getItem('userid', function (value) {
      console.log('abc--+' + value);
      try {
        const response3 = axios.post(
          'https://dashborad-autism.netlify.app/.netlify/functions/adhd_ins',
          {
            id: `${value}}`,
            date: `${today}`,
            score: `${totalScore}`,
            state: `${'Normal'}`,
          },
        );
        //setGet(response.data);
        console.log(response3.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const question = ADHDtest[questions[currentQuestion]];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ADHD</Text>
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
                console.log('Selected Answer1:', optionKey);
                updateHoldAns(currentQuestion, optionKey); // Call the function here
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
                if (
                  currentQuestion === 0 ||
                  currentQuestion === 4 ||
                  currentQuestion === 6 ||
                  currentQuestion === 9
                ) {
                  if (optionKey === 'a' || optionKey === 'b') {
                    console.log('INC');
                    updateHoldAns(currentQuestion, 1);
                    console.log(holdAns);
                  } else {
                    console.log('Dec');
                    updateHoldAns(currentQuestion, 0);
                    console.log(holdAns);
                  }
                } else {
                  if (optionKey === 'c' || optionKey === 'd') {
                    console.log('INC');
                    updateHoldAns(currentQuestion, 1);
                    console.log(holdAns);
                  } else {
                    console.log('Dec');
                    updateHoldAns(currentQuestion, 0);
                    console.log(holdAns);
                  }
                }
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
        <CustomButton
          label="Back"
          isBackArrow={true}
          imageSource={backArrow}
          onPress={prevQuestion}
          disabled={currentQuestion === 0}
        />
        {isLastQuestion === true ? (
          <CustomButton
            imageSource={nextArrow}
            label="Submit"
            onPress={submitButton}
          />
        ) : (
          <CustomButton
            imageSource={nextArrow}
            label="Next"
            onPress={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          />
        )}
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
  submitButton: {
    color: 'green',
  },
});

export default ADHD_Get;
