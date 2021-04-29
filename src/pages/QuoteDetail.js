import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
