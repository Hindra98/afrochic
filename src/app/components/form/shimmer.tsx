import "../../styles/components/_shimmer.scss";

export const ShimmerText = () => {
  return (
    <div className="container">
      <article>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="shimmer"></div>
      </article>
    </div>
  );
};

export const ShimmerBox = () => {
  return (
    <div className="container">
      <article>
        <div className="block"></div>
        <div className="shimmer"></div>
      </article>
    </div>);
};
