import React, { useState } from 'react'


const AccordionComponent = ({
    question,
    answer,
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
        {question}
      </div>
      <div className={className} style={storyStyle}>
        {answer}
      </div>
      </div>
  )
}

export default AccordionComponent