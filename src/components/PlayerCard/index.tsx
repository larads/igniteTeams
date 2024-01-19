import * as S from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
    name: string
    onRemove: () => void
}

export function PlayerCard({ name, onRemove}: Props) {
    return(
        <S.Container>
            <S.Icon name="person" />

            <S.Name>
                {name}
            </S.Name>
            <ButtonIcon
                icon='close'
                onPress={onRemove}
            />
        </S.Container>
    )
}