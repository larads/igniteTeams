import * as S from './styles';
import logoImg from '@assets/logo.png';

type Props = {
    showsBackButton?: boolean;
}

export function Header({ showsBackButton = false} : Props) {
    return(
        <S.Container>
            {
            showsBackButton &&
            <S.BackButton>
                <S.BackIncon/>
            </S.BackButton>
            }
            <S.Logo source={logoImg}/>
        </S.Container>
    )
}