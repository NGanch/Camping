import { ErrorMessage } from "formik";

type Props = {
  name: string;
};

const FormError = ({ name }: Props) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <p className="text-primaryBrightPurple text-[12px] font-[400] ">
          {message}
        </p>
      )}
    />
  );
};

export default FormError;
