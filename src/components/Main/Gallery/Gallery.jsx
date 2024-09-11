import React, { useState, useEffect } from 'react';
import './Gallery.css'; // สร้างไฟล์ CSS สำหรับ Gallery

const PLACEHOLD_IMAGE_URL = 'https://placehold.co'; // URL หลัก
const TAGS = ['Coffee', 'Tea', 'Milk', 'Dessert', 'Bakery']; // ตัวอย่างคำสำคัญ

const generateRandomTags = () => {
  const randomTags = [];
  for (let i = 0; i < 3; i++) {
    randomTags.push(TAGS[Math.floor(Math.random() * TAGS.length)]);
  }
  return [...new Set(randomTags)]; // ทำให้คำสำคัญไม่ซ้ำกัน
};

const generatePrice = () => {
  return `฿${(Math.random() * 20 + 5).toFixed(2)}`; // สุ่มราคา $5 - $25
};

const images = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  src: `${PLACEHOLD_IMAGE_URL}/${Math.floor(Math.random() * 500) + 200}x${Math.floor(Math.random() * 500) + 200}/cccccc/000000?text=Image`,
  tags: generateRandomTags(),
  price: generatePrice(),
  title: `Item ${index + 1}`,
}));

const Gallery = () => {
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 10));
  const [selectedTag, setSelectedTag] = useState(null);

  const loadMoreImages = () => {
    setDisplayedImages((prevImages) => [
      ...prevImages,
      ...images.slice(prevImages.length, prevImages.length + 10),
    ]);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const filteredImages = selectedTag
    ? displayedImages.filter((image) => image.tags.includes(selectedTag))
    : displayedImages;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">

      <div className="gallery-container text-center">
        <h2 className="text-4xl mt-5 mb-12 font-bold text-[#352926]">Menu Gallery</h2>
        <div className="tags mb-12">
          {TAGS.map((tag) => (
            <button
              key={tag}
              className={`tag-btn ${selectedTag === tag ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-card">
              <img src={image.src} alt={`Gallery ${image.id}`} className="gallery-image" />
              <div className="gallery-card-body">
                <h2 className="gallery-title">{image.title}</h2>
                <p className="gallery-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, quis!</p>
                <div className="gallery-price-container">
                  <h1 className="gallery-price">{image.price}</h1>
                  <button className="add-order-btn">
                    <i className="fas fa-shopping-cart"></i> Add Order
                  </button>
                </div>
                <div className="gallery-tags">
                  {image.tags.map((tag, index) => (
                    <span key={index} className="gallery-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
