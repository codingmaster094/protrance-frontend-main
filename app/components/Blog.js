"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({title ,  AllPostDetails }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(AllPostDetails);

  // Filter on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    const filtered = AllPostDetails.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };

  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 mb-8 md:mb-10 lg:mb-20 justify-between text-center items-start md:items-center">
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}
          <form onSubmit={handleSubmit}>
            <div className="flex border border-1 border-[#545454] border-opacity-20 rounded-3xl gap-4 p-2 w-full md:w-[586px] justify-between">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex rounded-md appearance-none placeholder:text-accent indent-2 w-full outline-none"
                placeholder="Wonach suchen Sie?"
              />
              <button
                type="submit"
                className="px-8 py-2 bg-primary-alt rounded-full text-accent1"
                name="Suche"
                aria-label="button"
                role="button"
              >
                Suche
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((item, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="w-full h-[461px] rounded-3xl overflow-hidden flex"
                    aria-label="link"
                  >
                    {item.hero.heroImage.url && (
                      <Image
                        src={item.hero.heroImage.url}
                        alt={item.hero.heroImage.filename}
                        width={1000}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/blog/${item.slug}`}
                      className="hover:text-primary"
                      aria-label="link"
                    >
                      <h3>{item.title}</h3>
                    </Link>
                    {/* <p>
                      {item.content?.root?.children?.[0]?.children?.[0]?.text ||
                        ""}
                    </p> */}
                    <Link
                      href={`/blog/${item.slug}`}
                      className="btn btn-primary-alt self-start"
                    >
                      MEHR LESEN
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">
                Keine Ergebnisse gefunden.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
