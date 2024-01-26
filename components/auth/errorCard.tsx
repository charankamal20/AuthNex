import { CardWrapper } from "./CardWrapper";
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';



function ErrorCard() {
  return (
    <CardWrapper
        headerLabel="Oops! Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to Login"
    >
    <div className="w-full text-destructive items-center flex justify-center">
        <ExclamationTriangleIcon className="h-5 w-5" />
    </div>

    </CardWrapper>
  )
}

export default ErrorCard;