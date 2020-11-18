import React, { useState, useRef, useEffect } from 'react'
import fetchTopAlbums from './top-albums'

const LOCAL_STORAGE_KEY = 'data'

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
      "im:image": [{}],
      "im:itemCount": {},
      "rights": {},
      "im:artist": {},
      "category": {
        "attributes": {}
      },
      "im:price": {},
      "id": {
        "attributes": {}
      }
    }})
  const [favorites, setFavorites] = useState([])
  const [page, setPage] = useState('all')
  const newEntry = useRef()

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedFavorites) {
      setFavorites(storedFavorites)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  fetchTopAlbums().then(data => {setData(data)})

  function addEntry() {
    if (favorites.indexOf(entry.id.attributes['im:id'])>= -1) {
      setFavorites(prevFavorites => {
        return [...prevFavorites, entry.id.attributes['im:id']]
      })
    }
  }

  function removeEntry() {
    if (favorites.indexOf(entry.id.attributes['im:id'])!== -1) {
      setFavorites(prevFavorites => {
        return prevFavorites.filter((id) => id !== entry.id.attributes['im:id'])
      })
    }
  }

  function togglePage(page) {
    return setPage(page)
  }

  function AlbumDetail({entry}) {
    return (
      <div style={{backgroundColor:'lightblue', display:'flex', margin:'5px auto'}}>
        <div>
          <img style={{width:160, margin:20}} src={entry['im:image'][2].label} />
        </div>
        <div style={{flexGrow:1, flexDirection:'col'}}>
          <div style={{display:'flex'}}>
            <div style={{flexDirection:'row'}}>
              <div style={{margin:'10px 5px'}}>
                <p>Album Name:</p>
                <p>Artist:</p>
                <p>Category:</p>
                <p>Number of songs:</p>
                <p>Price:</p>
              </div>
            </div>
            <div style={{flexGrow:1}}>
              <p>{entry['im:name'].label}</p>
              <p>{entry['im:artist'].label}</p>
              <p>{entry.category.attributes.label}</p>
              <p>{entry['im:itemCount'].label}</p>
              <p>{entry['im:price'].label}</p>
            </div>
          </div>
          <div style={{margin:'0px 0px 20px 0px'}}>
            <p>{entry.rights.label}</p>
            {favorites.indexOf(entry.id.attributes['im:id']) === -1 && <button onClick={addEntry}>Add to favorites.</button>}
            {favorites.indexOf(entry.id.attributes['im:id']) !== -1 && <button onClick={removeEntry}>{String.fromCharCode(9733)}Remove from favorites.</button>}
          </div>
        </div>
        <div style={{margin:'5px 5px'}}>
          <button onClick={() => setAlbumInfo(false)}>CLOSE</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{backgroundColor: "darkgrey", display:'flex'}}>
        <div>
          <h1 style={{fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold', padding:'5px 0px 5px 5px', marginBottom:0}}>Top Albums</h1>
        </div>

        <div onClick={() => togglePage('all')} style={{flexGrow:1}}>
          <p style={{position:'relative', float:'right', marginRight:15}}>Top Albums</p>
        </div>

        <div onClick={() => togglePage('fav')} style={{}}>
          <p style={{marginRight:15}}>Favorite Albums</p>
        </div>
      </div>

      {albumInfo && <AlbumDetail entry={entry}/>}
      <ul onClick={() => setAlbumInfo(true)} style={{display:'flex', flexWrap:'wrap'}}>
        {data.feed.entry.map(entry => (
          (page === 'all') ?
            <div key={entry.id.attributes['im:id']} ref={newEntry} onClick={(() => setEntry(entry))} style={{backgroundColor: "lightgrey", width:200, height: 275, margin:'15px 20px', display: 'flex', flexDirection:'column', alignItems:'center', borderRadius: 10}}>
               <img style={{width:160, marginTop:20}} src={entry['im:image'][2].label} />
               <p style={{fontFamily: 'Arial', fontSize: 13, fontWeight: 'bold', marginBottom:0}}>{entry['im:artist'].label}</p>
               <p style={{textAlign:'center', fontFamily: 'Arial', fontSize: 13, margin:'5px 10px 0px 10px'}}>{entry['im:name'].label}</p>
               {(favorites.indexOf(entry.id.attributes['im:id'])!== -1) ? <div>{String.fromCharCode(9733)}</div>:null}
            </div>
            :(favorites.indexOf(entry.id.attributes['im:id'])!== -1) ?
              <div key={entry.id.attributes['im:id']} ref={newEntry} onClick={(() => setEntry(entry))} style={{backgroundColor: "lightgrey", width:200, height: 275, margin:'15px 20px', display: 'flex', flexDirection:'column', alignItems:'center', borderRadius: 10}}>
                 <img style={{width:160, marginTop:20}} src={entry['im:image'][2].label} />
                 <p style={{fontFamily: 'Arial', fontSize: 13, fontWeight: 'bold', marginBottom:0}}>{entry['im:artist'].label}</p>
                 <p style={{textAlign:'center', fontFamily: 'Arial', fontSize: 13, margin:'5px 10px 0px 10px'}}>{entry['im:name'].label}</p>
                 {(favorites.indexOf(entry.id.attributes['im:id'])!== -1) ? <div>{String.fromCharCode(9733)}</div>:null}
              </div>
            :null
          ))
        }
      </ul>
    </div>
  )
}

export default App
