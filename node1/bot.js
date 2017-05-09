console.log("the bot is starting");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
// commands you can issue to the API
// get() request...search? by hashtag by location by user
// post() tweeting!
// stream() a continuous connection whenever something happens
// assign certain types of events to a stream like @mention whenever
// someone mentions me on twitter something will happen

// getting JSON data from the twitter API and handling that data

// var params = {
// q: 'banana since:2011-07-11',
// count: 100
// };

// T.get('search/tweets', params, gotData);


// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++)
//   console.log(tweets[i].text);
// };



setInterval(tweetIt, 1000 * 20)


function tweetIt() {

    var r = Math.floor(Math.random()*100);
    var params_post = {
      status: 'Posting from node.js, random# ' + r + ' '
    };

    T.post('statuses/update', params_post, postData);

    function postData(err, data, response) {
      if(err) {
        console.log("something went wrong!");
        console.log(err);
      } else {
        console.log("It worked!");
      }

      console.log(data)
    };
  };

