const request = async (url, { method = "GET", body = null, signal } = {}) => {
    const options = {
        method,
        signal,
        headers: [],
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    const response = await fetch(url, options)

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    if(response.status == 204) return null

    return await response.json()

}

export default request;