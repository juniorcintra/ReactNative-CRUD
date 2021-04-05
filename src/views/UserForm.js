import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import UsersContext from '../context/UsersContext';

const UserForm = ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);
  return (
    <View style={styles.form}>
      <Text>Name:</Text>
      <TextInput
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
        style={styles.input}
      />

      <Text>E-mail:</Text>
      <TextInput
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o E-mail"
        value={user.email}
        style={styles.input}
      />

      <Text>URL do Avatar:</Text>
      <TextInput
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
        style={styles.input}
      />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default UserForm;
