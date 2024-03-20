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
import nextArrow from '../assets/images/arrowNext.png';
import backArrow from '../assets/images/backArrow.png';
import axios from 'axios';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var SharedPreferences = require('react-native-shared-preferences');

function AQ_10_Get() {
  const questions = Object.keys(AQtest);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState({});
  const [holdAns, setHoldAns] = useState(Array(10).fill(-1));

  const updateHoldAns = (index, value) => {
    // Create a new array to avoid mutating the state directly
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

    let checker = false;
holdAns.map((itm,idx)=>{


  if(itm===-1)
  {
    checker=true




  }
})

if(checker){    alert(`Select All options Please!`); return;}
    console.log('Questionnaire submitted!');
    let hold = 0;
    for (x = 0; x < 10; x++) {
      hold = hold + holdAns[x];
    }
    const today = new Date();

    if (hold >= 6) {
      alert(`Score:${hold}\n You need to visit a doctor`);
      SharedPreferences.getItem('userid', function (value) {
        console.log('abc--+' + value);
        try {
          const response2 = axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/aq_10_ins',
            {
              id: `${value}`,
              date: `${today}`,
              score: `${hold}`,
              state: `${'Severe'}`,
            },
          );
          //setGet(response.data);
          console.log(response2.data);
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      alert(`Score:${hold}\n You do not need to visit a doctor`);
      SharedPreferences.getItem('userid', function (value) {
        console.log('abc--+' + value);
        try {
          const response2 = axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/aq_10_ins',
            {
              id: `${value}}`,
              date: `${today}`,
              score: `${hold}`,
              state: `${'Normal'}`,
            },
          );
          //setGet(response.data);
          console.log(response2.data);
        } catch (error) {
          console.log(error);
        }
      });
    }
    console.log(holdAns);
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
                console.log('Selected Answer1:', optionKey);

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
          // <Button   style={{backgroundColor:'red'}}   title="Submit" onPress={submitButton} />
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

export default AQ_10_Get;
