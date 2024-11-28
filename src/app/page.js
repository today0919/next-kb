import Image from "next/image";

export default function Home() {
  return (
  <div>
    <section>
      <div>
        <div className="text-[15vw] font-black"> thinK Great </div>

        <div className="relative">
        < Image src="/images/intro1.avif" alt="빌딩사진"
        width={1300} height={1300} className="w-full h-[500px] object-cover" />
        
        {/* left-5는 곱셉으로 4배한 값이다 */}
          <div className="absolute left-5 bottom-10 flex flex-col gap-2"> 
            <span className="text-white text-lg font-black">KG그룹</span>
            <strong className="text-white text-3xl font-bold">
            KG그룹광고 <br /> 드디어 TV방송에서 <br /> 만나다.</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
