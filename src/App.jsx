import React from 'react'
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <h1 className='nav'>Becv</h1>
      <div className="center">
        <div className="heading">
          <h1>Interested in our</h1> 
          <h1 className='head2'>business pricing?</h1>
        </div>
        <div className="para">
          <p>Fill out the form to view details and we'll</p>
          <p className='para2'>contact you as soon as possible.</p>
        </div>
        <div className="box">
          <div className='box1'>
            <div className='name'>
              <label for="name">Name</label>
              <input type="text" placeholder='Ethan Johnson'className='ip1' />
            </div>
            <div className='email'>
              <label for="email">Company Email</label>
              <input type="email" placeholder='ethan@jhonson.com' className='ip1'/>
            </div>
          </div>
          <div className='box2'>
              <div className='company'>
                <label for="company">Company Size</label>
                <div>
                  <select className='ip1'>
                    <option value="50-100">50-100 employees</option>
                  </select>
                </div>
              </div>
              <div className='subject'>
                <label for="subject">Subject</label>
                <div>
                  <select className='ip1'>
                    <option>Building Landing Pages</option>
                  </select>
                </div>
              </div>
          </div>
          <div className='box3'>
            <div className='name'>
              <label for="message">Message</label>
              <input type="text" placeholder='50-100 employees' className='ip2' />
            </div>
          </div>
          <div className='box4'>
            <input type="button" value="Contact Sales" className='ip3'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
