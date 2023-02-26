import { Formik } from "formik";
import React, { FC, cloneElement, ReactElement } from "react";
import { ClientType } from "../types/clientTypes";

type props = {
  children: ReactElement;
  defaultValues: Object;
  defaultSchema: Object;
  handleSubmit: (values: Object) => void;
};
export const FormikContainer: FC<props> = ({
  children,
  defaultValues,
  defaultSchema,
  handleSubmit,
}) => {
  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={defaultSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}>
      {(formikProps) => cloneElement(children, formikProps)}
    </Formik>
  );
};
