import { useState, useRef, useEffect } from "react";

function App() {

    const infoRef = useRef()

    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'm',
        userType: 'corporate',
        tac: false,
        egn: '',
        eik: '',
    });

    useEffect(() => {
        if (values.username && values.age) {
            infoRef.current.value = `${values.username} - ${values.age} old.`
        }
    }, [values.username, values.age]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const booleanChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.checked
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={changeHandler}
                        value={values.username}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" value={values.password} onChange={changeHandler}></input>
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input id="age" type="number" name="age" value={values.age} onChange={changeHandler}></input>
                </div>

                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler}></textarea>
                </div>

                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="individual-user-type">Individual:</label>
                    <input type="radio" name="userType" value="individual" id="individual-user-type" onChange={changeHandler} checked={values.userType === 'individual'} />
                    <label htmlFor="corporate-user-type">Corporate:</label>
                    <input type="radio" name="userType" value="corporate" id="corporate-user-type" onChange={changeHandler} checked={values.userType === 'corporate'} />

                </div>

                <div>
                    <label htmlFor="indentifier">{values.userType === 'individual' ? 'EGN' : 'EIK'}</label>
                    {values.userType === 'individual'
                        ? <input type="text" id="indentifier" name="egn" value={values.egn} onChange={changeHandler} />
                        : <input type="text" id="indentifier" name="eik" value={values.eik} onChange={changeHandler} />
                    }
                </div>

                <div>
                    <label htmlFor="tac">Terms and Condtions:</label>
                    <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={booleanChangeHandler} />
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>

                <div>
                    <label htmlFor="uncontrolled-input">Uncontrolled Input</label>
                    <input type="text" name="uncontrolled" id="uncontrolled-input" ref={infoRef} />
                </div>
            </form>

        </div>
    );
}

export default App;
