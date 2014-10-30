db.aiddata.find({'donor' : 'Belgium' , 'disbursement_amount': {$ne: ''}},{"disbursement_amount":-1, "recipient":-1})

db.aiddata.find({'biodiversity' : {$in : [1,2] }},{"disbursement_amount":-1, "recipient":-1, "title":-1})

db.runCommand({distinct: 'aiddata', key: 'flow_type'})

db.runCommand({distinct: 'aiddata', 
				key: 'flow_type',
				query: {"disbursement_amount" : {$gt : 100000000}, "commitment_amount_currency" : "USD" }
			})

db.aiddata.aggregate( [ {$match: { 'donor' : 'Belgium'} },{$group: {_id : "$year",total: { $sum : "$disbursement_amount" } } } ] )


