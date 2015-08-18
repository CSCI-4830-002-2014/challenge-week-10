# Name

Jose Vieitez
# How many points have you earned?

75/100

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

![image](http://i.imgur.com/Ngf3xSF.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata21research.find({donor : "Belgium"},{'recipient':1, 'disbursement_amount': {$gt:0}})

![screenshot](http://i.imgur.com/7X1TbiI.png?raw=true)

# 2. (5 points)

> db.aiddata21research.find({'biodiversity':{$ne:""}},{'recipient':1,'title':1})

![screenshot](http://i.imgur.com/4xlQZ9b.png?raw=true)

# 3. (5 points)

> db.runCommand({distinct: "aiddata21research", key: "flow_type" })

![screenshot](http://i.imgur.com/94xzBM6.png?raw=true)

# 4. (5 points)

> db.runCommand({distinct: "aiddata21research", key: "flow_type", query: {'disbursement_amount':{$gt:100000000}} })


![screenshot](http://i.imgur.com/iFzFa1z.png?raw=true)

# 5. (5 points)

> db.[complete this query]

![screenshot](screenshot.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](http://i.imgur.com/37ddqQy.png?raw=true)

### b. (3 points)

![screenshot](http://i.imgur.com/BYSgZPT.png?raw=true)

### c. (3 points) 

![screenshot](http://i.imgur.com/2q0Ek1R.png?raw=true)

### d. (3 points) 

![screenshot](http://i.imgur.com/EABs3EU.png?raw=true)

## Challenge 2 (8 points)

{Looking through the data, I compared the count of the touch labels for each 
student ID, with how long it had been since the start. I found a pretty 
simple observation, that the number of touch events was almost directly
proportional to the lenght of time since start. Those that had low touch counts
also had very low time counts. }
![screenshot](http://i.imgur.com/M4dIQBM.png?raw=true)


# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](http://i.imgur.com/JXPrpym.png?raw=true)

[checkpoint](checkpoint3_1.html)

# 2. (5 points)

![image](http://i.imgur.com/4esyqV7.png?raw=true)

[checkpoint](checkpoint3_2.html)

# 3. (5 points)

![image](http://i.imgur.com/iuqRx9E.png?raw=true)

[checkpoint](checkpoint3_3.html)

# 4. (5 points)

![image](http://i.imgur.com/oAdxHwe.png?raw=true)

[checkpoint](checkpoint3_4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](http://i.imgur.com/qDr8u7m.png?raw=true)

### 2. (5 points)

![screenshot](screenshot.png?raw=true)

### 3. (5 points)

![screenshot](screenshot.png?raw=true)

### 4. (10 points)

![screenshot](screenshot.png?raw=true)

