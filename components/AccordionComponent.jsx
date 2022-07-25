import React, { useState } from 'react'


const AccordionComponent = ({
    title,
    story,
    titleStyle,
    storyStyle,
}) => {
  const [opened, setOpened] = useState(false)
  const onClick = () => {
    setOpened(!opened)
  };
  const className = `${opened? 'block':'hidden'}`;
  return (
      <div>
      <div className={{}} onClick={onClick} style={titleStyle}>
        {opened ? <img src='assets/minus.svg' style={{marginRight: "10px"}}/>:<img src='assets/cross.svg' style={{marginRight: "10px"}}/>}
        {title}
      </div>
      <div className={className} style={storyStyle}>
        {story}
      </div>
      </div>
  )
}

export default AccordionComponent