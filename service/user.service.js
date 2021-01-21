import User from '../model/user';

const registerService = async (username, password) => {
    const user = await User.create({
        username: username,
        password: password
    })
    // return {id: user.id, username: user.username};
    return {id: user.id, username: user.username};
}

const loginService = async (username, password) => {
    const user = await User.findOne({
        where: {
            username: username,
            password: password
        },
        attributes: ['id', 'username'],
        raw: true
    })
    return {...user};
}

export { registerService, loginService }