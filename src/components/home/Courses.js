import ReactStars from "react-rating-stars-component";
import { coursesData } from "../../data/home/coursesData";

const Courses = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        {coursesData.map(({ id, title,ratings }) => {
          return (
            <div key={id}>
              <p>{title}</p>
              <ReactStars
                size={14}
                count={5}
                edit={false}
                value={ratings}
                color="#FDAE53"
                activeColor="#FDAE53"
                emptyIcon={<i className="far fa-star" />}
                filledIcon={<i className="fa fa-star" />}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
