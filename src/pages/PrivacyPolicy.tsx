const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>lorem ipsum privacy policy content </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;