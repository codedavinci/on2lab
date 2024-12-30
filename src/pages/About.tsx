import Header from "../components/Header";

export default function About() {
  return (
    <div className="p-3">
      <Header />
      <div>
        {/* About Section */}
        <section id="about" className="py-16 px-6 lg:px-32 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-semibold text-blue-600 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              We are a team of passionate professionals committed to creating
              impactful solutions. With years of experience and a love for
              technology and design, we strive to bring your ideas to life.
            </p>

            {/* Profile Section */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="card w-64 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src="https://placeimg.com/200/200/people"
                    alt="Profile"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">John Doe</h2>
                  <p>Founder & CEO</p>
                  <div className="card-actions">
                    <a
                      href="mailto:john@example.com"
                      className="btn btn-primary btn-sm"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-64 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src="https://placeimg.com/200/200/people"
                    alt="Profile"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Jane Smith</h2>
                  <p>Lead Developer</p>
                  <div className="card-actions">
                    <a
                      href="mailto:jane@example.com"
                      className="btn btn-primary btn-sm"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
