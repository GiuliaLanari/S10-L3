import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = function () {
  const navigate = useNavigate();

  return (
    <div className="text-center text-white mt-5">
      <h2>404 - Not Found</h2>
      <h4 className="text-white">
        Ti sei perso?{" "}
        <Button
          variant="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Torna in Home
        </Button>
      </h4>
    </div>
  );
};

export default NotFound;
