import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";


export function Profile () {
  return (
    <View style={styles.container}>
      
      <Avatar urlImage="https://i.pinimg.com/originals/e8/c5/0e/e8c50e6155f7baf39acb724082faeb28.jpg"/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            Jorge
          </Text>
          
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>

      </View>
    </View>
  )
}