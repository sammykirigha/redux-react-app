import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions';

const DataList = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.users);
    
	return (
		<div>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Action</th>
					</tr>
				</thead>
                <tbody>
                    {users?.map((user, i) => (
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td><button onClick={()=>dispatch(deleteUser(user.email))} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
					
				</tbody>
			</table>
		</div>
	);
};

export default DataList;
