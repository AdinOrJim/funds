import React from 'react';
import PoposSpace from './PoposSpace';

function POPOSList() {
  return (
    <div className="POPOSList">
      <PoposSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <PoposSpace 
      name="32 Empire"
      address="32 California St."
      image="empire-park.jpg"/>
      <PoposSpace
      name="City Group"
      address="52 California St."
      image="citigroup-center.jpg" />
      <PoposSpace
      name="555 California Street"
      address="555 California St."
      image="555-california.jpg" />
    </div>
  )
}

export default POPOSList