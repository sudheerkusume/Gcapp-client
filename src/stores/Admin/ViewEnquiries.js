import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries = () => {
    const [enquiries, setEnq] = useState([])
    const [message, setMessage] = useState("")
    const [matter, setMatter] = useState("")
    const [user, setuser] = useState("")
    const [mobile, setmobile] =useState("")
    const [email, setemail] = useState("")
    const [_id,setId] = useState("")

    
    
    useEffect(() => {
        axios.get(`https://gcapp-server.onrender.com/Enquiries`)
        .then((res) =>setEnq(res.data))
        .catch((err) => console.log(err));
    })

    const deleteEnq = (enqId) =>{
        axios.delete(`https://gcapp-server.onrender.com/Enquiries/${enqId}`)
        .then(() =>alert(`Move to Bin`))
        .catch((err) => console.log(err))
    }
   const getonerecord =(enqId)=>{
        axios.get(`https://gcapp-server.onrender.com/Enquiries/${enqId}`)
        .then((res)=>{
          setMessage(res.data.message)
           setMatter(res.data.matter)
            setuser(res.data.user)
            setmobile(res.data.mobile)
            setemail(res.data.email)
            setId(res.data._id)
        })
        .catch((err)=>console.log(err))
   }
   const updateEnq =(e) =>{
     e.preventDefault();
     axios.put(`https://gcapp-server.onrender.com/Enquiries/${_id}`,{_id,matter,user,mobile,email,message})
     .then((res)=>alert("you made it"))
     .catch((err)=>console.log(err))
   }
  return (
    <div className='container py-4'>
  <h2 className='mb-4 fw-bold'>View Enquiries <span className='text-success'>. . .</span></h2>
  
  <div className='table-responsive'>
    <table className='table table-hover align-middle'>
      <thead className='table-light'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {enquiries.map((Enq, index) => (
          <tr key={index}>
            <td className='fw-medium'>{Enq.user}</td>
            <td className='text-muted'>{Enq.email}</td>
            <td>{Enq.matter}</td>
            <td className='text-truncate' style={{ maxWidth: '200px' }}>{Enq.message}</td>
            <td>{new Date(Enq.date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}</td>
            <td>
              <span className={`badge rounded-pill ${Enq._status === 'Closed' ? 'bg-secondary' : 'bg-primary'}`}>
                {Enq.status || 'Open'}
              </span>
            </td>
            <td>
              <button
                onClick={() => getonerecord(Enq._id)}
                data-bs-toggle="modal"
                data-bs-target="#update"
                className='btn btn-outline-primary btn-sm me-2'
              >
                View
              </button>
              <button
                onClick={() => deleteEnq(Enq._id)}
                className='btn btn-outline-danger btn-sm'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Modal */}
  <div className='modal fade' id='update'>
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Update Enquiry</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div className='modal-body'>
          <form onSubmit={updateEnq}>
            <input
              placeholder='Enter Name'
              value={user}
              className='form-control mb-3'
              onChange={(e) => setuser(e.target.value)}
            />
            <input
              placeholder='Mobile Number'
              value={mobile}
              className='form-control mb-3'
              onChange={(e) => setmobile(e.target.value)}
            />
            <input
              placeholder='Email Address'
              value={email}
              className='form-control mb-3'
              onChange={(e) => setemail(e.target.value)}
            />
            <button type='submit' className='btn btn-success w-100'>Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ViewEnquiries