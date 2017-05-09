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
// setting up a type of stream called a 'user stream'
var stream = T.stream('user');
// on function assigns a callback called followed for a particualarly event
// in this case the event is "follow"
stream.on('follow', followed);
// anytime anyone ever follows me this code
// will be executed this can take an argument
function followed(eventMsg) {
  console.log("followed!")
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName + ' Thank you for following me!');


}


tweetIt();

setInterval(tweetIt, 1000 * 20)


function tweetIt(txt) {

    var r = Math.floor(Math.random()*100);
    var params_post = {
      // status: txt
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

