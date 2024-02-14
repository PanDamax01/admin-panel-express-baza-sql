import { Wrapper } from '../../components/Wrapper/Wrapper'
import { ReplacementsPreview } from '../../components/ReplacementsPreview/ReplacementsPreview'
import { ReplacementsForm } from '../../components/ReplacementsForm/ReplacementsForm'
import { useLoaderData } from 'react-router-dom'

export function ReplacementsPage() {
	const replacementsData = useLoaderData()

	return (
		<Wrapper>
			<ReplacementsPreview replacementsData={replacementsData} />
			<ReplacementsForm replacementsData={replacementsData} />
		</Wrapper>
	)
}
