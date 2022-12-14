
import { Link } from "react-router-dom";
import data from "../data";
export default function EmployeeListItem(props) {
  return (
    <div>
      {data.map((info) => {
        const { id,img, name, title} = info;
        return (
          <Link to={`employee/${id}`}>
            <div className="employeeName">
              <img src={img} alt="pic" />
              <div className="text">
                <h3 className="name">{name}</h3>
                <p className="title">{title} </p>
              </div>
            </div>
            </Link>
        );
      })}
    </div>
  );
}
