import Main from './components/main';
// import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";
  import Header from './components/header';
import Footer from './components/Footer';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "http://localhost:12000/"
  uri: "https://covid19-graphql.herokuapp.com/"
})
function App() {
  return (
    <ApolloProvider client={client}>
     {/* <Header/>  */}
      <Main />
      {/* <Footer/> */}
    </ApolloProvider>
  );
}

export default App;
