import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import "./Hello.css";
import { API } from "aws-amplify";
import { onError } from "../lib/errorLib";

export default function Hello() {
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return true;
  }

  function getSample() {
    return API.get("spotify-tracker", "/hello", {});
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const resp = await getSample();
      console.log(resp);
      setIsLoading(false);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Hello">
      <Form onSubmit={handleSubmit}>
        <LoaderButton
          size="lg"
          type="submit"
          variant="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Get
        </LoaderButton>
      </Form>
    </div>
  );
}
