import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [imageList, setImageList] = useState([])
  const [stylizedImage, setStylizedImage] = useState()

  const onQuery = async () => {
    console.log(`Querying server... ${searchTerm}`)

    const response = await fetch(
      'https://api.unsplash.com/search/photos?page=1&query=office',
      {
        headers: {
          Authorization: 'Client-ID i2K7gd0hi-Od9AYmBijXyr8Jm5Jtwgxh0hbCdxB9QRQ'
        }
      }
    )

    const result = await response.json()
    console.log(result)

    setImageList([{}, {}])
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
              <span>description goes here</span>
            </div>
          )
        })}
      </div>

      <h2>Selected image in stylized output:</h2>
      <div>
        {stylizedImage && (
          <div className='image-holder'>
            <img
              className='image-result'
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            />
            <br />
            <span>description goes here</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
