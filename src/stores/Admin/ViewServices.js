import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ViewServices = () => {
  const [services, setServices] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [text, setText] = useState("")
  const [video, setVideo] = useState("")
  const [_id, setId] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch services list
  const fetchServices = () => {
    axios.get(`https://gcapp-server.onrender.com/Services`)
      .then((res) => {
        setServices(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError("Failed to fetch services.")
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchServices()
  }, [])

  const deleteService = (serviceId) => {
    axios.delete(`https://gcapp-server.onrender.com/Services/${serviceId}`)
      .then(() => {
        alert(`Service moved to bin.`)
        fetchServices() // Refresh list after deletion
      })
      .catch((err) => console.log(err))
  }

  const getOneRecord = (serviceId) => {
    axios.get(`https://gcapp-server.onrender.com/Services/${serviceId}`)
      .then((res) => {
        setName(res.data.name)
        setDescription(res.data.description)
        setText(res.data.text)
        setVideo(res.data.video)
        setId(res.data._id)
      })
      .catch((err) => console.log(err))
  }

  const updateService = (e) => {
    e.preventDefault()
    axios.put(`https://gcapp-server.onrender.com/Services/${_id}`, { _id, name, description, text, video })
      .then((res) => {
        alert("Data Updated!")
        fetchServices() // Refresh list after update
        // Close modal
        const modalElement = document.getElementById("update")
        const modal = window.bootstrap.Modal.getInstance(modalElement)
        modal.hide()
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='container p-2' style={{ maxWidth: "1000px", fontSize: "10px", margin: "auto", height: "90vh", overflowY: "auto", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff" }}>
      <h2>View Services</h2>

      {loading && <p>Loading services...</p>}
      {error && <p className='text-danger'>{error}</p>}

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Text</th>
            <th>Video Clip</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.text}</td>
              <td>
                <video width="100" controls>
                  <source src={service.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </td>
              <td>
                <button onClick={() => getOneRecord(service._id)} data-bs-target="#update" data-bs-toggle="modal" className='btn btn-outline-primary btn-sm m-2'>
                  <i className='bi bi-pencil-square'></i>
                </button>
                <button onClick={() => deleteService(service._id)} className='btn btn-outline-danger btn-sm m-2'>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      <div className='modal fade' id='update' tabIndex="-1">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3>Update Service</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={updateService}>
                <input name='name' placeholder='Name' value={name} className='form-control mb-3' onChange={(e) => setName(e.target.value)} />
                <input name='description' placeholder='Description' value={description} className='form-control mb-3' onChange={(e) => setDescription(e.target.value)} />
                <input name='text' placeholder='Text' value={text} className='form-control mb-3' onChange={(e) => setText(e.target.value)} />
                <input name='video' placeholder='Video URL' value={video} className='form-control mb-3' onChange={(e) => setVideo(e.target.value)} />
                <input type='submit' className='form-control btn btn-primary' value="Update" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewServices