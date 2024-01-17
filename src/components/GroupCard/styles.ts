import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from 'phosphor-react-native';

export const Container =  styled(TouchableOpacity)`
    width: 100%;
    height: 90px;

    background-color: #29292E;
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    color: #C4C4CC;
    font-size: 12px;

`;

export const Icon = styled(UsersThree)`
    color: #00875F;
    margin-right: 24px;
`;
