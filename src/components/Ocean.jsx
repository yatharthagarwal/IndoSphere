import ChartPanel from './ChartPanel.jsx';
import CustomAccordian from './CustomAccordian.jsx';

import {sst, sstOptions, coralReef, coralReefOptions} from '../chart.js';

function Ocean() {
    return (
        <>
            <h3 className='title'>Shifting Tides: Ocean and Coastal Changes</h3>
            <CustomAccordian key='1' id='1' heading="Sea Surface temprature Rise">
                <ChartPanel class="ocean-container" chartClass='ocean-chart-wrapper' data={sst} options={sstOptions}>
                    <section className='ocean-content'>
                            <p><b>Regional Warming</b>: Indonesia has experienced a higher rate of sea temperature rise compared to the global average, estimated at around 0.2°C per decade over the past 30 years.</p>
                            <p><b>Seasonal Variations</b>: The warming is more pronounced during certain seasons, affecting marine ecosystems differently throughout the year.</p>
                        <h5>Key Data Points:</h5>
                            <p><b>Average Increase</b>: From the 1990s to the 2020s, sea temperatures around Indonesia have increased by approximately 1.5°C.</p>
                            <p><b>Projected Future Increase</b>: If current trends continue, temperatures could rise by an additional 1-2°C by 2100.</p>
                    </section>
                </ChartPanel>
            </CustomAccordian>
            <CustomAccordian key='2' id='2' heading="Coral Reef Degradation">
                <ChartPanel class="ocean-container" chartClass='ocean-chart-wrapper' data={coralReef} options={coralReefOptions}>
                    <section className='ocean-content'>
                        <ul>
                            <li><p><b>Early 1900s</b>: Coral reefs in Indonesia were extensive, covering vast areas across the archipelago's marine regions. Biodiversity was high, with numerous species thriving in these ecosystems.</p></li>
                            <li><p><b>Mid to Late 20th Century</b>: Increased human activities, such as overfishing, coastal development, and the introduction of destructive fishing practices, began impacting coral health. However, comprehensive monitoring was limited during this period.</p></li>
                            <li><p><b>Late 20th Century to Present</b>: With advancements in marine science and increased awareness of environmental issues, more systematic monitoring of coral reefs has been conducted. Climate change, particularly rising sea temperatures, has led to frequent and severe coral bleaching events, significantly reducing coral cover.</p></li>
                        </ul>
                    </section>
                </ChartPanel>
            </CustomAccordian>
            <div className="references">
                <h3>References</h3>
                <ul>
                    <li><a href='http://202.46.3.56/' target='_blank'>Indonesian Oceanographic Data Center</a></li>
                    <li><a href='https://www.oceanaccounts.org/'  target='_blank'>Ocean Accounts of Indonesia</a></li>
                    <li><a href='http://ctatlas.coraltriangleinitiative.org/Country/Index/IDN' target='_blank'>Coral Triangle Initiative</a></li>
                </ul>    
            </div>
        </>
      );
}

export default Ocean;