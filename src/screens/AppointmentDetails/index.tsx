import React from 'react';

import { View, Text, ImageBackground, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';

import { Fontisto } from '@expo/vector-icons';
import BannerImg from '../../../assets/banner.png';
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export function AppointmentDetails () {
  const members = [
    { 
      id: '1', 
      username: 'Jorge', 
      avatar_url: 'https://i.pinimg.com/originals/e8/c5/0e/e8c50e6155f7baf39acb724082faeb28.jpg', 
      status: 'online', 
    },

    { 
      id: '2', 
      username: 'Tutuzin', 
      avatar_url: 'https://cdn.discordapp.com/attachments/654119991708483602/871752004941262889/Screenshot_1.png', 
      status: 'offline', 
    },
    
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> 
            Lendários 
          </Text>

          <Text style={styles.subtitle}> É hoje que vamos chegar ao challenger!</Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 2"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon 
          title="Entrar na partida"
        />
      </View>
    </Background>
  )
}