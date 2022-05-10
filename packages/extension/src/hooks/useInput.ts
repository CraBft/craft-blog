import { useState } from 'react'

interface useInputProps {
  initialValue: string
  validator?: (value: string) => boolean
}

const useInput = ({ initialValue, validator = () => true }: useInputProps) => {
  const [value, setValue] = useState(initialValue)
  const [valid, setValid] = useState(true)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    if (validator(value)) setValue(value)
    else setValid(false)
  }
  return { value, onChange, setValue, valid }
}

export default useInput
