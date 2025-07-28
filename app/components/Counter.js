  import React from 'react'
  import Image from 'next/image';
 const Counter = ({
	title,
    ImageArray
 }) => {
  return (
    <section className="pb-5 md:pb-10 2xl:pb-[100px]">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:gap-8 p-6 md:p-10 2xl:p-16 bg-background rounded-lg md:rounded-[32px]">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 ">
            {ImageArray.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border border-black border-opacity-10 p-6 gap-4 counter-block rounded-[20px]"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.protance_zahlenImage.url}
                    alt={item.IconTitle || "counter Image"}
                    width={40}
                    height={40}
                  />
                  <span className="font-light inline-block">{item.title}</span>
                </div>
                <span className="text-[50px] font-semibold font-Josefin block leading-tight">
                  {item.subtitle}
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description.root.children[0].children[0].text,
                  }}
                >
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter