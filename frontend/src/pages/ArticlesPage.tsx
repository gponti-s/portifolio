import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export const ArticlesPage: React.FC = () => {
  const allCards: Array<{
    cadTitle: string;
    cardSummary: string;
    cardImage: string;
    cardButtonText: string;
  }> = [
    {
      cadTitle: "First Title",
      cardSummary:
        "Big very big text teste teste teet tes teste ets test tse teset ",
      cardImage: "...",
      cardButtonText: "Read More",
    },
    {
      cadTitle: "Second Title",
      cardSummary: "",
      cardImage: "..",
      cardButtonText: "Read More",
    },
    {
      cadTitle: "Third Title - long long long title",
      cardSummary: "",
      cardImage: "...",
      cardButtonText: "Read More",
    },
    {
      cadTitle: "Fourth Title",
      cardSummary: "",
      cardImage: "...",
      cardButtonText: "Read More",
    },
  ];

  const navigate = useNavigate();

  function handleReadMore(): void {
    navigate("/reading");
  }

  return (
    <>
      <div className="container">
        <div className="section section-black glass-effect">
          <h3 className="section-title">Articles</h3>
          <p>In this page you going to find all articles</p>
        </div>
        <div className="row">
          {allCards.map((card, index) => (
            <div
              className="veiwport-content col-sm-4 d-flex justify-content-around"
              key={index}
            >
              <Card
                cardTitle={card.cadTitle}
                cardSummary={card.cardSummary}
                cardButtonText={card.cardButtonText}
                onButtonClick={handleReadMore}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
