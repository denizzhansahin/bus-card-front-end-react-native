import React from 'react'
import { Card , Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';



function KategoriCard({ isim, gorsel, renk , boyut}) {
    return (
        <View>
                <LinearGradient
                    angle={200}
                    colors={renk}
                    style={{height:boyut+20,width:boyut+3, alignItems:"center", flexDirection:"column",  borderRadius:10}}
                    useAngle={true}
                >
                    <View style={{flex:12,marginTop:10}}>{gorsel}</View>
                    
                    <View style={{flex:10}}><Text variant='labelLarge' style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>{isim}</Text></View>
                </LinearGradient>
                

            
        </View>
    )
}

export default KategoriCard