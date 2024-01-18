import styled from "styled-components/native";
import { UsersThree } from 'phosphor-react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Container = styled.View`
    flex: 1;
    background-color: #202024;

    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Icon = styled(UsersThree)`
    color: #00875F;
    align-self: center;

    size: 20px;
`;