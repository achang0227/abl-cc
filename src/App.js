import React, { useState, useRef, useEffect } from 'react'
import fetchTopAlbums from './top-albums'

const LOCAL_STORAGE_KEY = 'favoritedAlbums'

function App() {
  const [data, setData] = useState({
    feed: {
      author: {
        name: {},
        uri: {}
      },
      entry: []
    }
  }) //initial import of data from top-albums.js
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
      }}}) //stores data of last selected album entry
  const [favorites, setFavorites] = useState([]) //array that stores unique key of favorited albums
  const [page, setPage] = useState('all') //used toggle Top Albums<->Favorite Albums pages
  const [albumInfo, setAlbumInfo] = useState(false) //used to toggle visibility of album popout description
  const newEntry = useRef() //reference for album entry to be added to favorites

  //initializes saved array of favorited albums
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedFavorites) {
      setFavorites(storedFavorites)
    }
  },[])

  //local storage to persist array of favorited albums
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  //grabs data from top-albums.js and stores in data state
  fetchTopAlbums().then(data => {setData(data)})

  //add album entry to favorited albums
  function addEntry() {
    if (favorites.indexOf(entry.id.attributes['im:id'])>= -1) {
      setFavorites(prevFavorites => {
        return [...prevFavorites, entry.id.attributes['im:id']]
      })
    }
  }

  //remove album entry from favorited albums
  function removeEntry() {
    if (favorites.indexOf(entry.id.attributes['im:id'])!== -1) {
      setFavorites(prevFavorites => {
        return prevFavorites.filter((id) => id !== entry.id.attributes['im:id'])
      })
    }
  }

  //toggles page between Top Albums<->Favorite Albums
  function togglePage(page) {
    return setPage(page),setAlbumInfo(false)
  }

  //class containing all of selected album details
  function AlbumDetail() {
    return (
      <div style={{backgroundColor:'lightblue', display:'flex', margin:'0px auto', borderRadius: '0px 0px 10px 10px'}}>
        <div>
          <img style={{width:160, margin:20}} src={entry['im:image'][2].label} />
        </div>

        <div style={{flexGrow:1, flexDirection:'col'}}>
          <div style={{display:'flex', fontFamily: 'Arial'}}>
            <div style={{flexDirection:'row'}}>
              <div style={{padding:'10px 5px', fontWeight:'bold', color:'darkslategray'}}>
                <p style={{margin:'10px 5px'}}>Album Name:</p>
                <p style={{margin:'10px 5px'}}>Artist:</p>
                <p style={{margin:'10px 5px'}}>Category:</p>
                <p style={{margin:'10px 5px'}}>Number of songs:</p>
                <p style={{margin:'10px 5px'}}>Price:</p>
              </div>
            </div>

            <div style={{flexGrow:1, padding:'10px 5px'}}>
              <p style={{margin:'10px 5px'}}>{entry['im:name'].label}</p>
              <p style={{margin:'10px 5px'}}>{entry['im:artist'].label}</p>
              <p style={{margin:'10px 5px'}}>{entry.category.attributes.label}</p>
              <p style={{margin:'10px 5px'}}>{entry['im:itemCount'].label}</p>
              <p style={{margin:'10px 5px'}}>{entry['im:price'].label}</p>
            </div>
          </div>

          <div style={{margin:'0px 0px 20px 0px'}}>
            <p style={{fontSize:10, fontFamily: 'Arial', margin:'0px 0px 10px 10px'}}>{entry.rights.label}</p>
            {favorites.indexOf(entry.id.attributes['im:id']) === -1 && <button onClick={addEntry}>Add to favorites.</button>}
            {favorites.indexOf(entry.id.attributes['im:id']) !== -1 && <div><span style={{color:'darkgoldenrod', fontSize:25, padding:10}}>{String.fromCharCode(9733)}</span><button onClick={removeEntry}>Remove from favorites.</button></div>}
          </div>
        </div>

        <div style={{margin:'5px 5px'}}>
          <button onClick={() => setAlbumInfo(false)}>CLOSE</button>
        </div>
      </div>
    )
  }

  //class containing build of an individual album
  function Album({entry}) {
    return (
      <div key={entry.id.attributes['im:id']} ref={newEntry} onClick={(() => (setAlbumInfo(true),setEntry(entry),window.scrollTo({top: 0, behavior: 'smooth'})))} style={{backgroundColor: "lightgrey", width:200, height: 300, margin:'15px 20px', display: 'flex', flexDirection:'column', alignItems:'center', borderRadius: 10}}>
       <img style={{width:160, marginTop:20}} src={entry['im:image'][2].label} />
       <p style={{fontFamily: 'Arial', fontSize: 13, fontWeight: 'bold', marginBottom:0}}>{entry['im:artist'].label}</p>
       <p style={{textAlign:'center', fontFamily: 'Arial', fontSize: 13, margin:'5px 10px 0px 10px'}}>{entry['im:name'].label}</p>
       {(favorites.indexOf(entry.id.attributes['im:id'])!== -1) ? <div style={{color:'darkgoldenrod', fontSize:25, padding:10}}>{String.fromCharCode(9733)}</div>:null}
    </div>
    )
  }

  return (
    <div>
      {/*navbar with Top Albums<->Favorite Albums*/}
      <div style={{backgroundColor: "lightseagreen", display:'flex', fontFamily: 'Arial'}}>
        <div>
          <h1 style={{fontSize: 20, fontWeight: 'bold', padding:'20px 0px 5px 15px', marginTop:0}}>Top Albums</h1>
        </div>

        <div onClick={() => togglePage('all')} style={{flexGrow:1, color:page==='fav'?'darkslategray':'black', textDecorationLine: page==='all'?'underline':null}}>
          <p style={{fontSize: 15, position:'relative', float:'right', marginRight:15}}>Top Albums</p>
        </div>

        <div onClick={() => togglePage('fav')} style={{color:page==='all'?'darkslategray':'black', textDecorationLine: page==='all'?'underline':null}}>
          <p style={{fontSize: 15, marginRight:15}}>Favorite Albums</p>
        </div>
      </div>

      {/*toggles visibility of selected album details*/}
      {albumInfo && <AlbumDetail/>}

      {/*list of visible albums*/}
      <ul style={{display:'flex', flexWrap:'wrap'}}>
        {data.feed.entry.map(entry => (
          //condition to see Top Albums<->Favorite Albums; second condition to display only favorited albums
          (page === 'all') ? <Album entry={entry}/> : (favorites.indexOf(entry.id.attributes['im:id'])!== -1) ? <Album entry={entry}/>:null))
        }
      </ul>
    </div>
  )
}

export default App
