import "./sidebar.css";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoMusicalNotes,
} from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { Drama, Newspaper, Volleyball } from "lucide-react";
import { GrTechnology } from "react-icons/gr";
import { RiBloggerFill } from "react-icons/ri";

const Sidebar = ({ menu, category, setCategory }) => {
  return (
    <div className={`sidebar ${menu ? "hide" : ""}`}>
      <div className="sortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <span>
            {" "}
            <IoHomeOutline size={20} />
          </span>{" "}
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <span>
            {" "}
            <IoGameControllerOutline size={20} />
          </span>
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <span>
            {" "}
            <FaCar size={20} />
          </span>{" "}
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <span>
            {" "}
            <Volleyball size={20} />
          </span>
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <span>
            {" "}
            <Drama size={20} />
          </span>{" "}
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          {" "}
          <span>
            {" "}
            <GrTechnology size={20} />
          </span>
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          {" "}
          <span>
            {" "}
            <IoMusicalNotes size={20} />
          </span>{" "}
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <span>
            {" "}
            <RiBloggerFill size={20} />
          </span>
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <span>
            {" "}
            <Newspaper size={20} />{" "}
          </span>
          <p>News</p>
        </div>
      </div>

      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt=""
          />
          <p>Jacob</p>
        </div>
        <div className="side-link">
          <img
            src="https://t4.ftcdn.net/jpg/08/04/36/29/360_F_804362990_0n7bGLz9clMBi5ajG52k8OAUQTneMbj4.jpg"
            alt=""
          />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img
            src="https://t3.ftcdn.net/jpg/08/20/75/34/360_F_820753420_Nqjb8USaj0J7K82Uo6yZLhCv4roZFBj7.jpg"
            alt=""
          />
          <p>John</p>
        </div>
        <div className="side-link">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/053/543/787/small_2x/handsome-man-in-formal-attire-stands-outdoors-with-a-smile-near-urban-skyscrapers-photo.jpg"
            alt=""
          />
          <p>Obolon</p>
        </div>
        <div className="side-link">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/057/706/019/small/a-man-with-a-beard-and-tie-standing-in-front-of-a-building-free-photo.jpg"
            alt=""
          />
          <p>Jeck</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
