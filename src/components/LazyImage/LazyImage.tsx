import * as React from "react";
import "./LazyImage.css";
export const LazyImage = () => {
  React.useLayoutEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(
          entries,
          observer
        ) {
          entries.forEach(function(entry: any) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      }
    });
    return () => {};
  }, []);
  return (
    <>
      <img
        className="lazy"
        src="https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1508291830/jeremywagner.me/using-webp-images/tacos-1x.jpg"
        data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg"
        data-srcset="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg 2x, https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-1x.jpg 1x"
        width="385"
        height="108"
        alt="Some tacos."
      />
      <img
        className="lazy"
        src="https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png"
        data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png"
        data-srcset="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png 2x, https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/modem-1x.png 1x"
        width="320"
        height="176"
        alt="A 56k modem."
      />
      <img
        className="lazy"
        src="https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1509298941/jeremywagner.me/about/st-paul-1x.jpg"
        data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1509298941/jeremywagner.me/about/st-paul-2x.jpg"
        data-srcset="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1509298941/jeremywagner.me/about/st-paul-2x.jpg 2x, https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1509298941/jeremywagner.me/about/st-paul-1x.jpg 1x"
        width="400"
        height="267"
        alt="A city skyline."
      />
    </>
  );
};
