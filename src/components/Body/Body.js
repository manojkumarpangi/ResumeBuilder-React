import React from 'react'
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
            <Editor sections={sections}/>
        </div>
    </div>
  )
}

export default Body
