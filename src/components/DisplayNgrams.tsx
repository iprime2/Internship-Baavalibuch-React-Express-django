import React from 'react'

interface DisplayNgramsProps {
  data: {
    text1_ngrams: string[][]
    text2_ngrams: string[][]
  } | null
}

const DisplayNgrams: React.FC<DisplayNgramsProps> = ({ data }) => {
  return (
    <div>
      <h2>Text 1 Ngrams:</h2>
      <ul>
        {data?.text1_ngrams.map((ngram, index) => (
          <li key={index}>{`[${ngram.join(', ')}]`}</li>
        ))}
      </ul>

      <h2>Text 2 Ngrams:</h2>
      <ul>
        {data?.text2_ngrams.map((ngram, index) => (
          <li key={index}>{`[${ngram.join(', ')}]`}</li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayNgrams
