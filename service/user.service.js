import User from '../model/user';

const registerService = (username, password) => {
    const user = User.create({
        username: username,
        password: password
    })
    return user;
}

const loginService = (username, password) => {
    const user = User.findOne({
        where: {
            username: username,
            password: password
        }
    })
    return user;
}

export { registerService, loginService }