import { useRef } from "react";

function Video() {

    const videoRef = useRef(null);

    function handleStart() {
        videoRef.current.play();
    }

    function handlePause() {
        videoRef.current.pause();
    }

    function handleRestart() {
        videoRef.current.currentTime = 0;
    }

    function handleForward() {
        videoRef.current.currentTime += 10;
    }

    function handleBackward() {
        videoRef.current.currentTime -= 10;
    }

    return (
        <>
        <video ref={videoRef} src="/video.mp4" width="600px" height="400px"></video>
        <div>
            <button onClick={handleStart}>start</button>
            <button onClickCapture={handlePause}>pause</button>
            <button onClick={handleRestart}>restart</button>
            <button onClick={handleForward}>10sec++</button>
            <button onClick={handleBackward}>--10sec </button>
        </div>
        </>
    )
}

export default Video;