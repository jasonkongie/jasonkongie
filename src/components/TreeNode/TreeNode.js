import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import LoadingPage from '../LoadingPage/LoadingPage';
import './TreeNode.css';

const TreeNode = ({ treeNodeData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const leftTitleRef = useRef(null);
  const rightTitleRef = useRef(null);

  useEffect(() => {
    const visited = localStorage.getItem('visited_tree_node');

    if (!visited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited_tree_node', true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const { leftTitle, rightTitle } = treeNodeData;
      
      const leftTypedOptions = {
        strings: [leftTitle],
        typeSpeed: 50,
        backSpeed: 20,
        loop: false,
      };

      const rightTypedOptions = {
        strings: [rightTitle],
        typeSpeed: 50,
        backSpeed: 20,
        loop: false,
      };

      const leftTyped = new Typed(leftTitleRef.current, leftTypedOptions);
      const rightTyped = new Typed(rightTitleRef.current, rightTypedOptions);

      return () => {
        leftTyped.destroy();
        rightTyped.destroy();
      };
    }
  }, [isLoading, treeNodeData]);

  if (!treeNodeData) {
    return null;
  }

  const { leftLink, rightLink, leftImage, rightImage, bgImage } = treeNodeData;

  return (
    <div
      className="tree-node-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="tree-node-grid">
          <Link to={leftLink}>
            <div className="tree-node-image-container">
              <span className="tree-node-title" ref={leftTitleRef} style={{ fontFamily: "Cormorant Garamond", fontSize: "2rem" }}></span>
              <img src={leftImage} alt="Left node" className="tree-node-image" />
            </div>
          </Link>
          <Link to={rightLink}>
            <div className="tree-node-image-container">
              <span className="tree-node-title" ref={rightTitleRef} style={{ fontFamily: "Cormorant Garamond", fontSize: "2rem" }}></span>
              <img src={rightImage} alt="Right node" className="tree-node-image" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TreeNode;
