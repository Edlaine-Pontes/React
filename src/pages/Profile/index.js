import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi';
import './styles.css'
import logo from '../../assets/logo.png'

export default function Profile(){
    const profile = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    console.log(profile);

    const image = profile.image;

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    return(
        <div className="profile-container">

            <header>
            <img class="logo" src={logo}/>
            <button onClick={handleLogout} type="button">
                    <FiArrowLeft size={30} color="#0000ff" />
            </button>
            </header>
            <div className="content">
                <img src={image}/>
                <h2>{profile.name}</h2>
                <h3>Seguidores: {profile.followers}</h3>
                <h3>Total de Respositorios Publicos: {profile.public_repos} </h3>
                <h3>Criado em: {profile.creat}</h3>
                <h3>Atualizado em:  {profile.update} </h3>
            </div>    

            

             <ul>
                {profile.repos.map(repo=>(
                <li key={repo.name}>
                <p>{repo.name}</p>
                <p>Descrição: {repo.description}</p>
                <p>Commits: {repo.commits} </p> 
                <p>Data: {repo.date}</p>   
                </li>
                ))}
            </ul> 
            

        </div>
    )
}