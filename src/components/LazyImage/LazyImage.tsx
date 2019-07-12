import * as React from "react";
import "./LazyImage.css";

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
 * 创建一个IntersectionObsever对象，并传入对象的参数和回调函数，
 * 该回调函数会在目标(target)和根元素(root)的交集大小超过阈值(threshold)规定的大小被执行
 * @eg var options ={
 *      root : document.querySelector('#scrollArea')
 *      rootMargin : '0px'
 *      threshold : 1
 *    }
 *    var obsever = new IntersectionObsever(callback,option)
 *
 *    root : 指定根元素，用于检查目标元素的可见性。必须是目标元素的父元素。如果未指定或者null, 则默认为浏览器视窗
 *    rootMargin : root元素的外边距，类似于css 中的margin 属性.该属性是用作root 元素和target 元素发生交集时候计算
 *    交集的范围
 *    threshold : 可以是单一的number 或者是元素为number 的数组， target 元素和root 元素相交程度达到该值的时候
 *    IntersectionObserver 注册的回调函数将会被执行。 如果只要探测当target 元素在root 元素中超过50%的时候。则0.5.
 *    如果想要target 元素在root 元素中的可见程度每多25%就执行一次回调，则指定[0,0.25,0.5,0.75, 1]。默认是0(只要target出现在root)
 *
 *
 */

export const LazyImage = () => {
  React.useLayoutEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
      if ("IntersectionObserver" in window) {
        // root 浏览器窗口
        let lazyImageObserver = new IntersectionObserver(function(
          entries,
          observer
        ) {
          // entries 描述了目标元素与根元素容器在某一特定过度时刻的交叉状态。
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
          // target element is lazyImage
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
