import { useState } from 'react'

const Task = () => {
  const [tasks, setTasks] = useState(
    [{
    id: 1,
    text: "Doctors Appointment",
    day: 'Feb 9th at 2:30pm',
    remainder: true
  },{
    id: 2,
    text: "Meeting at Achool",
    day: 'Feb 10th at 1:30pm',
    remainder: true
  },{
    id: 3,
    text: "Food Shopping",
    day: 'Feb 11th at 5:30pm',
    remainder: true
  }]
  )

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Task