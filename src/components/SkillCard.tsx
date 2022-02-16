import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps {
  name: string;
}

export function SkillCard({ name, ...rest }: ISkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.skill}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: 'center',
    marginTop: 15,
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#202020',
  },
  skill: {
    fontSize: 17,
    color: '#eee',
  },
});
