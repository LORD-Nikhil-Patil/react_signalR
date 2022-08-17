import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addNewPresentaionTemplateHook } from "./hooks";
import Alert from "react-bootstrap/Alert";

export const PresentaionTemplateForm = () => {
  const { createPresentationTemlplate, owLanguage, errors } =
    addNewPresentaionTemplateHook();
  return (
    <div className="PageShown amRemove">
      <div className="portlet" style={{ marginBottom: "0 " }}>
        {errors.PresentationTempError && (
          <Alert variant="danger">{errors.PresentationTempError}</Alert>
        )}
        <div className="portlet-body form">
          <Form
            onSubmit={createPresentationTemlplate.handleSubmit}
            className="form-horizontal form-row-seperated"
          >
            <div className="form-body-new" style={{ padding: "50px" }}>
              <Form.Group className="mb-3">
                <Form.Label controlid="description">Description</Form.Label>
                <Form.Control
                  name="description"
                  id="description"
                  type="text"
                  onChange={createPresentationTemlplate.handleChange}
                  onBlur={createPresentationTemlplate.handleBlur}
                  value={createPresentationTemlplate.values.description}
                />
                <Form.Text id="passwordHelpBlock">
                  {createPresentationTemlplate.touched.description &&
                  createPresentationTemlplate.errors.description ? (
                    <p style={{ color: "red" }}>
                      {createPresentationTemlplate.errors.description}
                    </p>
                  ) : null}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label controlid="selectLanguage">Language</Form.Label>
                <Form.Select
                  id="Language"
                  name="Language"
                  onChange={createPresentationTemlplate.handleChange}
                  onBlur={createPresentationTemlplate.handleBlur}
                >
                  {owLanguage.map((lang) => (
                    <option key={lang.owLanguageId} value={lang.owLanguageId}>
                      {lang.language}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  inline
                  type="checkbox"
                  label="Active"
                  name="active"
                  id="active"
                  onChange={createPresentationTemlplate.handleChange}
                  onBlur={createPresentationTemlplate.handleBlur}
                  checked={createPresentationTemlplate.values.active}
                />
              </Form.Group>
              <Button
                variant="primary"
                style={{ marginLeft: "25px", float: "right" }}
                type="submit"
              >
                Save
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
