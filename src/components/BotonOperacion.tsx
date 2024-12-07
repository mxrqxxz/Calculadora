import { Pressable, Text } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";
import { Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    width?: number,
    tipo: 'operacion' | 'numero' | 'otros',
    onPress?: () => void;
}

export const BotonOperacion = ({label, width = 80, tipo, onPress}:Props) => {
    const pulsar = () => {
        //Vibration.vibrate(30);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        onPress!(); // ponemos ! porque sabemos que siempre va a existir y asi no da error
    }
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, tipo === 'numero' ? GlobalStyles.botonNumero : tipo === 'operacion' ? GlobalStyles.botonOperacion : GlobalStyles.botonOtros, {width}]}
                onPress={pulsar}>{label}
            </Text>
        </Pressable>
    )
};