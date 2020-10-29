import React, { useState } from 'react'

import { Col, Row, Steps } from 'antd'

import Step1 from '../../components/Step1'
import Step2 from '../../components/Step2'
import Step3 from '../../components/Step3'

const { Step } = Steps

const Home = () => {
	const [step, setStep] = useState(0)

	const onChange = current => setStep(current)

	return (
		<Row>
			<Col span={24}>
				<Steps current={step} onChange={onChange}>
					<Step />
					<Step />
					<Step />
				</Steps>
			</Col>
			<Col span={24}>
				{step === 0 && <Step1 onNext={() => onChange(1)} />}
				{step === 1 && <Step2 onNext={() => onChange(2)} />}
				{step === 2 && <Step3 onNext={() => onChange(3)} />}
			</Col>
		</Row>
	)
}

export default Home
