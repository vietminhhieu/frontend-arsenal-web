import React from "react";
import "./QuestionAndAnswer.scss";
import { Row, Col, Button, Form } from "react-bootstrap";
import { QuestionAnswer } from "@material-ui/icons";

const QuestionAndAnswer = ({ comments }) => {
  return (
    <Row className="qa">
      <Form className="qa_form">
        <Form.Group className="mb-3">
          <Form.Label style={{ marginBottom: "0.5rem" }}>
            Hỏi và đáp:
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Xin mời để lại câu hỏi, Hiếu Viết Store sẽ trả lời ngay trong 1h, các câu hỏi sau 22h - 8h sẽ được trả lời vào sáng hôm sau."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gửi đi
        </Button>
      </Form>
      <Col className="qa_info">
        {comments.commentContent.map((item, index) => {
          const distanceOfLength =
            comments.commentContent.length - comments.response.length;
          // console.log("distanceOfLength", distanceOfLength);
          return (
            <Col className=" qa_info-item d-flex" key={index}>
              <img src={comments.customerAvatar} alt="" height={50} />

              <div className="main-content ">
                <div className="first-line d-flex">
                  <div className="customer-name">
                    {comments.customerName[index]}
                  </div>
                  <div className="submitted-time">
                    {comments.commentTime[index]}
                  </div>
                </div>
                <div className="second-line ">
                  <div className="qa-content">
                    {comments.commentContent[index]}
                    <div className="answer-btn">
                      <QuestionAnswer />
                      <span>Trả lời</span>
                    </div>
                  </div>
                </div>

                {/* Handle response */}
                {comments.commentContent.length ===
                  comments.response.length && (
                  <Col className=" qa_info-item d-flex" key={index}>
                    <img src={comments.adminAvatar} alt="" height={50} />

                    <div className="main-content ">
                      <div className="first-line d-flex">
                        <div className="customer-name">
                          {comments.adminName}
                        </div>
                        <div className="submitted-time">
                          {comments.commentTime[index]}
                        </div>
                      </div>
                      <div className="second-line ">
                        <div className="qa-content">
                          {comments.response[index]}
                          <div className="answer-btn">
                            <QuestionAnswer />
                            <span>Trả lời</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                )}

                {comments.commentContent.length !== comments.response.length &&
                  index >= distanceOfLength && (
                    <Col className=" qa_info-item d-flex" key={index}>
                      <img src={comments.adminAvatar} alt="" height={50} />

                      <div className="main-content ">
                        <div className="first-line d-flex">
                          <div className="customer-name">
                            {comments.adminName}
                          </div>
                          <div className="submitted-time">
                            {comments.commentTime[index]}
                          </div>
                        </div>
                        <div className="second-line ">
                          <div className="qa-content">
                            {comments.response[index - distanceOfLength]}
                            <div className="answer-btn">
                              <QuestionAnswer />
                              <span>Trả lời</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )}
              </div>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
};

export default QuestionAndAnswer;
