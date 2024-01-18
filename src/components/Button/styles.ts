import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    width: 80%;

    border-radius: 6px;
    justify-content: center;
    align-items: center;
    background-color: #00875F;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #FFFF;
    font-weight: 700;
`;