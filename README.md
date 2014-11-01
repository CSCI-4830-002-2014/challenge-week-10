# Name

Justin McBride

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

Friday night

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

![image](image.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aidata.find({'donor':'Belgium','disbursement_amount':{$gt:0}},{'recipient':1,'disbursement_amount':1})

![screenshot](images/mongoch1.png?raw=true)

# 2. (5 points)

> db.aidata.find({'biodiversity':{$ne:''},'disbursement_amount':{$gt:0}},{'recipient':1,'disbursement_amount':1,'title':1})

![screenshot](images/mongoch2.png?raw=true)

# 3. (5 points)

> db.aidata.distinct('flow_type')

![screenshot](images/mongoch3.png?raw=true)

# 4. (5 points)

> db.aidata.distinct('flow_type',{'disbursement_amount':{$gt:100000000}})

The 'n' value shows the number of total entries returned from the queries. The first search just scans all entries, but the second one is limited by the disbursement_amount query, and the results pool is significantly smaller.

![screenshot](images/mongoch4.png?raw=true)

# 5. (5 points)

> db.aidata.aggregate([{$match:{'donor':'Belgium'}},{$group:{_id:'$year',total:{$sum:'$disbursement_amount'}}}])

![screenshot](images/mongoch5.png?raw=true)

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

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](screenshot.png?raw=true)

### 2. (5 points)

![screenshot](screenshot.png?raw=true)

### 3. (5 points)

![screenshot](screenshot.png?raw=true)

### 4. (10 points)

![screenshot](screenshot.png?raw=true)

