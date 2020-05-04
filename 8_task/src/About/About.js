import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <Image
            style={{ width: "100%" }}
            src="https://source.unsplash.com/MbFC_LfZyJo"
            alt="person using laptop"
            rounded
          />
        </Col>
        <Col>
          <h2>About me</h2>Lorem ipsum dolorsit amet, consecteturadipiscingelit.
          Pellentesquescelerisqueeujustoquisscelerisque. Aeneanmolestiemagna non
          pharetra finibus. Sedelementumelitegetlacusvolutpattempor.
          Pellentesqueegestasjustosedluctussodales. Nam volutpat, nisi et
          aliquetmattis, estipsum dignissimeros, egetauctordolordiamvelelit.
          Sedet nequeullamcorper, fermentum estid, vulputateerat. Praesentvitae
          elementumsapien. Praesentnon erosa nuncdapibuselementumin in arcu. Nam
          pharetra suscipitex, at tempus ante viverrasit amet. Sedsemper ligula
          turpis, id vehiculaodioscelerisqueac. Vestibulum
          eleifendimperdietante, sit ametcommodoex feugiatet. Ut varius, dui
          velaliquamefficitur, estrisussuscipitligula, et variusjustolacuset
          ligula. Fuscevenenatisodioquisultricescongue.
          Aliquamconsecteturrhoncuslobortis. Nullamaliquamipsum vitae
          massafringilla, non pulvinar massaiaculis.Praesentid faucibusnunc.
          Donecet felissednislsagittisbibendumnon egettellus. Ut semper
          quisauguequistempus.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
