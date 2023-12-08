import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <div classNameName="m-4">
        <div classNameName="d-flex justify-content-between">
          <h4>Admin Dashboard</h4>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="table mt-0">
          <thead className="table-dark">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Description Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td>
                <img
                  src="https://imgs.search.brave.com/ucingdCMkhCEB09ZCwjjiT7_wMqEIKkD1uWQSMb7BPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjQ0Mzg5/NDI1NzQtZTU2NTEw/ZGM1Y2U1P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/T1h4OFkyOXNiM0o4/Wlc1OE1IeDhNSHg4/ZkRBPQ.jpeg"
                  height={40}
                  width={40}
                />
              </td>
              <td>Rose</td>
              <td>NPR.300</td>
              <td>Flower</td>
              <td>Flower for decoration</td>
              <td>
                <div
                  classNameName="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                  <button type="button" classNameName="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Rose</td>
              <td>NPR.300</td>
              <td>Flower</td>
              <td>Flower for decoration</td>
              <td>
                <div
                  classNameName="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                  <button type="button" classNameName="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Rose</td>
              <td>NPR.300</td>
              <td>Flower</td>
              <td>Flower for decoration</td>
              <td>
                <div
                  classNameName="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                  <button type="button" classNameName="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
