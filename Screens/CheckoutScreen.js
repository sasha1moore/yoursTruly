import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {Pressable, FlatList} from 'react-native';
import React from "react";

const CheckoutScreen = ({navigation, route}) => {
    const renderItem = ({ item }) => (
    <View>
        <Text>{item.title}</Text>
    </View>
      );
  return (
    <SafeAreaView>  
      <Pressable onPress={() => navigation.navigate('TabNav')}>
        <Text>Checkout Screen! Go back to tabs</Text>
      </Pressable>
      <FlatList
        data={route.params.cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

});