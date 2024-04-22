class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }


    static getAll() {
        return users;
    }
}
const users = [
    new User(1, 's1'),
    new User(2, 's2'),
    new User(3, 's3'),
    new User(4, 's4'),
    new User(5, 's5')
];
module.exports = User;
