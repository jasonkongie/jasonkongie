import treeNode1ImgLeft from './images/1.JPG';
import treeNode1ImgRight from './images/2.JPG';
import treeNode2ImgLeft from './images/3.JPG';
import treeNode2ImgRight from './images/4.JPG';
import treeNode3ImgLeft from './images/5.JPG';
import treeNode3ImgRight from './images/6.JPG';
import bgImage from './images/bg1.JPG';

const treeNodeData = {
  treeNode1: {
    leftLink: '/the-past',
    rightLink: '/the-future',
    leftImage: treeNode1ImgLeft,
    rightImage: treeNode1ImgRight,
    leftTitle: 'The Past',
    rightTitle: 'The Future',
    bgImage: bgImage,
  },
  treeNode2: {
    leftLink: '/gallery',
    rightLink: '/music',
    leftImage: treeNode2ImgLeft,
    rightImage: treeNode2ImgRight,
    leftTitle: 'Gallery',
    rightTitle: 'Music',
    bgImage: bgImage,
  },
  treeNode3: {
    leftLink: '/flash',
    rightLink: '/who-am-i',
    leftImage: treeNode3ImgLeft,
    rightImage: treeNode3ImgRight,
    leftTitle: 'Flash',
    rightTitle: 'Who am I?',
    bgImage: bgImage,
  },
};

export default treeNodeData;
