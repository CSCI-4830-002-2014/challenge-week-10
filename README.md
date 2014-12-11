# Name

Daniel Nolan

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

6

# When did you first start working on this week's learning challenges?

Late Saturday night

# What is the most difficult part about this week's challenge?

So far, getting the mongoimport to work on my Terminal because I keep coming up with a Syntax error.

# Show and tell (6 points)

## Link (2 points)

[Airports in the US + Voronoi Diagram](http://mbostock.github.io/d3/talk/20111116/airports.html)

## Write down TWO D3 features you’d like to learn next . (4 points)

If it is possible, it would be really interesting to learn things that might be more dynamic in D3 relative to sensing and sound encoding.

Creating visual effects and more design-oriented things other than bar graphs.

Things that are very vital for internship/job market use. This would obviously be things that would give employers something that strikes their fancy.

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](http://i.imgur.com/UfDyTH2.png)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({ 'donor':'Belgium', 'disbursement_amount':{ $gt:0 }}, { '_id':1, 'recipient':1, 'disbursement_amount':1 });

![screenshot](http://i.imgur.com/OzNnkNx.png)

# 2. (5 points)

> db.aiddata.find({ 'biodiversity':{$gt:0}}, { '_id':1, 'recipient':1, 'title':1 });

![screenshot](http://i.imgur.com/KtiaEXr.png)

# 3. (5 points)

> db.runCommand({distinct:'aiddata',key:'flow_type'})

![screenshot](http://i.imgur.com/z8nMUDn.png)

# 4. (5 points)
n stands for the number of objects that match the query command. In this case, it matches the data points that list the disbursement amount over $100000000. In the previous challenge, n is equal to nscanned which means that all of the data is included within the query.
> db.runCommand({distinct:'aiddata',key:'flow_type', query:{'disbursement_amount':{$gt:100000000}}})


![screenshot](http://i.imgur.com/elq5rcI.png)

# 5. (5 points)

> db.aiddata.aggregate([{ $match: { 'donor':'Belgium' }}, { $group: { '_id':'$year', total: {$sum: '$disbursement_amount' }}}]);

![screenshot](http://i.imgur.com/XbuG3Sn.png)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](http://i.imgur.com/FWLUgIj.png)

### b. (3 points)

![screenshot](http://i.imgur.com/Jw38xPg.png)

### c. (3 points) 

![screenshot](http://i.imgur.com/j2TDkzi.png)

### d. (3 points) 

![screenshot](http://i.imgur.com/6iHRbbf.png)

## Challenge 2 (8 points)

By Challenge 1a, we can see that the most pitch counts happened in the 0.7-0.8 range. By giving a shade range for the amount of time taken (in ms) since a started recording and incorporating the pitch, it can be observed that most happened within a few milliseconds. Obviously there were a few that longer (41 ms) which was most likely due in part to errors such as low voltage in a battery during a started recording. Also, there was no correlation in pitch between students that had recording data within this data file. This would seem to be normal considering all students used their data to prove different hypotheses.
![screenshot](http://i.imgur.com/UoQA4sL.png)
![screenshot](http://i.imgur.com/2A1TQCw.png)
The diagram for Challenge 1c concluded that there was not much of a difference in the average between touch labels. Label 0 (left) was had a slightly larger average, but not much more as we can tell. In Challenge 1d, we can observe the amount of sensor readings that were done per student. With this, we can see that student 2 had the greatest count whereas student 15 had the least amount. The students with smaller amounts might have had sensor errors relating to the Arduino and battery packs. We could possibly say that students 12 and 15 are the result of hardware problems and other possible factors.  

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](http://i.imgur.com/WGR08M3.png)

[checkpoint](checkpoint1.html)

# 2. (5 points)

![image](http://i.imgur.com/r3hNOq8.png)

[checkpoint](checkpoint2.html)

# 3. (5 points)

![image](http://i.imgur.com/ph5US2z.png)

[checkpoint](checkpoint3.html)

# 4. (5 points)

![image](http://i.imgur.com/WsK7Kyy.png)

[checkpoint](checkpoint4.html)

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](http://i.imgur.com/AaUcJjx.png)

### 2. (5 points)

![screenshot](http://i.imgur.com/Wv253v0.png)

### 3. (5 points)

![screenshot](http://i.imgur.com/BMR6eLo.png)

### 4. (10 points)

![screenshot](http://i.imgur.com/rf3kwJm.png)

