// src/utils/importImages.js
export const importAllImages = async () => {
  const context = import.meta.glob('../assets/images/Carrousel/*.{png,jpg,jpeg,svg,webp}');
  const images = await Promise.all(
    Object.keys(context).map(async (key) => {
      const module = await context[key];
      return module.default;
    })
  );
  console.log(images);
  
  return images;
};

export const images = importAllImages();