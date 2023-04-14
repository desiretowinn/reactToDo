import React, { useState, useRef } from 'react';

const App = () => {

  var today = new Date();

  const [task, setTask] = useState([])
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: name,
      phone: tel,
      date: today.toLocaleTimeString('en-US'),
    }


    if (newTask.title.length === 0 || newTask.phone.length === 0){
      alert('PLease fill the contact name and phone number')
    }else{
      setTask([...task, newTask])
    }


    setName('')
    setTel('')
  }




  console.log(task);




  return (
    <div>

      <div className="task__box">

        <h1 className="task__title">Add contact</h1>

        <hr />

        <form className='task__box--form' action="submit" onSubmit={(e) => addTask(e)}>

          <input
            className='task__box--form-input-name'
            type="text"
            placeholder='Enter Contact Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className='task__box--form-input-number'
            type="tel"
            placeholder='Enter Contact Number'
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />

          <button className='task__box--form-btn' type='submit'>Add New Contact</button>

        </form>


      </div>

      <div className="result-box">
        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>date</th>
              <th>custom</th>
              <th>remove</th>
            </tr>
          </thead>

          <tbody>
            {
              task?.map((item,index) => {
                return (
                  <tr>
                    <td>{ item.title }</td>
                    <td>{ item.phone }</td>
                    <td>{ item.date }</td>
                    <td><button className='custom-btn'>custom</button></td>
                    <td><button className='delete-btn'>delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default App;