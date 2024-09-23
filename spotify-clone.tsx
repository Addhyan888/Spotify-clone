import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Home, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SpotifyClone() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)

  const topSongs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", plays: "12,345,678" },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran", plays: "11,234,567" },
    { id: 3, title: "Dance Monkey", artist: "Tones and I", plays: "10,123,456" },
    { id: 4, title: "Watermelon Sugar", artist: "Harry Styles", plays: "9,876,543" },
    { id: 5, title: "Levitating", artist: "Dua Lipa", plays: "8,765,432" },
    { id: 6, title: "Stay", artist: "The Kid LAROI & Justin Bieber", plays: "7,654,321" },
    { id: 7, title: "Montero (Call Me By Your Name)", artist: "Lil Nas X", plays: "6,543,210" },
    { id: 8, title: "drivers license", artist: "Olivia Rodrigo", plays: "5,432,109" },
    { id: 9, title: "Save Your Tears", artist: "The Weeknd & Ariana Grande", plays: "4,321,098" },
    { id: 10, title: "Heat Waves", artist: "Glass Animals", plays: "3,210,987" },
  ]

  const playSong = (song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-black p-6 flex flex-col">
          <div className="mb-8">
            <svg viewBox="0 0 1134 340" className="h-10 text-white"><path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                  <Home className="h-6 w-6" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                  <Search className="h-6 w-6" />
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                  <Library className="h-6 w-6" />
                  <span>Your Library</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8">
          <header className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <button className="bg-black bg-opacity-50 rounded-full p-1">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="bg-black bg-opacity-50 rounded-full p-1">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <button className="bg-white text-black rounded-full py-2 px-6 font-semibold">
              Upgrade
            </button>
          </header>
          <h1 className="text-3xl font-bold mb-6">Top Songs This Week</h1>
          <div className="grid gap-4">
            {topSongs.map((song) => (
              <div 
                key={song.id} 
                className="flex items-center space-x-4 hover:bg-white hover:bg-opacity-10 p-2 rounded-md cursor-pointer"
                onClick={() => playSong(song)}
              >
                <img src={`/placeholder.svg?height=64&width=64`} alt={song.title} className="w-16 h-16 rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{song.title}</h3>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </div>
                <div className="text-sm text-gray-400">{song.plays}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Player */}
      <div className="h-20 bg-gray-900 border-t border-gray-800 flex items-center px-4">
        {currentSong && (
          <div className="flex items-center flex-1">
            <img src={`/placeholder.svg?height=56&width=56`} alt={currentSong.title} className="w-14 h-14 mr-4" />
            <div>
              <h4 className="font-semibold">{currentSong.title}</h4>
              <p className="text-xs text-gray-400">{currentSong.artist}</p>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center flex-1">
          <button className="mx-2">
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            className="mx-2 bg-white rounded-full p-2"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-6 w-6 text-black" /> : <Play className="h-6 w-6 text-black" />}
          </button>
          <button className="mx-2">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center justify-end flex-1">
          <Volume2 className="h-5 w-5" />
          <div className="w-24 h-1 bg-gray-600 rounded-full ml-2">
            <div className="w-1/2 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
