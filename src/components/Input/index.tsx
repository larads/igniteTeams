import { TextInputProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components'

export function Input({...rest}: TextInputProps){
    const { Colors } = useTheme()
    return(
        <S.Conainer
            placeholderTextColor={Colors.Gray_300}
            {...rest}
        />
    )
}
