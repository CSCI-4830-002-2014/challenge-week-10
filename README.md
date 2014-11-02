# Name

Marc Simpson

# How many points have you earned?

92/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

Most of the week, this just had a lot of parts to it

# When did you first start working on this week's learning challenges?

Tuesday

# What is the most difficult part about this week's challenge?

Just keeping track of everything. There were a lot of parts, and D3 part three.

# Show and tell (6 points)

## Link (2 points)

[CodeFlower Source code visualization](http://redotheweb.com/CodeFlower/)

## Write down TWO D3 features you’d like to learn next . (4 points)

1.) Content Mapping
2.) Realtime 3D simulation

# MongoDB III

## Checkpoints (4 points x 1 = 4 points)

# 1. (4 points)

![image](http://i.imgur.com/jJR9rX4.png?1)

## Challenges (5 points x 5 = 25 points)

# 1. (5 points)

> db.aiddata.find({"donor" : "Belgium"},{"recipient" :1,"disbursement_amount" : 1})

![screenshot](http://i.imgur.com/bF3Q9eM.png?1)

# 2. (5 points)

> db.aiddata.find({"biodiversity":{$gt:0}},{"recipient" : 1, "disbursement_amout" : 1 "title" : 1})

![screenshot](http://i.imgur.com/69eSNot.png)

# 3. (5 points)

> db.runCommand({ distinct: "aiddata", key : "flow_type"})

![screenshot](http://i.imgur.com/ZHvmqL3.png)

# 4. (5 points)

> db.runCommand({ distinct: "aiddata", key : "flow_type", query : { "disbursement_amount" : {$gt : 100000000}}})

![screenshot](http://i.imgur.com/Ye7e3Rv.png)

# 5. (5 points)

> db.aiddata.aggregate([{$match: {donor : "Belgium"}}. {$group : { _id : "$year", total: {$sum : "$disbursement_amount"}}}])

![screenshot](http://i.imgur.com/Y7EGyfq.png)

# Machine Learning (II)

## Challenge 1 (3 points x 4 = 12 points)

### a. (3 points)

![screenshot](http://i.imgur.com/S4pSPvi.png)

### b. (3 points)

![screenshot](http://i.imgur.com/Sano20v.png)

### c. (3 points) 

![screenshot](http://i.imgur.com/R5D8Xwn.png)

### d. (3 points) 

![screenshot](http://i.imgur.com/362KLIK.png)

## Challenge 2 (8 points)

{text-and-images}

# D3 (V)

## Checkpoints (5 points x 4 = 20 points)

# 1. (5 points)

![image](http://i.imgur.com/ilQ8p0Y.png?1)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>D3: A bar chart whose data updates with new data</title>
    <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
    <style type="text/css">
    </style>
  </head>
  <body>

    <p> Update Values With Random Data - Repeat To Your Heart's Content.</p>

    <script type="text/javascript">
      //Width and height
      var w = 600;
      var h = 250;
      var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
              11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
      var xScale = d3.scale.ordinal()
              .domain(d3.range(dataset.length))
              .rangeRoundBands([0, w], 0.05);
      var yScale = d3.scale.linear()
              .domain([0, d3.max(dataset)])
              .range([0, h]);
      //Create SVG element
      var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      //Create bars
      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
             return xScale(i);
         })
         .attr("y", function(d) {
             return h - yScale(d);
         })
         .attr("width", xScale.rangeBand())
         .attr("height", function(d) {
             return yScale(d);
         })
         .attr("fill", function(d) {
          return "rgb(0, 0, " + (d * 10) + ")";
         });
      //Create labels
      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .text(function(d) {
             return d;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
             return xScale(i) + xScale.rangeBand() / 2;
         })
         .attr("y", function(d) {
             return h - yScale(d) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("fill", "white");
      //On click, update with new data
      d3.select("p")
        .on("click", function() {
          //New values for dataset
        var numValues = dataset.length
        var maxValue = 25
        var newNumber = Math.floor(Math.random() * maxValue);
        dataset.push(newNumber);
        xScale.domain(d3.range(dataset.length));
        yScale.domain([0,d3.max(dataset)]);
          //Update all rects
        var bars = svg.selectAll("rect")
             .data(dataset)
        bars.enter()
              .append("rect")
              .attr("x",w)
              .attr("y", function(d) { return h - yScale(d);})
              .attr("width", xScale.rangeBand())
              .attr("height", function(d) {return yScale(d);})
              .attr("fill", function(d){
                return "rgb(0,0,"+ (d*10) + ")";
              })
        bars.transition()
             .duration(500)
             .attr("x", function(d, i) {return xScale(i);})
             .attr("y", function(d) {
                 return h - yScale(d);
             })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {return yScale(d);})
        svg.selectAll("text")
              .data(dataset)
              .transition()
              .delay(function(d,i) {
                return i / dataset.length * 1000;
              })
              .duration(500)
              .text(function(d) {
                return d;
              })
              .attr("x", function(d,i) {
                return xScale(i) + xScale.rangeBand() / 2;
              })
              .attr("y", function(d,i){
                return h - yScale(d) + 14;
              });
        });
    </script>
  </body>
</html>

# 2. (5 points)

![image](http://i.imgur.com/g8jW3PQ.png?1)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>D3: A bar chart whose data updates with new data</title>
    <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
    <style type="text/css">
    </style>
  </head>
  <body>

    <p> Update Values With Random Data - Repeat To Your Heart's Content.</p>

    <script type="text/javascript">
      //Width and height
      var w = 600;
      var h = 250;
      var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
              11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
      var xScale = d3.scale.ordinal()
              .domain(d3.range(dataset.length))
              .rangeRoundBands([0, w], 0.05);
      var yScale = d3.scale.linear()
              .domain([0, d3.max(dataset)])
              .range([0, h]);
      //Create SVG element
      var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      //Create bars
      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
             return xScale(i);
         })
         .attr("y", function(d) {
             return h - yScale(d);
         })
         .attr("width", xScale.rangeBand())
         .attr("height", function(d) {
             return yScale(d);
         })
         .attr("fill", function(d) {
          return "rgb(0, 0, " + (d * 10) + ")";
         });
      //Create labels
      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .text(function(d) {
             return d;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
             return xScale(i) + xScale.rangeBand() / 2;
         })
         .attr("y", function(d) {
             return h - yScale(d) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("fill", "white");
      //On click, update with new data
      d3.select("p")
        .on("click", function() {
          //New values for dataset
        var numValues = dataset.length
        var maxValue = 25
        var newNumber = Math.floor(Math.random() * maxValue);
        dataset.push(newNumber);
        xScale.domain(d3.range(dataset.length));
        yScale.domain([0,d3.max(dataset)]);
          //Update all rects
        var bars = svg.selectAll("rect")
             .data(dataset)
        bars.enter()
              .append("rect")
              .attr("x",w)
              .attr("y", function(d) { return h - yScale(d);})
              .attr("width", xScale.rangeBand())
              .attr("height", function(d) {return yScale(d);})
              .attr("fill", function(d){
                return "rgb(0,0,"+ (d*10) + ")";
              })
        bars.transition()
             .duration(500)
             .attr("x", function(d, i) {return xScale(i);})
             .attr("y", function(d) {
                 return h - yScale(d);
             })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {return yScale(d);})
        var labels = svg.selectAll("text")
              .data(dataset)
        labels.enter()
              .append("text")
              .text(function(d) {
                return d;
              })
              .attr("x", function(d,i) {
                return xScale(i) + xScale.rangeBand() / 2;
              })
              .attr("y", function(d,i){
                return h - yScale(d) + 14;
              })
              .attr("text-anchor", "middle")
              .attr("font-family", "sans-serif")
              .attr("font-size", "11px")
              .attr("fill", "white");
        labels.transition()
            .duration(500)
            .text(function(d) {
              return d;
            })
            .attr("x", function(d,i) {
              return xScale(i) + xScale.rangeBand() / 2;
            })
            .attr("y", function(d,i){
              return h - yScale(d) + 14;
            });
        });
    </script>
  </body>
</html>

# 3. (5 points)

![image](http://i.imgur.com/QcFIl01.png?1)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>D3: A bar chart whose data updates with new data</title>
    <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
    <style type="text/css">
    </style>
  </head>
  <body>

    <p> Remove data points </p>

    <script type="text/javascript">
      //Width and height
      var w = 600;
      var h = 250;
      var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
              11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
      var xScale = d3.scale.ordinal()
              .domain(d3.range(dataset.length))
              .rangeRoundBands([0, w], 0.05);
      var yScale = d3.scale.linear()
              .domain([0, d3.max(dataset)])
              .range([0, h]);
      //Create SVG element
      var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      //Create bars
      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
             return xScale(i);
         })
         .attr("y", function(d) {
             return h - yScale(d);
         })
         .attr("width", xScale.rangeBand())
         .attr("height", function(d) {
             return yScale(d);
         })
         .attr("fill", function(d) {
          return "rgb(0, 0, " + (d * 10) + ")";
         });
      //Create labels
      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .text(function(d) {
             return d;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
             return xScale(i) + xScale.rangeBand() / 2;
         })
         .attr("y", function(d) {
             return h - yScale(d) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("fill", "white");
      //On click, update with new data
      d3.select("p")
        .on("click", function() {
          //New values for dataset
        dataset.shift();
        xScale.domain(d3.range(dataset.length));
        yScale.domain([0,d3.max(dataset)]);
          //Update all rects
        var bars = svg.selectAll("rect")
             .data(dataset)
        bars.enter()
              .append("rect")
              .attr("x",w)
              .attr("y", function(d) { return h - yScale(d);})
              .attr("width", xScale.rangeBand())
              .attr("height", function(d) {return yScale(d);})
              .attr("fill", function(d){
                return "rgb(0,0,"+ (d*10) + ")";
              })
        bars.transition()
             .duration(500)
             .attr("x", function(d, i) {return xScale(i);})
             .attr("y", function(d) {
                 return h - yScale(d);
             })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {return yScale(d);})
        bars.exit()
            .transition()
            .duration(500)
            .attr("x",w)
            .remove();
        var labels = svg.selectAll("text")
              .data(dataset)
        labels.enter()
              .append("text")
              .text(function(d) {
                return d;
              })
              .attr("x", function(d,i) {
                return xScale(i) + xScale.rangeBand() / 2;
              })
              .attr("y", function(d,i){
                return h - yScale(d) + 14;
              })
              .attr("text-anchor", "middle")
              .attr("font-family", "sans-serif")
              .attr("font-size", "11px")
              .attr("fill", "white");
        labels.transition()
            .duration(500)
            .text(function(d) {
              return d;
            })
            .attr("x", function(d,i) {
              return xScale(i) + xScale.rangeBand() / 2;
            })
            .attr("y", function(d,i){
              return h - yScale(d) + 14;
            });
        labels.exit()
            .transition()
            .duration(500)
            .attr("x",w)
            .remove();
        });
    </script>
  </body>
</html>

# 4. (5 points)

![image](http://i.imgur.com/vNBZIts.png?1)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>D3: A bar chart whose data updates with new data</title>
    <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
    <style type="text/css">
    </style>
  </head>
  <body>

    <p> Remove data points </p>

    <script type="text/javascript">
      //Width and height
      var w = 600;
      var h = 250;
      var dataset = [ { key: 0, value: 5 },
                { key: 1, value: 10 },
                { key: 2, value: 13 },
                { key: 3, value: 19 },
                { key: 4, value: 21 },
                { key: 5, value: 25 },
                { key: 6, value: 22 },
                { key: 7, value: 18 },
                { key: 8, value: 15 },
                { key: 9, value: 13 },
                { key: 10, value: 11 },
                { key: 11, value: 12 },
                { key: 12, value: 15 },
                { key: 13, value: 20 },
                { key: 14, value: 18 },
                { key: 15, value: 17 },
                { key: 16, value: 16 },
                { key: 17, value: 18 },
                { key: 18, value: 23 },
                { key: 19, value: 25 } ];
      var xScale = d3.scale.ordinal()
              .domain(d3.range(dataset.length))
              .rangeRoundBands([0, w], 0.05);
      var yScale = d3.scale.linear()
              .domain([0, d3.max(dataset, function(d) { return d.value;})])
              .range([0, h]);
      var key = function(d) {
        return d.key;
      };
      //Create SVG element
      var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      //Create bars
      svg.selectAll("rect")
         .data(dataset,key)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
             return xScale(i);
         })
         .attr("y", function(d) {
             return h - yScale(d.value);
         })
         .attr("width", xScale.rangeBand())
         .attr("height", function(d) {
             return yScale(d.value);
         })
         .attr("fill", function(d) {
          return "rgb(0, 0, " + (d.value * 10) + ")";
         });
      //Create labels
      svg.selectAll("text")
         .data(dataset,key)
         .enter()
         .append("text")
         .text(function(d) {
             return d.value;
         })
         .attr("text-anchor", "middle")
         .attr("x", function(d, i) {
             return xScale(i) + xScale.rangeBand() / 2;
         })
         .attr("y", function(d) {
             return h - yScale(d.value) + 14;
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("fill", "white");
      //On click, update with new data
      d3.select("p")
        .on("click", function() {
          //New values for dataset
        dataset.shift();
        xScale.domain(d3.range(dataset.length));
        yScale.domain([0,d3.max(dataset, function(d) { return d.value; })]);
          //Update all rects
        var bars = svg.selectAll("rect")
             .data(dataset,key)
        bars.enter()
              .append("rect")
              .attr("x",w)
              .attr("y", function(d) { return h - yScale(d.value);})
              .attr("width", xScale.rangeBand())
              .attr("height", function(d) {return yScale(d.value);})
              .attr("fill", function(d){
                return "rgb(0,0,"+ (d.value*10) + ")";
              })
        bars.transition()
             .duration(500)
             .attr("x", function(d, i) {return xScale(i);})
             .attr("y", function(d) {
                 return h - yScale(d.value);
             })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {return yScale(d.value);})
        bars.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale.rangeBand())
            .remove();
        var labels = svg.selectAll("text")
              .data(dataset,key)
        labels.enter()
              .append("text")
              .text(function(d) {
                return d.value;
              })
              .attr("x", function(d,i) {
                return xScale(i) + xScale.rangeBand() / 2;
              })
              .attr("y", function(d,i){
                return h - yScale(d.value) + 14;
              })
              .attr("text-anchor", "middle")
              .attr("font-family", "sans-serif")
              .attr("font-size", "11px")
              .attr("fill", "white");
        labels.transition()
            .duration(500)
            .text(function(d) {
              return d.value;
            })
            .attr("x", function(d,i) {
              return xScale(i) + xScale.rangeBand() / 2;
            })
            .attr("y", function(d,i){
              return h - yScale(d.value) + 14;
            });
        labels.exit()
            .transition()
            .duration(500)
            //fade to left
            .attr("x", -xScale.rangeBand())
            .remove();
        });
    </script>
  </body>
</html>

## Challenges 	(5 points x 3 + 10 points = 25 points)

### 1. (5 points)

![screenshot](http://i.imgur.com/8qdVuJH.png?1)

### 2. (5 points)

![screenshot](http://i.imgur.com/iiJ3RZx.png?1)

### 3. (5 points)

![screenshot](http://i.imgur.com/i9baJ66.png?1)

### 4. (10 points)

![screenshot](http://i.imgur.com/CqViJ9H.png?1cxxxx )

