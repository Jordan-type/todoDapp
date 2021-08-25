import { StatusBar } from 'expo-status-bar';
import React,  { useState,  } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [ task, setTask ] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    console.log(task)
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  return (
    <View style={styles.container}>
      {/* Today's tasks  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* tasks will be displayed here */}
          {
            taskItems.map((item, index) => {
              return (
                <Task text={item}/>
              )
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/> */}
        </View>
      </View>
      {/* add tasks  */}
      <KeyboardAvoidingView
         behavior={Platform.os === "ios" ? "padding" : "height"}
         style={styles.writeTaskWrapper}>
           <TextInput style={styles.input}  placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)}/>
           <TouchableOpacity onPress={() => handleAddTask()}>
             <View style={styles.addWarpper}>
               <Text style={styles.addText}>+</Text>
             </View>
           </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 310
  },
  
  addWarpper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  }
});
