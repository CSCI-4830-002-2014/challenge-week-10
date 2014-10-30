# Name

Chris Wittenberg

# How many points have you earned?

70/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

Tuesday

# What is the most difficult part about this week's challenge?

Getting my data into MongoDB.

# Show and tell (6 points)

## Link (2 points)

[Inequality and the Human Development Index](http://www.visualizing.org/full-screen/401461)

## Write down TWO D3 features you’d like to learn next . (4 points)

I would like to learn more about:

1) How to create a visualization that follows real-time data (if at all possible).

2) How to get D3 and SQL to play together. 

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](MCheckpoint.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({"donor": "Belgium", "disbursement_amount": {$gt 0}}, {"recipient": 1, "disbursement_amount": 1});

![screenshot](MChallenge1.png?raw=true)

# 2. (5 points)

> db.aiddata.find({"biodiversity": 0}, {"recipient": 1, "disbursement_amount": 1, "title": 1});

![screenshot](MChallenge2.png?raw=true)

# 3. (5 points)

> db.runCommand(distinct: "aiddata", key: "flow_type");

![screenshot](MChallenge3.png?raw=true)

# 4. (5 points)

> db.runCommand({distinct: "aiddata", key: "flow_type", query: {"disbursement_amount": {$gt: 100000000} } });

"n" is the number of records that have one of these types. "n" is much smaller for the query in challnege 4 than in challenge 3 because not many of the records have disbursement amounts over $100,000,000.00 .

![screenshot](MChallenge4.png?raw=true)

# 5. (5 points)

> db.aiddata.aggregate([{$match: {"donor": "Belgium"}}, {$group: { _id: "$year", total: {$sum: "$disbursement_amount"}}}]);


![screenshot](MChallenge5.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](screenshot.png?raw=true)

### b. (3 points)

![screenshot](screenshot.png?raw=true)

### c. (3 points) 

![screenshot](screenshot.png?raw=true)

### d. (3 points) 

![screenshot](screenshot.png?raw=true)

## Challenge 2 (8 points)

{text-and-images}

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](D3Checkpoint1.png?raw=true)

[checkpoint](D3checkpoint5.1.html)

# 2. (5 points)

![image](D3Checkpoint2.png?raw=true)

[checkpoint](D3checkpoint5.html)

# 3. (5 points)

![image](D3Checkpoint3.png?raw=true)

[checkpoint](D3checkpoint6.1.html)

# 4. (5 points)

![image](D3Checkpoint4.png?raw=true)

[checkpoint](D3checkpoint6.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](D3Challenge1.png?raw=true)

### 2. (5 points)

![screenshot](D3Challenge2.png?raw=true)

### 3. (5 points)

![screenshot](D3Challenge3.png?raw=true)

### 4. (10 points)

![screenshot](D3Challenge4.png?raw=true)

