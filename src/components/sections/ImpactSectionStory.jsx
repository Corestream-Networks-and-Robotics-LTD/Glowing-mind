
import { useEffect, useRef, useState } from "react";
import impactImage from "../../assets/images/impact.jpg"; 

export default function ImpactStorySection() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        
        <div
          className={`transition-all duration-1000
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <img
            src={impactImage}
            alt="GMI Impact"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        
        <div
          className={`transition-all duration-1000 delay-200
          ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
            Developing Communities Through Youth Empowerment
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            In a groundbreaking effort to uplift communities and foster youth
            empowerment, <strong>Glowing Minds Initiatives NGO</strong> has
            successfully impacted the lives of <strong>2,000 beneficiaries</strong>
            across four states.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            This noble endeavor reflects our commitment to creating positive
            change by investing in the potential of young individuals through
            education, vocational training, mentorship, and entrepreneurship
            development.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Our programs are designed to enhance skills, expand opportunities,
            and build resilient communities — ensuring sustainable development
            and long-term impact.
          </p>

          <a
            href="/about"
            className="inline-block bg-blue-950 text-white px-6 py-3 rounded-md
            hover:bg-opacity-90 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
