import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loaded'
import theme from '@theme/index'

import { Groups } from '@screens/Groups'

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups/> :  <Loading/> }
    </ThemeProvider>
  )
}