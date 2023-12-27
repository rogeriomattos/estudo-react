import "./styles.css";

type GalleryProps = {
  imagesList: string[];
  youtube: string;
};

const Gallery = (props: GalleryProps) => {
  return (
    <div id="gallery">
      <div>
        <iframe
          width="100%"
          height="100%"
          src={props.youtube}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        {props.imagesList.map((url) => (
          <img src={url} key={url} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
