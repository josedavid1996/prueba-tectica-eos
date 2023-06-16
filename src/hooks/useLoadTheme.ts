import { useEffect } from 'react'
import { useTheme } from '../store/theme'

const useLoadTheme = () => {
  useEffect(() => {
    const theme = 'dark'

    if (theme) {
      useTheme.setState({ theme })
      document.body.className = theme
    }
  }, [])

  useEffect(() => {
    const removeSusc = useTheme.subscribe(({ theme }) => {
      if (theme) document.body.className = theme
    })

    return () => {
      removeSusc()
    }
  }, [])
}

export default useLoadTheme
