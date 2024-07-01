import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ADHDtest from '../components/ADHD.json';
import CustomButton from './CustomButton';
import nextArrow from '../assets/images/arrowNext.png';
import backArrow from '../assets/images/backArrow.png';
import axios from 'axios';
import CustomPopup from './CustomPopUp';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var SharedPreferences = require('react-native-shared-preferences');

function ADHD_Get() {
  const questions = Object.keys(ADHDtest);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState({});
  const [holdAns, setHoldAns] = useState(Array(18).fill(-1));
  const [popupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [imageNumber, setImageNumber] = useState('0');
  const [urlN, setUrlN] = useState('0');
  
  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const updateHoldAns = (index, optionKey) => {
    let score = 0;
    console.log(optionKey);

    if (optionKey === 'a') {
      score = 0;
    } else if (optionKey === 'b') {
      score = 1;
    } else if (optionKey === 'c') {
      score = 1.5;
    }
    console.log(optionKey);

    const newHoldAns = [...holdAns];
    newHoldAns[index] = score;
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

if(checker){    
  
  handleOpenPopup()
  setMessage(`Please select all options for full assessment!`)
  setImageNumber('1')
  
  return;}

    console.log('Questionnaire submitted!');
    // const totalScore = holdAns.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   0,
    // );

    const inattenion = 0
    const HyperActiveImpusibity = 0

    let i=0
    let  j=7
    let p=0
    let o=0
    while(i<7){
      p=p+holdAns[i];
      i++


    }

    while(j<18){
      
      o=o+holdAns[j];
      j++


    }

    const today = new Date();
    if(p >=6 || 0 >=6){
      handleOpenPopup()

      setMessage(`Score: ${o+p}\nYou need to visit a doctor`);
      setImageNumber('2')
      setUrlN('2')
      SharedPreferences.getItem('userid', function (value) {
        console.log('abc--+' + value);
        try {
          const response = axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/adhd_ins',
            {
              id: `${value}`,
              date: `${today}`,
              score: `${o+p}`,
              state: `${'Severe'}`,
            },
          );
          //setGet(response.data);
          console.log('response data: ' + response.data);
        } catch (error) {
          console.log(error);
        }
      });

    }
    else{

      handleOpenPopup()

      setMessage(`Score: ${o+p}\nYou need to visit a doctor`);
      setImageNumber('2')
      setUrlN('2')
      SharedPreferences.getItem('userid', function (value) {
        console.log('abc--+' + value);
        try {
          const response = axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/adhd_ins',
            {
              id: `${value}`,
              date: `${today}`,
              score: `${o+p}`,
              state: `${'Normal'}`,
            },
          );
          //setGet(response.data);
          console.log('response data: ' + response.data);
        } catch (error) {
          console.log(error);
        }
      });




    }





    




    
    console.log(holdAns)



    // console.log(`Total Score: ${totalScore}`);
    // alert(`Total Score: ${totalScore}`);

    // const today = new Date();

    // SharedPreferences.getItem('userid', function (value) {
    //   console.log('abc--+' + value);
    //   try {
    //     const response = axios.post(
    //       'https://dashborad-autism.netlify.app/.netlify/functions/adhd_ins',
    //       {
    //         id: `${value}`,
    //         date: `${today}`,
    //         score: `${totalScore}`,
    //         state: `${'Normal'}`,
    //       },
    //     );
    //     //setGet(response.data);
    //     console.log('response data: ' + response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
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
                updateHoldAns(currentQuestion, optionKey);
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
                updateHoldAns(currentQuestion, optionKey);

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
      <CustomPopup
        visible={popupVisible}
        label={"Result"}
        message={message}
        onClose={handleClosePopup}
        imageCheck={imageNumber}
        urlcheck={urlN}
    
      />
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
