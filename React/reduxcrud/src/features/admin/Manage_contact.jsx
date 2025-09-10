import React from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'

function Manage_contact() {
    return (
        <>
            <AHeader/>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage Contact</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <AFooter/>
        </>
    )
}

export default Manage_contact