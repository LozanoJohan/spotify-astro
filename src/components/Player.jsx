import { useState, useRef, useEffect } from "react"
import { usePlayerStore } from '../store/playerStore'

export const Pause = () => (
    <svg role="img" className="h-8 w-8" aria-hidden="true" viewBox="0 0 16 16"
    ><path
        d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
    ></path></svg>

)

export const Play = () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"
    ><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg>
)

export function Player() {

    const {isPlaying, setIsPlaying} = usePlayerStore(state => state)
    const [currentSong, setCurrentSong] = useState(null)

    const audioRef = useRef()

    useEffect(() => {
        audioRef.current.src = `/music/1/01.mp3`

    }, [])

    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setIsPlaying(!isPlaying)
        audioRef.current.volume = 1
    }

    return (
        <div className="flex justify-between w-full px-4 z-50">
            <div>
                current song
            </div>
            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button className="bg-white rounded-full p-2"
                        onClick={handleClick}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                </div>
            </div>
            <div className="grid place-content-center">
                volumen
            </div>

            <audio ref={audioRef}></audio>
        </div>
    )
}