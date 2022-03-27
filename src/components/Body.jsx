import React, { useState } from 'react';

const Body = () => {
  const [tasks, setTasks] = useState(['task 0', 'task 1']);
  const [task, setTask] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [elementEdit, setelementEdit] = useState({});
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    if (task.length === 0) {
      setIsError(true);
      return;
    }
    setIsError(false);
    const newTask = task;
    setTasks([...tasks, newTask]);
    setTask('');
  };
  const deleteItem = (key) => {
    let newTask = tasks.filter((value, index) =>
      index !== key ? value : null
    );
    setTasks(newTask);
  };
  const editItem = (item, index) => {
    setTask(item);
    setelementEdit({ index, item });
    setisEdit(true);
  };
  const editedItem = () => {
    if (task.length === 0) {
      setIsError(true);
      return;
    }
    const { index, item } = elementEdit;
    console.log(index, item);
    let newTask = tasks;
    newTask[index] = task;
    setTasks(newTask);
    setTask('');
    setisEdit(false);
    setIsError(false);
  };
  return (
    <>
      <h1 className="text-center"> Task List </h1>
      <form className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Task name</label>
          <input
            value={task}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter task name"
            onChange={(e) => setTask(e.target.value)}
          />
          {isError ? (
            <small id="emailHelp" className="text-danger ">
              *Element is empty
            </small>
          ) : (
            ''
          )}
        </div>
        {isEdit ? (
          <button
            type="button"
            className="mt-3 me-2 btn btn-warning"
            onClick={editedItem}
          >
            Edited
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleClick()}
            className="mt-3 me-2 btn btn-primary"
          >
            Create
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setisEdit(false);
            setIsError(false);
            setTask('');
            setTasks([]);
          }}
          className="mt-3 btn btn-success"
        >
          Clear
        </button>
      </form>

      <hr></hr>
      <div className="container">
        {tasks.map((item, index) => {
          return (
            <div className="alert alert-secondary" key={index}>
              <div className="row">
                <div className="col-1">#{index + 1}</div>
                <div className="col-8">{item}</div>
                <div className="col-3">
                  <button
                    className="btn btn-warning me-1 "
                    onClick={() => editItem(item, index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Body;
