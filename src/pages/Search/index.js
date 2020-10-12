import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import busca from '../../busca/busca'
import './style.css'
import github from '../../assets/gith.png'
import logo from '../../assets/logo.png'

export default function Search () {

    const [user, setUser] = useState('amaralmarti');
    const [profile, setProfile] = useState('abc');
    const history = useHistory();

    async function pesquisar(e) {
        e.preventDefault();
        
        const userResult = await busca(user);
        
        if (userResult){
            localStorage.setItem('profile', JSON.stringify(userResult));
            history.push('/profile');
        } else {
            alert('falha')
        }
    }

    return(
        <div className="search-container">
            <section className="form">
                <img className="logo" src={logo} alt="logo busca perfil"/>
                <form>
                    <h1>Informe o usuario</h1>
                    <input
                        value={user}
                        onChange={e=>setUser(e.target.value)}
                    />
                    <button className="button" type="submit" onClick={pesquisar}>Pesquisar</button>
                </form>
            </section>
            <img className="image" src={github} alt="busca de perfil github"/>
        </div>
    )
}