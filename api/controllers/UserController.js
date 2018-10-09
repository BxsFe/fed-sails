/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  login: (req, res) => {
  	res.json({
      code: 20000,
      data: { token: 'admin' },
      token: 'admin'
    })
  },

  info: (req, res) => {
  	const rst = { 
  		"code":20000,
  		"data": {
  			"roles":["admin"],
  			"name":"admin",
  			"avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
  		}	
  	}
  	res.json(rst)
  },

};

