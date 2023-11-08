import { SectionWrapper, Headrest } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <SectionWrapper>
            <Headrest >{title}</Headrest>
            {children}
        </SectionWrapper>
    )
};