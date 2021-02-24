const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { request, response } = require('express');

require('dotenv').config();

module.exports.getSingleUserById=(request, response) => {
    User.findOne({_id:jwt.decode(request.cookies.usertoken).id})
        .then(user => response.json(user))
        .catch(err => response.status(404).json({errors:{notFound:{message:"We're sorry, but we could not find the User you are looking for. Would you like to add this User to our database?"}}}));
}

module.exports.register =  (req, res) => {
    User.create(req.body)
      .then(user => {
        const userToken = jwt.sign({
              id: user._id
          }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });

      })
      .catch(err => res.status(400).json(err));
  }
    module.exports.login= async(req, res) => {
            let errors={};
            const user = await User.findOne({ email: req.body.email })
            .then(async user=>{
                if(!req.body.email)
                    errors= {...errors,
                        email:{
                            kind: "required",
                            message: "Email is required",
                            name: "ValidatorError",
                            path: "email",
                            properties:{
                                message: "Email is required",
                                path: "email",
                                type: "required",
                                value: req.body.email   
                            },
                            value: req.body.email
                        }
                };
                if(!req.body.password)
                    errors= {...errors,
                        password:{
                            kind: "required",
                            message: "Password is required",
                            name: "ValidatorError",
                            path: "password",
                            properties:{
                                message: "Password is required",
                                path: "password",
                                type: "required",
                                value: ''   
                            },
                            value: ''
                        }
                };
                if (Object.keys(errors).length>0)
                    throw errors;
                if(user === null) 
                    throw {...errors,
                        email:{
                            kind: "invalid",
                            message: "Email isnt valid",
                            name: "ValidatorError",
                            path: "email",
                            properties:{
                                message: "Email isnt valid",
                                path: "email",
                                type: "invalid",
                                value: req.body.email   
                            },
                            value: req.body.email
                        }
                    };
            const correctPassword = await bcrypt.compare(req.body.password, user.password);
                    if(!correctPassword) 
                        throw  {...errors,
                            password:{
                                kind: "invalid",
                                message: "Password isnt valid",
                                name: "ValidatorError",
                                path: "password",
                                properties:{
                                    message: "Password isnt valid",
                                    path: "password",
                                    type: "invalid",
                                    value: ''   
                                },
                                value: ''
                            }    
                        }
                            // if we made it this far, the password was correct
                    const userToken = jwt.sign({
                        id: user._id
                    }, process.env.SECRET_KEY);
                    
                    // note that the response object allows chained calls to cookie and json
                    res.cookie("usertoken", userToken,  {
                            httpOnly: true
                        })
                        .json({ msg: "success!" ,user:user});
                
            })
            .catch(err=>{
                console.log(err)
                return res.status(400).json({errors:err});
            });
         
         
         
        }
    module.exports.logout= (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
