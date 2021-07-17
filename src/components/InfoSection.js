import React from 'react'
import { Info } from './InfoSection.style';
import InfoHeading from './InfoHeading';
function InfoSection() {
    return (
        <Info>
            <InfoHeading
                title="1"
                subtitle="Sample Heading 1"
                content="Nunc commodo id justo elementum pharetra. Ut sagittis elit tempus, 
                bibendum elit ac, laoreet tellus. Donec suscipit ipsum vitae quam elementum suscipit. "
            />
            <InfoHeading
                title="2"
                subtitle="Sample Heading 2"
                content="Cras ac ex ut est fermentum consectetur. Vivamus arcu diam, gravida eget dignissim sed, 
                tempor sit amet ipsum. Nulla blandit luctus mauris tincidunt consectetur. "
            />
            <InfoHeading
                title="3"
                subtitle="Sample Heading 3"
                content="Donec venenatis vehicula maximus. Integer dapibus felis in nisl egestas, in cursus nulla sagittis. 
                Nulla luctus nec arcu a viverra. Praesent ultrices aliquam libero in lacinia. "
            />

            
        </Info>
    )
}

export default InfoSection
