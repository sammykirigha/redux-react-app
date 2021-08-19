import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const AddForm = () => {
	const dispatch = useDispatch();
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ contact, setContact ] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(addUser({ name, email, contact }));
	};

	return (
		<div>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Name
					</label>
					<input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" />
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">
						Email
					</label>
					<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" />
				</div>
				<div class="mb-3">
					<label class="form-label" for="exampleCheck1">
						Contact
					</label>
					<input
						value={contact}
						onChange={(e) => setContact(e.target.value)}
						type="text"
						class="form-control"
					/>
				</div>
				<button onClick={handleClick} type="submit" class="btn btn-primary">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddForm;
