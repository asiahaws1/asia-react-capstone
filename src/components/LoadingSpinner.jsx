import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      
      <FontAwesomeIcon icon="fa-circle-notch" spin />
    </div>
  );
}
