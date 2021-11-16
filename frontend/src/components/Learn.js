import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import React from 'react'
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

const text1 = 'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.'
const text2 = 'Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.'
const text3 = 'Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge. ... While traditional machine learning algorithms are linear, deep learning algorithms are stacked in a hierarchy of increasing complexity and abstraction.'


const Learn = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to the Course</h1>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ marginLeft: '30px', marginRight: '30px' }}>
                <Panel header="What is Data Science ?" key="1">
                    <p>{text1}</p>
                </Panel>
                <Panel header="What is Machine Learning ?" key="2">
                    <p>{text2}</p>
                </Panel>
                <Panel header="What is Deep Learning ?" key="3">
                    <p>{text3}</p>
                </Panel>
                <Panel header="What is Data Science ?" key="4">
                    <p>{text1}</p>
                </Panel>
                <Panel header="What is Machine Learning ?" key="5">
                    <p>{text2}</p>
                </Panel>
                <Panel header="What is Deep Learning ?" key="6">
                    <p>{text3}</p>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Learn
