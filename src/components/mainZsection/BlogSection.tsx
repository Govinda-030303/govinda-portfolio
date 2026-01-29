const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Spring Boot",
      excerpt:
        "Explore best practices for designing and implementing microservices architecture using Spring Boot, including service discovery, API gateway patterns, and distributed tracing.",
      category: "Backend Engineering",
      tags: ["Spring Boot", "Microservices", "Java"],
      link: "https://dev.to/ayshriv/building-scalable-microservices-with-java-spring-boot-best-practices-and-techniques-part-1-1da3",
    },
    {
      title: "AI Integration in Modern Web Applications",
      excerpt:
        "A practical guide to integrating AI into web applications, covering machine learning models, NLP, APIs, and real-world implementation strategies.",
      category: "AI / Machine Learning",
      tags: ["AI", "Machine Learning", "Integration"],
      link: "https://medium.com/tech-and-tricks/integrating-ai-with-web-applications-opportunities-challenges-8f0ee3d81b1c",
    },
    {
      title: "React Native vs Kotlin Multiplatform",
      excerpt:
        "An in-depth comparison of React Native and Kotlin Multiplatform for cross-platform mobile development based on real-world performance and scalability.",
      category: "Mobile Development",
      tags: ["React Native", "Kotlin", "Cross-Platform"],
      link: "https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-react-native.html#frequently-asked-questions",
    },
  ];

  return (
    <section id="blog" className="px-6 py-20 text-gray-800">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Technical <span className="text-[#14b8a5]">Blog</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 text-lg">
          Deep dives, practical guides, and real-world engineering insights
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white/60
                       hover:border-[#14b8a5]/50 hover:shadow-xl transition-all duration-300"
          >
            {/* Category */}
            <span className="text-xs font-semibold uppercase tracking-wide text-[#14b8a5] mb-2">
              {post.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#14b8a5] transition">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {post.excerpt}
            </p>

            {/* Topics / Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Topics Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#14b8a5]/10 text-[#14b8a5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#14b8a5]
                         hover:gap-3 transition-all"
            >
              Read Article
              <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
