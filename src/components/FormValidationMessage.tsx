const FormValidationMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return <p className="py-1 text-sm text-red-500">*{errorMessage}</p>;
};

export default FormValidationMessage;
