import Card from "../components/Card";
import Viewport from "../components/Viewport";

export const ArticlesPage = () => {
  const allCards = [
    { cadTitle: 'First Title', cardSummary: 'Big very big text teste teste teet tes teste ets test tse teset ', cardImage: '...', cardButtonText: 'Read More' },
    { cadTitle: 'Second Title', cardSummary: '', cardImage: '..', cardButtonText: 'Read More' },
    { cadTitle: 'Third Title - long long long title', cardSummary: '', cardImage: '...', cardButtonText: 'Read More' },
    { cadTitle: 'Fourth Title', cardSummary: '', cardImage: '...', cardButtonText: 'Read More' },
  ];

  return (
    <Viewport>
      <div className="content-container">
        <h1>In Construction - ArticlePage</h1>
        <br />
        <div className="row">
          {
            allCards.map((card, index) => (
              <div className="veiwport-content col-sm-4 d-flex justify-content-around" key={index}>
                <Card cardTitle={card.cadTitle} cardSummary={card.cardSummary} cardButtonText={card.cardButtonText} />
              </div>
            ))
          }
        </div>
      </div>
    </Viewport>
  );
};
