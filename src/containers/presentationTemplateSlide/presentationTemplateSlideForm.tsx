import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { presentationSlideForm } from "./hooks";

export const PresentationTemplateSlideForm = () => {
  const { createPresentationTemlplateSlide, errors } = presentationSlideForm();
  return (
    <div className="PageShown amRemove">
      <div className="portlet" style={{ marginBottom: "0 " }}>
        {errors.PresentationTempSlideError && (
          <Alert variant="danger">{errors.PresentationTempSlideError}</Alert>
        )}
        <div className="portlet-body form">
          <Form
            onSubmit={createPresentationTemlplateSlide.handleSubmit}
            className="form-horizontal form-row-seperated"
          >
            <div className="form-body-new" style={{ padding: "50px" }}>
              <Form.Group className="mb-3">
                <Form.Label controlid="selectLanguagepresentation">
                  Presentation Template Id
                </Form.Label>
                <Form.Select
                  id="presentationTemplateId"
                  name="presentationTemplateId"
                  onChange={createPresentationTemlplateSlide.handleChange}
                  onBlur={createPresentationTemlplateSlide.handleBlur}
                >
                  <option>0</option>
                  <option>1</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label controlid="slideNo">Slide No</Form.Label>
                <Form.Control
                  id="slide"
                  name="slide"
                  type="number"
                  placeholder="Slide No"
                  onChange={createPresentationTemlplateSlide.handleChange}
                  onBlur={createPresentationTemlplateSlide.handleBlur}
                  value={createPresentationTemlplateSlide.values.slide}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label controlid="partNo">Part No</Form.Label>
                <Form.Control
                  id="partNo"
                  name="partNo"
                  type="number"
                  placeholder="Part No"
                  onChange={createPresentationTemlplateSlide.handleChange}
                  onBlur={createPresentationTemlplateSlide.handleBlur}
                  value={createPresentationTemlplateSlide.values.partNo}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label controlid="description">Description</Form.Label>
                <Form.Control
                  name="description"
                  id="description"
                  type="text"
                  onChange={createPresentationTemlplateSlide.handleChange}
                  onBlur={createPresentationTemlplateSlide.handleBlur}
                  value={createPresentationTemlplateSlide.values.description}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label controlid="Html">Html</Form.Label>
                <Form.Control
                  name="html"
                  id="html"
                  as="textarea"
                  style={{ height: "100px" }}
                  onChange={createPresentationTemlplateSlide.handleChange}
                  onBlur={createPresentationTemlplateSlide.handleBlur}
                  value={createPresentationTemlplateSlide.values.html}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  inline
                  type="checkbox"
                  label="Active"
                  name="active"
                  id="active"
                  onChange={createPresentationTemlplateSlide.handleChange}
                  onBlur={createPresentationTemlplateSlide.handleBlur}
                  checked={createPresentationTemlplateSlide.values.active}
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
