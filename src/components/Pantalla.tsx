import { Text, type TextProps } from 'react-native';
import { GlobalStyles } from '../theme/GlobalStyles';

interface Props extends TextProps {
  tamanio: 'grande' | 'pequeno';
};

export const Pantalla = ({children, tamanio, ...rest}:Props) => {
  return (
    <Text 
      style={tamanio === "grande" ? GlobalStyles.pantallaPrincipal : GlobalStyles.pantallaPrincipalPequeña}
      numberOfLines={1} 
      adjustsFontSizeToFit {...rest}>

        {children}

    </Text>
  )
}