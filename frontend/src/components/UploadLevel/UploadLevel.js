import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLevel } from "../../hooks/useLevel";
export const UploadLevel = () => {
  const { message, startUpload } = useLevel();
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      setFiles(e.target.result);
      const fileName = file.name.replace(".json", "");
      setValue("levelName", fileName);
    };
  };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (levelData, e) => {
    e.preventDefault();
    levelData.file = files;
    startUpload(levelData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Col} md="3" className="mb-3">
        <Form.Label>Level name</Form.Label>
        <Form.Control {...register("levelName")} type="text" disabled />
        <span className="text-danger d-block mb-3">
          {errors?.levelName?.message}
        </span>

        <Form.Label>Level file</Form.Label>
        <Form.Control
          {...register("file")}
          onChange={handleChange}
          type="file"
        />
        <span className="text-danger d-block mb-3">
          {errors?.file?.message}
        </span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("description")}
            type="text"
          />
          <span className="text-danger d-block mb-3">
            {errors?.description?.message}
          </span>
        </Form.Group>
      </Form.Group>
      {message === "Upload done" ? (
        <span className="text-success d-block mb-3">{message}</span>
      ) : (
        <span className="text-danger d-block mb-3">{message}</span>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
const SignupSchema = yup.object().shape({
  levelName: yup.string().required("Your level name is required"),
  file: yup
    .mixed()
    .test("type", "Only the following formats are accepted: .json", (value) => {
      return value[0].type === "application/json";
    })
    .test("fileSize", "Filesize must be less than 50kb", (value) => {
      return value[0].size < 50000;
    }),
  description: yup
    .string()
    .optional("Description must have less than 150 characters"),
});
const defaultValues = {
  levelName: "",
  description: "",
  file: {},
};
