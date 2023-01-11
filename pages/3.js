import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function Form() {

	const [tweet, setTweet] = React.useState('');
	const [status, setStatus] = React.useState('typing');

	if (status === 'success') {
		return alert('Your tweet has been sent!')
	}

	function handleTextAreaChange(e) {
		setTweet(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus('submitting');
		try {
			await submitForm(answer);
			setStatus('success');
		} catch (err) {
			setStatus('typing');
		}
	}

	return <div>
		<Container>
			<MainMenu />
			<h1 className='my-4 text-xl'>Tweet</h1>
			<form onSubmit={handleSubmit}>
				<textarea
					className='p-2 border-2 rounded h-36 w-72 border-sky-600'
					type='textarea'
					placeholder='Input up to 140 characters...'
					onChange={handleTextAreaChange}
					disabled={status === 'submitting'}
				>
				</textarea>
				<div className='flex items-center'>
					<button
						className='block p-2 text-white rounded cursor-pointer bg-sky-600'
						disabled={
							tweet.length === 0 ||
							status === 'submitting'
						}>
						Tweet
					</button>
					<div className='pl-40'>140</div>
				</div>
			</form>
		</Container>
	</div>
}
