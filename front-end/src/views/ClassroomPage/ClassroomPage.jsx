import { useLoaderData } from 'react-router-dom'
import { ClassroomPreview } from '../../components/ClassroomPreview/ClassroomPreview'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { ClassroomForm } from '../../components/ClassroomForm/ClassroomForm'

export function ClassroomPage() {
	const classromsData = useLoaderData()

	return (
		<Wrapper>
			<ClassroomPreview classromsData={classromsData} />
			<ClassroomForm classromsData={classromsData} />
		</Wrapper>
	)
}
