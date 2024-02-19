import { useLoaderData } from 'react-router-dom'
import { SliderForm } from '../../components/SliderForm/SliderForm'
import { SliderPreview } from '../../components/SliderPreview/SliderPreview'
import { Wrapper } from '../../components/Wrapper/Wrapper'

export function SliderPage() {
	const slidersData = useLoaderData()

	return (
		<Wrapper>
			<SliderPreview slidersData={slidersData} />
			<SliderForm slidersData={slidersData} />
		</Wrapper>
	)
}
