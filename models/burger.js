var orm = require("../config/orm.js");

var burgers = {
	selectAll : function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(Objcolsvals, condition, cb) {
		orm.updateOne("burgers",Objcolsvals,condition,function(res) {
			cb(res);
		})
	}

}

// Export the database functions for the controller (burger_controller.js).
module.exports = burgers;