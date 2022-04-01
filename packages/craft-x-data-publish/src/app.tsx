import { CraftBlockInsert } from '@craftdocs/craft-extension-api';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initConsole, logToInPageConsole } from './utils/console';
import craftXIconSrc from './craftx-icon.png';
import Github from './component/github';
import SyncButton from './component/syncButton';

const App: React.FC<{}> = () => {
	const isDarkMode = useCraftDarkMode();
	const [data, setData] = React.useState('');

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<img className='icon' src={craftXIconSrc} alt='CraftX logo' />
			<Github />
			<SyncButton />
		</div>
	);
};

function useCraftDarkMode() {
	const [isDarkMode, setIsDarkMode] = React.useState(false);

	React.useEffect(() => {
		craft.env.setListener((env) => {
			setIsDarkMode(env.colorScheme === 'dark');
			if (env.colorScheme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	}, []);

	return isDarkMode;
}

export function initApp() {
	ReactDOM.render(<App />, document.getElementById('react-root'));
	initConsole();
}
