import { useState } from "react";

const Create = () =>	 {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {title, body, author};

		console.log(blog);
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

				<button>Add blog!</button>
			</form>
		</div>
	);
}
 
export default Create;