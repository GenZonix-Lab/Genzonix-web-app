import React from 'react'

const PrivacyPolicy = () => (
    <div className="container py-4">

    <div className="fw-bold fs-2 mb-2">Privacy Policy</div>
    <div className="mb-4 text-muted" style={{fontSize: '1rem'}}>Effective Date: September 3, 2025</div>
    <ul className="list-unstyled">
        <li className="mb-4">
            <div className="fw-bold fs-5">Information We Collect</div>
            <div className="mt-3 fw-bold">Personal Information</div>
            <ul>
                <li><strong>Name</strong></li>
                <li><strong>Email address</strong></li>
                <li><strong>Phone number</strong> (if applicable)</li>
                <li><strong>Any other information you submit</strong> (e.g., via forms)</li>
            </ul>
            <div className="mt-3 fw-bold">Usage Data &amp; Technical Information</div>
            <div>Automatically collected:</div>
            <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information (OS, screen resolution, device type)</li>
                <li>Pages visited, session times, navigation paths</li>
                <li>Referrer URLs and usage metrics</li>
            </ul>
            <div className="mt-3 fw-bold">Cookies &amp; Tracking Technologies</div>
            <div>
                We use cookies, local storage, and similar technologies to analyze usage, maintain sessions, and personalize your experience. You may disable cookies via your browser settings, but some features may not work properly.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">How We Use Your Information</div>
            <ul>
                <li>Provide and optimize the Service</li>
                <li>Personalize your user experience</li>
                <li>Communicate with you (updates, support)</li>
                <li>Analyze trends and user behavior</li>
                <li>Comply with legal obligations and protect against fraud</li>
            </ul>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Information Sharing</div>
            <div>We do not sell or trade your personal data. We may share data only with:</div>
            <ul>
                <li>Trusted service providers (analytics, hosting, email, etc.)</li>
                <li>Legal authorities if required by law</li>
                <li>Successors in case of merger, acquisition, or business transfer</li>
            </ul>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Third-Party Links</div>
            <div>
                Our Service may include links to external websites. We are not responsible for their privacy practices, so please review their policies.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Data Security</div>
            <div>
                We apply reasonable security measures to protect your data. However, no method of online transmission is 100% secure.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Your Rights</div>
            <div>Depending on your location, you may have rights to:</div>
            <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion (subject to legal retention)</li>
                <li>Withdraw consent to processing</li>
                <li>Restrict or object to processing</li>
                <li>Request data portability</li>
            </ul>
            <div>
                To exercise your rights, contact us at <a href="mailto:hellogenzonix@gmail.com">hellogenzonix@gmail.com</a>.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Children’s Privacy</div>
            <div>
                Our Service is not intended for children under 13. If we discover such data has been collected, we will delete it promptly.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Data Retention</div>
            <div>
                We retain personal data only as long as needed for the purposes outlined or as required by law.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">International Data Transfer</div>
            <div>
                Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place.
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Changes to This Privacy Policy</div>
            <div>
                We may update this policy periodically. Updates will be posted on this page with the revised “Effective Date.”
            </div>
        </li>

        <li className="mb-4">
            <div className="fw-bold fs-5">Contact Us</div>
            <div>
                For privacy-related questions, please contact us:<br />
                <span role="img" aria-label="email">📧</span> <a href="mailto:hellogenzonix@gmail.com">hellogenzonix@gmail.com</a>
            </div>
        </li>
    </ul>
    </div>
);

export default PrivacyPolicy;