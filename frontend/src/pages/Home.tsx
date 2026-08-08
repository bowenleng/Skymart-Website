import React, { useState } from "react";

export default function Home() {
    const [heading, setHeading] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            </div>
            <div>
                {}
            </div>
            <div>
            <button id="changeLanguage">中文</button>
            </div>
        </div>
    );
}