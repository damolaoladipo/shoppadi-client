import { Link } from "react-router-dom";
import { IButton } from "../../utils/interface.util";

const Button = ({ text, loading = false, onClick, to }: IButton) => {
  return (
    <div className="form-group ui-relative mrgb1">
      {to ? (
        <Link
          to={to}
          className={`btn font-dmsans-bold onwhite ${loading ? "loading" : ""}`}
        >
          {loading ? "Loading..." : text}
        </Link>
      ) : (
        <div
          className={`btn font-dmsans-bold onwhite ${loading ? "loading disabled" : ""}`}
          onClick={!loading ? onClick : undefined} 
        >
          {loading ? "Loading..." : text}
        </div>
      )}
    </div>
  );
};

export default Button;
