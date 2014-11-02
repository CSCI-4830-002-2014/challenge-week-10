# Name

Logan Bates

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

4

# When did you first start working on this week's learning challenges?

Friday night

# What is the most difficult part about this week's challenge?

The last D3 challenge.

# Show and tell (6 points)

## Link (2 points)

[Sequences Sunburst](http://bl.ocks.org/kerryrodden/7090426)

## Write down TWO D3 features you’d like to learn next . (4 points)

1. Interactivity with the user. The user should be able to interact with the visual to get to what they need.
2. Maps!

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](checkpoint1mongo.png?raw=true)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aidata.find({'donor':'Belgium','disbursement_amount':{$gt:0}},{'recipient':1,'disbursement_amount':1})

![screenshot](challenge1mongo.png?raw=true)

# 2. (5 points)

> db.aidata.find({'biodiversity':{$ne:''},'disbursement_amount':{$ne:''}},{'recipient':1, 'disbursement_amount':1,'title':1})

![screenshot](challenge2mongo.png?raw=true)

# 3. (5 points)

> db.runCommand({ distinct: "aidata", key : "flow_type"})

![screenshot](challenge3mongo.png?raw=true)

# 4. (5 points)

> db.runCommand({ distinct: "aidata", key : "flow_type", query : { "disbursement_amount" : {$gt : 100000000}}})

![screenshot](challenge4mongo.png?raw=true)


n is the number of queries returned which match this search. The query where disbursement_amount wasn't restricted was much higher than the second query where it was limited to values above 10,000,000. 

# 5. (5 points)

> db.aidata.aggregate([{$match:{'donor':'Belgium'}},{$group:{_id:'$year',total:{$sum:'$disbursement_amount'}}}])

![screenshot](challenge5mongo.png?raw=true)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](challenge1amachine.png?raw=true)

### b. (3 points)

![screenshot](challenge1bmachine.png?raw=true)

### c. (3 points) 

![screenshot](challenge1cmachine.png?raw=true)

### d. (3 points) 

![screenshot](challenge1dmachine.png?raw=true)

## Challenge 2 (8 points)

I chose to look at the positioning of each student's phone as time went on. I wanted to see if the student's focus would force the phone to stay in one general location or if some people are jittery when they focus.

![screenshot](challenge2amachine.png?raw=true) 
This tableau looks at the Pitch and roll separately as time goes on. The colors are different student IDs. It seems as though data is only recorded as the videos are being played. We can pull a few things from this. Most students tend to keep the phone's pitch very consistent throughout the study. There are only a few ouliers here. We can also see that there is a huge disparity between the roll measurements. for students. This might mean that the students are rolling their phones a lot as they go but I would guess, based on the first observance, that the sensor was inaccurate.
![screenshot](challenge2bmachine.png?raw=true) 
The rotational data shows that users tended to rotate the phone most erradically in the y direction. 
This data shows that students more likely moved the phone in a rolling motion than any other movement. The other directions are very consistent for all students.

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](checkpoint1D3.png?raw=true)

[checkpoint](checkpoint1D3.html)

# 2. (5 points)

![image](checkpoint2D3.PNG?raw=true)

[checkpoint](checkpoint3D3.html)

# 3. (5 points)

![image](checkpoint3D3.PNG?raw=true)

[checkpoint](checkpoint3D3.html)

# 4. (5 points)

![image](checkpoint4D3.PNG?raw=true)

[checkpoint](checkpoint4D3.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](challenge1D3.PNG?raw=true)

### 2. (5 points)

![screenshot](challenge2D3.PNG?raw=true)

### 3. (5 points)

![screenshot](challenge3D3.PNG?raw=true)

### 4. (10 points)

![screenshot](challenge4D3.PNG?raw=true)

