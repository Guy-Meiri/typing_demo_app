import React, { useRef, useState, useEffect } from 'react';
import styles from './myCssTest.module.css';
// import './App.css';

function App() {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const [ isDrawing, setIsDrawing ] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerHeight * 2;
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;

		const context = canvas.getContext('2d');
		context.scale(2, 2);
		context.font = '50px Arial';
		context.fillStyle = '#00DADA';
		context.fillText("noom is a cutie pie, she's the real deal dude!", 300, 300);
		context.lineCap = 'round';
		context.strokeStyle = '#1f2f3f';
		context.lineWidth = 2;
		context.globalAlpha = 0.3;

		contextRef.current = context;
	}, []);

	const startDrawing = ({ nativeEvent }) => {
		setIsDrawing(true);
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.beginPath();
		contextRef.current.moveTo(offsetX, offsetY);
	};

	const stopDrawing = () => {
		contextRef.current.closePath();
		//some code for accessing pixel values
		// if (contextRef) {
		// 	let imgd = contextRef.current.getImageData(100, 100, 10, 10);
		// 	let pix = imgd.data; // in this case, pix will have an array of length 400, (100 pixels, each with 4 numbers- red, green, blue and alpha)
		// 	// console.log(pix);
		// }

		setIsDrawing(false);
	};

	const draw = ({ nativeEvent }) => {
		if (isDrawing) {
			const { offsetX, offsetY } = nativeEvent;
			contextRef.current.lineTo(offsetX, offsetY);
			contextRef.current.stroke();
		}
	};

	return <canvas onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseMove={draw} ref={canvasRef} />;
}

export default App;
