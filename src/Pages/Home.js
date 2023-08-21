import React from 'react'
import './home.css'


const Home = () => {
  return (
    <div>
      <h1 className='welcoming'>Welcome to our company intern platform</h1>

      <h3 className='regestring'>register please or you sign in if you have your access informations</h3>

      <div className='photoandslogant'>
      <img className='employee'
        src="https://www.salesforce.com/content/dam/blogs/uk/2018/hr-data-employee-engagement.jpg"
        alt="employee"
      />
      <div className='writting'>
      <h2>Stay connected and closer to your colleagues.</h2>
      <br/>
      <h3>Since time is priceless, our goal is to value it!</h3>
      </div>
      </div>
    </div>
  )
}

export default Home