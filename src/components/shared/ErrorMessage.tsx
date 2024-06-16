type ErrorMessage = string;
type ErrorProps = {
  errorMessage: ErrorMessage;
};

export default function ErrorMessage({ errorMessage }: ErrorProps) {
  return <p>{errorMessage}</p>;
}
