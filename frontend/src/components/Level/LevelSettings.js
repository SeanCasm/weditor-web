import React from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLevelConfig } from "../../hooks/useLevelConfig";
export const LevelSettings = ({ levelName, description }) => {
  const { onHideModal, status } = useLevelConfig();
  const { register } = useForm({ mode: "onChange" });
  const onDoneChanges = () => {
    onHideModal();
    //TODO:
  };

  return (
    <Modal show={status} onHide={onHideModal} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{levelName}</Modal.Title>
      </Modal.Header>
      <Form>
        <Form.Group  md="3" className="mb-3 p-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("description")}
            placeholder={description}
          />
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHideModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onDoneChanges}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
