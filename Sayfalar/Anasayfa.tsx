import React from 'react'

import {  View } from 'react-native'

import { Text } from 'react-native-paper'

import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Pressable } from 'react-native'

import { Avatar, Button, Card } from 'react-native-paper';


import KategoriCard from '../Components/KategoriCard'

import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconFA6 from 'react-native-vector-icons/FontAwesome6';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


function Anasayfa() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>


    <Card>
    <Card.Content>
      <Text variant="titleLarge">Hoşgeldin</Text>
      <Text variant="displaySmall">Sahte Kullanıcı</Text>
    </Card.Content>
    <Card.Cover source={require('../Gorseller/logo_bus.png')} />

  </Card>

  
    <View style={styles.container2}>

    <View style={styles.view}>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Duraklar" gorsel={<IconMaterialCom name="bus-marker" size={55} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Sefer Saatleri" gorsel={<IconMaterialCom name="bus-clock" size={50} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Yükleme Noktası" gorsel={<IconFA6 name="map-location-dot" size={50} color="white"/>} /></Pressable>
    </View>

    <View style={styles.view}>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Cüzdan" gorsel={<IconMaterialCom name="wallet" size={55} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Asistan" gorsel={<IconFA5 name="smile-wink" size={50} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Canlı Takip" gorsel={<IconMaterialCom name="map-marker-distance" size={50} color="white"/>} /></Pressable>
    </View>

    <View style={styles.view}>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Ücret Transferi" gorsel={<IconFontisto name="google-wallet" size={55} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="NFC" gorsel={<IconMaterialCom name="cellphone-nfc" size={50} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Favorilerim" gorsel={<IconFontisto name="favorite" size={50} color="white"/>} /></Pressable>
    </View>

    <View style={styles.view}>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Online Yükleme" gorsel={<IconMaterialCom name="wallet-plus" size={55} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Geçmiş      Seyahtlerim" gorsel={<IconMaterialCom name="history" size={50} color="white"/>} /></Pressable>
      <Pressable style={styles.press} ><KategoriCard boyut={110} renk={['red', 'blue']} isim="Yardım" gorsel={<IconMaterial name="contact-support" size={50} color="white"/>} /></Pressable>
    </View>

    </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default Anasayfa



const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width:"100%",

    //alignItems:"center"
    //justifyContent:"center",
  },
  container2:{
    borderColor:"red",
    //borderWidth:1,
    alignItems:"center"
    
  }
  ,
  view:{
    flexDirection:"row",
    height:"auto",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"green",
    //borderWidth:1,
  },
  press:{
  height:"auto",
  width:"100%",
  flex:10,
  margin:2,
  borderColor:"pink",
  //borderWidth:2,
  alignItems:"center"
  },
})