import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<ISkillData[]>([]);

  function handleAddNewSkill() {
    const skillAlreadyExists = skills.find(item => item.name === newSkill)

    if (skillAlreadyExists) {
      return;
    }

    const data: ISkillData = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setSkills(oldState => [...oldState, data]);

    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldState => oldState.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Josney</Text>

      <TextInput
        value={newSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#333"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[styles.title, { marginTop: 20 }]}>My skills</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SkillCard name={item.name} onPress={() => handleRemoveSkill(item.id)} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
  },
});
