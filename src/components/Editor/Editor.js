import React, { useEffect, useState } from 'react'
import styles from './Editor.module.css'
import Input from '../Input/Input'
import { X } from 'react-feather'

function Editor(props) {
    const sections = props.sections
    const information = props.resumeInformation

    const [activeSectionKey, setActiveSectionKey] = useState(
      Object.keys(sections)[0]
      )

    const [activeInformation, setActiveInformation] = useState(
      information[sections[Object.keys(sections)[0]]]
    )

      
    const basicInfoBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
          <Input
            label="Name"
            placeholder="Enter your full name eg. Rajesh  "
          />
          <Input
            label="Title"
            placeholder="Enter your title eg. Frontend developer"
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Linkedin Link"
            placeholder="Enter your linkedin profile link"
          />
          <Input
            label="Github Link"
            placeholder="Enter your github profile link"
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            label="Enter phone"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    )
    
    const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Input label="Title"
        placeholder="Enter your profile eg. Software Developer"
        />
        <Input label="Location"
        placeholder="Enter your Location eg. Remote"
        />  
      </div>
      <div className={styles.row}>
      <Input label="Company Name"
        placeholder="Enter your company name eg. Google"
        />  
      </div>
      <div className={styles.row}>
        <Input label="Start Date"
        placeholder="Enter your start date of work"
        />
        <Input label="End Date"
        placeholder="Enter your end date of work"
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <Input placeholder="Line 1"/>
        <Input placeholder="Line 2"/>
        <Input placeholder="Line 3"/>
      </div>
    </div>
    )

    const projectBody = (
  <div className={styles.detail}>
    <div className={styles.row}>
      <Input
        label="Title"
        placeholder="Enter title eg. Chat app"
      />
    </div>
    <Input
      label="Overview"
      placeholder="Enter basic overview of project"
    />
    <div className={styles.row}>
      <Input
        label="Deployed Link"
        placeholder="Enter deployed link of project"
      />
      <Input
        label="Github Link"
        placeholder="Enter github link of project"
      />
    </div>
    <div className={styles.column}>
      <label>Enter project description</label>
      <Input
        placeholder="Line 1"
      />
      <Input
        placeholder="Line 2"
      />
      <Input
        placeholder="Line 3"
      />
      <Input
        placeholder="Line 4"
      />
    </div>
  </div>
)

    const educationBody = (
  <div className={styles.detail}>
    <div className={styles.row}>
      <Input
        label="Title"
        placeholder="Enter title eg. B-tech"
      />
    </div>
    <Input
      label="College/School Name"
      placeholder="Enter name of your college/school"
    />
    <div className={styles.row}>
      <Input
        label="Start Date"
        type="date"
        placeholder="Enter start date of this education"
      />
      <Input
        label="End Date"
        type="date"
        placeholder="Enter end date of this education"
      />
    </div>
  </div>
)

    const achievementsBody = (
  <div className={styles.detail}>
    <div className={styles.column}>
      <label>List your achievements</label>
      <Input
        placeholder="Line 1"
      />
      <Input
        placeholder="Line 2"
      />
      <Input
        placeholder="Line 3"
      />
      <Input
        placeholder="Line 4"
      />
    </div>
  </div>
)

    const summaryBody = (
  <div className={styles.detail}>
    <Input
      label="Summary"
      placeholder="Enter your objective/summary"
    />
  </div>
)

    const otherBody = (
  <div className={styles.detail}>
    <Input
      label="Other"
      placeholder="Enter something"
    />
  </div>
)

    const generateBody = () =>{
      switch(sections[activeSectionKey]){
        case sections.basicInfo :
          return basicInfoBody;
        case sections.workExp :
          return workExpBody;
        case sections.project :
          return projectBody;
        case sections.education :
          return educationBody;
        case sections.achievement :
          return achievementsBody;
        case sections.summary :
          return summaryBody;
        case sections.other :
          return otherBody;      
        default:
          return null;
      }
    }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map((key) => (<div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`} key={key} onClick={() => setActiveSectionKey(key)}>
            {sections[key]}
        </div>))}
      </div>
      <div className={styles.body}>
        <Input label="Title" placeholder="Enter section title"/>
        <div className={styles.chips}>
          <div className={styles.chip}>
            <p>Project 1</p>
            <X/>
          </div>
          <div className={styles.chip}>
            <p>Project 2</p>
            <X/>
          </div>
        </div>
        {generateBody()}
      </div>
    </div>
  )
}


export default Editor
