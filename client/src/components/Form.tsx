import { useState } from 'react'
import axios from 'axios'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { ClipLoader } from 'react-spinners'
import toast from 'react-hot-toast'
import DisplayNgrams from './DisplayNgrams'

const Form = () => {
  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const apiUrl = process.env.REACT_APP_API_URL
  const [data, setData] = useState<{
    text1_ngrams: string[][]
    text2_ngrams: string[][]
  } | null>(null)

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

      console.log(res)
      const data = res.data

      setData(data)

      toast.success('Success!')
    } catch (error) {
      toast.error('Something went wrong!!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
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
      <DisplayNgrams data={data} />
    </>
  )
}

export default Form
