import Main from './components/main';
// import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";
  
const client = new ApolloClient({
  cache: new InMemoryCache(),

  uri: "https://covid19-graphql.herokuapp.com/"
})
function App() {
  return (
    <ApolloProvider client={client}>
     
      <Main />
      
    </ApolloProvider>
  );
}

export default App;
