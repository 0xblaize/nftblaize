import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center px-6">
      <div
        className="w-full max-w-5xl flex flex-col items-start text-left ml-15"
        style={{ marginTop: 80 }}
      >
        {/* Arrow + Heading side by side */}
        <div className="flex items-center justify-center">
          <Image
            src="/arrow.png"
            alt="Arrow"
            width={100}
            height={100}
            style={{ marginLeft: 90 }}
          />
          <h1 className="font-bold text-white -mt-9">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              NFT BLAIZE
            </span>
          </h1>
        </div>

        {/* Image + Tagline side by side */}
        <div className="flex flex-col md:flex-row items-center justify-center text-left mr-10">
          {/* Profile Image with gradient border */}
          <div className="w-40 h-40 rounded-full p-[4px] bg-gradient-to-r from-[#763CAC] to-[#320F85] shadow-[0_0_80px_20px_rgba(118,60,172,0.7),0_0_100px_25px_rgba(50,15,133,0.5)]">
            <Image
              src="/pfp.jpg"
              alt="NFT BLAIZE character"
              width={200}
              height={200}
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          {/* Tagline */}
          <div className="p-6 md:p-10" style={{ paddingTop: "0px" }}>
            <p className="text-xs text-gray-300">A Developer</p>
            <div>
              <h2 className="text-3xl">
                with a keen
                <br />
                eye for{" "}
                <span className="text-[#7127BA] underline">design</span>...
              </h2>

              <p className="text-sm">
                Because if the UI doesn&apos;t impress you, the code won&apos;t
                either
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
