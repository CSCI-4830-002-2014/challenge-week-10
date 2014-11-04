# Name

Austin Wood

# How many points have you earned?

100/100

# How many hours have you spent on this?

4 hours.

# When did you first start working on this week's learning challenges?

Sunday, Nov. 2, 2014, 11:20am

# What is the most difficult part about this week's challenge?

The queries for mongo were still a bit rough, but not as hard. This week's challenge wasn't as intense
(thankfully) as some of the others.

# Show and tell (6 points)

## Link (2 points)

[Geodesic Rainbow](http://bl.ocks.org/mbostock/3057239)

## Write down TWO D3 features you’d like to learn next . (4 points)

The code here uses d3.geo.orthographic() which sounds awesome. Let's definitely learn that!
I am also interested in implementing the rotate() method to a visualization. I think including
some sort of hands-on interactivity always makes the project more engaging and fun.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![checkpoint 1](img/mongo_cp1.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({'donor' : 'Belgium' , 'disbursement_amount': {$ne: ''}},{"disbursement_amount":-1, "recipient":-1}) 

![challenge 1](img/mongo_ch1.png?raw=true)

# 2. (5 points)

> db.aiddata.find({'biodiversity' : {$in : [1,2] }},{"disbursement_amount":-1, "recipient":-1, "title":-1})

![challenge 2](img/mongo_ch2.png?raw=true)

# 3. (5 points)

> db.runCommand({distinct: 'aiddata', key: 'flow_type'}) 

![challenge 3](img/mongo_ch3.png?raw=true)

# 4. (5 points)

> db.runCommand({distinct: 'aiddata', key: 'flow_type',query: {"disbursement_amount" : {$gt : 100000000}, "commitment_amount_currency" : "USD" }}) 

![challenge 4](img/mongo_ch4.png?raw=true)

# 5. (5 points)

> db.aiddata.aggregate([{$match: {donor : "Belgium"}}. {$group : { _id : "$year", total: {$sum : "$disbursement_amount"}}}])

![challenge 5](img/mongo_ch5.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![challenge 1a](img/machine_ch1a.png?raw=true)

### b. (3 points)

![challenge 1b](img/machine_ch1b.png?raw=true)

### c. (3 points) 

![challenge 1c](img/machine_ch1c.png?raw=true)

### d. (3 points) 

![challenge 1d](img/machine_ch1d.png?raw=true)

## Challenge 2 (8 points)

I tried to find something a bit strange, and noticed that one of the data 
sources was an azimuth measurement and I thought, "what the hell is that?"
so I looked it up, and its a bit complicated. Basically it's just the
angle between a vector pointing straight north and the perpendicular plane
of an object of interest (in this case, the phone). It's cool to see that
not many of the students changed positions, on average; most people were
facing fairly close to true north for most of the meeting.

![challenge 2](img/machine_ch2.png?raw=true)

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

# 2. (5 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

# 3. (5 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

# 4. (5 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

## Challenges	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](screenshot.png?raw=true)

### 2. (5 points)

![screenshot](screenshot.png?raw=true)

### 3. (5 points)

![screenshot](screenshot.png?raw=true)

### 4. (10 points)

![screenshot](screenshot.png?raw=true)

