import Navbar from "@/components/navbar"

const About = () => {
  return (
    <>
        <Navbar/>
        <div className="flex justify-around px-24 h-full items-center ">
            <div className="about-left">
                <img src="about.png" alt="about" className="w-2/3 "/>
            </div>
            <div className="about-right">
                <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
                <p>Our company was founded in 2010 by a group of passionate individuals who wanted
                    to make a difference in the world. We started with a small team and a big dream,
                    and over the years, we've grown into a global organization with a presence in
                    multiple countries.</p>
                    <p>Our mission is to provide high-quality products and services that meet the
                        evolving needs of our customers. We're committed to innovation, sustainability,
                        and social responsibility, and we're constantly looking for ways to improve
                        our operations and reduce our impact on the environment.</p>
            </div>
        </div>

        
    </>
  )
}

export default About