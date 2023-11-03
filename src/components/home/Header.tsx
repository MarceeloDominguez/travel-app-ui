import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/Menu.png')}
        style={styles.iconMenu}
      />
      <Image
        source={require('../../assets/icons/Notification.png')}
        style={styles.iconNotification}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    justifyContent: 'space-between',
    marginTop: 14,
    marginBottom: 20,
  },
  iconMenu: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  iconNotification: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
