# Name

Adrian Chen

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

6

# When did you first start working on this week's learning challenges?

Saturday

# What is the most difficult part about this week's challenge?

Figuring out D3.

# Show and tell (6 points)

## Link (2 points)

[Hierarchical Edge Bundling](http://bl.ocks.org/mbostock/1044242)

## Write down TWO D3 features you’d like to learn next . (4 points)

Circular graphing, Geographical graphing

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](mongoDB/img/CP1.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({"donor": "Belgium"},{"recipient": 1, "disbursement_amount":1})

![screenshot](mongoDB/img/CH1.png?raw=true)

# 2. (5 points)

> db.aiddata.find({"biodiversity":{$gt:0}},{"recipient" : 1, "disbursement_amout" : 1, "title" : 1})

![screenshot](mongoDB/img/CH2.png?raw=true)

# 3. (5 points)

> db.runCommand({ distinct: "aiddata", key : "flow_type"})

![screenshot](mongoDB/img/CH3.png?raw=true)

# 4. (5 points)

> db.runCommand({ distinct: "aiddata", key : "flow_type", query : { "disbursement_amount" : {$gt : 100000000}}})

![screenshot](mongoDB/img/CH4.png?raw=true)

# 5. (5 points)

> db.aiddata.aggregate([{$match: {donor : "Belgium"}}. {$group : { _id : "$year", total: {$sum : "$disbursement_amount"}}}])

![screenshot](mongoDB/img/CH5.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](Tableau/img/CH1a.png?raw=true)

### b. (3 points)

![screenshot](Tableau/img/CH1b.png?raw=true)

### c. (3 points) 

![screenshot](Tableau/img/CH1c.png?raw=true)

### d. (3 points) 

![screenshot](Tableau/img/CH1d.png?raw=true)

## Challenge 2 (8 points)

![screenshot](Tableau/img/CH2a.png?raw=true)

![screenshot](Tableau/img/CH2b.png?raw=true)

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](d3/img/CP1.png?raw=true)

[checkpoint](d3/src/checkpoint1.html)

# 2. (5 points)

![image](d3/img/CP2.png?raw=true)

[checkpoint](d3/src/checkpoint2.html)

# 3. (5 points)

![image](d3/img/CP3.png?raw=true)

[checkpoint](d3/src/checkpoint3.html)

# 4. (5 points)

![image](d3/img/CP4.png?raw=true)

[checkpoint](d3/src/checkpoint4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](d3/img/CH1.png?raw=true)

### 2. (5 points)

![screenshot](d3/img/CH2.png?raw=true)

### 3. (5 points)

![screenshot](d3/img/CH3.png?raw=true)

### 4. (10 points)

![screenshot](d3/img/CH4.png?raw=true)

