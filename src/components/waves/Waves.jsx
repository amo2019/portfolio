import "./Waves.scss"
export default function Skills ({show}) {
  return(
    <div className="waves">  
    <div className="container" style={show? {opacity: ".2", marginTop: "8rem"}: {opacity: .06}}>
            <div className="wave">
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
            </div>
            <div className="wave" data-level="1">
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
            </div>
            <div className="wave" data-level="2">
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
            </div>
            <div className="wave" data-level="3">
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
                <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
            </div>
        </div>
        {
        show && 
              <div className="header-text">
                  HTML/CSS | JavaScript/TypeScript | ReactJS | React Native | NodeJS | Express | Docker and Kubernetes |
                  MongoDB | PostgreSQL
              </div>
        }
</div>
  )
}





 