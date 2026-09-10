import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function PostsIndex({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Posts Index</Text>
      <View style={styles.actions}>
        <Button
          title="Create Post"
          onPress={() => navigation.navigate('PostCreate')}
        />
        <Button
          title="Edit Post"
          onPress={() => navigation.navigate('PostEdit')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  actions: {
    gap: 12,
    marginTop: 20,
  },
});
