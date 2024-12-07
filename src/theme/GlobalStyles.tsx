import { StyleSheet } from 'react-native';
import { Colores } from './Colores';
import { Tamanos } from './Tamanos';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.colorFondo,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
    },
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: Tamanos.textoChico,
        fontWeight: Tamanos.weightGrande,
        borderColor: Colores.colorBordeBoton,
        borderWidth: 2,
        borderRadius: 10,
    },
    botonNumero: {
        backgroundColor: Colores.colorBotonNumero,
        color: Colores.colorTextoBotonNumeros,
    },
    botonOperacion: {
        backgroundColor: Colores.colorBotonOperacion,
        color: Colores.colorTextoBotonOperaciones,
    },
    botonOtros: {
        backgroundColor: Colores.colorBotonOtros,
    },
    pantallaPrincipal: {
        fontSize: Tamanos.textoGrande,
        textAlign: 'right',
        fontWeight: Tamanos.weightGrande,
        width: '90%',
        color: Colores.colorTextoPantalla,
    },
    pantallaPrincipalPequeña: {
        fontSize: Tamanos.textoMediano,
        textAlign: 'right',
        width: '90%',
        color: Colores.colorTextoPantalla,
    },
    foto: {
        width: 300,
        height: 200,
    }

});
