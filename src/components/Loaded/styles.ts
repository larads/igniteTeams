import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.Colors.Gray_600};
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.Colors.Gray_700
}))``