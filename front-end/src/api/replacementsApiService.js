import { BACK_END_URL } from "../constants/api";

export const replacementsApiService = {
    index: async () => {
        try {
            const response = await fetch(`${BACK_END_URL}/replacements`);

            if (!response.ok) {
                throw new Error("Failed to download replacements");
            }
            return response;
        } catch (err) {
            console.log("An error occurred in replacements:", err);
        }
    },
    update: async (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        const formData = new FormData(event.target);
        const replacements = Object.fromEntries(formData);

        try {
            const response = await fetch(`${BACK_END_URL}/replacements/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(replacements),
            });

            const replacement = await response.json();
            return replacement;
        } catch (error) {
            console.log(error);
        }
    },
};
