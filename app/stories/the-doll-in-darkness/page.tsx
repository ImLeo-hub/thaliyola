import Image from "next/image";

export default function TheDollInDarkness() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center text-yellow-500">
          The Doll in Darkness
        </h1>

        {/* Tagline */}
        <p className="text-center italic text-gray-300 mt-4 text-lg">
          "Not every voice that speaks belongs to the living."
        </p>

        {/* Author */}
        <p className="text-center mt-3 text-gray-400">
          Author: <span className="text-white">LEO</span>
        </p>


        {/* Cover Image */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/the-doll-in-darkness-cover.png"
            alt="The Doll in Darkness"
            width={600}
            height={900}
            className="rounded-lg shadow-2xl"
          />
        </div>


        {/* Chapter */}
        <div className="mt-12">

          <h2 className="text-3xl font-semibold text-yellow-400">
            Chapter 1
          </h2>

          <h3 className="text-2xl mt-2">
            The Return
          </h3>


          <div className="mt-8 text-gray-200 leading-8 text-lg">

            <p>
              പൂനെയിലെ തിരക്കേറിയ നഗരജീവിതം അനന്യയെ പതിയെ മടുത്തിരുന്നു.
            </p>

            <p className="mt-5">
              ഒരിക്കൽ ഒരുപാട് സ്വപ്നങ്ങളുമായി എത്തിയ നഗരം.
              പക്ഷേ വർഷങ്ങൾ കഴിഞ്ഞപ്പോൾ അതേ നഗരം അവൾക്ക് ഒരു യന്ത്രം പോലെ തോന്നിത്തുടങ്ങി.
            </p>

            <p className="mt-5">
              വർഷങ്ങൾക്ക് ശേഷം അവൾ സ്വന്തം നാട്ടിലേക്ക് മടങ്ങാൻ തീരുമാനിച്ചു.
              പഴയ തറവാടും മുത്തശ്ശിയും അവളെ കാത്തിരുന്നു.
            </p>

          </div>

        </div>


        {/* Button */}
        <div className="mt-12 text-center">

          <button className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
            Continue Reading Chapter 2 →
          </button>

        </div>


      </div>

    </main>
  );
}