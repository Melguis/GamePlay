import React from 'react';

import { styles } from "./styles";
import { Image } from 'react-native';

export function GuildIcon () {

  const uri = 'https://static.wikia.nocookie.net/leagueoflegends/images/f/f2/League%2B.png/revision/latest?cb=20210516152058'
  const uriVava = 'https://inceptum-stor.icons8.com/eU4d89ZetaJy/Valorant.png'
  return (
    <Image 
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
  )
}