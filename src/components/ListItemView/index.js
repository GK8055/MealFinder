import "./index.css";
import { Link } from "react-router-dom";

const ListItemView = (props) => {
  const { data } = props;
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    data;

  return (
    <li className="list_item">
      <Link className="link_style" to={`/list/${strCategory}`}>
        <h1 className="list_title">{strCategory}</h1>
        <img src={strCategoryThumb} alt={strCategory} />
        <p className="list_desc">{strCategoryDescription}</p>
      </Link>
    </li>
  );
};

export default ListItemView;
