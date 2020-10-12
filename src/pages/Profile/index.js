import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiArrowDown } from 'react-icons/fi';
import './styles.css'
import logo from '../../assets/logo.png'

export default function Profile(){
    const profile = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    const image = profile.image;

    function handleBack(){
        localStorage.clear();
        history.push('/')
    }

    function activeRepo(e) {
        e.preventDefault();
        let activated = e.target.name
        if (isActivated == activated) {
            activated = ''
        }
        setIsActivated(activated)
    }
    
    const [isActivated, setIsActivated] = useState(true)

    return(
        <div className="profile-container">

            <header>
                <img className="logo" src={logo}/>
                <button onClick={handleBack} type="button">
                    <FiArrowLeft size={30} color="#0000ff" />
                </button>
            </header>

            <div className="content">
                <div className="col-1">
                    <img className="image" src={image}/>
                    <h2>{profile.name}</h2>
                </div>
                <div className="col-2">
                    <h3>Seguidores:</h3>
                    <h3>Seguindo:</h3>
                    <h3>Repositórios públicos:</h3>
                    <h3>Criado em:</h3>
                    <h3>Atualizado em:</h3>
                </div>
                <div className="col-3">
                    <h3>{profile.followers}</h3>
                    <h3>{profile.following}  </h3>
                    <h3>{profile.public_repos} </h3>
                    <h3>{profile.creat}</h3>
                    <h3>{profile.update} </h3>                    
                </div>
            </div>  

            <div className="repos">
                <ul>
                    {profile.repos.map(repo=>(
                    <li key={repo.name}>                    
                        <h3 data-url={repo.commits}>{repo.name}</h3>
                        <button name={repo.name} onClick={activeRepo}>R</button>
                        { isActivated == repo.name && (
                            <div className="repo-details">
                                <div className="col-2">                                    
                                    <p><strong>Repositório:</strong></p>
                                    <p><strong>Data:</strong></p>
                                    <p><strong>Forks:</strong></p>
                                    <p><strong>Stars:</strong></p>
                                    <p><strong>Ultima atualização:</strong></p>
                                    <p><strong>Descrição:</strong></p>
                                </div>
                                
                                <div className="col-3">                                    
                                    <p><a href={repo.link} target="_blank">{repo.link}</a></p>
                                    <p>{repo.date || '-'}</p>
                                    <p>{repo.forks || '-'}</p>
                                    <p>{repo.star || '-'}</p>
                                    <p>{repo.update_at || '-'}</p>
                                    <p>{repo.description || '-'}</p>
                                </div>
                            </div>
                        )}
                    </li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}