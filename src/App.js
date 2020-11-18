import React, { useState, useRef, useEffect } from 'react'
import fetchTopAlbums from './top-albums'

function App() {
  const [data, setData] = useState({
    feed: {
      author: {
        name: {},
        uri: {}
      },
      entry: []
    }
  })
  const [albumInfo, setAlbumInfo] = useState(false);
  const [entry, setEntry] = useState({
    entry: {
      "im:name": {},
      "im:image": [{}]
    }
  })

  fetchTopAlbums().then(data => {setData(data)})

  function AlbumDetail({entry}) {
    return (
      <div style={{backgroundColor:'lightblue', display:'flex', margin:'5px auto'}}>
        <div style={{flexGrow:'1'}}>
          <img style={{width:160, margin:20}} src={entry['im:image'][2].label} />
        </div>
        <div style={{flexGrow:'1'}}>
          <p>{entry['im:name'].label}</p>
          <button>Add to favorites.</button>
        </div>
        <div style={{margin:'5px 5px'}}>
          <button onClick={() => setAlbumInfo(false)}>CLOSE</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{backgroundColor: "darkgrey"}}>
        <h1 style={{fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold', padding:'5px 0px 5px 5px', marginBottom:0}}>Top Albums</h1>
      </div>
      <div>
      {albumInfo && <AlbumDetail entry={entry}/>}
      </div>
      <ul onClick={() => setAlbumInfo(true)} style={{display:'flex', flexWrap:'wrap'}}>
        {data.feed.entry.map(entry => (
          <div key={entry.id.attributes['im:id']} onClick={(() => setEntry(entry))} style={{backgroundColor: "lightgrey", width:200, height: 275, margin:'15px 20px', display: 'flex', flexDirection:'column', alignItems:'center', borderRadius: 10}}>
             <img style={{width:160, marginTop:20}} src={entry['im:image'][2].label} />
             <p style={{fontFamily: 'Arial', fontSize: 13, fontWeight: 'bold', marginBottom:0}}>{entry['im:artist'].label}</p>
             <p style={{textAlign:'center', fontFamily: 'Arial', fontSize: 13, margin:'5px 10px 0px 10px'}}>{entry['im:name'].label}</p>
            </div>
        ))}
      </ul>

    </div>
  )
}

export default App
