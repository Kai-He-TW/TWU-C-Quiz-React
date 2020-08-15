async function post(url, body) {
    const optional = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body),
    }

    return await fetch(`http://localhost:8080${url}`, optional)
}

async function get(url) {
    const response = await fetch(`http://localhost:8080${url}`)

    if (!response.ok) {
        throw new Error()
    }

    return await response.json()
}

export {
    post, get
}
