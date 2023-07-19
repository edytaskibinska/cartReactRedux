import React from "react";
import "./Banner.scss";

interface IBaner {
  alt: string;
  src: string;
  className?: string;
}

const Baner: React.FC<IBaner> = ({ alt, src, className }) => (
  <div className="bannerContainer">
    <img className={`banner ${className}`} alt={alt} src={src} />
  </div>
);

export default Baner;
