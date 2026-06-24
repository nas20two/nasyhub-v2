export default function TiPaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#F7F3EE" }}>
      <div className="max-w-lg w-full bg-white rounded-xl shadow-sm p-8 text-center space-y-4">
        <div className="text-5xl">🎉</div>
        <h1 className="text-2xl font-bold" style={{ color: "#316263" }}>
          Payment Successful!
        </h1>
        <p className="text-gray-600">
          Your Tender Intelligence evaluation is being queued.
          We&apos;ll be in touch at the email you provided within 24 hours.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-500 text-left">
          <p className="font-medium text-gray-700 mb-1">What happens next:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Share your RFT and submission docs with us</li>
            <li>Our agent runs compliance + deviation + risk checks</li>
            <li>You get a full report via email</li>
          </ol>
        </div>
        <a
          href="/"
          className="inline-block mt-4 text-sm underline"
          style={{ color: "#316263" }}
        >
          ← Back to NaSy Hub
        </a>
      </div>
    </div>
  );
}