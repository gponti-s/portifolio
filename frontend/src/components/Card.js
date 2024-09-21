function Card({cardTitle, cardSummary, cardButtonText}) {
  return (
    <div className="viewport card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width: "18rem"}}>
      <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..#.." />
      <div className="card-body ">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">
          {cardSummary}
        </p>
        <a href="" className="btn btn-secondary">
          {cardButtonText}
        </a>
      </div>
    </div>
  );
}
export default Card;
