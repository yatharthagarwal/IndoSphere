import cityImage from "../assets/city.png";
import factoryImage from "../assets/factory.png";
import deforestationImage from "../assets/deforestation.png";
import earthImage from "../assets/earth.png";
import earthquakeImage from "../assets/earthquake.png";

import ImpactsIcon from "./ImpactsIcon";
import CustomAccordian from './CustomAccordian';

function Impacts() {
    return (
        <section id="understanding-causes">
        <h2>Understanding the Causes</h2>
        
        <div class="causes-layout">
            
            <div className="column">
                <h3>Human Activities</h3>
                <ul>
                    <ImpactsIcon img={cityImage} alt={'Urbanization'} heading={'Urbanization'} >
                        Urbanization in Indonesia has increased significantly since the 1970s, driven by rural-urban migration.
                        <a href="https://en.wikipedia.org/wiki/Urbanization_in_Indonesia" target="_blank">Read More</a>
                    </ImpactsIcon>
                    <ImpactsIcon img={factoryImage} alt={'Pollution'} heading={'Pollution'} >
                        The impact of pollution on Indonesia includes health costs and environmental issues.
                        <a href="https://en.wikipedia.org/wiki/Environmental_issues_in_Indonesia#History_and_background" target="_blank">Read More</a>
                    </ImpactsIcon>
                    <ImpactsIcon img={deforestationImage} alt={'Deforestation'} heading={'Deforestation'} >
                        Deforestation in Indonesia involves the long-term loss of forests and foliage across much of the country
                        <a href="https://en.wikipedia.org/wiki/Deforestation_in_Indonesia" target="_blank">Read More</a>
                    </ImpactsIcon>
                </ul>
            </div>
            
            <div className="column">
                <h3>Natural Disasters</h3>
                <ul>
                    <ImpactsIcon img={earthImage} alt={'Volcanic Eruption Icon'} heading={'Volcanic Eruptions'} >
                        Indonesia has around 130 active volcanoes that are part of the Pacific Ring of Fire. 
                        <a href="https://en.wikipedia.org/wiki/Volcanism_of_Indonesia" target="_blank">Read More</a>
                    </ImpactsIcon>
                    <ImpactsIcon img={earthquakeImage} alt={'Earthquake Icon'} heading={'Earthquakes'} >
                        Major earthquakes that have occurred within the boundaries of Indonesia. 
                        <a href="https://en.wikipedia.org/wiki/List_of_earthquakes_in_Indonesia" target="_blank">Read More</a>
                    </ImpactsIcon>
                </ul>
            </div>
        </div>

        <div class="brief-analysis">
            {/* <h4>Brief Analysis:</h4> */}
            <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                Brief Analysis:
            </h4>
            <CustomAccordian key='1' id='1' heading="Deforestation and Habitat Loss">
                <ul>
                    <li><b>Location</b>: Kalimantan and Sumatra - The forests in these regions are rapidly shrinking due to palm oil plantations and logging activities.</li>
                    <li><b>Data</b>: Indonesia lost over 9.6 million hectares of primary forest between 2002 and 2020, with around 324,000 hectares cleared in 2020 alone. This deforestation has put species like the Sumatran tiger and Bornean orangutan at critical risk of extinction.</li>
                    <li><b>Environmental Impact</b>: Deforestation in these areas has reduced biodiversity, impacted carbon storage, and increased the likelihood of human-wildlife conflicts as animals lose their natural habitats.</li>
                </ul>
            </CustomAccordian>
            <CustomAccordian key='2' id='2' heading="Urbanization and Pollution">
                <ul>
                    <li><b>Location</b>: Jakarta - The capital city experiences severe pollution due to rapid urban growth, industrialization, and vehicle emissions.</li>
                    <li><b>Data</b>: In 2021, Jakarta was ranked as one of the most polluted cities in Southeast Asia, with an average PM2.5 concentration of 39.6 μg/m³, which is nearly four times the WHO's recommended safe level.</li>
                    <li><b>Environmental Impact</b>: High pollution levels have led to health issues such as respiratory diseases in humans. Water pollution in Jakarta Bay has disrupted local marine life and affected fishing communities due to contamination of fish stocks.</li>
                </ul>
            </CustomAccordian>
            <CustomAccordian key='3' id='3' heading="Overfishing and Marine Depletion">
                <ul>
                    <li><b>Location</b>: Arafura Sea - A rich fishing ground in eastern Indonesia that has been impacted by overfishing, often by foreign vessels.</li>
                    <li><b>Data</b>: The Indonesian government estimates that over 7,000 illegal foreign fishing vessels were operating in its waters before strict enforcement began in 2014. Overfishing has resulted in a decline of fish stocks in the Arafura Sea, particularly affecting species like tuna.</li>
                    <li><b>Environmental Impact</b>: Depleted fish stocks threaten food security and the livelihoods of local fishing communities, also affecting marine biodiversity as predator-prey balances are disrupted.</li>
                </ul>
            </CustomAccordian>
        </div>
        </section>
    )
}

export default Impacts;