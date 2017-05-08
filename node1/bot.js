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
