import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () =>	 {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {title, body, author};

		setIsPending(true);

		setTimeout(() => {
			fetch('http://localhost:8000/blogs', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body:JSON.stringify(blog)
			}).then(() => {
				console.log('new blog added!!!');
				setIsPending(false);
				history.push('/');
			})
		}, 300)
	}

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title:</label>
				<input 
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Blog Body:</label>
				<textarea 
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>

				<label>Author:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="Mario">Mario</option>
					<option value="Luigi">Luigi</option>
				</select>

				{ !isPending && <button>Add blog!</button> }
				{ isPending && <button disabled>Adding...</button>}
			</form>
		</div>
	);
}
 
export default Create;