import SubReddits from '../features/subReddits/SubReddits.js'
import { Aside as Container } from '../theme/styling.js'

export default function Sidebar(){
    return (
        <Container>
            <SubReddits/>
        </Container>
    )
}