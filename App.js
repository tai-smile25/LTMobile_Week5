import React from 'react';
import * as Asset from 'expo-asset';
import { View, Text, Image,TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

function  ProductScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/vsmartxanh.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={styles.price}>1.790.000 ₫</Text>
      <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ (Xem 828 đánh giá)</Text>
      <TouchableOpacity style={styles.colorButton} onPress={() => navigation.navigate('ProductSelectScreen')}>
        <Text style={styles.buttonText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buttonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: 'orange',
  },
  colorButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

function ProductSelectScreen ({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const renderColorOptions = () => {
    const colors = ['#FFFFFF', '#FF0000', '#000000', '#007BFF']; // Các màu sắc ví dụ
    return colors.map((color, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.colorOption, { backgroundColor: color }]}
        onPress={() => navigation.navigate('ProductScreen')}   //handleColorSelect(color)

      />
    ));
  };

  return (
    <View style={styles.container}>
      {/* Phần giao diện sản phẩm (giống như trong câu hỏi trước) */}
      {selectedColor ? (
        <View style={styles.selectedColor}>
          <Text>Bạn đã chọn màu:</Text>
          <View style={[styles.colorOption, { backgroundColor: selectedColor }]} />
        </View>
      ) : (
        <View style={styles.colorOptionsContainer}>
          {renderColorOptions()}
        </View>
      )}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buttonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="ProductSelectScreen" component={ProductSelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ProductScreen;