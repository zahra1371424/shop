import React from "react";
import { Spinner } from "react-bootstrap";
import "./loadingComponent.styles.scss";

function LoadingComponent() {
  return (
    <div className="loading-div">
          <Spinner animation="grow" variant="primary" size="sm" />
          <Spinner animation="grow" variant="primary" size="sm" className="mx-2" />
          <Spinner animation="grow" variant="primary"  size="sm"/>
    </div>
  );
}

export default LoadingComponent;
