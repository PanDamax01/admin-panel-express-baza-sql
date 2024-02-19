import { useLoaderData } from 'react-router-dom'
import { UsersOptions } from '../../components/UsersOptions/UsersOptions'
import { UsersTable } from '../../components/UsersTable/UsersTable'
import { Wrapper } from '../../components/Wrapper/Wrapper'

export function UsersPage() {
    const usersData = useLoaderData()

	return (
		<Wrapper>
			<UsersOptions />
			<UsersTable usersData={usersData}/>
			{/* <Pagination count={count} /> */}
		</Wrapper>
	)
}
