import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Description from "./components/Description/Description";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import Feedback from "./components/Feedback/Feedback";
import QuestionAndAnswer from "./components/QAndA/QuestionAndAnswer";
import { AxiosClient } from "../../services/API/axiosConnection";
import localApiName from "../../services/API/axiosEndPoint";
import SmartphoneInfo from "./components/SmartphoneInfo/SmartphoneInfo";
import LoadingPageComponent from "../../components/Loading/LoadingPage";

export const ProductDetail = () => {
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    color: "",
    capacity: "",
    quantity: 1,
    priceIndex: 0,
  });
  const [render, setRender] = useState("description");
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [comments, setComments] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);

  async function fetchProductApi() {
    const { data } = await AxiosClient.get(localApiName.apiProduct);
    setProducts(data);
    setLoadingPage(false);
  }

  async function fetchFeedBackApi() {
    const { data } = await AxiosClient.get(localApiName.apiFeedback);
    data.map((item, index) => {
      if (item.id_product === id) setFeedbacks(item);
    });
  }

  async function fetchCommentApi() {
    const { data } = await AxiosClient.get(localApiName.apiComment);
    data.map((item) => {
      if (item.id_product === id) setComments(item);
    });
  }

  useEffect(() => {
    fetchProductApi();
    fetchFeedBackApi();
    fetchCommentApi();
  }, []);

  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {loadingPage ? (
        <LoadingPageComponent loading={loadingPage} />
      ) : (
        <>
          {/* SMARTPHONE-INFO */}
          <SmartphoneInfo
            products={products}
            id={id}
            inputs={inputs}
            setInputs={setInputs}
          />

          {/* Information-list */}
          <Container fluid>
            <div className="information__list">
              <ul className="information__list-tabs d-flex">
                {render === "description" ? (
                  <li
                    className="tab-item active"
                    onClick={() => setRender("description")}
                  >
                    Mô tả
                  </li>
                ) : (
                  <li
                    className="tab-item "
                    onClick={() => setRender("description")}
                  >
                    Mô tả
                  </li>
                )}
                {render === "extraInfo" ? (
                  <li
                    className="tab-item active"
                    onClick={() => setRender("extraInfo")}
                  >
                    Thông tin bổ sung
                  </li>
                ) : (
                  <li
                    className="tab-item "
                    onClick={() => setRender("extraInfo")}
                  >
                    Thông tin bổ sung
                  </li>
                )}
                {render === "feedback" ? (
                  <li
                    className="tab-item active"
                    onClick={() => setRender("feedback")}
                  >
                    Đánh giá
                  </li>
                ) : (
                  <li
                    className="tab-item "
                    onClick={() => setRender("feedback")}
                  >
                    Đánh giá
                  </li>
                )}
                {render === "Q&A" ? (
                  <li
                    className="tab-item active"
                    onClick={() => setRender("Q&A")}
                  >
                    Hỏi và đáp
                  </li>
                ) : (
                  <li className="tab-item" onClick={() => setRender("Q&A")}>
                    Hỏi và đáp
                  </li>
                )}
                {/* <li className="tab-item" onClick={() => setRender("extraInfo")}>
                  Thông tin bổ sung
                </li>
                <li className="tab-item" onClick={() => setRender("feedback")}>
                  Đánh giá
                </li>
                <li className="tab-item" onClick={() => setRender("Q&A")}>
                  Hỏi và đáp
                </li> */}
              </ul>
              <hr />
            </div>
            {render === "description" && (
              <Description productItem={products} idProduct={id} />
            )}
            {render === "extraInfo" && <ExtraInfo idProduct={id} />}
            {render === "feedback" && <Feedback feedbacks={feedbacks} />}
            {render === "Q&A" && <QuestionAndAnswer comments={comments} />}
          </Container>
        </>
      )}

      {/* FOOTER */}
      <Footer />
    </>
  );
};
