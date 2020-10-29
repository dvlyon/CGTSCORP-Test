import React from 'react'

import { Button, Col, Image, Row, Typography } from 'antd'

import group from '../../assets/img/group.svg'
import group3 from '../../assets/img/group-3.svg'

const { Text, Title } = Typography

const Step2 = ({ onNext }) => 
	<Row>
		<Col span={24}>
			<Title level={2}>Crea tu Password Manager</Title>
		</Col>
		<Col span={12}>
			<Image src={group} />
			<Text type='secondary'>
				Guarda aquí todas tus contraseñas, datos o cualquier información. Olvida las notas de papel y las aplicaciones no protegidas.
			</Text>
		</Col>
		<Col span={12}>
			<Image src={group3} />
			<Text type='secondary'>
				Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.
			</Text>
		</Col>
		<Col span={24}>
			<Title level={4}>Cómo funciona</Title>
			<Text>
				En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdela bien.
			</Text>
		</Col>
		<Col span={24}>
			<Title level={4}>Qué datos puedes guardar</Title>
			<Text>
				Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en algún lugar seguro.
			</Text>
		</Col>
		<Col span={24}>
			<Title level={4}>Qué datos puedes guardar</Title>
			<Text>
				Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en algún lugar seguro.
			</Text>
		</Col>
		<Col span={12}>
			<Text>Cancel</Text>
		</Col>
		<Col span={12}>
			<Button
				type="primary"
				onClick={() => onNext()}
			>
				Siguiente >
			</Button>
		</Col>
	</Row>

export default Step2
