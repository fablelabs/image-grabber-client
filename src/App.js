import React, { useState } from 'react'
import './App.css'

const TEST_RESPONSE = [
  {
    url:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAyNzh8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjIwNzcwODE3&ixlib=rb-1.2.1&q=80&w=400',
    description: 'Office'
  },
  {
    url:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzAyNzh8MHwxfHNlYXJjaHw2fHxvZmZpY2V8ZW58MHx8fHwxNjIwNzcwODE3&ixlib=rb-1.2.1&q=80&w=400',
    description: 'Workspace'
  }
]

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [solarizeThreshold, setSolarizeThreshold] = useState(1)

  const [imageList, setImageList] = useState([])
  const [stylizedImage, setStylizedImage] = useState()

  const onQuery = async () => {
    console.log(`Querying server... ${searchTerm}`)

    const response = await fetch(
      'https://api.unsplash.com/search/photos?page=1&query=office',
      {
        headers: {
          Authorization: 'Client-ID [....]'
        }
      }
    )

    const result = await response.json()
    console.log(result)

    setImageList(TEST_RESPONSE)
  }

  const onSelectImage = async () => {
    setStylizedImage({})
  }

  return (
    <div className='app'>
      <h2>Query for a list of images:</h2>
      <div style={{ margin: 20 }}>
        <input
          style={{ width: 300, marginRight: 10 }}
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)}
          placeholder='Enter terms to search images...'
        />

        <button onClick={onQuery}>Query</button>
      </div>

      <h2>Select an image below to stylize:</h2>

      <div>
        <span style={{ marginRight: 5 }}>Solarize Threshold:</span>
        <select style={{ width: 100, marginRight: 10 }} onChange={e => {}}>
          <option value='64'>64</option>
          <option value='128'>128</option>
          <option value='192'>192</option>
        </select>
      </div>

      <div className='selection-container'>
        {imageList.map(imageItem => {
          return (
            <div className='image-holder' onClick={onSelectImage}>
              <img
                className='image-result'
                src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              />
              <br />
              <span>---</span>
            </div>
          )
        })}
      </div>

      <h2>Stylized output:</h2>
      <div>
        {stylizedImage && (
          <div className='image-holder'>
            <img
              className='image-result'
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            />
            <br />
            <span>---</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
