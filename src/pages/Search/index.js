import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import getUser from '../../servSearch/'
import './style.css'
import github from '../../assets/gith.png'
import logo from '../../assets/logo.png'

export default function Search () {
    const [user, setUser] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    async function pesquisar(e) {
        const btn = document.getElementById('btn-search')
        try {
            btn.className = 'button-blocked'
            btn.textContent = 'Buscando o usuário...'

            e.preventDefault();
            
            const userResult = await getUser(user);
            
            if (userResult){
                localStorage.setItem('profile', JSON.stringify(userResult));                
                history.push('/profile');
            } else {
                setErrorMessage("usuário não localizado")
            }
        } finally {
            btn.className = 'button'
            btn.textContent = 'Pesquisar'
        }
    }

    function changeValue(e) {
        setUser(e.target.value)
        setErrorMessage('');
    }

    return(
        <div className="search-container">
            <section className="form">
                <img className="logo" src={logo} alt="logo busca perfil"/>
                <form>
                    <h1>Informe o usuário</h1>
                    <input
                        value={user}
                        onChange={changeValue}
                    />
                    <button id="btn-search" className="button" type="submit" onClick={pesquisar}>Pesquisar</button>
                    <h2 className="mensagemErro">{errorMessage}</h2>
                </form>
            </section>
            <img className="image" src={github} alt="busca de perfil github"/>
        </div>
    )
}