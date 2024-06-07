import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const[submitted,setsubmitted]=useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    address:'',
    password: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});

     };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend endpoint
    
      const response = await axios.post('http://localhost:3000/v1/api/registration', formData);
      console.log(response.data); 
       
   
  
    } catch (error) {
      console.error(error); // Log any errors
      
    }
   
  };

  return (
    <div className="employee-form-container">
        <h2>Employee Form</h2>
       
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required 
                placeholder='first Name'/>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required
                placeholder='last Name' />
                <input type="text" name="address" value={formData.address} onChange={handleChange} required
                placeholder='Address' />
                <input type="password" name="password" value={formData.password} onChange={handleChange} required
                placeholder='password' />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required 
                placeholder='Email'/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                placeholder='phone' />
                <button type="submit">Submit</button>
            </form>
      
           
      
    </div>
);
}

export default App
