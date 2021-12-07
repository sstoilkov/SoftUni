const host = 'http://localhost:3030';

//CRUD Request
async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
        if (response.ok != true) {
            if (response.status == 403) {
                sessionStorage.removeItem('userData');
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'applciation/json';
        options.body = JSON.stringify(data);
    }
    const userDate = JSON.parse(sessionStorage.getItem('userData'));

    if (userDate != null) {
        options.headers['X-Authorization'] = userDate.token;
    }
    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}
//----------END of CRUD


//code for login
export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

//code for register same like login only change adress of result(/users/register)
export async function register(email, password) {
    const result = await post('/users/register', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

//code for logout
export async function logout() {
    await get('/users/logout');
    sessionStorage.removeItem('userData');
}
