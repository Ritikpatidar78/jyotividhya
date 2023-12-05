import React from 'react'

const Aboutus = () => {
    return (
        <>
            <div className='active' >
                <h1 className='heading d-flex justify-content-center p-3 '> Facilities</h1>
                <div className='cardcontainer d-flex justify-content-around flex-wrap p-2' >
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Library</h1>
                        <p>The spacious school library is stocked with   periodicals, newspapers and an impressive   index  of titles, covering both fiction and non-fiction.</p>
                    </div>
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Sports</h1>
                        <p>Beyond the development of skills, our sporting facilities support students in their goals of leading healthy and active lifestyles</p>
                    </div>
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Play-ground</h1>
                        <p>A well facilated playgroud with diffrent   equipments along with a trainer.</p>
                    </div>
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Multi-purpose Hall</h1>
                        <p>The multi-purpose hall provides an ideal space   for school assemblies, events, productions,  minor games, and inter-school activities.</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Aboutus