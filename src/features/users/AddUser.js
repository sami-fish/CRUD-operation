import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    height: ''
  });

  const handleAddUser = () => {
    setValues({ firstName: '', lastName: '', age: '', gender: '', height: '' });
    dispatch(addUser({
      id: uuidv4(),
      firstName: values.firstName,
      lastName: values.lastName,
      age: values.age,
      gender: values.gender,
      height: values.height
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="First Name"
        value={values.firstName}
        onChange={(e) => setValues({ ...values, firstName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Samuel' }}
      />
      <br />

      <TextField
        label="Last Name"
        value={values.lastName}
        onChange={(e) => setValues({ ...values, lastName: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Fiseha' }}
      />
      <br />

      <TextField
        label="Age"
        value={values.age}
        onChange={(e) => setValues({ ...values, age: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'your age' }}
      />
      <br />


      <TextField
        label="Gender"
        value={values.gender}
        onChange={(e) => setValues({ ...values, gender: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'M/F' }}
      />
      <br />


    

      <TextField
        label="Height"
        value={values.height}
        onChange={(e) => setValues({ ...values, height: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'height in cm' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser