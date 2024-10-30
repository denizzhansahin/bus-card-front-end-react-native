import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import IconFontisto from 'react-native-vector-icons/Fontisto';


const Kartlar = () => (
    <SafeAreaView>
        <ScrollView>
            <Card>
                <Card.Content>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text variant="titleLarge">Ulaşım Kartı</Text>
                            <Text variant="bodyMedium">55 TL</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            <IconFontisto name="credit-card" size={50} color="black" />
                        </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button>Yükleme Yap</Button>
                    <Button>Düzenle</Button>
                </Card.Actions>
            </Card>


            <Card>
                <Card.Content>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text variant="titleLarge">Ulaşım Kartı</Text>
                            <Text variant="bodyMedium">55 TL</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            <IconFontisto name="credit-card" size={50} color="black" />
                        </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button>Yükleme Yap</Button>
                    <Button>Düzenle</Button>
                </Card.Actions>
            </Card>



            <Card>
                <Card.Content>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text variant="titleLarge">Ulaşım Kartı</Text>
                            <Text variant="bodyMedium">55 TL</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            <IconFontisto name="credit-card" size={50} color="black" />
                        </View>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button>Yükleme Yap</Button>
                    <Button>Düzenle</Button>
                </Card.Actions>
            </Card>

            
        </ScrollView>
    </SafeAreaView>



);

export default Kartlar;