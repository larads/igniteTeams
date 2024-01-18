import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ icon, ...rest }: Props) {
    return (
        <S.Container>
            <S.Icon 
                name={icon}
            />
        </S.Container>
    )
}