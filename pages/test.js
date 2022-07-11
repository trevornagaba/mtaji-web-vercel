import React from 'react'
import PageTemplate from '../components/pageTemplate'

const Test = () => {
  return (
    <PageTemplate
    hasNavbar={true}
    // hasFooter={true}
    >
        <p style={{gridColumn:'2/3'}}>Hello</p>
    </PageTemplate>
  )
}

export default Test