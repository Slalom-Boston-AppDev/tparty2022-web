import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Policy from "../PrivacyPolicy.md";

const PrivacyPolicyPage = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(Policy)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
    return (
        <div className='policy'>
            <ReactMarkdown children={content} />
        </div>
    )
}

export default PrivacyPolicyPage;