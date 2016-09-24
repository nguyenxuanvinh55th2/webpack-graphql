module.exports = [`
type Vinh {
  name:String
}
type Query {
  hello: String,
  tam:[Vinh]
},

type Mutation {
  addTask: String,
},
schema {
  query: Query,
   mutation: Mutation
}`];
