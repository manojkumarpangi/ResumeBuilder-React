import React, { useState } from 'react'
import styles from './Editor.module.css'
import Input from '../Input/Input'

function Editor(props) {
    const sections = props.sections
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0])

    const basicInfoBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
          <Input label="Title"
          placeholder="Enter your profile eg. Software Developer"
          />
          <Input label="Company Name"
          placeholder="Enter your company name eg. Google"
          />
        </div>
        <div className={styles.row}>
          <Input label="Location"
          placeholder="Enter your Loocation eg. Remote"
          />
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
      </div>)

    const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Input label="Title"
        placeholder="Enter your profile eg. Software Developer"
        />
        <Input label="Company Name"
        placeholder="Enter your company name eg. Google"
        />
      </div>
      <div className={styles.row}>
        <Input label="Location"
        placeholder="Enter your Loocation eg. Remote"
        />
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
    </div>)

    const generateBody = () =>{
      switch(sections[activeSectionKey]){
        // case sections.basicInfo :
        //   return basicInfoBody;
        case sections.workExp :
          return workExpBody;
        // case sections.project :
        //   return projectBody;
        // case sections.education :
        //   return educationBody;
        // case sections.achievement :
        //   return achievementBody;
        // case sections.summary :
        //   return summaryBody;
        // case sections.other :
        //   return otherBody;      
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
        <Input label="Title" placeholder="Enter title"/>
      </div>
    </div>
  )
}


export default Editor
