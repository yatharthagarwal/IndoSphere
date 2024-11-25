import {averageTreeLoss, averageTreeLossOptions, greenhouseEmissions, greenhouseEmissionsOptions
    ,forestLossDriversOptions, forestLossDrivers
} from '../chart.js';
import { Col, Container, Row } from 'react-bootstrap';

import ChartPanel from './ChartPanel.jsx';
import CustomAccordian from './CustomAccordian.jsx';
import SpeciesCard from './SpeciesCard.jsx';
import orangutanImage from '../assets/orangutan.jpg';
import sumatranTigerImage from '../assets/sumatran_tiger.jpg';
import komodoDragonImage from '../assets/komodo_dragon.jpg';
import baliMynaImage from '../assets/bali_myna.jpg';
import coralReefsImage from '../assets/coral_reefs.jpg';
import pollinationImage from '../assets/pollination.jpg';
import healthyForestImage from '../assets/healthy_forest.jpg';
import tourismImage from '../assets/tourism.jpg';
import carbonStorageImage from '../assets/carbon_storage.jpg';


function Forest() {
    return (
        <>
            <h3 className='title'>The Forests of Indonesia: A Disappearing Canopy</h3>
            <CustomAccordian key='1' id='1' heading="Tree Cover Loss">
                <ChartPanel class="forest-container" chartClass='forest-chart-wrapper' data={averageTreeLoss} options={averageTreeLossOptions}>
                    <p className='forest-content'>
                        <ul>
                            <li><b>Overall Trend:</b>The graph shows fluctuations in tree cover loss from 2001 to 2023, with certain peak years and periods of decline.</li>
                            <li><b>Peak Years:</b> Significant spikes in tree cover loss occurred around 2004, 2012, and 2016, reaching above 20 million trees lost.</li>
                            <li><b>Decline in Recent Years:</b>After 2017, there was a noticeable decrease in tree cover loss, reaching a low around 2021. However, there appears to be an upward trend again in 2023.</li>
                            <li><b>Variability:</b>The graph indicates that tree cover loss in Indonesia varies widely, possibly influenced by factors such as deforestation activities, policy changes, and natural events like fires.</li>
                        </ul>
                    </p>
                </ChartPanel>
            </CustomAccordian>
            <CustomAccordian key='2'  id='2' heading="Greenhouse Emissions">
                <ChartPanel class="forest-container" chartClass='forest-chart-wrapper' data={greenhouseEmissions} options={greenhouseEmissionsOptions}>
                    <p className='forest-content'>
                        <ul>
                            <li><b>Overall Trend:</b>  Emissions have varied greatly, with a noticeable pattern of peaks and declines over the years.</li>
                            <li><b>Peak Years:</b> Emissions reached their highest points around 2012, 2016, and again slightly in the earlier 2009–2010 period, where emissions exceeded 1.6 billion metric tons.</li>
                            <li><b>Decline in Recent Years:</b> After 2017, there was a steady decrease in greenhouse gas emissions, hitting a low around 2021. However, an uptick is visible again in 2023.</li>
                            <li><b>Variability:</b> The cyclical peaks and declines suggest that emissions are influenced by both policy measures and possibly natural or economic factors affecting industrial activities and land use.</li>
                        </ul>
                    </p>
                </ChartPanel>
            </CustomAccordian>
            <CustomAccordian key='3'  id='3' heading="Forest Loss Drivers">
                <ChartPanel class="forest-container" chartClass='forest-chart-wrapper' data={forestLossDrivers} options={forestLossDriversOptions}>
                    <p className='forest-content'>
                        <ul>
                            <li><b>Commodity-driven Deforestation:</b> This is the largest contributor to greenhouse gas emissions in Indonesia, with clear peaks around 2004, 2012, and 2016, reaching over 18 million metric tons. Emissions from this source began to decline after 2017 but saw an increase again in 2023.</li>
                            <li><b>Forestry:</b> Emissions from forestry activities are much lower compared to deforestation, remaining relatively stable with minor fluctuations over the years.</li>
                            <li><b>Shifting Agriculture:</b> Similar to forestry, emissions from shifting agriculture are relatively low and stable, showing minimal changes throughout the observed period.</li>
                            <li><b>Urbanization:</b> Urbanization contributes the least to emissions and shows a steady, low-level trend, indicating limited impact on overall greenhouse gas levels.</li>
                        </ul>
                    </p>
                </ChartPanel>
            </CustomAccordian>
            <CustomAccordian key='4'  id='4' heading="Biodiversity Impact in Indonesia">
                <section className='section-container'>
                    <h3 id='forest'><b>Importance of Biodiversity in Indonesian Ecosystems:</b></h3>

                    <p id='forest-para'>
                        <ul>
                            <li>Ecosystem Stability: Biodiversity supports ecosystem resilience, helping forests, oceans, and wetlands withstand environmental stresses and recover from disturbances.</li>
                            <li>Economic and Cultural Value: Many communities depend on biodiversity for resources like food, medicine, and tourism; certain species hold cultural significance.</li>
                            <li>Unique Habitats: Indonesia is home to globally significant biodiversity hotspots, such as rainforests and coral reefs, which host unique flora and fauna.</li>
                            <li>Climate Regulation: Diverse ecosystems, like peatlands and mangroves, sequester carbon, mitigating climate change impacts.</li>
                        </ul>
                    </p>
                    <h3 id='forest'><b>Impacts of Climate Change, Deforestation, and Pollution on Local Species:</b></h3>

                    <p id='forest-para'>
                        <ul>
                            <li>Climate Change: Alters habitats and affects breeding, migration, and feeding patterns; some species may struggle to adapt to rising temperatures and changing rainfall.</li>
                            <li>Deforestation: Reduces habitats for endangered species (e.g., orangutans, Sumatran tigers), leading to population decline and fragmentation.</li>
                            <li>Pollution: Marine species are particularly affected by plastic pollution and water contaminants, disrupting food chains and habitats.</li>
                            <li>Biodiversity Loss: Combined pressures result in declining species diversity, threatening ecosystem functions and the survival of endemic species in Indonesia.</li>
                        </ul>                  
                    </p>

                </section>
                <section className='popular-species'>
                    <h5><b>Popular Species</b></h5>
                    <section className="biodiversity-gallery">
                        <SpeciesCard imageUrl={orangutanImage} imageAlt='Orangutan' />
                        <SpeciesCard imageUrl={sumatranTigerImage} imageAlt='Sumatran Tiger' />
                        <SpeciesCard imageUrl={komodoDragonImage} imageAlt='Komodo Dragon'/>
                        <SpeciesCard imageUrl={baliMynaImage} imageAlt='Bali Myna'/>
                        <SpeciesCard imageUrl={coralReefsImage} imageAlt='Coral Reefs'/>
                    </section>
                    <section>
                        <h6 id='title-services'>Services provided by these species:</h6>
                        <div className="ecosystem-services">
                            <Container>
                                <Row className='service-card-forest-row'>
                                    <Col className='service-card-forest'>
                                        <p>Pollination</p>
                                        <img src={pollinationImage} alt="Pollination" />
                                    </Col>
                                    <Col className='service-card-forest'>
                                        <p>Maitaining forest health</p>
                                        <img src={healthyForestImage} alt="Maitaining forest health" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='service-card-forest'>
                                        <p>Tourism</p>
                                        <img src={tourismImage} alt="Tourism" />
                                    </Col>
                                    <Col className='service-card-forest'>
                                        <p>Carbon Storage</p>
                                        <img src={carbonStorageImage} alt="Carbon Storage" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
                </section>
            </CustomAccordian>
            <div className="references">
                <h3>References</h3>
                <ul>
                    <li><a href='https://www.globalforestwatch.org/dashboards/country/IDN/?map=eyJjYW5Cb3VuZCI6dHJ1ZX0%3D' target='_blank'>Global Forest Watch</a></li>
                    <li><a href='https://www.forest-trends.org/'  target='_blank'>Forest Trends</a></li>
                    <li><a href='https://phl.menlhk.go.id/' target='_blank'>Ministry of Environment and Forestry of Indonesia</a></li>
                </ul>    
            </div>
        </>
    )
}

export default Forest;