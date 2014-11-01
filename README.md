# Name

Justin McBride

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

2.5

# When did you first start working on this week's learning challenges?

Friday night

# What is the most difficult part about this week's challenge?

None

# Show and tell (6 points)

## Link (2 points)

[Walmart locations all hexed up](http://indiemaps.github.io/hexbin-js/tests/walmart.html)

The visualization shows an overview + focus view of all Walmarts in the USA. Hexes can be moused over for a focus view.

## Write down TWO D3 features you’d like to learn next . (4 points)

Collision detection and zooming.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](images/mongocp1.png?raw=true)

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

![screenshot](images/mlch1a.png?raw=true)

### b. (3 points)

![screenshot](images/mlch1b.png?raw=true)

### c. (3 points) 

![screenshot](images/mlch1c.png?raw=true)

### d. (3 points) 

![screenshot](images/mlch1d.png?raw=true)

## Challenge 2 (8 points)

![screenshot](images/mlch2.png?raw=true)

This visualization shows the ways that users hold their phones over the course of them using the app. On the horizontal axis is the amount of time that has passed, and the dots up the vertical axis indicate the average roll of the device. Most people hold hand-held screens parallel to their eyes, because it's easier to see the information on the screen that way, and this should be a decent indicator of the way their heads roll over time. Most of the time it averages out to a flat plane that they're holding their phone on, but around the time that they encounter the intentionally bugged screen, it seems that users move around more. The size of the dots represent the proximity of the device to the user, and it seems that during the videos, uers pull the device closer to their faces to focus more intently on the video. This makes sense. The more green a dot is, the more light there is coming into the device's light sensor. I'm having trouble finding an interpretation for the measure that will correlate with the other data.

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](images/d3cp1.png?raw=true)

[checkpoint](d3cp1.html)

# 2. (5 points)

![image](images/d3cp2.png?raw=true)

[checkpoint](d3cp2.html)

# 3. (5 points)

![image](images/d3cp3.png?raw=true)

[checkpoint](d3cp3.html)

# 4. (5 points)

![image](d3cp4.png?raw=true)

[checkpoint](images/d3cp4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](images/d3ch1.png?raw=true)

### 2. (5 points)

![screenshot](images/d3ch2.png?raw=true)

### 3. (5 points)

![screenshot](images/d3ch3.png?raw=true)

### 4. (10 points)

![screenshot](images/d3ch4.png?raw=true)

