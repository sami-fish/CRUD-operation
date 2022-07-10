import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { firstName, lastName, age, gender, height  } = existingUser[0];
  const [values, setValues] = useState({
    firstName,
    lastName,
    age,
    gender,
    height
  });

  const handleEditUser = () => {
    setValues({ firstName: '', lastName: '', age: '', gender: '', height: '' });
    dispatch(editUser({
      id: params.id,
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser