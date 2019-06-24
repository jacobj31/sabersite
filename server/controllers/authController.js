const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
        //check if email in db
        //create salt
        //hash password and salt
        //store name, email, hash into table

        const db = req.app.get('db')
        const {first_name, last_name, email, password} = req.body
        let users = await db.find_by_email(email)
        let user = users[0]
        if (user) {
            return res.status(409).send('email already taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let response = await db.create_user({first_name, last_name, email, hash})
        let newUser = response[0]

        delete newUser.password

        req.session.user = newUser
        //logs you in right after you register... better that way
        res.send(req.session.user)
    },

    login: async (req, res) => {
        //user input: email, password
        //get user from database by email
        //no user send 401 status 
        // compare password with hash using bcrypt
        //if they don't match, send 401 status
        //if match, add user to session

        try{
            
        const db = req.app.get('db')
        const {email, password} = req.body
        let users = await db.find_by_email(email)
        let user = users[0]

        if(!user){
            return res.status(401).send('email or password incorrect') 
            //email or password in case of hacker. don't want them to know
        }

        let isAuthenticated = bcrypt.compareSync(password, user.hash)
        
        if (!isAuthenticated) {
            return res.status(401).send('email or password incorrect')
        }

        delete user.password
        req.session.user = user
        res.send(req.session.user)

        }   
        catch(error){
        console.log('there was an error', error)
        }


    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    currentUser: (req,res) => {
        res.send(req.session.user)
    }
}