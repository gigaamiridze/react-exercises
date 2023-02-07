import React, { useState } from 'react';

const defaultFormData = {
  title: '',
  body: '',
}

function Form() {
  const [ formData, setFormData ] = useState(defaultFormData);
  const { title, body } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(defaultFormData);
  }

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' id='title' value={title} onChange={handleChange} />
        <br/>
        <label htmlFor="body">Body</label>
        <input type="text" name='body' id='body' value={body} onChange={handleChange} />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Form;
