import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__headerWrapper">
            <h2 className="section__headerName">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;
