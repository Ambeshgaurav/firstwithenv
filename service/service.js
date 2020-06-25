const connect = require('../config/configmongo')




function SaveUserDetails(data) {
    return new Promise((resolve, reject) => {
        connect.dbo.collection('user4').insert(data, (err, res) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                console.log("this ------->", res);
                resolve(res.insertedCount);
            }
        })
    });
}
function findData(data) {
    return new Promise((resolve, reject) => {
        connect.dbo.collection('user4').find({ email: data.email }).toArray((err, res) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(res);
            }
        });
    })
}
function updateData(data) {
    return new Promise((resolve, reject) => {
        connect.dbo.collection('user4').update({ email: data.email },  data , (err, res) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            else {
                console.log("=======================", res.modifiedCount);
                resolve(res.modifiedCount);

            }
        });
    });

}
function deleteData(data) {
    return new Promise((resolve, reject) => {
        connect.dbo.collection('user4').update({email: data.email,
        },{ $pull: { name: data.name,age:data.age}  },
            (err, res) => {
            if (err) {
                reject(err)
            }
            else { 
                resolve(res);
            }
        });
    })
}

module.exports = {
    SaveUserDetails: SaveUserDetails,
    findData: findData,
    updateData:updateData,
    deleteData:deleteData
}
