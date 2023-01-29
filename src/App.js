import AddPost from "./components/AddPost/AddPost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <AddPost />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
