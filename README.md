# Name

Chris Wittenberg

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

7

# When did you first start working on this week's learning challenges?

Tuesday

# What is the most difficult part about this week's challenge?

Getting my data into MongoDB and getting the query to work for D3 Challenge 4.

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

![screenshot](TChallenge1.png?raw=true)

### b. (3 points)

![screenshot](TChallenge2.png?raw=true)

### c. (3 points) 

![screenshot](TChallenge3.png?raw=true)

### d. (3 points) 

![screenshot](TChallenge4.png?raw=true)

## Challenge 2 (8 points)

The data from challenge 1a seems to suggest that the number of pitch by degrees is skewed to the left; that is, the higher the pitch, the more number of touch events at that pitch there are. 

![screenshot](T21Challenge.png?raw=true)

According to this graph, it seems that the average pitch increses as the rotation vector x increases. average pitch also seems higher as the rotation vector y increases. Also, the vector y seems to very negative, and the distribution of these x-y rotation vectors is in the shape of the bell curve.  

![screenshot](T22Challenge.png?raw=true)

According to this scatterplot, it seems that the roll degree is centered mostly on -1.55 degrees. It seems that, around this centerpoint, the average pitch is the lowest. The average pitch is higher when you move away from the center (especially on the lower end). The interesting exception is at the 1000K to 1100K mark; the average pitch is quite high here arund the average roll degree of -1.55 degrees. 

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

It may not look impressive, but I wanted to see how many businesses are "Good For Dancing". This is the only one in the entire Yelp Dataset:

![screenshot](Proof.png?raw=true)

