import Collection from "@/components/Collection";
import Services from "@/components/Services";
import NewArrival from "@/components/NewArrival";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
const Home = () => {
  return (
    <>
    <Navbar />
    <Slider />
    <Services/>
    <Collection/>
    <NewArrival/>
    <Footer/>
    </>
  )
}

export default Home
