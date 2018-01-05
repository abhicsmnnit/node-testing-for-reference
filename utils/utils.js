module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullName) => {
    const name = fullName.split(' ');
    user.firstname = name[0];
    user.lastname = name[1];
    return user;
};