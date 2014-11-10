# Name

write-your-name

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

![image](https://www.dropbox.com/s/9xizezpzkj7bllg/Screenshot%202014-11-05%2023.10.18.png?dl=1)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

```javascript
db.aiddata.find({"donor" : "Belgium"},{'recipient': 1, 'disbursement_amount':1})
```

![screenshot](https://www.dropbox.com/s/si174eg1mox6jvc/Screenshot%202014-11-05%2023.25.16.png?dl=1)

# 2. (5 points)

```javascript
db.aiddata.find({'biodiversity' : {$in : [1,2] }},{"disbursement_amount":1, "recipient":1, "title":1}).pretty()
```

![screenshot](https://www.dropbox.com/s/saei709e51snw3q/Screenshot%202014-11-06%2009.49.31.png?dl=1)

# 3. (5 points)

> db.[complete this query]

```javascript
db.runCommand({distinct: 'aiddata', key: 'flow_type'})
```

![screenshot](https://www.dropbox.com/s/a8d1dn4onok6dqr/Screenshot%202014-11-06%2014.52.39.png?dl=1)

# 4. (5 points)

```javascript
db.runCommand({distinct: 'aiddata', key: 'flow_type', query: {'disbursement_amount': {$gte:100000000}}})
```

![screenshot](https://www.dropbox.com/s/y10xvqmfr4gsvi2/Screenshot%202014-11-06%2014.51.14.png?dl=1)

# 5. (5 points)

```javascript
db.aiddata.aggregate([{$match: {'donor':'Belgium'}}, {$group: {_id:'$year', total:{$sum: "$commitment_amount"}}}])
```

![screenshot](https://www.dropbox.com/s/boklfmjav3qq8xr/Screenshot%202014-11-06%2015.05.19.png?dl=1)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](https://www.dropbox.com/s/o7knzdgbkctlqjx/Screenshot%202014-11-05%2017.41.13.png?dl=1)

### b. (3 points)

![screenshot](https://www.dropbox.com/s/jewuj20z64k8dp5/Screenshot%202014-11-05%2017.46.14.png?dl=1)

### c. (3 points) 

![screenshot](https://www.dropbox.com/s/f2kmvhaqlzfrbz7/Screenshot%202014-11-05%2017.50.01.png?dl=1)

### d. (3 points) 

![screenshot](https://www.dropbox.com/s/a3m2sd7plg3fmpr/Screenshot%202014-11-05%2017.51.47.png?dl=1)

## Challenge 2 (8 points)

![screenshot](https://www.dropbox.com/s/0sx4kjsu43ki7du/Screenshot%202014-11-05%2017.59.15.png?dl=1)

In this image, you are able to see how each student interacted with the device
using data obtained from the accelerometer. As you can see, the y-axis was used
sparingly, and typically users were moving up/down and forward/backward.

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1.

![image](https://www.dropbox.com/s/31mi6l0onpeb1m8/Screenshot%202014-10-26%2012.59.33.png?dl=1)

[checkpoint](d3/app/checkpoint5/index.html)

# 2.

![image](https://www.dropbox.com/s/mxsahup7jqahh3y/Screenshot%202014-10-26%2013.13.54.png?dl=1)

[checkpoint](d3/app/checkpoint6/index.html)

# 3.

![image](https://www.dropbox.com/s/dhos8xgjoxzuh79/Screenshot%202014-10-26%2013.51.59.png?dl=1)

[checkpoint](d3/app/checkpoint7/index.html)

# 4.

![image](https://www.dropbox.com/s/jq88rgcx7bc9t9c/Screenshot%202014-10-26%2013.56.34.png?dl=1)

[checkpoint](d3/app/checkpoint8/index.html)


## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](https://www.dropbox.com/s/ks7zmx2jzf67arn/Screenshot%202014-11-09%2019.26.00.png?dl=1)

### 2. (5 points)

![screenshot](https://camo.githubusercontent.com/51ba8ccb63e7dcc030d41bb70006236dcec700cd/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f316565726161776a6e7978396b79612f53637265656e73686f74253230323031342d31302d323725323031392e33312e32352e706e673f646c3d31)

### 3. (5 points)

![screenshot](https://www.dropbox.com/s/xahbv0cqgqoyjoo/Screenshot%202014-11-09%2019.37.32.png?dl=1)

### 4. (10 points)

![screenshot](https://www.dropbox.com/s/o9421sejhw0gk8b/Screenshot%202014-11-09%2019.44.47.png?dl=1)

