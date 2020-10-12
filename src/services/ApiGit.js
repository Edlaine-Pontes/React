import axios from 'axios'

const configGit = {
    baseUrl: "http://api.github.com",
}

export default function api (){
    return axios.create(configGit)
}

