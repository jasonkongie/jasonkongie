import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TreeNode from './components/TreeNode/TreeNode';
import Gallery from './components/Gallery/Gallery';
import WhoAmI from './components/TypedPoem/WhoAmI'; // Update the import statement
import Music from './components/Blog/Music'; // Update the import statement
import poems from './components/TypedPoem/poems.json';
import treeNodeData from './assets/treeNodeData';
import { images } from './assets/images';
import ImagePage from './components/ImagePage/ImagePage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Swim from './components/ImageSequence/Swim';
import Flash from "./components/Flash/Flash";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<TreeNode treeNodeData={treeNodeData.treeNode1} />} />
          <Route path="/the-past" element={<TreeNode treeNodeData={treeNodeData.treeNode2} />} />
          <Route path="/the-future" element={<TreeNode treeNodeData={treeNodeData.treeNode3} />} />
          <Route path="/gallery" element={<Gallery images={images} />} />
          <Route path="/image/:id" element={<ImagePage images={images} />} />
          <Route path="/swim" element={<Swim />} />
          <Route path="/flash" element={<Flash />} />
          <Route
            path="/who-am-i"
            element={<WhoAmI poems={poems} />} // Update the component name
          />
          <Route path="/music" element={<Music />} /> // Update the component name
          <Route path="/videoPlayer" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
