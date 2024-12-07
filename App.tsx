import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/theme/GlobalStyles';
import { Image } from 'react-native';

export default function App() {
  const {formula, numeroAnterior, Operadores, construirNumero, clean, cambiarSigno, borrarDigito,
        operacion, resultado  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}> 
      <Image source={require('./images/cars.png')} style={GlobalStyles.foto} />
      <Pantalla tamanio='grande'>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla tamanio='pequeno'> </Pantalla>
      ) : (
        <Pantalla tamanio='pequeno'>{numeroAnterior}</Pantalla>
      )}
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo="otros" label='C' onPress={clean}></BotonOperacion>
      <BotonOperacion tipo="otros" label='+/-' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion tipo="otros" label='del' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion tipo="operacion" label='/' onPress={() => operacion(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo="numero" label='7' onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='8' onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='9' onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion tipo="operacion" label='x' onPress={() => operacion(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo="numero" label='4' onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='5' onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='6' onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion tipo="operacion" label='-' onPress={() => operacion(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo="numero" label='1' onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='2' onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='3' onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion tipo="operacion" label='+' onPress={() => operacion(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo="numero" label='0' width={180} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion tipo="numero" label='.' onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion tipo="operacion" label='=' onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}