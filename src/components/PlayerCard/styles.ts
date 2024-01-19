import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: #29292E;

    flex-direction: row;
    align-items: center;

    border-radius: 16px;

    margin-bottom: 16px;
`;

export const Name = styled.Text`
    flex: 1;
    color: #C4C4CC;
    font-size: 15;
`;

export const Icon = styled(MaterialIcons)`
    color: #C4C4CC;
    font-size: 20;

    margin-left: 16px;
    margin-right: 4px;
`;