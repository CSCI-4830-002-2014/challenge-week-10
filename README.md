# Name

Brian Newsom

# How many points have you earned?

75/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

Monday (I did all the d3 stuff), but I started the others Wednesday
as soon as I could after they were posted.

# What is the most difficult part about this week's challenge?

Finishing the hackathon... It was a toughie and I wasn't sure on a lot of things.

# Show and tell (6 points)

## Link (2 points)

[One Path for All Links](http://bl.ocks.org/mbostock/1579132)

## Write down TWO D3 features you’d like to learn next . (4 points)

1.) Ability to act on data through dragging
2.) How to make objects all interconnected when dragged and have physics like feel
as in the included viz.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](mongodb/cp1.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({"donor" : "Belgium"},{"recipient" :1,"disbursement_amount" : 1})

![screenshot](mongodb/ch1.png?raw=true)

# 2. (5 points)

> db.aiddata.find({"biodiversity":{$gt:0}},{"recipient" : 1, "disbursement_amout" : 1 "title" : 1})

![screenshot](mongodb/ch2.png?raw=true)

# 3. (5 points)

> db.runCommand({ distinct: "aiddata", key : "flow_type"})

![screenshot](mongodb/ch3.png?raw=true)

# 4. (5 points)

> db.runCommand({ distinct: "aiddata", key : "flow_type", query : { "disbursement_amount" : {$gt : 100000000}}})

![screenshot](mongodb/ch4.png?raw=true)

# 5. (5 points)

> db.aiddata.aggregate([{$match: {donor : "Belgium"}}. {$group : { _id : "$year", total: {$sum : "$disbursement_amount"}}}])

![screenshot](mongodb/ch5.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](ml/ch1a.png?raw=true)

### b. (3 points)

![screenshot](ml/ch1b.png?raw=true)

### c. (3 points)

![screenshot](ml/ch1c.png?raw=true)

### d. (3 points)

![screenshot](ml/ch1d.png?raw=true)

## Challenge 2 (8 points)

My analysis is meant to examine when the actual game was being played
(e.g. users clicking for kisses or whatever), first I examined the number of touches
vs. the time since start, searching for gaps, which seem to occur
between 200,000 ms and 250,000 ms, and 400,000 and 450,000 ms.
![screenshot](ml/ch2a.png?raw=true)
Then, just to ensure people's apps didn't crash at those points and the
data is just showing when people stopped playing, I examined the
number of records (there shouldn't be any records after the app is quit).
![screenshot](ml/ch2b.png?raw=true)
This image shows mostly as expected, especially the first and last gaps,
signaling that this is when the users are not playing the game - at least
not touching the screen consistently across users.

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](d3/cp1.png?raw=true)

[checkpoint](d3/cp1.html)

# 2. (5 points)

![image](d3/cp2.png?raw=true)

[checkpoint](d3/cp2.html)

# 3. (5 points)

![image](d3/cp3.png?raw=true)

[checkpoint](d3/cp3.html)

# 4. (5 points)

![image](d3/cp4.png?raw=true)

[checkpoint](d3/cp4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](screenshot.png?raw=true)

### 2. (5 points)

![screenshot](screenshot.png?raw=true)

### 3. (5 points)

![screenshot](screenshot.png?raw=true)

### 4. (10 points)

![screenshot](screenshot.png?raw=true)
