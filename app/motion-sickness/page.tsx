"use client";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState, useCallback } from "react";

const ImageMover: React.FC = () => {
  const images = [
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F351d110c-0a80-403b-9176-fcb6f1f34e08%2F970989added39a521f3978dfbd038fae-removebg-preview.png?table=block&id=e093d62c-4c3b-4b02-a304-040863674b54&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=860&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F60025c9b-399a-46d8-8652-650d2b39ea6d%2F3ed3aab5a224d9acc66c5a2cd75d3619-removebg-preview.png?table=block&id=788289ff-bb99-4fbe-91e6-233bed13fb79&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=660&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F63bca232-83e3-4114-8de3-908c343726c5%2F5ee097276ab93e25c75896a03f492209-removebg-preview.png?table=block&id=26a3a3ec-9e41-4178-8c01-808d019725dd&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=660&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F041d757f-81c6-462f-9284-65688ba961b8%2F5eab5c18376a0ad8833597d3428429d3-removebg-preview.png?table=block&id=170d8a84-ac53-46ff-903f-47d2bbecc0c5&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=900&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F9f81a858-36d8-487c-9d08-740984b64780%2F06192525abfbc022e3a5d8c8959a2a6f-removebg-preview.png?table=block&id=c9361c42-4f34-40bf-8c41-edb2d75e6a06&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=820&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F66d88610-f1b1-4c3e-b735-5fdde47cbc5b%2F8e5681fa8dcdf50f9becb52d5566a751-removebg-preview.png?table=block&id=5f7de0ab-dd49-4fc5-b085-148866b4633a&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=920&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F39cecbfb-56d5-4194-bafb-96347851e299%2Fb7447f67e19a259e89b3a8dc86b6b799-removebg-preview.png?table=block&id=ea106f21-3eab-4090-8ef0-741a9c37d5b1&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=660&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2Fed66f333-a388-4ea3-aae2-6424306a0186%2Fa38d54cc401d1ba7d34d268c47657ccf-removebg-preview.png?table=block&id=6c24dbcd-8c08-4f24-90a4-8f2218a7a767&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=710&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2F0a98680d-02d2-4b5c-9591-5792ae2b256c%2Ff8d0adb16dbc39ed1547d7cb40bd4ee7-removebg-preview.png?table=block&id=e1aae0ce-cc75-4e6c-90ff-b3f069b14ce1&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=1130&userId=&cache=v2",
    "https://coral-mountain-fb2.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5021e59a-e670-430d-9ef9-76dd9ae12d7b%2Feca2e39d-0f86-4807-b45c-44a3d59533d6%2F6a20ea6677d715f924dbe523e2264a51-removebg-preview.png?table=block&id=924899c9-2b83-4756-8a2c-2f9b13b1fd8d&spaceId=5021e59a-e670-430d-9ef9-76dd9ae12d7b&width=660&userId=&cache=v2",
  ];

  const maxNumberOfImages = images.length / 2;
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [steps, setSteps] = useState(0);
  const [nbOfImages, setNbOfImages] = useState(0);

  useEffect(() => {
    // Pre-allocate refs array for images
    imageRefs.current = imageRefs.current.slice(0, images.length);
  }, []);

  const manageMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const movementX = e.movementX;
      const movementY = e.movementY;
      const newSteps = steps + Math.abs(movementX) + Math.abs(movementY);
      setSteps(newSteps);

      if (newSteps >= currentIndex * 250) {
        moveImage(e.clientX, e.clientY);
        if (nbOfImages === maxNumberOfImages) {
          removeImage();
        }
      }

      if (currentIndex === imageRefs.current.length) {
        setCurrentIndex(0);
        setSteps(-250);
      }
    },
    [currentIndex, steps, nbOfImages],
  );

  const moveImage = useCallback(
    (x: number, y: number) => {
      const currentImage = imageRefs.current[currentIndex];
      if (currentImage) {
        currentImage.style.left = `${x}px`;
        currentImage.style.top = `${y}px`;
        currentImage.style.display = "block";
        setCurrentIndex(currentIndex + 1);
        setNbOfImages(nbOfImages + 1);
        setZIndex();
      }
    },
    [currentIndex, nbOfImages],
  );

  const setZIndex = useCallback(() => {
    const visibleImages = getCurrentImages();
    visibleImages.forEach((img, i) => {
      if (img) {
        img.style.zIndex = `${i}`;
      }
    });
  }, [currentIndex, nbOfImages]);

  const removeImage = useCallback(() => {
    const visibleImages = getCurrentImages();
    const firstImage = visibleImages[0];
    if (firstImage) {
      firstImage.style.display = "none";
    }
    setNbOfImages(nbOfImages - 1);
  }, [currentIndex, nbOfImages]);

  const getCurrentImages = useCallback(() => {
    let images = [];
    let indexOfFirst = currentIndex - nbOfImages;
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i < 0 ? i + imageRefs.current.length : i;
      images.push(imageRefs.current[targetIndex]);
    }
    return images;
  }, [currentIndex, nbOfImages]);

  return (
    <motion.div
      onMouseMove={manageMouseMove}
      className=" relative overflow-hidden bg-gray-900 text-zinc-800"
    >
      <div className="w-full py-4 px-8 bg-white  font-bold text-lg font-clash overflow-hidden fixed z-50">
        <nav className="flex justify-between items-center">
          <h1 className="font-black text-2xl">MOTION SICKNESS {}</h1>
          <div>
            <a href="#home" className="px-4">
              WORK
            </a>
            <a href="#about" className="px-4">
              ABOUT
            </a>
            <a href="#contact" className="px-4">
              CONTACT
            </a>
          </div>
        </nav>
      </div>
      {Array.from({ length: images.length }, (_, index) => (
        <motion.img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="absolute w-2/5 h-2/5 object-contain hidden -translate-x-1/2 -translate-y-1/2"
          src={images[index % images.length]}
        />
      ))}
      <div className="w-full min-h-screen flex justify-center items-center bg-neutral-200 z-40">
        <h1 className="text-[7rem] font-black z-20 ">JUST AESTHETICS</h1>
      </div>
    </motion.div>
  );
};

export default ImageMover;
