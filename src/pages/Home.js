import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import { getMarkets } from '../api/getMarkets';
import SmallLoading from '../components/SmallLoading';


export default function Home({ navigation }) {
    // const [markets, setMarkets] = useState([]);

    useEffect(() => {
        if (typeof window != undefined) {
            async function getMarketsItems() {
                const getMarketsContent = await getMarkets();
                setMarkets(getMarketsContent);

            }

            // getMarketsItems();

        }

    }, []);

    const markets = [
        {
            "id": null,
            "name": "Mercado teste",
            "email": "teste-mercado@teste.com",
            "password": "123",
            "role": "admin",
            "address": "Rua teste",
            "number": "1A",
            "city": "São Paulo",
            "state": "SP",
            "zipcode": "18603-555",
            "donating": true,
            "picture": "https://content.paodeacucar.com/wp-content/uploads/2019/06/8-dicas-%C3%BAteis-2.jpg",
            "lastUpdated": null
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader navigation={navigation} headerText="Mercados doando perto de você" />
            <View style={styles.mainContent}>
                {
                    markets != undefined && markets.length > 0
                        ?
                        <FlatList
                            data={markets}
                            numColumns={2}
                            renderItem={({ item }) => {
                                return (
                                    <CustomCard picture={item.picture} name={item.name} navigation={navigation} marketObject={item} />
                                );
                            }}
                        />
                        :
                        <SmallLoading />
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    genericContainer: {
        flex: 1,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center'
    },

});
