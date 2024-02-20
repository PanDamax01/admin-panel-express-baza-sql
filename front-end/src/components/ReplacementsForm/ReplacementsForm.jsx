import styles from './ReplacementsForm.module.scss';

import { FormRows } from '../FormRows/FormRows';
import { Title } from '../Title/Title';
import { Form } from 'react-router-dom';

export function ReplacementsForm({ replacementsData }) {
    return (
        <>
            <Title>Edycja</Title>
            {/* <Checkbox hidden={hidden.hideReplacement} type='hideReplacement' /> */}

            <Form method='POST' action='/panel/zastepstwa'>
                <button className={styles.add}>Dodaj wiersz</button>
            </Form>

            <FormRows replacementsData={replacementsData} />
        </>
    );
}
