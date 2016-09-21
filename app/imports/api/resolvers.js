module.exports= {
  Query: {
    hello(root) {
      return 'world';
    },
    tam(root){
      var ob ={
        name:"vinh"
      }
      return ob;
    }
  },
  Mutation: {
    addTask(_) {
     return "vinh"
   },
 }
};
