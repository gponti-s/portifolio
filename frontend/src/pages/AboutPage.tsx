import React from "react";

export const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <div className="mx-5 section section-black section-grid glass-effect">
        <div>
          <h1 className="section-title">About Us</h1>
          <img
            className="float-end img-thumbnail imgshadow m-3"
            src="data:image/jpeg;base64,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"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it?.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it?.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 

          </p>
        </div>
      </div>
      <div className="section section-gray mx-5 glass-effect">
        <h2 className="section-title">Our Mission</h2>
        <p>
          TLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like)."Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?".
        </p>
      </div>
      <div className="section-grid mx-5">
        <div className="section section-black glass-effect">
          <h2 className="section-title">Contact Us</h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </div>
        <div className="section section-gray glass-effect">
          <h2 className="section-title">Title</h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </div>
      </div>
    </div>
  );
};
