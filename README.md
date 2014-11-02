# Name

Alexia Newgord

# How many points have you earned?

100/100


# How many hours have you spent on this?

5

# When did you first start working on this week's learning challenges?

Halloween

# What is the most difficult part about this week's challenge?

D3 tutorial

# Show and tell (6 points)

## Link (2 points)

[Visualization](http://planetaryjs.com/examples/quake/index.html)
[Source Code](http://planetaryjs.com/examples/quake.html)

## Write down TWO D3 features you’d like to learn next . (4 points)

1. I'd like to learn how to represent 3D objects in D3.
2. I'd like to improve my ability to animate objects, especially in dynamic/real-time situations.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](mcp1.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({"donor":"Belgium"},{"recipient":1, 'commitment_amount':1})

There were many undefined disbursements, so I thought 'commitment_amount' would be more interesting.

![screenshot](mc1.png?raw=true)

# 2. (5 points)

> db.aiddata.find({"short_description":"BIODIVERSITY"}, {"recipient":1, 'disbursement_amount':1, "title":1})

![screenshot](mc2.png?raw=true)

# 3. (5 points)

> db.runCommand({distinct: "aiddata", key: "flow_type"})

![screenshot](mc3.png?raw=true)

# 4. (5 points)

> db.runCommand({distinct: "aiddata", key: "flow_type", query:{disbursement_amount: {$gt:100000000}}})

"n" is the number of results identified. The difference between this challenge and the last is 999865.

![screenshot](mc4.png?raw=true)

# 5. (5 points)

> db.aiddata.aggregate([{ $match: {"donor":"Belgium"}},{ $group: { _id:"$year", total: {$sum:"$disbursement_amount"}}}])

![screenshot](mc5.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](c1a.png?raw=true)

### b. (3 points)

![screenshot](c1b.png?raw=true)

### c. (3 points) 

![screenshot](c1c.png?raw=true)

### d. (3 points) 

![screenshot](c1d.png?raw=true)

## Challenge 2 (8 points)

I thought it would interesting to see how this data evolved over time, since our interaction with the phone would have changed depending on the activity.  As you can see in the visualization below, there are four spikes in activity (SUM(Touch Label)), which suggest when the interactive games were occurring, as opposed to filling out forms.  Although I'm not quite sure what pitch and roll mean, I thought it was very interesting that the pitch (color value), increased during the third activity, and the roll (thickness), notably decreased during the third activity.  For me, this was when the glitches occurred and these results may suggest how users respond to glitchy software behavior.

![screenshot](c2.png?raw=true)

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](dcp1.png?raw=true)

[checkpoint](dcp1.html)

# 2. (5 points)

![image](dcp2.png?raw=true)

[checkpoint](dcp2.html)

# 3. (5 points)

![image](dcp3.png?raw=true)

[checkpoint](dcp3.html)

# 4. (5 points)

![image](dcp4.png?raw=true)

[checkpoint](dcp4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](dc1.png?raw=true)

### 2. (5 points)

![screenshot](dc2.png?raw=true)

### 3. (5 points)

![screenshot](dc3.png?raw=true)

### 4. (10 points)

![screenshot](dc4.png?raw=true)

