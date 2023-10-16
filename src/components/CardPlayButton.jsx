import { Pause, Play } from "./Player"
import { usePlayerStore } from '../store/playerStore'

export const CardPlayButton = ({ id, size = "sm" }) => {

    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(!isPlaying)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[0] })

            })
    }

    const iconClassName = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    return <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-2 hover:scale-[1.02] transition hover:bg-green-400">
        {isPlayingPlaylist ? <Pause className={iconClassName}/> : <Play className={iconClassName}/>}
    </button>
}