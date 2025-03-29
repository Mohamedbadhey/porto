import "./styles/Work.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Compact work items data
  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "Voting System",
      category: "Web App",
      image: "public/images/kisma.jpeg"
    },
    {
      id: 2,
      title: "Jubba Specialsit hospital",
      category: "Web App",
      image: "public/images/jubba.jpeg"
    },
    {
      id: 3,
      title: "Gulwade Voting Application",
      category: "Aoolication",
      image: "public/images/gul.jpeg"
    },
    {
      id: 4,
      title: "Somcoffee Restaurant ",
      category: "Web App",
      image: "public/images/som.jpeg"
    },
    {
      id: 5,
      title: "waamo waste management system",
      category: "Web App",
      image: "public/images/wamo.jpeg"
    }
  ];

  useGSAP(() => {
    // Set up horizontal scrolling
    const cards = gsap.utils.toArray(".work-card") as HTMLElement[];
    if (!cards.length) return;

    const totalWidth = cards.reduce((sum, card) => sum + card.offsetWidth + 30, 0);
    gsap.set(".work-cards-container", { width: totalWidth });

    ScrollTrigger.create({
      trigger: ".work-section",
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      animation: gsap.to(".work-cards-container", {
        x: -totalWidth + window.innerWidth,
        ease: "none"
      })
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <h2>My <span>Work</span></h2>
      <div className="work-cards-scroller">
        <div className="work-cards-container">
          {workItems.map((item) => (
            <div className="work-card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;