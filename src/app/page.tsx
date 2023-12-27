"use client";
import ComentsSection from "./components/ComentsSection";
import Gallery from "./components/Gallery";

export default function Home() {
  const imagesList = [
    "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
    "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    "https://fastly.picsum.photos/id/34/3872/2592.jpg?hmac=4o5QGDd7eVRX8_ISsc5ZzGrHsFYDoanmcsz7kyu8A9A",
    "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
  ];

  const youtube =
    "https://www.youtube.com/embed/WRIzvuATw6k?si=CIZbwqywu_7W93V3";

  return (
    <div>
      <Gallery imagesList={imagesList} youtube={youtube} />
      <ComentsSection />
    </div>
  );
}
