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

  const handleClick = async () => {
    try {
      setLoading(true)
      const res = await axios.post(apiUrl + '/api/text', {
        text,
      })

      const data = res.data

      // const ngramsRes = await axios.post(
      //   'http://127.0.0.1:8000/api/ngrams-text/',
      //   data,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Origin': 'http://localhost:3000', // Update with your React app's origin
      //       'Access-Control-Allow-Methods': 'POST',
      //     },
      //   }
      // )

      toast.success('Success!')

      console.log(res)
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
