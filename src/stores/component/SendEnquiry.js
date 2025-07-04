import { useState } from 'react';
import axios from 'axios';

const SendEnquiry = () => {
  const [matter, Setmatter] = useState("");
  const [user, Setuser] = useState("");
  const [email, Setemail] = useState("");
  const [mobile, Setmobile] = useState("");
  const [message, Setmessage] = useState("");
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState("");

  const validate = () => {
    const newErrors = {};
    const alphaExp = /^[a-zA-Z ]+$/;
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileExp = /^[6-9]\d{9}$/;

    // if (!matter) newErrors.matter = "Please select a topic";
    if (!user) newErrors.user = "Name is required";
    else if (!alphaExp.test(user)) newErrors.user = "Name should contain only letters";

    if (!email) newErrors.email = "Email is required";
    else if (!emailExp.test(email)) newErrors.email = "Invalid email format";

    if (mobile && !mobileExp.test(mobile)) newErrors.mobile = "Enter valid 10-digit mobile number";

    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!validate()) return;

     const currentDate = new Date().toISOString(); // format: YYYY-MM-DDTHH:mm:ss.sssZ
  setDate(currentDate);

    axios.post(`https://gcapp-server.onrender.com/Enquiries`, { matter, user, email, mobile, message, date: currentDate, })
      .then((res) => {
        alert(`Thank you! Your message was sent.`);
        Setmatter(""); Setuser(""); Setemail(""); Setmobile(""); Setmessage("");
        setErrors({});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='contact-form-container'>
      <form className='contact-form' onSubmit={SubmitHandler}>
        <select name='matter' value={matter} className='input-field' onChange={(e) => Setmatter(e.target.value)}>
          <option value="">How can we help you?</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
        </select>
        {errors.matter && <p className="error">{errors.matter}</p>}

        <input name='user' value={user} placeholder='Your name' className='input-field' onChange={(e) => Setuser(e.target.value)} />
        {errors.user && <p className="error text-start">{errors.user}</p>}

        <div className='input-row'>
          <div className='col-3 col-sm-3 col-md-2 col-lg-5 me-5'>
            <input name='email'  value={email} placeholder='Your email' className='input-field' onChange={(e) => Setemail(e.target.value)} />
            <input style={{marginTop:'10px'}} name='mobile' value={mobile} placeholder='+91 Mobile (optional)' className='input-field' onChange={(e) => Setmobile(e.target.value)} />
          </div>
        </div>
        {errors.email && <p className="error text-start">{errors.email}</p>}
        {errors.mobile && <p className="error text-start">{errors.mobile}</p>}

        <textarea name='message' value={message} placeholder='Your message' className='input-field textarea' onChange={(e) => Setmessage(e.target.value)} />
        {errors.message && <p className="error text-start">{errors.message}</p>}

        <button type='submit' className='submit-button'>Submit feedback</button>
      </form>
      </div>
  );
};

export default SendEnquiry;



