import banner from "./Util/bannernuevo.png";
export default function Home() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${banner}`} className="d-block w-100" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  )
}