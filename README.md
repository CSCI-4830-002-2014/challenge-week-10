# Name

Niklas Fejes

# How many points have you earned?

100/100

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

Sunday

# What is the most difficult part about this week's challenge?

fill-in-your-answer

# Show and tell (6 points)

## Link (2 points)

[title-of-the-article](http://link-to-an-interesting-D3-visualization-example)

## Write down TWO D3 features you’d like to learn next . (4 points)

fill-in-your-answer

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](screenshots/mongo/checkpoint1.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

`> db.aiddata.find({donor:'Belgium'},{recipient:1, disbursement_amount:1})`

![screenshot](screenshots/mongo/challenge1.png?raw=true)

# 2. (5 points)

`> db.aiddata.find({biodiversity:{$gt:0}},{recipient:1,disbursement_amount:1,title:1})`

![screenshot](screenshots/mongo/challenge2.png?raw=true)

# 3. (5 points)

`> db.runCommand({distinct: 'aiddata', key: 'flow_type', query: {}})`

![screenshot](screenshots/mongo/challenge3.png?raw=true)

# 4. (5 points)

`> db.runCommand({distinct: 'aiddata', key: 'flow_type', query: {disbursement_amount:{$gt:100000000}}})`

![screenshot](screenshots/mongo/challenge4.png?raw=true)

In the query, `stats.n` is the number of elements used to generate the distinct values. When working with all
values this number was 1000859 (all values in the dataset) and with the disbursement limit it was 994, which is
the number of entries with `disbursement_amount` larger than 100'000'000.

# 5. (5 points)

`> db.aiddata.aggregate([ {$match: {donor:'Belgium'}}, {$group: {_id:"$year", total:{$sum: "$disbursement_amount"}}} ])`

![screenshot](screenshots/mongo/challenge5.png?raw=true)

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

![image](screenshots/d3/checkpoint1.png?raw=true)

[checkpoint](d3/checkpoint1.html)

# 2. (5 points)

![image](screenshots/d3/checkpoint2.png?raw=true)

[checkpoint](d3/checkpoint2.html)

# 3. (5 points)

![image](screenshots/d3/checkpoint3.png?raw=true)

[checkpoint](d3/checkpoint3.html)

# 4. (5 points)

![image](screenshots/d3/checkpoint4.png?raw=true)

[checkpoint](d3/checkpoint4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](screenshots/d3/challenge1.png?raw=true)

### 2. (5 points)

![screenshot](screenshots/d3/challenge2.png?raw=true)

### 3. (5 points)

![screenshot](screenshots/d3/challenge3.png?raw=true)

### 4. (10 points)

![screenshot](screenshots/d3/challenge4.png?raw=true)

