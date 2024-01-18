import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStyleProps = {
    isActive: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70%;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-transform: uppercase;
    color: #FFFF;
`;