import { useState, useRef } from "react";
import { Modal } from "flowbite-react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useContext } from "react";
import { LoaderContext } from "src/contexts/loader-context";

const TO_RADIANS = Math.PI / 180;

async function canvasPreview(image, crop, scale = 1, rotate = 0) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio;
  // const pixelRatio = 1

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY);
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY);
  // 3) Rotate around the origin
  ctx.rotate(rotateRads);
  // 2) Scale the image
  ctx.scale(scale, scale);
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  );

  ctx.restore();
  return canvas;
}

const CropTool = ({
  imageObj,
  openModal,
  setOpenModal,
  onSaveCrop,
  aspectRatio = 1,
  cropShape = "circular",
}) => {
  const { toggleLoader } = useContext(LoaderContext);
  const fileName = imageObj.fileName;
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState({
    unit: "px",
    width: 144,
    height: 144,
  });
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect] = useState(aspectRatio);
  const [shape] = useState(cropShape);
  const imgRef = useRef();
  const formRef = useRef();

  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "px",
          width: 144,
          height: 144,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    );
  }
  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  const determineQuality = (originalImage, croppedImage) => {
    // Calculate the size of the original and cropped images
    const originalSize =
      originalImage.naturalWidth * originalImage.naturalHeight;
    const croppedSize = croppedImage.width * croppedImage.height;

    let quality;

    // Determine the ratio of the cropped size to the original size
    const sizeRatio = croppedSize / originalSize;
    console.log("originalImage: ", originalImage);
    console.log("croppedImage: ", croppedImage);
    console.log("originalSize: ", originalSize);
    console.log("croppedSize: ", croppedSize);
    console.log("sizeRatio: ", sizeRatio);

    if (croppedSize > 2000 * 2000) {
      quality = 50;
    } else if (sizeRatio < 0.1) {
      // If the cropped image is much smaller than the original
      quality = 90; // Higher quality for smaller crops
    } else if (sizeRatio > 0.5) {
      // If the crop is still a large portion of the original
      quality = 70; // Lower quality for larger crops
    } else {
      quality = 80; // Default or medium quality
    }

    // Return the quality as a decimal
    return quality / 100;
  };

  const getCroppedImg = async () => {
    const image = imgRef.current;
    const previewCanvas = await canvasPreview(
      image,
      completedCrop,
      scale,
      rotate,
    );
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height,
    );
    const croppedWidth = completedCrop.width * scaleX;
    const croppedHeight = completedCrop.height * scaleY;
    const blob = await offscreen.convertToBlob({
      type: "image/png",
      quality: determineQuality(image, {
        width: croppedWidth,
        height: croppedHeight,
      }),
    });
    blob.name = fileName;
    return blob;
  };
  const handleSaveCropped = async () => {
    toggleLoader(true, "Cropping the Photo, Please wait...");
    const croppedImage = await getCroppedImg();
    toggleLoader();
    onSaveCrop(croppedImage);
  };

  useEffect(() => {
    setScale(1);
    setRotate(0);
  }, [imageObj.src]);

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"2xl"}>
        <div className="flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5">
          <h3
            id=":r3b:"
            className="text-xl font-medium text-gray-900 dark:text-white"
          >
            Image Crop Tool
          </h3>
        </div>
        <Modal.Body>
          <div>
            <div className="mb-4 hidden">
              <form className="max-w-sm" ref={formRef}>
                <div className="flex items-center gap-4">
                  <div className="mb-5 flex items-center">
                    <label
                      htmlFor="scale"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Scale
                    </label>
                    <input
                      id="scale"
                      type="number"
                      step="0.1"
                      value={scale}
                      disabled={!imageObj.src}
                      onChange={(e) => setScale(Number(e.target.value))}
                      className="max-w-32 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 mx-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-5 flex items-center">
                    <label
                      htmlFor="rotate"
                      className="block text-base font-medium text-gray-900 dark:text-white"
                    >
                      Rotate
                    </label>
                    <input
                      id="rotate"
                      type="number"
                      value={rotate}
                      disabled={!imageObj.src}
                      onChange={(e) =>
                        setRotate(
                          Math.min(180, Math.max(-180, Number(e.target.value))),
                        )
                      }
                      className="max-w-32 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 mx-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div>
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                // minWidth={400}
                minHeight={100}
                circularCrop={shape === "circular" ? true : false}
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imageObj.src}
                  style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={"justify-end"}>
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-accent-700 :ring-accent-700 focus:text-accent-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 rounded-lg focus:ring-2"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              Cancel
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleSaveCropped(false)}
            className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-accent border border-transparent enabled:hover:bg-primary focus:ring-accent dark:bg-accent-600 dark:enabled:hover:bg-accent dark:focus:ring-accent-800 rounded-lg focus:ring-2"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              Crop
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CropTool.propTypes = {
  imageObj: PropTypes.object.isRequired,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  onSaveCrop: PropTypes.func.isRequired,
  aspectRatio: PropTypes.number,
  cropShape: PropTypes.string,
};
export default CropTool;
