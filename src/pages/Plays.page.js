import React from "react";
import Poster from '../components/Poster/poster.component';
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
const Plays = () => {
return (
<>
<div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12">
      <h2 className="text-2xl font-bold mb-4">Plays in Chandrapur</h2>
      <div className="flex flex-wrap">
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
               title="The Suicide Squad"
               subtitle="English ₹270"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/rewind-et00304964-01-07-2021-11-17-38.jpg"
               title="Rewind"
               subtitle="Kannada ₹99"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://static.toiimg.com/photo/msid-84378618/Bhuj:%20The%20Pride%20Of%20India.jpg?84378618"
               title="Bhuj"
               subtitle="Hindi ₹199"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/honest-thief-et00312642-15-07-2021-10-05-10.jpg"
               title="Honesh Thief"
               subtitle="English ₹249"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-tvk-cultural-presents-ponniyin-selvan-2-2020-12-20-t-12-43-27.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹100"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://img.youtube.com/vi/ASj4wi44ZWI/0.jpg?resize=153%2C153"
               title="College Bus"
               subtitle="Gujrati ₹99"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://upload.wikimedia.org/wikipedia/en/9/91/Shershaah_film_poster.jpg"
               title="Shershaah"
               subtitle="Hindi ₹399"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/mojin--the-treasure-valley-et00311591-24-06-2021-10-29-23.jpg"
               title="Mojin- The Treasure Valley"
               subtitle="English ₹269"
               />
         </div>
      </div>
      </div>

       <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language" tags={["Hindi","English","Gujrati","Tamil", "Kannada"]}/>
        <PlaysFilter title="Categories" tags={["Theatre"]}/>
        </div>
       </div>
   </div>
</div>
</>
)
};
export default Plays;
