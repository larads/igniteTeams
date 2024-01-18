import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props ={
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`;

export const Icon = styled(MaterialIcons)`
    font-size: 24px;
    color: #00875F;

    flex-direction: row;
    justify-content: space-between;
    
    border-radius: 6px;
`;