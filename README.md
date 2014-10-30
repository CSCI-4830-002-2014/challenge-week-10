# Name

Joshua Ferge

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

Wednesday

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

