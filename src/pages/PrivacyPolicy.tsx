const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p><strong>Effective Date:</strong>27/09/2025</p>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

            <p>
              At <strong>ProSupport Services Ltd</strong>, your privacy is important to us.
              We are committed to protecting the personal data of our clients, employees,
              applicants, and website visitors in line with the{" "}
              <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> and international best practices.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li>Personal Identification Data: Name, date of birth, gender, national ID/passport, contact details.</li>
              <li>Employment Data: CVs, qualifications, work history, references, certifications.</li>
              <li>Financial & Payroll Data: Bank details, salary info, tax identification numbers.</li>
              <li>Usage Data (Website): IP address, browser type, cookies, browsing activity.</li>
              <li>Special Categories: Health or immigration data (for expatriate management).</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Recruitment, placement, and outsourcing services.</li>
              <li>Payroll administration and HR management.</li>
              <li>Training and development programs.</li>
              <li>Regulatory compliance (labor, tax, and immigration).</li>
              <li>Client and candidate communication.</li>
              <li>Improving services and user experience.</li>
            </ul>

            <h2>3. Legal Basis for Processing</h2>
            <p>We process data based on consent, contractual necessity, legal obligations, and legitimate interests.</p>

            <h2>4. How We Share Your Information</h2>
            <p>
              We may share your data with client organizations, government agencies,
              service providers, or legal authorities where required.
              <strong> We do not sell or trade personal data.</strong>
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for business or legal purposes.
              Data no longer needed is securely deleted or anonymized.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We use secure servers, encryption, restricted access, and staff training
              to protect your data from unauthorized access or misuse.
            </p>

            <h2>7. Your Rights</h2>
            <ul>
              <li>Access and correct your personal data.</li>
              <li>Request deletion (where legally permissible).</li>
              <li>Withdraw consent for processing.</li>
              <li>Object to marketing communications.</li>
              <li>File a complaint with the Data Protection Commission of Ghana.</li>
            </ul>

            <h2>8. Cookies & Website Tracking</h2>
            <p>
              Our website may use cookies to improve your browsing experience.
              You can control cookies through your browser settings.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Where data is transferred outside Ghana, we ensure adequate safeguards
              (such as contracts or secure protocols) to protect your information.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically.
              Updates will be posted on this page with a revised "Last Updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              For questions, please contact us at: <br />
              <strong>ProSupport Services Ltd</strong> <br />
              Email: <a href="mailto:info@prosupportservicesgh.com">info@prosupportservicesgh.com</a> <br />
              Phone: +233-244-058-352 / +233-243-588-842 <br />
              Website: <a href="https://www.prosupportservicesgh.com">www.prosupportservicesgh.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
