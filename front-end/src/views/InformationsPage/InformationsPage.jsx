import { useState } from 'react'
import { InformationsForm } from '../../components/InformationsForm/InformationsForm'
import { InformationsPreview } from '../../components/InformationsPreview/InformationsPreview'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { useLoaderData } from 'react-router-dom'

export function InformationsPage() {
	const informationsData = useLoaderData()
	const [showPoster, setShowPoster] = useState(informationsData[0].show_img)

	function handleShowPoster() {
		setShowPoster(!showPoster)
	}

	return (
		<Wrapper>
			<InformationsPreview
				showPoster={showPoster}
				informationsData={informationsData[0]}
			/>
			<InformationsForm
				showPoster={showPoster}
				informationsData={informationsData[0]}
				handleShowPoster={handleShowPoster}
			/>
		</Wrapper>
	)
}
