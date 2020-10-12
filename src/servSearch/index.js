import axios from 'axios'

const http = axios.create()

function formatDate(inputDate) {
    const newDate = inputDate.split('T')[0] 
    const newDate1 = newDate.split('-')
    
    return `${newDate1[2]}/${newDate1[1]}/${newDate1[0]}`
}


export default async function(user){
    const url = `https://api.github.com/users/${user}`    
    
    try{
        const resp = await http.get(url)
        const repos = await http.get(resp.data.repos_url)
       
        const reposDetails = []

        repos.data.forEach(repo=>{
            reposDetails.push({
                name: repo.name,
                date: formatDate(repo.created_at),
                update_at: formatDate(repo.updated_at),
                description: repo.description,
                link: repo.html_url,
                forks: repo.forks,
                star: repo.stargazers_count
                
            })
        });
        
        const profile = {
            name: resp.data.login,
            image: resp.data.avatar_url,
            followers: resp.data.followers,
            following: resp.data.following,
            public_repos: resp.data.public_repos,
            creat: formatDate(resp.data.created_at),
            update: formatDate(resp.data.updated_at),
            repos: reposDetails,
        }

        return profile
    } catch(err){
        return null
    }
}
