import * as axios from 'axios'

//Create an instance with repetitive settings
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : '5f442ec1-dbbd-4973-81eb-36716d33f899'}
})

export const isAuth = () => {
    return instance.get('auth/me')
    .then(response => response.data)
}

export const loadUsers = (currentPage, sizePage) => {
    return instance.get(`users?page=${currentPage}&count=${sizePage}`)
    .then(response => response.data)
}

export const getUserProfile = (uID) => {
    return instance.get(`profile/` + uID)
    .then(response => response)
}
export const followCreate = (userID) => {
    return instance.post(`follow/${userID}`)
    .then(response => response)
}

export const followDelete = (userID) => {
    return instance.delete(`follow/${userID}`)
    .then(response => response)
}

export const getProfileStatus = (userID) => {
    return instance.get(`profile/status/${userID}`)
    .then(response => response)
}

export const putProfileStatus = (status) => {
    return instance.put(`profile/status/`, {status})
    .then(response => response)
}

export const login = (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
    .then(response => response)
}

export const logOut = () => {
    return instance.delete('auth/login')
    .then(response => response)
}

export const putPhoto = (photoFile) => {
    const formData = new FormData();
    formData.append('image', photoFile)

    return instance.put('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}