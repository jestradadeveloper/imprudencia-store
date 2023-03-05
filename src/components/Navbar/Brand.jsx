import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <img src="/logo.png" width={250} className="mb-3" />
    </Link>
  );
};

export default Brand;
