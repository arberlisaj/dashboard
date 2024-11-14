const FormValidationMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return <p className="text-red-500">{errorMessage}</p>;
};

export default FormValidationMessage;
