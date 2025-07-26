import { GrFan } from "react-icons/gr";
import { GiBestialFangs } from "react-icons/gi";
import { SiGrafana } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";

const CardsMap = () => {
    const data = [
        {
            icone: <GrFan />,
            heading: "Garden Care",
            description: "Seeking justice in the world is a sed significant emotional and investment when we follow this call."
        },
        {
            icone: <GiBestialFangs />,
            heading: "Lawn mowing",
            description: "Seeking justice in the world is a sed significant emotional and investment when we follow this call."

        },
        {
            icone: <SiGrafana />,
            heading: "Lawn care",
            description: "Seeking justice in the world is a sed significant emotional and investment when we follow this call."
        },
    ]

    return (
        <>
            <div className="cards-grid">
                {
                    data.map((item, index) => (
                        <div
                            className={`card`}
                            key={index}
                        >
                            <div className="card-icon"><div className="bg-color">
                                {item.icone}</div></div>
                            <h2 className="card-title">{item.heading}</h2>
                            <p className="card-description">{item.description}</p>

                            <div className="circle"><FaArrowRight /></div>
                        </div>

                    ))
                }
            </div>
        </>
    );
};

export default CardsMap;

const style = document.createElement('style');
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items to the start to prevent vertical centering */
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }

  .circle{
  height:70px;
  width:70px;
  border-radius:50%;
  background-color:gray;
      display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:-20px;
    display:none;
  }

  .card:hover .circle{
  background-color:green;
   display:block;
  
  }
  .app-container {
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    text-align: center;
  }

  .main-title {
    color: #333;
    margin-bottom: 40px;
    font-size: 2.5em;
    font-weight: 700;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
    justify-content: center;
    align-items: stretch;
    margin-top:50px;
  }

  .card {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    border: 1px solid #e0e0e0;
  }

  .card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }

  .card-icon {
    font-size: 1em;
    margin-bottom: 20px;
    color: #007bff; /* A nice blue color for icons */
    transition: transform 0.3s ease;
    background-color:gray;
    width:50px;
    height:50px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .card:hover .card-icon {
    transform: rotate(10deg) scale(1.1);
    background-color:green;
  }

  .card-title {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .card-description {
    font-size: 1em;
    color: #666;
    line-height: 1.6;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .main-title {
      font-size: 2em;
    }
    .cards-grid {
      grid-template-columns: 1fr; /* Stack cards vertically on smaller screens */
    }
    .card {
      padding: 25px;
    }
    .card-title {
      font-size: 1.5em;
    }
    .card-icon {
      font-size: 2.5em;
    }
  }

  @media (max-width: 480px) {
    .app-container {
      padding: 10px;
    }
    .main-title {
      font-size: 1.8em;
      margin-bottom: 30px;
    }
    .card {
      padding: 20px;
    }
    .card-title {
      font-size: 1.3em;
    }
    .card-description {
      font-size: 0.9em;
    }
  }
`;
document.head.appendChild(style);
