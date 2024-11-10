import { temperatureData, precipitationData, weatherOptions, precipitationOptions } from '../chart.js';

import ChartPanel from './ChartPanel.jsx';
import CustomAccordian from './CustomAccordian.jsx';

function Weather() {
  return (
    <>
        <h3 className='title'>Indonesia’s Changing Climate</h3>
        <CustomAccordian key='1' id='1' heading="Weather Changes">
            <ChartPanel class="weather-container" chartClass='weather-chart-wrapper' data={temperatureData} options={weatherOptions}>
                <p className='weather-content'>Indonesia’s climate is largely hot and humid, with rainfall occurring mostly in low-lying areas and mountainous regions experiencing cooler temperatures. The cities of Jakarta, Ujung Padang, Medan, Padang, and Balikpapan have an average minimum temperature of 22.8°C and a high of 30.2°C. Humidity in Jakarta varies between 61% to 95% and average rainfall amounts to 218.4 millimeters (mm) per month. The “wet” season occurs between November and April, leaving May through October typically dry. Indonesia experiences drier conditions during El Nino events and wetter conditions during La Nina events. Indonesia lies across the range of the Inter-Tropical Convergence Zone (ITCZ) where the northeast and southeast trade winds penetrate the doldrums. Strong ascending motion, overcast skies, strong squalls, heavy rainfall and severe local thunderstorms with variable intensities are characteristics of this zone. </p>
            </ChartPanel>
        </CustomAccordian>
        <CustomAccordian key='2' id='2' heading="Precipitation">
            <ChartPanel class="weather-container" chartClass='weather-chart-wrapper' data={precipitationData} options={precipitationOptions}>
                <p className='weather-content'>Indonesia experiences high levels of precipitation year-round, primarily due to its tropical climate and position within the Intertropical Convergence Zone (ITCZ).  
                    Indonesia has two main seasons, the wet season (November to March) and the dry season (June to September), influenced by the monsoon winds.
                    Western parts of Indonesia, like Sumatra and western Java, receive the highest rainfall, often exceeding 2,000–3,000 mm annually. 
                    The mountainous terrain in areas like Papua, Sumatra, and Sulawesi increases rainfall due to orographic lift, where moist air rises over mountains, cooling and causing rainfall on the windward side.</p>
            </ChartPanel>
        </CustomAccordian>
        <div className="references">
            <h3>References</h3>
            <ul>
                <li><a href='https://climateknowledgeportal.worldbank.org/country/indonesia/climate-data-historical' target='_blank'>Climate Change Knowledge Portal</a></li>
                <li><a href='https://sacad.bmkg.go.id/' target='_blank'>BMKG - Indonesian Meteorological, Climatological, and Geophysical Agency</a></li>
                <li><a href='https://www.worldbank.org/en/country/indonesia/publication/indonesia-country-climate-and-development-report' target='_blank'>World Bank - Indonesia Country Climate and Development Report</a></li>
            </ul>
        </div>
    </>
  );
}

export default Weather;
