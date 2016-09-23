var User =require('./post/post.js');
module.exports= {
  Query: {
    hello(root) {
      return 'world';
    },
    tam(root){
      var user = User.find({})
      console.log("user",user);
      return user;
    }
  },
  Mutation: {
    addTask(_) {
     return "vinh"
   },
 }
};
