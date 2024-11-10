import ImageShow from "./ImageShow";

function Home() {
    return (
        <>
            {/* <img id="hero-image" src='src/assets/munduk.jpg' /> */}
            <ImageShow />
            <div id='welome-text'>
                <h3>Welcome to Our Site on Indonesia’s Environment</h3>
                Indonesia, known for its vast rainforests, rich marine biodiversity, and unique ecosystems, plays a vital role in the global environment. Yet, over the past few decades, the impact of climate change, deforestation, and oceanic shifts have posed severe threats to its natural landscapes. This website aims to raise awareness of these changes, exploring both human and natural influences on Indonesia's environment and highlighting the urgent need for conservation efforts.
            </div>
        </>
    )
}

export default Home;