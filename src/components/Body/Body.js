import React, {useState} from 'react'
import styles from './Body.module.css'
import {Download} from 'react-feather'
import Editor from '../Editor/Editor'

function Body() {

const colors = ["#122620", "#274472", "#009FDC", "#FDB750",] 
const sections = {
    basicInfo: "Basic Info",
    summary: "Summary",
    workExp: "Work Experience",
    project: "Project",
    education: "Education",
    achievements: "Achievements",
    other: "Other"
}

const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  })
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {
                    colors.map((item) =>(
                        <span className={styles.color} key={item} style={{backgroundColor: item}}></span>
                    ))
                }
            </div>
                <button className={styles.button}>
                    Download <Download className={styles.icon}/>
                </button>
        </div>
        <div className={styles.main}>
            <Editor sections={sections} information={resumeInformation}/>
        </div>
    </div>
  )
}

export default Body
