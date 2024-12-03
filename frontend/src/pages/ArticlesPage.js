import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Viewport from "../components/Viewport";

export const ArticlesPage = () => {
  const allCards = [
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

  function handleReadMore(){
    navigate("/reading");
  }

  return (
    <>
      <div className="content-container">
        <div className="section ">
          <h1 className="section-title">Articles</h1>
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
