import styled from "styled-components/native";
import {CaretLeft} from 'phosphor-react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
    
`;

export const BackIncon = styled(CaretLeft)`
    color: #FFF;
    size: 36px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;