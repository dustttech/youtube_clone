import VideoPreview from "./components/VideoPreview";
import CategoriesBar from "./page/CategoriesBar";
import Header from "./page/Header";
import Sidebar from "./page/Sidebar";
import VideoList from "./page/VideoList";

function App() {
  return (
    <>
      <div className="l-main">
        <Header />
        <CategoriesBar />
        <Sidebar />
        <div className="c-content">
          <VideoList />
        </div>
        <VideoPreview />
      </div>
    </>
  );
}

export default App;
