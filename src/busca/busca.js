import axios from 'axios'

const http = axios.create()

const getUser = async function(user){
    const url = `http://api.github.com/users/${user}`
    
    try{
        const resp = await http.get(url)
        const repos = await http.get(resp.data.repos_url)
        
       
        const reposDetails = []

        repos.data.forEach(repo=>{
            reposDetails.push({
                name: repo.name,
                date: repo.created_at,
                description: repo.description,
                commits: repo.commits_url
            })
        });
        
        const profile = {
            name: resp.data.login,
            image: resp.data.avatar_url,
            followers: resp.data.followers,
            public_repos: resp.data.public_repos,
            creat: resp.data.created_at,
            update: resp.data.updated_at,
            repos: reposDetails
        }
        

        return profile
    } catch(err){
        return null
    }

}


const getCommit = async function(){

}

export default getUser