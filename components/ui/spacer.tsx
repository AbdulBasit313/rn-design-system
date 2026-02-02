import { View } from 'react-native'

interface SpacerProps {
  width?: number | '100%' | 'auto'
  height?: number | string
}

const Spacer = ({ width = '100%', height = 40 }: SpacerProps) => {
  return <View style={{ width: width as any, height: height as any }} />
}

export default Spacer
