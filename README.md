Challenge Week 10
# Name

Nikita Voskoboynik

# How many points have you earned?

60/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

8 hours

# When did you first start working on this week's learning challenges?

Friday

# What is the most difficult part about this week's challenge?

D3

# Show and tell (6 points)

## Link (2 points)

[Choropleth](http://bl.ocks.org/mbostock/4060606)

## Write down TWO D3 features you’d like to learn next . (4 points)

How to create maps using D3 and how to use color gradients.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

[Imgur](http://i.imgur.com/uALOm2t.jpg)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({donor: “Belgium”, disbursement_amount:{$ne:’’}}, {id:1, recipient:1, disbursement_amount:1})

[Imgur](http://i.imgur.com/tKQxkVJ.jpg)

# 2. (5 points)

> db.aiddata.find({biodiversity:{$ne:''}}, {id:1, recipient:1, disbursement_amount:1, title:1})

[Imgur](http://i.imgur.com/9SwhAF5.jpg)

# 3. (5 points)

> db.runCommand({distinct: “aiddata”, key: “flow_type”})

[Imgur](http://i.imgur.com/jRRPhmD.jpg)

# 4. (5 points)

> db.runCommand({distinct: "aiddata", key:"flow_type", query:{disbursement_amount:{$gt:100000}}})

[Imgur](http://i.imgur.com/XkdYwe2.jpg)

# 5. (5 points)

> db.aiddata.aggregate([{$match:{donor: "Belgium"}}, {$group:{_id:"$year",total:{$sum:"$disbursement_amount"}}}])

[Imgur](http://i.imgur.com/fi2k72y.jpg)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

[Imgur](http://i.imgur.com/MXhM4df.png)

### b. (3 points)

[Imgur](http://i.imgur.com/LQAiUPS.png)

### c. (3 points) 

[Imgur](http://i.imgur.com/wh9XkMh.png)

### d. (3 points) 

[Imgur](http://i.imgur.com/hymsdk8.png)

## Challenge 2 (8 points)

This analysis was to answer the question: Is there any correlation with the number of touch events a student has in their session and how long it took them to complete the session? Using a bar chart and color marks, we could see that there is evidence of students who had more touch events took longer to finish the session.

[Imgur](http://i.imgur.com/qK86AST.png)

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

