import styles from './ReplacementsForm.module.scss'

const inputFields = [
	{ className: `${styles.input} ${styles.short}`, key: 1, name: 'lesson' },
	{ className: `${styles.input} ${styles.long}`, key: 2, name: 'teacher' },
	{ className: `${styles.input} ${styles.mid}`, key: 3, name: 'branch' },
	{ className: `${styles.input} ${styles.long}`, key: 4, name: 'subject' },
	{ className: `${styles.input} ${styles.mid}`, key: 5, name: 'room' },
	{ className: `${styles.input} ${styles.long}`, key: 6, name: 'replacement' },
	{ className: `${styles.input} ${styles.long}`, key: 7, name: 'data' },
]

export function ReplacementsForm() {
	return (
		<>
			{/* <Checkbox hidden={hidden.hideReplacement} type='hideReplacement' /> */}

			<form>
				<button className={styles.add}>Dodaj wiersz</button>
			</form>
			
			{/* {replacement.map((input, index) => (
				<div key={input.id} className={styles.container}>
					<form className={styles.form}>
						<input type='hidden' value={input.id} name='id' />

						<span className={styles.label}>Wiersz {index + 1}</span>

						<div className={styles.boxInput}>
							{inputFields.map((el) => (
								<input
									className={el.className}
									name={`${el.name}${input.id}`}
									placeholder={input[el.name]}
									key={el.key}
									type='text'
								/>
							))}
						</div>

						<button className={styles.update}>Aktualizuj</button>
					</form>

					<form className={styles.form}>
						<input type='hidden' value={input.id} name='id' />
						<button className={styles.delete}>Usuń</button>
					</form>
				</div>
			))} */}
		</>
	)
}
