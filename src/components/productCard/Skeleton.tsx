import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
   <ContentLoader 
   className="product"
    speed={3}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <path d="M 214.6 16.1 L 176.3 7 S 165.6 25.8 140 25.8 S 103.7 7 103.7 7 l -38.3 9.1 l -55.8 50 l 27.8 43.1 l 28 -13.1 v 152.4 h 149.1 V 96.1 l 28 13.1 l 27.8 -43.1 l -55.7 -50 z M 274 288.3 H 6 c -3.3 0 -6 -2.7 -6 -6 v -15.1 c 0 -3.3 2.7 -6 6 -6 h 268 c 3.3 0 6 2.7 6 6 v 15.1 c 0 3.3 -2.7 6 -6 6 z M 273.5 397 H 6.5 c -3.6 0 -6.5 -2.9 -6.5 -6.5 v -73.6 c 0 -3.6 2.9 -6.5 6.5 -6.5 h 267.1 c 3.6 0 6.5 2.9 6.5 6.5 v 73.6 c -0.1 3.6 -3 6.5 -6.6 6.5 z M 93.8 459.3 H 6.5 c -3.6 0 -6.5 -2.9 -6.5 -6.5 v -32.2 c 0 -3.6 2.9 -6.5 6.5 -6.5 h 87.3 c 3.6 0 6.5 2.9 6.5 6.5 v 32.2 c 0 3.6 -2.9 6.5 -6.5 6.5 z M 273.5 459.3 h -87.3 c -3.6 0 -6.5 -2.9 -6.5 -6.5 v -32.2 c 0 -3.6 2.9 -6.5 6.5 -6.5 h 87.3 c 3.6 0 6.5 2.9 6.5 6.5 v 32.2 c 0 3.6 -2.9 6.5 -6.5 6.5 z" />
  </ContentLoader>
)

export default Skeleton;