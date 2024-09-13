import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import { toast } from "react-toastify";

import DatePickers from "../DatePickers/DatePickers";
import FormError from "../FormError/FormError";
import MainButton from "../Button/MainButton";
import { Dates } from "../../assets/Icons";

import "../components.scss";

interface MyFormValues {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment: string;
}

const initialValues: MyFormValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .trim()
    .strict(true)
    .required("Name is required")
    .required("Name is required"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com"
    )
    .email("Invalid email format, test@mail.com")
    .required("Email is required"),
  bookingDate: Yup.date().required("bookingDate is required"),
  comment: Yup.string()
    .min(3, "Comment must be at least 6 characters long")
    .trim()
    .strict(true)
    .required("Comment is required"),
});


const BookingForm = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSubmit = (
    values: MyFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {

    console.log(values);
    toast.success("Booking successfully");
    resetForm();
  };

  const handleToggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen); // Зміна стану відкритості календаря
  };

  return (
    <div className="w-full lg:w-[641px] p-[44px_67px] border-tritiaryLightGray border-solid border-[1px] rounded-[10px]">
      <h2 className="pb-[8px] text-primaryBlack text-[20px] font-[600] leading-[1.2] ">
        Book your campervan now
      </h2>
      <p className="mb-[24px] text-tritiaryGray text-[16px] font-[400] leading-[1.5]">
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="flex flex-col items-center ">
            <div className="flex flex-col gap-[14px] w-full ">
              <div className="">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  error={errors.name && touched.name ? "true" : "false"}
                  success={values.name && !errors.name ? "true" : "false"}
                  className="input"
                />
                <FormError name="name" />
              </div>
              <div className="">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={errors.email && touched.email ? "true" : "false"}
                  success={values.email && !errors.email ? "true" : "false"}
                  className="input"
                />
                <FormError name="email" />
              </div>
              <div className="date-input relative">
                <DatePickers
                  name="bookingDate"
                  value={values.bookingDate}
                  setFieldValue={setFieldValue}
                  placeholder="Booking date"
                  error={
                    errors.bookingDate && touched.bookingDate ? "true" : "false"
                  }
                  success={
                    values.bookingDate && !errors.bookingDate ? "true" : "false"
                  }
                  isOpen={isDatePickerOpen}
                  toggleCalendar={handleToggleDatePicker}
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 bottom-0 flex items-center px-3 bg-transparent rounded-[10px]"
                  onClick={handleToggleDatePicker}
                >
                  <Dates />
                </button>
                <FormError name="bookingDate" />
              </div>
              <div className="">
                <Field
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  error={errors.comment && touched.comment ? "true" : "false"}
                  success={values.comment && !errors.comment ? "true" : "false"}
                  className="comment"
                />
                <FormError name="email" />
              </div>
            </div>
            <MainButton type={"submit"} label={"Send"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
