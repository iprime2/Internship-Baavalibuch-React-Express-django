import { useState } from 'react'
import axios from 'axios'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { ClipLoader } from 'react-spinners'
import toast from 'react-hot-toast'

const Form = () => {
  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const apiUrl = process.env.REACT_APP_API_URL
  const [data, setData] = useState<string>('')

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setText(e.target.value)
  }

  console.log(text)

  const handleClick = async () => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:5050' + '/api/text', {
        text,
      })

      toast.success('Success!')

      const finalText = res.data.text
      setData(finalText)

      console.log('Text: ' + data)
    } catch (error) {
      toast.error('Something went wrong!!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col w-[50%] gap-2'>
      <Input
        type='text'
        placeholder='Text'
        onChange={handleText}
        disabled={loading}
      />
      <Button disabled={loading} onClick={handleClick}>
        {loading && <ClipLoader size={15} color='white' />} &nbsp; Send
      </Button>
    </div>
  )
}

export default Form
