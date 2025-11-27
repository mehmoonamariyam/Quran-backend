const mongoose = require('mongoose')
const authSchema = mongoose.Schema({

        username: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
       
        status:{
            type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: "active"

            },
            token:{
                type: String,
            }
        
},
{timestamps: true}
);

const User = mongoose.model('users', authSchema)

module.exports = {User};