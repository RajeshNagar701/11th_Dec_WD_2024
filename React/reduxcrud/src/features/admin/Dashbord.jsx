import React, { useEffect } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import { useDispatch, useSelector } from 'react-redux'
import { select_user } from '../userSlice';

function Dashbord() {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(select_user());
    }, []);
    const { users_data } = useSelector((state) => state.user);
    
    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage User </h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>mobile</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                     users_data.map((item, index, arr) => {

                                        return (
                                            <tr key={item}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>
                                                    <button className='btn btn-primary'>Edit</button>
                                                    <button className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <AFooter />
        </>
    )
}

export default Dashbord