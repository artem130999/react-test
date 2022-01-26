import * as React from 'react'

const useInput = () => {
  const [inputValue, setInputText] = React.useState<string>('')

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value as string)
  }

  const setValue = (value: string) => {
    setInputText(value)
  }

  return { inputValue, inputOnChange, setValue }
}

export default useInput
