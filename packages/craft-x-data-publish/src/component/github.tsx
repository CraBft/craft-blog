import * as React from 'react';
import { GITHUB_CONFIG } from '../utils/github-api';

const Github: React.FC<{}> = () => {
	const [owner, setOwner] = React.useState('');
	const [repo, setRepo] = React.useState('');
	const [token, setToken] = React.useState('');

	React.useEffect(() => {
		(async () => {
			const config = await craft.storageApi.get(GITHUB_CONFIG);
			if (config.status === 'success') {
				const data = JSON.parse(config.data);
				setOwner(data.owner);
				setRepo(data.repo);
				setToken(data.token);
			}
		})();
	}, []);

	React.useEffect(() => {
		(async () => {
			await craft.storageApi.put(
				GITHUB_CONFIG,
				JSON.stringify({
					owner,
					repo,
					token,
				})
			);
		})();
	}, [owner, repo, token]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<input
				placeholder='owner'
				value={owner}
				onChange={(e) => setOwner(e.target.value)}
			/>
			<input
				placeholder='repo'
				value={repo}
				onChange={(e) => setRepo(e.target.value)}
			/>
			<input
				placeholder='token'
				value={token}
				onChange={(e) => setToken(e.target.value)}
			/>
		</div>
	);
};

export default Github;
