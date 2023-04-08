import React, { forwardRef } from "react";

import { Skeleton } from "./skeleton";
import { img } from "./imgIndex";
import { useImage } from "./hooks";



const SwimArray = () => {
  const [AA1, AA1S] = useImage(img[1]);
  const [AA2, AA2S] = useImage(img[2]);
  const [AA3, AA3S] = useImage(img[3]);
  const [AA4, AA4S] = useImage(img[4]);
  const [AA5, AA5S] = useImage(img[5]);
  const [AA6, AA6S] = useImage(img[6]);
  const [AA7, AA7S] = useImage(img[7]);
  const [AA8, AA8S] = useImage(img[8]);
  const [AA9, AA9S] = useImage(img[9]);

  const [AA10, AA10S] = useImage(img[10]);
  const [AA11, AA11S] = useImage(img[11]);
  const [AA12, AA12S] = useImage(img[12]);
  const [AA13, AA13S] = useImage(img[13]);
  const [AA14, AA14S] = useImage(img[14]);
  const [AA15, AA15S] = useImage(img[15]);
  const [AA16, AA16S] = useImage(img[16]);
  const [AA17, AA17S] = useImage(img[17]);
  const [AA18, AA18S] = useImage(img[18]);
  const [AA19, AA19S] = useImage(img[19]);

  const [AA20, AA20S] = useImage(img[20]);
  const [AA21, AA21S] = useImage(img[21]);
  const [AA22, AA22S] = useImage(img[22]);
  const [AA23, AA23S] = useImage(img[23]);
  const [AA24, AA24S] = useImage(img[24]);
  const [AA25, AA25S] = useImage(img[25]);
  const [AA26, AA26S] = useImage(img[26]);
  const [AA27, AA27S] = useImage(img[27]);
  const [AA28, AA28S] = useImage(img[28]);

  const newImages = Array.of(
    [AA1, AA1S],
    [AA2, AA2S],
    [AA3, AA3S],
    [AA4, AA4S],
    [AA5, AA5S],
    [AA6, AA6S],
    [AA7, AA7S],
    [AA8, AA8S],
    [AA9, AA9S],
    [AA10, AA10S],
    [AA11, AA11S],
    [AA12, AA12S],
    [AA13, AA13S],
    [AA14, AA14S],
    [AA15, AA15S],
    [AA16, AA16S],
    [AA17, AA17S],
    [AA18, AA18S],
    [AA19, AA19S],
    [AA20, AA20S],
    [AA21, AA21S],
    [AA22, AA22S],
    [AA23, AA23S],
    [AA24, AA24S],
    [AA25, AA25S],
    [AA26, AA26S],
    [AA27, AA27S],
    [AA28, AA28S],
  );
  return newImages;
};



const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = SwimArray();

  let index = Math.round(progress * 1 * (newImages.length - 1));

  if (index >= newImages.length) {
    index = newImages.length - 1;
  }

  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <Skeleton width="100%" height="100%" />;
    } else {
      return newImages.map((item, i) => (
        <span
          ref={ref}
          key={i}
          style={{
            display: i !== index ? "none" : "block",
            height: "100%",
            width: "100%",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      ));
    }
  }
});


export default ImageSequence;
