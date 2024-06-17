import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, ScrollView, Text, Pressable, View} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import CustomButton from './CustomButton';

export default function InsPopup({insPop,seinsPop, insPopPG}){


return(
<Modal
 visible={insPop}
transparent={true}

>
<View style={styles.container}>
  <View style={styles.popup}>
  <Text style={styles.heading}>
    Instructions
  </Text>
  <View style={styles.insBox}>

{insPopPG === '0'?(
   <ScrollView style={styles.scroller}>
  <Text style={styles.question}>
    1. What is AQ_10 ?
    <Text style={styles.answer} > The AQ10 is a shortened version 
      of the Autism-Spectrum Quotient (AQ) questionnaire. It consists of 10 questions
       that assess certain behaviours and traits associated with autism spectrum conditions.</Text>
    </Text>
    

    <Text style={styles.question}>
    2. Read Each Statement Carefully:
    <Text style={styles.answer} > Begin by carefully reading each statement provided in the questionnaire. 
      Take your time to understand the meaning of each statement.</Text>
    </Text>

    <Text style={styles.question}>
    3. Rate Your Agreement:
    <Text style={styles.answer} > For each statement, indicate your level of agreement or 
      disagreement based on your own experiences and behaviors. Use the provided scale to rate your response.
0: "Definitely disagree"
1: "Slightly disagree"
2: "Slightly agree"
3: "Definitely agree"</Text>
    </Text>

    
    <Text style={styles.question}>
    4. Choose the number:
    <Text style={styles.answer} > that best reflects how you feel or behave in relation to the statement.  </Text>
    </Text>

    <Text style={styles.question}>
    5. Be Honest:
    <Text style={styles.answer} > Answer each question honestly and to the best of your ability. There are no right or wrong answers, 
      so it's important to provide responses that accurately reflect your thoughts, feelings, and behaviors.  </Text>
    </Text>


    <Text style={styles.question}>
    6. Avoid Overthinking:
    <Text style={styles.answer} > Try not to spend too much time overthinking your responses.
       Go with your initial gut feeling about each statement rather than dwelling on it excessively. </Text>
    </Text>

    <Text style={styles.question}>
    7. Stay Consistent:     <Text style={styles.answer} > Maintain consistency in your responses throughout the questionnaire.
       Try not to change your approach midway through, but rather stick to the same rating scale for each statement. </Text>
    </Text>
   
    <Text style={styles.question}>
    8. Complete All Questions:     <Text style={styles.answer} > Make sure to answer all the questions in the questionnaire. 
      Don't skip any items, even if you find them challenging or if you're unsure about your response. </Text>
    </Text>


    <Text style={styles.question}>
    9. Review Your Answers:     <Text style={styles.answer} > Once you have completed all the questions, take a moment to review your answers.
       Ensure that you haven't missed any questions and that your responses accurately reflect your thoughts and experiences. </Text>
    </Text>


</ScrollView> 
):insPopPG === "1"?(
   <ScrollView style={styles.scroller}>
  <Text style={styles.question}>
    1.  What is Human Behaviour Institute ADHD screening tool (Children) ? 
    <Text style={styles.answer} > The Human Behaviour Institute (HBI) ADHD Screening Tool for children is a
       standardized questionnaire designed to help identify symptoms of Attention Deficit Hyperactivity Disorder (ADHD) in 
       children. While specific details about the HBI ADHD Screening Tool might vary or be updated over time, such tools typically
        786756 include a series of questions that assess various aspects of a child's behavior and attention.</Text>
    </Text>
    

    <Text style={styles.question}>
    2. Read Each Statement Carefully:
    <Text style={styles.answer} > Begin by carefully reading each statement provided in the questionnaire. 
      Take your time to understand the meaning of each statement.</Text>
    </Text>

    <Text style={styles.question}>
    3. Rate Your Agreement:
    <Text style={styles.answer} > For each statement, indicate your level of agreement or 
      disagreement based on your own experiences and behaviors. Use the provided scale to rate your response.
0: "Not at All"
1: "Somettimes"
2: "Frequently"
</Text>
    </Text>

    
    <Text style={styles.question}>
    4. Choose the number:
    <Text style={styles.answer} > that best reflects how you feel or behave in relation to the statement.  </Text>
    </Text>

    <Text style={styles.question}>
    5. Be Honest:
    <Text style={styles.answer} > Answer each question honestly and to the best of your ability. There are no right or wrong answers, 
      so it's important to provide responses that accurately reflect your thoughts, feelings, and behaviors.  </Text>
    </Text>


    <Text style={styles.question}>
    6. Avoid Overthinking:
    <Text style={styles.answer} > Try not to spend too much time overthinking your responses.
       Go with your initial gut feeling about each statement rather than dwelling on it excessively. </Text>
    </Text>

    <Text style={styles.question}>
    7. Stay Consistent:     <Text style={styles.answer} > Maintain consistency in your responses throughout the questionnaire.
       Try not to change your approach midway through, but rather stick to the same rating scale for each statement. </Text>
    </Text>
   
    <Text style={styles.question}>
    8. Complete All Questions:     <Text style={styles.answer} > Make sure to answer all the questions in the questionnaire. 
      Don't skip any items, even if you find them challenging or if you're unsure about your response. </Text>
    </Text>


    <Text style={styles.question}>
    9. Review Your Answers:     <Text style={styles.answer} > Once you have completed all the questions, take a moment to review your answers.
       Ensure that you haven't missed any questions and that your responses accurately reflect your thoughts and experiences. </Text>
    </Text>


</ScrollView> 
):insPopPG ==="2"?(<ScrollView style={styles.scroller}> 
  <Text style={styles.question}>
      1. Model: <Text style={styles.answer} > 
      The Child Autism Detection Model is a cutting-edge tool designed to assist parents in identifying early s
      igns of autism in their children through image analysis. Utilizing advanced machine learning algorithms, the model 
      evaluates facial features and expressions in a provided image to determine potential indicators of autism spectrum disorder (ASD). 
      This innovative approach offers a quick and non-invasive preliminary assessment, 
      elping parents decide if further professional evaluation is necessary. </Text>
      </Text>
  
  
      <Text style={styles.question}>
      2. Usage: <Text style={styles.answer} > 
      To use the Child Autism Detection Model, start by preparing a clear, 
      well-lit image of your child's face, ensuring there are no significant obstructions 
      such as hats or sunglasses. Once you have the appropriate image, navigate to the "Upload Image" 
      section of the interface. Click on the "Choose File" button to open a file dialog, then locate and select the image from your device. 
      After selecting the image, confirm that the correct file is chosen by checking the file name or thumbnail preview. Next, initiate the
       scanning process by clicking on the "Scan" button. The model will then analyze the image, which may take a few moments. A loading indicator
        might be displayed during this period to show that the scan is in progress. Once the scan is complete, the results will be shown on the screen. 
        The model will indicate whether it has detected signs of autism in the uploaded image, providing you with either a positive or negative result based on
        its analysis. This user-friendly process ensures that parents can quickly and easily gain insights into their child's developmental health. </Text>
      </Text>
  
  
  </ScrollView> ):insPopPG ==="3"?(
<ScrollView style={styles.scroller}> 
<Text style={styles.question}>
1. AQ_10 & ADHD  </Text>

<Text style={styles.answer}>
<Text style={styles.answerH}>Score:</Text> it shows a numeric value if the value is greater than equal to 6 than a person needs to visit a doctor. 

 </Text>
 <Text style={styles.answer}>
 <Text style={styles.answerH}>Condition:</Text> this shows the condition as normal or severe which informs  users whether their they need to visit a doctor or not.

 </Text>


 <Text style={styles.question}>
2. Autism/Model  </Text>

<Text style={styles.answer}>
<Text style={styles.answerH}>Score/Percentage:</Text> it shows the percentage of the predict class that how much according to model this class is correct.   

 </Text>
 <Text style={styles.answer}>
 <Text style={styles.answerH}>Class:</Text> there  are two possibilities in this case Autistic and none Autistic, it is given from its name Autistic means  your are autistic and vice versa.
 </Text>
</ScrollView> ):insPopPG === "4"?(

<ScrollView style={styles.scroller}>
<Text style={styles.question}>
Austism/Model  </Text>

<Text style={styles.answer}>
 <Text style={styles.answerH}>Score/Percentage: </Text> 
  it shows the percentage of the predict class that how much according to model this class is correct. 
 </Text>

 <Text style={styles.answer}>
 <Text style={styles.answerH}>Class: </Text> 
  there  are two possibilities in this case Autistic and none Autistic, it is given from its name Autistic means  your are autistic and vice versa.
 </Text>
</ScrollView>
):null}









   </View>

  <CustomButton
            style={styles.button}
            backgroundColor={'white'}
            label={'Close'}
            labelColor={'#DE9181'}
            BorderRadius={10}
            onPress={()=>{seinsPop(false); }}></CustomButton>
  </View>
</View>

</Modal>
)


}
const styles = new StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      popup: {
        backgroundColor: '#DE9181',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '85%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 3,
        maxHeight:'80%'
      },
      heading:{
        fontSize: 23,
        fontWeight: 'bold',
        color:'white'
      },
      insBox:{
      
        width:'100%',
        maxHeight:'80%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom:5,
        paddingBottom:0,
      },
      question:{
        fontSize:18,
        color:'black'
      },
      
      answer:{
        fontSize:16,
        color:'#2F4149'
      },
      answerH:{
        fontSize:16,
        color:'black'
      },
      scroller:{
       margin:10
      }
})