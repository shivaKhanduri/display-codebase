import React, { useRef, useEffect, useState } from "react";

interface BoxProps {
  heading: string;
  className?: string;
  isAdvantage?: boolean;
  imageUrl?: string;
}

const Box: React.FC<BoxProps> = ({
  heading,
  className,
  isAdvantage,
  imageUrl,
}: BoxProps) => {
  const additionalClass = isAdvantage ? "advantage" : "";
  const marginTopValue = isAdvantage ? "20px" : "50px";

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isAdvantage) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.2,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [isAdvantage]);

  return (
    <div
      ref={ref}
      className={`box ${className} ${additionalClass} ${
        !isAdvantage && isVisible ? "visible" : ""
      }`}
      style={{ marginTop: marginTopValue }}
    >
      {!isAdvantage && imageUrl ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src={imageUrl}
            alt='Box related'
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      ) : null}
      <div className={`${isAdvantage && "d-flex"}`}>
      <h2 className={`fw-bold text-white ${isAdvantage && "align-self-end"}`}
      >
        {heading}
      </h2>
      </div>
    </div>
  );
};

export default Box;
