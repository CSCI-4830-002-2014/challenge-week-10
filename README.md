# Name

Joshua Ferge

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

~5

# When did you first start working on this week's learning challenges?

Wednesday

# What is the most difficult part about this week's challenge?

i found it all to be reasonable and not too difficult. mongo stuff was fun :)

# Show and tell (6 points)

## Link (2 points)

[25 Great Circles](http://tributary.io/inlet/5262684)

## Write down TWO D3 features you’d like to learn next . (4 points)

Path Making and Using real images to represent things. i.e. geo-based maps.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](mck1.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({donor:"Belgium"},{_id:1,recipient:1,disbursement_amount:1})

![screenshot](mch1.png?raw=true)

# 2. (5 points)

> db.aiddata.find({crs_purpose_name:'Bio-diversity'},{recipient:1,disbursement_amount:1,title:1})

![screenshot](mch2.png?raw=true)

# 3. (5 points)

> db.runCommand({ distinct: "aiddata", key: "flow_type" })

![screenshot](mch3.png?raw=true)

# 4. (5 points)

> db.runCommand({ distinct: "aiddata", key: "flow_type", query: {disbursement_amount:{$gt:100000000} }})

![screenshot](mch4.png?raw=true)

n is the total number of objects which the field searched through. In the first query it counted from the whole dataset while in the second it only counted the ones which had over a 100,000,000 disbursement amount.

# 5. (5 points)

> db.aiddata.aggregate([ { $match: { donor: "Belgium" }}, { $group: {_id: "$year",total: { $sum: "$disbursement_amount"}}} ])

![screenshot](mch5.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](mlch1a.png?raw=true)

### b. (3 points)

![screenshot](mlch1b.png?raw=true)

### c. (3 points) 

![screenshot](mlch1c.png?raw=true)

### d. (3 points) 

![screenshot](mlch1d.png?raw=true)

## Challenge 2 (8 points)

We can see that the average light of the users varied greatly. We can attribute this to doing the experiment on different times of the day as well as the specific lighting of each room the student would have done the experiment in. 
![image](d3learn1.png?raw=true)

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](d3check1.png?raw=true)

[checkpoint](d3check1.html)

# 2. (5 points)

![image](d3check2.png?raw=true)

[checkpoint](d3check2.html)

# 3. (5 points)

![image](d3check3.png?raw=true)

[checkpoint](d3check3.html)

# 4. (5 points)

![image](d3check4.png?raw=true)

[checkpoint](d3check4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](d3chal1.png?raw=true)

### 2. (5 points)

![screenshot](d3chal2.png?raw=true)

### 3. (5 points)

![screenshot](d3chal3.png?raw=true)

### 4. (10 points)

![screenshot](d3chal4.png?raw=true)

