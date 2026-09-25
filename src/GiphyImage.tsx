import React, { useState, useEffect } from 'react';

interface GiphyImageProps {
  name: string;
}

const GiphyImage: React.FC<GiphyImageProps> = ({ name }) => {

  const [giphyUrl, setGiphyUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {

    const giphyApi = '//api.giphy.com/v1/gifs/search?api_key=fmjyHqsFAjWcizdrcOYoRgQ3Q98gq7Ei&limit=1&q=';

    setIsLoading(true);

    fetch(giphyApi + name)
      .then(response => response.json())
      .then(response => {

        if (response.data.length > 0) {
          setGiphyUrl(response.data[0].images.original.url);
        } else {
          // cuando no se encuentran imágenes
          setGiphyUrl('//media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif');
        }

        setIsLoading(false);
      });

  }, [name]);

  if (isLoading) {
    return <p>Loading image...</p>;
  }

  if (!giphyUrl) {
  return null;
}
  return (
    <img src={giphyUrl} alt={name} width="200" loading="lazy" />
  );
};

export default GiphyImage;
