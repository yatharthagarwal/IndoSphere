import CustomAccordian from "./CustomAccordian";

function Future() {
    return (
        <>
            <section>
                <h2 className='sub-heading-component'>A Look Ahead</h2>
                <section className='potential-scenarios'>
                    <h3>Potential Scenarios: Environmental Consequences Based on Different Practices and Policies</h3>
                    <CustomAccordian key='1' id='1' heading='Scenario 1: Continued High Emissions & Deforestation'>
                        <ul>
                            <li><b>Consequences:</b>Increased temperatures, widespread biodiversity loss, and frequent natural disasters.
                            Potentially irreversible damage to Indonesian ecosystems, including coral bleaching and loss of endemic species.</li>
                            <li><b>Human Impact:</b>Disruption to local economies (e.g., fisheries, agriculture) and increased health issues due to heatwaves and poor air quality.</li>
                        </ul>
                    </CustomAccordian>
                    <CustomAccordian key='2' id='2' heading='Scenario 2: Moderate Environmental Policies'>
                        <ul>
                            <li><b>Consequences:</b> Slowed but not halted environmental degradation; partial conservation efforts may save some biodiversity.
                                Still significant, though somewhat reduced, temperature and sea-level rise.</li>
                            <li><b>Human Impact:</b>Sustainable job creation in some sectors, yet lingering challenges like food insecurity and health risks from pollution.</li>
                        </ul>
                    </CustomAccordian>
                    <CustomAccordian key='3' id='3' heading='Scenario 3: Strong Sustainable Practices'>
                        <ul>
                            <li><b>Consequences:</b> Stabilized or improved biodiversity with gradual climate recovery.
                            Increased resilience of forest and marine ecosystems, including improved coral health.</li>
                            <li><b>Human Impact:</b>Healthier ecosystems lead to sustainable livelihoods in tourism and agriculture, with improved quality of life.</li>
                        </ul>
                    </CustomAccordian>
                </section>
                <section className='potential-scenarios'>
                    <h3>Sustainable Pathways: Practices and Policies for Environmental Recovery</h3>
                    <CustomAccordian key='1' id='1' heading='Community-Based Conservation'>
                        <ul>
                            <li><b>Description:</b>Encourage local communities to manage forests and marine areas, emphasizing traditional knowledge.</li>
                            <li><b>Benefits:</b> Preserves biodiversity, strengthens local economies, and fosters a sustainable relationship with nature.</li>
                        </ul>
                    </CustomAccordian>
                    <CustomAccordian key='2' id='2' heading='Renewable Energy Transition'>
                        <ul>
                            <li><b>Description:</b>Promote renewable sources (e.g., solar, wind, geothermal) and reduce reliance on coal and oil.</li>
                            <li><b>Benefits:</b> Decreases carbon emissions and improves air quality, especially in highly populated urban areas.</li>
                        </ul>
                    </CustomAccordian>
                    <CustomAccordian key='3' id='3' heading='Green Policy Reforms'>
                        <ul>
                            <li><b>Description:</b> Implementation of stricter regulations on deforestation, mining, and marine exploitation.</li>
                            <li><b>Benefits:</b>Protects natural habitats, reduces pollution, and mitigates environmental impact on biodiversity.</li>
                        </ul>
                    </CustomAccordian>
                </section>
            </section>
        </>
    )
}

export default Future;