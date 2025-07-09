import React from 'react'

function Add_categories() {
    return (
        <div>


            <div className="featured section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h6>| Categories</h6>
                                <h2>Add Categories</h2>
                            </div>

                            <div className="container mt-3">
                               
                                <form method="post">
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" className="form-control" id="email" placeholder="Enter Categories Name" name="cate_name" />
                                        <label htmlFor="email">Categories Name</label>
                                    </div>
                                    <div className="form-floating mt-3 mb-3">
                                        <input type="url" className="form-control" id="pwd" placeholder="Enter Categories image url" name="cate_img" />
                                        <label htmlFor="pwd">Categories URL</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_categories