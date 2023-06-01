const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {

    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        });

    } catch (error) {
        res.status(500).json({
            message: 'SERVER ERROR',
            serverMessage: error,
        });
    }
    
};

const createNewUser = (req, res) => {
    res.json({
        message: 'CREATE new users success',
        data: req.body
    });
};

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    console.log(req.params);
    res.json({
        message: 'UPDATE user success',
        data: req.body,
    });
};

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name: "Reonaldi",
            email: "reonaldi@gmail.com",
            address: "Tangerang",
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}