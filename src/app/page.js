import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="pb-96 flex flex-col gap-4">
    <section>
      <div className="container">
        <div className="text-[13vw] font-black"> thinK Great </div>
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

    <section>
      <div className="container">
        <ul>
          <li>
            <Link href="#" className="flex flex-col gap-3">
            < Image src="/images/media1.avif" alt=""width={1300} height={1300}
            className="w-full aspect-video object-cover"/>

            <div>
              <span className="text-purple-500 text-md font-medium">소셜미디어</span>
              <span className="text-gray-300 text-md font-light">  • kg그룹</span>
              <br />
              <strong className="text-xl font-bold">소통과 화합의 현장! KG모빌리티 파트너스 데이</strong>
            </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="text-2xl font-bold flex flex-col gap-3">
          <Link href="#"> 곽재선의 창 <ChevronRight /> </Link>
        </h2>
        <div>
        </div>
      </div>
    </section>
    
  </div>
  );
}
