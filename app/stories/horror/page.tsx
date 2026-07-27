import Link from "next/link";

export default function HorrorPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">

      <div className="max-w-6xl mx-auto">


        {/* BACK BUTTON */}

        <Link
          href="/stories"
          className="text-gray-400 hover:text-[#F5D76E] transition"
        >
          ← Back
        </Link>



        {/* TITLE */}

        <h1
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#F5D76E]
          text-center
          mt-10
          mb-12
          "
        >
          Horror Stories
        </h1>




        {/* STORY CARD */}

        <Link href="/stories/horror/the-doll-in-darkness">


          <div
            className="
            max-w-sm
            bg-[#111]
            border
            border-white/10
            rounded-xl
            overflow-hidden
            hover:border-[#F5D76E]
            transition
            "
          >


            <img
              src="/images/the-doll-in-darkness-cover.png"
              alt="The Doll in Darkness"
              className="
              w-full
              h-[420px]
              object-cover
              "
            />


            <div className="p-6">


              <h2
                className="
                text-2xl
                font-bold
                text-[#F5D76E]
                "
              >
                The Doll in Darkness
              </h2>



              <p className="text-gray-400 italic mt-3">
                "Not every voice that speaks belongs to the living."
              </p>



              <p className="text-gray-500 mt-4">
                Author: <span className="text-white">LEO</span>
              </p>


            </div>


          </div>


        </Link>


      </div>

    </main>
  );
}