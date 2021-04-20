import TopTour from "./TopTour"
export default function GalleryContainer() {
  //map through all tours
  //if tour.popularity =< 8 then <tour pass props>
  
  return (
    <div>
      <h2>Our Top Tours</h2>
      <div id="gallery">
        <button>Back</button>
        <div id="tourcontainer">
          <TopTour/>
        </div>
        <button>Next</button>
      </div>
    </div>
  )
}
