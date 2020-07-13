import React from 'react';

export default class Ad extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <div className='ad'>
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-9850595882156546"
                    data-ad-slot="1824136536"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        );
    }
}
