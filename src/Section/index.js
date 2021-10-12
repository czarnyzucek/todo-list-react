import { Wrapper, HeaderWrapper, HeaderName } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <HeaderWrapper>
            <HeaderName>{title}</HeaderName>
            {extraHeaderContent}
        </HeaderWrapper>
        {body}
    </Wrapper>
);

export default Section;
