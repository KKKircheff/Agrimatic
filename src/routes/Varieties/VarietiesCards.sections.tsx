import { Stack } from "@mui/joy"
import { VarietyCard } from "../../components/cards/VarietyCard.component"
import { varieties } from "../../routes/Varieties/varaties"

export const VarietiesCards = () => {
    return (
        <Stack spacing={4}>
            {varieties.map((variety, index) => (
                <VarietyCard key={variety.name + index} variety={variety} />
            ))
            }
        </Stack>
    )
}
