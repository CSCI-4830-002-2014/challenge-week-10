# Name

Jake White

# How many points have you earned?

0/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

fill-in-your-answer

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

![image](http://i.imgur.com/3VKIkCQ.png)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aid.find({'donor': 'Belgium'}, {'recipient':1, 'disbursement_amount':1})

![screenshot](http://i.imgur.com/2Tp69WO.png)

# 2. (5 points)

> db.aid.find({'short_description': 'BIODIVERSITY'}, {'recipient':1, 'disbursement_amount':1, 'title':1})

![screenshot](http://i.imgur.com/jjL7XpF.png)

# 3. (5 points)

> db.aid.distinct('flow_type')

![screenshot](http://i.imgur.com/M7d60gV.png)

# 4. (5 points)

> db.aid.distinct('flow_type', {'disbursement_amount':{$gt: 100000000}})

![screenshot](http://i.imgur.com/0MyJ1a8.png)

# 5. (5 points)

> db.aid.aggregate([ {$match: {'donor':'Belgium'}}, {$group: {_id:'$year', total:{$sum: '$disbursement_amount'}}}])

![screenshot](http://i.imgur.com/W7aw8Ni.png)

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

![image](http://i.imgur.com/XRWSZMC.png)

[checkpoint](d3/check1.html)

# 2. (5 points)

![image](http://i.imgur.com/T13W0eO.png)

[checkpoint](d3/check2.html)

# 3. (5 points)

![image](http://i.imgur.com/GXlNpay.png)

[checkpoint](d3/check3.html)

# 4. (5 points)

![image](http://i.imgur.com/h5XXKfk.png)

[checkpoint](d3/check4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](screenshot.png?raw=true)

### 2. (5 points)

![screenshot](screenshot.png?raw=true)

### 3. (5 points)

![screenshot](screenshot.png?raw=true)

### 4. (10 points)

![screenshot](screenshot.png?raw=true)

