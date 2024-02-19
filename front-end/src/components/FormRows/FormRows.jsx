import styles from "./FormRows.module.scss";
import { BACK_END_URL } from "../../constants/api";
import { FormLabel } from "../FormLabel/FormLabel";
import { Form } from "react-router-dom";

const inputFields = [
    { className: `${styles.input} ${styles.short}`, key: 1, name: "lesson" },
    { className: `${styles.input} ${styles.long}`, key: 2, name: "teacher" },
    { className: `${styles.input} ${styles.mid}`, key: 3, name: "branch" },
    { className: `${styles.input} ${styles.long}`, key: 4, name: "subject" },
    { className: `${styles.input} ${styles.mid}`, key: 5, name: "room" },
    { className: `${styles.input} ${styles.long}`, key: 6, name: "deputy" },
    { className: `${styles.input} ${styles.long}`, key: 7, name: "date" },
];

export async function updatedReplacement(args) {
    const data = Object.fromEntries(await args.request.formData());

    try {
        const response = await fetch(
            `${BACK_END_URL}/replacements/${data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        const replacement = await response.json();
        return replacement;
    } catch (error) {
        console.log(error);
    }
}

export function FormRows({ replacementsData }) {
    return (
        <>
            {replacementsData.map((input, index) => (
                <div key={input.replacements_id} className={styles.container}>
                    <Form
                        className={styles.form}
                        method="PUT"
                        action="/panel/zastepstwa"
                    >
                        <input
                            type="hidden"
                            value={input.replacements_id}
                            name="id"
                        />

                        <FormLabel id={`lesson${input.replacements_id}`}>
                            Wiersz {index + 1}
                        </FormLabel>

                        <div>
                            {inputFields.map((el) => (
                                <input
                                    className={el.className}
                                    name={el.name}
                                    id={`${el.name}${input.replacements_id}`}
                                    placeholder={input[el.name]}
                                    defaultValue={input[el.name]}
                                    key={el.key}
                                    type="text"
                                />
                            ))}
                        </div>

                        <button className={styles.update}>Aktualizuj</button>
                    </Form>

                    <form className={styles.form}>
                        <input
                            type="hidden"
                            value={input.replacements_id}
                            name="id"
                        />
                        <button className={styles.delete}>Usuń</button>
                    </form>
                </div>
            ))}
        </>
    );
}
