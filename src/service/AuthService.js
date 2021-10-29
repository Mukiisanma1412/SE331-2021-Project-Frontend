import apiClient from '@/service/AxiosClient.js'

export default {
    login(user) {
        return apiClient.post('/auth', {
            username: user.username,
            password: user.password
        }).then((response) => {
            localStorage.setItem('token', response.data.token)
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error)
        })

    },
    hasRoles(roles) {
        if (GStore.currentUser && roles) {
            let containRoles = GStore.currentUser.authorities.filter((authority) => roles.includes(authority))
            if (containRoles.length > 0) {
                return true
            } else {
                return false
            }

        } else {
            return false
        }
    }
}
