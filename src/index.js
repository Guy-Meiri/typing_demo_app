import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import styles from './myCssTest.module.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		{/* <div>
			{' '}
			my app
			<textarea
				rows={20}
				value={
					'If you want your app to work offline and load faster, you can change If you want your app to work offline and load faster, you can change'
				}
				className={styles.mytextarea}
			/>
			
		</div> */}
		{/* <img src={logo} className="App-logo" alt="logo" className={styles.myImg} /> */}
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
