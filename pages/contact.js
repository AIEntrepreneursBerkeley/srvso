export default function Contact() {
  return (
    <>
      <div className="mb-12">
        <h2 className="mb-4">Contact</h2>
        <p className="text-lg">
          Ask questions about the event and get in touch with the team.
        </p>
      </div>
      <section className="flex flex-col w-full px-1 py-6 overflow-hidden bg-gray-200 rounded-md h-96">
        <iframe
          title="SRVSO Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOoND17uRMjH3uPnuSHqGGLfs9Qj5FIN83VZdj9L-N9BVIZw/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
      </section>
    </>
  );
}
