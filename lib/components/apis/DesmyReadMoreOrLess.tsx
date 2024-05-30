import React, { useState, ReactNode } from "react";

interface ReadMoreProps {
  charLimit: number;
  children: ReactNode;
}

const DesmyReadMoreOrLess: React.FC<ReadMoreProps> = ({ charLimit, children }) => {
  const text = children as string;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="text">
      {text.length <= charLimit ? text : isReadMore ? text.slice(0, charLimit) : text}
      {text.length > charLimit && (
        <span onClick={toggleReadMore} className="read-or-hide font-bold">
          {isReadMore ? '...read more' : ' show less'}
        </span>
      )}
    </div>
  );
};

export {DesmyReadMoreOrLess};
