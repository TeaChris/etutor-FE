import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="flex items-center p-3 text-sm rounded-md bg-destructive/15 gap-x-2 text-destructive">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
