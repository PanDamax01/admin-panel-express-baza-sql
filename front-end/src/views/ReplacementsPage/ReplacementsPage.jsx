import { Wrapper } from '../../components/Wrapper/Wrapper'
import { ReplacementsPreview } from '../../components/ReplacementsPreview/ReplacementsPreview'
import { ReplacementsForm } from '../../components/ReplacementsForm/ReplacementsForm'

export function ReplacementsPage() {
	return (
		<Wrapper>
			<ReplacementsPreview />
            <ReplacementsForm />
		</Wrapper>
	)
}
