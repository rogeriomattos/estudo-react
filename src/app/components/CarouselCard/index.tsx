import "./styles.css";

const CarouselCard = () => {
  const avatarUrl =
    "https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA";
  return (
    <div className="card">
      <p className="aspas">{'"'}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        distinctio, officiis iure, incidunt quasi asperiores alias neque
        molestias dignissimos id possimus adipisci sapiente tenetur, optio quam
        eveniet nobis reiciendis aspernatur.
      </p>
      <div className="user">
        <img src={avatarUrl} />
        <span>Lorem ipsum</span>
      </div>
    </div>
  );
};

export default CarouselCard;
