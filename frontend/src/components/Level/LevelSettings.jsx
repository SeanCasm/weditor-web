import React from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { useLevelConfig } from "../../hooks/useLevelConfig";
export const LevelSettings = ({ levelData }) => {
  const {
    onHideModal,
    status,
    onDoneChanges,
    levelName,
    description,
    onDelete,
    deleteOption,
    setDeleteOption,
  } = useLevelConfig();
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmit = ({ description }, e) => {
    e.preventDefault();
    levelData.description = description;
    onDoneChanges(levelData);
  };

  const handleOnDelete = () => {
    setDeleteOption(true);
  };

  return (
    <Modal show={status} onHide={onHideModal} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{levelName}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group md="3" className="mb-3 p-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("description")}
            placeholder={description}
          />
        </Form.Group>
        {deleteOption &&
          deleteMsg(() => {
            onDelete(levelData);
          }, setDeleteOption)}
        <Modal.Footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6 col-sm-3">
                <Button variant="danger" onClick={handleOnDelete}>
                  <img
                    width={20}
                    src="https://cdn-icons-png.flaticon.com/128/867/867599.png?ga=GA1.2.1917655979.1659037910"
                    alt="delete trash"
                  />
                </Button>
              </div>
              <div className="col-6 col-sm-3">
                <Button variant="primary" type="submit">
                  Done
                </Button>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
LevelSettings.propTypes = {
  levelData: PropTypes.object,
};
const deleteMsg = (onDelete, setDeleteOption) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-danger">
          Are you sure you want to <strong>DELETE</strong> this level?
        </h2>
        <br />
        <ButtonGroup>
          <Button
            onClick={() => {
              onDelete();
            }}
            variant="danger"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setDeleteOption(false);
            }}
            variant="secondary"
          >
            No
          </Button>
        </ButtonGroup>
      </div>
      <br />
    </>
  );
};
