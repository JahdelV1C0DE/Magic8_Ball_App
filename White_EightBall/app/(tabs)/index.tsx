import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { useState } from "react";
import { TextInput } from 'react-native';



export default function HomeScreen() {

  const [UserQuestion, setUserQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  

  //fucntion for getting a random response
  const GetAnswer = () => {
    if (UserQuestion === '') {
      setAnswer("Enter a Question.");
    }
    //grabs random element from the meesages in the array
    const GetIndex = Math.floor(Math.random() * BallMessage.length);

    //variable for displaying the message
    const Message = BallMessage[GetIndex];
    setAnswer(Message);
  };

  //array with messages
  const BallMessage = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fff', dark: '#000' }}
      headerImage={<Image source={require('@/assets/images/8Ball.jpg')} style={{ width: '100%', height: 200 }} />}
    >
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.content}>
          <ThemedText style={styles.title}>Magic 8 Ball App</ThemedText>
          <Text style={[styles.subtitle, { marginBottom: 20 }]}> You will simply ask a question and press the button to get a reply</Text>

          
          <TextInput
            style={styles.input}
            placeholder="Type Question: " 
            value={UserQuestion}
            onChangeText={setUserQuestion}/>

          <Button title="Shake 8 Ball" onPress={() => { GetAnswer(); }} />
          {answer ? (
            <Text style={styles.answer}>{answer}</Text>
          ) : null}
        </ThemedView>
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  answer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'blue',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
