import React from 'react';
import { View, FlatList } from 'react-native';

import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds ({ handleGuildSelect }: Props) {

  const guilds = [
    { 
      id: '1',
      name: 'League of Legends',
      icon: 'image.png',
      owner: true
    },
    { 
      id: '2',
      name: 'Valorant',
      icon: 'https://inceptum-stor.icons8.com/eU4d89ZetaJy/Valorant.png',
      owner: true
    },
    { 
      id: '3',
      name: 'Apex Legends',
      icon: 'image.png',
      owner: true
    },
    { 
      id: '4',
      name: 'Rocket League',
      icon: 'image.png',
      owner: true
    },
    { 
      id: '5',
      name: 'Counter-Strike',
      icon: 'image.png',
      owner: true
    },
    { 
      id: '6',
      name: 'Among Us',
      icon: 'image.png',
      owner: true
    },
    { 
      id: '7',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem= {({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent= {() => <ListDivider isCentered />}
        ListHeaderComponent= {() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 50}}
        style={styles.guilds}
      />
    </View>
  )
}