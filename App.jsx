import React, { useState, useRef } from 'react';

function App() {

	const [tracks, setTracks] = useState([
	{title: 'Track 1', src: 'some'},
	{title: 'Track 2', src: 'some'}]
	);

	const [oop, setOop] = useState(0);

	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef(null);

	const handlePause = () => {
		if(isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		};	
		setIsPlaying(!isPlaying);
	};

	const handleNext = () => {
		setOop((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(false);
	};

	const handlePrev = () => {
		setOop((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
	};

	return (
		<>
			<h1>Here are your music:</h1>
			<audio src={tracks[oop].src} ref={audioRef} />
			<p>{tracks[oop].title}</p>
      <div>{tracks.map((track) => (
        <div>
          {track.title}
        </div>
      ))}</div>
			<button onClick={handlePrev}>Previous</button>
			<button onClick={handlePause}>{isPlaying ? 'Pause' : 'Play'}</button>
			<button onClick={handleNext}>Next</button>
		</>
	);
};

export default App;
