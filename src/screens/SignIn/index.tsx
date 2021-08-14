import React, { useContext } from 'react';
import { View, Text, Image, Alert } from 'react-native';

/* import { AuthContext, useAuth } from '../../hooks/auth'; */

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../../assets/illustration.png';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
/* import { auth, firebase } from '../../services/firebase'; */

export function SignIn () {
  const navigation = useNavigation();
  
  /* const { user, signIn } = useAuth();
  const value = useContext(AuthContext);

  function handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result)
    })
  } */

  function handleSignIn() {
    navigation.navigate('Home')
  } 

  return(
    <Background>
      <View style={styles.container}>

        <Image 
          source={IllustrationImg}
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize {`\n`}
            suas jogatinas 
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Google" 
            activeOpacity={0.85}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}