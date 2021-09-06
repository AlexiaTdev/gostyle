import React, {useState, useContext} from 'react'
import Button from './Button'
import styled from 'styled-components'
import UserContext from '../contexts/UserContext'

async function loginUser(credentials) {
    return fetch('http://localhost:3001/connexion/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const SigninForm = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useContext(UserContext)


    const login = (e) => {
        e.preventDefault()
        console.log("test10");
        fetch('http://localhost:3001/connexion/'+email)
        .then(res=>res.json())
        .then((data)=>{
            if(data.user!==undefined)
            {
                if(data.password===password)
                {
                    setUser({
                        email: email,
                        description:data.description,
                        statistiques:data.statistiques,
                        travelIds:data.travelIds,
                        activityIds:data.activityIds
                    }) 
                    //loginUser(user);
                    if(props.onLogin){
                        props.onLogin()
                    }
                }
                else
                {
                    return alert("Mot de passe incorrect");
                }
                             
            }
            else
            {
                return alert("Utilisateur inexistant");
            }
        })
        .catch(console.log);


        
    }

    return(
        <CustomForm onSubmit={login}>
            <h1>Connexion</h1>
            <input type="text" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
            <Button>Se connecter</Button>
            <a href="/signup">Pas encore inscrit ? S'inscrire</a>
        </CustomForm>
    )
}

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;

    > input {
        margin-bottom: 1em;
        padding: 0.5em;
        font-size: 2em;
    }
`

export default SigninForm