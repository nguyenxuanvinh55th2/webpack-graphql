var User =require('./post/post.js');
module.exports= {
  Query: {
    hello(root) {
      return 'world';
    },
    tam(root){
      //Promise for client
      return new Promise(function(resolve, reject){
            User.find().exec().then(function(result) { //exect return Promise
                resolve(result);
            });
        });
    }
  },
  Mutation: {
    addTask(_) {
     return "vinh"
   },
 }
};
